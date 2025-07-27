// server/index.js
import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

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

// Create company
app.post('/api/companies', async (req, res) => {
  try {
    const { name, theme } = req.body;
    console.log('Creating company:', name);
    
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase configuration missing' });
    }

    const response = await axios.post(
      `${supabaseUrl}/rest/v1/companies`,
      { name, theme: theme || '#3B82F6' },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ id: response.data.id });
  } catch (error) {
    console.error('Create company error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to create company' });
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