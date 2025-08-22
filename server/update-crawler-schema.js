import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

async function updateCrawlerSchema() {
  try {
    console.log('🔄 Updating crawl_sessions table schema...')

    // Add new columns if they don't exist
    const alterQueries = [
      // Add progress_percentage column
      `ALTER TABLE crawl_sessions ADD COLUMN IF NOT EXISTS progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100)`,
      
      // Add status_details column
      `ALTER TABLE crawl_sessions ADD COLUMN IF NOT EXISTS status_details TEXT`,
      
      // Add error_message column
      `ALTER TABLE crawl_sessions ADD COLUMN IF NOT EXISTS error_message TEXT`,
      
      // Add completed_date column
      `ALTER TABLE crawl_sessions ADD COLUMN IF NOT EXISTS completed_date TIMESTAMP WITH TIME ZONE`,
      
      // Add updated_at column
      `ALTER TABLE crawl_sessions ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()`,
      
      // Add ai_faqs_count column
      `ALTER TABLE crawl_sessions ADD COLUMN IF NOT EXISTS ai_faqs_count INTEGER DEFAULT 0`,
      
      // Add ai_generated_faqs column
      `ALTER TABLE crawl_sessions ADD COLUMN IF NOT EXISTS ai_generated_faqs JSONB`,
      
      // Update status constraint to include new statuses
      `ALTER TABLE crawl_sessions DROP CONSTRAINT IF EXISTS crawl_sessions_status_check`,
      `ALTER TABLE crawl_sessions ADD CONSTRAINT crawl_sessions_status_check CHECK (status IN ('crawling', 'processing_embeddings', 'generating_faqs', 'ready_for_review', 'completed', 'failed'))`
    ]

    for (const query of alterQueries) {
      console.log(`Executing: ${query}`)
      const { error } = await supabase.rpc('exec_sql', { sql: query })
      if (error) {
        console.log(`Note: ${error.message}`)
      }
    }

    // Create indexes if they don't exist
    const indexQueries = [
      `CREATE INDEX IF NOT EXISTS idx_crawl_sessions_company_id ON crawl_sessions(company_id)`,
      `CREATE INDEX IF NOT EXISTS idx_crawl_sessions_status ON crawl_sessions(status)`,
      `CREATE INDEX IF NOT EXISTS idx_crawl_sessions_crawl_date ON crawl_sessions(crawl_date)`
    ]

    for (const query of indexQueries) {
      console.log(`Creating index: ${query}`)
      const { error } = await supabase.rpc('exec_sql', { sql: query })
      if (error) {
        console.log(`Note: ${error.message}`)
      }
    }

    console.log('✅ Crawl sessions table schema updated successfully!')
    
  } catch (error) {
    console.error('❌ Error updating schema:', error)
  }
}

// Run the migration
updateCrawlerSchema() 