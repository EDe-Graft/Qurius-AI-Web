# Production Deployment Guide

## Frontend (Vercel)
### Environment Variables to Set:
```
VITE_BACKEND_URL=https://your-backend.onrender.com
VITE_SUPABASE_PROJECT_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
VITE_OPENAI_API_KEY=your-openai-api-key
VITE_JINA_API_KEY=your-jina-api-key
```

### Steps:
1. Connect your GitHub repo to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Backend (Render)
### Environment Variables to Set:
```
SUPABASE_PROJECT_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
OPENAI_API_KEY=your-openai-api-key
JINA_API_KEY=your-jina-api-key
ALLOWED_ORIGINS=https://your-frontend.vercel.app

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_... # Your Stripe secret key
STRIPE_WEBHOOK_SECRET=whsec_... # Webhook endpoint secret
STRIPE_STARTER_PRICE_ID=price_... # Starter plan price ID
STRIPE_PRO_PRICE_ID=price_... # Pro plan price ID
FRONTEND_URL=https://your-frontend.vercel.app
```

### Steps:
1. Connect your GitHub repo to Render
2. Set environment variables in Render dashboard
3. Configure build command: `npm install && npm start`
4. Set start command: `node server.js`

## Stripe Setup (Required for Payments)

### 1. Create Stripe Account
- Sign up at [stripe.com](https://stripe.com)
- Get your API keys from the dashboard

### 2. Create Products & Prices
```bash
# In Stripe Dashboard or via API:
# Starter Plan: $29/month
# Pro Plan: $99/month
```

### 3. Set Up Webhooks
- Go to Stripe Dashboard → Webhooks
- Add endpoint: `https://your-backend.onrender.com/api/payments/webhook`
- Select events:
  - `checkout.session.completed`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
- Copy the webhook secret to your environment variables

### 4. Update Database Schema
Run these SQL commands in your Supabase SQL editor:

```sql
-- Add subscription columns to companies table
ALTER TABLE public.companies 
ADD COLUMN IF NOT EXISTS plan TEXT DEFAULT 'free',
ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT,
ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT,
ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'active',
ADD COLUMN IF NOT EXISTS subscription_end_date TIMESTAMP WITH TIME ZONE;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_companies_plan ON companies(plan);
CREATE INDEX IF NOT EXISTS idx_companies_stripe_customer_id ON companies(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_companies_subscription_status ON companies(subscription_status);
```

## Critical Production Checklist

### ✅ Security
- [ ] All API keys are set as environment variables
- [ ] CORS is configured for your frontend domain
- [ ] Supabase RLS policies are enabled
- [ ] No hardcoded secrets in code
- [ ] Stripe webhook signature verification enabled
- [ ] HTTPS enforced on all endpoints

### ✅ Performance
- [ ] Database indexes are created
- [ ] Rate limiting is configured
- [ ] CDN is set up for static assets
- [ ] Monitoring is enabled

### ✅ Monitoring
- [ ] Error tracking (Sentry, etc.)
- [ ] Performance monitoring
- [ ] Uptime monitoring
- [ ] Stripe webhook monitoring

### ✅ Domain & SSL
- [ ] Custom domain configured
- [ ] SSL certificates are valid
- [ ] DNS records are correct
- [ ] Redirects are working

### ✅ Payment Testing
- [ ] Test Stripe checkout flow
- [ ] Verify webhook processing
- [ ] Test subscription management
- [ ] Confirm payment success/failure handling

## Testing Your Production Setup

### Test Widget Integration:
1. Visit your deployed frontend
2. Go to `/demo` route
3. Test the chat widget functionality
4. Verify theme customization works
5. Check analytics tracking

### Test Admin Dashboard:
1. Login to admin panel
2. Create a test company
3. Import FAQs
4. Check analytics dashboard
5. Test company management features

### Test Payment Flow:
1. Select a paid plan on landing page
2. Complete onboarding process
3. Verify Stripe checkout redirects
4. Test successful payment flow
5. Check subscription status updates

### Test API Endpoints:
```bash
# Health check
curl https://your-backend.onrender.com/api/health

# Widget config
curl https://your-backend.onrender.com/api/widget-config

# Test payment endpoint (with valid data)
curl -X POST https://your-backend.onrender.com/api/payments/create-checkout-session \
  -H "Content-Type: application/json" \
  -d '{"companyId":"test","planId":"starter","customerEmail":"test@example.com","companyName":"Test Co"}'
```

## Troubleshooting

### Common Issues:
1. **CORS errors**: Check `ALLOWED_ORIGINS` environment variable
2. **Database connection**: Verify Supabase credentials
3. **Stripe errors**: Check API keys and webhook configuration
4. **Build failures**: Ensure all dependencies are installed

### Monitoring:
- Check Render logs for backend errors
- Monitor Stripe dashboard for payment issues
- Use Supabase logs for database problems
- Set up alerts for critical failures

## Next Steps After Deployment

1. **Set up monitoring** (Sentry, LogRocket, etc.)
2. **Configure backups** for database
3. **Set up CI/CD** for automated deployments
4. **Create support documentation** for customers
5. **Plan scaling strategy** as you grow

## Support & Maintenance

### Regular Tasks:
- Monitor Stripe webhook failures
- Check subscription status updates
- Review analytics data
- Update dependencies regularly
- Backup database weekly

### Emergency Contacts:
- Stripe Support: [support.stripe.com](https://support.stripe.com)
- Render Support: [render.com/support](https://render.com/support)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Supabase Support: [supabase.com/support](https://supabase.com/support) 