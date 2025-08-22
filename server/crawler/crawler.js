import axios from 'axios'
import * as cheerio from 'cheerio'
import crypto from 'crypto'
import { createClient } from '@supabase/supabase-js'
import { getEmbedding, chunkContent, generateFAQs, deduplicateContentWithAI } from '../utils.js'
import { FAQGenerationCompleteEmailTemplate } from '../emailTemplates.js'
import { sendEmail } from '../config/resend.js'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

// Puppeteer will be imported dynamically when needed
let puppeteer = null

// Document processing libraries (will be imported dynamically)
let pdfParse = null
let mammoth = null

dotenv.config({ path: './.env' })

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_PROJECT_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

class QuriusCrawler {
  constructor(options = {}) {
    this.visitedUrls = new Set()
    this.maxPages = options.maxPages || 25 // Maximum pages to crawl per site
    this.maxDepth = options.maxDepth || 1 // Maximum depth for crawling
    this.delay = options.delay || 1000 // Delay between requests (ms)
    this.userAgent = options.userAgent || 'Qurius-AI-Crawler/1.0'
    this.enablePuppeteer = options.enablePuppeteer !== false // Enable Puppeteer by default
    this.puppeteerTimeout = options.puppeteerTimeout || 30000 // Puppeteer timeout in ms
    
    // Performance optimization settings
    this.skipLargeAssets = options.skipLargeAssets !== false // Skip images, videos, etc.
    this.maxContentLength = options.maxContentLength || 8000 // Max content length for processing
    this.minContentLength = options.minContentLength || 50 // Minimum content length to keep
    this.enableTextCleaning = options.enableTextCleaning !== false // Enable text cleaning
    this.requestTimeout = options.requestTimeout || 10000 // HTTP request timeout
    
    // Debug settings
    this.debugMode = options.debugMode || false // Enable debug mode
    this.disableHTMLCleaning = options.disableHTMLCleaning || false // Disable HTML cleaning for debugging
  }

  /**
   * Main crawling function for a company website
   */
  async crawlCompanyWebsite(companyId, baseUrl) {
    let crawlData = null
    
    try {
      console.log(`🕷️ Starting crawl for: ${baseUrl}`)
      
      // Get company info
      const { data: company } = await supabase
        .from('companies')
        .select('*')
        .eq('id', companyId)
        .single()

      if (!company) {
        throw new Error('Company not found')
      }

      // Create initial crawl session record
      const { data: initialSession, error: sessionError } = await supabase
        .from('crawl_sessions')
        .insert({
          company_id: companyId,
          company_name: company.name,
          base_url: baseUrl,
          pages_crawled: 0,
          content_extracted: 0,
          faqs_generated: 0,
          status: 'crawling',
          progress_percentage: 0,
          status_details: 'Starting website crawl...',
          crawl_date: new Date().toISOString()
        })
        .select()
        .single()

      if (sessionError) {
        console.error('❌ Failed to create crawl session:', sessionError)
        throw sessionError
      }

      // Initialize crawl data
      crawlData = {
        companyId,
        companyName: company.name,
        baseUrl,
        sessionId: initialSession?.id,
        pages: [],
        content: [],
        faqs: [],
        metadata: {
          totalPages: 0,
          totalContent: 0,
          crawlDate: new Date().toISOString()
        }
      }

      // Start crawling
      await this.updateCrawlStatus(crawlData.sessionId, 'crawling', 10, 'Crawling website pages...')
      await this.crawlPages(baseUrl, crawlData, 0)
      
      console.log(`📊 Crawling completed summary:`)
      console.log(`  - Total pages crawled: ${crawlData.pages.length}`)
      console.log(`  - Total content items: ${crawlData.content.length}`)
      console.log(`  - Content types found:`, [...new Set(crawlData.content.map(c => c.type))])
      console.log(`  - Total text length: ${crawlData.content.reduce((sum, c) => sum + c.text.length, 0)} chars`)
      
      // Extract existing FAQs from website (not generate new ones)
      await this.updateCrawlStatus(crawlData.sessionId, 'crawling', 30, 'Extracting existing FAQs from website...')
      await this.extractFAQs(crawlData)
      
      // Save raw content chunks first
      await this.updateCrawlStatus(crawlData.sessionId, 'processing_embeddings', 50, 'Generating embeddings for content chunks...')
      await this.saveCrawlResults(crawlData)
      
      // Generate AI FAQs for admin preview
      await this.updateCrawlStatus(crawlData.sessionId, 'generating_faqs', 80, 'Generating AI FAQs from content...')
      const aiFAQs = await this.generateAIFAQs(crawlData)
      crawlData.aiGeneratedFAQs = aiFAQs
      
      console.log(`🤖 AI FAQ generation completed: ${aiFAQs.length} FAQs ready for admin review`)
      
      // Store AI-generated FAQs in crawl session for admin preview
      if (aiFAQs.length > 0) {
        try {
          const { error: updateError } = await supabase
            .from('crawl_sessions')
            .update({
              ai_generated_faqs: aiFAQs,
              ai_faqs_count: aiFAQs.length
            })
            .eq('id', crawlData.sessionId)

          if (updateError) {
            console.warn('⚠️ Failed to store AI-generated FAQs in session:', updateError)
          } else {
            console.log(`✅ Stored ${aiFAQs.length} AI-generated FAQs in crawl session for admin review`)
          }
        } catch (error) {
          console.warn('⚠️ Failed to store AI-generated FAQs:', error.message)
        }
      }
      
      // Update status to ready for review and send email notification
      await this.updateCrawlStatus(crawlData.sessionId, 'ready_for_review', 100, `${aiFAQs.length} AI-generated FAQs ready for review`)
      
      // Send email notification
      await this.sendFAQCompletionEmail(company, aiFAQs.length, 'website')
      
      console.log(`✅ Crawl completed for ${company.name}`)
      return crawlData
      
    } catch (error) {
      console.error('❌ Crawl failed:', error.message)
      
      // Update session to failed if we have a session ID
      if (crawlData?.sessionId) {
        try {
          await this.updateCrawlStatus(crawlData.sessionId, 'failed', null, error.message)
        } catch (statusError) {
          console.error('❌ Failed to update crawl status on error:', statusError)
        }
      }
      
      throw error
    }
  }

  /**
   * Recursively crawl pages from a base URL
   */
  async crawlPages(url, crawlData, depth = 0) {
    if (depth > this.maxDepth || this.visitedUrls.size >= this.maxPages) {
      return
    }

    if (this.visitedUrls.has(url)) {
      return
    }

    this.visitedUrls.add(url)
    
    try {
      console.log(`📄 Crawling: ${url} (depth: ${depth})`)
      
      // Fetch page content
      const response = await axios.get(url, {
        headers: {
          'User-Agent': this.userAgent
        },
        timeout: this.requestTimeout
      })

      const $ = cheerio.load(response.data)
      
      // Extract page data with Cheerio first
      const pageData = this.extractPageContent($, url)
      
      // Check if Cheerio extraction failed (no content extracted)
      if (pageData.content.length === 0) {
        console.log(`⚠️ Cheerio extraction failed - no content found, trying Puppeteer...`)
        
        // Try Puppeteer as fallback for SPAs
        const spaPageData = await this.extractPageContentSPA(url)
        
        if (spaPageData && spaPageData.content.length > 0) {
          console.log(`✅ Puppeteer extraction successful - found ${spaPageData.content.length} content items`)
          crawlData.pages.push(spaPageData)
          crawlData.content.push(...spaPageData.content)
        } else {
          console.log(`❌ Both Cheerio and Puppeteer extraction failed for ${url}`)
          crawlData.pages.push(pageData) // Still add the empty page data
        }
      } else {
        console.log(`✅ Cheerio extraction successful - found ${pageData.content.length} content items`)
        crawlData.pages.push(pageData)
        crawlData.content.push(...pageData.content)
      }
      
      console.log(`📊 Page data summary for ${url}:`)
      console.log(`  - Page added to crawlData.pages (total: ${crawlData.pages.length})`)
      console.log(`  - Content items added to crawlData.content (total: ${crawlData.content.length})`)
      console.log(`  - Page content items: ${pageData.content.length}`)
      
      // Find links for further crawling
      const links = this.extractLinks($, url)
      
      // Add delay to be respectful
      await this.sleep(1000)
      
      // Recursively crawl found links
      for (const link of links.slice(0, 5)) { // Limit to 5 links per page
        await this.crawlPages(link, crawlData, depth + 1)
      }
      
    } catch (error) {
      console.warn(`⚠️ Failed to crawl ${url}:`, error.message)
    }
  }

  /**
   * Clean and optimize HTML content for faster processing
   */
  cleanHTML($) {
    console.log('🧹 Starting HTML cleaning and optimization...')
    
    // Remove large media assets and non-content elements (less aggressive)
    const selectorsToRemove = [
      // Media assets (skip large files)
      'img', 'video', 'audio', 'iframe', 'embed', 'object', 'canvas',
      // Navigation and layout (be more specific)
      'nav', 'header', 'footer', '.nav', '.header', '.footer', '.sidebar', '.menu', '.navigation',
      // UI elements
      '.breadcrumb', '.pagination', '.social-share', '.share-buttons', '.social-media',
      // Ads and marketing
      '.ads', '.advertisement', '.banner', '.popup', '.modal', '.overlay', '.newsletter-signup',
      // Comments and user content
      '.comments', '.comment-section', '.related-posts',
      // Contact and utility
      '.contact-info', '.phone', '.email', '.address', '.map', '.calendar',
      // Interactive elements
      '.search', '.filter', '.sort', '.load-more', '.infinite-scroll',
      // Loading and UI states
      '.lazy-load', '.skeleton', '.loading', '.spinner', '.progress', '.status',
      // Notifications and alerts
      '.notification', '.alert', '.warning', '.error', '.success', '.info', '.tooltip',
      // Scripts and styles (keep meta tags!)
      'script', 'style', 'link[rel="stylesheet"]', 'link',
      // Common boilerplate classes
      '.cookie-notice', '.help', '.accordion', '.tab', '.widget', '.plugin',
      '.gallery', '.carousel', '.slider', '.lightbox', '.fancybox'
    ]
    
    selectorsToRemove.forEach(selector => {
      $(selector).remove()
    })
    
    // Remove elements with common boilerplate text patterns (more conservative)
    $('*').each((i, el) => {
      const $el = $(el)
      const text = $el.text().trim().toLowerCase()
      
      // Only remove elements that are clearly boilerplate (more conservative)
      const boilerplatePatterns = [
        'cookie policy', 'privacy policy', 'terms of service', 'all rights reserved',
        'subscribe to newsletter', 'sign up for updates', 'follow us on social media',
        'loading...', 'please wait...', 'error occurred', 'success message',
        'back to top', 'scroll to top', 'close window', 'dismiss notification'
      ]
      
      // Only remove if the entire text matches a boilerplate pattern
      if (boilerplatePatterns.some(pattern => text === pattern || text.includes(pattern))) {
        $el.remove()
      }
    })
    
    console.log('✅ HTML cleaned - removed boilerplate elements and large assets')
  }

  /**
   * Clean and optimize extracted text content
   */
  cleanTextContent(text) {
    if (!text || typeof text !== 'string') return ''
    
    return text
      // Remove extra whitespace
      .replace(/\s+/g, ' ')
      // Remove common HTML entities
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      // Remove excessive punctuation
      .replace(/[.!?]{2,}/g, '.')
      .replace(/[,]{2,}/g, ',')
      // Clean up spacing around punctuation
      .replace(/\s+([.!?,])/g, '$1')
      .replace(/([.!?,])\s+/g, '$1 ')
      // Remove leading/trailing whitespace
      .trim()
  }

  /**
   * Extract content from a single page using Cheerio (static HTML)
   */
  extractPageContent($, url) {
    console.log(`🔍 Extracting content from: ${url}`)
    
    // Clean HTML first for better performance (unless disabled for debugging)
    if (!this.disableHTMLCleaning) {
      this.cleanHTML($)
    } else {
      console.log('🔧 Debug mode: HTML cleaning disabled')
    }
    
    const title = $('title').text().trim()
    const description = $('meta[name="description"]')?.attr('content') || ''
    
    console.log(`📄 Page title: ${title}`)
    console.log(`📝 Page description: ${description}`)
    
    // Debug: Check what elements exist on the page
    console.log(`🔍 Debug - Page structure analysis:`)
    console.log(`  - Body text length: ${$('body').text().trim().length} chars`)
    console.log(`  - Main elements found: ${$('main').length}`)
    console.log(`  - Article elements found: ${$('article').length}`)
    console.log(`  - Section elements found: ${$('section').length}`)
    console.log(`  - Div elements found: ${$('div').length}`)
    console.log(`  - Paragraph elements found: ${$('p').length}`)
    console.log(`  - Heading elements found: ${$('h1, h2, h3, h4, h5, h6').length}`)
    console.log(`  - List elements found: ${$('ul, ol').length}`)
    
    // Debug: Show first 500 chars of body text
    const bodyText = $('body').text().trim()
    console.log(`  - Body text preview: "${bodyText.substring(0, 500)}..."`)
    
    // Check if this is a React/SPA app
    const hasReactRoot = $('[id*="root"], [id*="app"], [id*="main"]').length > 0
    const hasReactScripts = $('script[src*="react"], script[src*="bundle"], script[src*="main"]').length > 0
    const hasMinimalContent = bodyText.length < 200 && $('div').length > 10
    
    if (hasReactRoot || hasReactScripts || hasMinimalContent) {
      console.log(`⚠️ Detected potential SPA/React app - content may be loaded dynamically`)
      console.log(`  - React root elements: ${hasReactRoot}`)
      console.log(`  - React scripts: ${hasReactScripts}`)
      console.log(`  - Minimal content with many divs: ${hasMinimalContent}`)
    }
    
    // Extract main content with better structure and deduplication
    const content = []
    const extractedTexts = new Set() // Track extracted text to avoid duplicates
    
    // Helper function to add content if not already extracted
    const addUniqueContent = (type, text, priority = 'medium', source = url) => {
      if (!text || text.length < 50) return
      
      const normalizedText = text.toLowerCase().replace(/\s+/g, ' ').trim()
      if (extractedTexts.has(normalizedText)) {
        console.log(`⏭️ Skipping duplicate content: "${text.substring(0, 100)}..."`)
        return
      }
      
      extractedTexts.add(normalizedText)
      content.push({
        type,
        text: text.trim(),
        source,
        priority
      })
      console.log(`📄 Found ${type} content (${text.length} chars)`)
    }
    
    // Get text from main content areas (prioritize these)
    $('main, article, .content, .main, #content, #main').each((i, el) => {
      const rawText = $(el).text().trim()
      const cleanedText = this.cleanTextContent(rawText)
      addUniqueContent('main_content', cleanedText, 'high')
    })
    
    // Get text from sections (avoid overlapping with main content)
    $('section').each((i, el) => {
      // Skip if this section is inside main content areas
      if ($(el).closest('main, article, .content, .main, #content, #main').length > 0) {
        return
      }
      
      const rawText = $(el).text().trim()
      const cleanedText = this.cleanTextContent(rawText)
      addUniqueContent('section', cleanedText, 'medium')
    })
    
    // Get text from paragraphs (avoid overlapping with main content and sections)
    $('p').each((i, el) => {
      // Skip if this paragraph is inside already processed areas
      if ($(el).closest('main, article, .content, .main, #content, #main, section').length > 0) {
        return
      }
      
      const text = $(el).text().trim()
      addUniqueContent('paragraph', text, 'medium')
    })
    
    // Get headings with context (avoid overlapping)
    $('h1, h2, h3, h4, h5, h6').each((i, el) => {
      // Skip if this heading is inside already processed areas
      if ($(el).closest('main, article, .content, .main, #content, #main, section').length > 0) {
        return
      }
      
      const heading = $(el).text().trim()
      if (heading.length > 5) {
        // Get next sibling content for context
        const nextContent = $(el).next().text().trim()
        const combinedText = nextContent.length > 20 ? 
          `${heading}: ${nextContent}` : heading
        
        addUniqueContent('heading_with_context', combinedText, 'high')
      }
    })
    
    // Get list items (avoid overlapping)
    $('ul li, ol li').each((i, el) => {
      // Skip if this list item is inside already processed areas
      if ($(el).closest('main, article, .content, .main, #content, #main, section').length > 0) {
        return
      }
      
      const text = $(el).text().trim()
      addUniqueContent('list_item', text, 'medium')
    })
    
    console.log(`📊 Content extraction summary for ${url}:`)
    console.log(`  - Total content items extracted: ${content.length}`)
    console.log(`  - Content types:`, content.map(c => c.type))
    console.log(`  - Total text length: ${content.reduce((sum, c) => sum + c.text.length, 0)} chars`)
    
    // Fallback: If no content extracted, try to get any meaningful text
    if (content.length === 0) {
      console.log(`⚠️ No content extracted with standard selectors - trying fallback extraction`)
      
      // Get all text from body and split into meaningful chunks
      const allText = $('body').text().trim()
      if (allText.length > 100) {
        // Split by common delimiters and create chunks
        const textChunks = allText
          .split(/\n{2,}|\.{2,}|!{2,}|\?{2,}/) // Split by double newlines, periods, etc.
          .map(chunk => chunk.trim())
          .filter(chunk => chunk.length > 50 && chunk.length < 2000)
          .slice(0, 10) // Limit to 10 chunks
        
        console.log(`📄 Fallback extraction found ${textChunks.length} text chunks`)
        
        textChunks.forEach((chunk, index) => {
          addUniqueContent('fallback_text', chunk, 'medium')
        })
      } else {
        console.log(`⚠️ Fallback extraction also failed - body text too short (${allText.length} chars)`)
      }
    }
    
    return {
      url,
      title,
      description,
      content,
      timestamp: new Date().toISOString()
    }
  }

  /**
   * Initialize Puppeteer if not already loaded
   */
  async initPuppeteer() {
    if (!puppeteer) {
      try {
        console.log('🌐 Initializing Puppeteer for SPA support...')
        puppeteer = await import('puppeteer')
        console.log('✅ Puppeteer initialized successfully')
      } catch (error) {
        console.log('❌ Failed to initialize Puppeteer:', error.message)
        console.log('⚠️ SPA support will be limited - install with: npm install puppeteer')
        return false
      }
    }
    return true
  }

  /**
   * Extract content from a single page using Puppeteer (for SPAs)
   */
  async extractPageContentSPA(url) {
    if (!this.enablePuppeteer) {
      console.log('⚠️ Puppeteer is disabled in configuration')
      return null
    }
    
    const puppeteerAvailable = await this.initPuppeteer()
    if (!puppeteerAvailable) {
      console.log('❌ Puppeteer not available - cannot extract SPA content')
      return null
    }

    console.log(`🌐 Extracting SPA content from: ${url}`)
    
    let browser = null
    try {
      // Launch browser
      browser = await puppeteer.default.launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--disable-gpu'
        ]
      })

      const page = await browser.newPage()
      
      // Set user agent
      await page.setUserAgent(this.userAgent)
      
      // Set viewport
      await page.setViewport({ width: 1280, height: 720 })
      
      // Navigate to page
      console.log(`🌐 Navigating to ${url}...`)
      await page.goto(url, { 
        waitUntil: 'networkidle2',
        timeout: this.puppeteerTimeout 
      })
      
      // Wait for content to load (additional wait for SPAs)
      console.log(`⏳ Waiting for content to load...`)
      await new Promise(resolve => setTimeout(resolve, 3000)) // Wait 3 seconds for dynamic content
      
      // Check if content has loaded
      const contentLoaded = await page.evaluate(() => {
        const bodyText = document.body.textContent.trim()
        return bodyText.length > 100
      })
      
      if (!contentLoaded) {
        console.log(`⚠️ Content still not loaded after wait - trying longer wait`)
        await new Promise(resolve => setTimeout(resolve, 5000)) // Wait another 5 seconds
      }
      
      // Extract page data
      const pageData = await page.evaluate(() => {
        const title = document.title.trim()
        const description = document.querySelector('meta[name="description"]')?.content || ''
        
        // Remove unwanted elements
        const unwantedSelectors = 'script, style, nav, footer, header, .nav, .header, .footer, .sidebar'
        const unwantedElements = document.querySelectorAll(unwantedSelectors)
        unwantedElements.forEach(el => el.remove())
        
        const content = []
        
        // Extract main content areas
        document.querySelectorAll('main, article, .content, .main, #content, #main').forEach(el => {
          const text = el.textContent.trim()
          if (text.length > 100) {
            content.push({
              type: 'main_content',
              text: text,
              source: window.location.href,
              priority: 'high'
            })
          }
        })
        
        // Extract sections and divs
        document.querySelectorAll('section, div').forEach(el => {
          const text = el.textContent.trim()
          if (text.length > 150 && text.length < 2000) {
            content.push({
              type: 'section',
              text: text,
              source: window.location.href,
              priority: 'medium'
            })
          }
        })
        
        // Extract paragraphs
        document.querySelectorAll('p').forEach(el => {
          const text = el.textContent.trim()
          if (text.length > 50) {
            content.push({
              type: 'paragraph',
              text: text,
              source: window.location.href,
              priority: 'medium'
            })
          }
        })
        
        // Extract headings with context
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
          const heading = el.textContent.trim()
          if (heading.length > 5) {
            const nextContent = el.nextElementSibling?.textContent.trim() || ''
            const combinedText = nextContent.length > 20 ? 
              `${heading}: ${nextContent}` : heading
            
            content.push({
              type: 'heading_with_context',
              text: combinedText,
              source: window.location.href,
              priority: 'high'
            })
          }
        })
        
        // Extract list items
        document.querySelectorAll('ul li, ol li').forEach(el => {
          const text = el.textContent.trim()
          if (text.length > 30) {
            content.push({
              type: 'list_item',
              text: text,
              source: window.location.href,
              priority: 'medium'
            })
          }
        })
        
        // Fallback: If no content extracted, get any meaningful text
        if (content.length === 0) {
          const allText = document.body.textContent.trim()
          if (allText.length > 100) {
            const textChunks = allText
              .split(/\n{2,}|\.{2,}|!{2,}|\?{2,}/)
              .map(chunk => chunk.trim())
              .filter(chunk => chunk.length > 50 && chunk.length < 2000)
              .slice(0, 10)
            
            textChunks.forEach(chunk => {
              content.push({
                type: 'fallback_text',
                text: chunk,
                source: window.location.href,
                priority: 'medium'
              })
            })
          }
        }
        
        return {
          title,
          description,
          content,
          bodyTextLength: document.body.textContent.trim().length
        }
      })
      
      console.log(`📄 SPA Page title: ${pageData.title}`)
      console.log(`📝 SPA Page description: ${pageData.description}`)
      console.log(`📊 SPA Content extraction summary:`)
      console.log(`  - Body text length: ${pageData.bodyTextLength} chars`)
      console.log(`  - Total content items extracted: ${pageData.content.length}`)
      console.log(`  - Content types:`, pageData.content.map(c => c.type))
      console.log(`  - Total text length: ${pageData.content.reduce((sum, c) => sum + c.text.length, 0)} chars`)
      
      return {
        url,
        title: pageData.title,
        description: pageData.description,
        content: pageData.content,
        timestamp: new Date().toISOString()
      }
      
    } catch (error) {
      console.error(`❌ SPA content extraction failed for ${url}:`, error.message)
      return null
    } finally {
      if (browser) {
        await browser.close()
      }
    }
  }

  /**
   * Extract links from a page
   */
  extractLinks($, baseUrl) {
    const links = []
    const baseUrlObj = new URL(baseUrl)
    
    $('a[href]').each((i, el) => {
      const href = $(el).attr('href')
      if (!href) return
      
      try {
        let fullUrl
        if (href.startsWith('http')) {
          fullUrl = href
        } else if (href.startsWith('/')) {
          fullUrl = `${baseUrlObj.protocol}//${baseUrlObj.host}${href}`
        } else {
          fullUrl = new URL(href, baseUrl).href
        }
        
        // Only include links from the same domain
        const linkUrlObj = new URL(fullUrl)
        if (linkUrlObj.host === baseUrlObj.host) {
          links.push(fullUrl)
        }
      } catch (error) {
        // Skip invalid URLs
      }
    })
    
    return [...new Set(links)] // Remove duplicates
  }

  /**
   * Extract FAQs from crawled content (only existing FAQ patterns on website)
   */
  async extractFAQs(crawlData) {
    console.log('🔍 Looking for existing FAQ patterns on website...')
    
    const faqs = []
    const content = crawlData.content
    
    // Look for existing FAQ patterns on the website
    for (const item of content) {
      const text = item.text.toLowerCase()
      
      // Common FAQ indicators
      const faqPatterns = [
        /(what|how|why|when|where|can|could|would|should|do|does|is|are|will)/i,
        /(question|answer|faq|frequently asked)/i,
        /(help|support|guide|tutorial)/i
      ]
      
      // Check if content looks like a FAQ
      const isFAQ = faqPatterns.some(pattern => pattern.test(text))
      
      if (isFAQ && text.length > 20 && text.length < 1000) {
        // Try to extract question-answer pairs
        const qaPairs = this.extractQAPairs(item.text)
        faqs.push(...qaPairs)
      }
    }
    
    // Remove duplicates and filter quality
    const uniqueFAQs = this.deduplicateFAQs(faqs)
    crawlData.faqs = uniqueFAQs.slice(0, 10) // Limit to 10 existing FAQs
    
    console.log(`✅ Extracted ${crawlData.faqs.length} existing FAQs from website`)
  }

  /**
   * Extract question-answer pairs from text
   */
  extractQAPairs(text) {
    const faqs = []
    
    // Split by common separators
    const sections = text.split(/\n{2,}|\.{2,}|-{2,}/)
    
    for (const section of sections) {
      const lines = section.split('\n').filter(line => line.trim().length > 0)
      
      if (lines.length >= 2) {
        const question = lines[0].trim()
        const answer = lines.slice(1).join(' ').trim()
        
        if (question.length > 10 && answer.length > 20) {
          faqs.push({
            question: question,
            answer: answer,
            confidence: 0.8,
            source: 'crawled'
          })
        }
      }
    }
    
    return faqs
  }

  /**
   * Generate FAQs using AI from crawled content
   */
  async generateAIFAQs(crawlData) {
    console.log('🤖 Generating AI FAQs from crawled content...')
    
    if (crawlData.content.length === 0) {
      console.log('⚠️ No content available for FAQ generation')
      return []
    }

    try {
      // Combine all content for context
      const allContent = crawlData.content
        .map(item => item.text)
        .join('\n\n')
        .substring(0, 8000) // Limit context size

      console.log(`📝 Using ${crawlData.content.length} content items for FAQ generation`)
      console.log(`📊 Total content length: ${allContent.length} characters`)

      // Use the existing generateFAQs function from utils.js
      const faqs = await generateFAQs(crawlData.companyName, allContent, 15)
      
      console.log(`✅ Generated ${faqs.length} AI FAQs using utils.js function`)
      return faqs

    } catch (error) {
      console.error('❌ Failed to generate AI FAQs:', error.message)
      return []
    }
  }



  /**
   * Remove duplicate FAQs
   */
  deduplicateFAQs(faqs) {
    const seen = new Set()
    return faqs.filter(faq => {
      const key = faq.question.toLowerCase().trim()
      if (seen.has(key)) {
        return false
      }
      seen.add(key)
      return true
    })
  }

  /**
   * Remove duplicate content chunks using AI-powered semantic analysis
   */
  async deduplicateContentChunks(chunks) {
    console.log(`🔍 Starting AI-powered deduplication for ${chunks.length} content chunks...`)
    
    try {
      // Use AI-powered deduplication for better semantic understanding
      const uniqueChunks = await deduplicateContentWithAI(chunks, 0.85);
      
      const duplicatesRemoved = chunks.length - uniqueChunks.length;
      console.log(`✅ AI deduplication completed: ${duplicatesRemoved} duplicates removed, ${uniqueChunks.length} unique chunks remaining`);
      
      return uniqueChunks;
    } catch (error) {
      console.error('❌ AI deduplication failed, falling back to basic deduplication:', error.message);
      
      // Fallback to basic deduplication if AI fails
      return this.basicDeduplicateContentChunks(chunks);
    }
  }

  /**
   * Basic deduplication fallback using text similarity (original method)
   */
  basicDeduplicateContentChunks(chunks) {
    console.log(`🔍 Using basic deduplication for ${chunks.length} content chunks...`)
    
    const uniqueChunks = []
    const seenContent = new Set()
    let duplicatesRemoved = 0
    
    for (const chunk of chunks) {
      // Normalize text for comparison (remove extra whitespace, lowercase)
      const normalizedText = chunk.content
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim()
      
      // Skip if we've seen this content before
      if (seenContent.has(normalizedText)) {
        duplicatesRemoved++
        console.log(`⏭️ Skipping duplicate chunk: "${chunk.content.substring(0, 100)}..."`)
        continue
      }
      
      // Check for similar content (90% similarity threshold)
      let isDuplicate = false
      for (const existingChunk of uniqueChunks) {
        const existingNormalized = existingChunk.content
          .toLowerCase()
          .replace(/\s+/g, ' ')
          .trim()
        
        const similarity = this.calculateTextSimilarity(normalizedText, existingNormalized)
        if (similarity > 0.9) {
          isDuplicate = true
          duplicatesRemoved++
          console.log(`⏭️ Skipping similar chunk (${Math.round(similarity * 100)}% similarity): "${chunk.content.substring(0, 100)}..."`)
          break
        }
      }
      
      if (!isDuplicate) {
        seenContent.add(normalizedText)
        uniqueChunks.push(chunk)
      }
    }
    
    console.log(`✅ Basic deduplication complete: ${duplicatesRemoved} duplicates removed, ${uniqueChunks.length} unique chunks remaining`)
    return uniqueChunks
  }

  /**
   * Calculate text similarity using simple character-based comparison
   */
  calculateTextSimilarity(text1, text2) {
    if (text1 === text2) return 1.0
    
    const longer = text1.length > text2.length ? text1 : text2
    const shorter = text1.length > text2.length ? text2 : text1
    
    if (longer.length === 0) return 1.0
    
    // Use Levenshtein distance for similarity
    const distance = this.levenshteinDistance(longer, shorter)
    return (longer.length - distance) / longer.length
  }

  /**
   * Calculate Levenshtein distance between two strings
   */
  levenshteinDistance(str1, str2) {
    const matrix = []
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i]
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          )
        }
      }
    }
    
    return matrix[str2.length][str1.length]
  }

  /**
   * Hash content for duplicate detection
   */
  hashContent(content) {
    const normalizedContent = content.toLowerCase().replace(/\s+/g, ' ').trim()
    return crypto.createHash('sha256').update(normalizedContent).digest('hex')
  }

  /**
   * Get existing content hashes from database for a company
   */
  async getExistingContentHashes(companyId) {
    try {
      const { data: existingChunks, error } = await supabase
        .from('company_content_chunks')
        .select('content')
        .eq('company_id', companyId)

      if (error) {
        console.warn('⚠️ Failed to fetch existing content:', error)
        return new Set()
      }

      const contentHashes = new Set()
      existingChunks.forEach(chunk => {
        const hash = this.hashContent(chunk.content)
        contentHashes.add(hash)
      })

      return contentHashes
    } catch (error) {
      console.warn('⚠️ Error checking existing content:', error)
      return new Set()
    }
  }

  /**
   * Save crawl results to database
   */
  async saveCrawlResults(crawlData) {
    console.log(`💾 Starting to save crawl results...`)
    console.log(`📊 Crawl data structure:`, {
      companyId: crawlData.companyId,
      companyName: crawlData.companyName,
      sessionId: crawlData.sessionId,
      pagesCount: crawlData.pages.length,
      contentCount: crawlData.content.length,
      faqsCount: crawlData.faqs.length
    })
    
    try {
      // Update crawl session with current progress (but don't mark as completed yet)
      const { error: crawlError } = await supabase
        .from('crawl_sessions')
        .update({
          pages_crawled: crawlData.pages.length,
          content_extracted: crawlData.content.length,
          faqs_generated: crawlData.faqs.length
          // Note: Don't set status to 'completed' here - let the main function handle status updates
        })
        .eq('id', crawlData.sessionId)

      if (crawlError) {
        console.warn('⚠️ Failed to update crawl session:', crawlError)
        throw crawlError
      }

      // Save content chunks with embeddings for RAG
      if (crawlData.content.length > 0) {
        console.log(`📝 Processing content chunks for RAG...`)
        console.log(`📊 Total content items to process: ${crawlData.content.length}`)
        
        // Process each content item individually for better chunking
        const chunkData = [];
        let chunkIndex = 0;
        let processedItems = 0;
        let skippedItems = 0;
        
        for (const contentItem of crawlData.content) {
          try {
            console.log(`🔍 Processing content item ${processedItems + 1}/${crawlData.content.length}:`, {
              type: contentItem.type,
              textLength: contentItem.text.length,
              priority: contentItem.priority,
              source: contentItem.source
            });
            
            // Skip very short content
            if (contentItem.text.length < 50) {
              console.log(`⏭️ Skipping content item - too short (${contentItem.text.length} chars)`);
              skippedItems++;
              continue;
            }
            
            // Create chunks from this content item
            console.log(`✂️ Creating chunks from content item...`);
            const itemChunks = chunkContent(contentItem.text, 800); // Larger chunks for better context
            console.log(`📄 Generated ${itemChunks.length} chunks from this content item`);
            
            for (let i = 0; i < itemChunks.length; i++) {
              const chunk = itemChunks[i];
              console.log(`🔧 Processing chunk ${i + 1}/${itemChunks.length} (${chunk.length} chars)`);
              
              try {
                console.log(`🧠 Generating embedding for chunk...`);
                const { questionEmbedding } = await getEmbedding(chunk, '');
                console.log(`✅ Embedding generated successfully`);
                
                chunkData.push({
                  company_id: crawlData.companyId,
                  content: chunk,
                  crawl_session_id: crawlData.sessionId,
                  embedding: questionEmbedding,
                  source: 'web_scraped',
                  chunk_index: chunkIndex++,
                  content_type: contentItem.type,
                  priority: contentItem.priority || 'medium',
                  source_url: contentItem.source,
                  content_hash: this.hashContent(chunk)
                });
                console.log(`📝 Chunk added to batch (with embedding)`);
              } catch (embeddingError) {
                console.warn(`⚠️ Failed to generate embeddings for content chunk ${chunkIndex}:`, embeddingError.message);
                console.warn(`⚠️ Embedding error details:`, embeddingError);
                // Still save chunk without embedding
                chunkData.push({
                  company_id: crawlData.companyId,
                  content: chunk,
                  crawl_session_id: crawlData.sessionId,
                  source: 'web_scraped',
                  chunk_index: chunkIndex++,
                  content_type: contentItem.type,
                  priority: contentItem.priority || 'medium',
                  source_url: contentItem.source,
                  content_hash: this.hashContent(chunk)
                });
                console.log(`📝 Chunk added to batch (without embedding)`);
              }
            }
            
            processedItems++;
            console.log(`✅ Content item ${processedItems} processed successfully`);
            
          } catch (error) {
            console.error(`❌ Failed to process content item ${processedItems + 1}:`, error.message);
            console.error(`❌ Error details:`, error);
            skippedItems++;
          }
        }
        
        console.log(`📊 Processing summary:`);
        console.log(`  - Total content items: ${crawlData.content.length}`);
        console.log(`  - Processed items: ${processedItems}`);
        console.log(`  - Skipped items: ${skippedItems}`);
        console.log(`  - Total chunks generated: ${chunkData.length}`);
        
        if (chunkData.length > 0) {
          // Deduplicate content chunks before saving
          const uniqueChunks = await this.deduplicateContentChunks(chunkData);
          
          // Check for existing content in database to avoid duplicates
          console.log(`🔍 Checking for existing content in database...`);
          const existingContent = await this.getExistingContentHashes(crawlData.companyId);
          console.log(`📊 Found ${existingContent.size} existing content items in database`);
          
          // Filter out chunks that already exist
          const newChunks = uniqueChunks.filter(chunk => {
            const contentHash = this.hashContent(chunk.content);
            if (existingContent.has(contentHash)) {
              console.log(`⏭️ Skipping existing content: "${chunk.content.substring(0, 100)}..."`);
              return false;
            }
            return true;
          });
          
          console.log(`💾 Saving ${newChunks.length} new content chunks to database...`);
          
          // Save content chunks to database
          const { error: chunkError } = await supabase
            .from('company_content_chunks')
            .insert(newChunks);

          if (chunkError) {
            console.error('❌ Failed to save content chunks:', chunkError);
            console.error('❌ Database error details:', chunkError);
          } else {
            console.log(`✅ Successfully saved ${newChunks.length} new content chunks with embeddings to database`);
          }
        } else {
          console.warn('⚠️ No content chunks generated - database will remain empty');
        }
      } else {
        console.warn('⚠️ No content items found in crawlData.content - database will remain empty');
        console.log('🔍 crawlData.content:', crawlData.content);
      }

      // Save existing FAQs to database with embeddings (only if found on website)
      if (crawlData.faqs.length > 0) {
        console.log(`📝 Generating embeddings for ${crawlData.faqs.length} existing FAQs found on website...`)
        
        // Generate embeddings for each FAQ
        const faqData = await Promise.all(crawlData.faqs.map(async (faq) => {
          try {
            // Generate embeddings using the same function as FAQ import
            const { questionEmbedding, answerEmbedding } = await getEmbedding(faq.question, faq.answer)
            
            return {
              company_id: crawlData.companyId,
              company_name: crawlData.companyName,
              question: faq.question,
              answer: faq.answer,
              question_embedding: questionEmbedding,
              answer_embedding: answerEmbedding,
              source: 'website_existing', // Changed to indicate these are existing FAQs
              confidence: faq.confidence || 0.8, // Higher confidence for existing FAQs
              crawl_session_id: crawlData.sessionId
            }
          } catch (embeddingError) {
            console.warn(`⚠️ Failed to generate embeddings for FAQ: ${faq.question.substring(0, 50)}...`, embeddingError.message)
            // Return FAQ without embeddings if embedding generation fails
            return {
              company_id: crawlData.companyId,
              company_name: crawlData.companyName,
              question: faq.question,
              answer: faq.answer,
              source: 'website_existing',
              confidence: faq.confidence || 0.8,
              crawl_session_id: crawlData.sessionId
            }
          }
        }))

        const { error: faqError } = await supabase
          .from('faqs')
          .insert(faqData)

        if (faqError) {
          console.warn('⚠️ Failed to save existing FAQs:', faqError)
        } else {
          console.log(`✅ Saved ${crawlData.faqs.length} existing FAQs with embeddings to database`)
        }
      } else {
        console.log('ℹ️ No existing FAQs found on website - focusing on content chunks for RAG')
      }

    } catch (error) {
      console.error('❌ Failed to save crawl results:', error)
      console.error('❌ Error stack:', error.stack)
      console.error('❌ Error details:', {
        message: error.message,
        name: error.name,
        code: error.code
      })
      
      // Update crawl session to failed status
      try {
        await supabase
          .from('crawl_sessions')
          .update({
            pages_crawled: crawlData.pages.length,
            content_extracted: crawlData.content.length,
            faqs_generated: crawlData.faqs.length,
            status: 'failed',
            error_message: error.message,
            completed_date: new Date().toISOString()
          })
          .eq('id', crawlData.sessionId)
      } catch (statusError) {
        console.error('❌ Failed to update crawl status:', statusError)
      }
      
      throw error
    }
  }

  /**
   * Process uploaded documents instead of crawling websites
   */
  async processUploadedDocuments(companyId, files) {
    let crawlData = null
    
    try {
      console.log(`📄 Starting document processing for company ${companyId}`)
      
      // Get company info
      const { data: company } = await supabase
        .from('companies')
        .select('*')
        .eq('id', companyId)
        .single()

      if (!company) {
        throw new Error('Company not found')
      }

      // Create initial crawl session record for document processing
      const { data: initialSession, error: sessionError } = await supabase
        .from('crawl_sessions')
        .insert({
          company_id: companyId,
          company_name: company.name,
          base_url: 'document_upload',
          pages_crawled: files.length,
          content_extracted: 0,
          faqs_generated: 0,
          status: 'crawling',
          progress_percentage: 0,
          status_details: 'Processing uploaded documents...',
          crawl_date: new Date().toISOString()
        })
        .select()
        .single()

      if (sessionError) {
        console.error('❌ Failed to create crawl session:', sessionError)
        throw sessionError
      }

      // Initialize crawl data
      crawlData = {
        companyId,
        companyName: company.name,
        baseUrl: 'document_upload',
        sessionId: initialSession?.id,
        pages: [],
        content: [],
        faqs: [],
        metadata: {
          totalPages: files.length,
          totalContent: 0,
          crawlDate: new Date().toISOString()
        }
      }

      // Process each uploaded file
      await this.updateCrawlStatus(crawlData.sessionId, 'crawling', 20, 'Extracting content from documents...')
      for (const file of files) {
        console.log(`📄 Processing file: ${file.originalname}`)
        const fileContent = await this.extractDocumentContent(file)
        
        if (fileContent && fileContent.length > 0) {
          crawlData.content.push(...fileContent)
          console.log(`✅ Extracted ${fileContent.length} content items from ${file.originalname}`)
        }
      }
      
      console.log(`📊 Document processing completed summary:`)
      console.log(`  - Total files processed: ${files.length}`)
      console.log(`  - Total content items: ${crawlData.content.length}`)
      console.log(`  - Total text length: ${crawlData.content.reduce((sum, c) => sum + c.text.length, 0)} chars`)
      
      // Extract existing FAQs from documents (if any)
      await this.updateCrawlStatus(crawlData.sessionId, 'crawling', 40, 'Extracting existing FAQs from documents...')
      await this.extractFAQs(crawlData)
      
      // Save raw content chunks first
      await this.updateCrawlStatus(crawlData.sessionId, 'processing_embeddings', 60, 'Generating embeddings for document content...')
      await this.saveCrawlResults(crawlData)
      
      // Generate AI FAQs for admin preview
      await this.updateCrawlStatus(crawlData.sessionId, 'generating_faqs', 80, 'Generating AI FAQs from document content...')
      const aiFAQs = await this.generateAIFAQs(crawlData)
      crawlData.aiGeneratedFAQs = aiFAQs
      
      console.log(`🤖 AI FAQ generation completed: ${aiFAQs.length} FAQs ready for admin review`)
      
      // Store AI-generated FAQs in crawl session for admin preview
      if (aiFAQs.length > 0) {
        try {
          const { error: updateError } = await supabase
            .from('crawl_sessions')
            .update({
              ai_generated_faqs: aiFAQs,
              ai_faqs_count: aiFAQs.length
            })
            .eq('id', crawlData.sessionId)

          if (updateError) {
            console.warn('⚠️ Failed to store AI-generated FAQs in session:', updateError)
          } else {
            console.log(`✅ Stored ${aiFAQs.length} AI-generated FAQs in crawl session for admin review`)
          }
        } catch (error) {
          console.warn('⚠️ Failed to store AI-generated FAQs:', error.message)
        }
      }
      
      // Update status to ready for review and send email notification
      await this.updateCrawlStatus(crawlData.sessionId, 'ready_for_review', 100, `${aiFAQs.length} AI-generated FAQs ready for review`)
      
      // Send email notification
      await this.sendFAQCompletionEmail(company, aiFAQs.length, 'uploaded documents')
      
      console.log(`✅ Document processing completed for ${company.name}`)
      return crawlData
      
    } catch (error) {
      console.error('❌ Document processing failed:', error.message)
      
      // Update session to failed if we have a session ID
      if (crawlData?.sessionId) {
        try {
          await this.updateCrawlStatus(crawlData.sessionId, 'failed', null, error.message)
        } catch (statusError) {
          console.error('❌ Failed to update crawl status on error:', statusError)
        }
      }
      
      throw error
    }
  }

  /**
   * Extract content from uploaded document files
   */
  async extractDocumentContent(file) {
    try {
      console.log(`🔍 Extracting content from: ${file.originalname} (${file.mimetype})`)
      
      const filePath = file.path
      const fileExtension = path.extname(file.originalname).toLowerCase()
      
      let extractedText = ''
      
      // Extract text based on file type
      switch (fileExtension) {
        case '.pdf':
          extractedText = await this.extractPDFContent(filePath)
          break
        case '.docx':
          extractedText = await this.extractDOCXContent(filePath)
          break
        case '.doc':
          extractedText = await this.extractDOCContent(filePath)
          break
        case '.txt':
        case '.md':
          extractedText = await this.extractTextContent(filePath)
          break
        default:
          console.warn(`⚠️ Unsupported file type: ${fileExtension}`)
          return []
      }
      
      if (!extractedText || extractedText.trim().length === 0) {
        console.warn(`⚠️ No text extracted from ${file.originalname}`)
        return []
      }
      
      // Clean the extracted text
      const cleanedText = this.cleanTextContent(extractedText)
      
      if (cleanedText.length < 50) {
        console.warn(`⚠️ Text too short after cleaning: ${cleanedText.length} chars`)
        return []
      }
      
      // Create content chunks from the document
      const content = []
      
      // Split document into sections based on headers or natural breaks
      const sections = this.splitDocumentIntoSections(cleanedText)
      
      sections.forEach((section, index) => {
        if (section.text.length > 100) {
          content.push({
            type: 'document_section',
            text: section.text,
            source: file.originalname,
            priority: section.priority || 'medium',
            section_title: section.title || `Section ${index + 1}`
          })
        }
      })
      
      console.log(`📄 Extracted ${content.length} sections from ${file.originalname}`)
      return content
      
    } catch (error) {
      console.error(`❌ Failed to extract content from ${file.originalname}:`, error.message)
      return []
    }
  }

  /**
   * Extract text from PDF files
   */
  async extractPDFContent(filePath) {
    try {
      if (!pdfParse) {
        pdfParse = (await import('pdf-parse')).default
      }
      
      const dataBuffer = fs.readFileSync(filePath)
      const data = await pdfParse(dataBuffer)
      return data.text
    } catch (error) {
      console.error('❌ PDF extraction failed:', error.message)
      throw error
    }
  }

  /**
   * Extract text from DOCX files
   */
  async extractDOCXContent(filePath) {
    try {
      if (!mammoth) {
        mammoth = (await import('mammoth')).default
      }
      
      const result = await mammoth.extractRawText({ path: filePath })
      return result.value
    } catch (error) {
      console.error('❌ DOCX extraction failed:', error.message)
      throw error
    }
  }

  /**
   * Extract text from DOC files (legacy Word format)
   */
  async extractDOCContent(filePath) {
    try {
      if (!mammoth) {
        mammoth = (await import('mammoth')).default
      }
      
      const result = await mammoth.extractRawText({ path: filePath })
      return result.value
    } catch (error) {
      console.error('❌ DOC extraction failed:', error.message)
      throw error
    }
  }

  /**
   * Extract text from plain text files
   */
  async extractTextContent(filePath) {
    try {
      return fs.readFileSync(filePath, 'utf8')
    } catch (error) {
      console.error('❌ Text file extraction failed:', error.message)
      throw error
    }
  }

  /**
   * Split document text into meaningful sections
   */
  splitDocumentIntoSections(text) {
    const sections = []
    
    // Split by common document section markers
    const sectionPatterns = [
      /\n\s*[A-Z][A-Z\s]{2,}\n/g, // ALL CAPS HEADERS
      /\n\s*\d+\.\s+[A-Z][^\n]*\n/g, // Numbered sections
      /\n\s*[A-Z][a-z\s]{2,}:\n/g, // Title: format
      /\n\s*[A-Z][a-z\s]{2,}\n/g, // Regular headers
    ]
    
    let currentText = text
    let sectionIndex = 0
    
    // Try to split by headers first
    for (const pattern of sectionPatterns) {
      const matches = [...currentText.matchAll(pattern)]
      
      if (matches.length > 1) {
        // Split by headers
        const parts = currentText.split(pattern)
        
        for (let i = 0; i < parts.length; i++) {
          const part = parts[i].trim()
          if (part.length > 100) {
            const title = i < matches.length ? matches[i]?.[0]?.trim() : `Section ${sectionIndex + 1}`
            sections.push({
              title: title,
              text: part,
              priority: this.determineSectionPriority(title)
            })
            sectionIndex++
          }
        }
        break
      }
    }
    
    // If no headers found, split by paragraphs
    if (sections.length === 0) {
      const paragraphs = text.split(/\n\s*\n/)
      
      paragraphs.forEach((paragraph, index) => {
        const trimmed = paragraph.trim()
        if (trimmed.length > 100) {
          sections.push({
            title: `Paragraph ${index + 1}`,
            text: trimmed,
            priority: 'medium'
          })
        }
      })
    }
    
    return sections
  }

  /**
   * Determine priority based on section title
   */
  determineSectionPriority(title) {
    const highPriorityKeywords = [
      'overview', 'introduction', 'summary', 'executive', 'key', 'important',
      'main', 'primary', 'essential', 'critical', 'core', 'fundamental'
    ]
    
    const lowPriorityKeywords = [
      'appendix', 'references', 'bibliography', 'footnotes', 'endnotes',
      'glossary', 'index', 'table of contents', 'legal', 'disclaimer'
    ]
    
    const titleLower = title.toLowerCase()
    
    if (highPriorityKeywords.some(keyword => titleLower.includes(keyword))) {
      return 'high'
    } else if (lowPriorityKeywords.some(keyword => titleLower.includes(keyword))) {
      return 'low'
    } else {
      return 'medium'
    }
  }

  /**
   * Utility function for delays
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  /**
   * Update crawl session status with progress tracking
   */
  async updateCrawlStatus(sessionId, status, progress = null, details = null) {
    try {
      const updateData = {
        status: status,
        updated_at: new Date().toISOString()
      }

      if (progress !== null) {
        updateData.progress_percentage = progress
      }

      if (details !== null) {
        updateData.status_details = details
      }

      const { error } = await supabase
        .from('crawl_sessions')
        .update(updateData)
        .eq('id', sessionId)

      if (error) {
        console.error('❌ Failed to update crawl status:', error)
      } else {
        console.log(`✅ Crawl status updated to: ${status}${progress ? ` (${progress}%)` : ''}`)
      }
    } catch (error) {
      console.error('❌ Error updating crawl status:', error)
    }
  }

  /**
   * Send FAQ generation completion email
   */
  async sendFAQCompletionEmail(company, faqCount, crawlType) {
    try {
      const adminLink = `${process.env.FRONTEND_URL}/admin`
      const emailHtml = FAQGenerationCompleteEmailTemplate({
        companyName: company.name,
        adminLink: adminLink,
        faqCount: faqCount,
        crawlType: crawlType
      })

      await sendEmail({
        to: 'edgquansah@gmail.com',
        subject: `🤖 AI FAQ Generation Complete - ${company.name}`,
        html: emailHtml
      })

      console.log(`✅ FAQ completion email sent to ${company.admin_email}`)
    } catch (error) {
      console.error('❌ Failed to send FAQ completion email:', error)
    }
  }
}

export default QuriusCrawler 