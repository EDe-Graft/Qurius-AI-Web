-- Updated companies table with additional fields
CREATE TABLE public.companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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
    embedding extensions.vector(768), -- Use fully qualified vector type
    last_active TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Updated FAQs table
CREATE TABLE public.faqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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

-- Create chat interaction log for analytics
CREATE TABLE public.chat_interactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES public.companies(id),
    conversations INTEGER DEFAULT 0,
    queries INTEGER DEFAULT 0,
    last_interaction_timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
);

-- Indexes for performance
CREATE INDEX idx_faqs_company_id ON public.faqs(company_id);
CREATE INDEX idx_chat_interactions_company_id ON public.chat_interactions(company_id);
CREATE INDEX idx_companies_name ON public.companies(name);
CREATE INDEX idx_companies_domain ON public.companies(domain);
CREATE INDEX idx_companies_status ON public.companies(status);

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