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
- `import-qurius-faqs.js` - Node.js script to import FAQs with embeddings into database
- `FAQ-IMPORT-README.md` - This guide

## 🚀 Quick Start

### Step 1: Environment Setup

Ensure you have the required environment variables in your `.env` file:

```bash
SUPABASE_PROJECT_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
JINA_API_KEY=your_jina_api_key
```

### Step 2: Create Qurius AI Company

First, create the Qurius AI company in your database through the admin interface or onboarding flow:

1. Go to `/onboarding` or admin dashboard
2. Create a company with name "Qurius AI"
3. Note the company ID (you'll need this for import)

### Step 3: Import FAQs with Embeddings

Run the import script with the company ID:

```bash
cd server
node import-qurius-faqs.js <company-id>
```

Example:
```bash
node import-qurius-faqs.js 123e4567-e89b-12d3-a456-426614174000
```

**What the script does:**
- Reads the FAQ JSON file
- Generates embeddings for each question and answer using Jina AI
- Inserts FAQs directly into the `public.faqs` table
- Includes all required fields: company_id, company_name, question, answer, embeddings, etc.

### Step 4: Test the Chatbot

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

**1. Missing Environment Variables**
```bash
❌ Missing required environment variables:
   - SUPABASE_PROJECT_URL
   - SUPABASE_SERVICE_ROLE_KEY
   - JINA_API_KEY
```
- Ensure all environment variables are set in your `.env` file
- Verify the JINA_API_KEY is valid for embedding generation

**2. Company Not Found**
```bash
⚠️  Qurius AI company not found in database
```
- Verify the company exists in your database
- Check the company name is exactly "Qurius AI"
- Create the company first through the admin interface

**3. Embedding Generation Fails**
```bash
❌ Error generating embeddings: API error
```
- Check your JINA_API_KEY is valid
- Verify internet connection for API calls
- The script will continue with other FAQs if one fails

**4. Database Insertion Fails**
```bash
❌ Error importing FAQs: database error
```
- Verify your Supabase credentials are correct
- Check the `public.faqs` table exists and has the correct structure
- Ensure the service role has INSERT permissions

## 🔧 Technical Details

### Database Schema

The FAQs are inserted into the `public.faqs` table with this structure:

```sql
CREATE TABLE public.faqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES public.companies(id),
    company_name TEXT NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    question_embedding extensions.vector(768),
    answer_embedding extensions.vector(768),
    source VARCHAR(20) DEFAULT 'manual',
    confidence REAL DEFAULT 1.0,
    relevance_score REAL DEFAULT 1.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### Embedding Generation

- Uses Jina AI's embedding model (`jina-embeddings-v2-base-en`)
- Generates separate embeddings for questions and answers
- 768-dimensional vectors for semantic search
- Includes rate limiting protection (100ms delay between requests)

### Import Process

1. **Validation**: Checks environment variables and FAQ file format
2. **Company Lookup**: Finds the Qurius AI company in the database
3. **Embedding Generation**: Creates embeddings for each FAQ
4. **Database Insertion**: Inserts all FAQs with embeddings in a single batch
5. **Verification**: Shows sample imported FAQs for confirmation

## 🎯 Benefits

- **Semantic Search**: FAQs can be found even with different wordings
- **Better Accuracy**: AI can match questions to relevant answers
- **Performance**: Pre-computed embeddings for fast responses
- **Comprehensive Coverage**: 25 detailed FAQs covering all aspects of Qurius AI 