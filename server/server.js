// server/index.js
import dotenv from 'dotenv';
// Load environment variables first
dotenv.config({ path: './.env' });

import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import axios from 'axios';
import crypto from 'crypto';
import Stripe from 'stripe';
import { parseTheme, getDailyStats, getEmbedding, getAIResponse, generateFAQs, sendWelcomeEmail, sendAdminCompanyNotification, createCompany, createAuthUser, updateAuthUser, generateWidgetKeyForCompany, validateWidgetKey, checkAndUpdateMessageLimit, recordMessageUsage, trackFAQMatch, trackAIFallback, searchWithRAG, trackContentMatch, trackTrueAIFallback, ValidationError, validateAndNormalizeCompanyInput, checkAuthUserExists } from './utils.js';
import { formatReadableDateTime } from './helper.js';
import { PRICING_PLANS } from './constants.js';
import crawlerRoutes from './crawler/crawler-api.js';
import automationRoutes from './crawler/automation-api.js';
import scheduler from './services/schedulerService.js';
import { storeLead, shouldRequestLeadInfo, checkExistingLead, generateLeadCollectionPrompt, extractContactInfoFromResponse } from './services/leadService.js';

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

        let baseCompanyData;
        try {
          // Validate and normalize core company fields from Stripe metadata
          baseCompanyData = validateAndNormalizeCompanyInput({
            name: companyName,
            email: customerEmail,
            website,
            description,
            location,
            industry,
            plan: planId
          });
        } catch (error) {
          if (error instanceof ValidationError) {
            console.error('❌ Invalid company data in checkout.session.completed:', error.message);
            break;
          }
          throw error;
        }

        // Create company with subscription info for starter and pro users
        const companyData = {
          ...baseCompanyData,
          email: baseCompanyData.email, // ensure email field exists
          contact_email: baseCompanyData.email,
          admin_email: baseCompanyData.email,
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
            await updateAuthUser(companyId, userId, companyName);
            console.log('✅ Auth user updated successfully:', userId);

            // Send welcome email with password reset and widget key
            console.log('💳 Sending welcome email for:', companyEmail);
            await sendWelcomeEmail(companyEmail, companyName, planId );
            console.log('✅ Welcome email sent successfully with widget key');

            // Send admin notification email
            console.log('📧 Sending admin notification email...');
            await sendAdminCompanyNotification({
              name: companyName,
              email: companyEmail,
              plan: planId,
              location: location || '',
              industry: industry || '',
              website: website || '',
              description: description || ''
            });
            console.log('✅ Admin notification email sent');
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

// Automation routes
app.use('/api/automation', automationRoutes);

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
      console.warn('⚠️ Google Translate API key not configured in environment variables');
      return res.status(404).json({ 
        error: 'Google Translate API key not configured',
        message: 'Translation features will use fallback translations'
      });
    }
    
    // Validate the API key format (basic check)
    if (!apiKey.startsWith('AIza')) {
      console.warn('⚠️ Google Translate API key format appears invalid');
      return res.status(400).json({ 
        error: 'Invalid Google Translate API key format',
        message: 'Translation features will use fallback translations'
      });
    }
    
    res.json({ apiKey });
  } catch (error) {
    console.error('API key error:', error);
    res.status(500).json({ 
      error: 'Failed to get API key',
      message: 'Translation features will use fallback translations'
    });
  }
});

// Get company theme
app.get('/api/companies/:companyName/:companyId/theme', async (req, res) => {
  try {
    const { companyName, companyId } = req.params;
    
    // Make API call to Supabase to get company theme
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    console.log('Getting company theme for:', companyName, companyId);
    
    const response = await axios.get(
      `${supabaseUrl}/rest/v1/companies?select=theme,logo_url&id=eq.${companyId}`,
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

// Get full company data for wix widget (without analytics for performance)
app.get('/api/companies/:id/widget-data', async (req, res) => {
  try {
    const { id } = req.params;
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    console.log('🔍 Getting widget data for company ID:', id);

    // Get company data
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

    if (companyResponse.data && companyResponse.data.length > 0) {
      const companyData = companyResponse.data[0];

      const {widget_key_hash, stripe_customer_id, stripe_subscription_id, subscription_start_date, ...relevantCompanyData} = companyData;
      
      // Return full company data with parsed theme
      res.json({
        success: true,
        company: {
          ...relevantCompanyData,
          theme: parseTheme(companyData.theme)
        }
      });
    } else {
      console.log('❌ Company not found:', id);
      res.status(404).json({ 
        success: false,
        error: 'Company not found' 
      });
    }
  } catch (error) {
    console.error('❌ Widget company data error:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch company data' 
    });
  }
});

// Get Qurius AI company ID (for frontend use)
app.get('/api/demo/company-ids', async (req, res) => {
  try {
    const quriusCompanyId = process.env.QURIUS_AI_COMPANY_ID;

    if (!quriusCompanyId) {
      console.error('❌ Qurius AI company ID not configured in environment variables');
      return res.status(500).json({ 
        error: 'Qurius AI company configuration missing',
        message: 'Qurius AI company configuration missing'
      });
    }

    res.json({
      quriusCompanyId,
    });
  } catch (error) {
    console.error('❌ Error fetching Qurius AI company ID:', error);
    res.status(500).json({ 
      error: 'Failed to fetch Qurius AI company ID',
      message: 'Unable to retrieve Qurius AI company ID'
    });
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

// Validate onboarding data without creating records
app.post('/api/companies/validate-onboarding', async (req, res) => {
  try {
    const rawCompanyData = req.body;
    console.log('Validating onboarding company data (raw):', rawCompanyData);

    const companyData = validateAndNormalizeCompanyInput(rawCompanyData);
    console.log('Validating onboarding company data (normalized):', companyData);

    // Check if auth user already exists for this email
    const emailExists = await checkAuthUserExists(companyData.email);
    if (emailExists) {
      return res.status(400).json({
        success: false,
        error: 'An account with this email already exists. Please log in instead or use a different email.'
      });
    }

    return res.json({
      success: true,
      company: companyData
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error('Onboarding validation error:', error.message);
      return res.status(400).json({
        success: false,
        error: error.message
      });
    }

    console.error('Validate onboarding error:', error.response?.data || error.message);
    return res.status(500).json({
      success: false,
      error: 'Failed to validate company information'
    });
  }
});

// Create company and profile for free users
app.post('/api/companies', async (req, res) => {
  try {
    const rawCompanyData = req.body;
    console.log('Creating company (raw):', rawCompanyData);

    // Validate and normalize core company fields
    const companyData = validateAndNormalizeCompanyInput(rawCompanyData);
    console.log('Creating company (validated):', companyData);
    const { email } = companyData;

    //Create auth user first to avoid duplicate users
    const userId = await createAuthUser(email)
    console.log('Auth user created with ID:', userId);

    if (!userId) {
      throw new Error('Failed to create auth user - no user ID returned');
    }

    let companyId = null;
    //if success, create company
    const result = await createCompany(companyData, userId)
    companyId = result.companyId;
    const { companyName, email: companyEmail, plan } = result;

    // Update auth user with company id
    await updateAuthUser(companyId, userId, companyName)

    //Send Welcome Email
    await sendWelcomeEmail(companyEmail, companyName, plan)

    // Send admin notification email
    console.log('📧 Sending admin notification email...');
    await sendAdminCompanyNotification(companyData);
    console.log('✅ Admin notification email sent');

    res.json({
      success: true,
      id: companyId,
      company: { ...companyData, id: companyId }
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error('Create company validation error:', error.message);
      return res.status(400).json({
        success: false,
        error: error.message
      });
    }
    console.error('Create company error:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false,
      error: 'Failed to create company' 
    });
  }
});

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

// Update company's last_active timestamp
app.post('/api/companies/:id/last-active', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Updating company last_active:', id);

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    const updateData = {
      last_active: new Date().toISOString()
    };

    await axios.patch(
      `${supabaseUrl}/rest/v1/companies?id=eq.${id}`,
      updateData,
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
      id,
      last_active: updateData.last_active
    });
  } catch (error) {
    console.error('Update company last_active error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to update last_active'
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

// Search FAQs with enhanced analytics tracking and lead generation
app.post('/api/faqs/search', async (req, res) => {
  try {
    const { question, companyData, messages } = req.body;
    const {id: companyId, name: companyName, website, contact_email } = companyData;
    let sessionId = 'qurius-ai-session';
    
    // Calculate message count for lead generation (excluding welcome message)
    const messageCount = messages ? messages.length - 1 : 0;

    console.log('Question:', question);
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
      // Use RAG search instead of just FAQ search
      const searchResults = await searchWithRAG(question, companyId, 5);
      console.log('RAG search results:', searchResults);
      
      if (searchResults.length > 0) {
        // Check if the best match has high enough confidence
        const bestMatch = searchResults[0];
        console.log('Best match:', bestMatch);
        const confidenceThreshold = 0.78; // Adjust this threshold as needed
        
        if (bestMatch.similarity >= confidenceThreshold) {
          // High confidence match - always use AI for natural responses
          console.log('High confidence match (', bestMatch.similarity, ') - using AI for natural response');
          
          let aiResponse;
          let responseSource = 'ai_with_context';
          let fallbackReason = 'high_confidence';
          let contentMatchType = bestMatch.type; // 'faq' or 'content'
          
          // Check if we should request lead information (do this before AI response)
          const shouldRequestLead = await shouldRequestLeadInfo(companyId, sessionId, messageCount);
          
          if (bestMatch.type === 'faq') {
            // High confidence FAQ match - use AI with FAQ context
            console.log('Using FAQ as context with confidence:', bestMatch.similarity);
            
            aiResponse = await getAIResponse({
              companyName, 
              companyWebsite: website, 
              customerSupportEmail: contact_email, 
              messageHistory: messages,
              retrievedContext: searchResults,
              shouldRequestLead: shouldRequestLead
            });
            
            responseSource = 'ai_with_faq_context';
            fallbackReason = 'high_confidence_faq';
            
            // Increment FAQ popularity since it was used as context
            try {
              await axios.post(
                `${supabaseUrl}/rest/v1/rpc/increment_faq_popularity`,
                { p_faq_id: bestMatch.faq_id },
                {
                  headers: {
                    'apikey': supabaseKey,
                    'Authorization': `Bearer ${supabaseKey}`,
                    'Content-Type': 'application/json'
                  }
                }
              );
              console.log('✅ FAQ popularity incremented for FAQ ID:', bestMatch.faq_id);
            } catch (popularityError) {
              console.warn('⚠️ Failed to increment FAQ popularity (function may not exist):', popularityError.message);
            }
            
            // Track content match (not FAQ match since AI is always used)
            await trackContentMatch(companyId, sessionId, bestMatch.faq_id, bestMatch.similarity, 'faq', 'high_confidence');
            
          } else {
            // High confidence content match - use AI with context
            console.log('Using content chunk with confidence:', bestMatch.similarity);
            aiResponse = await getAIResponse({
              companyName, 
              companyWebsite: website, 
              customerSupportEmail: contact_email, 
              messageHistory: messages,
              retrievedContext: searchResults,
              shouldRequestLead: shouldRequestLead
            });
            
            responseSource = 'ai_with_context';
            fallbackReason = 'high_confidence_content';
            
            // Track content match
            await trackContentMatch(companyId, sessionId, null, bestMatch.similarity, 'content', 'high_confidence');
          }
          
          console.log('AI Response with context:', aiResponse);

          // Record AI usage with context
          await recordMessageUsage(companyId, companyName, responseSource, sessionId, question, aiResponse, bestMatch.faq_id || null, bestMatch.similarity, 'ai', fallbackReason);
          
          res.json([{ 
            question: question, 
            answer: aiResponse, 
            source: responseSource,
            faqId: bestMatch.faq_id || null,
            confidence: bestMatch.similarity,
            contentMatchType: contentMatchType,
            messagesLeft: messageLimitCheck.messagesLeft,
            shouldRequestLead: shouldRequestLead
          }]);
        } else {
          // Low confidence - use RAG with multiple sources
          console.log('Low confidence matches, using RAG with multiple sources');
          
          // Check if we should request lead information (do this before AI response)
          const shouldRequestLead = await shouldRequestLeadInfo(companyId, sessionId, messageCount);
          
          const aiResponse = await getAIResponse({
            companyName, 
            companyWebsite: website, 
            customerSupportEmail: contact_email, 
            messageHistory: messages,
            retrievedContext: searchResults, // Top 5 relevant chunks
            shouldRequestLead: shouldRequestLead
          });
          console.log('AI Response with RAG context:', aiResponse);

          // Record AI usage
          await recordMessageUsage(companyId, companyName, 'ai', sessionId, question, aiResponse, null, bestMatch.similarity, 'ai', 'low_confidence');
          
          // Track content match with low confidence
          await trackContentMatch(companyId, sessionId, null, bestMatch.similarity, 'mixed', 'low_confidence');
          
          res.json([{ 
            question: question, 
            answer: aiResponse, 
            source: 'ai',
            fallbackReason: 'low_confidence',
            confidence: bestMatch.similarity,
            contentMatchType: 'mixed',
            messagesLeft: messageLimitCheck.messagesLeft,
            shouldRequestLead: shouldRequestLead
          }]);
        }
      } else {
        // No results found, fallback to AI
        console.log('No RAG results found, falling back to AI');
        
        // Check if we should request lead information (do this before AI response)
        const shouldRequestLead = await shouldRequestLeadInfo(companyId, sessionId, messageCount);
        
        const aiResponse = await getAIResponse({
          companyName, 
          companyWebsite: website, 
          customerSupportEmail: contact_email, 
          messageHistory: messages,
          shouldRequestLead: shouldRequestLead
        });
        console.log('AI Response:', aiResponse);

        // Record AI usage
        await recordMessageUsage(companyId, companyName, 'ai', sessionId, question, aiResponse, null, null, 'ai', 'no_rag_results');
        
        // Track true AI fallback (no content found)
        await trackTrueAIFallback(companyId, sessionId, 'no_rag_results');
        
        res.json([{ 
          question: question, 
          answer: aiResponse, 
          source: 'ai',
          fallbackReason: 'no_rag_results',
          contentMatchType: 'none',
          messagesLeft: messageLimitCheck.messagesLeft,
          shouldRequestLead: shouldRequestLead
        }]);
      }
    } catch (ragError) {
      console.log('RAG search failed, falling back to AI:', ragError.message);
      
      // Check if we should request lead information (do this before AI response)
      const shouldRequestLead = await shouldRequestLeadInfo(companyId, sessionId, messageCount);
      
      // Fallback to AI when RAG search fails
      const aiResponse = await getAIResponse({
        companyName, 
        companyWebsite: website, 
        customerSupportEmail: contact_email, 
        messageHistory: messages,
        shouldRequestLead: shouldRequestLead
      });
      console.log('AI Response:', aiResponse);
      
      // Record AI usage
      await recordMessageUsage(companyId, companyName, 'ai', sessionId, question, aiResponse, null, null, 'ai', 'rag_error');
      
      // Track true AI fallback (RAG error)
      await trackTrueAIFallback(companyId, sessionId, 'rag_error');
      
      res.json([{ 
        question: question, 
        answer: aiResponse, 
        source: 'ai',
        fallbackReason: 'rag_error',
        contentMatchType: 'none',
        messagesLeft: messageLimitCheck.messagesLeft,
        shouldRequestLead: shouldRequestLead
      }]);
    }
  } catch (error) {
    console.error('❌ FAQ search error:', error.response?.data || error.message);
    console.error('❌ Error stack:', error.stack);
    console.error('❌ Error details:', {
      message: error.message,
      name: error.name,
      code: error.code,
      status: error.response?.status,
      statusText: error.response?.statusText
    });
    res.json([]);
  }
});



// Generate FAQs from content using AI
app.post('/api/ai/generate-faqs', async (req, res) => {
  try {
    const { companyName, content, maxFAQs = 15, companyId, saveToDatabase = false } = req.body;
    
    if (!companyName || !content) {
      return res.status(400).json({ error: 'Missing required fields: companyName, content' });
    }

    console.log(`🤖 Generating FAQs for ${companyName}...`);

    // Generate FAQs using OpenRouter AI
    const faqs = await generateFAQs(companyName, content, maxFAQs);
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

// Test RAG system endpoint for debugging
app.post('/api/rag/test', async (req, res) => {
  try {
    const { question, companyId } = req.body;
    
    if (!question || !companyId) {
      return res.status(400).json({ error: 'Missing required fields: question, companyId' });
    }

    console.log('🧪 Testing RAG system for question:', question);
    console.log('🏢 Company ID:', companyId);

    // Test RAG search
    const searchResults = await searchWithRAG(question, companyId, 5);
    
    // Get company info for context
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    const companyResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?id=eq.${companyId}&select=name,website,contact_email`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const company = companyResponse.data?.[0] || {};

    // Test AI response with context
    let aiResponse = null;
    if (searchResults.length > 0) {
      aiResponse = await getAIResponse({
        companyName: company.name || 'Unknown Company',
        companyWebsite: company.website || '',
        customerSupportEmail: company.contact_email || '',
        messageHistory: [],
        retrievedContext: searchResults.slice(0, 3)
      });
    }

    res.json({
      success: true,
      question,
      companyId,
      searchResults: searchResults.map(result => ({
        type: result.type,
        similarity: result.similarity,
        source: result.source,
        content: result.type === 'faq' ? 
          { question: result.question, answer: result.answer } : 
          { content: result.content.substring(0, 200) + '...' }
      })),
      aiResponse,
      totalResults: searchResults.length,
      topSimilarity: searchResults.length > 0 ? searchResults[0].similarity : 0
    });
  } catch (error) {
    console.error('❌ RAG test error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'RAG test failed',
      details: error.response?.data || error.message 
    });
  }
});

// Get content chunks for a company
app.get('/api/companies/:companyId/content-chunks', async (req, res) => {
  try {
    const { companyId } = req.params;
    
    console.log('📄 Getting content chunks for company:', companyId);
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Get content chunks
    const response = await axios.get(
      `${supabaseUrl}/rest/v1/company_content_chunks?company_id=eq.${companyId}&order=chunk_index.asc`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const chunks = response.data || [];
    
    // Get FAQ count for comparison
    const faqResponse = await axios.get(
      `${supabaseUrl}/rest/v1/faqs?company_id=eq.${companyId}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const faqs = faqResponse.data || [];

    res.json({
      success: true,
      companyId,
      contentChunks: chunks.map(chunk => ({
        id: chunk.id,
        chunk_index: chunk.chunk_index,
        content: chunk.content.substring(0, 300) + '...',
        source: chunk.source,
        has_embedding: !!chunk.embedding,
        created_at: chunk.created_at
      })),
      summary: {
        totalChunks: chunks.length,
        totalFaqs: faqs.length,
        chunksWithEmbeddings: chunks.filter(c => c.embedding).length,
        totalContentLength: chunks.reduce((sum, c) => sum + c.content.length, 0)
      }
    });
  } catch (error) {
    console.error('❌ Content chunks error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch content chunks',
      details: error.response?.data || error.message 
    });
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
    const { companyName, companyId, pageUrl, userAgent, timestamp } = req.body;
    
    // Validate companyId
    if (!companyId || companyId === 'undefined' || companyId === 'null' || companyId === '') {
      console.warn('⚠️ Invalid companyId for widget view tracking:', companyId);
      return res.status(400).json({ error: 'Invalid company ID' });
    }
        
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Get company ID
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

    console.log('🔍 Company response:', companyResponse.data);

    if (!companyResponse.data || companyResponse.data.length === 0) {
      console.log('❌ Company not found:', companyName, 'ID:', companyId);
      return res.status(404).json({ error: 'Company not found' });
    }

    // Record widget view
    const viewData = {
      company_id: companyId,
      company_name: companyName,
      event_type: 'widget_view',
      page_url: pageUrl,
      user_agent: userAgent,
      timestamp: timestamp || new Date().toISOString(),
      session_id: req.body.sessionId || null
    };

    console.log('📝 Inserting view data:', viewData);

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
      companyId,
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
    
    // Validate companyId
    if (!companyId || companyId === 'undefined' || companyId === 'null' || companyId === '') {
      console.warn('⚠️ Invalid companyId for widget interaction tracking:', companyId);
      return res.status(400).json({ error: 'Invalid company ID' });
    }
    
    console.log('📊 Widget interaction received:', { companyName, eventType, companyId });
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Get company ID
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
      console.error('❌ Company not found:', companyName, 'ID:', companyId);
      return res.status(404).json({ error: 'Company not found' });
    }

    // const companyId = companyResponse.data[0].id;
    // console.log('✅ Company ID found:', companyId);

    // Record widget interaction with enhanced data
    const interactionData = {
      company_id: companyId,
      company_name: companyName,
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

    res.json({ success: true });
  } catch (error) {
    console.error('❌ Widget interaction tracking error:', error.response?.data || error.message);
    console.error('❌ Error stack:', error.stack);
    res.status(500).json({ error: 'Failed to track widget interaction' });
  }
});


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
    console.log('Summary:', summary);

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
      contentMatchRate: summary.content_match_rate || 0,
      trueAIFallbackRate: summary.true_ai_fallback_rate || 0,
      avgConfidenceScore: summary.avg_confidence_score || 0,
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

    // Get FAQ performance data using NEW event types
    const analyticsResponse = await axios.get(
      `${supabaseUrl}/rest/v1/widget_analytics?company_id=eq.${companyId}&event_type=in.(content_matched,true_ai_fallback)&timestamp=gte.${encodeURIComponent(startDateStr)}&order=timestamp.desc`,
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

    // Process FAQ performance data with NEW event types
    const faqStats = {
      totalQueries: analytics.length,
      contentMatches: analytics.filter(a => a.event_type === 'content_matched').length,
      trueAIFallbacks: analytics.filter(a => a.event_type === 'true_ai_fallback').length,
      matchRate: analytics.length > 0 ? (analytics.filter(a => a.event_type === 'content_matched').length / analytics.length) * 100 : 0,
      averageConfidence: analytics.filter(a => a.confidence_score).reduce((sum, a) => sum + a.confidence_score, 0) / analytics.filter(a => a.confidence_score).length || 0,
      topFallbackReasons: analytics
        .filter(a => a.event_type === 'true_ai_fallback' && a.ai_fallback_reason)
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
app.post('/api/companies/import-faqs', async (req, res) => {
  try {
    const { companyId, companyName, faqs } = req.body;

    console.log('📝 Importing FAQs for company:', companyId, companyName);
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
        company_name: companyName,
        question: faq.question,
        answer: faq.answer,
        question_embedding: questionEmbedding,
        answer_embedding: answerEmbedding,
        question_hash: crypto.createHash('sha256').update(faq.question.toLowerCase().trim()).digest('hex'),
        source: 'manual'
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

// Get FAQs for a company (Optimized with RPC)
app.get('/api/companies/:companyId/faqs', async (req, res) => {
  try {
    const { companyId } = req.params;
    const { 
      limit = 50, 
      offset = 0, 
      source, 
      orderBy = 'created_at',
      includeSummary = false 
    } = req.query;

    console.log('📝 Fetching FAQs for company:', companyId, 'with filters:', { limit, offset, source, orderBy });

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Get FAQs using optimized RPC function
    const response = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/get_company_faqs`,
      {
        p_company_id: companyId,
        p_limit: parseInt(limit),
        p_offset: parseInt(offset),
        p_source: source || null,
        p_order_by: orderBy
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const faqs = response.data || [];

    // Get total count if requested
    let totalCount = null;
    if (includeSummary === 'true') {
      try {
        const countResponse = await axios.post(
          `${supabaseUrl}/rest/v1/rpc/get_company_faqs_count`,
          {
            p_company_id: companyId,
            p_source: source || null
          },
          {
            headers: {
              'apikey': supabaseKey,
              'Authorization': `Bearer ${supabaseKey}`,
              'Content-Type': 'application/json'
            }
          }
        );
        totalCount = countResponse.data;
      } catch (countError) {
        console.warn('⚠️ Failed to get FAQ count:', countError.message);
      }
    }

    console.log('✅ FAQs fetched successfully:', faqs.length, 'items');

    res.json({
      faqs,
      pagination: {
        limit: parseInt(limit),
        offset: parseInt(offset),
        total: totalCount,
        hasMore: totalCount ? (parseInt(offset) + faqs.length) < totalCount : null
      }
    });

  } catch (error) {
    console.error('❌ Error fetching FAQs:', error.response?.data || error.message);
    console.error('❌ Error details:', {
      code: error.response?.data?.code,
      details: error.response?.data?.details,
      hint: error.response?.data?.hint,
      message: error.response?.data?.message
    });
    
    // If RPC function fails, fallback to direct query
    if (error.response?.data?.code === '42804') {
      console.log('🔄 Falling back to direct query due to RPC function error');
      try {
        const fallbackResponse = await axios.get(
          `${supabaseUrl}/rest/v1/faqs?company_id=eq.${companyId}&order=created_at.desc&limit=${req.query.limit || 50}`,
          {
            headers: {
              'apikey': supabaseKey,
              'Authorization': `Bearer ${supabaseKey}`,
              'Content-Type': 'application/json'
            }
          }
        );
        
        console.log('✅ Fallback query successful:', fallbackResponse.data?.length || 0, 'items');
        res.json({
          faqs: fallbackResponse.data || [],
          pagination: {
            limit: parseInt(req.query.limit || 50),
            offset: parseInt(req.query.offset || 0),
            total: null,
            hasMore: null
          },
          note: 'Using fallback query due to RPC function error'
        });
        return;
      } catch (fallbackError) {
        console.error('❌ Fallback query also failed:', fallbackError.message);
      }
    }
    
    res.status(500).json({ 
      error: 'Failed to fetch FAQs',
      details: error.response?.data || error.message 
    });
  }
});

// Get popular FAQs for quick questions
app.get('/api/companies/:companyId/popular-faqs', async (req, res) => {
  try {
    const { companyId } = req.params;
    const { limit = 5 } = req.query;

    console.log('🔥 Fetching popular FAQs for company:', companyId, 'limit:', limit);

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Call the get_popular_faqs function
    const response = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/get_popular_faqs`,
      {
        p_company_id: companyId,
        p_limit: parseInt(limit)
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    let popularFaqs = response.data || [];

    // If no popular FAQs exist, get random FAQs
    if (popularFaqs.length === 0) {
      console.log('📝 No popular FAQs found, getting random FAQs');
      try {
        const randomResponse = await axios.post(
          `${supabaseUrl}/rest/v1/rpc/get_random_faqs`,
          {
            p_company_id: companyId,
            p_limit: parseInt(limit)
          },
          {
            headers: {
              'apikey': supabaseKey,
              'Authorization': `Bearer ${supabaseKey}`,
              'Content-Type': 'application/json'
            }
          }
        );
        popularFaqs = randomResponse.data || [];
      } catch (randomError) {
        console.log('⚠️ Random FAQs function not available, returning empty array');
        popularFaqs = [];
      }
    }

    console.log('✅ Popular FAQs fetched successfully:', popularFaqs.length, 'items');

    res.json(popularFaqs);
  } catch (error) {
    console.error('❌ Error fetching popular FAQs:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch popular FAQs',
      details: error.response?.data || error.message 
    });
  }
});

// Update FAQ endpoint
app.put('/api/companies/update-faqs', async (req, res) => {
  try {
    const { companyId, companyName, faqId, question, answer } = req.body;

    console.log('📝 Updating FAQ for company:', companyName, 'FAQ ID:', faqId);
    console.log('�� Question length:', question.length, 'Answer length:', answer.length);

    if (!companyId || !faqId || !question || !answer) {
      return res.status(400).json({ error: 'Missing required fields: companyId, faqId, question, answer' });
    }

    // Validate that question and answer are strings
    if (typeof question !== 'string' || typeof answer !== 'string') {
      return res.status(400).json({ error: 'Question and answer must be strings' });
    }

    // Trim and validate non-empty strings
    const trimmedQuestion = question.trim();
    const trimmedAnswer = answer.trim();
    
    if (!trimmedQuestion || !trimmedAnswer) {
      return res.status(400).json({ error: 'Question and answer cannot be empty' });
    }

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Generate new embeddings for the updated question and answer
    const { questionEmbedding, answerEmbedding } = await getEmbedding(question, answer);

    // Generate new question hash
    const questionHash = crypto.createHash('sha256').update(question.toLowerCase().trim()).digest('hex');

    // Update the FAQ in the database
    const response = await axios.patch(
      `${supabaseUrl}/rest/v1/faqs?id=eq.${faqId}&company_id=eq.${companyId}`,
      {
        question: question.trim(),
        answer: answer.trim(),
        question_embedding: questionEmbedding,
        answer_embedding: answerEmbedding,
        question_hash: questionHash,
        updated_at: new Date().toISOString()
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

    if (response.data && response.data.length > 0) {
      console.log('✅ FAQ updated successfully:', response.data[0].id);
      res.json(response.data[0]);
    } else {
      console.log('⚠️ No FAQ found to update');
      res.status(404).json({ error: 'FAQ not found' });
    }

  } catch (error) {
    console.error('❌ Error updating FAQ:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to update FAQ',
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
  const { key, companyId } = req.query;
  console.log('🔑 Validating key:', key, 'for company with id:', companyId);

  // Demo key validation
  if (key.includes('demo-2025')) {
    return res.json({
      valid: true,
      companyId: companyId || null,
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
      `${supabaseUrl}/rest/v1/companies?id=eq.${encodeURIComponent(companyId)}&select=id,name,widget_key_hash,plan,status`,
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
        companyId: companyData.id,
        companyName: companyData.name,
        plan: companyData.plan,
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
      console.error('  STRIPE_GROWTH_PRICE_ID:', process.env.STRIPE_GROWTH_PRICE_ID);
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
        await updateAuthUser(companyId, userId, companyName);
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
      await updateAuthUser(companyId, userId, companyName)

      // Send Welcome Email
      await sendWelcomeEmail(companyEmail, companyName, plan)
      console.log('✅ Welcome email sent successfully');

      // Send admin notification email
      console.log('📧 Sending admin notification email...');
      await sendAdminCompanyNotification(companyData);
      console.log('✅ Admin notification email sent');

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
        plan: planType
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


// Notification API endpoints

// Super Admin Notification Endpoints

// Get all notifications for super admin
app.get('/api/notifications/all', async (req, res) => {
  try {
    const { limit = 50, offset = 0 } = req.query;

    console.log('📝 Fetching all notifications for super admin');

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Use optimized RPC function
    const response = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/get_all_notifications`,
      {
        p_limit: parseInt(limit),
        p_offset: parseInt(offset)
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ All notifications fetched successfully:', response.data?.length || 0, 'items');
    
    // Log the first few notifications to debug ID issues
    if (response.data && response.data.length > 0) {
      console.log('🔍 Sample notification data:', response.data.slice(0, 3).map(n => ({
        id: n.id,
        idType: typeof n.id,
        title: n.title
      })));
    }

    res.json(response.data || []);

  } catch (error) {
    console.error('❌ Error fetching all notifications:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch all notifications',
      details: error.response?.data || error.message 
    });
  }
});

// Get total unread count for super admin
app.get('/api/notifications/all/unread-count', async (req, res) => {
  try {
    console.log('📝 Fetching total unread notifications count for super admin');

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Use optimized RPC function
    const response = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/get_total_unread_count`,
      {},
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const count = response.data || 0;

    console.log('✅ Total unread count fetched successfully:', count);

    res.json({ count });

  } catch (error) {
    console.error('❌ Error fetching total unread count:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch total unread count',
      details: error.response?.data || error.message 
    });
  }
});

app.get('/api/notifications/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    const { limit = 50, offset = 0 } = req.query;

    console.log('📝 Fetching notifications for company:', companyId);

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Get notifications from database
    const response = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/get_company_notifications`,
      {
        p_company_id: companyId,
        p_limit: parseInt(limit),
        p_offset: parseInt(offset)
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ Notifications fetched successfully:', response.data?.length || 0, 'items');
    
    // Log the first few notifications to debug ID issues
    if (response.data && response.data.length > 0) {
      console.log('🔍 Sample notification data:', response.data.slice(0, 3).map(n => ({
        id: n.id,
        idType: typeof n.id,
        title: n.title
      })));
    }

    res.json(response.data || []);

  } catch (error) {
    console.error('❌ Error fetching notifications:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch notifications',
      details: error.response?.data || error.message 
    });
  }
});

app.get('/api/notifications/:companyId/unread-count', async (req, res) => {
  try {
    const { companyId } = req.params;

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Get unread count from database
    const response = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/get_unread_notifications_count`,
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

    res.json({ count: response.data || 0 });

  } catch (error) {
    console.error('❌ Error fetching unread count:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch unread count',
      details: error.response?.data || error.message 
    });
  }
});

app.put('/api/notifications/:notificationId/read', async (req, res) => {
  try {
    const { notificationId } = req.params;
    const { userType = 'company' } = req.body; // Default to 'company' for backward compatibility

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Mark notification as read with user type
    const response = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/mark_notification_read`,
      {
        p_notification_id: notificationId,
        p_user_type: userType
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ success: response.data });

  } catch (error) {
    console.error('❌ Error marking notification as read:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to mark notification as read',
      details: error.response?.data || error.message 
    });
  }
});

app.put('/api/notifications/:companyId/mark-all-read', async (req, res) => {
  try {
    const { companyId } = req.params;
    const { userType = 'company' } = req.body; // Default to 'company' for backward compatibility

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Mark all notifications as read with user type
    const response = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/mark_all_notifications_read`,
      {
        p_company_id: companyId,
        p_user_type: userType
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ updated_count: response.data || 0 });

  } catch (error) {
    console.error('❌ Error marking all notifications as read:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to mark all notifications as read',
      details: error.response?.data || error.message 
    });
  }
});

app.delete('/api/notifications/:notificationId', async (req, res) => {
  try {
    const { notificationId } = req.params;

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Delete notification
    const response = await axios.delete(
      `${supabaseUrl}/rest/v1/notifications?id=eq.${notificationId}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ success: true });

  } catch (error) {
    console.error('❌ Error deleting notification:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to delete notification',
      details: error.response?.data || error.message 
    });
  }
});

app.post('/api/notifications', async (req, res) => {
  try {
    const { company_id, company_name, type, title, message, crawl_session_id, action_data } = req.body;

    console.log('📝 Creating notification:', { company_id, type, title });

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Create notification in database
    const notificationData = {
      company_id,
      company_name,
      type,
      title,
      message,
      crawl_session_id: crawl_session_id || null,
      action_data: action_data || null,
      read_status: false
    };

    const response = await axios.post(
      `${supabaseUrl}/rest/v1/notifications`,
      notificationData,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        }
      }
    );

    console.log('✅ Notification created successfully');

    res.json(response.data[0]);

  } catch (error) {
    console.error('❌ Error creating notification:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to create notification',
      details: error.response?.data || error.message 
    });
  }
});

// Get crawl session data for FAQ approval
app.get('/api/crawler/session/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;

    console.log('📝 Fetching crawl session data:', sessionId);

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Get crawl session data
    const response = await axios.get(
      `${supabaseUrl}/rest/v1/crawl_sessions?id=eq.${sessionId}&select=*`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.data || response.data.length === 0) {
      return res.status(404).json({ error: 'Crawl session not found' });
    }

    console.log('✅ Crawl session data fetched successfully');

    res.json(response.data[0]);

  } catch (error) {
    console.error('❌ Error fetching crawl session data:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch crawl session data',
      details: error.response?.data || error.message 
    });
  }
});

// Test API configuration endpoint
// app.get('/api/test/config', async (req, res) => {
//   try {
//     const config = {
//       openRouterKey: process.env.OPEN_ROUTER_API_KEY ? '✅ Configured' : '❌ Missing',
//       jinaApiKey: process.env.JINA_API_KEY ? '✅ Configured' : '❌ Missing',
//       supabaseUrl: process.env.SUPABASE_PROJECT_URL ? '✅ Configured' : '❌ Missing',
//       supabaseAnonKey: process.env.SUPABASE_ANON_KEY ? '✅ Configured' : '❌ Missing',
//       supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY ? '✅ Configured' : '❌ Missing',
//       environment: process.env.NODE_ENV || 'development',
//       timestamp: new Date().toISOString()
//     };
    
//     res.json(config);
//   } catch (error) {
//     console.error('❌ Config test error:', error);
//     res.status(500).json({ error: 'Failed to get configuration status' });
//   }
// });

// Test OpenRouter API endpoint
// app.post('/api/test/openrouter', async (req, res) => {
//   try {
//     const { message } = req.body;
    
//     if (!process.env.OPEN_ROUTER_API_KEY) {
//       return res.status(500).json({ error: 'OpenRouter API key not configured' });
//     }
    
//     const response = await axios.post(
//       'https://openrouter.ai/api/v1/chat/completions',
//       {
//         model: 'openai/gpt-5-mini',
//         messages: [
//           {
//             role: 'user',
//             content: message || 'Hello, this is a test message.'
//           }
//         ],
//         max_tokens: 100,
//         temperature: 0.7
//       },
//       {
//         headers: {
//           'Authorization': `Bearer ${process.env.OPEN_ROUTER_API_KEY}`,
//           'Content-Type': 'application/json',
//           'HTTP-Referer': process.env.SOURCE_URL
//         },
//         timeout: 10000
//       }
//     );
    
//     res.json({
//       success: true,
//       response: response.data.choices[0].message.content,
//       model: response.data.model,
//       usage: response.data.usage
//     });
//   } catch (error) {
//     console.error('❌ OpenRouter test error:', error.response?.data || error.message);
//     res.status(500).json({ 
//       error: 'OpenRouter API test failed',
//       details: error.response?.data || error.message,
//       status: error.response?.status
//     });
//   }
// });

// ========================================

// Get notifications summary for super admin dashboard
app.get('/api/notifications/all/summary', async (req, res) => {
  try {
    console.log('📝 Fetching notifications summary for super admin dashboard');

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Use optimized RPC function
    const response = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/get_super_admin_notifications_summary`,
      {},
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const summary = response.data?.[0] || {};

    console.log('✅ Notifications summary fetched successfully');

    res.json(summary);

  } catch (error) {
    console.error('❌ Error fetching notifications summary:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch notifications summary',
      details: error.response?.data || error.message 
    });
  }
});

// ========================================
// AUTOMATION API ENDPOINTS
// ========================================

// Get scheduler status
app.get('/api/automation/status', async (req, res) => {
  try {
    const status = await scheduler.getStatus();
    res.json(status);
  } catch (error) {
    console.error('❌ Error getting scheduler status:', error);
    res.status(500).json({ error: 'Failed to get scheduler status' });
  }
});

// Start/stop scheduler
app.post('/api/automation/scheduler', async (req, res) => {
  try {
    const { action } = req.body;
    
    if (action === 'start') {
      await scheduler.start();
      res.json({ message: 'Scheduler started successfully' });
    } else if (action === 'stop') {
      await scheduler.stop();
      res.json({ message: 'Scheduler stopped successfully' });
    } else {
      res.status(400).json({ error: 'Invalid action. Use "start" or "stop"' });
    }
  } catch (error) {
    console.error('❌ Error controlling scheduler:', error);
    res.status(500).json({ error: 'Failed to control scheduler' });
  }
});

// Get automation analytics for a company
app.get('/api/companies/:companyId/automation/analytics', async (req, res) => {
  try {
    const { companyId } = req.params;
    const { days = 30 } = req.query;

    const { data, error } = await supabase
      .from('automation_analytics')
      .select('*')
      .eq('company_id', companyId)
      .gte('created_at', new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString())
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    console.error('❌ Error getting automation analytics:', error);
    res.status(500).json({ error: 'Failed to get automation analytics' });
  }
});

// Get FAQ summary statistics for a company
app.get('/api/companies/:companyId/faqs/summary', async (req, res) => {
  try {
    const { companyId } = req.params;

    console.log('📊 Fetching FAQ summary for company:', companyId);

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Get FAQ summary using RPC function
    const response = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/get_company_faqs_summary`,
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

    const summary = response.data?.[0] || {};

    console.log('✅ FAQ summary fetched successfully');

    res.json(summary);

  } catch (error) {
    console.error('❌ Error fetching FAQ summary:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch FAQ summary',
      details: error.response?.data || error.message 
    });
  }
});

// Email Subscription Endpoints
app.post('/api/subscriptions/subscribe', async (req, res) => {
  try {
    const { email, first_name, last_name, company_name, source = 'landing_page' } = req.body;

    console.log('📧 New subscription request:', { email, source });

    // Validate email
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required and must be a string.' 
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address.' 
      });
    }

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ 
        success: false, 
        message: 'Database configuration missing.' 
      });
    }

    // Check if email already exists
    const existingResponse = await axios.get(
      `${supabaseUrl}/rest/v1/email_subscriptions?email=eq.${encodeURIComponent(email)}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (existingResponse.data && existingResponse.data.length > 0) {
      const existing = existingResponse.data[0];
      
      // If already subscribed and active, return success
      if (existing.status === 'active') {
        return res.status(409).json({
          success: false,
          message: 'This email is already subscribed to our newsletter.'
        });
      }
      
      // If unsubscribed, reactivate the subscription
      if (existing.status === 'unsubscribed') {
        const updateResponse = await axios.patch(
          `${supabaseUrl}/rest/v1/email_subscriptions?id=eq.${existing.id}`,
          {
            status: 'active',
            unsubscribed_at: null,
            updated_at: new Date().toISOString()
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

        console.log('✅ Reactivated subscription for:', email);
        return res.json({
          success: true,
          message: 'Welcome back! Your subscription has been reactivated.',
          subscription: updateResponse.data[0]
        });
      }
    }

    // Create new subscription
    const subscriptionData = {
      email: email.toLowerCase().trim(),
      first_name: first_name || null,
      last_name: last_name || null,
      company_name: company_name || null,
      source: source,
      status: 'active',
      subscribed_at: new Date().toISOString()
    };

    const response = await axios.post(
      `${supabaseUrl}/rest/v1/email_subscriptions`,
      subscriptionData,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        }
      }
    );

    console.log('✅ New subscription created:', email);
    res.json({
      success: true,
      message: 'Thank you for subscribing! You\'ll receive updates about Qurius AI.',
      subscription: response.data[0]
    });

  } catch (error) {
    console.error('❌ Error creating subscription:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe. Please try again later.',
      details: error.response?.data || error.message 
    });
  }
});

app.post('/api/subscriptions/unsubscribe', async (req, res) => {
  try {
    const { email } = req.body;

    console.log('📧 Unsubscribe request:', email);

    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required.' 
      });
    }

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ 
        success: false, 
        message: 'Database configuration missing.' 
      });
    }

    // Find and update subscription
    const response = await axios.patch(
      `${supabaseUrl}/rest/v1/email_subscriptions?email=eq.${encodeURIComponent(email)}`,
      {
        status: 'unsubscribed',
        unsubscribed_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
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

    if (response.data && response.data.length > 0) {
      console.log('✅ Subscription unsubscribed:', email);
      res.json({
        success: true,
        message: 'You have been successfully unsubscribed from our newsletter.'
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Email not found in our subscription list.'
      });
    }

  } catch (error) {
    console.error('❌ Error unsubscribing:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to unsubscribe. Please try again later.' 
    });
  }
});

app.get('/api/subscriptions/status/:email', async (req, res) => {
  try {
    const { email } = req.params;

    console.log('📧 Checking subscription status for:', email);

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ 
        success: false, 
        message: 'Database configuration missing.' 
      });
    }

    const response = await axios.get(
      `${supabaseUrl}/rest/v1/email_subscriptions?email=eq.${encodeURIComponent(email)}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data && response.data.length > 0) {
      const subscription = response.data[0];
      res.json({
        success: true,
        message: 'Subscription found.',
        subscription: {
          id: subscription.id,
          email: subscription.email,
          status: subscription.status,
          subscribed_at: subscription.subscribed_at,
          source: subscription.source
        }
      });
    } else {
      res.json({
        success: false,
        message: 'Email not found in our subscription list.',
        subscription: null
      });
    }

  } catch (error) {
    console.error('❌ Error checking subscription status:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to check subscription status.' 
    });
  }
});

// Get all subscriptions (admin endpoint)
app.get('/api/subscriptions', async (req, res) => {
  try {
    const { status, source, limit = 100, offset = 0 } = req.query;

    console.log('📧 Admin requesting subscriptions:', { status, source, limit, offset });

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ 
        success: false, 
        message: 'Database configuration missing.' 
      });
    }

    let url = `${supabaseUrl}/rest/v1/email_subscriptions?order=subscribed_at.desc&limit=${limit}&offset=${offset}`;
    
    if (status) {
      url += `&status=eq.${status}`;
    }
    if (source) {
      url += `&source=eq.${source}`;
    }

    const response = await axios.get(url, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      }
    });

    console.log(`✅ Retrieved ${response.data.length} subscriptions`);
    res.json({
      success: true,
      subscriptions: response.data,
      count: response.data.length
    });

  } catch (error) {
    console.error('❌ Error retrieving subscriptions:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to retrieve subscriptions.' 
    });
  }
});

// Get content quality insights for a company
app.get('/api/companies/:companyId/content-quality', async (req, res) => {
  try {
    const { companyId } = req.params;
    
    console.log('📊 Getting content quality insights for company:', companyId);
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Get company data
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

    // Get content chunks count
    const contentResponse = await axios.get(
      `${supabaseUrl}/rest/v1/company_content_chunks?company_id=eq.${companyId}&select=id`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Get FAQs count
    const faqResponse = await axios.get(
      `${supabaseUrl}/rest/v1/faqs?company_id=eq.${companyId}&select=id`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const contentCount = contentResponse.data?.length || 0;
    const faqCount = faqResponse.data?.length || 0;

    // Calculate quality score
    let score = 0;
    if (contentCount > 0) score += 20;
    if (faqCount > 0) score += 30;
    if (contentCount > 5) score += 20;
    if (faqCount > 3) score += 20;
    score = Math.min(100, score);

    // Determine quality level
    let quality = 'unknown';
    if (score >= 80) quality = 'excellent';
    else if (score >= 60) quality = 'good';
    else if (score >= 40) quality = 'fair';
    else if (score >= 20) quality = 'poor';
    else quality = 'very_low';

    // Generate recommendations
    let recommendations = [];
    if (quality === 'very_low' || quality === 'poor') {
      recommendations = [
        'Add FAQ content through the admin interface',
        'Use the website crawler to extract content from your site',
        'Upload documents (PDFs, Word docs) for content processing',
        'Add contact information and basic company details'
      ];
    } else if (quality === 'fair') {
      recommendations = [
        'Add more FAQ content for common customer questions',
        'Crawl additional pages from your website',
        'Consider adding content about contact, support, and policies'
      ];
    } else if (quality === 'good') {
      recommendations = [
        'Add content about missing topics',
        'Consider adding more specific product/service information'
      ];
    } else {
      recommendations = [
        'Your content is excellent! Consider adding seasonal or promotional content',
        'Keep content updated as your business evolves'
      ];
    }

    const insights = {
      quality,
      score,
      contentCount,
      faqCount,
      recommendations,
      lastUpdated: new Date().toISOString(),
      company: {
        name: company.name,
        website: company.website,
        contact_email: company.contact_email
      }
    };

    console.log('✅ Content quality insights generated:', {
      quality,
      score,
      contentCount,
      faqCount
    });

    res.json(insights);

  } catch (error) {
    console.error('❌ Content quality insights error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to get content quality insights',
      details: error.response?.data || error.message 
    });
  }
});


// ========================================
// LEAD MANAGEMENT ENDPOINTS
// ========================================

// Store lead information
app.post('/api/leads/store', async (req, res) => {
  try {
    const { 
      companyId, 
      companyName, 
      name, 
      email, 
      phone, 
      conversationContext, 
      sessionId, 
      userQuestion, 
      aiResponse 
    } = req.body;

    if (!companyId || !companyName) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields: companyId, companyName' 
      });
    }

    console.log('📝 Storing lead for company:', companyName);

    const leadData = {
      companyId,
      companyName,
      name: name || null,
      email: email || null,
      phone: phone || null,
      conversationContext: conversationContext || null,
      sessionId: sessionId || null,
      userQuestion: userQuestion || null,
      aiResponse: aiResponse || null
    };

    const result = await storeLead(leadData);

    if (result.success) {
      console.log('✅ Lead stored successfully with ID:', result.leadId);
      res.json({ 
        success: true, 
        leadId: result.leadId,
        message: 'Lead information stored successfully'
      });
    } else {
      console.error('❌ Failed to store lead:', result.error);
      res.status(500).json({ 
        success: false, 
        error: result.error || 'Failed to store lead information' 
      });
    }

  } catch (error) {
    console.error('❌ Lead storage error:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error while storing lead' 
    });
  }
});

// Get leads for a company
app.get('/api/leads/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    const { status, limit = 50, offset = 0 } = req.query;

    if (!companyId) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing companyId parameter' 
      });
    }

    console.log('📊 Fetching leads for company:', companyId);

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ 
        success: false, 
        error: 'Database configuration missing' 
      });
    }

    // Build query parameters
    let queryParams = `company_id=eq.${companyId}&select=*&order=created_at.desc`;
    
    if (status && status !== 'all') {
      queryParams += `&lead_status=eq.${status}`;
    }
    
    queryParams += `&limit=${limit}&offset=${offset}`;

    const leadsResponse = await axios.get(
      `${supabaseUrl}/rest/v1/leads?${queryParams}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const leads = leadsResponse.data || [];

    res.json({
      success: true,
      leads,
      total: leads.length,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });

  } catch (error) {
    console.error('❌ Error fetching leads:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch leads' 
    });
  }
});

// Update lead status
app.patch('/api/leads/:leadId/status', async (req, res) => {
  try {
    const { leadId } = req.params;
    const { status } = req.body;

    if (!leadId || !status) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields: leadId, status' 
      });
    }

    console.log('📝 Updating lead status:', leadId, 'to', status);

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ 
        success: false, 
        error: 'Database configuration missing' 
      });
    }

    const updateResponse = await axios.patch(
      `${supabaseUrl}/rest/v1/leads?id=eq.${leadId}`,
      { 
        lead_status: status,
        updated_at: new Date().toISOString()
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        }
      }
    );

    // Check if lead was found and updated
    if (updateResponse.status === 204) {
      res.json({ 
        success: true, 
        message: 'Lead status updated successfully' 
      });
    } else {
      res.status(404).json({ 
        success: false, 
        error: 'Lead not found' 
      });
    }

  } catch (error) {
    console.error('❌ Error updating lead status:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to update lead status' 
    });
  }
});

// Lead analytics endpoint
app.get('/api/analytics/leads/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    
    if (!companyId) {
      return res.status(400).json({ error: 'Company ID is required' });
    }

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    // Get leads for the company
    const leadsResponse = await axios.get(
      `${supabaseUrl}/rest/v1/leads?company_id=eq.${companyId}&select=*`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const leads = leadsResponse.data || [];
    
    // Calculate lead statistics
    const totalLeads = leads.length;
    const newLeads = leads.filter(lead => lead.lead_status === 'new').length;
    const contactedLeads = leads.filter(lead => lead.lead_status === 'contacted').length;
    const convertedLeads = leads.filter(lead => lead.lead_status === 'converted').length;
    const lostLeads = leads.filter(lead => lead.lead_status === 'lost').length;
    
    // Debug logging
    console.log('🔍 Lead Analytics Debug:', {
      companyId,
      totalLeads,
      newLeads,
      contactedLeads,
      convertedLeads,
      lostLeads,
      leadStatuses: leads.map(lead => ({ id: lead.id, status: lead.lead_status }))
    });
    
    // Calculate conversion rate
    const conversionRate = totalLeads > 0 ? (convertedLeads / totalLeads) * 100 : 0;
    
    console.log('📊 Conversion Rate Calculation:', {
      convertedLeads,
      totalLeads,
      conversionRate: `${conversionRate}%`
    });
    
    // Calculate average response time (placeholder - would need to track response times)
    const averageResponseTime = 0; // TODO: Implement response time tracking
    
    // Group leads by source (session ID for now)
    const leadSources = leads.reduce((acc, lead) => {
      const source = lead.source_session_id || 'unknown';
      acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {});
    
    // Group leads by month
    const monthlyLeads = leads.reduce((acc, lead) => {
      const month = new Date(lead.created_at).toISOString().slice(0, 7); // YYYY-MM format
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {});
    
    // Convert to array format
    const monthlyLeadsArray = Object.entries(monthlyLeads).map(([month, count]) => ({
      month,
      count
    })).sort((a, b) => a.month.localeCompare(b.month));

    res.json({
      totalLeads,
      newLeads,
      contactedLeads,
      convertedLeads,
      lostLeads,
      conversionRate,
      averageResponseTime,
      leadSources,
      monthlyLeads: monthlyLeadsArray
    });

  } catch (error) {
    console.error('Error fetching lead analytics:', error);
    res.status(500).json({ 
      error: 'Failed to fetch lead analytics',
      details: error.message 
    });
  }
});

// ========================================
// START SERVER
// ========================================

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: ${process.env.BACKEND_URL}/api/health`);
  console.log(`🌐 Allowed origins: ${allowedOrigins.join(', ')}`);
  
  // Start the crawl scheduler
  // try {
  //   await scheduler.start();
  //   console.log('✅ Crawl scheduler started successfully');
  // } catch (error) {
  //   console.error('❌ Failed to start crawl scheduler:', error);
  // }
}); 



