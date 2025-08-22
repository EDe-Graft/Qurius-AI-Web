-- Add content_hash column and constraint to company_content_chunks table
-- Run this script to fix the duplicate content issue

-- Step 1: Add content_hash column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'company_content_chunks' 
                   AND column_name = 'content_hash') THEN
        ALTER TABLE public.company_content_chunks 
        ADD COLUMN content_hash TEXT;
        RAISE NOTICE 'Added content_hash column to company_content_chunks table';
    ELSE
        RAISE NOTICE 'content_hash column already exists';
    END IF;
END $$;

-- Step 2: Create index on content_hash for faster lookups
CREATE INDEX IF NOT EXISTS idx_company_content_chunks_hash 
ON public.company_content_chunks(company_id, content_hash);

-- Step 3: Update existing content_hash values (run this once)
UPDATE public.company_content_chunks 
SET content_hash = encode(sha256(content::bytea), 'hex')
WHERE content_hash IS NULL;

-- Step 4: Add unique constraint to prevent duplicate content chunks
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints 
                   WHERE constraint_name = 'unique_company_content' 
                   AND table_name = 'company_content_chunks') THEN
        ALTER TABLE public.company_content_chunks 
        ADD CONSTRAINT unique_company_content 
        UNIQUE (company_id, content_hash);
        RAISE NOTICE 'Added unique constraint to prevent duplicate content';
    ELSE
        RAISE NOTICE 'Unique constraint already exists';
    END IF;
END $$;

-- Step 5: Show summary of changes
SELECT 
    'company_content_chunks' as table_name,
    COUNT(*) as total_rows,
    COUNT(CASE WHEN content_hash IS NOT NULL THEN 1 END) as rows_with_hash,
    COUNT(CASE WHEN content_hash IS NULL THEN 1 END) as rows_without_hash
FROM public.company_content_chunks; 