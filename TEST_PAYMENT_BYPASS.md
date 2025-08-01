# 🧪 Test Payment Bypass System

This system allows you to test the post-payment admin authentication flow without going through Stripe payment processing.

## 🚀 How to Use

### 1. Access the Test Page
Navigate to: `https://your-vercel-domain.vercel.app/test-payment-bypass`

### 2. Fill Out the Form
- **Company Name**: Enter any company name
- **Admin Email**: Use a real email you can access
- **Plan**: Select any plan (Free/Starter/Pro)
- **Other Fields**: Fill in industry, website, description

### 3. Submit the Form
This will:
1. ✅ Create a company in the database
2. ✅ Create a Supabase admin user account
3. ✅ Send a password reset email to your email
4. ✅ Store test data in sessionStorage

### 4. Check Your Email
You'll receive a password reset email from Supabase with a link to set your password.

### 5. Set Password & Login
1. Click the password reset link in your email
2. Set a new password
3. Go to `/login` and sign in with your email and password
4. You'll be redirected to the Company Admin dashboard

## 🔧 What Gets Created

### Database Records
- **Company**: Full company record with `admin_email` field
- **Supabase User**: Admin user with company metadata
- **Analytics**: Empty analytics records for the company

### User Metadata
```json
{
  "role": "company_admin",
  "company_name": "Your Company Name",
  "company_id": "uuid-here"
}
```

## 🎯 Testing Scenarios

### Company Admin Access
- ✅ Can only see their own company data
- ✅ Can manage their own FAQs
- ✅ Can view their own analytics
- ✅ Can copy integration code

### Super Admin Access
- ✅ You can still access with `admin@qurius.ai` / `admin123`
- ✅ Can see all companies
- ✅ Can manage all FAQs
- ✅ Can view system-wide analytics

## 🧹 Cleanup

### Remove Test Data
```sql
-- Remove test company (will cascade to FAQs and analytics)
DELETE FROM companies WHERE name LIKE 'Test%';

-- Remove test user from Supabase Auth
-- (Do this through Supabase Dashboard)
```

### Clear Session Storage
```javascript
sessionStorage.removeItem('testCompanyData');
```

## 🔒 Security Notes

- **Development Only**: This bypass should only be used in development
- **Real Emails**: Use real email addresses to test password reset
- **Cleanup**: Remove test data after testing
- **Production**: Disable these endpoints in production

## 🐛 Troubleshooting

### Email Not Received
- Check spam folder
- Verify email address is correct
- Check Supabase Auth settings

### Login Issues
- Ensure password was set via reset link
- Check browser console for errors
- Verify company admin check is working

### Database Issues
- Check Supabase connection
- Verify `admin_email` column exists
- Check RLS policies

## 📝 API Endpoints

### `/api/test/create-company`
Creates a company record with admin email

### `/api/test/create-admin-user`
Creates Supabase user with company metadata

### `/api/test/send-welcome-email`
Sends password reset email via Supabase Auth

## 🎉 Success Indicators

- ✅ Company appears in database
- ✅ User appears in Supabase Auth
- ✅ Password reset email received
- ✅ Can login and access admin dashboard
- ✅ Only sees own company data (company admin)
- ✅ Can see all companies (super admin) 