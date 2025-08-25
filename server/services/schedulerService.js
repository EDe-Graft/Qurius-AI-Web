import { createClient } from '@supabase/supabase-js'
import cron from 'node-cron'
import QuriusCrawler from '../crawler/crawler.js'
import { ChangeDetectionService } from './changeDetectionService.js'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_PROJECT_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables for scheduler')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

class CrawlScheduler {
  constructor() {
    this.isRunning = false
    this.scheduler = null
    this.changeDetectionService = new ChangeDetectionService()
    this.batchSize = 10 // Process 10 companies at a time
    this.checkIntervalMinutes = 5 // Check every 5 minutes
    this.maxConcurrentCrawls = 3 // Maximum concurrent crawls
    this.activeCrawls = new Set()
  }

  /**
   * Start the scheduler
   */
  async start() {
    if (this.isRunning) {
      console.log('⚠️ Scheduler is already running')
      return
    }

    console.log('🚀 Starting Crawl Scheduler...')
    
    try {
      // Initialize scheduler with cron job
      this.scheduler = cron.schedule(`*/${this.checkIntervalMinutes} * * * *`, async () => {
        await this.processScheduledCrawls()
      }, {
        scheduled: false
      })

      // Start the cron job
      this.scheduler.start()
      this.isRunning = true

      console.log(`✅ Scheduler started - checking every ${this.checkIntervalMinutes} minutes`)
      
      // Process initial batch
      await this.processScheduledCrawls()
      
    } catch (error) {
      console.error('❌ Failed to start scheduler:', error)
      this.isRunning = false
    }
  }

  /**
   * Stop the scheduler
   */
  async stop() {
    if (!this.isRunning) {
      console.log('⚠️ Scheduler is not running')
      return
    }

    console.log('🛑 Stopping Crawl Scheduler...')
    
    if (this.scheduler) {
      this.scheduler.stop()
      this.scheduler = null
    }
    
    this.isRunning = false
    console.log('✅ Scheduler stopped')
  }

  /**
   * Process scheduled crawls
   */
  async processScheduledCrawls() {
    try {
      console.log('🔍 Checking for companies due for crawling...')
      
      // Get companies due for crawling
      const { data: companiesDue, error } = await supabase
        .rpc('get_companies_due_for_crawling')
        .limit(this.batchSize)

      if (error) {
        console.error('❌ Failed to get companies due for crawling:', error)
        return
      }

      if (!companiesDue || companiesDue.length === 0) {
        console.log('📭 No companies due for crawling')
        return
      }

      console.log(`📋 Found ${companiesDue.length} companies due for crawling`)

      // Process companies in batches
      for (const company of companiesDue) {
        // Check if we're at max concurrent crawls
        if (this.activeCrawls.size >= this.maxConcurrentCrawls) {
          console.log(`⏳ Max concurrent crawls reached (${this.maxConcurrentCrawls}), waiting...`)
          await this.sleep(30000) // Wait 30 seconds
          continue
        }

        // Process company crawl
        await this.processCompanyCrawl(company)
      }

    } catch (error) {
      console.error('❌ Error processing scheduled crawls:', error)
    }
  }

  /**
   * Process crawl for a single company
   */
  async processCompanyCrawl(company) {
    const { company_id, company_name, base_url, schedule_id, frequency } = company
    
    // Add to active crawls
    this.activeCrawls.add(company_id)
    
    const startTime = Date.now()
    let crawlSessionId = null
    
    try {
      console.log(`🕷️ Starting automated crawl for ${company_name} (${base_url})`)
      
      // Check for content changes first
      const hasChanges = await this.changeDetectionService.detectContentChanges(company_id, base_url)
      
      if (!hasChanges) {
        console.log(`⏭️ No significant changes detected for ${company_name}, skipping crawl`)
        
        // Update next crawl date even if no changes
        await this.updateNextCrawlDate(schedule_id, frequency)
        
        // Record analytics
        await this.recordAutomationAnalytics(company_id, null, 'scheduled', 0, 0, Date.now() - startTime)
        
        return
      }

      // Get schedule configuration
      const { data: schedule } = await supabase
        .from('crawl_schedules')
        .select('*')
        .eq('id', schedule_id)
        .single()

      // Initialize crawler with schedule settings
      const crawler = new QuriusCrawler({
        maxPages: schedule?.max_pages || 25,
        maxDepth: schedule?.max_depth || 1,
        delay: schedule?.delay_ms || 1000,
        enablePuppeteer: true
      })

      // Start crawl with automation context
      const crawlData = await crawler.crawlCompanyWebsite(company_id, base_url, {
        isAutomated: true,
        triggerReason: 'scheduled',
        scheduleId: schedule_id
      })

      crawlSessionId = crawlData?.sessionId

      // Update next crawl date
      await this.updateNextCrawlDate(schedule_id, frequency)

      // Record analytics
      const contentChanges = crawlData?.content?.length || 0
      const newFaqs = crawlData?.aiGeneratedFAQs?.length || 0
      
      await this.recordAutomationAnalytics(
        company_id, 
        crawlSessionId, 
        'scheduled', 
        contentChanges, 
        newFaqs, 
        Date.now() - startTime
      )

      console.log(`✅ Automated crawl completed for ${company_name}`)

    } catch (error) {
      console.error(`❌ Automated crawl failed for ${company_name}:`, error.message)
      
      // Record error analytics
      await this.recordAutomationAnalytics(
        company_id, 
        crawlSessionId, 
        'scheduled', 
        0, 
        0, 
        Date.now() - startTime, 
        error.message
      )
    } finally {
      // Remove from active crawls
      this.activeCrawls.delete(company_id)
    }
  }

  /**
   * Update next crawl date based on frequency
   */
  async updateNextCrawlDate(scheduleId, frequency) {
    try {
      const { error } = await supabase
        .rpc('update_next_crawl_date', { schedule_id: scheduleId, frequency: frequency })

      if (error) {
        console.error('❌ Failed to update next crawl date:', error)
      } else {
        console.log(`📅 Updated next crawl date for schedule ${scheduleId} (${frequency})`)
      }
    } catch (error) {
      console.error('❌ Error updating next crawl date:', error)
    }
  }

  /**
   * Record automation analytics
   */
  async recordAutomationAnalytics(companyId, crawlSessionId, triggerType, contentChanges, newFaqs, executionTime, errorMessage = null) {
    try {
      const { error } = await supabase
        .from('automation_analytics')
        .insert({
          company_id: companyId,
          crawl_session_id: crawlSessionId,
          trigger_type: triggerType,
          content_changes_detected: contentChanges,
          new_faqs_generated: newFaqs,
          execution_time_ms: executionTime,
          error_message: errorMessage
        })

      if (error) {
        console.error('❌ Failed to record automation analytics:', error)
      }
    } catch (error) {
      console.error('❌ Error recording automation analytics:', error)
    }
  }

  /**
   * Get scheduler status
   */
  async getStatus() {
    return {
      isRunning: this.isRunning,
      activeCrawls: this.activeCrawls.size,
      maxConcurrentCrawls: this.maxConcurrentCrawls,
      checkIntervalMinutes: this.checkIntervalMinutes,
      batchSize: this.batchSize
    }
  }

  /**
   * Utility function for sleeping
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

// Export singleton instance
const scheduler = new CrawlScheduler()
export default scheduler 