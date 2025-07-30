// server/index.js
import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import { getTimeAgo, parseTheme, getDailyStats, getEmbedding, getAIResponse, PRICING_PLANS } from './utils.js';



dotenv.config();

const app = express();;
const PORT = process.env.PORT || 3001;

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});


// Debug: Log the price IDs being used
console.log('🔧 Stripe Price IDs:');
console.log('Starter Price ID:', process.env.STRIPE_STARTER_PRICE_ID);
console.log('Pro Price ID:', process.env.STRIPE_PRO_PRICE_ID);

// Middleware
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000,http://localhost:5173,http://127.0.0.1:5500,http://localhost:5500,https://qurius-ai.vercel.app').split(',').map(origin => origin.trim());

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
    if (origin && (origin.includes('vercel.app') || origin.includes('qurius-ai.vercel.app'))) {
      return callback(null, true);
    }
    console.log('CORS blocked origin:', origin);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'withCredentials']
}));

// parse json
app.use(express.json());

// Add OPTIONS handling for preflight requests
app.options('*', cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);

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
app.get('/api/widget-config', (req, res) => {
  try {
    // Only return public configuration, no API keys
    res.json({
      supabaseUrl: process.env.SUPABASE_PROJECT_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
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

    console.log("companiesWithStats", companiesWithStats)

    res.json(companiesWithStats);
  } catch (error) {
    console.error('Get companies error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});


// Get company by ID
app.get('/api/companies/:id', async (req, res) => {
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
          'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    const widgetAnalytics = widgetAnalyticsResponse.data || [];
    console.log(widgetAnalytics)

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
      console.log(analyticsSummary)
      res.json({
        company: { 
          ...company, 
          theme: parseTheme(company.theme),
          analytics: analyticsSummary
        },
      });
    } else {
      res.status(404).json({ error: 'Company not found' });
    }
  } catch (error) {
    console.error('Get company error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch company' });
  }
});

// Create company
app.post('/api/companies', async (req, res) => {
  try {
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
      enrollment_date, 
      status,
      plan 
    } = req.body;
    
    console.log('Creating company:', name);
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

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

    // Prepare company data
    const companyData = {
      name,
      domain: extractedDomain,
      location,
      description,
      theme: theme, // Store theme object directly as JSON
      industry,
      website,
      contact_email,
      logo_url: logo_url || '',
      enrollment_date: enrollment_date || new Date().toISOString().split('T')[0],
      status: status || 'active',
      plan: plan || 'free' // Default to free plan
    };

    // Create company
    const response = await axios.post(
      `${supabaseUrl}/rest/v1/companies`,
      companyData,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(companyData)

    // Since the POST response doesn't return the ID, we need to get it by querying
    // Get the company ID by querying for the newly created company
    const companyQueryResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?select=id&name=eq.${encodeURIComponent(name)}&order=created_at.desc&limit=1`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!companyQueryResponse.data || !companyQueryResponse.data[0] || !companyQueryResponse.data[0].id) {
      throw new Error('Failed to create company - could not retrieve company ID');
    }

    const companyId = companyQueryResponse.data[0].id;

    res.json({
      success: true,
      id: companyId,
      company: { ...companyData, id: companyId }
    });
  } catch (error) {
    console.error('Create company error:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false,
      error: 'Failed to create company' 
    });
  }
});

// Update company
app.put('/api/companies/:id', async (req, res) => {
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
      enrollment_date, 
      status 
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
      logo_url: logo_url || '',
      enrollment_date: enrollment_date || new Date().toISOString().split('T')[0],
      status: status || 'active'
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

// Search FAQs
app.post('/api/faqs/search', async (req, res) => {
  try {
    const { question, companyName } = req.body;
    console.log('Searching FAQs for company:', companyName);
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // First get company ID
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
      console.log('Company not found:', companyName);
      return res.json([]);
    }

    const companyId = companyResponse.data[0].id;
    console.log('Found company ID:', companyId);

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
          res.json(faqResponse.data);
        } else {
          console.log('FAQ confidence too low:', bestMatch.similarity, 'falling back to AI');
          const aiResponse = await getAIResponse(question, companyName);
          res.json([{ question: question, answer: aiResponse, source: 'ai' }]);
        }
      } else {
        // No FAQ found, fallback to AI
        console.log('No FAQ found, falling back to AI');
        const aiResponse = await getAIResponse(question, companyName);
        res.json([{ question: question, answer: aiResponse, source: 'ai' }]);
      }
    } catch (embeddingError) {
      console.log('Embedding search failed, falling back to AI:', embeddingError.message);
      
      // Fallback to AI when semantic search fails
      const aiResponse = await getAIResponse(question, companyName);
      res.json([{ question: question, answer: aiResponse, source: 'ai' }]);
    }
  } catch (error) {
    console.error('FAQ search error:', error.response?.data || error.message);
    res.json([]);
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

// Create admin user (for development only)
app.post('/api/create-admin', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    const response = await axios.post(
      `${supabaseUrl}/auth/v1/admin/users`,
      {
        email,
        password,
        email_confirm: true,
        user_metadata: { role: 'admin' }
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
      user: response.data
    });
  } catch (error) {
    console.error('Create admin error:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false,
      error: 'Failed to create admin user' 
    });
  }
});

// Get AI response
app.post('/api/chat', async (req, res) => {
  try {
    console.log('Getting AI response from:', req.headers.origin);
    const { messages, companyName } = req.body;
    
    if (!messages || !companyName) {
      return res.status(400).json({ error: 'Messages and company name are required' });
    }

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a helpful assistant for ${companyName}. Answer questions based on their FAQ knowledge base.`
          },
          ...messages
        ],
        max_tokens: 500
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPEN_ROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.SOURCE_URL || 'https://qurius-ai.vercel.app'
        }
      }
    );

    res.json({
      answer: response.data.choices[0].message.content
    });
  } catch (error) {
    console.error('Chat error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get AI response' });
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

app.post('/api/analytics/widget-interaction', async (req, res) => {
  try {
    const { companyName, eventType, message, response, timestamp, sessionId } = req.body;
    
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
      return res.status(404).json({ error: 'Company not found' });
    }

    const companyId = companyResponse.data[0].id;

    // Record widget interaction
    const interactionData = {
      company_id: companyId,
      event_type: eventType, // 'message_sent', 'message_received', 'widget_opened', 'widget_closed'
      message: message || null,
      response: response || null,
      timestamp: timestamp || new Date().toISOString(),
      session_id: sessionId || null
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

    res.json({ success: true });
  } catch (error) {
    console.error('Widget interaction tracking error:', error.response?.data || error.message);
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


    // Get analytics data - use proper PostgreSQL timestamp format
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

    // Process analytics data
    const stats = {
      totalViews: analytics.filter(a => a.event_type === 'widget_view').length,
      totalInteractions: analytics.filter(a => a.event_type !== 'widget_view').length,
      totalMessages: analytics.filter(a => a.event_type === 'message_sent').length,
      totalResponses: analytics.filter(a => a.event_type === 'message_received').length,
      uniqueSessions: [...new Set(analytics.filter(a => a.session_id).map(a => a.session_id))].length,
      dailyStats: getDailyStats(analytics, periodDays)
    };


    res.json(stats);
  } catch (error) {
    console.error('❌ Analytics fetch error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});



// Test endpoint to insert sample analytics data
app.post('/api/analytics/test-data/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    console.log('🧪 Inserting test analytics data for company:', companyId);
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Insert test data
    const testData = [
      {
        company_id: companyId,
        event_type: 'widget_view',
        page_url: 'https://test.com/page1',
        user_agent: 'Test Browser',
        session_id: 'test_session_1',
        timestamp: new Date().toISOString()
      },
      {
        company_id: companyId,
        event_type: 'widget_opened',
        session_id: 'test_session_1',
        timestamp: new Date().toISOString()
      },
      {
        company_id: companyId,
        event_type: 'message_sent',
        message: 'Hello, how can you help me?',
        session_id: 'test_session_1',
        timestamp: new Date().toISOString()
      },
      {
        company_id: companyId,
        event_type: 'message_received',
        response: 'I can help you with various questions!',
        session_id: 'test_session_1',
        timestamp: new Date().toISOString()
      }
    ];

    for (const data of testData) {
      await axios.post(
        `${supabaseUrl}/rest/v1/widget_analytics`,
        data,
        {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('✅ Inserted test data:', data.event_type);
    }

    res.json({ success: true, message: 'Test data inserted successfully' });
  } catch (error) {
    console.error('❌ Test data insertion error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to insert test data' });
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

// Stripe Payment Endpoints

// Create checkout session
app.post('/api/payments/create-checkout-session', async (req, res) => {
  try {
    console.log('💳 Prices:', prices);
    const { companyName, customerEmail, planId } = req.body;
    console.log('💳 Plan ID:', planId, 'Customer Email:', customerEmail, 'Company Name:', companyName);
    
    console.log('💳 Creating checkout session for:', { companyName, planId, customerEmail });
    
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
          plan_id: planId
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
      success_url: `${process.env.FRONTEND_URL || 'https://qurius-ai.vercel.app' || 'http://localhost:5173'}/onboarding?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL || 'https://qurius-ai.vercel.app' || 'http://localhost:5173'}/onboarding?canceled=true`,
      metadata: {
        company_name: companyName,
        plan_id: planId,
        customer_email: customerEmail
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
      return_url: `${process.env.FRONTEND_URL || 'https://qurius-ai.vercel.app' || 'http://localhost:5173'}`,
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

// Stripe webhook handler
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

  const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        const companyName = session.metadata.company_name;
        const planId = session.metadata.plan_id;
        const customerEmail = session.metadata.customer_email;
        
        console.log('✅ Checkout completed for company:', companyName, 'plan:', planId);
        
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
          contact_email: customerEmail,
          plan: planId,
          stripe_customer_id: session.customer,
          stripe_subscription_id: session.subscription,
          subscription_status: 'active',
          status: 'active',
          enrollment_date: new Date().toISOString().split('T')[0]
        };

        try {
          const companyResponse = await axios.post(
            `${supabaseUrl}/rest/v1/companies`,
            companyData,
            {
              headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json'
              }
            }
          );

          console.log('✅ Company created successfully:', companyResponse.data);
        } catch (error) {
          console.error('❌ Error creating company:', error.response?.data || error.message);
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


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🌐 Allowed origins: ${allowedOrigins.join(', ')}`);
}); 