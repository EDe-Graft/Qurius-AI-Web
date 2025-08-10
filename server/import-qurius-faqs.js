#!/usr/bin/env node

/**
 * Script to import custom Qurius AI FAQs with embeddings
 * Run this after creating the Qurius AI company in the database
 * 
 * Usage: node import-qurius-faqs.js [company-id]
 * If no company-id is provided, it will search for "Qurius AI" company
 */

import fs from 'fs'
import path from 'path'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

// Configuration
const SUPABASE_URL = process.env.SUPABASE_PROJECT_URL
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const FAQ_FILE = './custom-qurius-faqs.json'

// Import the getEmbedding function from utils.js
import { getEmbedding } from './utils.js'

async function findQuriusCompany() {
  try {
    console.log('🔍 Searching for Qurius AI company...')
    
    const response = await axios.get(
      `${SUPABASE_URL}/rest/v1/companies?name=eq.Qurius AI&select=id,name`,
      {
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    )
    
    if (response.data && response.data.length > 0) {
      const company = response.data[0]
      console.log(`✅ Found company: ${company.name} (ID: ${company.id})`)
      return company.id
    } else {
      console.log('⚠️  Qurius AI company not found in database')
      console.log('   Please create the company first or provide the company ID manually')
      console.log('   Usage: node import-qurius-faqs.js <company-id>')
      return null
    }
  } catch (error) {
    console.error('❌ Error finding company:', error.response?.data || error.message)
    return null
  }
}

async function generateEmbeddingsForFAQ(question, answer) {
  try {
    console.log(`🔍 Generating embeddings for: "${question.substring(0, 50)}..."`)
    const embeddings = await getEmbedding(question, answer)
    return {
      question_embedding: embeddings.questionEmbedding,
      answer_embedding: embeddings.answerEmbedding
    }
  } catch (error) {
    console.error('❌ Error generating embeddings:', error.message)
    throw error
  }
}

async function importFAQs(companyId) {
  try {
    console.log('📖 Reading FAQ file...')
    
    // Check if FAQ file exists
    if (!fs.existsSync(FAQ_FILE)) {
      console.error(`❌ FAQ file not found: ${FAQ_FILE}`)
      process.exit(1)
    }
    
    // Read and parse FAQ file
    const faqData = JSON.parse(fs.readFileSync(FAQ_FILE, 'utf8'))
    
    if (!Array.isArray(faqData)) {
      console.error('❌ FAQ file must contain an array of FAQs')
      process.exit(1)
    }
    
    console.log(`📝 Found ${faqData.length} FAQs to import`)
    
    // Filter FAQs for Qurius AI
    const quriusFAQs = faqData.filter(faq => 
      faq.company === 'Qurius AI' && 
      faq.question && 
      faq.answer
    )
    
    if (quriusFAQs.length === 0) {
      console.error('❌ No valid Qurius AI FAQs found in file')
      process.exit(1)
    }
    
    console.log(`✅ Filtered to ${quriusFAQs.length} Qurius AI FAQs`)
    
    // Process FAQs with embeddings
    console.log('🚀 Generating embeddings and preparing FAQs...')
    const processedFAQs = []
    
    for (let i = 0; i < quriusFAQs.length; i++) {
      const faq = quriusFAQs[i]
      console.log(`📝 Processing FAQ ${i + 1}/${quriusFAQs.length}`)
      
      try {
        // Generate embeddings
        const embeddings = await generateEmbeddingsForFAQ(faq.question, faq.answer)
        
        // Prepare FAQ data for database insertion
        const faqData = {
          company_id: companyId,
          company_name: 'Qurius AI',
          question: faq.question,
          answer: faq.answer,
          question_embedding: embeddings.questionEmbedding,
          answer_embedding: embeddings.answerEmbedding,
          source: 'manual',
          confidence: 1.0,
          relevance_score: 1.0
        }
        
        processedFAQs.push(faqData)
        console.log(`✅ FAQ ${i + 1} processed successfully`)
        
        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100))
        
      } catch (error) {
        console.error(`❌ Failed to process FAQ ${i + 1}:`, error.message)
        // Continue with other FAQs
      }
    }
    
    if (processedFAQs.length === 0) {
      console.error('❌ No FAQs were successfully processed')
      process.exit(1)
    }
    
    console.log(`📊 Successfully processed ${processedFAQs.length} FAQs`)
    
    // Insert FAQs into database
    console.log('💾 Inserting FAQs into database...')
    
    const insertResponse = await axios.post(
      `${SUPABASE_URL}/rest/v1/faqs`,
      processedFAQs,
      {
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        }
      }
    )
    
    if (insertResponse.data) {
      console.log('✅ FAQs imported successfully!')
      console.log(`📊 Imported: ${insertResponse.data.length} FAQs`)
      
      // Log some sample imported FAQs
      console.log('\n📋 Sample imported FAQs:')
      insertResponse.data.slice(0, 3).forEach((faq, index) => {
        console.log(`${index + 1}. ${faq.question.substring(0, 60)}...`)
      })
      
    } else {
      console.error('❌ Failed to import FAQs: No response data')
      process.exit(1)
    }
    
  } catch (error) {
    console.error('❌ Error importing FAQs:', error.response?.data || error.message)
    process.exit(1)
  }
}

async function main() {
  console.log('🤖 Qurius AI FAQ Import Script (with Embeddings)')
  console.log('================================================\n')
  
  // Validate environment variables
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing required environment variables:')
    console.error('   - SUPABASE_PROJECT_URL')
    console.error('   - SUPABASE_SERVICE_ROLE_KEY')
    process.exit(1)
  }
  
  if (!process.env.JINA_API_KEY) {
    console.error('❌ Missing required environment variable:')
    console.error('   - JINA_API_KEY (needed for generating embeddings)')
    process.exit(1)
  }
  
  // Get company ID from command line or search
  let companyId = process.argv[2]
  
  if (!companyId) {
    companyId = await findQuriusCompany()
    if (!companyId) {
      process.exit(1)
    }
  }
  
  console.log(`🏢 Using company ID: ${companyId}\n`)
  
  // Import FAQs
  await importFAQs(companyId)
  
  console.log('\n🎉 Import completed successfully!')
  console.log('💡 Your Qurius AI chatbot is now ready with comprehensive FAQs and embeddings!')
}

// Run the script
main().catch(error => {
  console.error('💥 Script failed:', error.message)
  process.exit(1)
}) 