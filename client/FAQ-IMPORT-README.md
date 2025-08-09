# Qurius AI FAQ Import Guide

This guide explains how to import the custom Qurius AI FAQs into your database to power the chatbot on the About and Contact pages.

## 📋 Overview

The chatbot on the About and Contact pages demonstrates Qurius AI's capabilities by answering questions about:
- Company information and mission
- Product features and pricing
- Technical details and integrations
- Support and onboarding
- Security and compliance

## 📁 Files

- `custom-qurius-faqs.json` - 25 comprehensive FAQs about Qurius AI
- `import-qurius-faqs.js` - Node.js script to import FAQs into database
- `FAQ-IMPORT-README.md` - This guide

## 🚀 Quick Start

### Step 1: Create Qurius AI Company

First, create the Qurius AI company in your database through the admin interface or onboarding flow:

1. Go to `/onboarding` or admin dashboard
2. Create a company with name "Qurius AI"
3. Note the company ID (you'll need this for import)

### Step 2: Import FAQs

Run the import script with the company ID:

```bash
cd client
node import-qurius-faqs.js <company-id>
```

Example:
```bash
node import-qurius-faqs.js 123e4567-e89b-12d3-a456-426614174000
```

### Step 3: Test the Chatbot

1. Visit `/about` or `/contact` pages
2. Click the chat icon in the bottom right
3. Ask questions like:
   - "What is Qurius AI?"
   - "What are your pricing plans?"
   - "How do I get started?"
   - "Do you offer custom integrations?"

## 📊 FAQ Categories

The imported FAQs cover these topics:

### **Product Information**
- What is Qurius AI?
- Key features and capabilities
- Pricing plans and limits
- Free trial information

### **Technical Details**
- Setup and onboarding process
- Customization options
- Integration capabilities
- API access and documentation

### **Features**
- Multi-language support
- Web crawling functionality
- Analytics and reporting
- White-label options

### **Support & Business**
- Contact information
- Response times
- Training and onboarding
- Security and compliance

## 🛠 Troubleshooting

### Common Issues

**1. Company Not Found**
```bash
❌ Company not found with ID: xxx
```
- Verify the company exists in your database
- Check the company ID is correct
- Ensure the company name is exactly "Qurius AI"

**2. FAQ Import Fails**
```bash
❌ Failed to import FAQs: timeout
```
- Check your backend server is running
- Verify the BACKEND_URL environment variable
- Ensure the FAQ import endpoint is working

**3. No FAQs in Chatbot**
```bash
Chatbot says "I don't have information about that"
```
- Verify FAQs were imported successfully
- Check the company ID matches between import and chatbot
- Restart your backend server to refresh embeddings

### Manual Verification

You can verify the import worked by:

1. **Check Database**: Query the `faqs` table for Qurius AI entries
2. **Admin Dashboard**: View FAQs in the company admin panel
3. **API Test**: Call the FAQ search endpoint directly

## 🔧 Customization

### Adding More FAQs

To add more FAQs to `custom-qurius-faqs.json`:

```json
{
  "company": "Qurius AI",
  "question": "Your new question?",
  "answer": "Your detailed answer here."
}
```

Then re-run the import script.

### Modifying Existing FAQs

1. Edit `custom-qurius-faqs.json`
2. Delete existing FAQs from database (optional)
3. Re-run import script

### Using Different Company Name

If you want to use a different company name:

1. Update the `company` field in `custom-qurius-faqs.json`
2. Update the `companyData.name` in About.tsx and Contact.tsx
3. Create the company with the new name
4. Run the import script

## 📈 Benefits

Having the chatbot on About/Contact pages:

✅ **Demonstrates Product**: Shows Qurius AI in action
✅ **Reduces Support Load**: Answers common questions automatically  
✅ **Improves UX**: Instant answers instead of static FAQ sections
✅ **Builds Trust**: Visitors can interact with the actual product
✅ **Generates Leads**: Encourages visitors to try the service

## 🎯 Next Steps

After importing the FAQs:

1. **Test Thoroughly**: Try various questions to ensure good coverage
2. **Monitor Analytics**: Check which questions are asked most
3. **Refine Answers**: Update FAQs based on user feedback
4. **Add More Content**: Expand FAQs as your product evolves
5. **Train Team**: Ensure support team knows about the chatbot

## 📞 Support

If you encounter issues:

1. Check the console logs for detailed error messages
2. Verify your backend server is running and accessible
3. Ensure your database connection is working
4. Contact the development team with specific error details

---

**Happy chatting! 🤖✨** 