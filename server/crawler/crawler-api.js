import express from 'express'
import axios from 'axios'
import QuriusCrawler from './crawler.js'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const router = express.Router()
const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

// Initialize crawler with Puppeteer support
const crawler = new QuriusCrawler({
  enablePuppeteer: true,
  puppeteerTimeout: 30000,
  maxPages: 50,
  maxDepth: 3
})

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

/**
 * Save approved FAQs from admin preview
 * POST /api/crawler/save-faqs
 */
router.post('/save-faqs', async (req, res) => {
  try {
    const { companyId, faqs } = req.body

    if (!companyId || !faqs || !Array.isArray(faqs)) {
      return res.status(400).json({
        error: 'Missing required fields: companyId, faqs (array)'
      })
    }

    // Get company info
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

    // Get the latest crawl session
    const { data: latestSession, error: sessionError } = await supabase
      .from('crawl_sessions')
      .select('*')
      .eq('company_id', companyId)
      .order('crawl_date', { ascending: false })
      .limit(1)
      .single()

    if (sessionError) {
      return res.status(500).json({
        error: 'Failed to get crawl session'
      })
    }

    if (faqs.length === 0) {
      return res.json({
        success: true,
        message: 'No FAQs to save',
        savedCount: 0
      })
    }

    // Generate embeddings and prepare FAQ data
    const { getEmbedding } = await import('../utils.js')
    const faqData = await Promise.all(faqs.map(async (faq) => {
      try {
        const { questionEmbedding, answerEmbedding } = await getEmbedding(faq.question, faq.answer)
        
        return {
          company_id: companyId,
          company_name: company.name,
          question: faq.question,
          answer: faq.answer,
          question_embedding: questionEmbedding,
          answer_embedding: answerEmbedding,
          source: 'ai_generated_approved',
          confidence: 0.9, // High confidence for approved FAQs
          crawl_session_id: latestSession?.id
        }
      } catch (embeddingError) {
        console.warn(`Failed to generate embeddings for FAQ: ${faq.question.substring(0, 50)}...`, embeddingError.message)
        // Return FAQ without embeddings if embedding generation fails
        return {
          company_id: companyId,
          company_name: company.name,
          question: faq.question,
          answer: faq.answer,
          source: 'ai_generated_approved',
          confidence: 0.9,
          crawl_session_id: latestSession?.id
        }
      }
    }))

    // Save FAQs to database
    const { error: insertError } = await supabase
      .from('faqs')
      .insert(faqData)

    if (insertError) {
      console.error('Failed to save approved FAQs:', insertError)
      return res.status(500).json({
        error: 'Failed to save FAQs to database'
      })
    }

    res.json({
      success: true,
      message: `Successfully saved ${faqs.length} approved FAQs`,
      savedCount: faqs.length
    })

  } catch (error) {
    console.error('Save FAQs error:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

export default router 