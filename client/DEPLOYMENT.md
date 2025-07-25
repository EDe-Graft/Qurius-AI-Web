# 🚀 Deployment Guide for Qurius-AI

## 📋 Pre-Deployment Checklist

### ✅ Environment Setup
- [ ] Set up production environment variables
- [ ] Configure Supabase production project
- [ ] Set up Jina API keys for production
- [ ] Configure CORS settings

### ✅ Security Configuration
- [ ] Move API keys to backend
- [ ] Implement rate limiting
- [ ] Set up proper CORS headers
- [ ] Configure RLS policies for production

### ✅ Performance Optimization
- [ ] Set up CDN for static assets
- [ ] Configure caching headers
- [ ] Optimize bundle size
- [ ] Set up monitoring

## 🏗️ Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 2: Netlify
```bash
# Build the project
npm run build:all

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Option 3: AWS S3 + CloudFront
```bash
# Build
npm run build:all

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name

# Configure CloudFront for CDN
```

## 🔧 Environment Variables

### Production .env
```env
# Supabase
VITE_SUPABASE_PROJECT_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Jina AI
VITE_JINA_API_URL=https://api.jina.ai/v1/embeddings
VITE_JINA_API_KEY=your-jina-api-key

# OpenRouter (if using)
VITE_OPEN_ROUTER_URL=https://openrouter.ai/api/v1
VITE_OPEN_ROUTER_API_KEY=your-openrouter-key
```

## 🌐 Embedding Instructions

### For Companies
```html
<!-- Add this to your website -->
<script src="https://your-domain.com/embed.js" 
        data-company="Your Company Name" 
        data-theme="light">
</script>
```

### Manual Initialization
```javascript
// Initialize widget manually
QuriusAI.init('Your Company Name', {
  theme: 'light',
  position: 'bottom-right'
});

// Show/hide widget
QuriusAI.show();
QuriusAI.hide();
```

## 🔒 Security Considerations

### API Key Security
- Move sensitive API calls to backend
- Use environment variables for all keys
- Implement proper CORS policies
- Set up rate limiting

### Database Security
- Configure RLS policies properly
- Use service role key only for admin operations
- Implement proper user authentication
- Set up database backups

## 📊 Monitoring & Analytics

### Recommended Tools
- **Vercel Analytics**: Built-in performance monitoring
- **Sentry**: Error tracking and performance monitoring
- **Google Analytics**: User behavior tracking
- **Supabase Dashboard**: Database monitoring

## 🚀 Next Steps

### Phase 1: Basic Deployment
1. Set up production environment
2. Deploy to Vercel/Netlify
3. Test widget embedding
4. Configure custom domain

### Phase 2: Production Features
1. Implement backend API for security
2. Add rate limiting and monitoring
3. Set up CDN and caching
4. Add analytics and tracking

### Phase 3: Scaling
1. Implement multi-region deployment
2. Add load balancing
3. Set up auto-scaling
4. Implement advanced monitoring

## 🆘 Troubleshooting

### Common Issues
- **CORS errors**: Configure proper CORS headers
- **API key exposure**: Move to backend
- **Widget not loading**: Check script URLs
- **Database connection**: Verify Supabase configuration

### Support
- Check Supabase documentation
- Review Vercel/Netlify deployment guides
- Contact support for platform-specific issues 