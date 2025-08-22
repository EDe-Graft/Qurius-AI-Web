import axios from 'axios';
import { config } from '@/lib/config';
import type { FAQResponse } from '../../types/interfaces';

export interface FAQ {
  id?: string;
  company_id: string;
  question: string;
  answer: string;
  created_at?: string;
}

export interface FAQImport {
  question: string;
  answer: string;
}

class FAQService {
  private BACKEND_URL = config.backendUrl;

  // Get FAQ answer using semantic search
  async getAnswer(userQuestion: string, messages?: Array<{role: string, content: string}>, companyData?: any): Promise<FAQResponse | null> {
    try {
      console.log('🔍 FAQ Search - Context messages:', messages?.length || 0)
      
      const response = await axios.post(`${this.BACKEND_URL}/api/faqs/search`, {
        question: userQuestion,
        messages: messages || [],
        companyData: companyData
      });
      
      console.log('FAQ search results:', response.data);
      
      // Handle array of FAQ results
      if (Array.isArray(response.data) && response.data.length > 0) {
        const firstResult = response.data[0];
        
        // Check for limit reached response first
        if (firstResult.source === 'limit_reached' || firstResult.limitReached) {
          console.log('⚠️ Limit reached response detected');
          return {
            question: userQuestion,
            answer: firstResult.answer || 'Message limit reached for this month. Please upgrade your plan or wait until next month.',
            source: 'limit_reached',
            limitReached: true,
            messagesLeft: firstResult.messagesLeft || 0
          };
        }
        
        // Return the full result object for normal responses
        if (firstResult.answer) {
          return {
            question: userQuestion,
            answer: firstResult.answer,
            source: firstResult.source || 'ai',
            faqId: firstResult.faqId,
            confidence: firstResult.confidence,
            fallbackReason: firstResult.fallbackReason,
            limitReached: firstResult.limitReached || false,
            messagesLeft: firstResult.messagesLeft
          };
        }
      }
      
      // Handle single FAQ object
      if (response.data && response.data.answer) {
        // Check for limit reached response
        if (response.data.source === 'limit_reached' || response.data.limitReached) {
          return {
            question: userQuestion,
            answer: response.data.answer || 'Message limit reached for this month. Please upgrade your plan or wait until next month.',
            source: 'limit_reached',
            limitReached: true,
            messagesLeft: response.data.messagesLeft || 0
          };
        }
        
        return {
          question: userQuestion,
          answer: response.data.answer,
          source: response.data.source || 'ai',
          faqId: response.data.faqId,
          confidence: response.data.confidence,
          fallbackReason: response.data.fallbackReason,
          limitReached: response.data.limitReached || false,
          messagesLeft: response.data.messagesLeft
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error searching FAQs:', error);
      return null;
    }
  }

  async getFAQs(companyId: string): Promise<FAQ[]> {
    try {
      const response = await axios.get(`${this.BACKEND_URL}/api/companies/${companyId}/faqs`);
      
      // Handle new response structure with pagination
      if (response.data && response.data.faqs) {
        return response.data.faqs;
      }
      
      // Handle old response structure (direct array) for backward compatibility
      if (Array.isArray(response.data)) {
        return response.data;
      }
      
      // Fallback to empty array if unexpected structure
      console.warn('Unexpected FAQ response structure:', response.data);
      return [];
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      throw error;
    }
  }

  async getFAQsWithPagination(companyId: string, options?: {
    limit?: number;
    offset?: number;
    source?: string;
    orderBy?: string;
    includeSummary?: boolean;
  }): Promise<{
    faqs: FAQ[];
    pagination: {
      limit: number;
      offset: number;
      total: number | null;
      hasMore: boolean | null;
    };
  }> {
    try {
      const params = new URLSearchParams();
      if (options?.limit) params.append('limit', options.limit.toString());
      if (options?.offset) params.append('offset', options.offset.toString());
      if (options?.source) params.append('source', options.source);
      if (options?.orderBy) params.append('orderBy', options.orderBy);
      if (options?.includeSummary) params.append('includeSummary', options.includeSummary.toString());

      const response = await axios.get(`${this.BACKEND_URL}/api/companies/${companyId}/faqs?${params}`);
      
      // Return the full response structure
      return response.data;
    } catch (error) {
      console.error('Error fetching FAQs with pagination:', error);
      throw error;
    }
  }

  async importFAQs(companyId: string, companyName: string, faqs: FAQImport[]): Promise<{ success: boolean; message: string; count: number }> {
    try {
      const response = await axios.post(`${this.BACKEND_URL}/api/companies/import-faqs`, { companyId, companyName, faqs });
      return response.data;
    } catch (error) {
      console.error('Error importing FAQs:', error);
      throw error;
    }
  }

  async updateFAQ(companyId: string, companyName: string, faqId: string, question: string, answer: string): Promise<FAQ> {
    try {
      const response = await axios.put(`${this.BACKEND_URL}/api/companies/update-faqs`, {
        companyId,
        companyName,
        faqId,
        question,
        answer
      });
      return response.data;
    } catch (error) {
      console.error('Error updating FAQ:', error);
      throw error;
    }
  }

  async deleteFAQ(faqId: string): Promise<void> {
    try {
      await axios.delete(`${this.BACKEND_URL}/api/faqs/${faqId}`);
    } catch (error) {
      console.error('Error deleting FAQ:', error);
      throw error;
    }
  }

}

export const faqService = new FAQService();
export default faqService;
