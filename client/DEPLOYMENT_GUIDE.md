# Qurius-AI Deployment Guide

This guide will help you deploy your chat widget service to production and make it available as a service to companies.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- Vercel account (for frontend)
- Render account (for backend)
- Supabase account (for database)
- OpenAI API key

## 1. Environment Setup

### Frontend Environment Variables

Create a `.env` file in the `client` directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenAI Configuration
VITE_OPENAI_API_KEY=your_openai_api_key

# Backend API URL
VITE_API_URL=https://your-backend.onrender.com

# Widget Configuration
VITE_WIDGET_VERSION=1.0.0
VITE_DEFAULT_THEME=light
```

### Backend Environment Variables

Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=production

# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key

# CORS Configuration
CORS_ORIGIN=https://your-frontend.vercel.app

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 2. Database Setup

### Supabase Configuration

1. **Create a new Supabase project**
2. **Set up the database schema**:

```sql
-- Create tables for chat widget service
CREATE TABLE companies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  domain VARCHAR(255),
  api_key VARCHAR(255) UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  session_id VARCHAR(255) NOT NULL,
  user_message TEXT,
  ai_response TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  metric_name VARCHAR(100) NOT NULL,
  metric_value JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_conversations_company_id ON conversations(company_id);
CREATE INDEX idx_conversations_session_id ON conversations(session_id);
CREATE INDEX idx_analytics_company_id ON analytics(company_id);
```

3. **Enable Row Level Security (RLS)**:

```sql
-- Enable RLS on all tables
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Companies can view their own data" ON companies
  FOR SELECT USING (auth.uid()::text = api_key);

CREATE POLICY "Companies can view their conversations" ON conversations
  FOR SELECT USING (company_id IN (
    SELECT id FROM companies WHERE api_key = auth.uid()::text
  ));

CREATE POLICY "Companies can view their analytics" ON analytics
  FOR SELECT USING (company_id IN (
    SELECT id FROM companies WHERE api_key = auth.uid()::text
  ));
```

## 3. Frontend Deployment (Vercel)

### Step 1: Prepare for Deployment

1. **Build the widget**:
```bash
cd client
npm run build:widget
```

2. **Update Vite configuration** for widget build:
```javascript
// vite.widget.config.ts
export default defineConfig({
  build: {
    lib: {
      entry: 'src/widget.tsx',
      name: 'QuriusChatWidget',
      fileName: 'chat-widget'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
```

### Step 2: Deploy to Vercel

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Step 3: Configure Custom Domain

1. **Add custom domain** in Vercel dashboard
2. **Update CORS settings** in backend
3. **Update embed script URL** in documentation

## 4. Backend Deployment (Render)

### Step 1: Prepare for Deployment

1. **Update package.json** for Render:
```json
{
  "scripts": {
    "start": "node server.js",
    "build": "npm install"
  },
  "engines": {
    "node": "18.x"
  }
}
```

2. **Create render.yaml** for automatic deployment:
```yaml
services:
  - type: web
    name: qurius-ai-backend
    env: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 3000
```

### Step 2: Deploy to Render

1. **Connect your repository to Render**
2. **Set environment variables** in Render dashboard
3. **Configure auto-deploy** on push to main branch

## 5. Widget Distribution

### Step 1: Create Distribution Files

1. **Build widget for distribution**:
```bash
npm run build:widget
```

2. **Create embed script** that loads the widget:
```javascript
// public/embed.js
(function() {
  'use strict';
  
  const CONFIG = {
    scriptUrl: 'https://your-domain.vercel.app/widget/chat-widget.js',
    cssUrl: 'https://your-domain.vercel.app/widget/chat-widget.css',
    apiUrl: 'https://your-backend.onrender.com'
  };
  
  // Widget initialization code...
})();
```

### Step 2: Set up CDN

1. **Configure Vercel for static file serving**
2. **Set up caching headers** for performance
3. **Enable compression** for faster loading

## 6. Monitoring and Analytics

### Step 1: Set up Monitoring

1. **Add Sentry for error tracking**:
```bash
npm install @sentry/react @sentry/tracing
```

2. **Configure Sentry**:
```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production",
  tracesSampleRate: 1.0,
});
```

### Step 2: Set up Analytics

1. **Add Google Analytics** for widget usage
2. **Set up custom events** for tracking
3. **Create dashboard** for monitoring

## 7. Security Configuration

### Step 1: API Security

1. **Implement rate limiting**:
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
```

2. **Add CORS protection**:
```javascript
const cors = require('cors');

app.use(cors({
  origin: ['https://your-frontend.vercel.app'],
  credentials: true
}));
```

### Step 2: Data Protection

1. **Encrypt sensitive data** in database
2. **Implement API key authentication**
3. **Add request validation**

## 8. Performance Optimization

### Step 1: Frontend Optimization

1. **Enable code splitting**:
```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'date-fns']
        }
      }
    }
  }
})
```

2. **Optimize bundle size**:
```bash
npm install vite-plugin-compression
```

### Step 2: Backend Optimization

1. **Add caching headers**:
```javascript
app.use(express.static('public', {
  maxAge: '1d',
  etag: true
}));
```

2. **Implement database connection pooling**
3. **Add response compression**

## 9. Testing

### Step 1: Integration Testing

1. **Test widget loading** on different websites
2. **Test API endpoints** with various payloads
3. **Test error handling** and fallbacks

### Step 2: Performance Testing

1. **Load test** the API endpoints
2. **Test widget performance** on slow connections
3. **Monitor memory usage** and optimize

## 10. Documentation

### Step 1: Create Integration Guide

1. **Write comprehensive documentation**
2. **Create video tutorials**
3. **Provide code examples**

### Step 2: Set up Support System

1. **Create FAQ page**
2. **Set up contact form**
3. **Create troubleshooting guide**

## 11. Launch Checklist

### Pre-Launch
- [ ] All environment variables configured
- [ ] Database schema deployed
- [ ] Frontend deployed and tested
- [ ] Backend deployed and tested
- [ ] Widget loads correctly
- [ ] API endpoints working
- [ ] Error monitoring configured
- [ ] Analytics tracking set up
- [ ] Documentation complete
- [ ] Support system ready

### Launch Day
- [ ] Monitor error rates
- [ ] Check performance metrics
- [ ] Verify widget functionality
- [ ] Test on different browsers
- [ ] Monitor API response times
- [ ] Check database performance

### Post-Launch
- [ ] Gather user feedback
- [ ] Monitor usage patterns
- [ ] Optimize based on data
- [ ] Plan feature updates
- [ ] Scale infrastructure as needed

## 12. Maintenance

### Regular Tasks
- **Weekly**: Check error logs and performance
- **Monthly**: Update dependencies and security patches
- **Quarterly**: Review and optimize performance
- **Annually**: Plan major feature updates

### Monitoring
- **Uptime**: Use UptimeRobot or similar
- **Performance**: Monitor response times and errors
- **Usage**: Track widget installations and usage
- **Revenue**: Monitor subscription metrics

This deployment guide ensures your chat widget service is production-ready and can scale to serve multiple companies effectively. 