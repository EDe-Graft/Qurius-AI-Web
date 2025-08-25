
-- Crawl sessions table
CREATE TABLE IF NOT EXISTS crawl_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  base_url TEXT NOT NULL,
  pages_crawled INTEGER DEFAULT 0,
  content_extracted INTEGER DEFAULT 0,
  faqs_generated INTEGER DEFAULT 0,
  status TEXT DEFAULT 'running' CHECK (status IN ('crawling', 'processing_embeddings', 'generating_faqs', 'ready_for_review', 'completed', 'failed')),
  progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  status_details TEXT,
  error_message TEXT,
  crawl_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_date TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ai_faqs_count INTEGER DEFAULT 0,
  ai_generated_faqs JSONB
);

-- Automation: Crawl schedules table
CREATE TABLE IF NOT EXISTS crawl_schedules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  base_url TEXT NOT NULL,
  frequency TEXT NOT NULL CHECK (frequency IN ('daily', 'weekly', 'monthly')),
  next_crawl TIMESTAMP WITH TIME ZONE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  content_change_threshold REAL DEFAULT 0.1, -- 10% change threshold
  max_pages INTEGER DEFAULT 25,
  max_depth INTEGER DEFAULT 1,
  delay_ms INTEGER DEFAULT 1000,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Automation: Content hashes table for change detection
CREATE TABLE IF NOT EXISTS content_hashes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  content_hash TEXT NOT NULL,
  content_length INTEGER,
  last_modified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  crawl_session_id UUID REFERENCES crawl_sessions(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Automation: Configuration table for automation settings
CREATE TABLE IF NOT EXISTS automation_config (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Automation: Analytics table for automation tracking
CREATE TABLE IF NOT EXISTS automation_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  crawl_session_id UUID REFERENCES crawl_sessions(id) ON DELETE CASCADE,
  trigger_type TEXT NOT NULL CHECK (trigger_type IN ('scheduled', 'change_detected', 'manual')),
  content_changes_detected INTEGER DEFAULT 0,
  new_faqs_generated INTEGER DEFAULT 0,
  execution_time_ms INTEGER,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_crawl_sessions_company_id ON crawl_sessions(company_id);
CREATE INDEX IF NOT EXISTS idx_crawl_sessions_status ON crawl_sessions(status);
CREATE INDEX IF NOT EXISTS idx_crawl_sessions_crawl_date ON crawl_sessions(crawl_date);

-- Automation indexes
CREATE INDEX IF NOT EXISTS idx_crawl_schedules_next_crawl ON crawl_schedules(next_crawl);
CREATE INDEX IF NOT EXISTS idx_crawl_schedules_active ON crawl_schedules(is_active);
CREATE INDEX IF NOT EXISTS idx_crawl_schedules_company_id ON crawl_schedules(company_id);
CREATE INDEX IF NOT EXISTS idx_content_hashes_company_url ON content_hashes(company_id, url);
CREATE INDEX IF NOT EXISTS idx_content_hashes_last_modified ON content_hashes(last_modified);
CREATE INDEX IF NOT EXISTS idx_automation_analytics_company_id ON automation_analytics(company_id);
CREATE INDEX IF NOT EXISTS idx_automation_analytics_trigger_type ON automation_analytics(trigger_type);

CREATE INDEX IF NOT EXISTS idx_faqs_source ON public.faqs(source);
CREATE INDEX IF NOT EXISTS idx_faqs_confidence ON public.faqs(confidence);

-- RLS Policies for crawl_sessions
ALTER TABLE public.crawl_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Companies can view their own crawl sessions" ON public.crawl_sessions
  FOR SELECT USING (company_id IN (
    SELECT id FROM companies WHERE id = company_id
  ));

CREATE POLICY "Service role can manage crawl sessions" ON public.crawl_sessions
  FOR ALL USING (true);

-- RLS Policies for automation tables
ALTER TABLE public.crawl_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_hashes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automation_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automation_analytics ENABLE ROW LEVEL SECURITY;

-- Crawl schedules policies
CREATE POLICY "Companies can view their own crawl schedules" ON public.crawl_schedules
  FOR SELECT USING (company_id IN (
    SELECT id FROM companies WHERE id = company_id
  ));

CREATE POLICY "Service role can manage crawl schedules" ON public.crawl_schedules
  FOR ALL USING (true);

-- Content hashes policies
CREATE POLICY "Companies can view their own content hashes" ON public.content_hashes
  FOR SELECT USING (company_id IN (
    SELECT id FROM companies WHERE id = company_id
  ));

CREATE POLICY "Service role can manage content hashes" ON public.content_hashes
  FOR ALL USING (true);

-- Automation config policies (service role only)
CREATE POLICY "Service role can manage automation config" ON public.automation_config
  FOR ALL USING (true);

-- Automation analytics policies
CREATE POLICY "Companies can view their own automation analytics" ON public.automation_analytics
  FOR SELECT USING (company_id IN (
    SELECT id FROM companies WHERE id = company_id
  ));

CREATE POLICY "Service role can manage automation analytics" ON public.automation_analytics
  FOR ALL USING (true);

-- Insert default automation configuration
INSERT INTO automation_config (key, value, description) VALUES
('crawl_settings', '{"max_pages": 25, "max_depth": 1, "delay": 1000}', 'Default crawl settings'),
('schedule_settings', '{"default_frequency": "weekly", "batch_size": 10, "check_interval_minutes": 5}', 'Default schedule settings'),
('notification_settings', '{"email_notifications": true, "webhook_notifications": false}', 'Notification preferences'),
('change_detection', '{"threshold": 0.1, "min_content_length": 100}', 'Content change detection settings')
ON CONFLICT (key) DO NOTHING;

-- Function to update crawl session status
CREATE OR REPLACE FUNCTION update_crawl_session_status(
    session_id UUID,
    new_status VARCHAR(20),
    error_msg TEXT DEFAULT NULL
)
RETURNS VOID AS $$
BEGIN
    UPDATE public.crawl_sessions 
    SET 
        status = new_status,
        error_message = error_msg,
        completed_date = CASE WHEN new_status = 'completed' THEN NOW() ELSE completed_date END
    WHERE id = session_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get crawl statistics
CREATE OR REPLACE FUNCTION get_crawl_statistics(company_uuid UUID)
RETURNS TABLE(
    total_sessions INTEGER,
    successful_sessions INTEGER,
    total_pages_crawled INTEGER,
    total_faqs_generated INTEGER,
    last_crawl_date TIMESTAMP WITH TIME ZONE,
    average_faqs_per_session REAL
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*)::INTEGER as total_sessions,
        COUNT(*) FILTER (WHERE status = 'completed')::INTEGER as successful_sessions,
        COALESCE(SUM(pages_crawled), 0)::INTEGER as total_pages_crawled,
        COALESCE(SUM(faqs_generated), 0)::INTEGER as total_faqs_generated,
        MAX(crawl_date) as last_crawl_date,
        CASE 
            WHEN COUNT(*) > 0 THEN AVG(faqs_generated)::REAL
            ELSE 0::REAL
        END as average_faqs_per_session
    FROM public.crawl_sessions
    WHERE company_id = company_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get automation statistics
CREATE OR REPLACE FUNCTION get_automation_statistics(company_uuid UUID)
RETURNS TABLE(
    total_scheduled_crawls INTEGER,
    successful_automated_crawls INTEGER,
    content_changes_detected INTEGER,
    average_execution_time_ms REAL,
    last_automated_crawl TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*)::INTEGER as total_scheduled_crawls,
        COUNT(*) FILTER (WHERE trigger_type IN ('scheduled', 'change_detected'))::INTEGER as successful_automated_crawls,
        COALESCE(SUM(content_changes_detected), 0)::INTEGER as content_changes_detected,
        CASE 
            WHEN COUNT(*) > 0 THEN AVG(execution_time_ms)::REAL
            ELSE 0::REAL
        END as average_execution_time_ms,
        MAX(created_at) as last_automated_crawl
    FROM public.automation_analytics
    WHERE company_id = company_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get companies due for crawling
CREATE OR REPLACE FUNCTION get_companies_due_for_crawling()
RETURNS TABLE(
    company_id UUID,
    company_name TEXT,
    base_url TEXT,
    schedule_id UUID,
    frequency TEXT,
    next_crawl TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        cs.company_id,
        cs.company_name,
        cs.base_url,
        cs.id as schedule_id,
        cs.frequency,
        cs.next_crawl
    FROM public.crawl_schedules cs
    WHERE cs.is_active = true 
    AND cs.next_crawl <= NOW()
    ORDER BY cs.next_crawl ASC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update next crawl date
CREATE OR REPLACE FUNCTION update_next_crawl_date(
    schedule_id UUID,
    frequency TEXT
)
RETURNS VOID AS $$
BEGIN
    UPDATE public.crawl_schedules 
    SET 
        next_crawl = CASE 
            WHEN frequency = 'daily' THEN NOW() + INTERVAL '1 day'
            WHEN frequency = 'weekly' THEN NOW() + INTERVAL '1 week'
            WHEN frequency = 'monthly' THEN NOW() + INTERVAL '1 month'
            ELSE NOW() + INTERVAL '1 week'
        END,
        updated_at = NOW()
    WHERE id = schedule_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 