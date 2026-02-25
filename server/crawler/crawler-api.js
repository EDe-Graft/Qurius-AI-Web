import express from 'express'
import axios from 'axios'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import crypto from 'crypto'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import QuriusCrawler from './crawler.js'
import { createClient } from '@supabase/supabase-js'
import { getEmbedding } from '../utils.js'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const router = express.Router()
const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, '../uploads')
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true })
    }
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 5 // Maximum 5 files
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword',
      'text/plain',
      'text/markdown'
    ]
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type. Only PDF, Word, and text files are allowed.'), false)
    }
  }
})

// Initialize crawler with Puppeteer support and debug mode
const crawler = new QuriusCrawler({
  enablePuppeteer: true,
  puppeteerTimeout: 30000,
  maxPages: 10,
  maxDepth: 1
  // debugMode: false, // Enable debug mode
  // disableHTMLCleaning: false // Temporarily disable HTML cleaning to debug
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
    let normalizedUrl
    try {
      normalizedUrl = new URL(websiteUrl)
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

    // Prefer the website stored for the company if present (already validated/normalized)
    const targetUrl = company.website || normalizedUrl.toString()

    // Quick reachability check before starting crawl
    try {
      const response = await axios.get(targetUrl, {
        timeout: 5000,
        maxRedirects: 3,
        validateStatus: () => true // we'll inspect status manually
      })

      if (response.status < 200 || response.status >= 400) {
        return res.status(400).json({
          success: false,
          reason: 'http_status',
          error: `Website is not reachable or returned an unexpected status (${response.status}). Please verify the URL and try again.`,
          statusCode: response.status
        })
      }
    } catch (err) {
      console.error('❌ Website reachability check failed:', err.message || err)
      return res.status(400).json({
        success: false,
        reason: 'network_error',
        error: 'We could not reach your website. Please ensure it is publicly accessible and try again.'
      })
    }

    // Start crawling in background
    crawler.crawlCompanyWebsite(companyId, targetUrl)
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
      websiteUrl: targetUrl
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

    // Get the most recent crawl session for this company
    // Select all columns including the new progress tracking columns
    const { data: crawlSession, error } = await supabase
      .from('crawl_sessions')
      .select('*')
      .eq('company_id', companyId)
      .order('crawl_date', { ascending: false })
      .limit(1)
      .single()

    if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
      console.error('Error fetching crawl session:', error)
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch crawl status' 
      })
    }

    // Add default values for new columns if they don't exist
    const sessionWithDefaults = crawlSession ? {
      ...crawlSession,
      progress_percentage: crawlSession.progress_percentage || 0,
      status_details: crawlSession.status_details || null,
      error_message: crawlSession.error_message || null,
      completed_date: crawlSession.completed_date || null,
      updated_at: crawlSession.updated_at || crawlSession.crawl_date
    } : null

    res.json({
      success: true,
      crawlSession: sessionWithDefaults
    })
  } catch (error) {
    console.error('Error in crawl status endpoint:', error)
    res.status(500).json({ 
      success: false, 
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
    const { companyName, content, maxFAQs = 15, companyId, saveToDatabase = false } = req.body

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
    console.log('📝 Save FAQs request received:', {
      body: req.body,
      sessionId: req.body.sessionId,
      approvedFAQs: req.body.approvedFAQs,
      approvedFAQsType: typeof req.body.approvedFAQs,
      isArray: Array.isArray(req.body.approvedFAQs)
    })

    const { sessionId, approvedFAQs } = req.body

    if (!sessionId || !approvedFAQs || !Array.isArray(approvedFAQs)) {
      console.error('❌ Validation failed:', {
        hasSessionId: !!sessionId,
        hasApprovedFAQs: !!approvedFAQs,
        isArray: Array.isArray(approvedFAQs),
        sessionId,
        approvedFAQs
      })
      return res.status(400).json({
        success: false,
        error: 'Invalid request data'
      })
    }

    // Get the crawl session to verify it exists and get company info
    const { data: session, error: sessionError } = await supabase
      .from('crawl_sessions')
      .select('company_id, company_name')
      .eq('id', sessionId)
      .single()

    if (sessionError || !session) {
      return res.status(404).json({
        success: false,
        error: 'Crawl session not found'
      })
    }

    // Save approved FAQs to the faqs table
    const faqsToInsert = []
    
    for (const faq of approvedFAQs) {
      try {
        // Generate embeddings for the FAQ
        console.log(`🧠 Generating embeddings for FAQ: "${faq.question.substring(0, 50)}..."`)
        const { questionEmbedding, answerEmbedding } = await getEmbedding(faq.question, faq.answer)
        
        faqsToInsert.push({
          company_id: session.company_id,
          company_name: session.company_name,
          question: faq.question,
          answer: faq.answer,
          question_embedding: questionEmbedding,
          answer_embedding: answerEmbedding,
          source: 'ai_generated',
          crawl_session_id: sessionId,
          question_hash: crypto.createHash('sha256').update(faq.question.toLowerCase().trim()).digest('hex'),
          created_at: new Date().toISOString()
        })
        
        console.log(`✅ Generated embeddings for FAQ successfully`)
      } catch (embeddingError) {
        console.error(`❌ Failed to generate embeddings for FAQ:`, embeddingError)
        // Still save the FAQ without embeddings rather than failing completely
        faqsToInsert.push({
          company_id: session.company_id,
          company_name: session.company_name,
          question: faq.question,
          answer: faq.answer,
          source: 'ai_generated',
          question_hash: crypto.createHash('sha256').update(faq.question.toLowerCase().trim()).digest('hex'),
          created_at: new Date().toISOString()
        })
        console.log(`⚠️ Saved FAQ without embeddings due to embedding generation failure`)
      }
    }

    const { data: savedFAQs, error: insertError } = await supabase
      .from('faqs')
      .insert(faqsToInsert)
      .select()

    if (insertError) {
      console.error('Error saving FAQs:', insertError)
      return res.status(500).json({
        success: false,
        error: 'Failed to save FAQs'
      })
    }

    // Update crawl session to mark as completed
    const { error: updateError } = await supabase
      .from('crawl_sessions')
      .update({
        status: 'completed',
        faqs_generated: savedFAQs.length,
        completed_date: new Date().toISOString(),
        progress_percentage: 100,
        status_details: `Successfully saved ${savedFAQs.length} approved FAQs`
      })
      .eq('id', sessionId)

    if (updateError) {
      console.error('Error updating crawl session:', updateError)
      // Don't fail the request if this update fails
    }

    console.log(`✅ Saved ${savedFAQs.length} approved FAQs for company ${session.company_name}`)

    res.json({
      success: true,
      message: `Successfully saved ${savedFAQs.length} FAQs`,
      savedFAQs: savedFAQs
    })
  } catch (error) {
    console.error('Error in save FAQs endpoint:', error)
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
})

// New endpoint for document upload and processing
router.post('/upload-documents', upload.array('documents', 5), async (req, res) => {
  try {
    const { companyId } = req.body
    
    if (!companyId) {
      return res.status(400).json({
        success: false,
        error: 'Company ID is required'
      })
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No documents uploaded'
      })
    }

    console.log(`📄 Processing ${req.files.length} uploaded documents for company ${companyId}`)

    // Process uploaded documents
    const result = await crawler.processUploadedDocuments(companyId, req.files)
    
    res.json({
      success: true,
      message: `Successfully processed ${req.files.length} documents`,
      crawlSession: result
    })

  } catch (error) {
    console.error('❌ Document upload processing failed:', error)
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to process uploaded documents'
    })
  }
})

export default router 