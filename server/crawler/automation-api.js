import express from 'express'
import { createClient } from '@supabase/supabase-js'
import { ChangeDetectionService } from '../services/changeDetectionService.js'
import scheduler from '../services/schedulerService.js'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

const router = express.Router()
const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
const changeDetectionService = new ChangeDetectionService()

// ========================================
// SCHEDULE MANAGEMENT ENDPOINTS
// ========================================

/**
 * Create a new crawl schedule for a company
 * POST /api/automation/schedules
 */
router.post('/schedules', async (req, res) => {
  try {
    const { 
      company_id, 
      base_url, 
      frequency, 
      max_pages = 25, 
      max_depth = 1, 
      delay_ms = 1000,
      change_threshold = 0.1,
      is_active = true 
    } = req.body

    if (!company_id || !base_url || !frequency) {
      return res.status(400).json({
        error: 'Missing required fields: company_id, base_url, frequency'
      })
    }

    if (!['daily', 'weekly', 'monthly'].includes(frequency)) {
      return res.status(400).json({
        error: 'Invalid frequency. Must be daily, weekly, or monthly'
      })
    }

    // Check if company exists
    const { data: company, error: companyError } = await supabase
      .from('companies')
      .select('id, name')
      .eq('id', company_id)
      .single()

    if (companyError || !company) {
      return res.status(404).json({
        error: 'Company not found'
      })
    }

    // Check if schedule already exists for this company
    const { data: existingSchedule } = await supabase
      .from('crawl_schedules')
      .select('id')
      .eq('company_id', company_id)
      .single()

    if (existingSchedule) {
      return res.status(409).json({
        error: 'Crawl schedule already exists for this company'
      })
    }

    // Calculate next crawl date
    const nextCrawl = calculateNextCrawlDate(frequency)

    // Create schedule
    const { data: schedule, error } = await supabase
      .from('crawl_schedules')
      .insert({
        company_id,
        base_url,
        frequency,
        max_pages,
        max_depth,
        delay_ms,
        change_threshold,
        is_active,
        next_crawl: nextCrawl
      })
      .select()
      .single()

    if (error) {
      console.error('❌ Failed to create crawl schedule:', error)
      return res.status(500).json({
        error: 'Failed to create crawl schedule'
      })
    }

    console.log(`✅ Created crawl schedule for ${company.name} (${frequency})`)

    res.status(201).json({
      message: 'Crawl schedule created successfully',
      schedule
    })

  } catch (error) {
    console.error('❌ Error creating crawl schedule:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

/**
 * Get all crawl schedules
 * GET /api/automation/schedules
 */
router.get('/schedules', async (req, res) => {
  try {
    const { company_id, is_active } = req.query

    let query = supabase
      .from('crawl_schedules')
      .select(`
        *,
        companies (
          id,
          name,
          contact_email
        )
      `)
      .order('created_at', { ascending: false })

    if (company_id) {
      query = query.eq('company_id', company_id)
    }

    if (is_active !== undefined) {
      query = query.eq('is_active', is_active === 'true')
    }

    const { data: schedules, error } = await query

    if (error) {
      console.error('❌ Failed to fetch crawl schedules:', error)
      return res.status(500).json({
        error: 'Failed to fetch crawl schedules'
      })
    }

    res.json({
      schedules,
      total: schedules.length
    })

  } catch (error) {
    console.error('❌ Error fetching crawl schedules:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

/**
 * Update a crawl schedule
 * PUT /api/automation/schedules/:id
 */
router.put('/schedules/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { 
      frequency, 
      max_pages, 
      max_depth, 
      delay_ms, 
      change_threshold, 
      is_active 
    } = req.body

    // Check if schedule exists
    const { data: existingSchedule, error: fetchError } = await supabase
      .from('crawl_schedules')
      .select('*')
      .eq('id', id)
      .single()

    if (fetchError || !existingSchedule) {
      return res.status(404).json({
        error: 'Crawl schedule not found'
      })
    }

    // Prepare update data
    const updateData = {}
    if (frequency) {
      if (!['daily', 'weekly', 'monthly'].includes(frequency)) {
        return res.status(400).json({
          error: 'Invalid frequency. Must be daily, weekly, or monthly'
        })
      }
      updateData.frequency = frequency
      updateData.next_crawl = calculateNextCrawlDate(frequency)
    }
    if (max_pages !== undefined) updateData.max_pages = max_pages
    if (max_depth !== undefined) updateData.max_depth = max_depth
    if (delay_ms !== undefined) updateData.delay_ms = delay_ms
    if (change_threshold !== undefined) updateData.change_threshold = change_threshold
    if (is_active !== undefined) updateData.is_active = is_active

    updateData.updated_at = new Date().toISOString()

    // Update schedule
    const { data: schedule, error } = await supabase
      .from('crawl_schedules')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('❌ Failed to update crawl schedule:', error)
      return res.status(500).json({
        error: 'Failed to update crawl schedule'
      })
    }

    console.log(`✅ Updated crawl schedule ${id}`)

    res.json({
      message: 'Crawl schedule updated successfully',
      schedule
    })

  } catch (error) {
    console.error('❌ Error updating crawl schedule:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

/**
 * Delete a crawl schedule
 * DELETE /api/automation/schedules/:id
 */
router.delete('/schedules/:id', async (req, res) => {
  try {
    const { id } = req.params

    // Check if schedule exists
    const { data: schedule, error: fetchError } = await supabase
      .from('crawl_schedules')
      .select('*')
      .eq('id', id)
      .single()

    if (fetchError || !schedule) {
      return res.status(404).json({
        error: 'Crawl schedule not found'
      })
    }

    // Delete schedule
    const { error } = await supabase
      .from('crawl_schedules')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('❌ Failed to delete crawl schedule:', error)
      return res.status(500).json({
        error: 'Failed to delete crawl schedule'
      })
    }

    console.log(`✅ Deleted crawl schedule ${id}`)

    res.json({
      message: 'Crawl schedule deleted successfully'
    })

  } catch (error) {
    console.error('❌ Error deleting crawl schedule:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

// ========================================
// AUTOMATION CONFIGURATION ENDPOINTS
// ========================================

/**
 * Get automation configuration
 * GET /api/automation/config
 */
router.get('/config', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('automation_config')
      .select('*')
      .order('key')

    if (error) {
      console.error('❌ Failed to fetch automation config:', error)
      return res.status(500).json({
        error: 'Failed to fetch automation configuration'
      })
    }

    // Convert to key-value object
    const config = {}
    data.forEach(item => {
      config[item.key] = item.value
    })

    res.json(config)

  } catch (error) {
    console.error('❌ Error fetching automation config:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

/**
 * Update automation configuration
 * PUT /api/automation/config
 */
router.put('/config', async (req, res) => {
  try {
    const configUpdates = req.body

    if (!configUpdates || typeof configUpdates !== 'object') {
      return res.status(400).json({
        error: 'Invalid configuration data'
      })
    }

    const updates = Object.entries(configUpdates).map(([key, value]) => ({
      key,
      value: JSON.stringify(value),
      updated_at: new Date().toISOString()
    }))

    const { error } = await supabase
      .from('automation_config')
      .upsert(updates, {
        onConflict: 'key'
      })

    if (error) {
      console.error('❌ Failed to update automation config:', error)
      return res.status(500).json({
        error: 'Failed to update automation configuration'
      })
    }

    console.log(`✅ Updated automation configuration`)

    res.json({
      message: 'Automation configuration updated successfully'
    })

  } catch (error) {
    console.error('❌ Error updating automation config:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

// ========================================
// ANALYTICS & MONITORING ENDPOINTS
// ========================================

/**
 * Get automation analytics for a company
 * GET /api/automation/analytics/:companyId
 */
router.get('/analytics/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params
    const { days = 30 } = req.query

    // Get automation analytics
    const { data: analytics, error: analyticsError } = await supabase
      .from('automation_analytics')
      .select('*')
      .eq('company_id', companyId)
      .gte('created_at', new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString())
      .order('created_at', { ascending: false })

    if (analyticsError) {
      console.error('❌ Failed to fetch automation analytics:', analyticsError)
      return res.status(500).json({
        error: 'Failed to fetch automation analytics'
      })
    }

    // Get change detection statistics
    const changeStats = await changeDetectionService.getChangeStatistics(companyId, days)

    // Calculate summary statistics
    const summary = {
      totalExecutions: analytics.length,
      successfulExecutions: analytics.filter(a => !a.error_message).length,
      failedExecutions: analytics.filter(a => a.error_message).length,
      totalContentChanges: analytics.reduce((sum, a) => sum + (a.content_changes_detected || 0), 0),
      totalNewFaqs: analytics.reduce((sum, a) => sum + (a.new_faqs_generated || 0), 0),
      averageExecutionTime: analytics.length > 0 
        ? analytics.reduce((sum, a) => sum + (a.execution_time_ms || 0), 0) / analytics.length 
        : 0,
      changeDetectionStats: changeStats
    }

    res.json({
      analytics,
      summary,
      total: analytics.length
    })

  } catch (error) {
    console.error('❌ Error fetching automation analytics:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

/**
 * Get automation dashboard data
 * GET /api/automation/dashboard
 */
router.get('/dashboard', async (req, res) => {
  try {
    // Get scheduler status
    const schedulerStatus = await scheduler.getStatus()

    // Get recent automation analytics
    const { data: recentAnalytics, error: analyticsError } = await supabase
      .from('automation_analytics')
      .select(`
        *,
        companies (
          id,
          name
        )
      `)
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())
      .order('created_at', { ascending: false })
      .limit(20)

    if (analyticsError) {
      console.error('❌ Failed to fetch recent analytics:', analyticsError)
      return res.status(500).json({
        error: 'Failed to fetch dashboard data'
      })
    }

    // Get active schedules count
    const { count: activeSchedules, error: scheduleError } = await supabase
      .from('crawl_schedules')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true)

    if (scheduleError) {
      console.error('❌ Failed to fetch active schedules count:', scheduleError)
      return res.status(500).json({
        error: 'Failed to fetch dashboard data'
      })
    }

    // Get companies due for crawling
    const { data: companiesDue, error: dueError } = await supabase
      .rpc('get_companies_due_for_crawling')
      .limit(10)

    if (dueError) {
      console.error('❌ Failed to fetch companies due for crawling:', dueError)
      return res.status(500).json({
        error: 'Failed to fetch dashboard data'
      })
    }

    const dashboard = {
      scheduler: schedulerStatus,
      recentAnalytics: recentAnalytics || [],
      activeSchedules: activeSchedules || 0,
      companiesDueForCrawling: companiesDue || [],
      summary: {
        totalExecutions: recentAnalytics?.length || 0,
        successfulExecutions: recentAnalytics?.filter(a => !a.error_message).length || 0,
        failedExecutions: recentAnalytics?.filter(a => a.error_message).length || 0
      }
    }

    res.json(dashboard)

  } catch (error) {
    console.error('❌ Error fetching dashboard data:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

// ========================================
// MANUAL TRIGGER ENDPOINTS
// ========================================

/**
 * Manually trigger a crawl for a company
 * POST /api/automation/trigger/:companyId
 */
router.post('/trigger/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params
    const { force = false } = req.body

    // Check if company exists
    const { data: company, error: companyError } = await supabase
      .from('companies')
      .select('id, name, website_url')
      .eq('id', companyId)
      .single()

    if (companyError || !company) {
      return res.status(404).json({
        error: 'Company not found'
      })
    }

    // Check if schedule exists
    const { data: schedule } = await supabase
      .from('crawl_schedules')
      .select('*')
      .eq('company_id', companyId)
      .single()

    if (!schedule) {
      return res.status(404).json({
        error: 'No crawl schedule found for this company'
      })
    }

    // Check for changes if not forced
    if (!force) {
      const hasChanges = await changeDetectionService.detectContentChanges(companyId, company.website_url)
      if (!hasChanges) {
        return res.status(200).json({
          message: 'No significant changes detected. Use force=true to crawl anyway.',
          hasChanges: false
        })
      }
    }

    // Add to scheduler queue
    const companyData = {
      company_id: companyId,
      company_name: company.name,
      base_url: company.website_url,
      schedule_id: schedule.id,
      frequency: schedule.frequency
    }

    // Process immediately
    await scheduler.processCompanyCrawl(companyData)

    res.json({
      message: 'Manual crawl triggered successfully',
      company: company.name
    })

  } catch (error) {
    console.error('❌ Error triggering manual crawl:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

// ========================================
// ANALYTICS ENDPOINTS
// ========================================

/**
 * Get automation analytics
 * GET /api/automation/analytics
 */
router.get('/analytics', async (req, res) => {
  try {
    const { company_id, limit = 50 } = req.query

    let query = supabase
      .from('automation_analytics')
      .select(`
        *,
        companies (
          name
        )
      `)
      .order('created_at', { ascending: false })
      .limit(parseInt(limit))

    if (company_id) {
      query = query.eq('company_id', company_id)
    }

    const { data: analytics, error } = await query

    if (error) {
      console.error('❌ Failed to fetch automation analytics:', error)
      // If table doesn't exist, return empty array
      if (error.code === '42P01') {
        return res.json({
          analytics: [],
          total: 0
        })
      }
      return res.status(500).json({
        error: 'Failed to fetch automation analytics'
      })
    }

    res.json({
      analytics,
      total: analytics.length
    })

  } catch (error) {
    console.error('❌ Error fetching automation analytics:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

/**
 * Get automation dashboard data
 * GET /api/automation/dashboard
 */
router.get('/dashboard', async (req, res) => {
  try {
    // Get scheduler status
    const schedulerStatus = scheduler.getStatus()

    // Get active schedules count
    const { count: activeSchedules } = await supabase
      .from('crawl_schedules')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true)

    // Get companies due for crawling
    const { data: companiesDueForCrawling } = await supabase
      .from('crawl_schedules')
      .select(`
        *,
        companies (
          id,
          name,
          contact_email
        )
      `)
      .eq('is_active', true)
      .lte('next_crawl', new Date().toISOString())

    // Get recent analytics
    // Get recent analytics
    const { data: recentAnalytics, error: analyticsError } = await supabase
      .from('automation_analytics')
      .select(`
        *,
        companies (
          name
        )
      `)
      .order('created_at', { ascending: false })
      .limit(10)

    // Get summary statistics
    const { data: summaryData, error: summaryError } = await supabase
      .from('automation_analytics')
      .select('trigger_type, error_message')

    const summary = {
      totalExecutions: summaryData?.length || 0,
      successfulExecutions: summaryData?.filter(a => !a.error_message).length || 0,
      failedExecutions: summaryData?.filter(a => a.error_message).length || 0
    }

    // Handle missing tables gracefully
    if (analyticsError && analyticsError.code === '42P01') {
      console.warn('⚠️ automation_analytics table does not exist yet')
    }
    if (summaryError && summaryError.code === '42P01') {
      console.warn('⚠️ automation_analytics table does not exist yet')
    }

    res.json({
      scheduler: schedulerStatus,
      activeSchedules: activeSchedules || 0,
      companiesDueForCrawling: companiesDueForCrawling || [],
      recentAnalytics: recentAnalytics || [],
      summary
    })

  } catch (error) {
    console.error('❌ Error fetching dashboard data:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Calculate next crawl date based on frequency
 */
function calculateNextCrawlDate(frequency) {
  const now = new Date()
  
  switch (frequency) {
    case 'daily':
      return new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString()
    case 'weekly':
      return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString()
    case 'monthly':
      return new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString()
    default:
      return new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString()
  }
}

export default router 