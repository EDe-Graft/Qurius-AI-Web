import axios from 'axios';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { toTitleCase } from './helper.js';
import { WelcomeEmailTemplate, MessageLimitReachedEmailTemplate } from './emailTemplates.js';
import { sendEmail } from './config/resend.js';

//getEmbedding from Jina AI
export async function getEmbedding(question, answer) {
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
  
  return {
    questionEmbedding: response.data.data[0].embedding,
    answerEmbedding: response.data.data[1].embedding
  }
}


// Helper function to ensure response ends with complete sentences
function ensureCompleteSentences(text, maxLength = 500) {
  if (!text || text.length <= maxLength) {
    return text;
  }
  
  // Truncate to max length
  let truncated = text.substring(0, maxLength);
  
  // Find the last complete sentence
  const sentenceEndings = ['.', '!', '?', ':', ';', '...', '•', '—'];
  let lastCompleteIndex = -1;
  
  for (const ending of sentenceEndings) {
    const lastIndex = truncated.lastIndexOf(ending);
    if (lastIndex > lastCompleteIndex) {
      lastCompleteIndex = lastIndex;
    }
  }
  
  // If we found a sentence ending, truncate there
  if (lastCompleteIndex > 0) {
    return truncated.substring(0, lastCompleteIndex + 1);
  }
  
  // If no sentence ending found, try to find the last complete word
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex);
  }
  
  // Fallback: return truncated text as-is
  return truncated;
}

// Helper function to generate intelligent fallback responses for small sites
function generateFallbackResponse(userQuestion, companyData, contentQuality) {
  const question = userQuestion.toLowerCase();
  const companyName = companyData?.name || 'our company';
  const website = companyData?.website || '';
  const contactEmail = companyData?.contact_email || 'support@company.com';

  // Add content improvement suggestion for very low quality
  const improvementNote = contentQuality.quality === 'very_low' ? 
    `\n\n💡 **Tip**: To improve my ability to help you, consider adding more content about your services, policies, and frequently asked questions through the admin dashboard.` : '';

  // Common question patterns and their fallback responses
  const fallbackPatterns = [
    {
      patterns: ['contact', 'email', 'phone', 'call', 'reach', 'get in touch'],
      response: `I'd be happy to help you get in touch with ${companyName}! You can:

• [Contact Us](mailto:${contactEmail}) for immediate assistance
• [Visit Our Contact Page](${website}/contact) for more options
• [Check Our Support Page](${website}/support) for additional help

What specific information are you looking for? I can direct you to the right person or resource.

Is there anything specific about ${companyName} you'd like to learn more about?${improvementNote}`
    },
    {
      patterns: ['return', 'refund', 'exchange', 'policy'],
      response: `I don't have specific return policy information yet, but I can help you get the details you need:

• [Contact Support](mailto:${contactEmail}) for immediate assistance with returns
• [Visit Our FAQ Page](${website}/faq) for general information
• [Check Our Policies Page](${website}/policies) for detailed terms

Would you like me to help you with anything else, or would you prefer to speak with our support team?

What other questions do you have about our services?${improvementNote}`
    },
    {
      patterns: ['price', 'cost', 'fee', 'charge', 'pricing'],
      response: `I don't have specific pricing information available yet, but I can help you get the details:

• [Contact Sales](mailto:${contactEmail}) for pricing information
• [Visit Our Pricing Page](${website}/pricing) for current rates
• [Request a Quote](${website}/quote) for custom pricing

What specific service or product are you interested in? I can direct you to the right person.

Have you explored our services page to see what we offer?${improvementNote}`
    },
    {
      patterns: ['shipping', 'delivery', 'shipping policy', 'delivery time'],
      response: `I don't have specific shipping information yet, but I can help you get the details:

• [Contact Support](mailto:${contactEmail}) for shipping questions
• [Visit Our Shipping Page](${website}/shipping) for policies
• [Check Our FAQ Page](${website}/faq) for general information

Would you like me to help you with anything else?

What products or services are you most interested in learning about?${improvementNote}`
    },
    {
      patterns: ['about', 'company', 'who', 'what', 'business'],
      response: `I'm here to help with ${companyName}! While I'm still learning about our specific services, I can:

• [Visit Our About Page](${website}/about) to learn more about us
• [Contact Us](mailto:${contactEmail}) for specific questions
• [Check Our Services Page](${website}/services) for what we offer

What would you like to know about ${companyName}?

Is there a particular aspect of our business that interests you most?${improvementNote}`
    },
    {
      patterns: ['help', 'support', 'assistance', 'problem', 'issue'],
      response: `I'm here to help! While I'm still learning about ${companyName}'s specific information, I can:

• [Contact Support](mailto:${contactEmail}) for immediate assistance
• [Visit Our Support Page](${website}/support) for help resources
• [Check Our FAQ Page](${website}/faq) for common questions

What specific help do you need? I'll do my best to assist or connect you with the right person.

What brought you to ${companyName} today?${improvementNote}`
    }
  ];

  // Find matching pattern
  for (const pattern of fallbackPatterns) {
    if (pattern.patterns.some(p => question.includes(p))) {
      return pattern.response;
    }
  }

  // Default fallback response
  return `I don't have specific information about that yet, but I'm here to help! You can:

• [Contact Support](mailto:${contactEmail}) for immediate assistance
• [Visit Our Website](${website}) for more information
• [Check Our FAQ Page](${website}/faq) for common questions

What specific information are you looking for? I can help direct you to the right resource or person.

What interests you most about ${companyName}?${improvementNote}`;
}

// Helper function to assess content quality and provide recommendations
function assessContentQuality(retrievedContext, companyData) {
  const assessment = {
    quality: 'unknown',
    score: 0,
    contentCount: 0,
    faqCount: 0,
    contentTypes: [],
    missingTopics: [],
    recommendations: []
  };

  if (!retrievedContext || retrievedContext.length === 0) {
    assessment.quality = 'very_low';
    assessment.score = 0;
    assessment.recommendations = [
      'Add FAQ content through the admin interface',
      'Use the website crawler to extract content from your site',
      'Upload documents (PDFs, Word docs) for content processing',
      'Add contact information and basic company details'
    ];
    return assessment;
  }

  // Count content types
  const contentItems = retrievedContext.filter(ctx => ctx.type === 'content');
  const faqItems = retrievedContext.filter(ctx => ctx.type === 'faq');
  
  assessment.contentCount = contentItems.length;
  assessment.faqCount = faqItems.length;
  assessment.contentTypes = [...new Set(contentItems.map(ctx => ctx.content_type))];

  // Calculate quality score (0-100)
  let score = 0;
  
  // Base score from content quantity
  if (assessment.contentCount > 0) score += 20;
  if (assessment.faqCount > 0) score += 30;
  if (assessment.contentCount > 5) score += 20;
  if (assessment.faqCount > 3) score += 20;
  if (assessment.contentTypes.length > 2) score += 10;

  assessment.score = Math.min(100, score);

  // Determine quality level
  if (assessment.score >= 80) assessment.quality = 'excellent';
  else if (assessment.score >= 60) assessment.quality = 'good';
  else if (assessment.score >= 40) assessment.quality = 'fair';
  else if (assessment.score >= 20) assessment.quality = 'poor';
  else assessment.quality = 'very_low';

  // Identify missing topics
  const commonTopics = [
    'contact', 'support', 'help', 'about', 'services', 'products', 
    'pricing', 'faq', 'returns', 'shipping', 'privacy', 'terms'
  ];

  const contentText = retrievedContext
    .map(ctx => ctx.type === 'faq' ? `${ctx.question} ${ctx.answer}` : ctx.content)
    .join(' ')
    .toLowerCase();

  assessment.missingTopics = commonTopics.filter(topic => 
    !contentText.includes(topic)
  );

  // Generate recommendations based on quality
  if (assessment.quality === 'very_low' || assessment.quality === 'poor') {
    assessment.recommendations = [
      'Add FAQ content through the admin interface',
      'Use the website crawler to extract content from your site',
      'Upload documents (PDFs, Word docs) for content processing',
      'Add contact information and basic company details'
    ];
  } else if (assessment.quality === 'fair') {
    assessment.recommendations = [
      'Add more FAQ content for common customer questions',
      'Crawl additional pages from your website',
      'Consider adding content about: ' + assessment.missingTopics.slice(0, 3).join(', ')
    ];
  } else if (assessment.quality === 'good') {
    assessment.recommendations = [
      'Add content about: ' + assessment.missingTopics.slice(0, 2).join(', '),
      'Consider adding more specific product/service information'
    ];
  } else {
    assessment.recommendations = [
      'Your content is excellent! Consider adding seasonal or promotional content',
      'Keep content updated as your business evolves'
    ];
  }

  return assessment;
}

// Helper function to remove duplicate links from AI responses
function removeDuplicateLinks(response) {
  if (!response || typeof response !== 'string') {
    return response;
  }

  console.log('🔍 Starting duplicate link removal for response:', response.substring(0, 200) + '...');

  // Find all markdown links in the response
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links = [];
  const seenUrls = new Set();
  let match;
  
  // Collect all links
  while ((match = linkRegex.exec(response)) !== null) {
    links.push({
      fullMatch: match[0],
      text: match[1],
      url: match[2],
      index: match.index
    });
  }

  console.log('🔗 Found links:', links.map(l => ({ text: l.text, url: l.url })));

  // If no duplicates found, return original response
  if (links.length <= 1) {
    console.log('✅ No duplicates found, returning original response');
    return response;
  }

  // Remove duplicate URLs, keeping the first occurrence
  let processedResponse = response;
  const duplicatesToRemove = [];

  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (seenUrls.has(link.url)) {
      duplicatesToRemove.push(link);
      console.log('🚫 Marking duplicate for removal:', link.url);
    } else {
      seenUrls.add(link.url);
      console.log('✅ Keeping first occurrence:', link.url);
    }
  }

  console.log('🗑️ Duplicates to remove:', duplicatesToRemove.length);

  // Remove duplicates from the response (in reverse order to maintain indices)
  duplicatesToRemove.reverse().forEach(link => {
    processedResponse = processedResponse.substring(0, link.index) + 
                       processedResponse.substring(link.index + link.fullMatch.length);
  });

  console.log('✅ Duplicate removal complete. Original length:', response.length, 'New length:', processedResponse.length);
  return processedResponse;
}

// Helper function to enhance AI responses with better link formatting
function enhanceResponseWithLinks(response, retrievedContext) {
  if (!response || !retrievedContext || retrievedContext.length === 0) {
    return response;
  }

  console.log('🔧 Starting link enhancement for response:', response.substring(0, 200) + '...');

  // Check if response mentions information but doesn't include links
  const hasContentReferences = retrievedContext.some(context => 
    context.type === 'content' && context.source_url
  );

  if (hasContentReferences) {
    // Look for content that was referenced but not linked
    const contentWithUrls = retrievedContext.filter(context => 
      context.type === 'content' && context.source_url
    );

    console.log('📄 Content with URLs found:', contentWithUrls.map(c => c.source_url));

    // STEP 1: Enhance existing links in the response with section information
    let enhancedResponse = response;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    
    while ((match = linkRegex.exec(response)) !== null) {
      const fullMatch = match[0];
      const linkText = match[1];
      const linkUrl = match[2];
      
      // Find matching content with section information
      const matchingContent = contentWithUrls.find(context => 
        context.source_url === linkUrl && context.anchor_link
      );
      
      if (matchingContent && matchingContent.anchor_link) {
        const enhancedUrl = `${linkUrl}${matchingContent.anchor_link}`;
        const enhancedLink = `[${linkText}](${enhancedUrl})`;
        
        console.log(`🔗 Enhancing existing link: ${fullMatch} → ${enhancedLink}`);
        enhancedResponse = enhancedResponse.replace(fullMatch, enhancedLink);
      }
    }

    // STEP 2: Add related pages section if no links exist
    if (!response.includes('[') && !response.includes('http')) {
      // Deduplicate URLs from retrievedContext before processing
      const uniqueUrls = [];
      const seenUrls = new Set();
      
      contentWithUrls.forEach(context => {
        if (!seenUrls.has(context.source_url)) {
          seenUrls.add(context.source_url);
          uniqueUrls.push(context);
        }
      });

      console.log('🆔 Unique URLs after deduplication:', uniqueUrls.map(u => u.source_url));

      const relevantUrls = uniqueUrls.slice(0, 2); // Limit to 2 most relevant
      if (relevantUrls.length > 0) {
        // Check for existing links to avoid duplicates
        const existingUrls = new Set();
        const existingLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let existingMatch;
        while ((existingMatch = existingLinkRegex.exec(enhancedResponse)) !== null) {
          existingUrls.add(existingMatch[2]);
        }

        console.log('🔗 Existing URLs in response:', Array.from(existingUrls));

        // Only add links that aren't already present
        const newUrls = relevantUrls.filter(context => !existingUrls.has(context.source_url));
        
        console.log('🆕 New URLs to add:', newUrls.map(u => u.source_url));

        if (newUrls.length > 0) {
          const linkSection = '\n\n**Related Pages:**\n' + 
            newUrls.map(context => {
              // Use section text if available, otherwise use page name
              const pageName = context.section_text || context.source_url.split('/').pop() || 'Learn More';
              // Include anchor link if available
              const fullUrl = context.anchor_link ? `${context.source_url}${context.anchor_link}` : context.source_url;
              return `- [${pageName}](${fullUrl})`;
            }).join('\n');
          
          console.log('📝 Adding link section:', linkSection);
          return enhancedResponse + linkSection;
        }
      }
    }

    return enhancedResponse;
  }

  console.log('✅ No link enhancement needed');
  return response;
}


// Get AI response using OpenAI
export async function getAIResponse({companyName, companyWebsite, customerSupportEmail, messageHistory, retrievedContext = []}) {
  const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
  const API_KEY = process.env.OPEN_ROUTER_API_KEY;
  const model = 'deepseek/deepseek-chat-v3.1:free';
  
  // Assess content quality
  const companyData = { name: companyName, website: companyWebsite, contact_email: customerSupportEmail };
  const contentQuality = assessContentQuality(retrievedContext, companyData);
  
  console.log('📊 Content quality assessment:', {
    quality: contentQuality.quality,
    score: contentQuality.score,
    contentCount: contentQuality.contentCount,
    faqCount: contentQuality.faqCount,
    missingTopics: contentQuality.missingTopics.length
  });

  // If content quality is very low and no context, use fallback response
  if (contentQuality.quality === 'very_low' && retrievedContext.length === 0) {
    const lastMessage = messageHistory[messageHistory.length - 1];
    if (lastMessage && lastMessage.role === 'user') {
      const fallbackResponse = generateFallbackResponse(lastMessage.content, companyData, contentQuality);
      console.log('🔄 Using fallback response for very low content quality');
      return fallbackResponse;
    }
  }
  
  // Build context-aware system prompt with lead generation
  let systemPrompt = `You are a helpful customer service assistant for ${companyName}. Provide accurate, helpful, and professional responses to customer questions. Keep responses concise and friendly.

IMPORTANT CAPABILITY CONSTRAINTS:
- You CANNOT send emails, make phone calls, or perform actions outside this chat
- You CAN provide information, answer questions, and suggest next steps
- You CAN direct users to contact support or visit specific pages
- If asked to perform an action you cannot do, politely explain your limitations and suggest alternatives
- Never claim you can send emails, make calls, or perform external actions

RESPONSE GUIDELINES:
- Keep responses natural and engaging
- Be direct and actionable
- Always include relevant links when available
- If you don't know something, say so and suggest contacting support
- CRITICAL: ALWAYS end with a relevant follow-up question to engage the customer further and convert them into a lead

LINK REQUIREMENTS:
- When referencing information from the company website, ALWAYS include the source URL
- Format links as: [Page Name](URL)
- For contact info: [Contact Us](https://company.com/contact)
- For support: [Support](https://company.com/support)
- If no specific page exists, suggest contacting support at ${customerSupportEmail}
- CRITICAL: Do NOT include duplicate links - if a link is already mentioned, don't repeat it
- Each unique page should only be linked once per response
- If you've already linked a page, do NOT link it again anywhere else in your response
- Check your entire response before adding any new links to ensure no duplicates

SECTION-SPECIFIC LINKING:
- When you have section information available (section_id, section_text, anchor_link), use it to create precise links
- If content has an anchor_link, include it in the URL: [Page Name](URL#section-id)
- This helps users navigate directly to the relevant section of the page
- Example: If pricing info is in section "pricing", use: [Pricing](https://company.com/#pricing)
- Always prefer section-specific links when available for better user experience
- CRITICAL: When the context includes anchor_link information, ALWAYS use it in your links
- Do NOT create basic links when section-specific links are available
- The anchor_link format is: #section-id (e.g., #pricing, #contact, #about)
- Combine the base URL with the anchor_link: baseURL + anchor_link

CONTENT QUALITY CONTEXT:
- Current content quality: ${contentQuality.quality} (score: ${contentQuality.score}/100)
- Content items available: ${contentQuality.contentCount}
- FAQ items available: ${contentQuality.faqCount}
- Missing topics: ${contentQuality.missingTopics.slice(0, 3).join(', ')}

SMALL SITE GUIDELINES:
- If content is limited, be honest about limitations
- Always provide contact information as an alternative
- Suggest relevant pages even if specific content isn't available
- Be helpful and professional even with minimal information

IMPORTANT LEAD GENERATION GUIDELINES:
- After answering the customer's question, suggest a relevant follow-up question or next step
- Focus on converting the conversation into a lead or sale when appropriate
- Suggest product/service exploration, consultations, demos, or trials depending on the type of company
- Be persuasive but not pushy - maintain helpful and genuine tone
- Tailor suggestions based on the customer's question and context
- Include specific calls-to-action when relevant

RESPONSE STRUCTURE:
1. Answer the customer's question clearly and concisely
2. Provide relevant links and information
3. ALWAYS end with a follow-up question designed to convert the customer into a lead

EXAMPLES OF GOOD FOLLOW-UPS:
- "Would you like to schedule a consultation to discuss this further?"
- "Have you seen our [specific product/service] that might interest you?"
- "Would you like me to send you more information about [relevant topic]?"
- "Are you interested in learning about our pricing options?"
- "Would you like to book a demo to see how this works?"
- "Have you considered our [upgrade/premium] options?"
- "What specific aspect of [topic] would you like to explore further?"
- "Are you looking to get started with [service] right away?"
- "Would you like to compare our different [product/service] options?"
- "Have you thought about what [specific feature] could do for your business?"
- "What's your timeline for implementing [solution]?"
- "Would you like to speak with our [sales/support] team about [specific need]?"`;
  
  // Add retrieved context if available
  if (retrievedContext && retrievedContext.length > 0) {
    // console.log('🔍 Context being passed to AI:', retrievedContext.map(ctx => ({
    //   type: ctx.type,
    //   hasSectionInfo: !!(ctx.section_id || ctx.anchor_link),
    //   section_id: ctx.section_id,
    //   section_text: ctx.section_text,
    //   anchor_link: ctx.anchor_link,
    //   source_url: ctx.source_url
    // })));
    
    systemPrompt += `\n\nUse the following company information to answer questions:`;
    
    retrievedContext.forEach((context, index) => {
      if (context.type === 'faq') {
        systemPrompt += `\n- FAQ: ${context.question} - ${context.answer}`;
      } else if (context.type === 'content') {
        // Include source URL and section information if available
        const sourceUrl = context.source_url ? ` (Source: ${context.source_url})` : '';
        const sectionInfo = context.section_text ? ` (Section: ${context.section_text})` : '';
        const anchorInfo = context.anchor_link ? ` (Anchor: ${context.anchor_link})` : '';
        const fullUrl = context.source_url && context.anchor_link ? ` (Full URL: ${context.source_url}${context.anchor_link})` : '';
        systemPrompt += `\n- Company Information: ${context.content}${sourceUrl}${sectionInfo}${anchorInfo}${fullUrl}`;
      }
    });
    
    systemPrompt += `\n\nBase your response on the information provided above. Generate complete sentences and paragraphs only. 

IMPORTANT: 
- Always provide complete, well-formed sentences
- End responses with proper punctuation (period, exclamation mark, or question mark)
- Do not leave sentences incomplete or cut off mid-thought
- Keep responses concise but comprehensive
- After answering, suggest a relevant follow-up question or next step to engage the customer further
- When referencing information from the company website, ALWAYS include the source URL in your response
- If section information is available, include the specific section anchor link for precise navigation

LINK FORMATTING REQUIREMENTS:
- When referencing content with a source URL, format as: [Page Name](URL)
- For contact pages: [Contact Us](URL)
- For support pages: [Support](URL)
- For product pages: [Product Name](URL)
- For service pages: [Service Name](URL)
- If no specific page name is obvious, use: [Learn More](URL)
- CRITICAL: Do NOT include duplicate links - each page should only be linked once per response
- If you've already linked a page, do NOT link it again in the same response
- Before adding any link, check if that URL already exists in your response
- Each unique URL should appear only once, regardless of the link text
- If creating a "Related Pages" section, ensure each URL appears only once
- Do NOT list the same URL multiple times in Related Pages or any other section

SECTION-SPECIFIC LINK FORMATTING:
- When referencing content with section information, include the anchor link: [Section Name](URL#section-id)
- For example: [Pricing Plans](https://company.com/pricing#pricing-plans)
- Use the section text as the link text when available
- If no section text, use a descriptive name based on the content
- Always include the anchor link (#section-id) when section information is available`;
  } else {
    // Fallback to original prompt if no context
    systemPrompt += ` If you don't know something specific about the company look it up on the company website [${companyWebsite}] if available and relevant. 

IMPORTANT: When providing contact information, always format it as clickable markdown links:
- Email addresses: [support@company.com](mailto:support@company.com)
- Phone numbers: [Call us at (555) 123-4567](tel:+15551234567)
- Website links: [Visit our website](https://company.com)
- Physical addresses: [123 Main St, City, State](https://maps.google.com/?q=123+Main+St+City+State)

IMPORTANT: After answering the customer's question, suggest a relevant follow-up question or next step to engage them further. The goal is to convert the customer into a lead or sale.

If you don't find the information on the website, suggest they contact customer support at [${customerSupportEmail}].`;
  }
  
  const maxTokens = 700; // Increased to allow for comprehensive answers with follow-up questions
  const temperature = 0.5; // Balanced for creativity while maintaining consistency

  try {
    console.log('🤖 Calling OpenRouter API with:', {
      model,
      maxTokens,
      temperature,
      messageHistoryLength: messageHistory?.length || 0,
      retrievedContextLength: retrievedContext?.length || 0,
      companyName,
      customerSupportEmail
    });

    const response = await axios.post(
      API_URL,
      {
        model: model,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          ...messageHistory // Add messages history to the request
        ],
        max_tokens: maxTokens,
        temperature: temperature
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.SOURCE_URL
        }
      }
    );

    // Process the response to remove duplicate links
    const aiResponse = response.data.choices[0].message.content;
    const deduplicatedResponse = removeDuplicateLinks(aiResponse);

    console.log('✅ AI response received and processed:', {
      originalLength: aiResponse.length,
      deduplicatedLength: deduplicatedResponse.length,
      wasDeduplicated: aiResponse.length !== deduplicatedResponse.length
    });

    return deduplicatedResponse;
  } catch (error) {
    console.error('❌ OpenRouter API error details:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message,
      code: error.code,
      config: {
        url: error.config?.url,
        method: error.config?.method,
        timeout: error.config?.timeout
      }
    });
    
    // Check for specific error types
    if (error.response?.status === 401) {
      console.error('❌ OpenRouter API key is invalid or missing');
      return `I apologize, but there's a configuration issue with our AI service. Please contact our support team at [${customerSupportEmail}](mailto:${customerSupportEmail}) for assistance.`;
    } else if (error.response?.status === 429) {
      console.error('❌ OpenRouter API rate limit exceeded');
      return `I apologize, but our AI service is currently experiencing high demand. Please try again in a few moments or contact our support team at [${customerSupportEmail}](mailto:${customerSupportEmail}).`;
    } else if (error.code === 'ECONNABORTED') {
      console.error('❌ OpenRouter API request timed out');
      return `I apologize, but our AI service is taking longer than expected to respond. Please try again or contact our support team at [${customerSupportEmail}](mailto:${customerSupportEmail}).`;
    } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      console.error('❌ OpenRouter API connection failed');
      return `I apologize, but we're unable to connect to our AI service at the moment. Please try again later or contact our support team at [${customerSupportEmail}](mailto:${customerSupportEmail}).`;
    }
    
    return `I apologize, but I'm unable to provide a specific answer to your question. Please contact our customer support team for assistance at [${customerSupportEmail}](mailto:${customerSupportEmail}).`;
  }
}

// Generate FAQs from crawled content using OpenRouter AI
export async function generateFAQs(companyName, content, maxFAQs = 15) {
  const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
  const API_KEY = process.env.OPEN_ROUTER_API_KEY;
  const model = 'openai/gpt-4o-mini';
  const maxTokens = 2000; // Increased for more FAQs
  const temperature = 0.5; // Reduced for more consistent formatting

  const systemPrompt = `You are an expert FAQ generator specializing in creating customer-focused, actionable FAQs for businesses. Your task is to create ${maxFAQs} high-quality FAQ questions and answers based on the provided content about ${companyName}.

IMPORTANT: You must follow this exact format for each FAQ:
Q: [Question that ends with a question mark?]
A: [Complete answer that ends with a period.]

FOCUS AREAS (prioritize in this order):
1. **Product/Service Information**: What they offer, features, benefits, how it works
2. **Customer Support**: How to get help, contact methods, support hours
3. **Pricing & Plans**: Costs, payment methods, billing, refunds, free trials
4. **Getting Started**: How to sign up, onboarding, first steps
5. **Technical Issues**: Troubleshooting, compatibility, requirements
6. **Company Policies**: Terms of service, privacy, data handling
7. **Business Operations**: Hours, locations, availability, scheduling
8. **Account Management**: Login, password reset, profile updates

QUESTION GUIDELINES:
- Make questions natural and conversational (how customers actually ask)
- Focus on practical, actionable information
- Include both basic and advanced questions
- Cover common pain points and concerns
- Ask about specific features mentioned in the content
- Include "how to" and "what is" questions
- Consider different user personas (new users, existing customers, potential customers)

ANSWER GUIDELINES:
- Provide complete, actionable answers
- Include specific details from the content
- Mention contact information when relevant
- Be helpful and solution-oriented
- Keep answers concise but comprehensive
- Include next steps when applicable
- Reference specific features or services mentioned

QUALITY REQUIREMENTS:
1. Every question MUST end with a question mark (?)
2. Every answer MUST end with a period (.)
3. Questions should be clear, specific, and customer-focused
4. Answers should be comprehensive, helpful, and based on the content
5. Do not include any other text, comments, or formatting
6. Generate no more than ${maxFAQs} quality FAQ pairs
7. Ensure questions are relevant to the actual content provided
8. Avoid generic questions that could apply to any business
9. Prioritize questions that customers would actually ask
10. Make sure answers provide real value and actionable information`;

  const userPrompt = `Based on this content about ${companyName}, generate ${maxFAQs} FAQ questions and answers:

${content.substring(0, 3000)}

ANALYSIS INSTRUCTIONS:
1. First, identify the key products, services, and features mentioned in the content
2. Look for contact information, pricing details, and business hours
3. Identify common customer pain points or concerns that might arise
4. Find specific technical requirements or compatibility information
5. Note any unique selling points or special features

GENERATION INSTRUCTIONS:
- Create questions that real customers would ask about ${companyName}
- Base answers directly on the information provided in the content
- Include specific details, names, and information from the content
- Make questions natural and conversational
- Ensure answers are actionable and helpful

Remember: Each FAQ must follow the exact format:
Q: [Question?]
A: [Answer.]`;

  try {
    const response = await axios.post(
      API_URL,
      {
        model: model,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        max_tokens: maxTokens,
        temperature: temperature
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.SOURCE_URL
        }
      }
    );

    const generatedText = response.data.choices[0].message.content;
    return parseFAQsFromText(generatedText);
  } catch (error) {
    console.error('FAQ generation error:', error.response?.data || error.message);
    throw new Error('Failed to generate FAQs using AI');
  }
}


// AI-powered content deduplication using DeepSeek
export async function deduplicateContentWithAI(contentChunks, similarityThreshold = 0.85) {
  try {
    console.log(`🤖 Starting AI-powered deduplication for ${contentChunks.length} content chunks`);
    
    if (contentChunks.length <= 1) {
      console.log('✅ No deduplication needed - only one chunk');
      return contentChunks;
    }

    const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
    const API_KEY = process.env.OPEN_ROUTER_API_KEY;
    const model = 'openai/gpt-4o-mini';
    const maxTokens = 4000; // Increased from 1000 to 4000 for better analysis
    const temperature = 0.1; // Low temperature for consistent results

    const systemPrompt = `You are an expert content deduplication specialist. Your task is to identify and group semantically similar content chunks, even when they differ by:
- Extra spaces, tabs, or line breaks
- Minor punctuation differences
- Slight word order changes
- Different capitalization
- Minor grammatical variations
- Single character differences
- Abbreviations vs full words

ANALYSIS CRITERIA:
1. **Semantic Similarity**: Do both chunks convey the same core meaning?
2. **Information Overlap**: Do they contain the same key facts, data, or concepts?
3. **Intent Match**: Do they serve the same purpose or answer the same question?
4. **Content Redundancy**: Would keeping both chunks provide duplicate information?

OUTPUT FORMAT:
Return ONLY a JSON array of objects with this exact structure:
[
  {
    "group_id": 1,
    "chunk_ids": [0, 2, 5],
    "similarity_score": 0.95,
    "reason": "All chunks describe the same product feature with minor text variations"
  },
  {
    "group_id": 2,
    "chunk_ids": [1, 3],
    "similarity_score": 0.88,
    "reason": "Both chunks explain the same pricing information with different formatting"
  }
]

RULES:
- Use group_id starting from 1 for each group of similar chunks
- chunk_ids must be the original array indices (0-based)
- similarity_score should be between 0.0 and 1.0
- Only group chunks with similarity_score >= ${similarityThreshold}
- Each chunk can only appear in one group
- Provide a clear reason for each grouping
- If no chunks are similar, return an empty array []
- Be strict about semantic similarity - don't group chunks that have different meanings`;

    // Prepare content chunks for analysis with increased content length
    const contentForAnalysis = contentChunks.map((chunk, index) => ({
      id: index,
      content: chunk.content || chunk.text || chunk,
      type: chunk.type || 'unknown',
      source: chunk.source || 'unknown'
    }));

    // Create user prompt with content chunks - increased from 500 to 800 characters
    const userPrompt = `Analyze these content chunks for semantic similarity and group duplicates:

${contentForAnalysis.map((item, index) => 
  `CHUNK ${index}:
Type: ${item.type}
Source: ${item.source}
Content: "${item.content.substring(0, 800)}${item.content.length > 800 ? '...' : ''}"
`
).join('\n')}

Identify groups of semantically similar chunks and return the JSON array as specified.`;

    console.log('🤖 Calling DeepSeek API for content deduplication...');
    console.log(`📊 Token estimate: ~${Math.round((systemPrompt.length + userPrompt.length) / 4)} input tokens + ${maxTokens} output tokens`);

    const response = await axios.post(
      API_URL,
      {
        model: model,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        max_tokens: maxTokens,
        temperature: temperature
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.SOURCE_URL
        },
        timeout: 60000 // Increased timeout to 60 seconds for larger analysis
      }
    );

    const aiResponse = response.data.choices[0].message.content;
    console.log('🤖 AI deduplication response:', aiResponse);

    // Parse the JSON response
    let duplicateGroups = [];
    try {
      // Extract JSON from the response (in case there's extra text)
      const jsonMatch = aiResponse.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        duplicateGroups = JSON.parse(jsonMatch[0]);
      } else {
        duplicateGroups = JSON.parse(aiResponse);
      }
    } catch (parseError) {
      console.error('❌ Failed to parse AI deduplication response:', parseError);
      console.error('❌ Raw response:', aiResponse);
      return contentChunks; // Return original chunks if parsing fails
    }

    console.log(`🤖 AI identified ${duplicateGroups.length} duplicate groups`);

    // Process the duplicate groups and keep only the best chunk from each group
    const chunksToKeep = new Set();
    const chunksToRemove = new Set();
    let duplicatesRemoved = 0;

    for (const group of duplicateGroups) {
      if (group.chunk_ids && group.chunk_ids.length > 1) {
        // Sort chunks in group by quality criteria (length, type priority, etc.)
        const sortedChunks = group.chunk_ids
          .map(id => ({
            id,
            chunk: contentForAnalysis[id],
            quality: calculateChunkQuality(contentForAnalysis[id])
          }))
          .sort((a, b) => b.quality - a.quality);

        // Keep the highest quality chunk, remove the rest
        const bestChunk = sortedChunks[0];
        chunksToKeep.add(bestChunk.id);
        
        // Mark others for removal
        for (let i = 1; i < sortedChunks.length; i++) {
          chunksToRemove.add(sortedChunks[i].id);
          duplicatesRemoved++;
        }

        console.log(`📊 Group ${group.group_id}: Keeping chunk ${bestChunk.id}, removing ${sortedChunks.length - 1} duplicates (similarity: ${group.similarity_score})`);
        console.log(`📝 Reason: ${group.reason}`);
      }
    }

    // Add chunks that weren't in any duplicate group
    for (let i = 0; i < contentChunks.length; i++) {
      if (!chunksToRemove.has(i)) {
        chunksToKeep.add(i);
      }
    }

    // Create final deduplicated array
    const deduplicatedChunks = Array.from(chunksToKeep)
      .sort((a, b) => a - b)
      .map(id => contentChunks[id]);

    console.log(`✅ AI deduplication completed:`);
    console.log(`  - Original chunks: ${contentChunks.length}`);
    console.log(`  - Duplicates removed: ${duplicatesRemoved}`);
    console.log(`  - Final chunks: ${deduplicatedChunks.length}`);
    console.log(`  - Reduction: ${Math.round((duplicatesRemoved / contentChunks.length) * 100)}%`);

    return deduplicatedChunks;

  } catch (error) {
    console.error('❌ AI deduplication error:', error.response?.data || error.message);
    console.error('❌ Error details:', error);
    
    // Fallback to original chunks if AI deduplication fails
    console.log('⚠️ Falling back to original chunks due to AI deduplication failure');
    return contentChunks;
  }
}

// AI-powered FAQ deduplication using DeepSeek
export async function deduplicateFAQsWithAI(faqs, similarityThreshold = 0.85) {
  try {
    console.log(`🤖 Starting AI-powered FAQ deduplication for ${faqs.length} FAQs`);
    
    if (faqs.length <= 1) {
      console.log('✅ No FAQ deduplication needed - only one FAQ');
      return faqs;
    }

    const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
    const API_KEY = process.env.OPEN_ROUTER_API_KEY;
    const model = 'openai/gpt-4o-mini';
    const maxTokens = 3000; // Slightly lower than content chunks since FAQs are more structured
    const temperature = 0.1; // Low temperature for consistent results

    const systemPrompt = `You are an expert FAQ deduplication specialist. Your task is to identify and group semantically similar FAQ question-answer pairs, even when they differ by:
- Different ways of asking the same question
- Slight variations in answer wording
- Different question formats (what/how/why)
- Minor grammatical differences
- Abbreviations vs full words
- Different levels of detail in answers

ANALYSIS CRITERIA:
1. **Question Similarity**: Do both questions ask about the same topic or issue?
2. **Answer Overlap**: Do both answers provide the same core information?
3. **Intent Match**: Do they serve the same purpose for users?
4. **Information Redundancy**: Would keeping both FAQs provide duplicate information?

OUTPUT FORMAT:
Return ONLY a JSON array of objects with this exact structure:
[
  {
    "group_id": 1,
    "faq_ids": [0, 2, 5],
    "similarity_score": 0.95,
    "reason": "All FAQs ask about business hours with slightly different wording"
  },
  {
    "group_id": 2,
    "faq_ids": [1, 3],
    "similarity_score": 0.88,
    "reason": "Both FAQs explain the same pricing policy with different examples"
  }
]

RULES:
- Use group_id starting from 1 for each group of similar FAQs
- faq_ids must be the original array indices (0-based)
- similarity_score should be between 0.0 and 1.0
- Only group FAQs with similarity_score >= ${similarityThreshold}
- Each FAQ can only appear in one group
- Provide a clear reason for each grouping
- If no FAQs are similar, return an empty array []
- Be strict about semantic similarity - don't group FAQs that have different meanings
- Consider both question AND answer similarity`;

    // Prepare FAQs for analysis
    const faqsForAnalysis = faqs.map((faq, index) => ({
      id: index,
      question: faq.question || '',
      answer: faq.answer || '',
      source: faq.source || 'unknown',
      confidence: faq.confidence || 0.8
    }));

    // Create user prompt with FAQ data
    const userPrompt = `Analyze these FAQ question-answer pairs for semantic similarity and group duplicates:

${faqsForAnalysis.map((item, index) => 
  `FAQ ${index}:
Source: ${item.source}
Confidence: ${item.confidence}
Question: "${item.question}"
Answer: "${item.answer.substring(0, 600)}${item.answer.length > 600 ? '...' : ''}"
`
).join('\n')}

Identify groups of semantically similar FAQs and return the JSON array as specified.`;

    console.log('🤖 Calling DeepSeek API for FAQ deduplication...');
    console.log(`📊 Token estimate: ~${Math.round((systemPrompt.length + userPrompt.length) / 4)} input tokens + ${maxTokens} output tokens`);

    const response = await axios.post(
      API_URL,
      {
        model: model,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        max_tokens: maxTokens,
        temperature: temperature
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.SOURCE_URL
        },
        timeout: 45000 // 45 seconds for FAQ analysis
      }
    );

    const aiResponse = response.data.choices[0].message.content;
    console.log('🤖 AI FAQ deduplication response:', aiResponse);

    // Parse the JSON response
    let duplicateGroups = [];
    try {
      // Extract JSON from the response (in case there's extra text)
      const jsonMatch = aiResponse.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        duplicateGroups = JSON.parse(jsonMatch[0]);
      } else {
        duplicateGroups = JSON.parse(aiResponse);
      }
    } catch (parseError) {
      console.error('❌ Failed to parse AI FAQ deduplication response:', parseError);
      console.error('❌ Raw response:', aiResponse);
      return faqs; // Return original FAQs if parsing fails
    }

    console.log(`🤖 AI identified ${duplicateGroups.length} duplicate FAQ groups`);

    // Process the duplicate groups and keep only the best FAQ from each group
    const faqsToKeep = new Set();
    const faqsToRemove = new Set();
    let duplicatesRemoved = 0;

    for (const group of duplicateGroups) {
      if (group.faq_ids && group.faq_ids.length > 1) {
        // Sort FAQs in group by quality criteria (confidence, length, etc.)
        const sortedFaqs = group.faq_ids
          .map(id => ({
            id,
            faq: faqsForAnalysis[id],
            quality: calculateFAQQuality(faqsForAnalysis[id])
          }))
          .sort((a, b) => b.quality - a.quality);

        // Keep the highest quality FAQ, remove the rest
        const bestFaq = sortedFaqs[0];
        faqsToKeep.add(bestFaq.id);
        
        // Mark others for removal
        for (let i = 1; i < sortedFaqs.length; i++) {
          faqsToRemove.add(sortedFaqs[i].id);
          duplicatesRemoved++;
        }

        console.log(`📊 FAQ Group ${group.group_id}: Keeping FAQ ${bestFaq.id}, removing ${sortedFaqs.length - 1} duplicates (similarity: ${group.similarity_score})`);
        console.log(`📝 Reason: ${group.reason}`);
      }
    }

    // Add FAQs that weren't in any duplicate group
    for (let i = 0; i < faqs.length; i++) {
      if (!faqsToRemove.has(i)) {
        faqsToKeep.add(i);
      }
    }

    // Create final deduplicated array
    const deduplicatedFaqs = Array.from(faqsToKeep)
      .sort((a, b) => a - b)
      .map(id => faqs[id]);

    console.log(`✅ AI FAQ deduplication completed:`);
    console.log(`  - Original FAQs: ${faqs.length}`);
    console.log(`  - Duplicates removed: ${duplicatesRemoved}`);
    console.log(`  - Final FAQs: ${deduplicatedFaqs.length}`);
    console.log(`  - Reduction: ${Math.round((duplicatesRemoved / faqs.length) * 100)}%`);

    return deduplicatedFaqs;

  } catch (error) {
    console.error('❌ AI FAQ deduplication error:', error.response?.data || error.message);
    console.error('❌ Error details:', error);
    
    // Fallback to original FAQs if AI deduplication fails
    console.log('⚠️ Falling back to original FAQs due to AI deduplication failure');
    return faqs;
  }
}

// Parse FAQs from AI-generated text
function parseFAQsFromText(text) {
  const faqs = [];
  const lines = text.split('\n');
  
  let currentQuestion = '';
  let currentAnswer = '';
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    if (trimmedLine.startsWith('Q:') || trimmedLine.startsWith('Question:')) {
      // Save previous FAQ if exists
      if (currentQuestion && currentAnswer) {
        faqs.push({
          question: currentQuestion,
          answer: currentAnswer.trim(),
          confidence: 0.9,
          source: 'ai_generated'
        });
      }
      
      // Start new FAQ
      currentQuestion = trimmedLine.replace(/^Q:\s*|Question:\s*/i, '').trim();
      currentAnswer = '';
    } else if (trimmedLine.startsWith('A:') || trimmedLine.startsWith('Answer:')) {
      currentAnswer = trimmedLine.replace(/^A:\s*|Answer:\s*/i, '').trim();
    } else if (currentQuestion && trimmedLine) {
      // Continue answer
      currentAnswer += (currentAnswer ? ' ' : '') + trimmedLine;
    }
  }
  
  // Add last FAQ
  if (currentQuestion && currentAnswer) {
    faqs.push({
      question: currentQuestion,
      answer: currentAnswer.trim(),
      confidence: 0.9,
      source: 'ai_generated'
    });
  }
  
  return faqs;
}


// Helper function to track FAQ matches
export async function trackFAQMatch(companyId, sessionId, faqId, confidenceScore, responseSource) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    const analyticsData = {
      company_id: companyId,
      event_type: 'faq_matched',
      session_id: sessionId,
      faq_id: faqId,
      confidence_score: confidenceScore,
      response_source: responseSource,
      timestamp: new Date().toISOString()
    };

    await axios.post(
      `${supabaseUrl}/rest/v1/widget_analytics`,
      analyticsData,
      {
        headers: {
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Failed to track FAQ match:', error);
  }
}

// Helper function to track AI fallbacks
export async function trackAIFallback(companyId, sessionId, fallbackReason, confidenceScore = null) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    const analyticsData = {
      company_id: companyId,
      event_type: 'ai_fallback',
      session_id: sessionId,
      ai_fallback_reason: fallbackReason,
      confidence_score: confidenceScore,
      response_source: 'ai',
      timestamp: new Date().toISOString()
    };

    await axios.post(
      `${supabaseUrl}/rest/v1/widget_analytics`,
      analyticsData,
      {
        headers: {
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Failed to track AI fallback:', error);
  }
}

// Helper function to track content matches (new approach)
export async function trackContentMatch(companyId, sessionId, faqId, confidenceScore, contentType, confidenceLevel) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    const analyticsData = {
      company_id: companyId,
      event_type: 'content_matched',
      session_id: sessionId,
      faq_id: faqId,
      confidence_score: confidenceScore,
      ai_fallback_reason: `${confidenceLevel}_${contentType}`, // Use existing column
      response_source: 'ai_with_context',
      timestamp: new Date().toISOString()
    };

    await axios.post(
      `${supabaseUrl}/rest/v1/widget_analytics`,
      analyticsData,
      {
        headers: {
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Failed to track content match:', error);
  }
}

// Helper function to track true AI fallbacks (no content found)
export async function trackTrueAIFallback(companyId, sessionId, fallbackReason) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    const analyticsData = {
      company_id: companyId,
      event_type: 'true_ai_fallback',
      session_id: sessionId,
      ai_fallback_reason: fallbackReason,
      confidence_score: 0, // No confidence since no content was found
      response_source: 'ai',
      timestamp: new Date().toISOString()
    };

    await axios.post(
      `${supabaseUrl}/rest/v1/widget_analytics`,
      analyticsData,
      {
        headers: {
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Failed to track true AI fallback:', error);
  }
}

// Utility function to parse theme JSON
export function parseTheme(theme) {
  if (typeof theme === 'string') {
    try {
      return JSON.parse(theme);
    } catch (error) {
      console.error('Error parsing theme JSON:', error);
      return {
        primaryColor: "#3B82F6",
        backgroundColor: "#FFFFFF",
        textColor: "#1F2937"
      };
    }
  }
  return theme;
}


// Helper function to get daily stats
export function getDailyStats(analytics, days) {
  const dailyStats = [];
  const now = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000));
    const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD format
    
    // Filter analytics for this date using PostgreSQL timestamp format
    const dayAnalytics = analytics.filter(a => {
      if (!a.timestamp) return false;
      // Convert PostgreSQL timestamp to date string for comparison
      const timestampDate = new Date(a.timestamp).toISOString().split('T')[0];
      return timestampDate === dateStr;
    });
    
    dailyStats.push({
      date: dateStr,
      views: dayAnalytics.filter(a => a.event_type === 'widget_view').length,
      interactions: dayAnalytics.filter(a => a.event_type !== 'widget_view').length,
      messages: dayAnalytics.filter(a => a.event_type === 'message_sent').length,
      // responses: dayAnalytics.filter(a => a.event_type === 'faq_matched').length
    });
  }
  
  return dailyStats;
}


//Create company and profile and auth user and send welcome email
export async function createCompany(companyData, userId = null) {
  try {
    const { name, location, description, theme, industry, website, email, logo_url, status, plan, domain, enrollment_date, subscription_end_date } = companyData;

    // Extract domain from website URL if not provided
    let extractedDomain = domain;
    if (!domain && website && website.trim() !== '') {
      try {
        const url = new URL(website.startsWith('http') ? website : `https://${website}`);
        extractedDomain = url.hostname;
        console.log('Extracted domain from website:', extractedDomain);
      } catch (error) {
        console.log('Could not extract domain from website:', website);
        extractedDomain = '';
      }
    }

    // Log the company data
    console.log('Creating company with data:', JSON.stringify(companyData, null, 2));

    // Get supabase URL and key
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase configuration missing');
    }

    // Generate widget key for the company
    const { newKey, hashedKey } = await generateWidgetKeyForCompany();

    // Prepare company data for database
    const companyDataForDB = {
      name: toTitleCase(name),
      location: toTitleCase(location),
      description,
      theme: theme, // Store theme object directly as JSONB
      industry,
      website,
      domain: domain || extractedDomain,
      contact_email: email,
      admin_email: email,
      logo_url: logo_url || '',
      status: status || 'active',
      plan: plan || 'free', // Default to free plan
      widget_key_hash: hashedKey, // Store hashed widget key
      // Stripe fields
      stripe_customer_id: companyData.stripe_customer_id || null,
      stripe_subscription_id: companyData.stripe_subscription_id || null,
      subscription_status: companyData.subscription_status || 'active',
      subscription_end_date: subscription_end_date || null
    };

    // Create company with the auth user ID as the company ID
    const finalCompanyData = {
      ...companyDataForDB,
      id: userId // Use the auth user ID as the company ID
    };
    
    console.log('User ID being used for company:', userId);
    console.log('Sending to database:', JSON.stringify(finalCompanyData, null, 2));
    
    const companyResponse = await axios.post(
      `${supabaseUrl}/rest/v1/companies`,
      finalCompanyData,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        }
      }
    );
    console.log("Company created:", companyResponse.data)

    const companyId = userId;
    return { companyId, companyName: name, email, plan };

    } catch (error) {
      console.error('❌ Error creating company:', error.response?.data || error.message);
      throw new Error('Failed to create company');
    }
  }

//Create auth user
export async function createAuthUser(email) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase configuration missing');
    }

    const authUser = {
      email,
      role: 'company_admin',
      user_metadata: {
        role: 'company_admin'
      }
    }
    
    console.log('Creating auth user with data:', JSON.stringify(authUser, null, 2));
    
    const userResponse = await axios.post(
      `${supabaseUrl}/auth/v1/admin/users`,
      authUser,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        }
      }
    );

    console.log('Auth user response:', JSON.stringify(userResponse.data, null, 2));
    
    const userId = userResponse.data.id;
    if (!userId) {
      throw new Error('No user ID returned from auth user creation');
    }
    
    console.log("Auth user created with ID:", userId);
    return userId;
  } catch (error) {
    console.error('❌ Error creating auth user:', error.response?.data || error.message);
    throw new Error(`Failed to create auth user: ${error.message}`);
  }
}

//Update auth user metadata with company id
export async function updateAuthUser(companyId, userId, companyName) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const userResponse = await axios.put(
      `${supabaseUrl}/auth/v1/admin/users/${userId}`,
      {
        user_metadata: {
           company_id: companyId,
           company_name: companyName
       }
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        }
      }
    );

    console.log("Auth user updated:", userResponse.data)
  }
  catch (error) {
    console.error('❌ Error updating auth user:', error.response?.data || error.message);
    throw new Error('Failed to update auth user');
  }
}

// Widget key generation and validation functions
export const generateWidgetKey = () => {
  // Generate a secure random key (32 bytes = 256 bits)
  return crypto.randomBytes(32).toString('hex');
};

export const hashWidgetKey = async (key) => {
  // Hash the key with bcrypt (salt rounds = 12)
  const saltRounds = 12;
  return await bcrypt.hash(key, saltRounds);
};

export const validateWidgetKey = async (providedKey, hashedKey) => {
  // Compare the provided key with the hashed key
  return await bcrypt.compare(providedKey, hashedKey);
};

// Generate widget key for a company (simplified - no separate table)
export const generateWidgetKeyForCompany = async () => {
  try {
    // Generate new key
    const newKey = generateWidgetKey();
    const hashedKey = await hashWidgetKey(newKey);

    console.log('✅ Widget key generated');
    return { newKey, hashedKey };
  } catch (error) {
    console.error('❌ Error generating widget key:', error);
    throw error;
  }
};

// Send welcome email
export async function sendWelcomeEmail(companyEmail, companyName, planId) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    // Get plan name for display
    const planName = planId === 'pro' ? 'Pro' : planId === 'starter' ? 'Starter' : 'Free';

    // Generate email HTML from template
    const emailHtml = WelcomeEmailTemplate({
      companyName,
      planName,
      adminLink: `${process.env.FRONTEND_URL}/admin`,
    });

    // Send welcome email via Resend
    const emailResult = await sendEmail({
      from: 'Qurius AI <hello@qurius.app>',
      replyTo: 'qurius.ai@gmail.com',
      to: companyEmail,
      subject: `Welcome to Qurius AI, ${companyName}!`,
      html: emailHtml
    });

     // Send password reset link using Supabase Auth
     await axios.post(
      `${supabaseUrl}/auth/v1/recover`,
      {
        email: companyEmail,
        redirect_to: `${process.env.FRONTEND_URL}/auth/callback`
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (emailResult.success === false) {
      console.log('⚠️ Welcome email not sent (Resend not configured)');
    } else {
      console.log('✅ Welcome email sent successfully');
    }
    console.log('📧 To:', companyEmail);
    console.log('🏢 Company:', companyName);
    console.log('📦 Plan:', planName);

    
  } catch (error) {
    console.error('❌ Error sending welcome email:', error.response?.data || error.message);
    throw error;
  }
}

// Helper function to record message usage in the new message_usage table
export async function recordMessageUsage(companyId, companyName, messageType, sessionId = null, userQuestion, aiResponse, faqId = null, confidenceScore = null, responseSource = null, fallbackReason = null) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    const usageData = {
      company_id: companyId,
      company_name: companyName,
      message_type: messageType,
      session_id: sessionId,
      user_question: userQuestion,
      ai_response: aiResponse,
      faq_id: faqId,
      confidence_score: confidenceScore,
      response_source: responseSource,
      fallback_reason: fallbackReason
    };

    console.log('📝 Recording message usage:', { companyId, messageType, responseSource });

    await axios.post(
      `${supabaseUrl}/rest/v1/message_usage`,
      usageData,
      {
        headers: {
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ Message usage recorded successfully');
  } catch (error) {
    console.error('❌ Failed to record message usage:', error.response?.data || error.message);
    // Don't fail the entire request if usage recording fails
  }
}

// Helper function to check and update message limits using separate table
export async function checkAndUpdateMessageLimit(companyId) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase configuration missing');
    }

    // Use the new check_message_limit RPC function
    const limitCheckResponse = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/check_message_limit`,
      {
        p_company_id: companyId
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!limitCheckResponse.data || limitCheckResponse.data.length === 0) {
      throw new Error('Failed to check message limit');
    }

    const limitData = limitCheckResponse.data[0];
    console.log('📊 Message limit check:', limitData);

    // Get company details for email notifications
    const companyResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?id=eq.${companyId}&select=plan,contact_email,name`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!companyResponse.data || companyResponse.data.length === 0) {
      throw new Error('Company not found');
    }

    const company = companyResponse.data[0];
    
    // Check if messages are available
    if (!limitData.can_send) {
      console.log('❌ Message limit reached for company:', company.name);
      
      // Send email notification if contact email exists
      if (company.contact_email) {
        await sendMessageLimitReachedEmail(company.contact_email, company.name, company.plan);
      }
      
      return {
        canSend: false,
        message: `Message limit for ${company.name} reached for this month. Please contact customer support with any questions.`,
        company: company
      };
    }

    console.log('✅ Message limit check passed for company:', company.name, 'Messages remaining:', limitData.messages_remaining);

    // Check if this is the last message (for email notification)
    const isLastMessage = limitData.messages_remaining === 1;
    
    // Send warning email if this was the last message
    if (isLastMessage && company.contact_email) {
      await sendMessageLimitReachedEmail(company.contact_email, company.name, company.plan);
    }
    
    return {
      canSend: true,
      messagesLeft: limitData.messages_remaining,
      isLastMessage: isLastMessage,
      company: company
    };
  } catch (error) {
    console.error('❌ Message limit check error:', error);
    throw error;
  }
}

// Helper function to send message limit reached email
export async function sendMessageLimitReachedEmail(companyEmail, companyName, planName) {
  try {
    const adminLink = `${process.env.FRONTEND_URL}/integration`;
    
    const emailHtml = MessageLimitReachedEmailTemplate({
      companyName,
      planName,
      adminLink
    });

    const emailData = {
      from: 'Qurius AI <noreply@qurius.app>',
      to: companyEmail,
      subject: `⚠️ Message Limit Reached - ${companyName}`,
      html: emailHtml
    };

    // Send email using Resend
    const resendResponse = await axios.post('https://api.resend.com/emails', emailData, {
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Message limit reached email sent successfully to:', companyEmail);
    return true;
  } catch (error) {
    console.error('❌ Failed to send message limit reached email:', error);
    return false;
  }
}

// Content chunking function for RAG
export function chunkContent(content, maxChunkSize = 500) {
  if (!content || typeof content !== 'string') {
    return [];
  }
  
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const chunks = [];
  let currentChunk = '';
  
  for (const sentence of sentences) {
    const trimmedSentence = sentence.trim();
    if (!trimmedSentence) continue;
    
    if ((currentChunk + ' ' + trimmedSentence).length > maxChunkSize && currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
      currentChunk = trimmedSentence;
    } else {
      currentChunk += (currentChunk ? ' ' : '') + trimmedSentence;
    }
  }
  
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }
  
  return chunks.filter(chunk => chunk.length > 50); // Filter out very short chunks
}

// Search content chunks using embeddings with priority weighting
export async function searchContentChunks(queryEmbedding, companyId, topK = 5) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase configuration missing');
    }

    // First try to get high priority chunks
    const highPriorityResponse = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/find_relevant_content_chunks`,
      {
        p_company_id: companyId,
        p_query_embedding: queryEmbedding,
        p_top_k: Math.ceil(topK * 0.7), // 70% high priority
        p_priority: 'high'
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Then get medium priority chunks to fill the rest
    const mediumPriorityResponse = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/find_relevant_content_chunks`,
      {
        p_company_id: companyId,
        p_query_embedding: queryEmbedding,
        p_top_k: Math.ceil(topK * 0.3), // 30% medium priority
        p_priority: 'medium'
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const highPriorityResults = highPriorityResponse.data || [];
    const mediumPriorityResults = mediumPriorityResponse.data || [];
    
    // Combine and sort by similarity
    const allResults = [...highPriorityResults, ...mediumPriorityResults]
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topK);

    return allResults;
  } catch (error) {
    console.error('Content chunk search error:', error.response?.data || error.message);
    return [];
  }
}

// RAG search function that combines FAQ and content chunk searches
export async function searchWithRAG(userQuestion, companyId, topK = 5) {
  try {
    console.log('🔍 Starting RAG search for:', userQuestion.substring(0, 50) + '...');
    console.log('🏢 Company ID:', companyId);
    
    // Generate embedding for user question
    const { questionEmbedding } = await getEmbedding(userQuestion, '');
    console.log('✅ Generated question embedding');
    
    // Search FAQs (existing functionality)
    const faqResults = await searchFAQs(questionEmbedding, companyId, Math.ceil(topK * 0.3)); // 30% of results
    console.log(`📚 Found ${faqResults.length} relevant FAQs`);
    
    // Search content chunks (enhanced RAG functionality)
    const contentResults = await searchContentChunks(questionEmbedding, companyId, Math.ceil(topK * 0.7)); // 70% of results
    console.log(`📄 Found ${contentResults.length} relevant content chunks`);
    
    // Combine and rank all results with priority weighting
    const allResults = [
      ...faqResults.map(result => ({
        ...result,
        type: 'faq',
        source: 'faq_database',
        priority: 'high' // FAQs get high priority
      })),
      ...contentResults.map(result => ({
        ...result,
        type: 'content',
        source: 'company_content',
        source_url: result.source_url, // Include source URL for content chunks
        section_id: result.section_id, // Include section ID
        section_text: result.section_text, // Include section text
        anchor_link: result.anchor_link, // Include anchor link
        priority: result.priority || 'medium'
      }))
    ].sort((a, b) => {
      // Sort by similarity first, then by priority
      if (Math.abs(a.similarity - b.similarity) < 0.1) {
        // If similarity is close, prioritize by type and priority
        if (a.type === 'faq' && b.type !== 'faq') return -1;
        if (b.type === 'faq' && a.type !== 'faq') return 1;
        if (a.priority === 'high' && b.priority !== 'high') return -1;
        if (b.priority === 'high' && a.priority !== 'high') return 1;
      }
      return b.similarity - a.similarity;
    }).slice(0, topK);

    console.log(`🎯 RAG search completed: ${allResults.length} results found`);
    console.log(`📊 Result breakdown:`, {
      faqs: allResults.filter(r => r.type === 'faq').length,
      content: allResults.filter(r => r.type === 'content').length,
      withUrls: allResults.filter(r => r.source_url).length,
      withSections: allResults.filter(r => r.section_id || r.anchor_link).length,
      withSectionIds: allResults.filter(r => r.section_id).length,
      withAnchorLinks: allResults.filter(r => r.anchor_link).length
    });

    return allResults;
    
  } catch (error) {
    console.error('❌ RAG search error:', error);
    console.error('❌ Error details:', error.message);
    return [];
  }
}



// Helper function to calculate chunk quality for deduplication
function calculateChunkQuality(chunk) {
  let quality = 0;
  
  // Length factor (prefer longer, more detailed chunks)
  const length = chunk.content.length;
  quality += Math.min(length / 100, 10); // Max 10 points for length
  
  // Type priority
  const typePriority = {
    'main_content': 10,
    'heading_with_context': 8,
    'section': 6,
    'paragraph': 5,
    'list_item': 4,
    'document_section': 7,
    'fallback_text': 2
  };
  quality += typePriority[chunk.type] || 3;
  
  // Source priority (prefer web scraped over fallback)
  if (chunk.source && chunk.source !== 'fallback') {
    quality += 2;
  }
  
  // Content quality indicators
  const content = chunk.content.toLowerCase();
  
  // Prefer chunks with more structure (headers, lists, etc.)
  if (content.includes(':')) quality += 1;
  if (content.includes('•') || content.includes('-')) quality += 1;
  if (content.includes('1.') || content.includes('2.')) quality += 1;
  
  // Prefer chunks with contact information or actionable content
  if (content.includes('contact') || content.includes('email') || content.includes('phone')) quality += 2;
  if (content.includes('call') || content.includes('visit') || content.includes('click')) quality += 1;
  
  // Penalize very short chunks
  if (length < 50) quality -= 5;
  
  return Math.max(0, quality);
}

// Helper function to search FAQs (extracted from existing logic)
async function searchFAQs(queryEmbedding, companyId, topK = 3) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase configuration missing');
    }

    const response = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/find_relevant_faqs`,
      {
        p_company_id: companyId,
        p_query: '', // Not used in the function, but required
        p_query_embedding: queryEmbedding,
        p_top_k: topK
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data || [];
  } catch (error) {
    console.error('FAQ search error:', error.response?.data || error.message);
    return [];
  }
}

// Helper function to calculate FAQ quality for deduplication
function calculateFAQQuality(faq) {
  let quality = 0;
  
  // Confidence factor (higher confidence = better quality)
  quality += (faq.confidence || 0.8) * 10;
  
  // Length factor (prefer longer, more detailed FAQs)
  const questionLength = faq.question.length;
  const answerLength = faq.answer.length;
  quality += Math.min(questionLength / 50, 5); // Max 5 points for question length
  quality += Math.min(answerLength / 100, 10); // Max 10 points for answer length
  
  // Source priority (prefer certain sources)
  const sourcePriority = {
    'website_existing': 5,
    'manual': 4,
    'imported': 3,
    'ai_generated': 2,
    'crawled': 1
  };
  quality += sourcePriority[faq.source] || 1;
  
  // Content quality indicators
  const question = faq.question.toLowerCase();
  const answer = faq.answer.toLowerCase();
  
  // Prefer FAQs with more structure and detail
  if (answer.includes(':')) quality += 1;
  if (answer.includes('•') || answer.includes('-')) quality += 1;
  if (answer.includes('1.') || answer.includes('2.')) quality += 1;
  
  // Prefer FAQs with contact information or actionable content
  if (answer.includes('contact') || answer.includes('email') || answer.includes('phone')) quality += 2;
  if (answer.includes('call') || answer.includes('visit') || answer.includes('click')) quality += 1;
  
  // Penalize very short questions or answers
  if (questionLength < 10) quality -= 5;
  if (answerLength < 20) quality -= 5;
  
  return Math.max(0, quality);
}

// Export content quality assessment for admin dashboard
export async function getContentQualityInsights(companyId) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase configuration missing');
    }

    // Get company data
    const companyResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?id=eq.${companyId}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!companyResponse.data || companyResponse.data.length === 0) {
      throw new Error('Company not found');
    }

    const company = companyResponse.data[0];

    // Get recent content chunks
    const contentResponse = await axios.get(
      `${supabaseUrl}/rest/v1/company_content_chunks?company_id=eq.${companyId}&order=created_at.desc&limit=100`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Get recent FAQs
    const faqResponse = await axios.get(
      `${supabaseUrl}/rest/v1/faqs?company_id=eq.${companyId}&order=created_at.desc&limit=100`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Create mock context for assessment
    const mockContext = [
      ...(contentResponse.data || []).map(chunk => ({
        type: 'content',
        content: chunk.content,
        content_type: chunk.content_type,
        source_url: chunk.source_url
      })),
      ...(faqResponse.data || []).map(faq => ({
        type: 'faq',
        question: faq.question,
        answer: faq.answer
      }))
    ];

    // Assess content quality
    const quality = assessContentQuality(mockContext, company);

    return {
      quality: quality.quality,
      score: quality.score,
      contentCount: quality.contentCount,
      faqCount: quality.faqCount,
      contentTypes: quality.contentTypes,
      missingTopics: quality.missingTopics,
      recommendations: quality.recommendations,
      lastUpdated: new Date().toISOString()
    };

  } catch (error) {
    console.error('Error getting content quality insights:', error);
    return {
      quality: 'unknown',
      score: 0,
      contentCount: 0,
      faqCount: 0,
      contentTypes: [],
      missingTopics: [],
      recommendations: ['Unable to assess content quality at this time'],
      lastUpdated: new Date().toISOString()
    };
  }
}