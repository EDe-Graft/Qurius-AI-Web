-- Crawler Sessions Table
CREATE TABLE IF NOT EXISTS public.crawl_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    base_url TEXT NOT NULL,
    pages_crawled INTEGER DEFAULT 0,
    content_extracted INTEGER DEFAULT 0,
    faqs_generated INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'running', -- 'running', 'completed', 'failed'
    error_message TEXT,
    crawl_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_crawl_sessions_company_id ON crawl_sessions(company_id);
CREATE INDEX IF NOT EXISTS idx_crawl_sessions_status ON crawl_sessions(status);
CREATE INDEX IF NOT EXISTS idx_crawl_sessions_date ON crawl_sessions(crawl_date);

CREATE INDEX IF NOT EXISTS idx_faqs_source ON faqs(source);
CREATE INDEX IF NOT EXISTS idx_faqs_confidence ON faqs(confidence);

-- RLS Policies for crawl_sessions
ALTER TABLE crawl_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Companies can view their own crawl sessions" ON crawl_sessions
  FOR SELECT USING (company_id IN (
    SELECT id FROM companies WHERE id = company_id
  ));

CREATE POLICY "Service role can manage crawl sessions" ON crawl_sessions
  FOR ALL USING (true);



-- Function to update crawl session status
CREATE OR REPLACE FUNCTION update_crawl_session_status(
    session_id UUID,
    new_status VARCHAR(20),
    error_msg TEXT DEFAULT NULL
)
RETURNS VOID AS $$
BEGIN
    UPDATE crawl_sessions 
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
    FROM crawl_sessions
    WHERE company_id = company_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 