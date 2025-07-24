-- Updated companies table
CREATE TABLE public.companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    domain TEXT UNIQUE,
    description TEXT,
    embedding extensions.vector(768), -- Use fully qualified vector type
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
    session_id UUID, -- Unique identifier for each chat session
    user_query TEXT NOT NULL,
    matched_faq_ids UUID[], -- Array of matched FAQ IDs
    interaction_timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    user_satisfaction SMALLINT, -- Optional rating (1-5)
    source_url TEXT -- URL of the website where chat was embedded
);

-- Indexes for performance
CREATE INDEX idx_faqs_company_id ON public.faqs(company_id);
CREATE INDEX idx_chat_interactions_company_id ON public.chat_interactions(company_id);
CREATE INDEX idx_chat_interactions_session_id ON public.chat_interactions(session_id);

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