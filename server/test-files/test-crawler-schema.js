import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

async function testCrawlerSchema() {
  try {
    console.log('🔍 Testing crawl_sessions table schema...')

    // Try to get a single row to see what columns exist
    const { data, error } = await supabase
      .from('crawl_sessions')
      .select('*')
      .limit(1)

    if (error) {
      console.error('❌ Error accessing crawl_sessions table:', error)
      return
    }

    console.log('✅ crawl_sessions table accessible')
    console.log('📋 Available columns:', Object.keys(data[0] || {}))
    
    // Try to get status for a specific company
    const { data: statusData, error: statusError } = await supabase
      .from('crawl_sessions')
      .select('id, company_id, status')
      .limit(1)

    if (statusError) {
      console.error('❌ Error in status query:', statusError)
    } else {
      console.log('✅ Status query works:', statusData)
    }

  } catch (error) {
    console.error('❌ Test failed:', error)
  }
}

testCrawlerSchema() 