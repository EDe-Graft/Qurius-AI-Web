import express from 'express'
import axios from 'axios'
import QuriusCrawler from './crawler.js'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const router = express.Router()
const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

// Initialize crawler
const crawler = new QuriusCrawler()

/**
 * Start crawling for a company
 * POST /api/crawler/start
 */
router.post('/start', async (req, res) => {
  try {
    const { companyId, websiteUrl } = req.body

    if (!companyId || !websiteUrl) {
      return res.status(400).json({
        error: 'Missing required fields: companyId, websiteUrl'
      })
    }

    // Validate URL
    try {
      new URL(websiteUrl)
    } catch (error) {
      return res.status(400).json({
        error: 'Invalid website URL'
      })
    }

    // Check if company exists
    const { data: company, error: companyError } = await supabase
      .from('companies')
      .select('*')
      .eq('id', companyId)
      .single()

    if (companyError || !company) {
      return res.status(404).json({
        error: 'Company not found'
      })
    }

    // Start crawling in background
    crawler.crawlCompanyWebsite(companyId, websiteUrl)
      .then((result) => {
        console.log(`✅ Crawl completed for ${company.name}`)
      })
      .catch((error) => {
        console.error(`❌ Crawl failed for ${company.name}:`, error)
      })

    res.json({
      success: true,
      message: `Crawling started for ${company.name}`,
      companyId,
      websiteUrl
    })

  } catch (error) {
    console.error('Crawler API error:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

/**
 * Get crawl status for a company
 * GET /api/crawler/status/:companyId
 */
router.get('/status/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params

    // Get latest crawl session
    const { data: crawlSession, error } = await supabase
      .from('crawl_sessions')
      .select('*')
      .eq('company_id', companyId)
      .order('crawl_date', { ascending: false })
      .limit(1)
      .single()

    // If no crawl sessions found, return success with null session
    if (error && error.code === 'PGRST116') {
      return res.json({
        success: true,
        crawlSession: null,
        message: 'No crawl sessions found for this company'
      })
    }

    // Handle other errors
    if (error) {
      console.error('Database error:', error)
      return res.status(500).json({
        error: 'Database error occurred'
      })
    }

    res.json({
      success: true,
      crawlSession
    })

  } catch (error) {
    console.error('Crawler status error:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

/**
 * Get all crawl sessions for a company
 * GET /api/crawler/sessions/:companyId
 */
router.get('/sessions/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params

    // Get all crawl sessions for the company
    const { data: sessions, error } = await supabase
      .from('crawl_sessions')
      .select('*')
      .eq('company_id', companyId)
      .order('crawl_date', { ascending: false })

    // If no crawl sessions found, return empty array
    if (error && error.code === 'PGRST116') {
      return res.json({
        success: true,
        sessions: [],
        message: 'No crawl sessions found for this company'
      })
    }

    // Handle other errors
    if (error) {
      console.error('Database error:', error)
      return res.status(500).json({
        error: 'Database error occurred'
      })
    }

    res.json({
      success: true,
      sessions: sessions || []
    })

  } catch (error) {
    console.error('Crawler sessions error:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

/**
 * Get crawled FAQs for a company
 * GET /api/crawler/faqs/:companyId
 */
router.get('/faqs/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params

    // Get FAQs from crawler
    const { data: faqs, error } = await supabase
      .from('faqs')
      .select('*')
      .eq('company_id', companyId)
      .eq('source', 'crawler')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Database error fetching FAQs:', error)
      return res.status(500).json({
        error: 'Failed to fetch FAQs'
      })
    }

    // Always return success - empty array is a valid result
    res.json({
      success: true,
      faqs: faqs || [],
      message: faqs && faqs.length > 0 ? `Found ${faqs.length} FAQs` : 'No FAQs found for this company'
    })

  } catch (error) {
    console.error('Crawler FAQs error:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

/**
 * Generate FAQs from content using AI
 * POST /api/crawler/generate-faqs
 */
router.post('/generate-faqs', async (req, res) => {
  try {
    const { companyName, content, maxFAQs = 10, companyId, saveToDatabase = false } = req.body

    if (!companyName || !content) {
      return res.status(400).json({
        error: 'Missing required fields: companyName, content'
      })
    }

    // Call the main server's AI FAQ generation endpoint
    const aiResponse = await axios.post(`${process.env.BACKEND_URL}/api/ai/generate-faqs`, {
      companyName,
      content,
      maxFAQs,
      companyId,
      saveToDatabase
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    res.json({
      success: true,
      faqs: aiResponse.data.faqs || [],
      saved: aiResponse.data.saved || false
    })

  } catch (error) {
    console.error('Generate FAQs error:', error.response?.data || error.message)
    res.status(500).json({
      error: 'Failed to generate FAQs'
    })
  }
})



export default router 