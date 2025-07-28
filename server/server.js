// server/index.js
import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import { getTimeAgo, parseTheme } from './utils.js';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000,http://localhost:5173,http://127.0.0.1:5500,http://localhost:5500').split(',').map(origin => origin.trim());

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

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
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

// Get all companies with chat interactions
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

    // Get chat interactions for all companies
    const chatInteractionsResponse = await axios.get(
      `${supabaseUrl}/rest/v1/chat_interactions?select=*`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const chatInteractions = chatInteractionsResponse.data || [];

    // Merge company data with chat interactions
    const companiesWithStats = companies.map(company => {
      const interaction = chatInteractions.find(ci => ci.company_id === company.id);
      
      return {
        ...company,
        theme: parseTheme(company.theme),
        conversations: interaction?.conversations || 0,
        queries: interaction?.queries || 0,
        lastActive: interaction?.last_interaction_timestamp 
          ? getTimeAgo(interaction.last_interaction_timestamp)
          : 'Never'
      };
    });

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

    // Get chat interactions
    const chatInteractionResponse = await axios.get(
      `${supabaseUrl}/rest/v1/chat_interactions?company_id=eq.${id}`,
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
      
      res.json({
        company: { ...company, theme: parseTheme(company.theme) },
        stats: chatInteractionResponse.data[0]
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
      status 
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
      status: status || 'active'
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

    // Add company to chat interactions
    const chatInteractionData = {
      company_id: companyId,
      conversations: 0,
      queries: 0,
      last_interaction_timestamp: new Date().toISOString()
    };

    // Add company to chat interactions
    const chatInteractionResponse = await axios.post(
      `${supabaseUrl}/rest/v1/chat_interactions`,
      chatInteractionData,
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
      id: companyId,
      company: { ...companyData, id: companyId },
      stats: {
        conversations: 0,
        queries: 0,
        last_interaction_timestamp: new Date().toISOString()
      }
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
      return res.json([]);
    }

    const companyId = companyResponse.data[0].id;

    // Get embedding for the question
    const embeddingResponse = await axios.post(
      'https://api.jina.ai/v1/embeddings',
      {
        input: [question],
        model: 'jina-embeddings-v2-base-en'
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.JINA_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const questionEmbedding = embeddingResponse.data.data[0].embedding;

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

    res.json(faqResponse.data || []);
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

    res.json({
      questionEmbedding: response.data.data[0].embedding,
      answerEmbedding: response.data.data[1].embedding
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

    if (!companyResponse.data || companyResponse.data.length === 0) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const companyId = companyResponse.data[0].id;

    // Record widget view
    const viewData = {
      company_id: companyId,
      event_type: 'widget_view',
      page_url: pageUrl,
      user_agent: userAgent,
      timestamp: timestamp || new Date().toISOString(),
      session_id: req.body.sessionId || null
    };

    await axios.post(
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

    res.json({ success: true });
  } catch (error) {
    console.error('Widget view tracking error:', error.response?.data || error.message);
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
    const { period = '7d' } = req.query; // 7d, 30d, 90d
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    // Calculate date range
    const now = new Date();
    const periodDays = period === '30d' ? 30 : period === '90d' ? 90 : 7;
    const startDate = new Date(now.getTime() - (periodDays * 24 * 60 * 60 * 1000)).toISOString();

    // Get analytics data
    const analyticsResponse = await axios.get(
      `${supabaseUrl}/rest/v1/widget_analytics?company_id=eq.${companyId}&timestamp=gte.${startDate}&order=timestamp.desc`,
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
    console.error('Analytics fetch error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});

// Helper function to get daily stats
function getDailyStats(analytics, days) {
  const dailyStats = [];
  const now = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000));
    const dateStr = date.toISOString().split('T')[0];
    
    const dayAnalytics = analytics.filter(a => 
      a.timestamp && a.timestamp.startsWith(dateStr)
    );
    
    dailyStats.push({
      date: dateStr,
      views: dayAnalytics.filter(a => a.event_type === 'widget_view').length,
      interactions: dayAnalytics.filter(a => a.event_type !== 'widget_view').length,
      messages: dayAnalytics.filter(a => a.event_type === 'message_sent').length
    });
  }
  
  return dailyStats;
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🌐 Allowed origins: ${allowedOrigins.join(', ')}`);
}); 