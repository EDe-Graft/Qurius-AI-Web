import axios from 'axios';
import { config } from '@/lib/config';

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
  async getFAQAnswer(companyName: string, userQuestion: string): Promise<{ answer: string; source: 'faq' | 'ai' } | null> {
    try {
      const response = await axios.post(`${this.BACKEND_URL}/api/faqs/search`, {
        companyName,
        question: userQuestion
      });
      
      console.log('FAQ search results:', response.data);
      
      // Handle array of FAQ results
      if (Array.isArray(response.data) && response.data.length > 0) {
        const firstResult = response.data[0];
        // Return both answer and source
        if (firstResult.answer) {
          return {
            answer: firstResult.answer,
            source: firstResult.source || 'ai'
          };
        }
      }
      
      // Handle single FAQ object
      if (response.data && response.data.answer) {
        return {
          answer: response.data.answer,
          source: response.data.source || 'ai'
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
      return response.data;
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      throw error;
    }
  }

  async importFAQs(companyId: string, faqs: FAQImport[]): Promise<{ success: boolean; message: string; count: number }> {
    try {
      const response = await axios.post(`${this.BACKEND_URL}/api/companies/${companyId}/faqs`, { faqs });
      return response.data;
    } catch (error) {
      console.error('Error importing FAQs:', error);
      throw error;
    }
  }

  async addFAQ(companyId: string, question: string, answer: string): Promise<FAQ> {
    try {
      const response = await axios.post(`${this.BACKEND_URL}/api/companies/${companyId}/faqs`, {
        faqs: [{ question, answer }]
      });
      return response.data;
    } catch (error) {
      console.error('Error adding FAQ:', error);
      throw error;
    }
  }

  async updateFAQ(faqId: string, question: string, answer: string): Promise<FAQ> {
    try {
      const response = await axios.put(`${this.BACKEND_URL}/api/faqs/${faqId}`, {
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
