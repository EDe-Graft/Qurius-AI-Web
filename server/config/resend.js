import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

// Initialize Resend with API key - delay initialization
let resend = null;
let resendApiKey = null;

// Function to initialize Resend
function initializeResend() {
  resendApiKey = process.env.RESEND_API_KEY;
  // console.log('🔑 Resend API Key:', resendApiKey);
//   console.log('📁 Current directory:', process.cwd());
//   console.log('🔧 All env vars:', Object.keys(process.env).filter(key => key.includes('RESEND')));
  
  if (resendApiKey) {
    resend = new Resend(resendApiKey );
    // console.log('✅ Resend initialized successfully');
  } else {
    console.warn('⚠️ RESEND_API_KEY not found. Email sending will be disabled.');
  }
}

// Initialize immediately
initializeResend();
// Email configuration
export const emailConfig = {
  from: 'Qurius AI <hello@qurius.app>', // Professional from address
  replyTo: 'qurius.ai@gmail.com', // Support email for replies
  subjectPrefix: '🎉 Qurius AI - ',
};
    
// Helper function to send emails
export async function sendEmail({ to, subject, html, text, from, replyTo }) {
  if (!resend) {
    console.warn('⚠️ Resend not initialized. Email not sent.');
    console.log('📧 Email would have been sent to:', to);
    console.log('📝 Subject:', subject);
    return { success: false, reason: 'Resend not configured' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: from || emailConfig.from, // Use custom from or default
      to: Array.isArray(to) ? to : [to],
      subject: subject,
      html: html,
      text: text, // Optional: plain text version
      replyTo: replyTo || emailConfig.replyTo // Use custom replyTo or default
    });

    if (error) {
      console.error('❌ Resend error:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log('✅ Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('❌ Email sending error:', error);
    throw error;
  }
}

// Export function to reinitialize if needed
export function reinitializeResend() {
  initializeResend();
}

export default resend; 