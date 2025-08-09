import axios from 'axios';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { toTitleCase } from './helper.js';
import { WelcomeEmailTemplate, MessageLimitReachedEmailTemplate } from './emailTemplates.js';
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

// Generate FAQs from crawled content using OpenRouter AI
export async function getGeneratedFAQs(companyName, content, maxFAQs = 10) {
  const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
  const API_KEY = process.env.OPEN_ROUTER_API_KEY;
  const model = 'openai/gpt-4o-mini';
  const maxTokens = 1500;
  const temperature = 0.7;

  const systemPrompt = `You are an expert FAQ generator. Based on the provided content about ${companyName}, generate ${maxFAQs} relevant, high-quality FAQ questions and answers that customers would commonly ask.

Focus on:
- Product/service information
- Common customer inquiries
- Support and help topics
- Company policies and procedures
- Pricing and plans (if mentioned)
- Technical support questions
- Do not include any other text or comments in your response.

Format each FAQ exactly as:
Q: [Clear, specific question. End with a question mark.]
A: [Comprehensive, helpful answer related to the question. End with a period.]

Generate only the FAQs in the specified format, no other text.`;

  const userPrompt = `Generate FAQs based on this content about ${companyName}:

${content.substring(0, 4000)}

Create ${maxFAQs} relevant FAQ pairs that would be most useful for customers.`;

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
            content: userPrompt
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

    const generatedText = response.data.choices[0].message.content;
    return parseFAQsFromText(generatedText);
  } catch (error) {
    console.error('FAQ generation error:', error.response?.data || error.message);
    throw new Error('Failed to generate FAQs using AI');
  }
}

// Parse FAQs from AI-generated text
function parseFAQsFromText(text) {
  const faqs = [];
  const lines = text.split('\n');
  
  let currentQuestion = '';
  let currentAnswer = '';
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    if (trimmedLine.startsWith('Q:') || trimmedLine.startsWith('Question:')) {
      // Save previous FAQ if exists
      if (currentQuestion && currentAnswer) {
        faqs.push({
          question: currentQuestion,
          answer: currentAnswer.trim(),
          confidence: 0.9,
          source: 'ai_generated'
        });
      }
      
      // Start new FAQ
      currentQuestion = trimmedLine.replace(/^Q:\s*|Question:\s*/i, '').trim();
      currentAnswer = '';
    } else if (trimmedLine.startsWith('A:') || trimmedLine.startsWith('Answer:')) {
      currentAnswer = trimmedLine.replace(/^A:\s*|Answer:\s*/i, '').trim();
    } else if (currentQuestion && trimmedLine) {
      // Continue answer
      currentAnswer += (currentAnswer ? ' ' : '') + trimmedLine;
    }
  }
  
  // Add last FAQ
  if (currentQuestion && currentAnswer) {
    faqs.push({
      question: currentQuestion,
      answer: currentAnswer.trim(),
      confidence: 0.9,
      source: 'ai_generated'
    });
  }
  
  return faqs;
}


// Helper function to track FAQ matches
export async function trackFAQMatch(companyId, sessionId, faqId, confidenceScore, responseSource) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    const analyticsData = {
      company_id: companyId,
      event_type: 'faq_matched',
      session_id: sessionId,
      faq_id: faqId,
      confidence_score: confidenceScore,
      response_source: responseSource,
      timestamp: new Date().toISOString()
    };

    await axios.post(
      `${supabaseUrl}/rest/v1/widget_analytics`,
      analyticsData,
      {
        headers: {
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Failed to track FAQ match:', error);
  }
}

// Helper function to track AI fallbacks
export async function trackAIFallback(companyId, sessionId, fallbackReason, confidenceScore = null) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    const analyticsData = {
      company_id: companyId,
      event_type: 'ai_fallback',
      session_id: sessionId,
      ai_fallback_reason: fallbackReason,
      confidence_score: confidenceScore,
      response_source: 'ai',
      timestamp: new Date().toISOString()
    };

    await axios.post(
      `${supabaseUrl}/rest/v1/widget_analytics`,
      analyticsData,
      {
        headers: {
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Failed to track AI fallback:', error);
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
export async function createCompany(companyData, userId = null) {
  try {
    const { name, location, description, theme, industry, website, email, logo_url, status, plan, domain, enrollment_date } = companyData;

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

    // Generate widget key for the company
    const { newKey, hashedKey } = await generateWidgetKeyForCompany();

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
      widget_key_hash: hashedKey, // Store hashed widget key
      // Stripe fields
      stripe_customer_id: companyData.stripe_customer_id || null,
      stripe_subscription_id: companyData.stripe_subscription_id || null,
      subscription_status: companyData.subscription_status || 'active'
    };

    // Create company with the auth user ID as the company ID
    const companyResponse = await axios.post(
      `${supabaseUrl}/rest/v1/companies`,
      {
        ...companyDataForDB,
        id: userId // Use the auth user ID as the company ID
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
    console.log("Company created:", companyResponse.data)

    const companyId = userId || companyResponse.data[0].id;
    return { companyId, name, email, plan, widgetKey: newKey };

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

// Widget key generation and validation functions
export const generateWidgetKey = () => {
  // Generate a secure random key (32 bytes = 256 bits)
  return crypto.randomBytes(32).toString('hex');
};

export const hashWidgetKey = async (key) => {
  // Hash the key with bcrypt (salt rounds = 12)
  const saltRounds = 12;
  return await bcrypt.hash(key, saltRounds);
};

export const validateWidgetKey = async (providedKey, hashedKey) => {
  // Compare the provided key with the hashed key
  return await bcrypt.compare(providedKey, hashedKey);
};

// Generate widget key for a company (simplified - no separate table)
export const generateWidgetKeyForCompany = async () => {
  try {
    // Generate new key
    const newKey = generateWidgetKey();
    const hashedKey = await hashWidgetKey(newKey);

    console.log('✅ Widget key generated');
    return { newKey, hashedKey };
  } catch (error) {
    console.error('❌ Error generating widget key:', error);
    throw error;
  }
};

// Send welcome email
export async function sendWelcomeEmail(companyEmail, companyName, planId, widgetKey = null) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    // Get plan name for display
    const planName = planId === 'pro' ? 'Pro' : planId === 'starter' ? 'Starter' : 'Free';

    // Generate email HTML from template
    const emailHtml = WelcomeEmailTemplate({
      companyName,
      planName,
      adminLink: `${process.env.FRONTEND_URL}/admin`,
      widgetKey: widgetKey // Pass widget key to template
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
    if (widgetKey) {
      console.log('🔑 Widget Key:', widgetKey);
    }
    
  } catch (error) {
    console.error('❌ Error sending welcome email:', error.response?.data || error.message);
    throw error;
  }
}

// Helper function to record message usage in the new message_usage table
export async function recordMessageUsage(companyId, companyName, messageType, sessionId, userQuestion, aiResponse, faqId = null, confidenceScore = null, responseSource = null, fallbackReason = null) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    const usageData = {
      company_id: companyId,
      company_name: companyName,
      message_type: messageType,
      session_id: sessionId,
      user_question: userQuestion,
      ai_response: aiResponse,
      faq_id: faqId,
      confidence_score: confidenceScore,
      response_source: responseSource,
      fallback_reason: fallbackReason
    };

    console.log('📝 Recording message usage:', { companyId, messageType, responseSource });

    await axios.post(
      `${supabaseUrl}/rest/v1/message_usage`,
      usageData,
      {
        headers: {
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ Message usage recorded successfully');
  } catch (error) {
    console.error('❌ Failed to record message usage:', error.response?.data || error.message);
    // Don't fail the entire request if usage recording fails
  }
}

// Helper function to check and update message limits using separate table
export async function checkAndUpdateMessageLimit(companyId) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase configuration missing');
    }

    // Use the new check_message_limit RPC function
    const limitCheckResponse = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/check_message_limit`,
      {
        p_company_id: companyId
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!limitCheckResponse.data || limitCheckResponse.data.length === 0) {
      throw new Error('Failed to check message limit');
    }

    const limitData = limitCheckResponse.data[0];
    console.log('📊 Message limit check:', limitData);

    // Get company details for email notifications
    const companyResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?id=eq.${companyId}&select=plan,contact_email,name`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!companyResponse.data || companyResponse.data.length === 0) {
      throw new Error('Company not found');
    }

    const company = companyResponse.data[0];
    
    // Check if messages are available
    if (!limitData.can_send) {
      console.log('❌ Message limit reached for company:', company.name);
      
      // Send email notification if contact email exists
      if (company.contact_email) {
        await sendMessageLimitReachedEmail(company.contact_email, company.name, company.plan);
      }
      
      return {
        canSend: false,
        message: `Message limit for ${company.name} reached for this month. Please contact customer support with any questions.`,
        company: company
      };
    }

    console.log('✅ Message limit check passed for company:', company.name, 'Messages remaining:', limitData.messages_remaining);

    // Check if this is the last message (for email notification)
    const isLastMessage = limitData.messages_remaining === 1;
    
    // Send warning email if this was the last message
    if (isLastMessage && company.contact_email) {
      await sendMessageLimitReachedEmail(company.contact_email, company.name, company.plan);
    }
    
    return {
      canSend: true,
      messagesLeft: limitData.messages_remaining,
      isLastMessage: isLastMessage,
      company: company
    };
  } catch (error) {
    console.error('❌ Message limit check error:', error);
    throw error;
  }
}

// Helper function to send message limit reached email
export async function sendMessageLimitReachedEmail(companyEmail, companyName, planName) {
  try {
    const adminLink = `${process.env.FRONTEND_URL}/integration`;
    
    const emailHtml = MessageLimitReachedEmailTemplate({
      companyName,
      planName,
      adminLink
    });

    const emailData = {
      from: 'Qurius AI <noreply@qurius.app>',
      to: companyEmail,
      subject: `⚠️ Message Limit Reached - ${companyName}`,
      html: emailHtml
    };

    // Send email using Resend
    const resendResponse = await axios.post('https://api.resend.com/emails', emailData, {
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Message limit reached email sent successfully to:', companyEmail);
    return true;
  } catch (error) {
    console.error('❌ Failed to send message limit reached email:', error);
    return false;
  }
}