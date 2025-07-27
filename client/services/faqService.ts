import axios from 'axios'
import { getAIResponse, getEmbedding } from './aiService'
import type { Database } from '../types/database'

type FAQ = Database['public']['Tables']['faqs']['Row']
type FAQInsert = Database['public']['Tables']['faqs']['Insert']
declare type FAQWithCompany = FAQInsert & { company: string; theme?: string }

export interface FAQSearchResult {
  source: 'faq' | 'ai'
  answer: string
  question?: string
  confidence?: number
  faqId?: string
}

// Add type for relevant FAQ function result
export interface RelevantFAQ {
  faq_id: string
  question: string
  answer: string
  similarity: number
}

export class FAQService {
  /**
   * Get or create a company by name. Returns the company_id.
   * @param companyName The name of the company
   * @param theme Optional theme color for the company (only used when creating new company)
   */
  static async getOrCreateCompanyId(companyName: string, theme?: string): Promise<string> {
    try {
      // Make API call to backend to get or create company
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/companies/${encodeURIComponent(companyName)}/id`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data && response.data.id) {
        return response.data.id;
      }
      
      // If company not found, create it via API
      const createResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/companies`, {
        name: companyName,
        theme: theme
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return createResponse.data.id;
    } catch (error) {
      console.error('Error getting or creating company:', error);
      throw new Error(`Failed to fetch company: ${error}`);
    }
  }

  // Note: Other methods like addFAQ, getAllFAQs, updateFAQ, deleteFAQ, bulkImportFAQs
  // are not used by the widget and would need similar backend API endpoints if needed

  /**
   * Search for FAQs using semantic similarity (embedding-based)
   */
  static async searchFAQs(userQuestion: string, companyName: string): Promise<RelevantFAQ[]> {
    try {
      // Make API call to backend to search FAQs
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/faqs/search`, {
        question: userQuestion,
        companyName: companyName
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data || [];
    } catch (error) {
      console.error('Error searching FAQs (semantic):', error);
      return [];
    }
  }

  /**
   * Get answer for user question - tries FAQ first, falls back to AI
   */
  static async getAnswer(userQuestion: string, companyName: string, confidenceThreshold: number = 0.3): Promise<FAQSearchResult> {
    try {
      // Step 1: Search FAQs
      const faqs = await this.searchFAQs(userQuestion, companyName);
      
      if (faqs.length > 0) {
        // Use the similarity score from the SQL function directly
        const bestMatch = faqs[0];
        
        // If similarity is above threshold, return FAQ answer
        if (bestMatch.similarity >= confidenceThreshold) {
          return {
            source: 'faq',
            answer: bestMatch.answer,
            question: bestMatch.question,
            confidence: bestMatch.similarity, // Use the vector similarity score
            faqId: bestMatch.faq_id
          }
        }
      }

      // Step 2: Fallback to AI
      console.log('No relevant FAQ found, falling back to AI...')
      
      const messages = [
        {
          role: 'system',
          content: 'You are a helpful assistant. Provide accurate and helpful answers to user questions. If you don\'t know something, say so clearly.'
        },
        {
          role: 'user',
          content: userQuestion
        }
      ]

      const aiResponse = await getAIResponse(messages, companyName)
      
      return {
        source: 'ai',
        answer: aiResponse,
        confidence: 0
      }
    } catch (error) {
      console.error('Error in getAnswer:', error)
      throw new Error('Failed to get answer for your question. Please try again.')
    }
  }

  // Note: Other methods like getAllFAQs, updateFAQ, deleteFAQ, bulkImportFAQs
  // are not used by the widget and would need similar backend API endpoints if needed
}
