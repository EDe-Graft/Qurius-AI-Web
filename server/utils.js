import axios from 'axios';
import { toTitleCase } from './helper.js';
import { WelcomeEmailTemplate } from './emailTemplates.js';
import { sendEmail } from './config/resend.js';

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
export async function getAIResponse({role, content, companyName}) {
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
            role: role,
            content: content
          }
        ],
        max_tokens: maxTokens,
        temperature: temperature
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.SOURCE_URL
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
export async function createAuthUser(email) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const authUser = {
      email,
      role: 'company_admin',
      user_metadata: {
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

//Update auth user metadata with company id
export async function updateAuthUser(companyId, userId) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const userResponse = await axios.put(
      `${supabaseUrl}/auth/v1/admin/users/${userId}`,
      {
        user_metadata: { company_id: companyId }
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        }
      }
    );

    console.log("Auth user updated:", userResponse.data)
  }
  catch (error) {
    console.error('❌ Error updating auth user:', error.response?.data || error.message);
    throw new Error('Failed to update auth user');
  }
}

// Send welcome email
export async function sendWelcomeEmail(companyEmail, companyName, planId) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    // Get plan name for display
    const planName = planId === 'pro' ? 'Pro' : planId === 'starter' ? 'Starter' : 'Free';

    // Generate email HTML from template
    const emailHtml = WelcomeEmailTemplate({
      companyName,
      planName,
      adminLink: `${process.env.FRONTEND_URL}/admin`
    });

    // Send welcome email via Resend
    const emailResult = await sendEmail({
      from: 'Qurius AI <hello@qurius.app>',
      replyTo: 'qurius.ai@gmail.com',
      to: companyEmail,
      subject: `Welcome to Qurius AI, ${companyName}!`,
      html: emailHtml
    });

     // Send password reset link using Supabase Auth
     await axios.post(
      `${supabaseUrl}/auth/v1/recover`,
      {
        email: companyEmail,
        redirect_to: `${process.env.FRONTEND_URL}/auth/callback`
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (emailResult.success === false) {
      console.log('⚠️ Welcome email not sent (Resend not configured)');
    } else {
      console.log('✅ Welcome email sent successfully');
    }
    console.log('📧 To:', companyEmail);
    console.log('🏢 Company:', companyName);
    console.log('📦 Plan:', planName);
    
  } catch (error) {
    console.error('❌ Error sending welcome email:', error.response?.data || error.message);
    throw error;
  }
}