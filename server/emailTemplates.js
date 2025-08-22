export function WelcomeEmailTemplate({ companyName, planName, adminLink }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Qurius AI</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1F2937;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #3B82F6; font-size: 28px; margin-bottom: 10px;">
        🎉 Welcome to Qurius AI!
      </h1>
      <p style="color: #D1D5DB; font-size: 16px;">
        Your AI-powered customer service revolution starts now
      </p>
    </div>


    <!-- Main Content -->
    <div style="background-color: #374151; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
      <h2 style="color: #F9FAFB; font-size: 22px; margin-bottom: 20px;">
        Congratulations, ${companyName}! 🚀
      </h2>
      
      <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        You've just joined the future of customer service. Qurius AI is designed to transform how your business interacts with customers, providing instant, intelligent responses that will delight your users and boost your customer satisfaction scores.
      </p>

      <div style="background-color: #1E3A8A; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #DBEAFE; font-size: 18px; margin-bottom: 15px;">
          ✨ What makes Qurius AI incredible:
        </h3>
        <ul style="color: #BFDBFE; font-size: 14px; line-height: 1.8;">
          <li><strong>Instant Responses:</strong> Your customers get answers in seconds, not hours</li>
          <li><strong>24/7 Availability:</strong> Never miss a customer inquiry again</li>
          <li><strong>Intelligent Learning:</strong> Gets smarter with every interaction</li>
          <li><strong>Seamless Integration:</strong> Works perfectly with your existing website</li>
          <li><strong>Multi-language Support:</strong> Serve customers worldwide</li>
        </ul>
      </div>

      <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        Your <strong>${planName}</strong> plan is now active and ready to revolutionize your customer service experience. You're about to see a dramatic improvement in customer satisfaction and response times.
      </p>
    </div>


    <!-- IMPORTANT: Password Reset Notice -->
    <div style="background-color: #7F1D1D; border: 2px solid #DC2626; padding: 20px; border-radius: 10px; margin-bottom: 30px; text-align: center;">
        <h3 style="color: #FCA5A5; font-size: 18px; margin-bottom: 15px; font-weight: bold;">
            🔐 IMPORTANT: Password Setup Required
        </h3>
        <p style="color: #FCA5A5; font-size: 16px; line-height: 1.6; margin-bottom: 15px; font-weight: bold;">
            You will receive a separate email from Supabase to set your password.
        </p>
        <p style="color: #FEE2E2; font-size: 14px; line-height: 1.6;">
            After creating your password you may sign in to your account, or click the "Access Admin Dashboard" button below to get started.
        </p>
    </div>


    <!-- Action Button -->
    <div style="text-align: center; margin-bottom: 30px;">
      <a href="${adminLink}" style="background-color: #10B981; color: white; padding: 15px 40px; border-radius: 8px; text-decoration: none; font-size: 18px; font-weight: bold; display: inline-block; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);">
        📊 Access Admin Dashboard
      </a>
    </div>

    <!-- Next Steps -->
    <div style="background-color: #92400E; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h3 style="color: #FEF3C7; font-size: 18px; margin-bottom: 15px;">
        🎯 Your Next Steps:
      </h3>
      <ul style="color: #FDE68A; font-size: 14px; line-height: 1.8;">
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
    <div style="background-color: #0C4A6E; border: 1px solid #0369A1; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h3 style="color: #BAE6FD; font-size: 18px; margin-bottom: 15px; text-align: center;">
        💬 Need Help? We're Here for You!
      </h3>
      <p style="color: #7DD3FC; font-size: 14px; line-height: 1.6; margin-bottom: 15px; text-align: center;">
        Have questions about setup, features, or need technical support? Don't hesitate to reach out!
      </p>
      <div style="text-align: center;">
        <a href="mailto:support@qurius.app" style="background-color: #0369A1; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; display: inline-block;">
          📧 Contact Support
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; border-top: 1px solid #374151;">
      <p style="color: #D1D5DB; font-size: 14px; margin-bottom: 10px;">
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
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1F2937;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #3B82F6; font-size: 24px; margin-bottom: 10px;">
        ${subject}
      </h1>
    </div>

    <!-- Content -->
    <div style="background-color: #374151; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
      <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        ${message}
      </p>
      
      ${actionLink ? `
      <div style="text-align: center; margin: 20px 0;">
        <a href="${actionLink}" style="background-color: #3B82F6; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 16px; font-weight: 600; display: inline-block; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);">
          ${actionText || 'Take Action'}
        </a>
      </div>
      ` : ''}
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; border-top: 1px solid #374151;">
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
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1F2937;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #3B82F6; font-size: 24px; margin-bottom: 10px;">
        🆘 Support Request
      </h1>
    </div>

    <!-- Content -->
    <div style="background-color: #374151; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
      <div style="background-color: ${priorityColors[priority]}; color: white; padding: 10px 20px; border-radius: 6px; margin-bottom: 20px; text-align: center;">
        <strong>Priority: ${priority.toUpperCase()}</strong>
      </div>
      
      <h3 style="color: #F9FAFB; font-size: 18px; margin-bottom: 15px;">
        Issue: ${issue}
      </h3>
      
      <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6;">
        ${description}
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; border-top: 1px solid #374151;">
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
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1F2937;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #EF4444; font-size: 28px; margin-bottom: 10px;">
        ⚠️ Message Limit Reached
      </h1>
      <p style="color: #D1D5DB; font-size: 16px;">
        Your ${planName} plan message quota has been exhausted
      </p>
    </div>

    <!-- Main Content -->
    <div style="background-color: #7F1D1D; padding: 30px; border-radius: 10px; margin-bottom: 30px; border: 2px solid #DC2626;">
      <h2 style="color: #FCA5A5; font-size: 22px; margin-bottom: 20px;">
        Hello ${companyName}! 🚨
      </h2>
      
      <p style="color: #FEE2E2; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        Your AI assistant has reached its monthly message limit for your <strong>${planName}</strong> plan. 
        Your customers can no longer receive AI-powered responses until your quota resets next month.
      </p>

      <div style="background-color: #991B1B; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #FCA5A5; font-size: 18px; margin-bottom: 15px;">
          📊 Current Plan Limits:
        </h3>
        <ul style="color: #FEE2E2; font-size: 14px; line-height: 1.8;">
          <li><strong>Free Plan:</strong> 500 messages per month</li>
          <li><strong>Starter Plan:</strong> 10,000 messages per month</li>
          <li><strong>Pro Plan:</strong> Unlimited messages</li>
        </ul>
      </div>

      <p style="color: #FEE2E2; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        <strong>Impact:</strong> Your customers will see a message limit notification instead of AI responses, 
        which may affect their experience and your customer satisfaction scores.
      </p>
    </div>

    <!-- Action Buttons -->
    <div style="text-align: center; margin-bottom: 30px;">
      <a href="${adminLink}" style="background-color: #DC2626; color: white; padding: 15px 40px; border-radius: 8px; text-decoration: none; font-size: 18px; font-weight: bold; display: inline-block; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); margin-right: 15px;">
        🔄 Upgrade Plan
      </a>
      <a href="${adminLink}" style="background-color: #6B7280; color: white; padding: 15px 40px; border-radius: 8px; text-decoration: none; font-size: 18px; font-weight: bold; display: inline-block; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);">
        📊 View Dashboard
      </a>
    </div>

    <!-- Solutions Section -->
    <div style="background-color: #0C4A6E; border: 1px solid #0369A1; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h3 style="color: #BAE6FD; font-size: 18px; margin-bottom: 15px;">
        💡 Solutions to Get Back Online:
      </h3>
      <ul style="color: #7DD3FC; font-size: 14px; line-height: 1.8;">
        <li><strong>Upgrade Your Plan:</strong> Get more messages per month with Starter or Pro plans</li>
        <li><strong>Wait for Reset:</strong> Your quota will automatically reset on the first day of next month</li>
        <li><strong>Contact Support:</strong> We can help you find the right plan for your needs</li>
        <li><strong>Review Usage:</strong> Check your dashboard to see how you're using your messages</li>
      </ul>
    </div>

    <!-- Plan Comparison -->
    <div style="background-color: #92400E; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h3 style="color: #FEF3C7; font-size: 18px; margin-bottom: 15px; text-align: center;">
        🚀 Upgrade Options:
      </h3>
      <div style="display: flex; justify-content: space-between; gap: 15px;">
        <div style="flex: 1; background: #1F2937; padding: 15px; border-radius: 6px; text-align: center;">
          <h4 style="color: #FDE68A; margin-bottom: 10px;">Starter Plan</h4>
          <p style="color: #FDE68A; font-size: 12px;">10,000 messages/month</p>
          <p style="color: #FDE68A; font-size: 12px;">$29/month</p>
        </div>
        <div style="flex: 1; background: #1F2937; padding: 15px; border-radius: 6px; text-align: center;">
          <h4 style="color: #FDE68A; margin-bottom: 10px;">Pro Plan</h4>
          <p style="color: #FDE68A; font-size: 12px;">Unlimited messages</p>
          <p style="color: #FDE68A; font-size: 12px;">$99/month</p>
        </div>
      </div>
    </div>

    <!-- Support Section -->
    <div style="background-color: #0C4A6E; border: 1px solid #0369A1; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h3 style="color: #BAE6FD; font-size: 18px; margin-bottom: 15px; text-align: center;">
        💬 Need Help? We're Here for You!
      </h3>
      <p style="color: #7DD3FC; font-size: 14px; line-height: 1.6; margin-bottom: 15px; text-align: center;">
        Don't let message limits impact your customer service. Our team can help you choose the right plan.
      </p>
      <div style="text-align: center;">
        <a href="mailto:support@qurius.app" style="background-color: #0369A1; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; display: inline-block;">
          📧 Contact Support
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; border-top: 1px solid #374151;">
      <p style="color: #D1D5DB; font-size: 14px; margin-bottom: 10px;">
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
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1F2937;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #10B981; font-size: 28px; margin-bottom: 10px;">
        🤖 AI FAQ Generation Complete!
      </h1>
      <p style="color: #D1D5DB; font-size: 16px;">
        Your AI assistant has analyzed your content and generated intelligent FAQs
      </p>
    </div>

    <!-- Main Content -->
    <div style="background-color: #064E3B; padding: 30px; border-radius: 10px; margin-bottom: 30px; border: 2px solid #10B981;">
      <h2 style="color: #A7F3D0; font-size: 22px; margin-bottom: 20px;">
        Hello ${companyName}! 🎉
      </h2>
      
      <p style="color: #D1FAE5; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        Great news! Your AI has successfully analyzed your ${crawlType} and generated <strong>${faqCount} intelligent FAQs</strong> 
        that are ready for your review and approval.
      </p>

      <div style="background-color: #065F46; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #A7F3D0; font-size: 18px; margin-bottom: 15px;">
          ✨ What happens next:
        </h3>
        <ul style="color: #D1FAE5; font-size: 14px; line-height: 1.8;">
          <li><strong>Review FAQs:</strong> Check each AI-generated question and answer</li>
          <li><strong>Edit if needed:</strong> Modify questions or answers to match your brand voice</li>
          <li><strong>Approve or reject:</strong> Select which FAQs to keep in your knowledge base</li>
          <li><strong>Save to database:</strong> Approved FAQs become part of your AI assistant</li>
          <li><strong>Go live:</strong> Your customers can now ask these questions!</li>
        </ul>
      </div>

      <p style="color: #D1FAE5; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        <strong>Pro tip:</strong> The more FAQs you approve, the better your AI assistant will understand your business 
        and provide accurate responses to your customers.
      </p>
    </div>

    <!-- Action Button -->
    <div style="text-align: center; margin-bottom: 30px;">
      <a href="${adminLink}" style="background-color: #10B981; color: white; padding: 15px 40px; border-radius: 8px; text-decoration: none; font-size: 18px; font-weight: bold; display: inline-block; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);">
        🔍 Review AI-Generated FAQs
      </a>
    </div>

    <!-- Benefits Section -->
    <div style="background-color: #0C4A6E; border: 1px solid #0369A1; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h3 style="color: #BAE6FD; font-size: 18px; margin-bottom: 15px;">
        🚀 How AI-Generated FAQs Help Your Business:
      </h3>
      <ul style="color: #7DD3FC; font-size: 14px; line-height: 1.8;">
        <li><strong>Save Time:</strong> No need to manually create FAQs from scratch</li>
        <li><strong>Better Coverage:</strong> AI identifies questions you might have missed</li>
        <li><strong>Improved Accuracy:</strong> Based on your actual content and customer data</li>
        <li><strong>Faster Setup:</strong> Get your AI assistant ready in minutes, not hours</li>
        <li><strong>Continuous Learning:</strong> Your AI gets smarter with every interaction</li>
      </ul>
    </div>

    <!-- Next Steps -->
    <div style="background-color: #92400E; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h3 style="color: #FEF3C7; font-size: 18px; margin-bottom: 15px;">
        🎯 Your Next Steps:
      </h3>
      <ul style="color: #FDE68A; font-size: 14px; line-height: 1.8;">
        <li><strong>Click the button above</strong> to access your admin dashboard</li>
        <li><strong>Review each FAQ</strong> and edit if needed</li>
        <li><strong>Approve the best ones</strong> by checking the approval box</li>
        <li><strong>Save approved FAQs</strong> to your knowledge base</li>
        <li><strong>Test your AI assistant</strong> with the new FAQs</li>
        <li><strong>Watch customer satisfaction improve!</strong> 📈</li>
      </ul>
    </div>

    <!-- Support Section -->
    <div style="background-color: #0C4A6E; border: 1px solid #0369A1; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h3 style="color: #BAE6FD; font-size: 18px; margin-bottom: 15px; text-align: center;">
        💬 Need Help? We're Here for You!
      </h3>
      <p style="color: #7DD3FC; font-size: 14px; line-height: 1.6; margin-bottom: 15px; text-align: center;">
        Questions about reviewing FAQs or need help optimizing your AI assistant? Our team is ready to help!
      </p>
      <div style="text-align: center;">
        <a href="mailto:support@qurius.app" style="background-color: #0369A1; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; display: inline-block;">
          📧 Contact Support
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; border-top: 1px solid #374151;">
      <p style="color: #D1D5DB; font-size: 14px; margin-bottom: 10px;">
        Your AI assistant is getting smarter every day! 🚀
      </p>
      <p style="color: #9CA3AF; font-size: 12px;">
        Thank you for choosing Qurius AI to transform your customer service experience.
      </p>
    </div>
  </div>
</body>
</html>
  `;
} 