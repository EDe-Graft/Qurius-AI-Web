# Google Translate API Setup Guide

## 🚨 Current Issue

You're getting a 403 Forbidden error when trying to use Google Translate API. This guide will help you fix this issue.

## 🔧 Quick Fix Options

### Option 1: Disable Translation (Recommended for Development)

If you don't need translation features right now, the app will automatically fall back to English and use fallback translations for common phrases.

**No action needed** - the app will work without Google Translate API.

### Option 2: Set Up Google Translate API

If you want full translation support, follow these steps:

## 📋 Google Translate API Setup

### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable billing for the project (required for API usage)

### Step 2: Enable Google Translate API

1. Go to [Google Cloud Console APIs](https://console.cloud.google.com/apis)
2. Search for "Cloud Translation API"
3. Click "Enable"

### Step 3: Create API Key

1. Go to [Credentials](https://console.cloud.google.com/apis/credentials)
2. Click "Create Credentials" → "API Key"
3. Copy the generated API key

### Step 4: Restrict API Key (Recommended)

1. Click on the created API key
2. Under "Application restrictions", select "HTTP referrers" or "IP addresses"
3. Under "API restrictions", select "Restrict key" and choose "Cloud Translation API"
4. Click "Save"

### Step 5: Add to Environment Variables

Add the API key to your `.env` file:

```bash
# Add this to your server/.env file
GOOGLE_API_KEY=your_actual_api_key_here
```

### Step 6: Test the API

Restart your server and test the translation:

```bash
# Test the API endpoint
curl http://localhost:3000/api/translate/api-key
```

## 🛠 Troubleshooting

### 403 Forbidden Error

**Common causes:**
- API key not enabled for Google Translate API
- Billing not enabled for the project
- API key restrictions too strict
- API quotas exceeded

**Solutions:**
1. **Check API enablement**: Ensure "Cloud Translation API" is enabled
2. **Enable billing**: Google Translate API requires billing to be enabled
3. **Check API key restrictions**: Make sure the key allows Google Translate API
4. **Check quotas**: Visit [Google Cloud Console Quotas](https://console.cloud.google.com/apis/api/translate.googleapis.com/quotas)

### 400 Bad Request Error

**Common causes:**
- Invalid API key format
- Malformed request

**Solutions:**
1. Verify API key starts with "AIza"
2. Check request format in browser console

### 429 Rate Limit Exceeded

**Solutions:**
1. Wait a few minutes and try again
2. Check your quota usage in Google Cloud Console
3. Consider upgrading your quota limits

## 🔍 Debugging Steps

### Check Current Configuration

1. **Verify environment variable**:
   ```bash
   echo $GOOGLE_API_KEY
   ```

2. **Test API endpoint**:
   ```bash
   curl http://localhost:3000/api/translate/api-key
   ```

3. **Check browser console** for detailed error messages

### Monitor API Usage

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to "APIs & Services" → "Dashboard"
3. Select "Cloud Translation API"
4. Check "Quotas" and "Metrics" tabs

## 💡 Alternative Solutions

### Option 1: Use Fallback Translations Only

The app already includes fallback translations for common phrases. You can disable Google Translate entirely by not setting the `GOOGLE_API_KEY`.

### Option 2: Use a Different Translation Service

You could replace Google Translate with:
- Microsoft Translator
- DeepL API
- LibreTranslate (self-hosted)

### Option 3: Implement Local Translation

For basic translation needs, you could implement a simple translation dictionary for common phrases.

## 🎯 Next Steps

1. **For development**: Skip Google Translate setup - the app works fine without it
2. **For production**: Set up Google Translate API following the steps above
3. **For testing**: Use the fallback translations that are already implemented

## 📞 Support

If you continue having issues:

1. Check the Google Cloud Console for detailed error messages
2. Verify your billing is enabled
3. Ensure the API key has the correct permissions
4. Check the browser console for specific error details

---

**Note**: The app will continue to work normally even without Google Translate API. Users will see English responses and fallback translations for common phrases. 