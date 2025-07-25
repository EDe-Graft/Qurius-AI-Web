// Test script to verify your deployment is working
import axios from 'axios';

// Configuration - update these URLs after deployment
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

async function testBackend() {
  console.log('🧪 Testing Backend...');
  
  try {
    // Test health endpoint
    const healthResponse = await axios.get(`${BACKEND_URL}/api/health`);
    console.log('✅ Backend health check passed:', healthResponse.data);
    
    // Test embeddings endpoint
    const embeddingResponse = await axios.post(`${BACKEND_URL}/api/embeddings`, {
      question: 'What is your return policy?',
      answer: 'We offer 30-day returns on all products.'
    });
    console.log('✅ Embeddings endpoint working');
    
    // Test chat endpoint
    const chatResponse = await axios.post(`${BACKEND_URL}/api/chat`, {
      messages: [
        { role: 'user', content: 'Hello, how can you help me?' }
      ],
      companyName: 'Test Company'
    });
    console.log('✅ Chat endpoint working');
    
    console.log('🎉 Backend tests passed!');
    return true;
  } catch (error) {
    console.error('❌ Backend test failed:', error.message);
    return false;
  }
}

async function testFrontend() {
  console.log('🧪 Testing Frontend...');
  
  try {
    // Test if frontend is accessible
    const response = await axios.get(FRONTEND_URL);
    console.log('✅ Frontend is accessible');
    
    // Test if embed script is accessible
    const embedResponse = await axios.get(`${FRONTEND_URL}/embed.js`);
    console.log('✅ Embed script is accessible');
    
    console.log('🎉 Frontend tests passed!');
    return true;
  } catch (error) {
    console.error('❌ Frontend test failed:', error.message);
    return false;
  }
}

async function runTests() {
  console.log('🚀 Starting deployment tests...\n');
  
  const backendPassed = await testBackend();
  console.log('');
  const frontendPassed = await testFrontend();
  
  console.log('\n📊 Test Results:');
  console.log(`Backend: ${backendPassed ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Frontend: ${frontendPassed ? '✅ PASS' : '❌ FAIL'}`);
  
  if (backendPassed && frontendPassed) {
    console.log('\n🎉 All tests passed! Your deployment is working correctly.');
    console.log('\nNext steps:');
    console.log('1. Test the widget on a real website');
    console.log('2. Set up monitoring');
    console.log('3. Start marketing your service');
  } else {
    console.log('\n⚠️ Some tests failed. Check the errors above and fix them.');
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { testBackend, testFrontend, runTests }; 