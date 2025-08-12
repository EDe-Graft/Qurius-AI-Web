#!/usr/bin/env node

/**
 * Script to import custom HealthPlus Medical FAQs with embeddings
 * Run this after creating the HealthPlus Medical company in the database
 * 
 * Usage: node import-healthplus-faqs.js [company-id]
 * If no company-id is provided, it will search for "HealthPlus Medical" company
 */

import fs from 'fs'
import path from 'path'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

// Configuration
const SUPABASE_URL = process.env.SUPABASE_PROJECT_URL
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const FAQ_FILE = './healthplus-medical-faqs.json'

// Import the getEmbedding function from utils.js
import { getEmbedding } from './utils.js'

async function findHealthPlusCompany() {
  try {
    console.log('🔍 Searching for HealthPlus Medical company...')
    
    const response = await axios.get(
      `${SUPABASE_URL}/rest/v1/companies?name=eq.HealthPlus Medical&select=id,name`,
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
      console.log('⚠️  HealthPlus Medical company not found in database')
      console.log('   Please create the company first or provide the company ID manually')
      console.log('   Usage: node import-healthplus-faqs.js <company-id>')
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
    const {questionEmbedding, answerEmbedding} = await getEmbedding(question, answer)
    return { questionEmbedding, answerEmbedding }
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
    
    // Filter FAQs for HealthPlus Medical
    const healthPlusFAQs = faqData.filter(faq => 
      faq.company === 'HealthPlus Medical' && 
      faq.question && 
      faq.answer
    )
    
    if (healthPlusFAQs.length === 0) {
      console.error('❌ No valid HealthPlus Medical FAQs found in file')
      process.exit(1)
    }
    
    console.log(`✅ Filtered to ${healthPlusFAQs.length} HealthPlus Medical FAQs`)
    
    // Process FAQs with embeddings
    console.log('🚀 Generating embeddings and preparing FAQs...')
    const processedFAQs = []
    
    for (let i = 0; i < healthPlusFAQs.length; i++) {
      const faq = healthPlusFAQs[i]
      console.log(`📝 Processing FAQ ${i + 1}/${healthPlusFAQs.length}`)
      
      try {
        // Generate embeddings
        const {questionEmbedding, answerEmbedding} = await generateEmbeddingsForFAQ(faq.question, faq.answer)
        
        // Prepare FAQ data for database insertion
        const faqData = {
          company_id: companyId,
          company_name: 'HealthPlus Medical',
          question: faq.question,
          answer: faq.answer,
          question_embedding: questionEmbedding,
          answer_embedding: answerEmbedding,
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
  console.log('🏥 HealthPlus Medical FAQ Import Script (with Embeddings)')
  console.log('========================================================\n')
  
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
    companyId = await findHealthPlusCompany()
    if (!companyId) {
      process.exit(1)
    }
  }
  
  console.log(`🏢 Using company ID: ${companyId}\n`)
  
  // Import FAQs
  await importFAQs(companyId)
  
  console.log('\n🎉 Import completed successfully!')
  console.log('💡 Your HealthPlus Medical chatbot is now ready with comprehensive FAQs and embeddings!')
  console.log('🏥 Test questions to try:')
  console.log('   - "What are your business hours?"')
  console.log('   - "Do you accept Blue Cross insurance?"')
  console.log('   - "How much does a primary care visit cost?"')
  console.log('   - "Can I book an appointment online?"')
  console.log('   - "Do you have telemedicine appointments?"')
}

// Run the script
main().catch(error => {
  console.error('💥 Script failed:', error.message)
  process.exit(1)
}) 