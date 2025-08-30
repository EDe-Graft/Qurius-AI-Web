import axios from 'axios';
import { config } from '@/lib/config';
import type { LeadInfo } from '../../types/interfaces';

export interface LeadSubmissionData {
  companyId: string;
  companyName: string;
  name?: string;
  email?: string;
  phone?: string;
  conversationContext?: string;
  sessionId?: string;
  userQuestion?: string;
  aiResponse?: string;
}

class LeadService {
  private BACKEND_URL = config.backendUrl;

  // Submit lead information to backend
  async submitLead(leadData: LeadSubmissionData): Promise<{ success: boolean; leadId?: string; error?: string }> {
    try {
      console.log('📝 Submitting lead data:', leadData);
      
      const response = await axios.post(`${this.BACKEND_URL}/api/leads/store`, {
        companyId: leadData.companyId,
        companyName: leadData.companyName,
        name: leadData.name || null,
        email: leadData.email || null,
        phone: leadData.phone || null,
        conversationContext: leadData.conversationContext || null,
        sessionId: leadData.sessionId || null,
        userQuestion: leadData.userQuestion || null,
        aiResponse: leadData.aiResponse || null
      });
      
      console.log('✅ Lead submitted successfully:', response.data);
      
      if (response.data.success) {
        return {
          success: true,
          leadId: response.data.leadId
        };
      } else {
        return {
          success: false,
          error: response.data.error || 'Failed to submit lead'
        };
      }
    } catch (error: any) {
      console.error('❌ Error submitting lead:', error);
      return {
        success: false,
        error: error.response?.data?.error || error.message || 'Failed to submit lead'
      };
    }
  }

  // Extract contact information from user response
  extractContactInfo(userResponse: string): LeadInfo {
    const contactInfo: LeadInfo = {};

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

  // Validate lead information
  validateLeadInfo(leadInfo: LeadInfo): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // At least one contact method should be provided
    if (!leadInfo.email && !leadInfo.phone) {
      errors.push('Please provide either an email address or phone number');
    }

    // Validate email format if provided
    if (leadInfo.email) {
      const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
      if (!emailRegex.test(leadInfo.email)) {
        errors.push('Please provide a valid email address');
      }
    }

    // Validate phone format if provided
    if (leadInfo.phone) {
      const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(leadInfo.phone)) {
        errors.push('Please provide a valid phone number');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

export const leadService = new LeadService(); 