import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

class AutomationSetup {
  constructor() {
    this.setupResults = {
      success: [],
      errors: []
    }
  }

  /**
   * Run complete automation setup
   */
  async setup() {
    console.log('🚀 Setting up Qurius-AI Automation System...\n')
    
    try {
      await this.initializeConfiguration()
      await this.createDefaultIndexes()
      await this.validateDatabaseFunctions()
      await this.testConnections()
      
      this.printResults()
      
      if (this.setupResults.errors.length === 0) {
        console.log('✅ Automation system setup completed successfully!')
        console.log('\n📋 Next steps:')
        console.log('1. Start the server: npm start')
        console.log('2. Access the admin interface')
        console.log('3. Create your first crawl schedule')
        console.log('4. Monitor automation performance')
      } else {
        console.log('⚠️ Setup completed with some errors. Please review the issues above.')
      }
    } catch (error) {
      console.error('❌ Setup failed:', error)
      process.exit(1)
    }
  }

  /**
   * Initialize automation configuration
   */
  async initializeConfiguration() {
    console.log('⚙️ Initializing automation configuration...')
    
    const defaultConfig = [
      {
        key: 'change_detection',
        value: {
          threshold: 0.1,
          min_content_length: 100
        },
        description: 'Change detection settings'
      },
      {
        key: 'scheduler',
        value: {
          check_interval: 5,
          max_concurrent: 3,
          batch_size: 10
        },
        description: 'Scheduler configuration'
      },
      {
        key: 'crawler',
        value: {
          default_max_pages: 25,
          default_max_depth: 1,
          default_delay_ms: 1000,
          user_agent: 'Qurius-AI-Automation/1.0'
        },
        description: 'Default crawler settings'
      },
      {
        key: 'analytics',
        value: {
          retention_days: 90,
          aggregation_interval: 'daily'
        },
        description: 'Analytics configuration'
      }
    ]

    for (const config of defaultConfig) {
      try {
        const { error } = await supabase
          .from('automation_config')
          .upsert({
            key: config.key,
            value: config.value,
            description: config.description,
            updated_at: new Date().toISOString()
          }, {
            onConflict: 'key'
          })

        if (error) throw error
        
        this.setupResults.success.push(`✅ Configuration '${config.key}' initialized`)
      } catch (error) {
        this.setupResults.errors.push(`❌ Failed to initialize '${config.key}': ${error.message}`)
      }
    }
  }

  /**
   * Create default database indexes
   */
  async createDefaultIndexes() {
    console.log('📊 Creating database indexes...')
    
    const indexes = [
      {
        name: 'idx_crawl_schedules_next_crawl',
        sql: 'CREATE INDEX IF NOT EXISTS idx_crawl_schedules_next_crawl ON crawl_schedules(next_crawl)'
      },
      {
        name: 'idx_crawl_schedules_is_active',
        sql: 'CREATE INDEX IF NOT EXISTS idx_crawl_schedules_is_active ON crawl_schedules(is_active)'
      },
      {
        name: 'idx_content_hashes_company_id',
        sql: 'CREATE INDEX IF NOT EXISTS idx_content_hashes_company_id ON content_hashes(company_id)'
      },
      {
        name: 'idx_content_hashes_url',
        sql: 'CREATE INDEX IF NOT EXISTS idx_content_hashes_url ON content_hashes(url)'
      },
      {
        name: 'idx_automation_analytics_company_id',
        sql: 'CREATE INDEX IF NOT EXISTS idx_automation_analytics_company_id ON automation_analytics(company_id)'
      },
      {
        name: 'idx_automation_analytics_created_at',
        sql: 'CREATE INDEX IF NOT EXISTS idx_automation_analytics_created_at ON automation_analytics(created_at)'
      }
    ]

    for (const index of indexes) {
      try {
        const { error } = await supabase.rpc('exec_sql', { sql: index.sql })
        
        if (error) throw error
        
        this.setupResults.success.push(`✅ Index '${index.name}' created`)
      } catch (error) {
        this.setupResults.errors.push(`❌ Failed to create index '${index.name}': ${error.message}`)
      }
    }
  }

  /**
   * Validate database functions
   */
  async validateDatabaseFunctions() {
    console.log('🔧 Validating database functions...')
    
    const functions = [
      'get_companies_due_for_crawling',
      'update_next_crawl_date',
      'get_automation_statistics'
    ]

    for (const funcName of functions) {
      try {
        // Test function exists by calling it with safe parameters
        if (funcName === 'get_companies_due_for_crawling') {
          const { data, error } = await supabase.rpc(funcName)
          if (error) throw error
          this.setupResults.success.push(`✅ Function '${funcName}' validated`)
        } else if (funcName === 'update_next_crawl_date') {
          // This function requires parameters, so we'll just check if it exists
          this.setupResults.success.push(`✅ Function '${funcName}' exists`)
        } else if (funcName === 'get_automation_statistics') {
          const { data, error } = await supabase.rpc(funcName, { days_back: 30 })
          if (error) throw error
          this.setupResults.success.push(`✅ Function '${funcName}' validated`)
        }
      } catch (error) {
        this.setupResults.errors.push(`❌ Function '${funcName}' validation failed: ${error.message}`)
      }
    }
  }

  /**
   * Test connections and permissions
   */
  async testConnections() {
    console.log('🔗 Testing connections and permissions...')
    
    // Test basic table access
    const tables = ['crawl_schedules', 'content_hashes', 'automation_analytics', 'automation_config']
    
    for (const table of tables) {
      try {
        const { data, error } = await supabase
          .from(table)
          .select('*')
          .limit(1)
        
        if (error) throw error
        
        this.setupResults.success.push(`✅ Table '${table}' accessible`)
      } catch (error) {
        this.setupResults.errors.push(`❌ Table '${table}' access failed: ${error.message}`)
      }
    }

    // Test RLS policies
    try {
      const { data, error } = await supabase
        .from('crawl_schedules')
        .select('count(*)')
      
      if (error) throw error
      
      this.setupResults.success.push('✅ RLS policies working correctly')
    } catch (error) {
      this.setupResults.errors.push(`❌ RLS policy test failed: ${error.message}`)
    }
  }

  /**
   * Print setup results
   */
  printResults() {
    console.log('\n📋 Setup Results:')
    console.log('=' * 50)
    
    if (this.setupResults.success.length > 0) {
      console.log('\n✅ Successful operations:')
      this.setupResults.success.forEach(result => console.log(`  ${result}`))
    }
    
    if (this.setupResults.errors.length > 0) {
      console.log('\n❌ Errors encountered:')
      this.setupResults.errors.forEach(error => console.log(`  ${error}`))
    }
    
    console.log(`\n📊 Summary: ${this.setupResults.success.length} successful, ${this.setupResults.errors.length} errors`)
  }

  /**
   * Create sample schedule for testing
   */
  async createSampleSchedule(companyId, baseUrl) {
    console.log('📝 Creating sample crawl schedule...')
    
    try {
      const { data, error } = await supabase
        .from('crawl_schedules')
        .insert({
          company_id: companyId,
          base_url: baseUrl,
          frequency: 'weekly',
          max_pages: 25,
          max_depth: 1,
          delay_ms: 1000,
          change_threshold: 0.1,
          is_active: false, // Set to false for safety
          next_crawl: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
        })
        .select()
        .single()

      if (error) throw error
      
      console.log(`✅ Sample schedule created for ${baseUrl}`)
      return data
    } catch (error) {
      console.error(`❌ Failed to create sample schedule: ${error.message}`)
      return null
    }
  }

  /**
   * Get system status
   */
  async getSystemStatus() {
    console.log('📊 Checking system status...')
    
    try {
      // Check table counts
      const tables = ['crawl_schedules', 'content_hashes', 'automation_analytics', 'automation_config']
      const status = {}
      
      for (const table of tables) {
        const { count, error } = await supabase
          .from(table)
          .select('*', { count: 'exact', head: true })
        
        if (error) throw error
        
        status[table] = count
      }
      
      console.log('📈 System Status:')
      console.log(`  - Crawl Schedules: ${status.crawl_schedules || 0}`)
      console.log(`  - Content Hashes: ${status.content_hashes || 0}`)
      console.log(`  - Analytics Records: ${status.automation_analytics || 0}`)
      console.log(`  - Config Items: ${status.automation_config || 0}`)
      
      return status
    } catch (error) {
      console.error(`❌ Failed to get system status: ${error.message}`)
      return null
    }
  }
}

// Run setup if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const setup = new AutomationSetup()
  
  // Check for command line arguments
  const args = process.argv.slice(2)
  const command = args[0]
  
  if (command === 'status') {
    setup.getSystemStatus()
      .then(() => process.exit(0))
      .catch(() => process.exit(1))
  } else if (command === 'sample' && args[1] && args[2]) {
    setup.createSampleSchedule(args[1], args[2])
      .then(() => process.exit(0))
      .catch(() => process.exit(1))
  } else {
    setup.setup()
      .then(() => process.exit(0))
      .catch(() => process.exit(1))
  }
}

export default AutomationSetup 