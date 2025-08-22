-- Companies table (removed message tracking columns)
CREATE TABLE companies (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL UNIQUE,
    domain TEXT UNIQUE,
    location TEXT,
    description TEXT,
    industry TEXT,
    website TEXT,
    contact_email TEXT UNIQUE,
    admin_email TEXT UNIQUE, -- Email of the company admin
    logo_url TEXT,
    status TEXT DEFAULT 'active',
    plan TEXT DEFAULT 'free', -- Subscription plan: 'free', 'starter', 'pro'
    theme JSONB NOT NULL DEFAULT '{"primaryColor": "#58c4dc", "backgroundColor": "#F3F4F6", "textColor": "#000000"}',
    widget_key_hash TEXT, -- Bcrypt hashed widget key
    stripe_customer_id TEXT, -- Stripe customer ID
    stripe_subscription_id TEXT, -- Stripe subscription ID
    subscription_status TEXT DEFAULT 'active', -- 'active', 'canceled', 'past_due', 'unpaid'
    subscription_start_date DATE NOT NULL DEFAULT CURRENT_DATE,
    subscription_end_date DATE, -- When subscription expires
    last_active TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for companies table
CREATE INDEX idx_companies_name ON public.companies(name);
CREATE INDEX idx_companies_domain ON public.companies(domain);
CREATE INDEX idx_companies_status ON public.companies(status);
CREATE INDEX IF NOT EXISTS idx_companies_widget_key_hash ON public.companies(widget_key_hash);
CREATE INDEX IF NOT EXISTS idx_companies_plan ON public.companies(plan);

-- Enable Row Level Security for companies table
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;

-- Allow public read access to companies
CREATE POLICY "Allow public read access to companies" ON public.companies
FOR SELECT USING (true);

-- Allow service role to insert companies
CREATE POLICY "Service role can insert companies" ON public.companies
FOR INSERT WITH CHECK (true);

-- Allow service role to update companies
CREATE POLICY "Service role can update companies" ON public.companies
FOR UPDATE USING (true);

-- Allow service role to delete companies
CREATE POLICY "Service role can delete companies" ON public.companies
FOR DELETE USING (true);

-- Email Subscriptions table for newsletter signups
CREATE TABLE public.email_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    first_name TEXT,
    last_name TEXT,
    company_name TEXT,
    source TEXT DEFAULT 'landing_page', -- 'landing_page', 'demo_page', 'admin_added', etc.
    status TEXT DEFAULT 'active', -- 'active', 'unsubscribed', 'bounced'
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    unsubscribed_at TIMESTAMP WITH TIME ZONE,
    last_email_sent TIMESTAMP WITH TIME ZONE,
    email_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for email_subscriptions table
CREATE INDEX idx_email_subscriptions_email ON public.email_subscriptions(email);
CREATE INDEX idx_email_subscriptions_status ON public.email_subscriptions(status);
CREATE INDEX idx_email_subscriptions_subscribed_at ON public.email_subscriptions(subscribed_at);
CREATE INDEX idx_email_subscriptions_source ON public.email_subscriptions(source);

-- Enable Row Level Security for email_subscriptions table
ALTER TABLE public.email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow public read access to email_subscriptions (for admin purposes)
CREATE POLICY "Allow public read access to email_subscriptions" ON public.email_subscriptions
FOR SELECT USING (true);

-- Allow public insert access to email_subscriptions (for signups)
CREATE POLICY "Allow public insert access to email_subscriptions" ON public.email_subscriptions
FOR INSERT WITH CHECK (true);

-- Allow service role to update email_subscriptions
CREATE POLICY "Service role can update email_subscriptions" ON public.email_subscriptions
FOR UPDATE USING (true);

-- Allow service role to delete email_subscriptions
CREATE POLICY "Service role can delete email_subscriptions" ON public.email_subscriptions
FOR DELETE USING (true);


--Create crawl_sessions table first before FAQs table
--Create FAQs table without crawl_session_id column
--Add crawl_session_id column to FAQs table


-- FAQs table
CREATE TABLE public.faqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    question_embedding extensions.vector(768), -- Use fully qualified vector type
    answer_embedding extensions.vector(768),   -- Use fully qualified vector type
    source VARCHAR(20) DEFAULT 'manual',
    confidence REAL DEFAULT 1.0,
    crawl_session_id UUID REFERENCES public.crawl_sessions(id) ON DELETE CASCADE DEFAULT NULL,
    relevance_score REAL DEFAULT 1.0, -- Manually adjustable relevance
    popularity_count INTEGER DEFAULT 0, -- Track how often this FAQ is matched/used
    last_used TIMESTAMP WITH TIME ZONE, -- Track when this FAQ was last used
    question_hash TEXT, -- Hash for duplicate question detection
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_faqs_company_id ON public.faqs(company_id);
CREATE INDEX IF NOT EXISTS idx_faqs_created_at ON public.faqs(created_at);
CREATE INDEX IF NOT EXISTS idx_faqs_question_hash ON public.faqs(question_hash);
-- Composite index for FAQ search optimization
CREATE INDEX IF NOT EXISTS idx_faqs_company_confidence ON public.faqs(company_id, confidence DESC);
CREATE INDEX IF NOT EXISTS idx_faqs_popularity ON public.faqs(company_id, popularity_count DESC, last_used DESC);

CREATE INDEX IF NOT EXISTS idx_faqs_question_embedding ON public.faqs USING ivfflat (question_embedding vector_cosine_ops);
CREATE INDEX IF NOT EXISTS idx_faqs_answer_embedding ON public.faqs USING ivfflat (answer_embedding vector_cosine_ops);

-- Unique constraint to prevent duplicate questions per company
ALTER TABLE public.faqs 
ADD CONSTRAINT unique_company_question 
UNIQUE (company_id, question_hash);

-- Add question_hash column if it doesn't exist (for existing tables)
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'faqs' 
                   AND column_name = 'question_hash') THEN
        ALTER TABLE public.faqs 
        ADD COLUMN question_hash TEXT;
    END IF;
END $$;

-- Update existing question_hash values (run this once)
UPDATE public.faqs 
SET question_hash = encode(sha256(question::bytea), 'hex')
WHERE question_hash IS NULL;

-- Enable Row Level Security
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Companies can view their own FAQs" ON public.faqs
  FOR SELECT USING (company_id IN (
    SELECT id FROM public.companies WHERE id = company_id
  ));

CREATE POLICY "Service role can insert FAQs" ON public.faqs
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can update FAQs" ON public.faqs
  FOR UPDATE USING (true);

CREATE POLICY "Service role can delete FAQs" ON public.faqs
  FOR DELETE USING (true);



-- Widget Analytics Table (Updated with new event types)
CREATE TABLE IF NOT EXISTS public.widget_analytics (
  id SERIAL PRIMARY KEY,
  company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
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
  faq_id UUID REFERENCES public.faqs(id) ON DELETE CASCADE, -- Reference to matched FAQ
  ai_fallback_reason TEXT, -- Reason for AI fallback
  response_source VARCHAR(20), -- 'faq' or 'ai'
  confidence_score REAL, -- Similarity score for FAQ matches
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_widget_analytics_company_id ON public.widget_analytics(company_id);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_event_type ON public.widget_analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_timestamp ON public.widget_analytics(timestamp);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_session_id ON public.widget_analytics(session_id);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_rating ON public.widget_analytics(rating);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_response_source ON public.widget_analytics(response_source);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_language ON public.widget_analytics(language);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_theme_mode ON public.widget_analytics(theme_mode);
-- Index for analytics by company and timestamp (for efficient time-based queries)
CREATE INDEX IF NOT EXISTS idx_widget_analytics_company_timestamp ON public.widget_analytics(company_id, timestamp);

-- Enable RLS
ALTER TABLE public.widget_analytics ENABLE ROW LEVEL SECURITY;

-- RLS Policies for widget_analytics
CREATE POLICY "Companies can view their own analytics" ON public.widget_analytics
  FOR SELECT USING (
    company_id IN (
      SELECT id FROM public.companies WHERE name = current_setting('request.jwt.claims', true)::json->>'company_name'
    )
  );

CREATE POLICY "Service role can insert analytics" ON public.widget_analytics
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can update analytics" ON public.widget_analytics
  FOR UPDATE USING (true);

-- Allow service role to read all analytics (for admin dashboard)
CREATE POLICY "Service role can read all analytics" ON public.widget_analytics
  FOR SELECT USING (true);


-- Message Usage Table
CREATE TABLE public.message_usage (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
    company_name TEXT,
    message_type VARCHAR(20) NOT NULL, -- 'faq', 'ai', 'limit_reached'
    used_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    session_id VARCHAR(255),
    user_question TEXT,
    ai_response TEXT,
    faq_id UUID REFERENCES public.faqs(id) ON DELETE CASCADE,
    confidence_score REAL,
    response_source VARCHAR(20), -- 'faq', 'ai', 'limit_reached'
    fallback_reason TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for message usage
CREATE INDEX idx_message_usage_company_id ON public.message_usage(company_id);
CREATE INDEX idx_message_usage_used_at ON public.message_usage(used_at);
CREATE INDEX idx_message_usage_message_type ON public.message_usage(message_type);
CREATE INDEX idx_message_usage_session_id ON public.message_usage(session_id);
-- Index for message usage by company and date (for efficient monthly queries)
CREATE INDEX IF NOT EXISTS idx_message_usage_company_date ON public.message_usage(company_id, used_at);

-- Enable RLS
ALTER TABLE public.message_usage ENABLE ROW LEVEL SECURITY;

-- RLS Policies for message_usage
CREATE POLICY "Companies can view their own message usage" ON public.message_usage
  FOR SELECT USING (
    company_id IN (
      SELECT id FROM public.companies WHERE id = company_id
    )
  );

CREATE POLICY "Service role can insert message usage" ON public.message_usage
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can read all message usage" ON public.message_usage
  FOR SELECT USING (true);


-- Company Content Chunks Table (Complete Definition)
CREATE TABLE public.company_content_chunks (
  id SERIAL PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  company_name TEXT,
  crawl_session_id UUID REFERENCES crawl_sessions(id) ON DELETE CASCADE DEFAULT NULL,
  content TEXT NOT NULL,
  content_hash TEXT NOT NULL, -- SHA256 hash for duplicate detection
  embedding vector(768), -- Jina embedding dimension
  source VARCHAR(50) DEFAULT 'web_scraped',
  chunk_index INTEGER,
  content_type VARCHAR(50), -- 'main_content', 'section', 'paragraph', 'heading_with_context', 'list_item', 'document_section', 'fallback_text'
  priority VARCHAR(20) DEFAULT 'medium', -- 'high', 'medium', 'low'
  source_url TEXT, -- URL where this content was found
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Primary indexes for performance
CREATE INDEX IF NOT EXISTS idx_company_content_chunks_company_id ON public.company_content_chunks(company_id);
CREATE INDEX IF NOT EXISTS idx_company_content_chunks_content_hash ON public.company_content_chunks(content_hash);
CREATE INDEX IF NOT EXISTS idx_company_content_chunks_created_at ON public.company_content_chunks(created_at);

-- Secondary indexes for filtering and sorting
CREATE INDEX IF NOT EXISTS idx_company_content_chunks_source ON public.company_content_chunks(source);
CREATE INDEX IF NOT EXISTS idx_company_content_chunks_chunk_index ON public.company_content_chunks(chunk_index);
CREATE INDEX IF NOT EXISTS idx_company_content_chunks_content_type ON public.company_content_chunks(content_type);
CREATE INDEX IF NOT EXISTS idx_company_content_chunks_priority ON public.company_content_chunks(priority);
CREATE INDEX IF NOT EXISTS idx_company_content_chunks_crawl_session_id ON public.company_content_chunks(crawl_session_id);

-- Composite indexes for optimized queries
CREATE INDEX IF NOT EXISTS idx_content_chunks_company_source ON public.company_content_chunks(company_id, source);
CREATE INDEX IF NOT EXISTS idx_content_chunks_company_priority ON public.company_content_chunks(company_id, priority);
CREATE INDEX IF NOT EXISTS idx_content_chunks_company_type ON public.company_content_chunks(company_id, content_type);
CREATE INDEX IF NOT EXISTS idx_content_chunks_company_hash ON public.company_content_chunks(company_id, content_hash);

-- Vector index for embedding similarity search (crucial for RAG performance)
CREATE INDEX IF NOT EXISTS idx_content_chunks_embedding ON public.company_content_chunks USING ivfflat (embedding vector_cosine_ops);

-- Unique constraint to prevent duplicate content for the same company
ALTER TABLE public.company_content_chunks 
ADD CONSTRAINT unique_company_content 
UNIQUE (company_id, content_hash);

-- Enable Row Level Security
ALTER TABLE public.company_content_chunks ENABLE ROW LEVEL SECURITY;

-- RLS Policies for company_content_chunks
CREATE POLICY "Companies can view their own content chunks" ON public.company_content_chunks
  FOR SELECT USING (
    company_id IN (
      SELECT id FROM public.companies WHERE id = company_id
    )
  );

CREATE POLICY "Service role can insert content chunks" ON public.company_content_chunks
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can update content chunks" ON public.company_content_chunks
  FOR UPDATE USING (true);

CREATE POLICY "Service role can delete content chunks" ON public.company_content_chunks
  FOR DELETE USING (true);


-- ========================================
-- FUNCTIONS
-- ========================================

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

-- Function to find relevant content chunks using embeddings with priority filtering
CREATE OR REPLACE FUNCTION find_relevant_content_chunks(
    p_company_id UUID, 
    p_query_embedding extensions.vector(768),
    p_top_k INTEGER DEFAULT 3,
    p_priority VARCHAR(20) DEFAULT NULL
) RETURNS TABLE (
    chunk_id INTEGER, 
    content TEXT, 
    similarity REAL,
    content_type VARCHAR(50),
    priority VARCHAR(20),
    source_url TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        ccc.id::INTEGER as chunk_id, 
        ccc.content::TEXT, 
        (1 - (ccc.embedding <=> p_query_embedding))::REAL AS similarity,
        ccc.content_type::VARCHAR(50),
        ccc.priority::VARCHAR(20),
        ccc.source_url::TEXT
    FROM public.company_content_chunks ccc
    WHERE ccc.company_id = p_company_id
    AND (p_priority IS NULL OR ccc.priority = p_priority)
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
    FROM public.widget_analytics wa
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






-- Function to get current month message count for a company
CREATE OR REPLACE FUNCTION get_current_month_messages(p_company_id UUID)
RETURNS INTEGER AS $$
BEGIN
    RETURN (
        SELECT COUNT(*)
        FROM public.message_usage
        WHERE company_id = p_company_id
        AND used_at >= DATE_TRUNC('month', CURRENT_DATE)
        AND message_type IN ('faq', 'ai')
    );
END;
$$ LANGUAGE plpgsql;

-- Function to get monthly message usage efficiently
CREATE OR REPLACE FUNCTION get_monthly_message_usage(
    p_company_id UUID,
    p_year INTEGER,
    p_month INTEGER
)
RETURNS TABLE(
    total_messages INTEGER,
    faq_messages INTEGER,
    ai_messages INTEGER,
    limit_reached_count INTEGER
) AS $$
DECLARE
    start_date DATE;
    end_date DATE;
BEGIN
    -- Calculate date range for the specified month
    start_date := MAKE_DATE(p_year, p_month, 1);
    end_date := start_date + INTERVAL '1 month' - INTERVAL '1 day';
    
    RETURN QUERY
    SELECT
        COUNT(*)::INTEGER as total_messages,
        COUNT(CASE WHEN message_type = 'faq' THEN 1 END)::INTEGER as faq_messages,
        COUNT(CASE WHEN message_type = 'ai' THEN 1 END)::INTEGER as ai_messages,
        COUNT(CASE WHEN message_type = 'limit_reached' THEN 1 END)::INTEGER as limit_reached_count
    FROM public.message_usage
    WHERE company_id = p_company_id
    AND used_at >= start_date
    AND used_at <= end_date;
END;
$$ LANGUAGE plpgsql;

-- Function to check if company has reached message limit
CREATE OR REPLACE FUNCTION check_message_limit(p_company_id UUID)
RETURNS TABLE(
    can_send BOOLEAN,
    messages_used INTEGER,
    messages_limit INTEGER,
    messages_remaining INTEGER
) AS $$
DECLARE
    company_plan TEXT;
    current_usage INTEGER;
    message_limit INTEGER;
BEGIN
    -- Get company plan
    SELECT plan INTO company_plan
    FROM public.companies
    WHERE id = p_company_id;
    
    -- Set message limit based on plan
    CASE company_plan
        WHEN 'free' THEN message_limit := 500;
        WHEN 'starter' THEN message_limit := 10000;
        WHEN 'pro' THEN message_limit := 100000;
        ELSE message_limit := 500; -- Default to free plan limit
    END CASE;
    
    -- Get current month usage (only count actual messages, not limit_reached)
    SELECT get_current_month_messages(p_company_id) INTO current_usage;
    
    -- Return results
    RETURN QUERY SELECT
        current_usage < message_limit as can_send,
        current_usage as messages_used,
        message_limit as messages_limit,
        GREATEST(0, message_limit - current_usage) as messages_remaining;
END;
$$ LANGUAGE plpgsql;


-- Function to increment FAQ popularity when matched
CREATE OR REPLACE FUNCTION increment_faq_popularity(p_faq_id UUID)
RETURNS VOID AS $$
BEGIN
    UPDATE public.faqs 
    SET 
        popularity_count = popularity_count + 1,
        last_used = CURRENT_TIMESTAMP
    WHERE id = p_faq_id;
END;
$$ LANGUAGE plpgsql;

-- Function to get popular FAQs for quick questions
CREATE OR REPLACE FUNCTION get_popular_faqs(
    p_company_id UUID,
    p_limit INTEGER DEFAULT 5
) RETURNS TABLE (
    id UUID,
    question TEXT,
    answer TEXT,
    popularity_count INTEGER
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        f.id,
        f.question,
        f.answer,
        f.popularity_count
    FROM public.faqs f
    WHERE f.company_id = p_company_id
    AND f.popularity_count > 0
    ORDER BY f.popularity_count DESC, f.last_used DESC
    LIMIT p_limit;
END;
$$ LANGUAGE plpgsql;

-- Function to get random FAQs when no popular ones exist
CREATE OR REPLACE FUNCTION get_random_faqs(
    p_company_id UUID,
    p_limit INTEGER DEFAULT 5
) RETURNS TABLE (
    id UUID,
    question TEXT,
    answer TEXT,
    popularity_count INTEGER
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        f.id,
        f.question,
        f.answer,
        f.popularity_count
    FROM public.faqs f
    WHERE f.company_id = p_company_id
    ORDER BY RANDOM()
    LIMIT p_limit;
END;
$$ LANGUAGE plpgsql;

-- Function to record message usage
CREATE OR REPLACE FUNCTION record_message_usage(
    p_company_id UUID,
    p_message_type VARCHAR(20),
    p_session_id VARCHAR(255),
    p_user_question TEXT,
    p_ai_response TEXT,
    p_faq_id UUID DEFAULT NULL,
    p_confidence_score REAL DEFAULT NULL,
    p_response_source VARCHAR(20) DEFAULT NULL,
    p_fallback_reason TEXT DEFAULT NULL
)
RETURNS UUID AS $$
DECLARE
    usage_id UUID;
BEGIN
    INSERT INTO public.message_usage (
        company_id,
        message_type,
        session_id,
        user_question,
        ai_response,
        faq_id,
        confidence_score,
        response_source,
        fallback_reason
    ) VALUES (
        p_company_id,
        p_message_type,
        p_session_id,
        p_user_question,
        p_ai_response,
        p_faq_id,
        p_confidence_score,
        p_response_source,
        p_fallback_reason
    ) RETURNING id INTO usage_id;
    
    RETURN usage_id;
END;
$$ LANGUAGE plpgsql;

-- Function to get message usage statistics
CREATE OR REPLACE FUNCTION get_message_usage_stats(
    p_company_id UUID,
    p_start_date DATE DEFAULT NULL,
    p_end_date DATE DEFAULT NULL
)
RETURNS TABLE(
    total_messages INTEGER,
    faq_messages INTEGER,
    ai_messages INTEGER,
    limit_reached_count INTEGER,
    avg_confidence REAL,
    most_common_fallback TEXT,
    usage_by_day JSON
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        COUNT(*)::INTEGER as total_messages,
        COUNT(CASE WHEN message_type = 'faq' THEN 1 END)::INTEGER as faq_messages,
        COUNT(CASE WHEN message_type = 'ai' THEN 1 END)::INTEGER as ai_messages,
        COUNT(CASE WHEN message_type = 'limit_reached' THEN 1 END)::INTEGER as limit_reached_count,
        AVG(confidence_score) as avg_confidence,
        MODE() WITHIN GROUP (ORDER BY fallback_reason) as most_common_fallback,
        json_agg(
            json_build_object(
                'date', DATE(used_at),
                'count', COUNT(*)
            )
        ) as usage_by_day
    FROM public.message_usage
    WHERE company_id = p_company_id
    AND (p_start_date IS NULL OR used_at >= p_start_date)
    AND (p_end_date IS NULL OR used_at <= p_end_date)
    GROUP BY company_id;
END;
$$ LANGUAGE plpgsql;

-- Function to get current message usage details for a company
CREATE OR REPLACE FUNCTION get_company_message_usage(p_company_id UUID)
RETURNS TABLE(
    company_name TEXT,
    plan TEXT,
    messages_used INTEGER,
    messages_limit INTEGER,
    messages_remaining INTEGER,
    can_send BOOLEAN,
    last_message_date TIMESTAMP WITH TIME ZONE,
    contact_email TEXT
) AS $$
DECLARE
    company_record RECORD;
    current_usage INTEGER;
    message_limit INTEGER;
BEGIN
    -- Get company details
    SELECT name, plan, contact_email INTO company_record
    FROM public.companies
    WHERE id = p_company_id;
    
    IF NOT FOUND THEN
        RETURN; -- Return empty result if company not found
    END IF;
    
    -- Set message limit based on plan
    CASE company_record.plan
        WHEN 'free' THEN message_limit := 500;
        WHEN 'starter' THEN message_limit := 10000;
        WHEN 'pro' THEN message_limit := 100000;
        ELSE message_limit := 500; -- Default to free plan limit
    END CASE;
    
    -- Get current month usage
    SELECT get_current_month_messages(p_company_id) INTO current_usage;
    
    -- Get last message date
    SELECT MAX(used_at) INTO company_record.last_message_date
    FROM public.message_usage
    WHERE company_id = p_company_id
    AND message_type IN ('faq', 'ai');
    
    -- Return results
    RETURN QUERY SELECT
        company_record.name as company_name,
        company_record.plan as plan,
        current_usage as messages_used,
        message_limit as messages_limit,
        GREATEST(0, message_limit - current_usage) as messages_remaining,
        current_usage < message_limit as can_send,
        company_record.last_message_date as last_message_date,
        company_record.contact_email as contact_email;
END;
$$ LANGUAGE plpgsql;

-- ========================================
-- SCALABILITY OPTIMIZATIONS
-- ========================================

-- Function to get company stats efficiently (for dashboard)
CREATE OR REPLACE FUNCTION get_company_stats(p_company_id UUID)
RETURNS TABLE(
    total_faqs BIGINT,
    total_content_chunks BIGINT,
    total_analytics BIGINT,
    last_activity TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        (SELECT COUNT(*) FROM faqs WHERE company_id = p_company_id),
        (SELECT COUNT(*) FROM company_content_chunks WHERE company_id = p_company_id),
        (SELECT COUNT(*) FROM widget_analytics WHERE company_id = p_company_id),
        (SELECT MAX(timestamp) FROM widget_analytics WHERE company_id = p_company_id);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_system_stats()
RETURNS TABLE(
    total_companies BIGINT,
    total_faqs BIGINT,
    total_content_chunks BIGINT,
    total_analytics BIGINT,
    active_companies BIGINT,
    avg_faqs_per_company NUMERIC,
    avg_content_chunks_per_company NUMERIC
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*)::BIGINT AS total_companies,
        (SELECT COUNT(*) FROM faqs)::BIGINT,
        (SELECT COUNT(*) FROM company_content_chunks)::BIGINT,
        (SELECT COUNT(*) FROM widget_analytics)::BIGINT,
        (SELECT COUNT(*) FROM companies WHERE status = 'active')::BIGINT,
        COALESCE((
            SELECT ROUND(AVG(faq_count), 2) 
            FROM (
                SELECT company_id, COUNT(*)::NUMERIC as faq_count 
                FROM faqs 
                GROUP BY company_id
            ) faq_stats
        ), 0) AS avg_faqs_per_company,
        COALESCE((
            SELECT ROUND(AVG(chunk_count), 2) 
            FROM (
                SELECT company_id, COUNT(*)::NUMERIC as chunk_count 
                FROM company_content_chunks 
                GROUP BY company_id
            ) chunk_stats
        ), 0) AS avg_content_chunks_per_company;
END;
$$ LANGUAGE plpgsql;


-- Function to clean up old analytics data (for maintenance)
CREATE OR REPLACE FUNCTION cleanup_old_analytics(p_months_to_keep INTEGER DEFAULT 12)
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    DELETE FROM widget_analytics 
    WHERE timestamp < NOW() - INTERVAL '1 month' * p_months_to_keep;
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Function to clean up old message usage data (for maintenance)
CREATE OR REPLACE FUNCTION cleanup_old_message_usage(p_months_to_keep INTEGER DEFAULT 12)
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    DELETE FROM message_usage 
    WHERE used_at < NOW() - INTERVAL '1 month' * p_months_to_keep;
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Function to get RAG performance metrics
CREATE OR REPLACE FUNCTION get_rag_performance_metrics(p_company_id UUID DEFAULT NULL)
RETURNS TABLE(
    company_id UUID,
    company_name TEXT,
    total_searches BIGINT,
    faq_matches BIGINT,
    content_matches BIGINT,
    avg_similarity_score NUMERIC,
    avg_response_time_ms NUMERIC
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        wa.company_id,
        c.name as company_name,
        COUNT(*) as total_searches,
        COUNT(CASE WHEN wa.response_source = 'faq' THEN 1 END) as faq_matches,
        COUNT(CASE WHEN wa.response_source = 'ai_with_context' THEN 1 END) as content_matches,
        ROUND(AVG(wa.confidence_score), 3) as avg_similarity_score,
        ROUND(AVG(EXTRACT(EPOCH FROM (wa.timestamp - LAG(wa.timestamp) OVER (PARTITION BY wa.session_id ORDER BY wa.timestamp))) * 1000), 2) as avg_response_time_ms
    FROM widget_analytics wa
    JOIN companies c ON wa.company_id = c.id
    WHERE wa.event_type = 'message_received'
    AND (p_company_id IS NULL OR wa.company_id = p_company_id)
    GROUP BY wa.company_id, c.name
    ORDER BY total_searches DESC;
END;
$$ LANGUAGE plpgsql;




-- ========================================
-- PERFORMANCE MONITORING
-- ========================================

-- Function to get slow queries (requires pg_stat_statements extension)
-- Uncomment if you have pg_stat_statements enabled

CREATE OR REPLACE FUNCTION get_slow_queries(p_limit INTEGER DEFAULT 10)
RETURNS TABLE(
    query TEXT,
    calls BIGINT,
    total_time NUMERIC,
    mean_time NUMERIC,
    rows BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        query,
        calls,
        total_time,
        mean_time,
        rows
    FROM pg_stat_statements
    ORDER BY mean_time DESC
    LIMIT p_limit;
END;
$$ LANGUAGE plpgsql;


-- Function to get table sizes and row counts
CREATE OR REPLACE FUNCTION get_table_sizes()
RETURNS TABLE(
    table_name TEXT,
    row_count BIGINT,
    table_size TEXT,
    index_size TEXT,
    total_size TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        schemaname||'.'||tablename as table_name,
        n_tup_ins + n_tup_upd + n_tup_del as row_count,
        pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as table_size,
        pg_size_pretty(pg_indexes_size(schemaname||'.'||tablename)) as index_size,
        pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename) + pg_indexes_size(schemaname||'.'||tablename)) as total_size
    FROM pg_stat_user_tables
    WHERE schemaname = 'public'
    ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
END;
$$ LANGUAGE plpgsql;

-- Notifications Table for Persistent Notifications
CREATE TABLE public.notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'faq_approval', 'crawl_completion', 'error', 'info'
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    crawl_session_id UUID REFERENCES public.crawl_sessions(id) ON DELETE CASCADE,
    read_status BOOLEAN DEFAULT FALSE,
    action_data JSONB, -- Store additional data for actions (e.g., FAQ count, crawl type)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for notifications table
CREATE INDEX IF NOT EXISTS idx_notifications_company_id ON public.notifications(company_id);
CREATE INDEX IF NOT EXISTS idx_notifications_type ON public.notifications(type);
CREATE INDEX IF NOT EXISTS idx_notifications_read_status ON public.notifications(read_status);
CREATE INDEX IF NOT EXISTS idx_notifications_created_at ON public.notifications(created_at);
CREATE INDEX IF NOT EXISTS idx_notifications_crawl_session_id ON public.notifications(crawl_session_id);

-- Composite index for efficient queries
CREATE INDEX IF NOT EXISTS idx_notifications_company_read ON public.notifications(company_id, read_status);
CREATE INDEX IF NOT EXISTS idx_notifications_company_type ON public.notifications(company_id, type);

-- Enable Row Level Security
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for notifications
CREATE POLICY "Companies can view their own notifications" ON public.notifications
  FOR SELECT USING (
    company_id IN (
      SELECT id FROM public.companies WHERE id = company_id
    )
  );

CREATE POLICY "Service role can insert notifications" ON public.notifications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can update notifications" ON public.notifications
  FOR UPDATE USING (true);

CREATE POLICY "Service role can delete notifications" ON public.notifications
  FOR DELETE USING (true);

-- Function to get unread notifications count for a company
CREATE OR REPLACE FUNCTION get_unread_notifications_count(p_company_id UUID)
RETURNS INTEGER AS $$
BEGIN
    RETURN (
        SELECT COUNT(*)
        FROM public.notifications
        WHERE company_id = p_company_id
        AND read_status = FALSE
    );
END;
$$ LANGUAGE plpgsql;

-- Function to get notifications for a company
CREATE OR REPLACE FUNCTION get_company_notifications(
    p_company_id UUID,
    p_limit INTEGER DEFAULT 50,
    p_offset INTEGER DEFAULT 0
)
RETURNS TABLE(
    id UUID,
    company_id UUID,
    company_name TEXT,
    type VARCHAR(50),
    title TEXT,
    message TEXT,
    crawl_session_id UUID,
    read_status BOOLEAN,
    action_data JSONB,
    created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        n.id,
        n.company_id,
        n.company_name,
        n.type,
        n.title,
        n.message,
        n.crawl_session_id,
        n.read_status,
        n.action_data,
        n.created_at
    FROM public.notifications n
    WHERE n.company_id = p_company_id
    ORDER BY n.created_at DESC
    LIMIT p_limit
    OFFSET p_offset;
END;
$$ LANGUAGE plpgsql;

-- Function to mark notification as read
CREATE OR REPLACE FUNCTION mark_notification_read(p_notification_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    UPDATE public.notifications
    SET read_status = TRUE, updated_at = NOW()
    WHERE id = p_notification_id;
    
    RETURN FOUND;
END;
$$ LANGUAGE plpgsql;

-- Function to mark all notifications as read for a company
CREATE OR REPLACE FUNCTION mark_all_notifications_read(p_company_id UUID)
RETURNS INTEGER AS $$
DECLARE
    updated_count INTEGER;
BEGIN
    UPDATE public.notifications
    SET read_status = TRUE, updated_at = NOW()
    WHERE company_id = p_company_id AND read_status = FALSE;
    
    GET DIAGNOSTICS updated_count = ROW_COUNT;
    RETURN updated_count;
END;
$$ LANGUAGE plpgsql;

-- Function to delete old notifications (7 days)
CREATE OR REPLACE FUNCTION cleanup_old_notifications(p_days_to_keep INTEGER DEFAULT 7)
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    DELETE FROM public.notifications 
    WHERE created_at < NOW() - INTERVAL '1 day' * p_days_to_keep;
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update timestamps
CREATE TRIGGER update_notifications_modtime
BEFORE UPDATE ON public.notifications
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

-- Super Admin Notification Functions

-- Get all notifications for super admin with pagination
CREATE OR REPLACE FUNCTION get_all_notifications(
  p_limit INTEGER DEFAULT 50,
  p_offset INTEGER DEFAULT 0
)
RETURNS TABLE (
  id UUID,
  company_id UUID,
  company_name TEXT,
  type VARCHAR(50),
  title TEXT,
  message TEXT,
  crawl_session_id UUID,
  action_data JSONB,
  read_status BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    n.id,
    n.company_id,
    n.company_name,
    n.type,
    n.title,
    n.message,
    n.crawl_session_id,
    n.action_data,
    n.read_status,
    n.created_at,
    n.updated_at
  FROM public.notifications n
  ORDER BY n.created_at DESC
  LIMIT p_limit
  OFFSET p_offset;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Get total unread count for super admin (optimized)
CREATE OR REPLACE FUNCTION get_total_unread_count()
RETURNS INTEGER AS $$
DECLARE
  count_result INTEGER;
BEGIN
  SELECT COUNT(*) INTO count_result
  FROM public.notifications
  WHERE read_status = FALSE;
  
  RETURN count_result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Get notifications summary for super admin dashboard
CREATE OR REPLACE FUNCTION get_super_admin_notifications_summary()
RETURNS TABLE (
  total_notifications INTEGER,
  unread_count INTEGER,
  recent_notifications JSONB,
  companies_with_notifications INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    (SELECT COUNT(*) FROM public.notifications) as total_notifications,
    (SELECT COUNT(*) FROM public.notifications WHERE read_status = FALSE) as unread_count,
    (SELECT jsonb_agg(
      jsonb_build_object(
        'id', n.id,
        'company_name', n.company_name,
        'type', n.type,
        'title', n.title,
        'created_at', n.created_at,
        'read_status', n.read_status
      )
    ) FROM (
      SELECT * FROM public.notifications 
      ORDER BY created_at DESC 
      LIMIT 10
    ) n) as recent_notifications,
    (SELECT COUNT(DISTINCT company_id) FROM public.notifications) as companies_with_notifications;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ========================================
-- OPTIMIZED FAQ RPC FUNCTIONS
-- ========================================

-- Get company FAQs with pagination and filtering
CREATE OR REPLACE FUNCTION get_company_faqs(
  p_company_id UUID,
  p_limit INTEGER DEFAULT 50,
  p_offset INTEGER DEFAULT 0,
  p_source VARCHAR(50) DEFAULT NULL,
  p_order_by VARCHAR(20) DEFAULT 'created_at',
  p_order_direction VARCHAR(4) DEFAULT 'DESC'
)
RETURNS TABLE (
  id UUID,
  company_id UUID,
  company_name TEXT,
  question TEXT,
  answer TEXT,
  source VARCHAR(50),
  confidence REAL,
  popularity_count INTEGER,
  last_used TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    f.id,
    f.company_id,
    f.company_name,
    f.question,
    f.answer,
    f.source,
    f.confidence,
    f.popularity_count,
    f.last_used,
    f.created_at,
    f.updated_at
  FROM public.faqs f
  WHERE f.company_id = p_company_id
    AND (p_source IS NULL OR f.source = p_source)
  ORDER BY 
    CASE 
      WHEN p_order_by = 'popularity' THEN f.popularity_count
      WHEN p_order_by = 'last_used' THEN EXTRACT(EPOCH FROM f.last_used)
      WHEN p_order_by = 'updated_at' THEN EXTRACT(EPOCH FROM f.updated_at)
      ELSE EXTRACT(EPOCH FROM f.created_at)
    END DESC NULLS LAST,
    f.created_at DESC
  LIMIT p_limit
  OFFSET p_offset;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Get company FAQs count with filtering
CREATE OR REPLACE FUNCTION get_company_faqs_count(
  p_company_id UUID,
  p_source VARCHAR(50) DEFAULT NULL
)
RETURNS INTEGER AS $$
DECLARE
  count_result INTEGER;
BEGIN
  SELECT COUNT(*) INTO count_result
  FROM public.faqs f
  WHERE f.company_id = p_company_id
    AND (p_source IS NULL OR f.source = p_source);
  
  RETURN count_result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Get company FAQs summary statistics
CREATE OR REPLACE FUNCTION get_company_faqs_summary(
  p_company_id UUID
)
RETURNS TABLE (
  total_faqs INTEGER,
  manual_faqs INTEGER,
  ai_generated_faqs INTEGER,
  imported_faqs INTEGER,
  total_popularity INTEGER,
  avg_confidence REAL,
  last_updated TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(*) as total_faqs,
    COUNT(*) FILTER (WHERE source = 'manual') as manual_faqs,
    COUNT(*) FILTER (WHERE source = 'ai_generated') as ai_generated_faqs,
    COUNT(*) FILTER (WHERE source = 'imported') as imported_faqs,
    COALESCE(SUM(popularity_count), 0) as total_popularity,
    COALESCE(AVG(confidence), 0) as avg_confidence,
    MAX(updated_at) as last_updated
  FROM public.faqs
  WHERE company_id = p_company_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;