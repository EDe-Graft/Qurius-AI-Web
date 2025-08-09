#!/usr/bin/env node

/**
 * Script to import custom Qurius AI FAQs
 * Run this after creating the Qurius AI company in the database
 * 
 * Usage: node import-qurius-faqs.js [company-id]
 * If no company-id is provided, it will search for "Qurius AI" company
 */

import fs from 'fs'
import path from 'path'
import axios from 'axios'

// Configuration
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001'
const FAQ_FILE = './custom-qurius-faqs.json'

async function findQuriusCompany() {
  try {
    console.log('🔍 Searching for Qurius AI company...')
    
    // This would need to be implemented in your backend API
    // For now, we'll return a placeholder
    console.log('⚠️  Please provide the company ID manually')
    console.log('   You can find it in your admin dashboard or database')
    console.log('   Usage: node import-qurius-faqs.js <company-id>')
    return null
  } catch (error) {
    console.error('❌ Error finding company:', error.message)
    return null
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
    
    // Prepare FAQs for import (remove company field as it's not needed)
    const faqsToImport = quriusFAQs.map(({ company, ...faq }) => faq)
    
    // Import FAQs via API
    console.log('🚀 Importing FAQs...')
    
    const response = await axios.post(
      `${BACKEND_URL}/api/companies/${companyId}/faqs`,
      { faqs: faqsToImport },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    )
    
    if (response.data.success) {
      console.log('✅ FAQs imported successfully!')
      console.log(`📊 Imported: ${response.data.imported} FAQs`)
      if (response.data.skipped > 0) {
        console.log(`⚠️  Skipped: ${response.data.skipped} FAQs (duplicates or errors)`)
      }
    } else {
      console.error('❌ Failed to import FAQs:', response.data.error)
      process.exit(1)
    }
    
  } catch (error) {
    console.error('❌ Error importing FAQs:', error.response?.data?.error || error.message)
    process.exit(1)
  }
}

async function main() {
  console.log('🤖 Qurius AI FAQ Import Script')
  console.log('================================\n')
  
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
  console.log('💡 Your Qurius AI chatbot is now ready with comprehensive FAQs!')
}

// Run the script
main().catch(error => {
  console.error('💥 Script failed:', error.message)
  process.exit(1)
}) 