import dotenv from 'dotenv';
import { Resend } from 'resend';
import { WelcomeEmailTemplate } from '../emailTemplates.js';

// Load environment variables
dotenv.config({ path: './.env' });

// Test configuration
const testConfig = {
  apiKey: process.env.RESEND_API_KEY,
  from: 'Qurius AI <hello@qurius.app>',
  to: 'degrafthazard10@gmail.com', // Test recipient
  replyTo: 'qurius.ai@gmail.com',
  companyName: 'Test Company',
  planName: 'Pro'
};

async function testResend() {
  console.log('🧪 Testing Resend Email Functionality');
  console.log('🔑 API Key:', testConfig.apiKey ? '✅ Found' : '❌ Missing');
  console.log('📧 From:', testConfig.from);
  console.log('📧 To:', testConfig.to);
  
  try {
    // Initialize Resend
    const resend = new Resend(testConfig.apiKey);
    console.log('✅ Resend initialized successfully');

    // Generate test email HTML
    const emailHtml = WelcomeEmailTemplate({
      companyName: testConfig.companyName,
      planName: testConfig.planName,
      adminLink: 'https://qurius-ai.vercel.app/admin',
    });

    console.log('✅ Email HTML generated successfully');
    console.log('📏 HTML length:', emailHtml.length, 'characters');

    // Send test email
    console.log('📤 Sending test email...');
    const { data, error } = await resend.emails.send({
      from: testConfig.from,
      to: [testConfig.to],
      subject: `🧪 Test Email - Welcome to Qurius AI, ${testConfig.companyName}!`,
      html: emailHtml,
      replyTo: testConfig.replyTo
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return false;
    }

    console.log('✅ Email sent successfully!');
    console.log('📧 Email ID:', data?.id);
    console.log('📧 To:', testConfig.to);
    return true;

  } catch (error) {
    console.error('❌ Test failed:', error);
    return false;
  }
}

// Run the test
testResend()
  .then(success => {
    console.log(success ? '🎉 Test completed successfully!' : '💥 Test failed!');
    process.exit(success ? 0 : 1);
  })
  .catch(error => {
    console.error('💥 Test crashed:', error);
    process.exit(1);
  }); 