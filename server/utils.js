import axios from 'axios';

//getEmbedding from Jina AI
export async function getEmbedding(question, answer) {
  const response = await axios.post(
    'https://api.jina.ai/v1/embeddings',
    {
      input: [question, answer],
      model: 'jina-embeddings-v2-base-en'
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.JINA_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return {
    questionEmbedding: response.data.data[0].embedding,
    answerEmbedding: response.data.data[1].embedding
  }
}


// Get AI response using OpenAI
export async function getAIResponse(question, companyName) {
  const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
  const API_KEY = process.env.OPEN_ROUTER_API_KEY;
  const model = 'openai/gpt-4o-mini';
  const systemPrompt = `You are a helpful customer service assistant for ${companyName}. Provide accurate, helpful, and professional responses to customer questions. Keep responses concise and friendly. If you don't know something specific about the company, suggest they contact customer support.`;
  const maxTokens = 300;
  const temperature = 0.7;

  try {
    const response = await axios.post(
      API_URL,
      {
        model: model,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: question
          }
        ],
        max_tokens: maxTokens,
        temperature: temperature
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API error:', error.response?.data || error.message);
    return "I apologize, but I'm unable to provide a specific answer to your question. Please contact our customer support team for assistance.";
  }
}


// Utility function to parse theme JSON
export function parseTheme(theme) {
  if (typeof theme === 'string') {
    try {
      return JSON.parse(theme);
    } catch (error) {
      console.error('Error parsing theme JSON:', error);
      return {
        primaryColor: "#3B82F6",
        backgroundColor: "#FFFFFF",
        textColor: "#1F2937"
      };
    }
  }
  return theme;
}

// Define pricing plans
export const PRICING_PLANS = {
  'personal': {
    name: 'Personal Plan',
    price: 0.01,
    stripe_price_id: process.env.STRIPE_PERSONAL_PRICE_ID,
    features: [
      '10 messages/month',
      'Basic customization',
      'Email support'
    ]
  },
  'test': {
    name: 'Test Plan',
    price: 1,
    stripe_price_id: process.env.STRIPE_TEST_PRICE_ID,
    features: [
      '100 messages/month',
      'Basic customization',
      'Email support',
      'Standard FAQ templates'
    ]
  },
  'free': {
    name: 'Free Plan',
    price: 0,
    stripe_price_id: null,
    features: [
      '500 messages/month',
      'Basic customization',
      'Email support',
      'Standard FAQ templates'
    ]
  },
  'starter': {
    name: 'Starter Plan',
    price: 29,
    stripe_price_id: process.env.STRIPE_STARTER_PRICE_ID,
    features: [
      '10,000 messages/month',
      'Advanced customization',
      'Priority support',
      'Analytics dashboard',
      'Custom FAQ import'
    ]
  },
  'pro': {
    name: 'Pro Plan',
    price: 99,
    stripe_price_id: process.env.STRIPE_PRO_PRICE_ID,
    features: [
      'Unlimited messages',
      'White-label options',
      '24/7 phone support',
      'Advanced analytics',
      'API access',
      'Custom integrations'
    ]
  }
};


// Helper function to get daily stats
export function getDailyStats(analytics, days) {
  const dailyStats = [];
  const now = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000));
    const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD format
    
    // Filter analytics for this date using PostgreSQL timestamp format
    const dayAnalytics = analytics.filter(a => {
      if (!a.timestamp) return false;
      // Convert PostgreSQL timestamp to date string for comparison
      const timestampDate = new Date(a.timestamp).toISOString().split('T')[0];
      return timestampDate === dateStr;
    });
    
    dailyStats.push({
      date: dateStr,
      views: dayAnalytics.filter(a => a.event_type === 'widget_view').length,
      interactions: dayAnalytics.filter(a => a.event_type !== 'widget_view').length,
      messages: dayAnalytics.filter(a => a.event_type === 'message_sent').length
    });
  }
  
  return dailyStats;
}

// Helper function to calculate time ago
export function getTimeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInMs = now - past;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
    const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
  
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else if (diffInWeeks < 4) {
      return `${diffInWeeks} weeks ago`;
    } else if (diffInMonths < 12) {
      return `${diffInMonths} months ago`;
    } else {
      return `${Math.floor(diffInMonths / 12)} years ago`;
    }
  }


  // Helper functions
export function generateTemporaryPassword() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 12; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function sendWelcomeEmail(email, companyName, planId) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    // Get plan name for display
    const planName = planId === 'pro' ? 'Pro' : planId === 'starter' ? 'Starter' : 'Free';
    
    // Create password reset link using Supabase Auth
    const resetResponse = await axios.post(
      `${supabaseUrl}/auth/v1/recover`,
      {
        email: email,
        redirect_to: `${process.env.FRONTEND_URL || 'https://qurius-ai.vercel.app'}/auth/callback`
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // In production, you would send this via email service like SendGrid or Resend
    // For now, we'll log the welcome email content
    console.log('🎉 Welcome Email Sent!');
    console.log('📧 To:', email);
    console.log('🏢 Company:', companyName);
    console.log('📦 Plan:', planName);
    console.log('🔗 Password Reset Link:', `${process.env.FRONTEND_URL || 'https://qurius-ai.vercel.app'}/admin`);
    console.log('📊 Admin Dashboard:', `${process.env.FRONTEND_URL || 'https://qurius-ai.vercel.app'}/admin`);
    
    // Email content (for reference)
    const emailContent = `
🎉 Welcome to Qurius AI!

Congratulations, ${companyName}! 🚀

You've just joined the future of customer service. Qurius AI is designed to transform how your business interacts with customers, providing instant, intelligent responses that will delight your users and boost your customer satisfaction scores.

✨ What makes Qurius AI incredible:
• Instant Responses: Your customers get answers in seconds, not hours
• 24/7 Availability: Never miss a customer inquiry again
• Intelligent Learning: Gets smarter with every interaction
• Seamless Integration: Works perfectly with your existing website
• Multi-language Support: Serve customers worldwide

Your ${planName} plan is now active and ready to revolutionize your customer service experience. You're about to see a dramatic improvement in customer satisfaction and response times.

🎯 Your Next Steps:
1. Set your password using the link above
2. Access your admin dashboard to customize your widget
3. Import your FAQs to train your AI assistant
4. Copy the integration code to your website
5. Watch your customer satisfaction soar! 📈

Ready to transform your customer service? Let's make it happen! 🚀
    `;
    
    console.log('📝 Email Content:', emailContent);

    console.log('✅ Password reset email sent to:', email);
  } catch (error) {
    console.error('❌ Error sending welcome email:', error.response?.data || error.message);
  }
}

