import axios from 'axios';
import { formatReadableDateTime, toTitleCase } from './helper.js';

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


//Create company and profile and auth user and send welcome email
export async function createCompany(companyData) {
  try {
    const { name, location, description, theme, industry, website, email, logo_url, status, plan, domain } = companyData;

    // Extract domain from website URL if not provided
    let extractedDomain = domain;
    if (!domain && website) {
      try {
        const url = new URL(website.startsWith('http') ? website : `https://${website}`);
        extractedDomain = url.hostname;
        console.log('Extracted domain from website:', extractedDomain);
      } catch (error) {
        console.log('Could not extract domain from website:', website);
        extractedDomain = '';
      }
    }

    // Log the company data
    console.log('Creating company:', companyData);

    // Get supabase URL and key
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase configuration missing');
    }

    // Prepare company data for database
    const companyDataForDB = {
      name: toTitleCase(name),
      location: toTitleCase(location),
      description,
      theme: theme, // Store theme object directly as JSON
      industry,
      website,
      domain: domain || extractedDomain,
      contact_email: email,
      admin_email: email,
      logo_url: logo_url || '',
      status: status || 'active',
      plan: plan || 'free', // Default to free plan
      // enrollment_date: formatReadableDateTime(new Date())
    };

    // Create company
    const companyResponse = await axios.post(
      `${supabaseUrl}/rest/v1/companies`,
      companyDataForDB,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        }
      }
    );
    console.log("Company created:", companyResponse.data)

    const companyId = companyResponse.data[0].id;
    return { companyId, name, email, plan };

    } catch (error) {
      console.error('❌ Error creating company:', error.response?.data || error.message);
      throw new Error('Failed to create company');
    }
  }

//Create auth user
export async function createAuthUser(companyId, email) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const authUser = {
      email,
      role: 'company_admin',
      user_metadata: {
        company_id: companyId,
        role: 'company_admin'
      }
    }
    const userResponse = await axios.post(
      `${supabaseUrl}/auth/v1/admin/users`,
      authUser,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        }
      }
    );

    const userId = userResponse.data.id;
    console.log("Auth user created:", userResponse.data)
    return userId;
  } catch (error) {
    console.error('❌ Error creating auth user:', error.response?.data || error.message);
    throw new Error('Failed to create auth user');
  }
}



// Send welcome email
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
    console.log('🔗 Password Reset Link:', `${process.env.FRONTEND_URL}/auth/callback`);
    console.log('📊 Admin Dashboard:', `${process.env.FRONTEND_URL}/admin`);
    
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
    

    console.log('✅ Password reset email sent to:', email);
  } catch (error) {
    console.error('❌ Error sending welcome email:', error.response?.data || error.message);
  }
}