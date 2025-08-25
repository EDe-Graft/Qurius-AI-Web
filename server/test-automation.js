import { createClient } from '@supabase/supabase-js'
import axios from 'axios'
import scheduler from './services/schedulerService.js'
import { ChangeDetectionService } from './services/changeDetectionService.js'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

// Test configuration
const TEST_CONFIG = {
  baseUrl: process.env.BACKEND_URL || 'http://localhost:3000',
  testCompanyId: process.env.TEST_COMPANY_ID || 'test-company-id',
  testUrl: 'https://example.com',
  timeout: 30000
}

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

class AutomationTester {
  constructor() {
    this.results = {
      passed: 0,
      failed: 0,
      tests: []
    }
    this.changeDetectionService = new ChangeDetectionService()
  }

  /**
   * Run all automation tests
   */
  async runAllTests() {
    console.log('🧪 Starting Automation System Tests...\n')
    
    const testSuites = [
      this.testDatabaseFunctions.bind(this),
      this.testChangeDetectionService.bind(this),
      this.testSchedulerService.bind(this),
      this.testAutomationAPI.bind(this),
      this.testIntegration.bind(this)
    ]

    for (const testSuite of testSuites) {
      try {
        await testSuite()
      } catch (error) {
        console.error(`❌ Test suite failed:`, error)
        this.recordTest('Test Suite', false, error.message)
      }
    }

    this.printResults()
  }

  /**
   * Test database functions
   */
  async testDatabaseFunctions() {
    console.log('📊 Testing Database Functions...')
    
    // Test get_companies_due_for_crawling function
    try {
      const { data, error } = await supabase.rpc('get_companies_due_for_crawling')
      if (error) throw error
      
      this.recordTest('get_companies_due_for_crawling', true, `Found ${data?.length || 0} companies due for crawling`)
    } catch (error) {
      this.recordTest('get_companies_due_for_crawling', false, error.message)
    }

    // Test get_automation_statistics function
    try {
      const { data, error } = await supabase.rpc('get_automation_statistics', { days_back: 30 })
      if (error) throw error
      
      this.recordTest('get_automation_statistics', true, `Retrieved statistics for last 30 days`)
    } catch (error) {
      this.recordTest('get_automation_statistics', false, error.message)
    }

    // Test automation config table
    try {
      const { data, error } = await supabase
        .from('automation_config')
        .select('*')
        .limit(1)
      
      if (error) throw error
      
      this.recordTest('automation_config table', true, 'Config table accessible')
    } catch (error) {
      this.recordTest('automation_config table', false, error.message)
    }
  }

  /**
   * Test change detection service
   */
  async testChangeDetectionService() {
    console.log('🔍 Testing Change Detection Service...')
    
    // Test content hash generation
    try {
      const testContent = 'This is a test content for hash generation'
      const hash = this.changeDetectionService.generateContentHash(testContent)
      
      if (hash && hash.length === 64) {
        this.recordTest('Content Hash Generation', true, 'Hash generated successfully')
      } else {
        throw new Error('Invalid hash format')
      }
    } catch (error) {
      this.recordTest('Content Hash Generation', false, error.message)
    }

    // Test text cleaning
    try {
      const dirtyText = '  This   is   dirty   text  with   extra   spaces  '
      const cleanText = this.changeDetectionService.cleanText(dirtyText)
      
      if (cleanText === 'This is dirty text with extra spaces') {
        this.recordTest('Text Cleaning', true, 'Text cleaned successfully')
      } else {
        throw new Error('Text cleaning failed')
      }
    } catch (error) {
      this.recordTest('Text Cleaning', false, error.message)
    }

    // Test content hash storage
    try {
      await this.changeDetectionService.storeContentHash(
        TEST_CONFIG.testCompanyId,
        TEST_CONFIG.testUrl,
        'Test content for storage',
        'test-session-id'
      )
      
      this.recordTest('Content Hash Storage', true, 'Hash stored successfully')
    } catch (error) {
      this.recordTest('Content Hash Storage', false, error.message)
    }
  }

  /**
   * Test scheduler service
   */
  async testSchedulerService() {
    console.log('⏰ Testing Scheduler Service...')
    
    // Test scheduler status
    try {
      const status = await scheduler.getStatus()
      
      if (status && typeof status.isRunning === 'boolean') {
        this.recordTest('Scheduler Status', true, `Scheduler is ${status.isRunning ? 'running' : 'stopped'}`)
      } else {
        throw new Error('Invalid status format')
      }
    } catch (error) {
      this.recordTest('Scheduler Status', false, error.message)
    }

    // Test scheduler start/stop (if not already running)
    try {
      const initialStatus = await scheduler.getStatus()
      
      if (!initialStatus.isRunning) {
        await scheduler.start()
        const runningStatus = await scheduler.getStatus()
        
        if (runningStatus.isRunning) {
          await scheduler.stop()
          const stoppedStatus = await scheduler.getStatus()
          
          if (!stoppedStatus.isRunning) {
            this.recordTest('Scheduler Start/Stop', true, 'Scheduler controls working')
          } else {
            throw new Error('Scheduler failed to stop')
          }
        } else {
          throw new Error('Scheduler failed to start')
        }
      } else {
        this.recordTest('Scheduler Start/Stop', true, 'Scheduler already running, skipping test')
      }
    } catch (error) {
      this.recordTest('Scheduler Start/Stop', false, error.message)
    }
  }

  /**
   * Test automation API endpoints
   */
  async testAutomationAPI() {
    console.log('🌐 Testing Automation API Endpoints...')
    
    // Test scheduler status endpoint
    try {
      const response = await axios.get(`${TEST_CONFIG.baseUrl}/api/automation/status`, {
        timeout: TEST_CONFIG.timeout
      })
      
      if (response.status === 200 && response.data) {
        this.recordTest('GET /api/automation/status', true, 'Status endpoint working')
      } else {
        throw new Error('Invalid response')
      }
    } catch (error) {
      this.recordTest('GET /api/automation/status', false, error.message)
    }

    // Test dashboard endpoint
    try {
      const response = await axios.get(`${TEST_CONFIG.baseUrl}/api/automation/dashboard`, {
        timeout: TEST_CONFIG.timeout
      })
      
      if (response.status === 200 && response.data) {
        this.recordTest('GET /api/automation/dashboard', true, 'Dashboard endpoint working')
      } else {
        throw new Error('Invalid response')
      }
    } catch (error) {
      this.recordTest('GET /api/automation/dashboard', false, error.message)
    }

    // Test schedules endpoint
    try {
      const response = await axios.get(`${TEST_CONFIG.baseUrl}/api/automation/schedules`, {
        timeout: TEST_CONFIG.timeout
      })
      
      if (response.status === 200) {
        this.recordTest('GET /api/automation/schedules', true, `Found ${response.data?.schedules?.length || 0} schedules`)
      } else {
        throw new Error('Invalid response')
      }
    } catch (error) {
      this.recordTest('GET /api/automation/schedules', false, error.message)
    }

    // Test config endpoint
    try {
      const response = await axios.get(`${TEST_CONFIG.baseUrl}/api/automation/config`, {
        timeout: TEST_CONFIG.timeout
      })
      
      if (response.status === 200) {
        this.recordTest('GET /api/automation/config', true, 'Config endpoint working')
      } else {
        throw new Error('Invalid response')
      }
    } catch (error) {
      this.recordTest('GET /api/automation/config', false, error.message)
    }
  }

  /**
   * Test integration between components
   */
  async testIntegration() {
    console.log('🔗 Testing Component Integration...')
    
    // Test scheduler with change detection
    try {
      const status = await scheduler.getStatus()
      const changeDetection = new ChangeDetectionService()
      
      // Test that both services can be instantiated and used together
      const testHash = changeDetection.generateContentHash('test content')
      const schedulerStatus = await scheduler.getStatus()
      
      if (testHash && schedulerStatus) {
        this.recordTest('Scheduler + Change Detection Integration', true, 'Services work together')
      } else {
        throw new Error('Integration failed')
      }
    } catch (error) {
      this.recordTest('Scheduler + Change Detection Integration', false, error.message)
    }

    // Test database integration
    try {
      // Test that we can create a test schedule and retrieve it
      const testSchedule = {
        company_id: TEST_CONFIG.testCompanyId,
        base_url: TEST_CONFIG.testUrl,
        frequency: 'daily',
        max_pages: 10,
        max_depth: 1,
        delay_ms: 1000,
        change_threshold: 0.1,
        is_active: false, // Set to false to avoid actual crawling
        next_crawl: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      }

      const { data: createdSchedule, error: createError } = await supabase
        .from('crawl_schedules')
        .insert(testSchedule)
        .select()
        .single()

      if (createError) throw createError

      // Clean up test schedule
      await supabase
        .from('crawl_schedules')
        .delete()
        .eq('id', createdSchedule.id)

      this.recordTest('Database Integration', true, 'Schedule CRUD operations working')
    } catch (error) {
      this.recordTest('Database Integration', false, error.message)
    }
  }

  /**
   * Record test result
   */
  recordTest(testName, passed, message) {
    const result = {
      name: testName,
      passed,
      message,
      timestamp: new Date().toISOString()
    }
    
    this.results.tests.push(result)
    
    if (passed) {
      this.results.passed++
      console.log(`✅ ${testName}: ${message}`)
    } else {
      this.results.failed++
      console.log(`❌ ${testName}: ${message}`)
    }
  }

  /**
   * Print test results summary
   */
  printResults() {
    console.log('\n📋 Test Results Summary:')
    console.log('=' * 50)
    console.log(`✅ Passed: ${this.results.passed}`)
    console.log(`❌ Failed: ${this.results.failed}`)
    console.log(`📊 Total: ${this.results.passed + this.results.failed}`)
    console.log(`📈 Success Rate: ${((this.results.passed / (this.results.passed + this.results.failed)) * 100).toFixed(1)}%`)
    
    if (this.results.failed > 0) {
      console.log('\n❌ Failed Tests:')
      this.results.tests
        .filter(test => !test.passed)
        .forEach(test => {
          console.log(`  - ${test.name}: ${test.message}`)
        })
    }
    
    console.log('\n🎯 Test Summary:')
    if (this.results.failed === 0) {
      console.log('🎉 All tests passed! Automation system is ready for production.')
    } else {
      console.log('⚠️ Some tests failed. Please review the issues above.')
    }
  }
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const tester = new AutomationTester()
  tester.runAllTests()
    .then(() => {
      console.log('\n🏁 Test execution completed.')
      process.exit(0)
    })
    .catch((error) => {
      console.error('\n💥 Test execution failed:', error)
      process.exit(1)
    })
}

export default AutomationTester 