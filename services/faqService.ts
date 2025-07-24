import { supabase } from '../src/lib/supabase'
import { getAIResponse, getEmbedding } from './aiService'
import type { Database } from '../types/database'

type FAQ = Database['public']['Tables']['faqs']['Row']
type FAQInsert = Database['public']['Tables']['faqs']['Insert']
declare type FAQWithCompany = FAQInsert & { company: string }

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
   */
  static async getOrCreateCompanyId(companyName: string): Promise<string> {
    // Try to find the company by name
    const { data: companies, error } = await supabase
      .from('companies')
      .select('id')
      .eq('name', companyName)
      .limit(1)
    if (error) throw new Error(`Failed to fetch company: ${error.message}`)
    if (companies && companies.length > 0) {
      console.log('Company found:', companies[0])
      return companies[0].id
    }
    // If not found, create it
    console.log('Company not found, creating...')
    const { data: newCompany, error: createError } = await supabase
      .from('companies')
      .insert({ name: companyName })
      .select('id')
      .single()
    if (createError) throw new Error(`Failed to create company: ${createError.message}`)
    console.log('Company created:', newCompany)
    return newCompany.id
  }

  static async getCompanyIdByName(companyName: string): Promise<string> {
    const { data: companies, error } = await supabase
      .from('companies')
      .select('id')
      .eq('name', companyName)
      .limit(1)
    if (error) throw new Error(`Failed to fetch company: ${error.message}`)
    if (!companies || companies.length === 0) {
      throw new Error(`Company '${companyName}' not found`)
    }
    return companies[0].id
  }

  /**
   * Add a new FAQ to the database (with embeddings and company_id)
   */
  static async addFAQ(faq: Partial<FAQWithCompany>): Promise<FAQ> {
    if (!faq.question || !faq.answer || !faq.company) {
      throw new Error('FAQ must have question, answer, and company');
    }
    // Get or create company_id
    const company_id = await this.getOrCreateCompanyId(faq.company)
    // Generate embeddings for question and answer
    const { questionEmbedding, answerEmbedding } = await getEmbedding(faq.question, faq.answer)
    // Insert FAQ
    const { data, error } = await supabase
      .from('faqs')
      .insert({
        question: faq.question,
        answer: faq.answer,
        company_id,
        question_embedding: questionEmbedding,
        answer_embedding: answerEmbedding,
        tags: faq.tags ?? null,
        relevance_score: faq.relevance_score,
        created_at: faq.created_at,
        updated_at: faq.updated_at,
        id: faq.id
      })
      .select()
      .single()
    if (error) {
      throw new Error(`Failed to add FAQ: ${error.message}`)
    }
    return data
  }

  /**
   * Search for FAQs using semantic similarity (embedding-based)
   */
  static async searchFAQs(userQuestion: string, companyName: string): Promise<RelevantFAQ[]> {
    try {
      // Get company ID by name
      const companyId = await this.getOrCreateCompanyId(companyName);
      // Get embedding for the user question
      const { questionEmbedding } = await getEmbedding(userQuestion, "");
      // Call Supabase function for semantic search
      const { data, error } = await supabase.rpc('find_relevant_faqs', {
        p_company_id: companyId,
        p_query: userQuestion,
        p_query_embedding: questionEmbedding,
        p_top_k: 5
      })
      if (error) {
        throw new Error(`Supabase function error: ${error.message}`)
      }
      return data || []
    } catch (error) {
      console.error('Error searching FAQs (semantic):', error)
      return []
    }
  }

  /**
   * Get answer for user question - tries FAQ first, falls back to AI
   */
  static async getAnswer(userQuestion: string, confidenceThreshold: number = 0.3): Promise<FAQSearchResult> {
    try {
      // Step 1: Search FAQs
      const faqs = await this.searchFAQs(userQuestion, "Acme University");
      
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

      const aiResponse = await getAIResponse(messages)
      
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

  /**
   * Get all FAQs with optional filtering
   */
  static async getAllFAQs(limit?: number): Promise<FAQ[]> {
    let query = supabase
      .from('faqs')
      .select('*')
      .order('created_at', { ascending: false })

    if (limit) {
      query = query.limit(limit)
    }

    const { data, error } = await query

    if (error) {
      throw new Error(`Failed to fetch FAQs: ${error.message}`)
    }

    return data || []
  }

  /**
   * Update an existing FAQ (with embeddings if question/answer change)
   */
  static async updateFAQ(id: string, updates: Partial<FAQInsert>): Promise<FAQ> {
    let question_embedding, answer_embedding
    if (updates.question) {
      const { questionEmbedding } = await getEmbedding(updates.question, updates.answer ?? "");
      question_embedding = questionEmbedding;
    }
    if (updates.answer) {
      const { answerEmbedding } = await getEmbedding(updates.question ?? "", updates.answer);
      answer_embedding = answerEmbedding;
    }
    const { data, error } = await supabase
      .from('faqs')
      .update({
        ...updates,
        ...(question_embedding && { question_embedding }),
        ...(answer_embedding && { answer_embedding })
      })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      throw new Error(`Failed to update FAQ: ${error.message}`)
    }

    return data
  }

  /**
   * Delete an FAQ
   */
  static async deleteFAQ(id: string): Promise<boolean> {
    const { error } = await supabase
      .from('faqs')
      .delete()
      .eq('id', id)

    if (error) {
      throw new Error(`Failed to delete FAQ: ${error.message}`)
    }

    return true
  }

  /**
   * Bulk import FAQs
   */
  static async bulkImportFAQs(faqs: FAQInsert[]): Promise<FAQ[]> {
    const { data, error } = await supabase
      .from('faqs')
      .insert(faqs)
      .select()

    if (error) {
      throw new Error(`Failed to bulk import FAQs: ${error.message}`)
    }

    return data || []
  }
}
