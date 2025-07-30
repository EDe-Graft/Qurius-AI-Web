-- Updated companies table with additional fields
CREATE TABLE public.companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid() ON DELETE CASCADE,
    name TEXT NOT NULL UNIQUE,
    domain TEXT UNIQUE,
    location TEXT,
    description TEXT,
    theme JSONB NOT NULL DEFAULT '{"primaryColor": "#58c4dc", "backgroundColor": "#F3F4F6", "textColor": "#000000"}',
    industry TEXT,
    website TEXT,
    contact_email TEXT,
    logo_url TEXT,
    enrollment_date DATE NOT NULL DEFAULT CURRENT_DATE,
    status TEXT DEFAULT 'active',
    plan TEXT DEFAULT 'free', -- Subscription plan: 'free', 'starter', 'pro'
    stripe_customer_id TEXT, -- Stripe customer ID
    stripe_subscription_id TEXT, -- Stripe subscription ID
    subscription_status TEXT DEFAULT 'active', -- 'active', 'canceled', 'past_due', 'unpaid'
    subscription_end_date TIMESTAMP WITH TIME ZONE, -- When subscription expires
    embedding extensions.vector(768), -- Use fully qualified vector type
    last_active TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
); 

-- Updated FAQs table
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

-- Create chat interaction log for analytics
CREATE TABLE public.chat_interactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid() ON DELETE CASCADE,
    company_id UUID NOT NULL REFERENCES public.companies(id),
    conversations INTEGER DEFAULT 0,
    queries INTEGER DEFAULT 0,
    last_interaction_timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
);

-- Widget Analytics Table
CREATE TABLE IF NOT EXISTS widget_analytics (
  id SERIAL PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  event_type VARCHAR(50) NOT NULL, -- 'widget_view', 'message_sent', 'message_received', 'widget_opened', 'widget_closed'
  page_url TEXT,
  user_agent TEXT,
  message TEXT,
  response TEXT,
  session_id VARCHAR(255),
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_faqs_company_id ON public.faqs(company_id);
CREATE INDEX idx_chat_interactions_company_id ON public.chat_interactions(company_id);
CREATE INDEX idx_companies_name ON public.companies(name);
CREATE INDEX idx_companies_domain ON public.companies(domain);
CREATE INDEX idx_companies_status ON public.companies(status);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_widget_analytics_company_id ON widget_analytics(company_id);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_event_type ON widget_analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_timestamp ON widget_analytics(timestamp);
CREATE INDEX IF NOT EXISTS idx_widget_analytics_session_id ON widget_analytics(session_id);

-- Enable RLS
ALTER TABLE widget_analytics ENABLE ROW LEVEL SECURITY;

-- RLS Policies
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
-- ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS logo_url TEXT;
-- ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS enrollment_date DATE;
-- ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'active';

-- Alter theme column to JSON type to store theme objects
-- ALTER TABLE public.companies ALTER COLUMN theme TYPE JSON USING theme::JSON;