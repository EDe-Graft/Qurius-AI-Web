-- Migration script to add CASCADE delete constraints to existing tables
-- Run this script to ensure crawl session deletion cascades to related data

-- Step 1: Add CASCADE constraint to FAQs table
-- First, drop existing constraint if it exists (without CASCADE)
DO $$ 
BEGIN
    -- Check if the foreign key constraint exists
    IF EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'faqs_crawl_session_id_fkey' 
        AND table_name = 'faqs'
    ) THEN
        -- Drop the existing constraint
        ALTER TABLE public.faqs DROP CONSTRAINT faqs_crawl_session_id_fkey;
        RAISE NOTICE 'Dropped existing faqs_crawl_session_id_fkey constraint';
    END IF;
END $$;

-- Add the new constraint with CASCADE
ALTER TABLE public.faqs 
ADD CONSTRAINT faqs_crawl_session_id_fkey 
FOREIGN KEY (crawl_session_id) 
REFERENCES public.crawl_sessions(id) 
ON DELETE CASCADE;

-- Step 2: Add CASCADE constraint to company_content_chunks table
-- First, drop existing constraint if it exists (without CASCADE)
DO $$ 
BEGIN
    -- Check if the foreign key constraint exists
    IF EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'company_content_chunks_crawl_session_id_fkey' 
        AND table_name = 'company_content_chunks'
    ) THEN
        -- Drop the existing constraint
        ALTER TABLE public.company_content_chunks DROP CONSTRAINT company_content_chunks_crawl_session_id_fkey;
        RAISE NOTICE 'Dropped existing company_content_chunks_crawl_session_id_fkey constraint';
    END IF;
END $$;

-- Add the new constraint with CASCADE
ALTER TABLE public.company_content_chunks 
ADD CONSTRAINT company_content_chunks_crawl_session_id_fkey 
FOREIGN KEY (crawl_session_id) 
REFERENCES public.crawl_sessions(id) 
ON DELETE CASCADE;

-- Step 3: Add CASCADE constraint to notifications table
-- First, drop existing constraint if it exists (without CASCADE)
DO $$ 
BEGIN
    -- Check if the foreign key constraint exists
    IF EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'notifications_crawl_session_id_fkey' 
        AND table_name = 'notifications'
    ) THEN
        -- Drop the existing constraint
        ALTER TABLE public.notifications DROP CONSTRAINT notifications_crawl_session_id_fkey;
        RAISE NOTICE 'Dropped existing notifications_crawl_session_id_fkey constraint';
    END IF;
END $$;

-- Add the new constraint with CASCADE
ALTER TABLE public.notifications 
ADD CONSTRAINT notifications_crawl_session_id_fkey 
FOREIGN KEY (crawl_session_id) 
REFERENCES public.crawl_sessions(id) 
ON DELETE CASCADE;

-- Step 4: Verify the constraints were added successfully
SELECT 
    tc.table_name,
    tc.constraint_name,
    tc.constraint_type,
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name,
    rc.delete_rule
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu 
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.referential_constraints rc 
    ON tc.constraint_name = rc.constraint_name
JOIN information_schema.constraint_column_usage ccu 
    ON rc.unique_constraint_name = ccu.constraint_name
WHERE tc.table_name IN ('faqs', 'company_content_chunks', 'notifications')
    AND tc.constraint_type = 'FOREIGN KEY'
    AND kcu.column_name = 'crawl_session_id'
ORDER BY tc.table_name;

-- Success message
SELECT 'CASCADE delete constraints added successfully!' as status; 