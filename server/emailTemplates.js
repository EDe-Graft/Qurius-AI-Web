export function WelcomeEmailTemplate({ companyName, planName, adminLink }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Qurius AI</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: white;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #3B82F6; font-size: 28px; margin-bottom: 10px;">
        🎉 Welcome to Qurius AI!
      </h1>
      <p style="color: #6B7280; font-size: 16px;">
        Your AI-powered customer service revolution starts now
      </p>
    </div>


    <!-- Main Content -->
    <div style="background-color: #F9FAFB; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
      <h2 style="color: #1F2937; font-size: 22px; margin-bottom: 20px;">
        Congratulations, ${companyName}! 🚀
      </h2>
      
      <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        You've just joined the future of customer service. Qurius AI is designed to transform how your business interacts with customers, providing instant, intelligent responses that will delight your users and boost your customer satisfaction scores.
      </p>

      <div style="background-color: #DBEAFE; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1E40AF; font-size: 18px; margin-bottom: 15px;">
          ✨ What makes Qurius AI incredible:
        </h3>
        <ul style="color: #1E40AF; font-size: 14px; line-height: 1.8;">
          <li><strong>Instant Responses:</strong> Your customers get answers in seconds, not hours</li>
          <li><strong>24/7 Availability:</strong> Never miss a customer inquiry again</li>
          <li><strong>Intelligent Learning:</strong> Gets smarter with every interaction</li>
          <li><strong>Seamless Integration:</strong> Works perfectly with your existing website</li>
          <li><strong>Multi-language Support:</strong> Serve customers worldwide</li>
        </ul>
      </div>

      <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        Your <strong>${planName}</strong> plan is now active and ready to revolutionize your customer service experience. You're about to see a dramatic improvement in customer satisfaction and response times.
      </p>
    </div>


    <!-- IMPORTANT: Password Reset Notice -->
    <div style="background-color: #FEF2F2; border: 2px solid #FCA5A5; padding: 20px; border-radius: 10px; margin-bottom: 30px; text-align: center;">
        <h3 style="color: #DC2626; font-size: 18px; margin-bottom: 15px; font-weight: bold;">
            🔐 IMPORTANT: Password Setup Required
        </h3>
        <p style="color: #DC2626; font-size: 16px; line-height: 1.6; margin-bottom: 15px; font-weight: bold;">
            You will receive a separate email from Supabase to set your password.
        </p>
        <p style="color: #7F1D1D; font-size: 14px; line-height: 1.6;">
            After creating your password you may sign in to your account, or click the "Access Admin Dashboard" button below to get started.
        </p>
    </div>


    <!-- Action Button -->
    <div style="text-align: center; margin-bottom: 30px;">
      <a href="${adminLink}" style="background-color: #10B981; color: white; padding: 15px 40px; border-radius: 8px; text-decoration: none; font-size: 18px; font-weight: bold; display: inline-block; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        📊 Access Admin Dashboard
      </a>
    </div>

    <!-- Next Steps -->
    <div style="background-color: #FEF3C7; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h3 style="color: #92400E; font-size: 18px; margin-bottom: 15px;">
        🎯 Your Next Steps:
      </h3>
      <ul style="color: #92400E; font-size: 14px; line-height: 1.8;">
        <li><strong>Check your email</strong> for the password reset link from Supabase</li>
        <li><strong>Create your password</strong> using the link in the next email</li>
        <li><strong>Sign in to your account</strong> with your new password</li>
        <li><strong>Access your admin dashboard</strong> using the button above</li>
        <li><strong>Import your FAQs</strong> to train your AI assistant</li>
        <li><strong>Copy the integration code</strong> to your website</li>
        <li><strong>Watch your customer satisfaction soar!</strong> 📈</li>
      </ul>
    </div>

    <!-- Support Section -->
    <div style="background-color: #F0F9FF; border: 1px solid #BAE6FD; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h3 style="color: #0369A1; font-size: 18px; margin-bottom: 15px; text-align: center;">
        💬 Need Help? We're Here for You!
      </h3>
      <p style="color: #0C4A6E; font-size: 14px; line-height: 1.6; margin-bottom: 15px; text-align: center;">
        Have questions about setup, features, or need technical support? Don't hesitate to reach out!
      </p>
      <div style="text-align: center;">
        <a href="mailto:support@qurius.app" style="background-color: #0369A1; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; display: inline-block;">
          📧 Contact Support
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; border-top: 1px solid #E5E7EB;">
      <p style="color: #6B7280; font-size: 14px; margin-bottom: 10px;">
        Ready to transform your customer service? Let's make it happen! 🚀
      </p>
      <p style="color: #9CA3AF; font-size: 12px;">
        If you have any questions, our support team is here to help you succeed.
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
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: white;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #3B82F6; font-size: 24px; margin-bottom: 10px;">
        ${subject}
      </h1>
    </div>

    <!-- Content -->
    <div style="background-color: #F9FAFB; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
      <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        ${message}
      </p>
      
      ${actionLink ? `
      <div style="text-align: center; margin: 20px 0;">
        <a href="${actionLink}" style="background-color: #3B82F6; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 16px; font-weight: 600; display: inline-block;">
          ${actionText || 'Take Action'}
        </a>
      </div>
      ` : ''}
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; border-top: 1px solid #E5E7EB;">
      <p style="color: #9CA3AF; font-size: 12px;">
        Qurius AI - Transforming customer service with AI
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

// Support email template
export function SupportEmailTemplate({ issue, description, priority = 'normal' }) {
  const priorityColors = {
    low: '#10B981',
    normal: '#3B82F6', 
    high: '#EF4444'
  };
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Support Request - Qurius AI</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: white;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #3B82F6; font-size: 24px; margin-bottom: 10px;">
        🆘 Support Request
      </h1>
    </div>

    <!-- Content -->
    <div style="background-color: #F9FAFB; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
      <div style="background-color: ${priorityColors[priority]}; color: white; padding: 10px 20px; border-radius: 6px; margin-bottom: 20px; text-align: center;">
        <strong>Priority: ${priority.toUpperCase()}</strong>
      </div>
      
      <h3 style="color: #1F2937; font-size: 18px; margin-bottom: 15px;">
        Issue: ${issue}
      </h3>
      
      <p style="color: #374151; font-size: 16px; line-height: 1.6;">
        ${description}
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; border-top: 1px solid #E5E7EB;">
      <p style="color: #9CA3AF; font-size: 12px;">
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
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: white;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #DC2626; font-size: 28px; margin-bottom: 10px;">
        ⚠️ Message Limit Reached
      </h1>
      <p style="color: #6B7280; font-size: 16px;">
        Your ${planName} plan message quota has been exhausted
      </p>
    </div>

    <!-- Main Content -->
    <div style="background-color: #FEF2F2; padding: 30px; border-radius: 10px; margin-bottom: 30px; border: 2px solid #FCA5A5;">
      <h2 style="color: #DC2626; font-size: 22px; margin-bottom: 20px;">
        Hello ${companyName}! 🚨
      </h2>
      
      <p style="color: #7F1D1D; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        Your AI assistant has reached its monthly message limit for your <strong>${planName}</strong> plan. 
        Your customers can no longer receive AI-powered responses until your quota resets next month.
      </p>

      <div style="background-color: #FEE2E2; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #DC2626; font-size: 18px; margin-bottom: 15px;">
          📊 Current Plan Limits:
        </h3>
        <ul style="color: #7F1D1D; font-size: 14px; line-height: 1.8;">
          <li><strong>Free Plan:</strong> 1 message per month</li>
          <li><strong>Starter Plan:</strong> 2 messages per month</li>
          <li><strong>Pro Plan:</strong> 3 messages per month</li>
        </ul>
      </div>

      <p style="color: #7F1D1D; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        <strong>Impact:</strong> Your customers will see a message limit notification instead of AI responses, 
        which may affect their experience and your customer satisfaction scores.
      </p>
    </div>

    <!-- Action Buttons -->
    <div style="text-align: center; margin-bottom: 30px;">
      <a href="${adminLink}" style="background-color: #DC2626; color: white; padding: 15px 40px; border-radius: 8px; text-decoration: none; font-size: 18px; font-weight: bold; display: inline-block; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-right: 15px;">
        🔄 Upgrade Plan
      </a>
      <a href="${adminLink}" style="background-color: #6B7280; color: white; padding: 15px 40px; border-radius: 8px; text-decoration: none; font-size: 18px; font-weight: bold; display: inline-block; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        📊 View Dashboard
      </a>
    </div>

    <!-- Solutions Section -->
    <div style="background-color: #F0F9FF; border: 1px solid #BAE6FD; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h3 style="color: #0369A1; font-size: 18px; margin-bottom: 15px;">
        💡 Solutions to Get Back Online:
      </h3>
      <ul style="color: #0C4A6E; font-size: 14px; line-height: 1.8;">
        <li><strong>Upgrade Your Plan:</strong> Get more messages per month with Starter or Pro plans</li>
        <li><strong>Wait for Reset:</strong> Your quota will automatically reset on the first day of next month</li>
        <li><strong>Contact Support:</strong> We can help you find the right plan for your needs</li>
        <li><strong>Review Usage:</strong> Check your dashboard to see how you're using your messages</li>
      </ul>
    </div>

    <!-- Plan Comparison -->
    <div style="background-color: #FEF3C7; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h3 style="color: #92400E; font-size: 18px; margin-bottom: 15px; text-align: center;">
        🚀 Upgrade Options:
      </h3>
      <div style="display: flex; justify-content: space-between; gap: 15px;">
        <div style="flex: 1; background: white; padding: 15px; border-radius: 6px; text-align: center;">
          <h4 style="color: #92400E; margin-bottom: 10px;">Starter Plan</h4>
          <p style="color: #92400E; font-size: 12px;">2 messages/month</p>
          <p style="color: #92400E; font-size: 12px;">$29/month</p>
        </div>
        <div style="flex: 1; background: white; padding: 15px; border-radius: 6px; text-align: center;">
          <h4 style="color: #92400E; margin-bottom: 10px;">Pro Plan</h4>
          <p style="color: #92400E; font-size: 12px;">3 messages/month</p>
          <p style="color: #92400E; font-size: 12px;">$99/month</p>
        </div>
      </div>
    </div>

    <!-- Support Section -->
    <div style="background-color: #F0F9FF; border: 1px solid #BAE6FD; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h3 style="color: #0369A1; font-size: 18px; margin-bottom: 15px; text-align: center;">
        💬 Need Help? We're Here for You!
      </h3>
      <p style="color: #0C4A6E; font-size: 14px; line-height: 1.6; margin-bottom: 15px; text-align: center;">
        Don't let message limits impact your customer service. Our team can help you choose the right plan.
      </p>
      <div style="text-align: center;">
        <a href="mailto:support@qurius.app" style="background-color: #0369A1; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; display: inline-block;">
          📧 Contact Support
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; border-top: 1px solid #E5E7EB;">
      <p style="color: #6B7280; font-size: 14px; margin-bottom: 10px;">
        Don't let message limits stop your customer service excellence! 🚀
      </p>
      <p style="color: #9CA3AF; font-size: 12px;">
        Your quota will automatically reset on the first day of next month.
      </p>
    </div>
  </div>
</body>
</html>
  `;
} 