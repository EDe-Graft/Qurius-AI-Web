import QuriusCrawler from './crawler/crawler.js'

async function testPuppeteerCrawler() {
  console.log('🧪 Testing Puppeteer-enabled crawler...')
  
  // Test with different types of websites
  const testUrls = [
    'https://www.urgentcaresuite.com/'
    // 'https://example.com', // Static HTML
    // 'https://qurius.app',   // React SPA
    // 'https://reactjs.org'   // React SPA
  ]
  
  for (const url of testUrls) {
    console.log(`\n🔍 Testing: ${url}`)
    
    try {
      const crawler = new QuriusCrawler({
        maxPages: 1, // Only crawl the main page for testing
        maxDepth: 0,
        enablePuppeteer: true,
        puppeteerTimeout: 15000
      })
      
      // Create a test company ID
      const testCompanyId = '166f1c7e-e800-4813-9217-af195c4ff405'
      
      const result = await crawler.crawlCompanyWebsite(testCompanyId, url)
      
      console.log(`✅ Test completed for ${url}`)
      console.log(`📊 Results:`)
      console.log(`  - Pages crawled: ${result.pages.length}`)
      console.log(`  - Content items: ${result.content.length}`)
      console.log(`  - FAQs found: ${result.faqs.length}`)
      
    } catch (error) {
      console.error(`❌ Test failed for ${url}:`, error.message)
    }
  }
}

// Run the test
testPuppeteerCrawler().catch(console.error) 