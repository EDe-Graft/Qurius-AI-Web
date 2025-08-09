-- Companies table (removed message tracking columns)
CREATE TABLE public.companies (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL UNIQUE,
    widget_key_hash TEXT, -- Bcrypt hashed widget key
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
    last_active TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT
);

-- Indexes for companies table
CREATE INDEX idx_companies_name ON public.companies(name);
CREATE INDEX idx_companies_domain ON public.companies(domain);
CREATE INDEX idx_companies_status ON public.companies(status);
CREATE INDEX IF NOT EXISTS idx_companies_widget_key_hash ON public.companies(widget_key_hash);
CREATE INDEX IF NOT EXISTS idx_companies_widget_key_plan ON public.companies(widget_key_plan);

-- Allow public read access to companies
CREATE POLICY "Allow public read access to companies" ON public.companies
FOR SELECT USING (true);



-- Message Usage Table
CREATE TABLE public.message_usage (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    company_name TEXT,
    message_type VARCHAR(20) NOT NULL, -- 'faq', 'ai', 'limit_reached'
    used_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    session_id VARCHAR(255),
    user_question TEXT,
    ai_response TEXT,
    faq_id UUID REFERENCES faqs(id),
    confidence_score REAL,
    response_source VARCHAR(20), -- 'faq', 'ai', 'limit_reached'
    fallback_reason TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for message usage
CREATE INDEX idx_message_usage_company_id ON message_usage(company_id);
CREATE INDEX idx_message_usage_used_at ON message_usage(used_at);
CREATE INDEX idx_message_usage_message_type ON message_usage(message_type);
CREATE INDEX idx_message_usage_session_id ON message_usage(session_id);

-- Enable RLS
ALTER TABLE message_usage ENABLE ROW LEVEL SECURITY;

-- RLS Policies for message_usage
CREATE POLICY "Companies can view their own message usage" ON message_usage
  FOR SELECT USING (
    company_id IN (
      SELECT id FROM companies WHERE id = company_id
    )
  );

CREATE POLICY "Service role can insert message usage" ON message_usage
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can read all message usage" ON message_usage
  FOR SELECT USING (true);



-- FAQs table
CREATE TABLE public.faqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid() ON DELETE CASCADE,
    company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    question_embedding extensions.vector(768), -- Use fully qualified vector type
    answer_embedding extensions.vector(768),   -- Use fully qualified vector type
    source VARCHAR(20) DEFAULT 'manual',
    confidence REAL DEFAULT 1.0,
    crawl_session_id UUID REFERENCES crawl_sessions(id),
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

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_widget_analytics_company_id ON widget_analytics(company_id);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_event_type ON widget_analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_timestamp ON widget_analytics(timestamp);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_session_id ON widget_analytics(session_id);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_rating ON widget_analytics(rating);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_response_source ON widget_analytics(response_source);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_language ON widget_analytics(language);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_theme_mode ON widget_analytics(theme_mode);

-- Enable RLS
ALTER TABLE widget_analytics ENABLE ROW LEVEL SECURITY;

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



-- User Ratings Table (for detailed rating analytics)
-- CREATE TABLE IF NOT EXISTS user_ratings (
--   id SERIAL PRIMARY KEY,
--   company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
--   session_id VARCHAR(255),
--   message_id VARCHAR(255), -- To link rating to specific message
--   rating INTEGER NOT NULL, -- 1 for thumbs up, -1 for thumbs down
--   feedback_text TEXT,
--   response_text TEXT, -- The response that was rated
--   response_source VARCHAR(20), -- 'faq' or 'ai'
--   faq_id UUID REFERENCES faqs(id), -- If response came from FAQ
--   confidence_score REAL, -- If from FAQ, the similarity score
--   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
-- );



-- Indexes for user ratings
-- CREATE INDEX IF NOT EXISTS idx_user_ratings_company_id ON user_ratings(company_id);
-- CREATE INDEX IF NOT EXISTS idx_user_ratings_session_id ON user_ratings(session_id);
-- CREATE INDEX IF NOT EXISTS idx_user_ratings_rating ON user_ratings(rating);
-- CREATE INDEX IF NOT EXISTS idx_user_ratings_response_source ON user_ratings(response_source);
-- CREATE INDEX IF NOT EXISTS idx_user_ratings_created_at ON user_ratings(created_at);
-- ALTER TABLE user_ratings ENABLE ROW LEVEL SECURITY;


-- RLS Policies for user_ratings
-- CREATE POLICY "Companies can view their own ratings" ON user_ratings
--   FOR SELECT USING (
--     company_id IN (
--       SELECT id FROM companies WHERE name = current_setting('request.jwt.claims', true)::json->>'company_name'
--     )
--   );

-- CREATE POLICY "Service role can insert ratings" ON user_ratings
--   FOR INSERT WITH CHECK (true);

-- CREATE POLICY "Service role can read all ratings" ON user_ratings
--   FOR SELECT USING (true);



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




-- Function to get current month message count for a company
CREATE OR REPLACE FUNCTION get_current_month_messages(p_company_id UUID)
RETURNS INTEGER AS $$
BEGIN
    RETURN (
        SELECT COUNT(*)
        FROM message_usage
        WHERE company_id = p_company_id
        AND used_at >= DATE_TRUNC('month', CURRENT_DATE)
        AND message_type IN ('faq', 'ai')
    );
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
    FROM companies
    WHERE id = p_company_id;
    
    -- Set message limit based on plan
    CASE company_plan
        WHEN 'free' THEN message_limit := 1;
        WHEN 'starter' THEN message_limit := 2;
        WHEN 'pro' THEN message_limit := 3;
        ELSE message_limit := 1; -- Default to free plan limit
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
    INSERT INTO message_usage (
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
    FROM message_usage
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
    FROM companies
    WHERE id = p_company_id;
    
    IF NOT FOUND THEN
        RETURN; -- Return empty result if company not found
    END IF;
    
    -- Set message limit based on plan
    CASE company_record.plan
        WHEN 'free' THEN message_limit := 500;
        WHEN 'starter' THEN message_limit := 5000;
        WHEN 'pro' THEN message_limit := 100000;
        ELSE message_limit := 1; -- Default to free plan limit
    END CASE;
    
    -- Get current month usage
    SELECT get_current_month_messages(p_company_id) INTO current_usage;
    
    -- Get last message date
    SELECT MAX(used_at) INTO company_record.last_message_date
    FROM message_usage
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