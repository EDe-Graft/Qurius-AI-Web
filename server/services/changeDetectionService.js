import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'
import axios from 'axios'
import * as cheerio from 'cheerio'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_PROJECT_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables for change detection')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export class ChangeDetectionService {
  constructor() {
    this.threshold = 0.1 // 10% change threshold
    this.minContentLength = 100 // Minimum content length to consider
    this.userAgent = 'Qurius-AI-ChangeDetector/1.0'
    this.requestTimeout = 10000 // 10 seconds timeout
  }

  /**
   * Detect content changes for a company website
   */
  async detectContentChanges(companyId, baseUrl) {
    try {
      console.log(`🔍 Checking for content changes: ${baseUrl}`)
      
      // Get automation configuration
      const config = await this.getAutomationConfig()
      this.threshold = config.change_detection?.threshold || 0.1
      this.minContentLength = config.change_detection?.min_content_length || 100

      // Get previously crawled URLs for this company
      const { data: existingHashes, error } = await supabase
        .from('content_hashes')
        .select('*')
        .eq('company_id', companyId)
        .order('last_modified', { ascending: false })

      if (error) {
        console.error('❌ Failed to get existing content hashes:', error)
        return true // Assume changes if we can't check
      }

      if (!existingHashes || existingHashes.length === 0) {
        console.log('📝 No previous content hashes found - assuming changes')
        return true
      }

      // Check each URL for changes
      let totalChanges = 0
      let totalUrls = 0
      const changedUrls = []

      for (const hashRecord of existingHashes.slice(0, 10)) { // Check top 10 most recent URLs
        const hasChanged = await this.checkUrlForChanges(hashRecord)
        totalUrls++
        
        if (hasChanged) {
          totalChanges++
          changedUrls.push(hashRecord.url)
        }
      }

      const changePercentage = totalUrls > 0 ? totalChanges / totalUrls : 0
      const hasSignificantChanges = changePercentage >= this.threshold

      console.log(`📊 Change detection results for ${baseUrl}:`)
      console.log(`  - URLs checked: ${totalUrls}`)
      console.log(`  - URLs with changes: ${totalChanges}`)
      console.log(`  - Change percentage: ${(changePercentage * 100).toFixed(1)}%`)
      console.log(`  - Threshold: ${(this.threshold * 100).toFixed(1)}%`)
      console.log(`  - Significant changes: ${hasSignificantChanges ? 'Yes' : 'No'}`)

      if (changedUrls.length > 0) {
        console.log(`  - Changed URLs: ${changedUrls.slice(0, 3).join(', ')}${changedUrls.length > 3 ? '...' : ''}`)
      }

      return hasSignificantChanges

    } catch (error) {
      console.error('❌ Error detecting content changes:', error)
      return true // Assume changes if detection fails
    }
  }

  /**
   * Check if a specific URL has changed
   */
  async checkUrlForChanges(hashRecord) {
    try {
      const { url, content_hash: previousHash } = hashRecord

      // Fetch current content
      const currentContent = await this.fetchUrlContent(url)
      
      if (!currentContent || currentContent.length < this.minContentLength) {
        console.log(`⚠️ Content too short for ${url} (${currentContent?.length || 0} chars)`)
        return false
      }

      // Generate current hash
      const currentHash = this.generateContentHash(currentContent)

      // Compare hashes
      const hasChanged = currentHash !== previousHash

      if (hasChanged) {
        console.log(`🔄 Content changed for ${url}`)
        console.log(`  - Previous hash: ${previousHash.substring(0, 16)}...`)
        console.log(`  - Current hash: ${currentHash.substring(0, 16)}...`)
      }

      return hasChanged

    } catch (error) {
      console.error(`❌ Error checking URL ${hashRecord.url}:`, error.message)
      return false // Assume no change if we can't check
    }
  }

  /**
   * Fetch content from a URL
   */
  async fetchUrlContent(url) {
    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': this.userAgent
        },
        timeout: this.requestTimeout
      })

      const $ = cheerio.load(response.data)
      
      // Clean HTML and extract text content
      return this.extractTextContent($)

    } catch (error) {
      console.error(`❌ Failed to fetch content from ${url}:`, error.message)
      return null
    }
  }

  /**
   * Extract and clean text content from HTML
   */
  extractTextContent($) {
    // Remove unwanted elements
    $('script, style, nav, footer, header, .nav, .header, .footer, .sidebar, .ads, .advertisement').remove()
    
    // Get text content
    const text = $('body').text()
    
    // Clean text
    return this.cleanText(text)
  }

  /**
   * Clean text content
   */
  cleanText(text) {
    if (!text || typeof text !== 'string') return ''
    
    return text
      .replace(/\s+/g, ' ') // Normalize whitespace
      .replace(/[^\w\s.,!?-]/g, '') // Remove special characters
      .trim()
  }

  /**
   * Generate content hash
   */
  generateContentHash(content) {
    if (!content || typeof content !== 'string') return ''
    
    // Normalize content for consistent hashing
    const normalizedContent = content
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim()
    
    // Generate SHA-256 hash
    return crypto.createHash('sha256').update(normalizedContent).digest('hex')
  }

  /**
   * Store content hash for a URL
   */
  async storeContentHash(companyId, url, content, crawlSessionId = null) {
    try {
      const contentHash = this.generateContentHash(content)
      const contentLength = content.length

      const { error } = await supabase
        .from('content_hashes')
        .upsert({
          company_id: companyId,
          url: url,
          content_hash: contentHash,
          content_length: contentLength,
          crawl_session_id: crawlSessionId,
          last_modified: new Date().toISOString()
        }, {
          onConflict: 'company_id,url'
        })

      if (error) {
        console.error('❌ Failed to store content hash:', error)
      } else {
        console.log(`💾 Stored content hash for ${url}`)
      }

    } catch (error) {
      console.error('❌ Error storing content hash:', error)
    }
  }

  /**
   * Get automation configuration
   */
  async getAutomationConfig() {
    try {
      const { data, error } = await supabase
        .from('automation_config')
        .select('key, value')

      if (error) {
        console.error('❌ Failed to get automation config:', error)
        return {}
      }

      const config = {}
      data.forEach(item => {
        config[item.key] = item.value
      })

      return config

    } catch (error) {
      console.error('❌ Error getting automation config:', error)
      return {}
    }
  }

  /**
   * Batch store content hashes for multiple URLs
   */
  async batchStoreContentHashes(companyId, contentItems, crawlSessionId = null) {
    try {
      const hashRecords = contentItems.map(item => ({
        company_id: companyId,
        url: item.source || item.url,
        content_hash: this.generateContentHash(item.text),
        content_length: item.text.length,
        crawl_session_id: crawlSessionId,
        last_modified: new Date().toISOString()
      }))

      const { error } = await supabase
        .from('content_hashes')
        .upsert(hashRecords, {
          onConflict: 'company_id,url'
        })

      if (error) {
        console.error('❌ Failed to batch store content hashes:', error)
      } else {
        console.log(`💾 Stored ${hashRecords.length} content hashes`)
      }

    } catch (error) {
      console.error('❌ Error batch storing content hashes:', error)
    }
  }

  /**
   * Get change statistics for a company
   */
  async getChangeStatistics(companyId, days = 30) {
    try {
      const { data, error } = await supabase
        .from('content_hashes')
        .select('*')
        .eq('company_id', companyId)
        .gte('last_modified', new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString())
        .order('last_modified', { ascending: false })

      if (error) {
        console.error('❌ Failed to get change statistics:', error)
        return null
      }

      return {
        totalUrls: data.length,
        recentChanges: data.filter(h => h.last_modified > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()).length,
        averageContentLength: data.reduce((sum, h) => sum + (h.content_length || 0), 0) / data.length
      }

    } catch (error) {
      console.error('❌ Error getting change statistics:', error)
      return null
    }
  }
} 