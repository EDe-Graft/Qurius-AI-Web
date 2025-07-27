// server/index.js
import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import { getTimeAgo } from './utils.js';

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
    console.log('Getting theme for company:', name);
    
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

    if (response.data && response.data.length > 0) {
      const company = response.data[0];
      res.json({
        theme: company.theme || '#3B82F6',
        logo_url: company.logo_url || ''
      });
    } else {
      // Return default theme if company not found
      res.json({
        theme: '#3B82F6',
        logo_url: ''
      });
    }
  } catch (error) {
    console.error('Company theme error:', error.response?.data || error.message);
    // Return default theme on error
    res.json({
      theme: '#3B82F6',
      logo_url: ''
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
      res.json({
        company: companyResponse.data[0],
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

    // Prepare company data
    const companyData = {
      name,
      domain,
      location,
      description,
      theme: theme || '#3B82F6',
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

    // Add company to chat interactions
    const chatInteractionData = {
      company_id: response.data.id,
      conversations: 0,
      queries: 0,
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
      id: response.data.id,
      company: { ...companyData, id: response.data.id },
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
      theme: theme || '#3B82F6',
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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🌐 Allowed origins: ${allowedOrigins.join(', ')}`);
}); 