import 'dotenv/config';
import { FAQService } from '../services/faqService';

// Test data
const testFAQ = {
  company: "Acme University",
  question: "What are the school hours?",
  answer: "This is a test answer for testing purposes."
};

const testCompanyName = "Acme University";

async function testFaqService() {
  console.log('Testing FAQService functions...\n');

  try {
    // Test 1: Get or create company (use this instead of getCompanyIdByName)
    console.log('1️⃣ Testing getOrCreateCompanyId...');
    const companyId = await FAQService.getOrCreateCompanyId(testCompanyName);
    console.log('✅ Company ID:', companyId);

    // // Test 2: Add FAQ
    // console.log('\n2️⃣ Testing addFAQ...');
    // const addedFAQ = await FAQService.addFAQ(testFAQ);
    // console.log('✅ Added FAQ:', addedFAQ.id);

    // Test 3: Search FAQs
    console.log('\n3️⃣ Testing searchFAQs...');
    const searchResults = await FAQService.searchFAQs(testFAQ.question, testCompanyName);
    console.log('✅ Search results:', searchResults);

    // Test 4: Get all FAQs
    console.log('\n4️⃣ Testing getAllFAQs...');
    const allFAQs = await FAQService.getAllFAQs(5);
    console.log('✅ All FAQs count:', allFAQs.length);

    console.log('\n🎉 All tests completed successfully!');
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Run tests
testFaqService();
