export function WelcomeEmailTemplate({ companyName, planName, adminLink }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Qurius AI</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #111827;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid #374151;">
      <h1 style="color: #3B82F6; font-size: 28px; font-weight: 700; margin: 0 0 8px 0; letter-spacing: -0.5px;">
        Qurius AI
      </h1>
      <p style="color: #9CA3AF; font-size: 14px; margin: 0; font-weight: 400;">
        Welcome to your AI-powered customer service platform
      </p>
    </div>

    <!-- Main Content -->
    <div style="background-color: #1F2937; padding: 32px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #374151;">
      <h2 style="color: #F9FAFB; font-size: 24px; font-weight: 600; margin: 0 0 16px 0; letter-spacing: -0.3px;">
        Welcome, ${companyName}
      </h2>
      
      <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
        Your <strong style="color: #F9FAFB;">${planName}</strong> plan is now active. You're ready to transform your customer service with AI-powered support that answers questions instantly, 24/7.
      </p>

      <div style="background-color: #111827; padding: 24px; border-radius: 8px; margin-bottom: 24px; border-left: 3px solid #3B82F6;">
        <h3 style="color: #F9FAFB; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          What's included:
        </h3>
        <ul style="color: #D1D5DB; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li style="margin-bottom: 8px;">Instant AI responses to customer questions</li>
          <li style="margin-bottom: 8px;">24/7 automated customer support</li>
          <li style="margin-bottom: 8px;">Intelligent learning from your content</li>
          <li style="margin-bottom: 8px;">Seamless website integration</li>
          <li>Multi-language support capabilities</li>
        </ul>
      </div>
    </div>

    <!-- Password Setup Notice -->
    <div style="background-color: #1F2937; border: 1px solid #374151; padding: 24px; border-radius: 12px; margin-bottom: 32px; border-left: 3px solid #F59E0B;">
      <h3 style="color: #F9FAFB; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
        Password Setup Required
      </h3>
      <p style="color: #D1D5DB; font-size: 14px; line-height: 1.6; margin: 0 0 12px 0;">
        You will receive a separate email from Supabase to set your password. After creating your password, you can sign in to your account.
      </p>
    </div>

    <!-- Action Button -->
    <div style="text-align: center; margin-bottom: 32px;">
      <a href="${adminLink}" style="background-color: #3B82F6; color: #FFFFFF; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: 600; display: inline-block; transition: background-color 0.2s;">
        Access Admin Dashboard
      </a>
    </div>

    <!-- Next Steps -->
    <div style="background-color: #1F2937; padding: 24px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #374151;">
      <h3 style="color: #F9FAFB; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
        Next Steps
      </h3>
      <ol style="color: #D1D5DB; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
        <li style="margin-bottom: 8px;">Check your email for the password reset link from Supabase</li>
        <li style="margin-bottom: 8px;">Create your password using the link</li>
        <li style="margin-bottom: 8px;">Sign in to your admin dashboard</li>
        <li style="margin-bottom: 8px;">Import your FAQs to train your AI assistant</li>
        <li style="margin-bottom: 8px;">Copy the integration code to your website</li>
        <li>Start providing instant customer support</li>
      </ol>
    </div>

    <!-- Support Section -->
    <div style="background-color: #1F2937; border: 1px solid #374151; padding: 24px; border-radius: 12px; margin-bottom: 32px; text-align: center;">
      <h3 style="color: #F9FAFB; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
        Need Help?
      </h3>
      <p style="color: #9CA3AF; font-size: 14px; line-height: 1.6; margin: 0 0 16px 0;">
        Have questions about setup or features? Our support team is here to help.
      </p>
      <a href="mailto:support@qurius.app" style="color: #3B82F6; text-decoration: none; font-size: 14px; font-weight: 500;">
        Contact Support →
      </a>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding-top: 32px; border-top: 1px solid #374151;">
      <p style="color: #6B7280; font-size: 12px; margin: 0 0 8px 0;">
        © ${new Date().getFullYear()} Qurius AI. All rights reserved.
      </p>
      <p style="color: #6B7280; font-size: 12px; margin: 0;">
        <a href="https://qurius.app" style="color: #3B82F6; text-decoration: none;">Visit our website</a>
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

// Simple notification email template
export function NotificationEmailTemplate({ subject, message, actionText, actionLink }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #111827;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid #374151;">
      <h1 style="color: #3B82F6; font-size: 28px; font-weight: 700; margin: 0 0 8px 0; letter-spacing: -0.5px;">
        Qurius AI
      </h1>
    </div>

    <!-- Content -->
    <div style="background-color: #1F2937; padding: 32px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #374151;">
      <h2 style="color: #F9FAFB; font-size: 24px; font-weight: 600; margin: 0 0 16px 0; letter-spacing: -0.3px;">
        ${subject}
      </h2>
      
      <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
        ${message}
      </p>
      
      ${actionLink ? `
      <div style="text-align: center; margin-top: 24px;">
        <a href="${actionLink}" style="background-color: #3B82F6; color: #FFFFFF; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: 600; display: inline-block;">
          ${actionText || 'Take Action'}
        </a>
      </div>
      ` : ''}
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding-top: 32px; border-top: 1px solid #374151;">
      <p style="color: #6B7280; font-size: 12px; margin: 0;">
        © ${new Date().getFullYear()} Qurius AI. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

// Support email template
export function SupportEmailTemplate({ issue, description, priority = 'normal' }) {
  const priorityConfig = {
    low: { color: '#10B981', label: 'Low' },
    normal: { color: '#3B82F6', label: 'Normal' }, 
    high: { color: '#EF4444', label: 'High' }
  };
  
  const config = priorityConfig[priority] || priorityConfig.normal;
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Support Request - Qurius AI</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #111827;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid #374151;">
      <h1 style="color: #3B82F6; font-size: 28px; font-weight: 700; margin: 0 0 8px 0; letter-spacing: -0.5px;">
        Qurius AI
      </h1>
    </div>

    <!-- Content -->
    <div style="background-color: #1F2937; padding: 32px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #374151;">
      <div style="background-color: ${config.color}15; border-left: 3px solid ${config.color}; padding: 12px 16px; border-radius: 6px; margin-bottom: 24px;">
        <span style="color: ${config.color}; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
          Priority: ${config.label}
        </span>
      </div>
      
      <h2 style="color: #F9FAFB; font-size: 20px; font-weight: 600; margin: 0 0 16px 0;">
        ${issue}
      </h2>
      
      <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6; margin: 0;">
        ${description}
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding-top: 32px; border-top: 1px solid #374151;">
      <p style="color: #6B7280; font-size: 12px; margin: 0;">
        We'll get back to you as soon as possible.
      </p>
    </div>
  </div>
</body>
</html>
  `;
} 

// Message limit reached email template
export function MessageLimitReachedEmailTemplate({ companyName, planName, adminLink }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Limit Reached - Qurius AI</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #111827;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid #374151;">
      <h1 style="color: #3B82F6; font-size: 28px; font-weight: 700; margin: 0 0 8px 0; letter-spacing: -0.5px;">
        Qurius AI
      </h1>
    </div>

    <!-- Main Content -->
    <div style="background-color: #1F2937; padding: 32px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #374151; border-left: 3px solid #EF4444;">
      <h2 style="color: #F9FAFB; font-size: 24px; font-weight: 600; margin: 0 0 16px 0; letter-spacing: -0.3px;">
        Message Limit Reached
      </h2>
      
      <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
        Hello ${companyName}, your <strong style="color: #F9FAFB;">${planName}</strong> plan has reached its monthly message limit. Your AI assistant will resume service when your quota resets next month, or you can upgrade to continue serving customers immediately.
      </p>

      <div style="background-color: #111827; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
        <h3 style="color: #F9FAFB; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">
          Current Plan Limits
        </h3>
        <ul style="color: #D1D5DB; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li style="margin-bottom: 6px;"><strong style="color: #F9FAFB;">Free:</strong> 500 messages/month</li>
          <li style="margin-bottom: 6px;"><strong style="color: #F9FAFB;">Starter:</strong> 10,000 messages/month</li>
          <li style="margin-bottom: 6px;"><strong style="color: #F9FAFB;">Growth:</strong> 50,000 messages/month</li>
          <li><strong style="color: #F9FAFB;">Pro:</strong> Unlimited messages</li>
        </ul>
      </div>
    </div>

    <!-- Action Buttons -->
    <div style="text-align: center; margin-bottom: 32px;">
      <a href="${adminLink}" style="background-color: #3B82F6; color: #FFFFFF; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: 600; display: inline-block; margin-right: 12px;">
        Upgrade Plan
      </a>
      <a href="${adminLink}" style="background-color: #374151; color: #F9FAFB; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: 600; display: inline-block;">
        View Dashboard
      </a>
    </div>

    <!-- Solutions Section -->
    <div style="background-color: #1F2937; padding: 24px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #374151;">
      <h3 style="color: #F9FAFB; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
        Solutions
      </h3>
      <ul style="color: #D1D5DB; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong style="color: #F9FAFB;">Upgrade your plan</strong> to get more messages per month</li>
        <li style="margin-bottom: 8px;"><strong style="color: #F9FAFB;">Wait for reset</strong> - your quota resets on the first day of next month</li>
        <li style="margin-bottom: 8px;"><strong style="color: #F9FAFB;">Contact support</strong> to find the right plan for your needs</li>
        <li><strong style="color: #F9FAFB;">Review usage</strong> in your dashboard to optimize message consumption</li>
      </ul>
    </div>

    <!-- Plan Comparison -->
    <div style="background-color: #1F2937; padding: 24px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #374151;">
      <h3 style="color: #F9FAFB; font-size: 16px; font-weight: 600; margin: 0 0 20px 0; text-align: center;">
        Upgrade Options
      </h3>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
        <div style="background-color: #111827; padding: 20px; border-radius: 8px; border: 1px solid #374151;">
          <h4 style="color: #F9FAFB; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Starter</h4>
          <p style="color: #9CA3AF; font-size: 12px; margin: 0 0 4px 0;">10,000 messages/month</p>
          <p style="color: #3B82F6; font-size: 16px; font-weight: 600; margin: 0;">$29/month</p>
        </div>
        <div style="background-color: #111827; padding: 20px; border-radius: 8px; border: 1px solid #374151;">
          <h4 style="color: #F9FAFB; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Growth</h4>
          <p style="color: #9CA3AF; font-size: 12px; margin: 0 0 4px 0;">50,000 messages/month</p>
          <p style="color: #3B82F6; font-size: 16px; font-weight: 600; margin: 0;">$59/month</p>
        </div>
        <div style="background-color: #111827; padding: 20px; border-radius: 8px; border: 1px solid #3B82F6; grid-column: 1 / -1;">
          <h4 style="color: #F9FAFB; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Pro</h4>
          <p style="color: #9CA3AF; font-size: 12px; margin: 0 0 4px 0;">Unlimited messages</p>
          <p style="color: #3B82F6; font-size: 16px; font-weight: 600; margin: 0;">$99/month</p>
        </div>
      </div>
    </div>

    <!-- Support Section -->
    <div style="background-color: #1F2937; border: 1px solid #374151; padding: 24px; border-radius: 12px; margin-bottom: 32px; text-align: center;">
      <h3 style="color: #F9FAFB; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
        Need Help?
      </h3>
      <p style="color: #9CA3AF; font-size: 14px; line-height: 1.6; margin: 0 0 16px 0;">
        Our team can help you choose the right plan for your needs.
      </p>
      <a href="mailto:support@qurius.app" style="color: #3B82F6; text-decoration: none; font-size: 14px; font-weight: 500;">
        Contact Support →
      </a>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding-top: 32px; border-top: 1px solid #374151;">
      <p style="color: #6B7280; font-size: 12px; margin: 0;">
        Your quota will automatically reset on the first day of next month.
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

// FAQ Generation Complete email template
export function FAQGenerationCompleteEmailTemplate({ companyName, adminLink, faqCount, crawlType }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI FAQ Generation Complete - Qurius AI</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #111827;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid #374151;">
      <h1 style="color: #3B82F6; font-size: 28px; font-weight: 700; margin: 0 0 8px 0; letter-spacing: -0.5px;">
        Qurius AI
      </h1>
    </div>

    <!-- Main Content -->
    <div style="background-color: #1F2937; padding: 32px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #374151; border-left: 3px solid #10B981;">
      <h2 style="color: #F9FAFB; font-size: 24px; font-weight: 600; margin: 0 0 16px 0; letter-spacing: -0.3px;">
        FAQ Generation Complete
      </h2>
      
      <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
        Hello ${companyName}, your AI has successfully analyzed your ${crawlType} and generated <strong style="color: #F9FAFB;">${faqCount} intelligent FAQs</strong> ready for your review.
      </p>

      <div style="background-color: #111827; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
        <h3 style="color: #F9FAFB; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">
          Next Steps
        </h3>
        <ul style="color: #D1D5DB; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li style="margin-bottom: 8px;">Review each AI-generated question and answer</li>
          <li style="margin-bottom: 8px;">Edit questions or answers to match your brand voice</li>
          <li style="margin-bottom: 8px;">Approve or reject FAQs for your knowledge base</li>
          <li>Save approved FAQs to activate them in your AI assistant</li>
        </ul>
      </div>
    </div>

    <!-- Action Button -->
    <div style="text-align: center; margin-bottom: 32px;">
      <a href="${adminLink}" style="background-color: #3B82F6; color: #FFFFFF; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: 600; display: inline-block;">
        Review Generated FAQs
      </a>
    </div>

    <!-- Benefits Section -->
    <div style="background-color: #1F2937; padding: 24px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #374151;">
      <h3 style="color: #F9FAFB; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
        Benefits
      </h3>
      <ul style="color: #D1D5DB; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong style="color: #F9FAFB;">Save time</strong> - No need to manually create FAQs</li>
        <li style="margin-bottom: 8px;"><strong style="color: #F9FAFB;">Better coverage</strong> - AI identifies questions you might have missed</li>
        <li style="margin-bottom: 8px;"><strong style="color: #F9FAFB;">Improved accuracy</strong> - Based on your actual content</li>
        <li><strong style="color: #F9FAFB;">Faster setup</strong> - Get your AI assistant ready in minutes</li>
      </ul>
    </div>

    <!-- Support Section -->
    <div style="background-color: #1F2937; border: 1px solid #374151; padding: 24px; border-radius: 12px; margin-bottom: 32px; text-align: center;">
      <h3 style="color: #F9FAFB; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
        Need Help?
      </h3>
      <p style="color: #9CA3AF; font-size: 14px; line-height: 1.6; margin: 0 0 16px 0;">
        Questions about reviewing FAQs? Our team is ready to help.
      </p>
      <a href="mailto:support@qurius.app" style="color: #3B82F6; text-decoration: none; font-size: 14px; font-weight: 500;">
        Contact Support →
      </a>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding-top: 32px; border-top: 1px solid #374151;">
      <p style="color: #6B7280; font-size: 12px; margin: 0;">
        © ${new Date().getFullYear()} Qurius AI. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

// Password reset email template
export function PasswordResetEmailTemplate({ resetLink }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password - Qurius AI</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #111827;">
    <!-- Header -->
    <div style="margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid #374151;">
      <div style="display: flex; align-items: center; margin-bottom: 20px;">
        <img src="https://res.cloudinary.com/ds8yzpran/image/upload/v1754916422/logo_m5wdkj.png" alt="Qurius AI Logo" style="width: 48px; height: 48px; border-radius: 8px; margin-right: 12px;">
        <div>
          <h1 style="color: #3B82F6; font-size: 28px; font-weight: 700; margin: 0 0 4px 0; letter-spacing: -0.5px;">
            Qurius AI
          </h1>
          <p style="color: #9CA3AF; font-size: 14px; margin: 0; font-weight: 400;">
            Password Reset Request
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div style="background-color: #1F2937; padding: 32px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #374151; border-left: 3px solid #3B82F6;">
      <h2 style="color: #F9FAFB; font-size: 24px; font-weight: 600; margin: 0 0 16px 0; letter-spacing: -0.3px;">
        Reset Your Password
      </h2>
      
      <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
        Hello! We received a request to reset your password for your Qurius AI admin account. 
        If you didn't make this request, you can safely ignore this email.
      </p>

      <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6; margin: 0 0 32px 0;">
        To reset your password, click the button below. This link will expire in 24 hours for security.
      </p>

      <!-- Action Button -->
      <div style="text-align: center; margin-bottom: 32px;">
        <a href="${resetLink}" style="background-color: #3B82F6; color: #FFFFFF; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: 600; display: inline-block; transition: background-color 0.2s;">
          Reset Password
        </a>
      </div>

      <div style="background-color: #111827; padding: 20px; border-radius: 8px; margin-bottom: 24px; border: 1px solid #374151;">
        <p style="color: #9CA3AF; font-size: 14px; line-height: 1.5; margin: 0 0 12px 0; text-align: center;">
          If the button doesn't work, copy and paste this link into your browser:
        </p>
        <p style="color: #3B82F6; font-size: 13px; line-height: 1.5; margin: 0; text-align: center; word-break: break-all; font-family: monospace; background-color: #1F2937; padding: 12px; border-radius: 6px; border: 1px solid #374151;">
          ${resetLink}
        </p>
      </div>
    </div>

    <!-- Security Notice -->
    <div style="background-color: #1F2937; border: 1px solid #374151; padding: 24px; border-radius: 12px; margin-bottom: 32px; border-left: 3px solid #F59E0B;">
      <h3 style="color: #F9FAFB; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
        Security Information
      </h3>
      <ul style="color: #D1D5DB; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
        <li style="margin-bottom: 8px;">This link expires in 24 hours</li>
        <li style="margin-bottom: 8px;">Only use this link if you requested a password reset</li>
        <li>If you didn't request this, your account remains secure</li>
      </ul>
    </div>

    <!-- Support Section -->
    <div style="background-color: #1F2937; border: 1px solid #374151; padding: 24px; border-radius: 12px; margin-bottom: 32px; text-align: center;">
      <h3 style="color: #F9FAFB; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
        Need Help?
      </h3>
      <p style="color: #9CA3AF; font-size: 14px; line-height: 1.6; margin: 0 0 16px 0;">
        Having trouble resetting your password? Our support team is here to help.
      </p>
      <a href="mailto:support@qurius.app" style="color: #3B82F6; text-decoration: none; font-size: 14px; font-weight: 500;">
        Contact Support →
      </a>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding-top: 32px; border-top: 1px solid #374151;">
      <p style="color: #6B7280; font-size: 12px; margin: 0 0 8px 0;">
        © ${new Date().getFullYear()} Qurius AI. All rights reserved.
      </p>
      <p style="color: #6B7280; font-size: 12px; margin: 0;">
        This email was sent because a password reset was requested for your account.
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

// Admin company notification email template
export function AdminCompanyNotificationEmailTemplate({ companyName, companyEmail, planName, location, industry, website, description, createdAt }) {
  const getPlanInfo = (plan) => {
    switch(plan) {
      case 'Free':
        return { limit: '500 messages/month', revenue: '$0', features: 'Basic AI assistance' };
      case 'Starter':
        return { limit: '10,000 messages/month', revenue: '$29', features: 'Advanced analytics, priority support' };
      case 'Growth':
        return { limit: '50,000 messages/month', revenue: '$59', features: 'Analytics, multi-language, priority support' };
      case 'Pro':
        return { limit: 'Unlimited', revenue: '$99', features: 'All features, lead generation, premium support' };
      default:
        return { limit: 'N/A', revenue: '$0', features: 'N/A' };
    }
  };

  const planInfo = getPlanInfo(planName);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Company Joined - Qurius AI</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #111827;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid #374151;">
      <h1 style="color: #3B82F6; font-size: 28px; font-weight: 700; margin: 0 0 8px 0; letter-spacing: -0.5px;">
        Qurius AI
      </h1>
      <p style="color: #9CA3AF; font-size: 14px; margin: 0; font-weight: 400;">
        New Company Registration
      </p>
    </div>

    <!-- Main Content -->
    <div style="background-color: #1F2937; padding: 32px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #374151; border-left: 3px solid #10B981;">
      <h2 style="color: #F9FAFB; font-size: 24px; font-weight: 600; margin: 0 0 24px 0; letter-spacing: -0.3px;">
        New Company Joined
      </h2>
      
      <div style="background-color: #111827; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
        <table style="width: 100%; color: #D1D5DB; font-size: 14px; line-height: 1.8;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #9CA3AF; width: 35%;">Company Name:</td>
            <td style="padding: 8px 0; color: #F9FAFB;">${companyName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #9CA3AF;">Email:</td>
            <td style="padding: 8px 0; color: #F9FAFB;">${companyEmail}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #9CA3AF;">Plan:</td>
            <td style="padding: 8px 0;">
              <span style="background-color: #3B82F6; color: #FFFFFF; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600;">${planName}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #9CA3AF;">Website:</td>
            <td style="padding: 8px 0; color: #F9FAFB;">${website || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #9CA3AF;">Industry:</td>
            <td style="padding: 8px 0; color: #F9FAFB;">${industry || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #9CA3AF;">Location:</td>
            <td style="padding: 8px 0; color: #F9FAFB;">${location || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #9CA3AF;">Created:</td>
            <td style="padding: 8px 0; color: #F9FAFB;">${createdAt}</td>
          </tr>
        </table>
      </div>

      ${description ? `
      <div style="background-color: #111827; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
        <h3 style="color: #F9FAFB; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">Description</h3>
        <p style="color: #D1D5DB; font-size: 14px; line-height: 1.6; margin: 0;">${description}</p>
      </div>
      ` : ''}
    </div>

    <!-- Plan Information -->
    <div style="background-color: #1F2937; border: 1px solid #374151; padding: 24px; border-radius: 12px; margin-bottom: 32px;">
      <h3 style="color: #F9FAFB; font-size: 16px; font-weight: 600; margin: 0 0 16px 0; text-align: center;">
        Plan Information
      </h3>
      <div style="text-align: center; color: #D1D5DB; font-size: 14px; line-height: 1.8;">
        <p style="margin: 0 0 8px 0;"><strong style="color: #F9FAFB;">Message Limit:</strong> ${planInfo.limit}</p>
        <p style="margin: 0 0 8px 0;"><strong style="color: #F9FAFB;">Features:</strong> ${planInfo.features}</p>
        <p style="margin: 0;"><strong style="color: #F9FAFB;">Monthly Revenue:</strong> <span style="color: #3B82F6; font-weight: 600;">${planInfo.revenue}</span></p>
      </div>
    </div>

    <!-- Next Steps -->
    <div style="background-color: #1F2937; padding: 24px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #374151;">
      <h3 style="color: #F9FAFB; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
        Next Steps
      </h3>
      <ul style="color: #D1D5DB; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
        <li style="margin-bottom: 8px;">Welcome email has been sent to the company</li>
        <li style="margin-bottom: 8px;">Password reset link has been sent via Supabase</li>
        <li style="margin-bottom: 8px;">Monitor onboarding progress in admin dashboard</li>
        <li>Check for any support requests from this company</li>
      </ul>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding-top: 32px; border-top: 1px solid #374151;">
      <p style="color: #6B7280; font-size: 12px; margin: 0 0 8px 0;">
        This is an automated notification from Qurius AI
      </p>
      <p style="color: #6B7280; font-size: 12px; margin: 0;">
        ${new Date().toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'full', timeStyle: 'long' })}
      </p>
    </div>
  </div>
</body>
</html>
  `;
}
