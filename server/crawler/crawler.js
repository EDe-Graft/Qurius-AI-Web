import axios from 'axios'
import * as cheerio from 'cheerio'
import { createClient } from '@supabase/supabase-js'
import { getEmbedding, chunkContent } from '../utils.js'
import dotenv from 'dotenv'

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
  constructor() {
    this.visitedUrls = new Set()
    this.maxPages = 50 // Maximum pages to crawl per site
    this.maxDepth = 3 // Maximum depth for crawling
    this.delay = 1000 // Delay between requests (ms)
    this.userAgent = 'Qurius-AI-Crawler/1.0'
  }

  /**
   * Main crawling function for a company website
   */
  async crawlCompanyWebsite(companyId, baseUrl) {
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
          status: 'running',
          crawl_date: new Date().toISOString()
        })
        .select()
        .single()

      if (sessionError) {
        console.error('❌ Failed to create crawl session:', sessionError)
        throw sessionError
      }

      // Initialize crawl data
      const crawlData = {
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
      await this.crawlPages(baseUrl, crawlData, 0)
      
      // Process and extract FAQs
      await this.extractFAQs(crawlData)
      
      // Save results
      await this.saveCrawlResults(crawlData)
      
      console.log(`✅ Crawl completed for ${company.name}`)
      return crawlData
      
    } catch (error) {
      console.error('❌ Crawl failed:', error.message)
      
      // Update session to failed if we have a session ID
      if (crawlData?.sessionId) {
        try {
          await supabase
            .from('crawl_sessions')
            .update({
              status: 'failed',
              error_message: error.message,
              completed_date: new Date().toISOString()
            })
            .eq('id', crawlData.sessionId)
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
        timeout: 10000
      })

      const $ = cheerio.load(response.data)
      
      // Extract page data
      const pageData = this.extractPageContent($, url)
      crawlData.pages.push(pageData)
      crawlData.content.push(...pageData.content)
      
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
   * Extract content from a single page
   */
  extractPageContent($, url) {
    // Remove script and style elements
    $('script, style, nav, footer, header').remove()
    
    const title = $('title').text().trim()
    const description = $('meta[name="description"]').attr('content') || ''
    
    // Extract main content
    const content = []
    
    // Get text from main content areas
    $('main, article, .content, .main, #content, #main').each((i, el) => {
      const text = $(el).text().trim()
      if (text.length > 50) { // Only significant content
        content.push({
          type: 'main',
          text: text,
          source: url
        })
      }
    })
    
    // Get text from paragraphs
    $('p').each((i, el) => {
      const text = $(el).text().trim()
      if (text.length > 20) {
        content.push({
          type: 'paragraph',
          text: text,
          source: url
        })
      }
    })
    
    // Get headings
    $('h1, h2, h3, h4, h5, h6').each((i, el) => {
      const text = $(el).text().trim()
      if (text.length > 5) {
        content.push({
          type: 'heading',
          text: text,
          source: url
        })
      }
    })
    
    return {
      url,
      title,
      description,
      content,
      timestamp: new Date().toISOString()
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
   * Extract FAQs from crawled content
   */
  async extractFAQs(crawlData) {
    console.log('🤖 Extracting FAQs from crawled content...')
    
    const faqs = []
    const content = crawlData.content
    
    // Look for FAQ patterns
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
    
    // Use AI to generate additional FAQs
    const aiFAQs = await this.generateAIFAQs(crawlData)
    faqs.push(...aiFAQs)
    
    // Remove duplicates and filter quality
    const uniqueFAQs = this.deduplicateFAQs(faqs)
    crawlData.faqs = uniqueFAQs.slice(0, 25) // Limit to 25 FAQs
    
    console.log(`✅ Extracted ${crawlData.faqs.length} FAQs`)
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
   * Generate FAQs using AI
   */
  async generateAIFAQs(crawlData) {
    try {
      // Prepare content for AI processing
      const contentText = crawlData.content
        .map(item => item.text)
        .join('\n')
        .substring(0, 4000) // Limit content length
      
      // Skip AI generation if no content
      if (!contentText.trim()) {
        console.log('⚠️ No content available for AI FAQ generation')
        return []
      }
      
      // Construct backend URL with fallback
      const backendUrl = process.env.BACKEND_URL
      const endpoint = `${backendUrl}/api/ai/generate-faqs`
      
      console.log(`🤖 Calling AI FAQ generation: ${endpoint}`)
      
      // Call the main server's AI FAQ generation endpoint
      const response = await axios.post(endpoint, {
        companyName: crawlData.companyName,
        content: contentText,
        maxFAQs: 25
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 30000 // 30 second timeout
      })
      
      return response.data.faqs || []
      
    } catch (error) {
      console.warn('⚠️ AI FAQ generation failed:', error.response?.data?.error || error.message)
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
   * Save crawl results to database
   */
  async saveCrawlResults(crawlData) {
    try {
      // Update existing crawl session with completed status
      const { error: crawlError } = await supabase
        .from('crawl_sessions')
        .update({
          pages_crawled: crawlData.pages.length,
          content_extracted: crawlData.content.length,
          faqs_generated: crawlData.faqs.length,
          status: 'completed',
          completed_date: new Date().toISOString()
        })
        .eq('id', crawlData.sessionId)

      if (crawlError) {
        console.warn('⚠️ Failed to update crawl session:', crawlError)
        throw crawlError
      }

      // Save content chunks with embeddings for RAG
      if (crawlData.content.length > 0) {
        console.log(`📝 Processing content chunks for RAG...`)
        
        // Combine all content into a single text
        const allContent = crawlData.content
          .map(item => item.text)
          .join('\n')
          .substring(0, 10000); // Limit content length
        
        // Chunk the content
        const contentChunks = chunkContent(allContent, 500);
        console.log(`📝 Generated ${contentChunks.length} content chunks`);
        
        if (contentChunks.length > 0) {
          // Generate embeddings for each content chunk
          const chunkData = await Promise.all(contentChunks.map(async (chunk, index) => {
            try {
              const { questionEmbedding } = await getEmbedding(chunk, '');
              
              return {
                company_id: crawlData.companyId,
                content: chunk,
                crawl_session_id: crawlData.sessionId,
                embedding: questionEmbedding,
                source: 'web_scraped',
                chunk_index: index
              };
            } catch (embeddingError) {
              console.warn(`⚠️ Failed to generate embeddings for content chunk ${index}:`, embeddingError.message);
              // Return chunk without embedding if embedding generation fails
              return {
                company_id: crawlData.companyId,
                content: chunk,
                crawl_session_id: crawlData.sessionId,
                source: 'web_scraped',
                chunk_index: index
              };
            }
          }));

          // Save content chunks to database
          const { error: chunkError } = await supabase
            .from('company_content_chunks')
            .insert(chunkData);

          if (chunkError) {
            console.warn('⚠️ Failed to save content chunks:', chunkError);
          } else {
            console.log(`✅ Saved ${chunkData.length} content chunks with embeddings to database`);
          }
        }
      }

      // Save FAQs to database with embeddings
      if (crawlData.faqs.length > 0) {
        console.log(`📝 Generating embeddings for ${crawlData.faqs.length} FAQs...`)
        
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
              source: faq.source || 'crawler',
              confidence: faq.confidence || 0.7,
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
              source: faq.source || 'crawler',
              confidence: faq.confidence || 0.7,
              crawl_session_id: crawlData.sessionId
            }
          }
        }))

        const { error: faqError } = await supabase
          .from('faqs')
          .insert(faqData)

        if (faqError) {
          console.warn('⚠️ Failed to save FAQs:', faqError)
        } else {
          console.log(`✅ Saved ${crawlData.faqs.length} FAQs with embeddings to database`)
        }
      }

    } catch (error) {
      console.error('❌ Failed to save crawl results:', error)
      
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
   * Utility function for delays
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

export default QuriusCrawler 