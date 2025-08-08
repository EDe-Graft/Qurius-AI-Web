-- Companies table
CREATE TABLE public.companies (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL UNIQUE,
    domain TEXT UNIQUE,
    location TEXT,
    description TEXT,
    theme JSONB NOT NULL DEFAULT '{"primaryColor": "#58c4dc", "backgroundColor": "#F3F4F6", "textColor": "#000000"}',
    industry TEXT,
    website TEXT,
    contact_email TEXT UNIQUE,
    admin_email TEXT UNIQUE, -- Email of the company admin
    logo_url TEXT,
    enrollment_date DATE NOT NULL DEFAULT CURRENT_DATE,
    status TEXT DEFAULT 'active',
    plan TEXT DEFAULT 'free', -- Subscription plan: 'free', 'starter', 'pro'
    stripe_customer_id TEXT, -- Stripe customer ID
    stripe_subscription_id TEXT, -- Stripe subscription ID
    subscription_status TEXT DEFAULT 'active', -- 'active', 'canceled', 'past_due', 'unpaid'
    subscription_end_date TIMESTAMP WITH TIME ZONE, -- When subscription expires
    widget_key_hash TEXT, -- Bcrypt hashed widget key
    embedding extensions.vector(768), -- Use fully qualified vector type
    last_active TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT,
    -- widget_key_plan TEXT DEFAULT 'free' -- Plan type for widget key
);

-- Note: Widget keys are now stored directly in the companies table
-- This simplifies the architecture and reduces API calls

-- FAQs table
CREATE TABLE public.faqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid() ON DELETE CASCADE,
    company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    question_embedding extensions.vector(768), -- Use fully qualified vector type
    answer_embedding extensions.vector(768),   -- Use fully qualified vector type
    tags TEXT[], -- Optional tags for categorization
    relevance_score REAL DEFAULT 1.0, -- Manually adjustable relevance
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_faqs_company_id ON faqs(company_id);
CREATE INDEX IF NOT EXISTS idx_faqs_created_at ON faqs(created_at);

-- Enable Row Level Security
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Companies can view their own FAQs" ON faqs
  FOR SELECT USING (company_id IN (
    SELECT id FROM companies WHERE id = company_id
  ));

CREATE POLICY "Service role can insert FAQs" ON faqs
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can update FAQs" ON faqs
  FOR UPDATE USING (true);

CREATE POLICY "Service role can delete FAQs" ON faqs
  FOR DELETE USING (true);

-- Widget Analytics Table (Updated with new event types)
CREATE TABLE IF NOT EXISTS widget_analytics (
  id SERIAL PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  company_name TEXT,
  event_type VARCHAR(50) NOT NULL, -- 'widget_view', 'message_sent', 'message_received', 'widget_opened', 'widget_closed', 'rating_given', 'language_changed', 'theme_changed', 'faq_matched', 'ai_fallback'
  page_url TEXT,
  user_agent TEXT,
  message TEXT,
  response TEXT,
  session_id VARCHAR(255),
  -- New fields for enhanced analytics
  rating INTEGER, -- 1 for thumbs up, -1 for thumbs down
  feedback_text TEXT, -- Optional feedback from user
  language VARCHAR(10), -- Language code (e.g., 'en', 'es', 'fr')
  theme_mode VARCHAR(10), -- 'light' or 'dark'
  faq_id UUID REFERENCES faqs(id), -- Reference to matched FAQ
  ai_fallback_reason TEXT, -- Reason for AI fallback
  response_source VARCHAR(20), -- 'faq' or 'ai'
  confidence_score REAL, -- Similarity score for FAQ matches
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User Ratings Table (for detailed rating analytics)
CREATE TABLE IF NOT EXISTS user_ratings (
  id SERIAL PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  session_id VARCHAR(255),
  message_id VARCHAR(255), -- To link rating to specific message
  rating INTEGER NOT NULL, -- 1 for thumbs up, -1 for thumbs down
  feedback_text TEXT,
  response_text TEXT, -- The response that was rated
  response_source VARCHAR(20), -- 'faq' or 'ai'
  faq_id UUID REFERENCES faqs(id), -- If response came from FAQ
  confidence_score REAL, -- If from FAQ, the similarity score
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_faqs_company_id ON public.faqs(company_id);
CREATE INDEX idx_chat_interactions_company_id ON public.chat_interactions(company_id);
CREATE INDEX idx_companies_name ON public.companies(name);
CREATE INDEX idx_companies_domain ON public.companies(domain);
CREATE INDEX idx_companies_status ON public.companies(status);

-- Widget key indexes (in companies table)
CREATE INDEX IF NOT EXISTS idx_companies_widget_key_hash ON companies(widget_key_hash);
CREATE INDEX IF NOT EXISTS idx_companies_widget_key_plan ON companies(widget_key_plan);

-- Enhanced indexes for better performance
CREATE INDEX IF NOT EXISTS idx_widget_analytics_company_id ON widget_analytics(company_id);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_event_type ON widget_analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_timestamp ON widget_analytics(timestamp);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_session_id ON widget_analytics(session_id);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_rating ON widget_analytics(rating);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_response_source ON widget_analytics(response_source);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_language ON widget_analytics(language);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_theme_mode ON widget_analytics(theme_mode);

-- Indexes for user ratings
CREATE INDEX IF NOT EXISTS idx_user_ratings_company_id ON user_ratings(company_id);
CREATE INDEX IF NOT EXISTS idx_user_ratings_session_id ON user_ratings(session_id);
CREATE INDEX IF NOT EXISTS idx_user_ratings_rating ON user_ratings(rating);
CREATE INDEX IF NOT EXISTS idx_user_ratings_response_source ON user_ratings(response_source);
CREATE INDEX IF NOT EXISTS idx_user_ratings_created_at ON user_ratings(created_at);

-- Enable RLS
ALTER TABLE widget_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE widget_keys ENABLE ROW LEVEL SECURITY;

-- RLS Policies for widget_analytics
CREATE POLICY "Companies can view their own analytics" ON widget_analytics
  FOR SELECT USING (
    company_id IN (
      SELECT id FROM companies WHERE name = current_setting('request.jwt.claims', true)::json->>'company_name'
    )
  );

CREATE POLICY "Service role can insert analytics" ON widget_analytics
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can update analytics" ON widget_analytics
  FOR UPDATE USING (true);

-- Allow service role to read all analytics (for admin dashboard)
CREATE POLICY "Service role can read all analytics" ON widget_analytics
  FOR SELECT USING (true);

-- RLS Policies for user_ratings
CREATE POLICY "Companies can view their own ratings" ON user_ratings
  FOR SELECT USING (
    company_id IN (
      SELECT id FROM companies WHERE name = current_setting('request.jwt.claims', true)::json->>'company_name'
    )
  );

CREATE POLICY "Service role can insert ratings" ON user_ratings
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can read all ratings" ON user_ratings
  FOR SELECT USING (true);

-- Note: Widget key policies are handled through the companies table policies

-- Note: Widget key generation and validation is now handled in server.js using bcrypt
-- This provides better security and simpler implementation

-- Updated find_relevant_faqs function
CREATE OR REPLACE FUNCTION find_relevant_faqs(
    p_company_id UUID, 
    p_query TEXT, 
    p_query_embedding extensions.vector(768), -- Use fully qualified vector type
    p_top_k INTEGER DEFAULT 3
) RETURNS TABLE (
    faq_id UUID, 
    question TEXT, 
    answer TEXT, 
    similarity REAL
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        f.id::UUID as faq_id, 
        f.question::TEXT, 
        f.answer::TEXT, 
        (1 - (f.question_embedding <=> p_query_embedding))::REAL AS similarity
    FROM public.faqs f
    WHERE f.company_id = p_company_id
    ORDER BY similarity DESC
    LIMIT p_top_k;
END;
$$ LANGUAGE plpgsql;

-- Function to get analytics summary with new metrics
CREATE OR REPLACE FUNCTION get_analytics_summary(
    p_company_id UUID,
    p_start_date TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    p_end_date TIMESTAMP WITH TIME ZONE DEFAULT NULL
) RETURNS TABLE (
    total_views INTEGER,
    total_interactions INTEGER,
    total_messages INTEGER,
    total_responses INTEGER,
    unique_sessions INTEGER,
    total_ratings INTEGER,
    positive_ratings INTEGER,
    negative_ratings INTEGER,
    avg_rating DOUBLE PRECISION,
    faq_match_rate DOUBLE PRECISION,
    ai_fallback_rate DOUBLE PRECISION,
    language_changes INTEGER,
    theme_changes INTEGER,
    last_activity TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(CASE WHEN wa.event_type = 'widget_view' THEN 1 END)::INTEGER as total_views,
        COUNT(CASE WHEN wa.event_type IN ('message_sent', 'message_received', 'widget_opened', 'widget_closed') THEN 1 END)::INTEGER as total_interactions,
        COUNT(CASE WHEN wa.event_type = 'message_sent' THEN 1 END)::INTEGER as total_messages,
        COUNT(CASE WHEN wa.event_type = 'message_received' THEN 1 END)::INTEGER as total_responses,
        COUNT(DISTINCT wa.session_id)::INTEGER as unique_sessions,
        COUNT(CASE WHEN wa.event_type = 'rating_given' THEN 1 END)::INTEGER as total_ratings,
        COUNT(CASE WHEN wa.event_type = 'rating_given' AND wa.rating = 1 THEN 1 END)::INTEGER as positive_ratings,
        COUNT(CASE WHEN wa.event_type = 'rating_given' AND wa.rating = -1 THEN 1 END)::INTEGER as negative_ratings,
        CASE 
            WHEN COUNT(CASE WHEN wa.event_type = 'rating_given' THEN 1 END) > 0 
            THEN (COUNT(CASE WHEN wa.event_type = 'rating_given' AND wa.rating = 1 THEN 1 END)::DOUBLE PRECISION / COUNT(CASE WHEN wa.event_type = 'rating_given' THEN 1 END)::DOUBLE PRECISION) * 100
            ELSE 0 
        END as avg_rating,
        CASE 
            WHEN COUNT(CASE WHEN wa.event_type = 'message_received' THEN 1 END) > 0 
            THEN (COUNT(CASE WHEN wa.event_type = 'message_received' AND wa.response_source = 'faq' THEN 1 END)::DOUBLE PRECISION / COUNT(CASE WHEN wa.event_type = 'message_received' THEN 1 END)::DOUBLE PRECISION) * 100
            ELSE 0 
        END as faq_match_rate,
        CASE 
            WHEN COUNT(CASE WHEN wa.event_type = 'message_received' THEN 1 END) > 0 
            THEN 100 - (COUNT(CASE WHEN wa.event_type = 'message_received' AND wa.response_source = 'faq' THEN 1 END)::DOUBLE PRECISION / COUNT(CASE WHEN wa.event_type = 'message_received' THEN 1 END)::DOUBLE PRECISION) * 100
            ELSE 0 
        END as ai_fallback_rate,
        COUNT(CASE WHEN wa.event_type = 'language_changed' THEN 1 END)::INTEGER as language_changes,
        COUNT(CASE WHEN wa.event_type = 'theme_changed' THEN 1 END)::INTEGER as theme_changes,
        MAX(wa.timestamp) as last_activity
    FROM widget_analytics wa
    WHERE wa.company_id = p_company_id
    AND (p_start_date IS NULL OR wa.timestamp >= p_start_date)
    AND (p_end_date IS NULL OR wa.timestamp <= p_end_date);
END;
$$ LANGUAGE plpgsql;

-- Trigger to update timestamps
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_companies_modtime
BEFORE UPDATE ON public.companies
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_faqs_modtime
BEFORE UPDATE ON public.faqs
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_widget_keys_modtime
BEFORE UPDATE ON public.widget_keys
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

-- Allow public read access to companies
CREATE POLICY "Allow public read access to companies" ON companies
FOR SELECT USING (true);

-- Allow public read access to FAQs
CREATE POLICY "Allow public read access to FAQs" ON faqs
FOR SELECT USING (true);

-- Only allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated users to manage FAQs" ON faqs
FOR ALL USING (auth.role() = 'authenticated');

-- If you need to add these columns to an existing table, use these ALTER statements:
-- ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS location TEXT;
-- ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS industry TEXT;
-- ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS website TEXT;
-- ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS contact_email TEXT;
-- ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS admin_email TEXT;
-- ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS logo_url TEXT;
-- ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS enrollment_date DATE;
-- ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'active';

-- Alter theme column to JSON type to store theme objects
-- ALTER TABLE public.companies ALTER COLUMN theme TYPE JSON USING theme::JSON;

-- Add new columns to existing widget_analytics table (run these if table already exists)
-- ALTER TABLE widget_analytics ADD COLUMN IF NOT EXISTS rating INTEGER;
-- ALTER TABLE widget_analytics ADD COLUMN IF NOT EXISTS feedback_text TEXT;
-- ALTER TABLE widget_analytics ADD COLUMN IF NOT EXISTS language VARCHAR(10);
-- ALTER TABLE widget_analytics ADD COLUMN IF NOT EXISTS theme_mode VARCHAR(10);
-- ALTER TABLE widget_analytics ADD COLUMN IF NOT EXISTS faq_id UUID REFERENCES faqs(id);
-- ALTER TABLE widget_analytics ADD COLUMN IF NOT EXISTS ai_fallback_reason TEXT;
-- ALTER TABLE widget_analytics ADD COLUMN IF NOT EXISTS response_source VARCHAR(20);
-- ALTER TABLE widget_analytics ADD COLUMN IF NOT EXISTS confidence_score REAL;