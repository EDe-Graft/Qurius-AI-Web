# Email Setup Guide

## Overview
This setup uses:
- **Supabase Auth** for password reset emails (built-in)
- **React Email + Resend** for custom welcome emails

## Setup Steps

### 1. Get Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add to your `.env` file:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

### 2. Verify Your Domain (Optional but Recommended)
1. In Resend dashboard, add and verify your domain
2. Update the `from` address in `server/config/resend.js`:
   ```javascript
   from: 'Qurius AI <noreply@yourdomain.com>',
   ```

### 3. Test the Setup
The welcome email will now be sent automatically when:
- A new company is created
- A Stripe payment is completed
- A test company is created

## Files Created/Modified

### New Files:
- `server/emailTemplates.js` - React Email template
- `server/config/resend.js` - Resend configuration

### Modified Files:
- `server/utils.js` - Updated `sendWelcomeEmail` function

## How It Works

1. **Welcome Email**: Uses React Email to convert your React component to HTML, then sends via Resend
2. **Password Reset**: Uses Supabase Auth (unchanged)

## Environment Variables Needed

Add to your `.env` file:
```
RESEND_API_KEY=your_resend_api_key
FRONTEND_URL=https://qurius-ai.vercel.app
```

## Testing

To test the email setup:
1. Create a test company through your admin panel
2. Check the server logs for email sending confirmation
3. Check the recipient's email inbox

## Troubleshooting

- **"Invalid API key"**: Check your Resend API key
- **"Domain not verified"**: Use a verified domain or Resend's default domain
- **"Email not received"**: Check spam folder and Resend dashboard for delivery status 