// server/index.js
import dotenv from 'dotenv';
// Load environment variables first
dotenv.config({ path: './.env' });

import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import axios from 'axios';
import Stripe from 'stripe';
import { parseTheme, getDailyStats, getEmbedding, getAIResponse, getGeneratedFAQs, sendWelcomeEmail, createCompany, createAuthUser, updateAuthUser, generateWidgetKeyForCompany, validateWidgetKey, checkAndUpdateMessageLimit, recordMessageUsage, trackFAQMatch, trackAIFallback } from './utils.js';
import { formatReadableDateTime } from './helper.js';
import { PRICING_PLANS } from './constants.js';
import crawlerRoutes from './crawler/crawler-api.js';

const app = express();;
const PORT = process.env.PORT || 3001;

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// Middleware
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000,http://localhost:5173,http://127.0.0.1:5500,http://localhost:5500,https://qurius-ai.vercel.app,https://qurius.app').split(',').map(origin => origin.trim());

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g. mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    // Allow all localhost origins for development
    if (origin && (origin.includes('localhost') || origin.includes('127.0.0.1'))) {
      return callback(null, true);
    }
    // Allow Vercel domains
    if (origin && (origin.includes('vercel.app') || origin.includes('qurius-ai.vercel.app') || origin.includes('qurius.app'))) {
      return callback(null, true);
    }
    console.log('CORS blocked origin:', origin);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'withCredentials']
}));

// Add OPTIONS handling for preflight requests
app.options('*', cors());

// Stripe webhook handler - MUST be before express.json() middleware
app.post('/api/payments/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log('📦 Webhook event:', event.type);

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        const companyName = session.metadata.company_name;
        const planId = session.metadata.plan_id;
        const customerEmail = session.metadata.customer_email;
        const location = session.metadata.location;
        const industry = session.metadata.industry;
        const website = session.metadata.website;
        const description = session.metadata.description;
        
        console.log('✅ Checkout completed for company:', companyName, 'plan:', planId);
        console.log('💳 Session metadata:', session.metadata);
        console.log('💳 Extracted values:', { companyName, planId, customerEmail, location, industry, website, description });
        
        // Create company after successful payment
        const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        
        if (!supabaseUrl || !supabaseKey) {
          console.error('❌ Supabase configuration missing');
          break;
        }

        // Create company with subscription info
        const companyData = {
          name: companyName,
          email: customerEmail, // createCompany expects 'email' field
          contact_email: customerEmail,
          admin_email: customerEmail,
          location: location || '',
          industry: industry || '',
          website: website || '',
          description: description || '',
          plan: planId,
          stripe_customer_id: session.customer,
          stripe_subscription_id: session.subscription,
          subscription_status: 'active',
          status: 'active',
          // Add subscription end date if subscription exists
          subscription_end_date: session.subscription ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() : null // Default to 30 days from now
        };

        try {
          // Create auth user first to avoid duplicate users
          console.log('💳 Creating auth user for:', customerEmail);
          const userId = await createAuthUser(customerEmail);

          // If success, create company
          if (userId) {
            console.log('💳 Creating company for:', companyData);
            const { companyId, companyName, email: companyEmail } = await createCompany(companyData, userId);
            console.log('✅ Company created successfully:', companyId);

            // Update auth user with company id
            await updateAuthUser(companyId, userId);
            console.log('✅ Auth user updated successfully:', userId);

            // Send welcome email with password reset and widget key
            console.log('💳 Sending welcome email for:', companyEmail);
            await sendWelcomeEmail(companyEmail, companyName, planId );
            console.log('✅ Welcome email sent successfully with widget key');
          } else {
            console.error('❌ Failed to create auth user for:', customerEmail);
          }
        } catch (error) {
          console.error('❌ Error creating company:', error.response?.data || error.message);
          console.error('❌ Error stack:', error.stack);
        }
        break;

      case 'customer.subscription.updated':
        const subscription = event.data.object;
        const customerId = subscription.customer;
        
        // Find company by customer ID
        const companyResponse = await axios.get(
          `${supabaseUrl}/rest/v1/companies?stripe_customer_id=eq.${customerId}`,
          {
            headers: {
              'apikey': supabaseKey,
              'Authorization': `Bearer ${supabaseKey}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (companyResponse.data && companyResponse.data[0]) {
          const company = companyResponse.data[0];
          
          await axios.patch(
            `${supabaseUrl}/rest/v1/companies?id=eq.${company.id}`,
            {
              subscription_status: subscription.status,
              subscription_end_date: new Date(subscription.current_period_end * 1000).toISOString()
            },
            {
              headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json'
              }
            }
          );
        }
        break;

      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object;
        const deletedCustomerId = deletedSubscription.customer;
        
        // Find company by customer ID
        const deletedCompanyResponse = await axios.get(
          `${supabaseUrl}/rest/v1/companies?stripe_customer_id=eq.${deletedCustomerId}`,
          {
            headers: {
              'apikey': supabaseKey,
              'Authorization': `Bearer ${supabaseKey}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (deletedCompanyResponse.data && deletedCompanyResponse.data[0]) {
          const company = deletedCompanyResponse.data[0];
          
          await axios.patch(
            `${supabaseUrl}/rest/v1/companies?id=eq.${company.id}`,
            {
              subscription_status: 'canceled',
              plan: 'free'
            },
            {
              headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json'
              }
            }
          );
        }
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('❌ Webhook processing error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// parse json
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.NODE_ENV === 'production' ? 100 : 1000, // Higher limit for development
  message: 'Too many requests from this IP'
});

// Apply rate limiting only in production or when explicitly enabled
if (process.env.NODE_ENV === 'production' || process.env.ENABLE_RATE_LIMIT === 'true') {
  app.use('/api/', limiter);
  console.log('🔒 Rate limiting enabled');
} else {
  console.log('🚫 Rate limiting disabled for development');
}

// Crawler routes
app.use('/api/crawler', crawlerRoutes);

// Production monitoring endpoints
app.get('/api/status', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// Get widget configuration (secure)
app.get('/api/supabase-config', (req, res) => {
  try {
    // Only return public configuration, no API keys
    res.json({
      supabaseUrl: process.env.SUPABASE_PROJECT_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
      supabaseAdminKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      backendUrl: process.env.BACKEND_URL || `https://${req.get('host')}`
    });
  } catch (error) {
    console.error('Widget config error:', error);
    res.status(500).json({ error: 'Failed to get widget configuration' });
  }
});

// Get Google Translate API key
app.get('/api/translate/api-key', (req, res) => {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return res.status(404).json({ error: 'Google Translate API key not configured' });
    }
    res.json({ apiKey });
  } catch (error) {
    console.error('API key error:', error);
    res.status(500).json({ error: 'Failed to get API key' });
  }
});

// Get company theme
app.get('/api/companies/:name/theme', async (req, res) => {
  try {
    const { name } = req.params;
    
    // Make API call to Supabase to get company theme
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    const response = await axios.get(
      `${supabaseUrl}/rest/v1/companies?select=theme,logo_url&name=eq.${encodeURIComponent(name)}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );


    console.log(response.data[0])
    if (response.data && response.data.length > 0) {
      const company = response.data[0];
      
      res.json({
        company: { ...company, theme: parseTheme(company.theme) },
      });
    } else {
      // Return default theme if company not found
      res.json({
        company: null,
        theme: {
          primaryColor: "#3B82F6",
          backgroundColor: "#FFFFFF",
          textColor: "#1F2937"
        },
        logo_url: ''
      });
    }
  } catch (error) {
    console.error('Company theme error:', error.response?.data || error.message);
    // Return default theme on error
    res.json({
      company: company,
    });
  }
});

// Get company ID
app.get('/api/companies/:name/id', async (req, res) => {
  try {
    const { name } = req.params;
    console.log('Getting company ID for:', name);
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    const response = await axios.get(
      `${supabaseUrl}/rest/v1/companies?select=id&name=eq.${encodeURIComponent(name)}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data && response.data.length > 0) {
      res.json({ id: response.data[0].id });
    } else {
      res.status(404).json({ error: 'Company not found' });
    }
  } catch (error) {
    console.error('Company ID error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get company ID' });
  }
});

// Get all companies with analytics data
app.get('/api/companies', async (req, res) => {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Get all companies
    const companiesResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?select=*&order=created_at.desc`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const companies = companiesResponse.data || [];

    // Get analytics for all companies using the company_id index
    const analyticsResponse = await axios.get(
      `${supabaseUrl}/rest/v1/widget_analytics?select=company_id,event_type,timestamp&order=timestamp.desc`,
      {
        headers: {
          'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const allAnalytics = analyticsResponse.data || [];

    // Merge company data with analytics
    const companiesWithStats = companies.map(company => {
      // Filter analytics for this specific company using the company_id index
      const companyAnalytics = allAnalytics.filter(analytics => analytics.company_id === company.id);
      
      // Calculate analytics summary
      const analyticsSummary = {
        totalViews: companyAnalytics.filter(a => a.event_type === 'widget_view').length,
        totalInteractions: companyAnalytics.filter(a => a.event_type !== 'widget_view').length,
        totalMessages: companyAnalytics.filter(a => a.event_type === 'message_sent').length,
        totalResponses: companyAnalytics.filter(a => a.event_type === 'message_received').length,
        uniqueSessions: [...new Set(companyAnalytics.filter(a => a.session_id).map(a => a.session_id))].length,
        lastActivity: companyAnalytics.length > 0 ? new Date(companyAnalytics[0].timestamp).toLocaleDateString() : 'Never'
      };
      
      return {
        ...company,
        theme: parseTheme(company.theme),
        plan: company.plan,
        analytics: analyticsSummary
      };
    });

    res.json(companiesWithStats);
  } catch (error) {
    console.error('Get companies error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});


// Get company by ID with analytics
app.get('/api/companies/:id/', async (req, res) => {
  try {
    const { id } = req.params;
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Get company
    const companyResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?id=eq.${id}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Get widget analytics using the company_id index for better performance
    const widgetAnalyticsResponse = await axios.get(
      `${supabaseUrl}/rest/v1/widget_analytics?company_id=eq.${id}&order=timestamp.desc`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    const widgetAnalytics = widgetAnalyticsResponse.data || [];

    if (companyResponse.data && companyResponse.data.length > 0) {
      const company = companyResponse.data[0];
      
      // Calculate analytics summary
      const analyticsSummary = {
        totalViews: widgetAnalytics.filter(a => a.event_type === 'widget_view').length,
        totalInteractions: widgetAnalytics.filter(a => a.event_type !== 'widget_view').length,
        totalMessages: widgetAnalytics.filter(a => a.event_type === 'message_sent').length,
        totalResponses: widgetAnalytics.filter(a => a.event_type === 'message_received').length,
        uniqueSessions: [...new Set(widgetAnalytics.filter(a => a.session_id).map(a => a.session_id))].length,
        lastActivity: widgetAnalytics.length > 0 ? new Date(widgetAnalytics[0].timestamp).toLocaleDateString() : 'Never',
        recentActivity: widgetAnalytics.slice(0, 10) // Last 10 activities
      };
      res.json({
          ...company, 
          theme: parseTheme(company.theme),
          analytics: analyticsSummary

      });
    } else {
      res.status(404).json({ error: 'Company not found' });
    }
  } catch (error) {
    console.error('Get company error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch company' });
  }
});

// Check if email belongs to a company admin
app.post('/api/companies/admin-check', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Check if email exists in companies table as admin_email
    const companyResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?admin_email=eq.${encodeURIComponent(email)}&select=id,name,admin_email,status`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (companyResponse.data && companyResponse.data.length > 0) {
      const company = companyResponse.data[0];
      
      // Only allow access if company is active
      if (company.status === 'active') {
        res.json({
          isAdmin: true,
          company: {
            id: company.id,
            name: company.name,
            admin_email: company.admin_email
          }
        });
      } else {
        res.json({ isAdmin: false, message: 'Company account is not active' });
      }
    } else {
      res.json({ isAdmin: false, message: 'Email not found as company admin' });
    }
  } catch (error) {
    console.error('Admin check error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to check admin status' });
  }
});

// Create company and profile
// app.post('/api/companies', async (req, res) => {
//   try {
//     const companyData = req.body;

//     //Create auth user first to avoid duplicate users
//     const userId = await createAuthUser(email)

//     //if success, create company
//     if (userId) {
//       const { companyId, companyName, email: companyEmail, plan } = await createCompany(companyData)

//       // Update auth user with company id
//       await updateAuthUser(companyId, userId)

//       //Send Welcome Email
//       await sendWelcomeEmail(companyEmail, companyName, plan)
//     }


//     res.json({
//       success: true,
//       id: companyId,
//       company: { ...companyData, id: companyId }
//     });
//   } catch (error) {
//     console.error('Create company error:', error.response?.data || error.message);
//     res.status(500).json({ 
//       success: false,
//       error: 'Failed to create company' 
//     });
//   }
// });

// Update company
app.patch('/api/companies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      name, 
      domain, 
      location, 
      description, 
      theme, 
      industry, 
      website, 
      contact_email, 
      logo_url, 
      admin_email,
      status,
    } = req.body;
    
    console.log('Updating company:', id);
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Prepare company data
    const companyData = {
      name,
      domain,
      location,
      description,
      theme: theme, // Store theme object directly as JSON
      industry,
      website,
      contact_email,
      admin_email,
      logo_url: logo_url || '',
      status: status || 'active',
      // updated_at: formatReadableDateTime(new Date())
    };

    const response = await axios.patch(
      `${supabaseUrl}/rest/v1/companies?id=eq.${id}`,
      companyData,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({
      success: true,
      company: { ...companyData, id }
    });
  } catch (error) {
    console.error('Update company error:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false,
      error: 'Failed to update company' 
    });
  }
});

// Delete company
app.delete('/api/companies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Deleting company:', id);
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    const response = await axios.delete(
      `${supabaseUrl}/rest/v1/companies?id=eq.${id}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({
      success: true
    });
  } catch (error) {
    console.error('Delete company error:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false,
      error: 'Failed to delete company' 
    });
  }
});

// Search FAQs with enhanced analytics tracking
app.post('/api/faqs/search', async (req, res) => {
  try {
    const { question, companyId, companyName, sessionId, website } = req.body;
    console.log('Searching FAQs for company ID:', companyId);
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Check message limit using new separate table approach
    const messageLimitCheck = await checkAndUpdateMessageLimit(companyId);
    if (!messageLimitCheck.canSend) {
      // Record limit reached usage
      await recordMessageUsage(companyId, companyName, 'limit_reached', sessionId, question, messageLimitCheck.message);
      
      return res.json([{ 
        question: question, 
        answer: messageLimitCheck.message, 
        source: 'limit_reached',
        limitReached: true
      }]);
    }

    try {
      // Try semantic search with embeddings
      const { questionEmbedding } = await getEmbedding(question, '');

      // Search FAQs using vector similarity
      const faqResponse = await axios.post(
        `${supabaseUrl}/rest/v1/rpc/find_relevant_faqs`,
        {
          p_company_id: companyId,
          p_query: question,
          p_query_embedding: questionEmbedding,
          p_top_k: 5
        },
        {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Semantic search results:', faqResponse.data?.length || 0);
      
      if (faqResponse.data && faqResponse.data.length > 0) {
        // Check if the best match has high enough confidence
        const bestMatch = faqResponse.data[0];
        console.log('Best match:', bestMatch.similarity);
        const confidenceThreshold = 0.75; // Adjust this threshold as needed
        
        if (bestMatch.similarity >= confidenceThreshold) {
          console.log('Using FAQ with confidence:', bestMatch.similarity);
          
          // Record FAQ usage
          await recordMessageUsage(companyId, companyName, 'faq', sessionId, question, bestMatch.answer, bestMatch.faq_id, bestMatch.similarity, 'faq');
          
          // Track FAQ match for analytics
          await trackFAQMatch(companyId, sessionId, bestMatch.faq_id, bestMatch.similarity, 'faq');
          
          res.json([{ 
            question: question, 
            answer: bestMatch.answer, 
            source: 'faq',
            faqId: bestMatch.faq_id,
            confidence: bestMatch.similarity,
            messagesLeft: messageLimitCheck.messagesLeft
          }]);
        } else {
          console.log('FAQ confidence too low:', bestMatch.similarity, 'falling back to AI');
          const aiResponse = await getAIResponse({role: 'user', content: question, companyName, companyWebsite: website });
          
          // Record AI usage
          await recordMessageUsage(companyId, companyName, 'ai', sessionId, question, aiResponse, null, bestMatch.similarity, 'ai', 'low_confidence');
          
          // Track AI fallback
          await trackAIFallback(companyId, sessionId, 'low_confidence', bestMatch.similarity);
          
          res.json([{ 
            question: question, 
            answer: aiResponse, 
            source: 'ai',
            fallbackReason: 'low_confidence',
            confidence: bestMatch.similarity,
            messagesLeft: messageLimitCheck.messagesLeft
          }]);
        }
      } else {
        // No FAQ found, fallback to AI
        console.log('No FAQ found, falling back to AI');
        const aiResponse = await getAIResponse({role: 'user', content: question, companyName, companyWebsite: website });
        
        // Record AI usage
        await recordMessageUsage(companyId, companyName, 'ai', sessionId, question, aiResponse, null, null, 'ai', 'no_faq_found');
        
        // Track AI fallback
        await trackAIFallback(companyId, sessionId, 'no_faq_found');
        
        res.json([{ 
          question: question, 
          answer: aiResponse, 
          source: 'ai',
          fallbackReason: 'no_faq_found',
          messagesLeft: messageLimitCheck.messagesLeft
        }]);
      }
    } catch (embeddingError) {
      console.log('Embedding search failed, falling back to AI:', embeddingError.message);
      
      // Fallback to AI when semantic search fails
      const aiResponse = await getAIResponse({role: 'user', content: question, companyName, companyWebsite: website });
      
      // Record AI usage
      await recordMessageUsage(companyId, companyName, 'ai', sessionId, question, aiResponse, null, null, 'ai', 'embedding_error');
      
      // Track AI fallback
      await trackAIFallback(companyId, sessionId, 'embedding_error');
      
      res.json([{ 
        question: question, 
        answer: aiResponse, 
        source: 'ai',
        fallbackReason: 'embedding_error',
        messagesLeft: messageLimitCheck.messagesLeft
      }]);
    }
  } catch (error) {
    console.error('FAQ search error:', error.response?.data || error.message);
    res.json([]);
  }
});



// Generate FAQs from content using AI
app.post('/api/ai/generate-faqs', async (req, res) => {
  try {
    const { companyName, content, maxFAQs = 10, companyId, saveToDatabase = false } = req.body;
    
    if (!companyName || !content) {
      return res.status(400).json({ error: 'Missing required fields: companyName, content' });
    }

    console.log(`🤖 Generating FAQs for ${companyName}...`);

    // Generate FAQs using OpenRouter AI
    const faqs = await getGeneratedFAQs(companyName, content, maxFAQs);
    console.log(`✅ Generated ${faqs.length} FAQs for ${companyName}`);

    // Optionally save to database with embeddings
    if (saveToDatabase && companyId) {
      console.log(`📝 Saving FAQs to database with embeddings...`);
      
      const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
      
      // Generate embeddings for each FAQ
      const faqData = await Promise.all(faqs.map(async (faq) => {
        try {
          const { questionEmbedding, answerEmbedding } = await getEmbedding(faq.question, faq.answer);
          return {
            company_id: companyId,
            company_name: companyName,
            question: faq.question,
            answer: faq.answer,
            question_embedding: questionEmbedding,
            answer_embedding: answerEmbedding,
            source: faq.source || 'ai_generated',
            confidence: faq.confidence || 0.9
          };
        } catch (embeddingError) {
          console.warn(`⚠️ Failed to generate embeddings for FAQ: ${faq.question.substring(0, 50)}...`, embeddingError.message);
          // Return FAQ without embeddings if embedding generation fails
          return {
            company_id: companyId,
            company_name: companyName,
            question: faq.question,
            answer: faq.answer,
            source: faq.source || 'ai_generated',
            confidence: faq.confidence || 0.9
          };
        }
      }));

      // Save to database
      const response = await axios.post(
        `${supabaseUrl}/rest/v1/faqs`,
        faqData,
        {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          }
        }
      );

      console.log(`✅ Saved ${faqData.length} FAQs with embeddings to database`);
    }

    res.json({
      success: true,
      faqs: faqs.slice(0, maxFAQs),
      saved: saveToDatabase && companyId
    });
  } catch (error) {
    console.error('AI FAQ generation error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate FAQs' });
  }
});

// Get embeddings from Jina
app.post('/api/embeddings', async (req, res) => {
  try {
    console.log('Getting embeddings from:', req.headers.origin);
    const { question, answer } = req.body;
    
    if (!question && !answer) {
      return res.status(400).json({ error: 'Question or answer is required' });
    }

    // Get embeddings from Jina
    const { questionEmbedding, answerEmbedding } = await getEmbedding(question, answer);

    res.json({
      questionEmbedding: questionEmbedding,
      answerEmbedding: answerEmbedding
    });
  } catch (error) {
    console.error('Embedding error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get embeddings' });
  }
});


// Analytics endpoints
app.post('/api/analytics/widget-view', async (req, res) => {
  try {
    const { companyName, pageUrl, userAgent, timestamp } = req.body;
        
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Get company ID
    const companyResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?select=id&name=eq.${encodeURIComponent(companyName)}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('🔍 Company response:', companyResponse.data);

    if (!companyResponse.data || companyResponse.data.length === 0) {
      console.log('❌ Company not found:', companyName);
      return res.status(404).json({ error: 'Company not found' });
    }

    const companyId = companyResponse.data[0].id;
    console.log('✅ Found company ID:', companyId);

    // Record widget view
    const viewData = {
      company_id: companyId,
      event_type: 'widget_view',
      page_url: pageUrl,
      user_agent: userAgent,
      timestamp: timestamp || new Date().toISOString(),
      session_id: req.body.sessionId || null
    };

    // console.log('📝 Inserting view data:', viewData);

    const insertResponse = await axios.post(
      `${supabaseUrl}/rest/v1/widget_analytics`,
      viewData,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ View data inserted successfully:', insertResponse.data);

    res.json({ success: true });
  } catch (error) {
    console.error('❌ Widget view tracking error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to track widget view' });
  }
});

// Enhanced widget interaction tracking with new event types
app.post('/api/analytics/widget-interaction', async (req, res) => {
  try {
    const { 
      companyName, 
      eventType, 
      message, 
      response, 
      timestamp, 
      sessionId,
      rating,
      feedbackText,
      language,
      themeMode,
      faqId,
      aiFallbackReason,
      responseSource,
      confidenceScore
    } = req.body;
    
    console.log('📊 Widget interaction received:', { companyName, eventType });
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Get company ID
    const companyResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?select=id&name=eq.${encodeURIComponent(companyName)}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!companyResponse.data || companyResponse.data.length === 0) {
      console.error('❌ Company not found:', companyName);
      return res.status(404).json({ error: 'Company not found' });
    }

    const companyId = companyResponse.data[0].id;
    console.log('✅ Company ID found:', companyId);

    // Record widget interaction with enhanced data
    const interactionData = {
      company_name: companyName,
      company_id: companyId,
      event_type: eventType,
      message: message || null,
      response: response || null,
      timestamp: timestamp || new Date().toISOString(),
      session_id: sessionId || null,
      rating: rating || null,
      feedback_text: feedbackText || null,
      language: language || null,
      theme_mode: themeMode || null,
      faq_id: faqId || null,
      ai_fallback_reason: aiFallbackReason || null,
      response_source: responseSource || null,
      confidence_score: confidenceScore || null
    };

    // console.log('📝 Inserting widget analytics:', interactionData);

    await axios.post(
      `${supabaseUrl}/rest/v1/widget_analytics`,
      interactionData,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ Widget analytics inserted successfully');

    // If this is a rating event, also record in user_ratings table
    // if (eventType === 'rating_given' && rating) {
    //   console.log('⭐ Processing rating event:', { rating, feedbackText, responseSource });
      
    //   try {
    //     const ratingData = {
    //       company_id: companyId,
    //       session_id: sessionId,
    //       message_id: `${sessionId}_${Date.now()}`, // Generate unique message ID
    //       rating: rating,
    //       feedback_text: feedbackText,
    //       response_text: response,
    //       response_source: responseSource,
    //       faq_id: faqId,
    //       confidence_score: confidenceScore
    //     };

    //     console.log('📝 Inserting user rating:', ratingData);

    //     await axios.post(
    //       `${supabaseUrl}/rest/v1/user_ratings`,
    //       ratingData,
    //       {
    //         headers: {
    //           'apikey': supabaseKey,
    //           'Authorization': `Bearer ${supabaseKey}`,
    //           'Content-Type': 'application/json'
    //         }
    //       }
    //     );

      //   console.log('✅ User rating inserted successfully');
      // } catch (ratingError) {
      //   console.error('❌ Failed to insert user rating:', ratingError.response?.data || ratingError.message);
      //   // Don't fail the entire request if rating insertion fails
      //   // Just log the error and continue
      // }
    // }

    res.json({ success: true });
  } catch (error) {
    console.error('❌ Widget interaction tracking error:', error.response?.data || error.message);
    console.error('❌ Error stack:', error.stack);
    res.status(500).json({ error: 'Failed to track widget interaction' });
  }
});




// old widget interaction tracking
// app.post('/api/analytics/widget-interaction', async (req, res) => {
//   try {
//     const { companyName, eventType, message, response, timestamp, sessionId } = req.body;
    
//     const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
//     const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
//     if (!supabaseUrl || !supabaseKey) {
//       return res.status(500).json({ error: 'Supabase configuration missing' });
//     }

//     // Get company ID
//     const companyResponse = await axios.get(
//       `${supabaseUrl}/rest/v1/companies?select=id&name=eq.${encodeURIComponent(companyName)}`,
//       {
//         headers: {
//           'apikey': supabaseKey,
//           'Authorization': `Bearer ${supabaseKey}`,
//           'Content-Type': 'application/json'
//         }
//       }
//     );

//     if (!companyResponse.data || companyResponse.data.length === 0) {
//       return res.status(404).json({ error: 'Company not found' });
//     }

//     const companyId = companyResponse.data[0].id;

//     // Record widget interaction
//     const interactionData = {
//       company_id: companyId,
//       event_type: eventType, // 'message_sent', 'message_received', 'widget_opened', 'widget_closed', 'faq_matched', 'ai_fallback', 'rating_given', 'language_changed', 'theme_changed'
//       message: message || null,
//       response: response || null,
//       timestamp: timestamp || new Date().toISOString(),
//       session_id: sessionId || null
//     };

//     await axios.post(
//       `${supabaseUrl}/rest/v1/widget_analytics`,
//       interactionData,
//       {
//         headers: {
//           'apikey': supabaseKey,
//           'Authorization': `Bearer ${supabaseKey}`,
//           'Content-Type': 'application/json'
//         }
//       }
//     );

//     res.json({ success: true });
//   } catch (error) {
//     console.error('Widget interaction tracking error:', error.response?.data || error.message);
//     res.status(500).json({ error: 'Failed to track widget interaction' });
//   }
// });

app.get('/api/analytics/company/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    console.log('🔍 Company ID:', companyId);
    const { period = '7d' } = req.query; // 7d, 30d, 90d
    
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Calculate date range
    const now = new Date();
    const periodDays = period === '30d' ? 30 : period === '90d' ? 90 : 7;
    const startDate = new Date(now.getTime() - (periodDays * 24 * 60 * 60 * 1000));
    
    // Format for PostgreSQL timestamp comparison
    const startDateStr = startDate.toISOString().replace('T', ' ').replace('Z', '+00');
    const nowStr = now.toISOString().replace('T', ' ').replace('Z', '+00');

    // Use the new analytics summary function
    const summaryResponse = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/get_analytics_summary`,
      {
        p_company_id: companyId,
        p_start_date: startDateStr,
        p_end_date: nowStr
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const summary = summaryResponse.data?.[0] || {};

    // Get daily stats for chart
    const analyticsResponse = await axios.get(
      `${supabaseUrl}/rest/v1/widget_analytics?company_id=eq.${companyId}&timestamp=gte.${encodeURIComponent(startDateStr)}&order=timestamp.desc`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const analytics = analyticsResponse.data || [];

    // Process analytics data with enhanced metrics
    const stats = {
      totalViews: summary.total_views || 0,
      totalInteractions: summary.total_interactions || 0,
      totalMessages: summary.total_messages || 0,
      totalResponses: summary.total_responses || 0,
      uniqueSessions: summary.unique_sessions || 0,
      totalRatings: summary.total_ratings || 0,
      positiveRatings: summary.positive_ratings || 0,
      negativeRatings: summary.negative_ratings || 0,
      averageRating: summary.avg_rating || 0,
      faqMatchRate: summary.faq_match_rate || 0,
      aiFallbackRate: summary.ai_fallback_rate || 0,
      languageChanges: summary.language_changes || 0,
      themeChanges: summary.theme_changes || 0,
      dailyStats: getDailyStats(analytics, periodDays),
      lastActivity: summary.last_activity || null
    };

    // console.log('Analytics data:', stats);
    res.json(stats);
  } catch (error) {
    console.error('❌ Analytics fetch error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});



// New endpoint for FAQ performance analytics
app.get('/api/analytics/faq-performance/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    const { period = '7d' } = req.query;
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Calculate date range
    const now = new Date();
    const periodDays = period === '30d' ? 30 : period === '90d' ? 90 : 7;
    const startDate = new Date(now.getTime() - (periodDays * 24 * 60 * 60 * 1000));
    const startDateStr = startDate.toISOString().replace('T', ' ').replace('Z', '+00');

    // Get FAQ performance data
    const analyticsResponse = await axios.get(
      `${supabaseUrl}/rest/v1/widget_analytics?company_id=eq.${companyId}&event_type=in.(faq_matched,ai_fallback)&timestamp=gte.${encodeURIComponent(startDateStr)}&order=timestamp.desc`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const analytics = analyticsResponse.data || [];

    // Get FAQ details for performance analysis
    const faqsResponse = await axios.get(
      `${supabaseUrl}/rest/v1/faqs?company_id=eq.${companyId}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const faqs = faqsResponse.data || [];

    // Process FAQ performance data
    const faqStats = {
      totalQueries: analytics.length,
      faqMatches: analytics.filter(a => a.event_type === 'faq_matched').length,
      aiFallbacks: analytics.filter(a => a.event_type === 'ai_fallback').length,
      matchRate: analytics.length > 0 ? (analytics.filter(a => a.event_type === 'faq_matched').length / analytics.length) * 100 : 0,
      averageConfidence: analytics.filter(a => a.confidence_score).reduce((sum, a) => sum + a.confidence_score, 0) / analytics.filter(a => a.confidence_score).length || 0,
      topFallbackReasons: analytics
        .filter(a => a.event_type === 'ai_fallback' && a.ai_fallback_reason)
        .reduce((acc, a) => {
          acc[a.ai_fallback_reason] = (acc[a.ai_fallback_reason] || 0) + 1;
          return acc;
        }, {}),
      faqUsage: faqs.map(faq => ({
        id: faq.id,
        question: faq.question,
        usageCount: analytics.filter(a => a.faq_id === faq.id).length,
        averageRating: 0 // TODO: Calculate from ratings
      }))
    };

    res.json(faqStats);
  } catch (error) {
    console.error('❌ FAQ performance error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch FAQ performance' });
  }
});

// Batch analytics events endpoint
app.post('/api/analytics/batch-events', async (req, res) => {
  try {
    const { events } = req.body;
    
    if (!events || !Array.isArray(events)) {
      return res.status(400).json({ error: 'Events array is required' });
    }

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Process each event
    const results = [];
    for (const event of events) {
      try {
        const { companyName, eventType, message, response, timestamp, sessionId, ...additionalData } = event.data;
        
        // Get company ID
        const companyResponse = await axios.get(
          `${supabaseUrl}/rest/v1/companies?select=id&name=eq.${encodeURIComponent(companyName)}`,
          {
            headers: {
              'apikey': supabaseKey,
              'Authorization': `Bearer ${supabaseKey}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (companyResponse.data && companyResponse.data.length > 0) {
          const companyId = companyResponse.data[0].id;

          // Record widget interaction
          const interactionData = {
            company_id: companyId,
            event_type: eventType,
            message: message || null,
            response: response || null,
            timestamp: timestamp || new Date().toISOString(),
            session_id: sessionId || null,
            ...additionalData
          };

          await axios.post(
            `${supabaseUrl}/rest/v1/widget_analytics`,
            interactionData,
            {
              headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json'
              }
            }
          );

          results.push({ success: true, event: eventType });
        } else {
          results.push({ success: false, error: 'Company not found', event: eventType });
        }
      } catch (error) {
        console.error('Batch event processing error:', error);
        results.push({ success: false, error: error.message, event: event.eventType });
      }
    }

    res.json({ 
      success: true, 
      processed: results.length,
      results 
    });
  } catch (error) {
    console.error('Batch events error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to process batch events' });
  }
});


// FAQ import endpoint
app.post('/api/companies/:companyId/faqs', async (req, res) => {
  try {
    const { companyId } = req.params;
    const { faqs } = req.body;

    console.log('📝 Importing FAQs for company:', companyId);
    console.log('📝 FAQs to import:', faqs.length);

    if (!faqs || !Array.isArray(faqs)) {
      return res.status(400).json({ error: 'FAQs must be an array' });
    }

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Prepare FAQ data for insertion
    const faqData = await Promise.all(faqs.map(async (faq) => {
      const { questionEmbedding, answerEmbedding } = await getEmbedding(faq.question, faq.answer);
      return {
      company_id: companyId,
      question: faq.question,
      question_embedding: questionEmbedding,
      answer_embedding: answerEmbedding,
      answer: faq.answer,
    };
  }));


    // Insert FAQs into database
    const response = await axios.post(
      `${supabaseUrl}/rest/v1/faqs`,
      faqData,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        }
      }
    );

    console.log('✅ FAQs imported successfully:', faqData.length, 'items');

    res.json({ 
      success: true, 
      message: `Successfully imported ${faqData.length} FAQs`,
      count: faqData.length 
    });

  } catch (error) {
    console.error('❌ Error importing FAQs:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to import FAQs',
      details: error.response?.data || error.message 
    });
  }
});

// Get FAQs for a company
app.get('/api/companies/:companyId/faqs', async (req, res) => {
  try {
    const { companyId } = req.params;

    console.log('📝 Fetching FAQs for company:', companyId);

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Get FAQs from database
    const response = await axios.get(
      `${supabaseUrl}/rest/v1/faqs?company_id=eq.${companyId}&order=created_at.desc`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ FAQs fetched successfully:', response.data?.length || 0, 'items');

    res.json(response.data || []);

  } catch (error) {
    console.error('❌ Error fetching FAQs:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch FAQs',
      details: error.response?.data || error.message 
    });
  }
});

// Get detailed analytics for a company with time filtering
app.get('/api/companies/:id/analytics', async (req, res) => {
  try {
    const { id } = req.params;
    const { period = '7d' } = req.query; // 7d, 30d, 90d, all
    
    console.log('📊 Getting analytics for company:', id, 'period:', period);
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    let analyticsUrl = `${supabaseUrl}/rest/v1/widget_analytics?company_id=eq.${id}&order=timestamp.desc`;
    
    // Add time filter if not requesting all data
    if (period !== 'all') {
      const periodDays = period === '30d' ? 30 : period === '90d' ? 90 : 7;
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - periodDays);
      const startDateStr = startDate.toISOString().replace('T', ' ').replace('Z', '+00');
      
      analyticsUrl += `&timestamp=gte.${encodeURIComponent(startDateStr)}`;
    }

    // Get analytics using the company_id and timestamp indexes for optimal performance
    const analyticsResponse = await axios.get(analyticsUrl, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      }
    });

    const analytics = analyticsResponse.data || [];

    // Process analytics data
    const stats = {
      totalViews: analytics.filter(a => a.event_type === 'widget_view').length,
      totalInteractions: analytics.filter(a => a.event_type !== 'widget_view').length,
      totalMessages: analytics.filter(a => a.event_type === 'message_sent').length,
      totalResponses: analytics.filter(a => a.event_type === 'message_received').length,
      uniqueSessions: [...new Set(analytics.filter(a => a.session_id).map(a => a.session_id))].length,
      dailyStats: getDailyStats(analytics, period === 'all' ? 30 : parseInt(period)),
      period: period,
      totalEvents: analytics.length
    };

    res.json(stats);
  } catch (error) {
    console.error('❌ Analytics fetch error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});

// Helper function to get optimized analytics using indexes
async function getCompanyAnalytics(companyId, period = 'all') {
  const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  let analyticsUrl = `${supabaseUrl}/rest/v1/widget_analytics?company_id=eq.${companyId}&order=timestamp.desc`;
  
  // Use timestamp index for time-based filtering
  if (period !== 'all') {
    const periodDays = period === '30d' ? 30 : period === '90d' ? 90 : 7;
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - periodDays);
    const startDateStr = startDate.toISOString().replace('T', ' ').replace('Z', '+00');
    
    analyticsUrl += `&timestamp=gte.${encodeURIComponent(startDateStr)}`;
  }

  const response = await axios.get(analyticsUrl, {
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data || [];
}



// Widget key validation middleware
app.get('/api/validate-key', async (req, res) => {
  const { key, company } = req.query;
  console.log('🔑 Validating key:', key, 'for company:', company);

  // Demo key validation
  if (key === 'demo-2025-healthplus') {
    return res.json({
      valid: true,
      company: 'HealthPlus Medical',
      plan: 'demo',
      features: ['chat', 'faq', 'analytics'],
      demo: true
    });
  }

  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ valid: false, error: 'Server configuration missing' });
    }

    // Get company with widget key
    const companyResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?name=eq.${encodeURIComponent(company)}&select=id,name,widget_key_hash,widget_key_plan,status`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!companyResponse.data || companyResponse.data.length === 0) {
      return res.json({ valid: false, error: 'Company not found' });
    }

    const companyData = companyResponse.data[0];
    console.log('🔑 Company data:', companyData);

    // Check if company is active
    if (companyData.status !== 'active') {
      return res.json({ valid: false, error: 'Company account is not active' });
    }

    // Check if widget key exists
    if (!companyData.widget_key_hash) {
      return res.json({ valid: false, error: 'No widget key found for company' });
    }

    // Validate the key
    const isValid = await validateWidgetKey(key, companyData.widget_key_hash);
    
    if (isValid) {
      return res.json({
        valid: true,
        company: companyData.name,
        plan: companyData.widget_key_plan,
        features: ['chat', 'faq', 'analytics']
      });
    } else {
      return res.json({ valid: false, error: 'Invalid key' });
    }
  } catch (error) {
    console.error('❌ Key validation error:', error);
    res.status(500).json({ valid: false, error: 'Validation failed' });
  }
});

// Demo key validation (always returns true for demo purposes)
// app.get('/api/validate-demo-key', async (req, res) => {
//   const { key } = req.query;
  
//   if (key === 'demo-2025-healthplus') {
//     res.json({ 
//       valid: true, 
//       company: 'HealthPlus Medical',
//       plan: 'demo',
//       features: ['chat', 'faq', 'analytics'],
//       demo: true
//     });
//   } else {
//     res.json({ valid: false, error: 'Invalid demo key' });
//   }
// });

// Stripe Payment Endpoints

// Create checkout session
app.post('/api/payments/create-checkout-session', async (req, res) => {
  try {
    // console.log('💳 PRICING_PLANS:', PRICING_PLANS);
    const { companyName, customerEmail, planId, theme, location, industry, website, description } = req.body;
    
    console.log('💳 Creating checkout session for:', { 
      companyName, 
      planId, 
      customerEmail, 
      location, 
      industry, 
      website, 
      description 
    });
    
    if (!planId || !customerEmail || !companyName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const plan = PRICING_PLANS[planId];
    if (!plan) {
      return res.status(400).json({ error: 'Invalid plan' });
    }

    if (planId === 'free') {
      return res.status(400).json({ error: 'Free plan does not require payment' });
    }

    // Create or get Stripe customer
    let customer;
    const existingCustomers = await stripe.customers.list({
      email: customerEmail,
      limit: 1
    });

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        email: customerEmail,
        name: companyName,
        metadata: {
          company_name: companyName,
          plan_id: planId,
          location: location || '',
          industry: industry || '',
          website: website || '',
          description: description || ''
        }
      });
    }

    // Create checkout session
    if (!plan.stripe_price_id) {
      console.error('❌ Missing price ID for plan:', planId);
      console.error('🔧 Available plans:', Object.keys(PRICING_PLANS));
      console.error('🔧 Environment variables:');
      console.error('  STRIPE_STARTER_PRICE_ID:', process.env.STRIPE_STARTER_PRICE_ID);
      console.error('  STRIPE_PRO_PRICE_ID:', process.env.STRIPE_PRO_PRICE_ID);
      return res.status(500).json({ 
        error: 'Price configuration missing. Please contact support.' 
      });
    }

    const frontendUrl = process.env.FRONTEND_URL || 
      (process.env.NODE_ENV === 'production' ? 'https://qurius.app' : 'http://localhost:5173');


    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      line_items: [
        {
          price: plan.stripe_price_id,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${frontendUrl}/admin?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/onboarding?payment=canceled`,
      metadata: {
        company_name: companyName,
        plan_id: planId,
        customer_email: customerEmail,
        location: location || '',
        industry: industry || '',
        website: website || '',
        description: description || ''
      }
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('❌ Checkout session error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Create customer portal session
app.post('/api/payments/create-portal-session', async (req, res) => {
  try {
    const { companyId } = req.body;
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Get company's Stripe customer ID
    const companyResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?id=eq.${companyId}&select=stripe_customer_id`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!companyResponse.data || !companyResponse.data[0]?.stripe_customer_id) {
      return res.status(404).json({ error: 'No subscription found' });
    }

    const customerId = companyResponse.data[0].stripe_customer_id;

    // Create portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.FRONTEND_URL}/admin`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('❌ Portal session error:', error);
    res.status(500).json({ error: 'Failed to create portal session' });
  }
});

// Get subscription status
app.get('/api/payments/subscription-status/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Get company subscription info
    const companyResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?id=eq.${companyId}&select=plan,stripe_subscription_id,subscription_status,subscription_end_date`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!companyResponse.data || !companyResponse.data[0]) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const company = companyResponse.data[0];
    
    // If there's a Stripe subscription, get its details
    let subscription = null;
    if (company.stripe_subscription_id) {
      try {
        subscription = await stripe.subscriptions.retrieve(company.stripe_subscription_id);
      } catch (error) {
        console.error('Error retrieving subscription:', error);
      }
    }

    res.json({
      plan: company.plan,
      subscription_status: company.subscription_status,
      subscription_end_date: company.subscription_end_date,
      stripe_subscription: subscription
    });
  } catch (error) {
    console.error('❌ Subscription status error:', error);
    res.status(500).json({ error: 'Failed to get subscription status' });
  }
});

// ========================================
// AUTHENTICATION ENDPOINTS
// ========================================

// Check super admin credentials
app.post('/api/auth/super-admin', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check against environment variables
    const superAdminEmail = process.env.SUPER_ADMIN_EMAIL;
    const superAdminPassword = process.env.SUPER_ADMIN_PASSWORD;
    
    if (!superAdminEmail || !superAdminPassword) {
      console.error('❌ Super admin credentials not configured in environment variables');
      return res.status(500).json({ 
        error: 'Super admin authentication not configured' 
      });
    }
    
    // Verify credentials
    if (email === superAdminEmail && password === superAdminPassword) {
      console.log('✅ Super admin authentication successful:', email);
      return res.status(200).json({ 
        isSuperAdmin: true,
        user: {
          id: 'super-admin-id',
          email: email,
          role: 'super_admin',
          user_metadata: { role: 'super_admin' },
          app_metadata: { role: 'super_admin' }
        }
      });
    } else {
      console.log('❌ Super admin authentication failed for:', email);
      return res.status(200).json({
        isSuperAdmin: false,
        message: 'Not a super admin'
      });
    }
  } catch (error) {
    console.error('❌ Super admin authentication error:', error);
    return res.status(500).json({ 
      error: 'Authentication server error' 
    });
  }
});

// ========================================
// TEST ENDPOINTS (Development Only)
// ========================================

// Test webhook simulation endpoint
app.post('/api/test/simulate-webhook', async (req, res) => {
  try {
    const { companyName, customerEmail, planId, location, industry, website, description } = req.body;
    
    console.log('🧪 Simulating webhook for:', { companyName, customerEmail, planId, location, industry, website, description });
    
    // Simulate the webhook event data
    const mockSession = {
      metadata: {
        company_name: companyName,
        plan_id: planId,
        customer_email: customerEmail,
        location: location || 'Test Location',
        industry: industry || 'Technology',
        website: website || 'https://example.com',
        description: description || 'Test company'
      },
      customer: 'cus_test_' + Date.now(),
      subscription: 'sub_test_' + Date.now()
    };

    // Create company with subscription info
    const companyData = {
      name: companyName,
      email: customerEmail,
      contact_email: customerEmail,
      admin_email: customerEmail,
              location: location || 'Test Location',
        industry: industry || 'Technology',
        website: website || 'https://example.com',
        description: description || 'Test company',
      plan: planId,
      stripe_customer_id: mockSession.customer,
      stripe_subscription_id: mockSession.subscription,
      subscription_status: 'active',
      status: 'active'
    };

    try {
      // Create auth user first
      console.log('💳 Creating auth user for:', customerEmail);
      const userId = await createAuthUser(customerEmail);

      if (userId) {
        console.log('💳 Creating company for:', companyData);
        const { companyId, companyName, email: companyEmail, widgetKey } = await createCompany(companyData, userId);
        console.log('✅ Company created successfully:', companyId);

        // Update auth user with company id
        await updateAuthUser(companyId, userId);
        console.log('✅ Auth user updated successfully:', userId);

        // Send welcome email
        console.log('💳 Sending welcome email for:', companyEmail);
        await sendWelcomeEmail(companyEmail, companyName, planId, widgetKey);
        console.log('✅ Welcome email sent successfully with widget key');

        res.json({ 
          success: true, 
          message: 'Test webhook processed successfully',
          companyId,
          widgetKey
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: 'Failed to create auth user' 
        });
      }
    } catch (error) {
      console.error('❌ Error in test webhook:', error.response?.data || error.message);
      res.status(500).json({ 
        success: false, 
        error: 'Failed to process test webhook',
        details: error.response?.data || error.message 
      });
    }
  } catch (error) {
    console.error('❌ Test webhook error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Test webhook failed' 
    });
  }
});

// Create test company (bypasses Stripe payment)
app.post('/api/test/create-company', async (req, res) => {
  try {
    const { 
      companyName, 
      email: companyEmail, 
      plan, 
      industry, 
      website, 
      description, 
      theme 
    } = req.body;
    
    console.log('🧪 Creating test company:', companyName);
    

    // Create company data
    const companyData = {
      name: companyName,
      email: companyEmail,
      industry: industry,
      website: website,
      description: description,
      theme: theme,
      plan: plan,
      status: 'active',
      // enrollment_date: formatReadableDateTime(new Date())
    };

    // Create auth user first to avoid duplicate users
    const userId = await createAuthUser(companyEmail)

    //if success, create company
    if (userId) {
      const { companyId } = await createCompany(companyData, userId)
      console.log('✅ Test company created successfully:', companyId);

      // Update auth user with company id
      await updateAuthUser(companyId, userId)

      // Send Welcome Email
      await sendWelcomeEmail(companyEmail, companyName, plan)
      console.log('✅ Welcome email sent successfully');

      res.json({
        success: true,
        company: { ...companyData, id: companyId }
      });
    } else {
      res.status(500).json({ 
        success: false,
        error: 'Failed to create auth user' 
      });
    }
  } catch (error) {
    console.error('❌ Test company creation error:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false,
      error: 'Failed to create test company' 
    });
  }
});

// Regenerate widget key for existing company
app.post('/api/companies/:companyId/regenerate-widget-key', async (req, res) => {
  try {
    const { companyId } = req.params;
    const { planType = 'free' } = req.body;
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Get company details
    const companyResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?id=eq.${companyId}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!companyResponse.data || companyResponse.data.length === 0) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const company = companyResponse.data[0];
    
    // Generate new widget key
    const { newKey, hashedKey } = await generateWidgetKeyForCompany();
    
    // Update company with new widget key
    await axios.patch(
      `${supabaseUrl}/rest/v1/companies?id=eq.${companyId}`,
      {
        widget_key_hash: hashedKey,
        widget_key_plan: planType
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    res.json({
      success: true,
      widgetKey: newKey,
      company: company.name,
      plan: planType
    });
  } catch (error) {
    console.error('❌ Widget key regeneration error:', error);
    res.status(500).json({ error: 'Failed to regenerate widget key' });
  }
});

// Get message usage statistics for a company
app.get('/api/companies/:companyId/message-usage', async (req, res) => {
  try {
    const { companyId } = req.params;
    const { startDate, endDate } = req.query;
    
    console.log('📊 Getting message usage for company:', companyId);
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Use the new get_message_usage_stats RPC function
    const statsResponse = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/get_message_usage_stats`,
      {
        p_company_id: companyId,
        p_start_date: startDate || null,
        p_end_date: endDate || null
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!statsResponse.data || statsResponse.data.length === 0) {
      return res.json({
        totalMessages: 0,
        faqMessages: 0,
        aiMessages: 0,
        limitReachedCount: 0,
        avgConfidence: 0,
        mostCommonFallback: null,
        usageByDay: []
      });
    }

    const stats = statsResponse.data[0];
    
    res.json({
      totalMessages: stats.total_messages || 0,
      faqMessages: stats.faq_messages || 0,
      aiMessages: stats.ai_messages || 0,
      limitReachedCount: stats.limit_reached_count || 0,
      avgConfidence: stats.avg_confidence || 0,
      mostCommonFallback: stats.most_common_fallback,
      usageByDay: stats.usage_by_day || []
    });
  } catch (error) {
    console.error('❌ Message usage stats error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch message usage statistics' });
  }
});

// Get current message usage for a company
app.get('/api/companies/:companyId/current-usage', async (req, res) => {
  try {
    const { companyId } = req.params;
    
    console.log('📊 Getting current usage for company:', companyId);
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Use the new get_company_message_usage RPC function
    const usageResponse = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/get_company_message_usage`,
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

    if (!usageResponse.data || usageResponse.data.length === 0) {
      return res.status(404).json({ error: 'Company not found or no usage data available' });
    }

    const usage = usageResponse.data[0];
    
    res.json({
      companyName: usage.company_name,
      plan: usage.plan,
      messagesUsed: usage.messages_used,
      messagesLimit: usage.messages_limit,
      messagesRemaining: usage.messages_remaining,
      canSend: usage.can_send,
      lastMessageDate: usage.last_message_date,
      contactEmail: usage.contact_email
    });
  } catch (error) {
    console.error('❌ Current usage error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch current usage' });
  }
});

// ========================================
// START SERVER
// ========================================

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: ${process.env.BACKEND_URL}/api/health`);
  console.log(`🌐 Allowed origins: ${allowedOrigins.join(', ')}`);
}); 