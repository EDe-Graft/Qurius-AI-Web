import axios from 'axios';

// Lead Generation Functions
export async function shouldRequestLeadInfo(companyId, sessionId, messageCount) {
  try {
    // Request lead info after 1-2 questions to provide value first
    const shouldRequest = messageCount >= 2 && messageCount <= 4;
    
    // Check if we already have a lead for this session
    if (shouldRequest) {
      const existingLead = await checkExistingLead(companyId, sessionId);
      if (existingLead) {
        return false; // Already have lead info for this session
      }
    }
    
    return shouldRequest;
  } catch (error) {
    console.error('Error checking if should request lead info:', error);
    return false;
  }
}

export async function checkExistingLead(companyId, sessionId) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase configuration');
      return null;
    }

    const response = await axios.get(
      `${supabaseUrl}/rest/v1/leads?company_id=eq.${companyId}&source_session_id=eq.${sessionId}&select=id`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.length > 0 ? response.data[0] : null;
  } catch (error) {
    console.error('Error checking existing lead:', error);
    return null;
  }
}

export async function storeLead(leadData) {
  try {
    const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase configuration');
      return { success: false, error: 'Database configuration missing' };
    }

    const response = await axios.post(
      `${supabaseUrl}/rest/v1/leads`,
      {
        company_id: leadData.companyId,
        company_name: leadData.companyName,
        name: leadData.name || null,
        email: leadData.email || null,
        phone: leadData.phone || null,
        conversation_context: leadData.conversationContext || null,
        source_session_id: leadData.sessionId || null,
        user_question: leadData.userQuestion || null,
        ai_response: leadData.aiResponse || null,
        lead_status: 'new'
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ Lead stored successfully:', response.data);
    return { success: true, leadId: response.data.id };
  } catch (error) {
    console.error('❌ Error storing lead:', error.response?.data || error.message);
    return { success: false, error: error.message };
  }
}

export function generateLeadCollectionPrompt(companyName, customerSupportEmail) {
  return `Before I continue helping you, could you please share your contact information so I can provide you with more personalized assistance? This will help us follow up with you if needed.

Please provide:
• Your name (optional)
• Email address (recommended)
• Phone number (optional)

You can share as much or as little as you're comfortable with. This information will only be used to provide you with better service and follow up on your inquiry.

If you prefer not to share contact information, I can still continue helping you with your questions.`;
}

export function extractContactInfoFromResponse(userResponse) {
  const contactInfo = {
    name: null,
    email: null,
    phone: null
  };

  // Extract email
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const emails = userResponse.match(emailRegex);
  if (emails && emails.length > 0) {
    contactInfo.email = emails[0];
  }

  // Extract phone number (various formats)
  const phoneRegex = /(\+?1?[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/g;
  const phones = userResponse.match(phoneRegex);
  if (phones && phones.length > 0) {
    contactInfo.phone = phones[0].replace(/[-.\s()]/g, '');
  }

  // Extract name (simple heuristic - first 2-3 words that don't look like email/phone)
  const words = userResponse.split(/\s+/);
  const nameWords = words.filter(word => 
    !emailRegex.test(word) && 
    !phoneRegex.test(word) && 
    word.length > 1 && 
    /^[A-Za-z]+$/.test(word)
  );
  
  if (nameWords.length > 0) {
    contactInfo.name = nameWords.slice(0, 3).join(' '); // Take first 3 words as name
  }

  return contactInfo;
} 