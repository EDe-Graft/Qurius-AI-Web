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


// Helper function to ensure response ends with complete sentences
function ensureCompleteSentences(text, maxLength = 500) {
  if (!text || text.length <= maxLength) {
    return text;
  }
  
  // Truncate to max length
  let truncated = text.substring(0, maxLength);
  
  // Find the last complete sentence
  const sentenceEndings = ['.', '!', '?', ':', ';', '...', '•', '—'];
  let lastCompleteIndex = -1;
  
  for (const ending of sentenceEndings) {
    const lastIndex = truncated.lastIndexOf(ending);
    if (lastIndex > lastCompleteIndex) {
      lastCompleteIndex = lastIndex;
    }
  }
  
  // If we found a sentence ending, truncate there
  if (lastCompleteIndex > 0) {
    return truncated.substring(0, lastCompleteIndex + 1);
  }
  
  // If no sentence ending found, try to find the last complete word
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex);
  }
  
  // Fallback: return truncated text as-is
  return truncated;
}

// Get AI response using OpenAI
export async function getAIResponse({companyName, companyWebsite, customerSupportEmail, messageHistory, retrievedContext = []}) {
  const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
  const API_KEY = process.env.OPEN_ROUTER_API_KEY;
  const model = 'deepseek/deepseek-r1-0528:free';
  
  // Build context-aware system prompt
  let systemPrompt = `You are a helpful customer service assistant for ${companyName}. Provide accurate, helpful, and professional responses to customer questions. Keep responses concise and friendly.`;
  
  // Add retrieved context if available
  if (retrievedContext && retrievedContext.length > 0) {
    systemPrompt += `\n\nUse the following company information to answer questions:`;
    
    retrievedContext.forEach((context, index) => {
      if (context.type === 'faq') {
        systemPrompt += `\n- FAQ: ${context.question} - ${context.answer}`;
      } else if (context.type === 'content') {
        systemPrompt += `\n- Company Information: ${context.content}`;
      }
    });
    
    systemPrompt += `\n\nBase your response on the information provided above. Generate complete sentences and paragraphs only. 

IMPORTANT: 
- Always provide complete, well-formed sentences
- End responses with proper punctuation (period, exclamation mark, or question mark)
- Do not leave sentences incomplete or cut off mid-thought
- Keep responses concise but comprehensive

When providing contact information, always format it as clickable markdown links:
- Email addresses: [support@company.com](mailto:support@company.com)
- Phone numbers: [Call us at (555) 123-4567](tel:+15551234567)
- Website links: [Visit our website](https://company.com)
- Physical addresses: [123 Main St, City, State](https://maps.google.com/?q=123+Main+St+City+State)

If the information above doesn't answer the question, suggest they contact customer support at [${customerSupportEmail}].`;
  } else {
    // Fallback to original prompt if no context
    systemPrompt += ` If you don't know something specific about the company look it up on the company website [${companyWebsite}] if available and relevant. 

IMPORTANT: When providing contact information, always format it as clickable markdown links:
- Email addresses: [support@company.com](mailto:support@company.com)
- Phone numbers: [Call us at (555) 123-4567](tel:+15551234567)
- Website links: [Visit our website](https://company.com)
- Physical addresses: [123 Main St, City, State](https://maps.google.com/?q=123+Main+St+City+State)

If you don't find the information on the website, suggest they contact customer support at [${customerSupportEmail}].`;
  }
  
  const maxTokens = 500; // Increased for more detailed responses with context
  const temperature = 0.7;

  try {
    console.log('🤖 Calling OpenRouter API with:', {
      model,
      maxTokens,
      temperature,
      messageHistoryLength: messageHistory?.length || 0,
      retrievedContextLength: retrievedContext?.length || 0,
      companyName,
      customerSupportEmail
    });

    const response = await axios.post(
      API_URL,
      {
        model: model,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          ...messageHistory // Add messages history to the request
        ],
        max_tokens: maxTokens,
        temperature: temperature
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.SOURCE_URL
        },
        timeout: 30000 // 30 second timeout
      }
    );

    console.log('✅ OpenRouter API response received');
    const aiResponse = response.data.choices[0].message.content;
    console.log('🤖 AI Response length:', aiResponse?.length || 0);
    
    // Ensure response ends with complete sentences
    const completeResponse = ensureCompleteSentences(aiResponse, maxTokens * 4); // Approximate character limit
    console.log('🤖 Complete response length:', completeResponse?.length || 0);
    
    return completeResponse;
  } catch (error) {
    console.error('❌ OpenRouter API error details:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message,
      code: error.code,
      config: {
        url: error.config?.url,
        method: error.config?.method,
        timeout: error.config?.timeout
      }
    });
    
    // Check for specific error types
    if (error.response?.status === 401) {
      console.error('❌ OpenRouter API key is invalid or missing');
      return `I apologize, but there's a configuration issue with our AI service. Please contact our support team at [${customerSupportEmail}](mailto:${customerSupportEmail}) for assistance.`;
    } else if (error.response?.status === 429) {
      console.error('❌ OpenRouter API rate limit exceeded');
      return `I apologize, but our AI service is currently experiencing high demand. Please try again in a few moments or contact our support team at [${customerSupportEmail}](mailto:${customerSupportEmail}).`;
    } else if (error.code === 'ECONNABORTED') {
      console.error('❌ OpenRouter API request timed out');
      return `I apologize, but our AI service is taking longer than expected to respond. Please try again or contact our support team at [${customerSupportEmail}](mailto:${customerSupportEmail}).`;
    } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      console.error('❌ OpenRouter API connection failed');
      return `I apologize, but we're unable to connect to our AI service at the moment. Please try again later or contact our support team at [${customerSupportEmail}](mailto:${customerSupportEmail}).`;
    }
    
    return `I apologize, but I'm unable to provide a specific answer to your question. Please contact our customer support team for assistance at [${customerSupportEmail}](mailto:${customerSupportEmail}).`;
  }
}

// Generate FAQs from crawled content using OpenRouter AI
export async function generateFAQs(companyName, content, maxFAQs = 15) {
  const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
  const API_KEY = process.env.OPEN_ROUTER_API_KEY;
  const model = 'openai/gpt-5-mini';
  const maxTokens = 2000; // Increased for more FAQs
  const temperature = 0.5; // Reduced for more consistent formatting

  const systemPrompt = `You are an expert FAQ generator specializing in creating customer-focused, actionable FAQs for businesses. Your task is to create ${maxFAQs} high-quality FAQ questions and answers based on the provided content about ${companyName}.

IMPORTANT: You must follow this exact format for each FAQ:
Q: [Question that ends with a question mark?]
A: [Complete answer that ends with a period.]

FOCUS AREAS (prioritize in this order):
1. **Product/Service Information**: What they offer, features, benefits, how it works
2. **Customer Support**: How to get help, contact methods, support hours
3. **Pricing & Plans**: Costs, payment methods, billing, refunds, free trials
4. **Getting Started**: How to sign up, onboarding, first steps
5. **Technical Issues**: Troubleshooting, compatibility, requirements
6. **Company Policies**: Terms of service, privacy, data handling
7. **Business Operations**: Hours, locations, availability, scheduling
8. **Account Management**: Login, password reset, profile updates

QUESTION GUIDELINES:
- Make questions natural and conversational (how customers actually ask)
- Focus on practical, actionable information
- Include both basic and advanced questions
- Cover common pain points and concerns
- Ask about specific features mentioned in the content
- Include "how to" and "what is" questions
- Consider different user personas (new users, existing customers, potential customers)

ANSWER GUIDELINES:
- Provide complete, actionable answers
- Include specific details from the content
- Mention contact information when relevant
- Be helpful and solution-oriented
- Keep answers concise but comprehensive
- Include next steps when applicable
- Reference specific features or services mentioned

QUALITY REQUIREMENTS:
1. Every question MUST end with a question mark (?)
2. Every answer MUST end with a period (.)
3. Questions should be clear, specific, and customer-focused
4. Answers should be comprehensive, helpful, and based on the content
5. Do not include any other text, comments, or formatting
6. Generate no more than ${maxFAQs} quality FAQ pairs
7. Ensure questions are relevant to the actual content provided
8. Avoid generic questions that could apply to any business
9. Prioritize questions that customers would actually ask
10. Make sure answers provide real value and actionable information`;

  const userPrompt = `Based on this content about ${companyName}, generate ${maxFAQs} FAQ questions and answers:

${content.substring(0, 3000)}

ANALYSIS INSTRUCTIONS:
1. First, identify the key products, services, and features mentioned in the content
2. Look for contact information, pricing details, and business hours
3. Identify common customer pain points or concerns that might arise
4. Find specific technical requirements or compatibility information
5. Note any unique selling points or special features

GENERATION INSTRUCTIONS:
- Create questions that real customers would ask about ${companyName}
- Base answers directly on the information provided in the content
- Include specific details, names, and information from the content
- Make questions natural and conversational
- Ensure answers are actionable and helpful

Remember: Each FAQ must follow the exact format:
Q: [Question?]
A: [Answer.]`;

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
      messages: dayAnalytics.filter(a => a.event_type === 'message_sent').length,
      // responses: dayAnalytics.filter(a => a.event_type === 'faq_matched').length
    });
  }
  
  return dailyStats;
}


//Create company and profile and auth user and send welcome email
export async function createCompany(companyData, userId = null) {
  try {
    const { name, location, description, theme, industry, website, email, logo_url, status, plan, domain, enrollment_date, subscription_end_date } = companyData;

    // Extract domain from website URL if not provided
    let extractedDomain = domain;
    if (!domain && website && website.trim() !== '') {
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
    console.log('Creating company with data:', JSON.stringify(companyData, null, 2));

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
      theme: theme, // Store theme object directly as JSONB
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
      subscription_status: companyData.subscription_status || 'active',
      subscription_end_date: subscription_end_date || null
    };

    // Create company with the auth user ID as the company ID
    const finalCompanyData = {
      ...companyDataForDB,
      id: userId // Use the auth user ID as the company ID
    };
    
    console.log('User ID being used for company:', userId);
    console.log('Sending to database:', JSON.stringify(finalCompanyData, null, 2));
    
    const companyResponse = await axios.post(
      `${supabaseUrl}/rest/v1/companies`,
      finalCompanyData,
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

    const companyId = userId;
    return { companyId, companyName: name, email, plan };

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

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase configuration missing');
    }

    const authUser = {
      email,
      role: 'company_admin',
      user_metadata: {
        role: 'company_admin'
      }
    }
    
    console.log('Creating auth user with data:', JSON.stringify(authUser, null, 2));
    
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

    console.log('Auth user response:', JSON.stringify(userResponse.data, null, 2));
    
    const userId = userResponse.data.id;
    if (!userId) {
      throw new Error('No user ID returned from auth user creation');
    }
    
    console.log("Auth user created with ID:", userId);
    return userId;
  } catch (error) {
    console.error('❌ Error creating auth user:', error.response?.data || error.message);
    throw new Error(`Failed to create auth user: ${error.message}`);
  }
}

//Update auth user metadata with company id
export async function updateAuthUser(companyId, userId, companyName) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const userResponse = await axios.put(
      `${supabaseUrl}/auth/v1/admin/users/${userId}`,
      {
        user_metadata: {
           company_id: companyId,
           company_name: companyName
       }
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
      adminLink: `${process.env.FRONTEND_URL}/admin`,
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

// Helper function to record message usage in the new message_usage table
export async function recordMessageUsage(companyId, companyName, messageType, sessionId = null, userQuestion, aiResponse, faqId = null, confidenceScore = null, responseSource = null, fallbackReason = null) {
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

// Content chunking function for RAG
export function chunkContent(content, maxChunkSize = 500) {
  if (!content || typeof content !== 'string') {
    return [];
  }
  
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const chunks = [];
  let currentChunk = '';
  
  for (const sentence of sentences) {
    const trimmedSentence = sentence.trim();
    if (!trimmedSentence) continue;
    
    if ((currentChunk + ' ' + trimmedSentence).length > maxChunkSize && currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
      currentChunk = trimmedSentence;
    } else {
      currentChunk += (currentChunk ? ' ' : '') + trimmedSentence;
    }
  }
  
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }
  
  return chunks.filter(chunk => chunk.length > 50); // Filter out very short chunks
}

// Search content chunks using embeddings with priority weighting
export async function searchContentChunks(queryEmbedding, companyId, topK = 3) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase configuration missing');
    }

    // First try to get high priority chunks
    const highPriorityResponse = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/find_relevant_content_chunks`,
      {
        p_company_id: companyId,
        p_query_embedding: queryEmbedding,
        p_top_k: Math.ceil(topK * 0.6), // 60% high priority
        p_priority: 'high'
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Then get medium priority chunks to fill the rest
    const mediumPriorityResponse = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/find_relevant_content_chunks`,
      {
        p_company_id: companyId,
        p_query_embedding: queryEmbedding,
        p_top_k: Math.ceil(topK * 0.4), // 40% medium priority
        p_priority: 'medium'
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const highPriorityResults = highPriorityResponse.data || [];
    const mediumPriorityResults = mediumPriorityResponse.data || [];
    
    // Combine and sort by similarity
    const allResults = [...highPriorityResults, ...mediumPriorityResults]
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topK);

    return allResults;
  } catch (error) {
    console.error('Content chunk search error:', error.response?.data || error.message);
    return [];
  }
}

// RAG search function that combines FAQ and content chunk searches
export async function searchWithRAG(userQuestion, companyId, topK = 5) {
  try {
    console.log('🔍 Starting RAG search for:', userQuestion.substring(0, 50) + '...');
    console.log('🏢 Company ID:', companyId);
    
    // Generate embedding for user question
    const { questionEmbedding } = await getEmbedding(userQuestion, '');
    console.log('✅ Generated question embedding');
    
    // Search FAQs (existing functionality)
    const faqResults = await searchFAQs(questionEmbedding, companyId, Math.ceil(topK * 0.3)); // 30% of results
    console.log(`📚 Found ${faqResults.length} relevant FAQs`);
    
    // Search content chunks (enhanced RAG functionality)
    const contentResults = await searchContentChunks(questionEmbedding, companyId, Math.ceil(topK * 0.7)); // 70% of results
    console.log(`📄 Found ${contentResults.length} relevant content chunks`);
    
    // Combine and rank all results with priority weighting
    const allResults = [
      ...faqResults.map(result => ({
        ...result,
        type: 'faq',
        source: 'faq_database',
        priority: 'high' // FAQs get high priority
      })),
      ...contentResults.map(result => ({
        ...result,
        type: 'content',
        source: 'company_content',
        priority: result.priority || 'medium'
      }))
    ].sort((a, b) => {
      // Sort by similarity first, then by priority
      if (Math.abs(a.similarity - b.similarity) < 0.1) {
        // If similarity is close, prioritize by type and priority
        if (a.type === 'faq' && b.type !== 'faq') return -1;
        if (b.type === 'faq' && a.type !== 'faq') return 1;
        if (a.priority === 'high' && b.priority !== 'high') return -1;
        if (b.priority === 'high' && a.priority !== 'high') return 1;
      }
      return b.similarity - a.similarity;
    })
    .slice(0, topK); // Get top K most relevant overall
    
    console.log(`🎯 RAG search completed. Top ${allResults.length} results found.`);
    
    // Log top results for debugging
    if (allResults.length > 0) {
      console.log('🏆 Top result:', {
        type: allResults[0].type,
        similarity: allResults[0].similarity,
        priority: allResults[0].priority,
        content: allResults[0].type === 'faq' ? 
          allResults[0].question.substring(0, 100) + '...' : 
          allResults[0].content.substring(0, 100) + '...'
      });
    }
    
    return allResults;
    
  } catch (error) {
    console.error('❌ RAG search error:', error);
    console.error('❌ Error details:', error.message);
    return [];
  }
}

// Helper function to search FAQs (extracted from existing logic)
async function searchFAQs(queryEmbedding, companyId, topK = 3) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase configuration missing');
    }

    const response = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/find_relevant_faqs`,
      {
        p_company_id: companyId,
        p_query: '', // Not used in the function, but required
        p_query_embedding: queryEmbedding,
        p_top_k: topK
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data || [];
  } catch (error) {
    console.error('FAQ search error:', error.response?.data || error.message);
    return [];
  }
}