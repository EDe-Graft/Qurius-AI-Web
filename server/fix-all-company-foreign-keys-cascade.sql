-- Comprehensive migration script to add CASCADE delete constraints for ALL foreign keys to companies table
-- This ensures that when a company is deleted, all related data is automatically deleted
-- Run this script in your Supabase SQL editor

-- Function to drop and recreate a foreign key constraint with CASCADE
DO $$ 
DECLARE
    constraint_rec RECORD;
    constraint_name_var TEXT;
    table_name_var TEXT;
    column_name_var TEXT;
BEGIN
    -- Find all foreign key constraints that reference companies(id)
    FOR constraint_rec IN
        SELECT 
            tc.table_name,
            tc.constraint_name,
            kcu.column_name
        FROM information_schema.table_constraints tc
        JOIN information_schema.key_column_usage kcu 
            ON tc.constraint_name = kcu.constraint_name
        JOIN information_schema.referential_constraints rc 
            ON tc.constraint_name = rc.constraint_name
        JOIN information_schema.constraint_column_usage ccu 
            ON rc.unique_constraint_name = ccu.constraint_name
        WHERE tc.constraint_type = 'FOREIGN KEY'
            AND ccu.table_name = 'companies'
            AND ccu.column_name = 'id'
            AND tc.table_schema = 'public'
            AND kcu.table_schema = 'public'
    LOOP
        table_name_var := constraint_rec.table_name;
        constraint_name_var := constraint_rec.constraint_name;
        column_name_var := constraint_rec.column_name;
        
        -- Check if the constraint already has CASCADE
        IF EXISTS (
            SELECT 1 
            FROM information_schema.referential_constraints 
            WHERE constraint_name = constraint_name_var 
                AND delete_rule = 'CASCADE'
        ) THEN
            RAISE NOTICE 'Constraint % on table % already has CASCADE, skipping...', constraint_name_var, table_name_var;
        ELSE
            -- Drop the existing constraint
            EXECUTE format('ALTER TABLE public.%I DROP CONSTRAINT %I', table_name_var, constraint_name_var);
            RAISE NOTICE 'Dropped constraint % from table %', constraint_name_var, table_name_var;
            
            -- Re-add the constraint with CASCADE
            EXECUTE format(
                'ALTER TABLE public.%I ADD CONSTRAINT %I FOREIGN KEY (%I) REFERENCES public.companies(id) ON DELETE CASCADE',
                table_name_var, 
                constraint_name_var, 
                column_name_var
            );
            RAISE NOTICE 'Re-added constraint % on table % with CASCADE', constraint_name_var, table_name_var;
        END IF;
    END LOOP;
END $$;

-- Verify all constraints now have CASCADE
SELECT 
    tc.table_name,
    tc.constraint_name,
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name,
    rc.delete_rule,
    CASE 
        WHEN rc.delete_rule = 'CASCADE' THEN '✓ CASCADE enabled'
        ELSE '✗ CASCADE NOT enabled'
    END AS status
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu 
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.referential_constraints rc 
    ON tc.constraint_name = rc.constraint_name
JOIN information_schema.constraint_column_usage ccu 
    ON rc.unique_constraint_name = ccu.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
    AND ccu.table_name = 'companies'
    AND ccu.column_name = 'id'
    AND tc.table_schema = 'public'
ORDER BY tc.table_name, tc.constraint_name;

-- Success message
SELECT 'All foreign key constraints to companies(id) now have CASCADE delete enabled!' as status;
