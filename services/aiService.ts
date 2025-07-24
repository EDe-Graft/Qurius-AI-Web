import axios from "axios";
import { JINA_CONFIG, OPEN_ROUTER_CONFIG } from "../src/lib/config.ts"

const API_URL = OPEN_ROUTER_CONFIG.apiUrl;
const API_KEY = OPEN_ROUTER_CONFIG.apiKey;
const SOURCE_URL = OPEN_ROUTER_CONFIG.sourceUrl;
const JINA_API_URL = JINA_CONFIG.apiUrl;
const JINA_API_KEY = JINA_CONFIG.apiKey;

// Non-streaming version
export const getAIResponse = async (messages: Array<{ role: string; content: string }>): Promise<string> => {
    try {
      if (!API_KEY) {
        throw new Error('API key not found. Please set EXPO_PUBLIC_OPENAI_API_KEY in your environment variables.');
      }
  
      const response = await axios.post(`${API_URL}/chat/completions`, {
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages,
        stream: false,
      }, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'HTTP-Referer': SOURCE_URL,
          'X-Title': 'Qurius',
          'Content-Type': 'application/json',
        },
        timeout: 30000, // 30 second timeout
      });
  
      return response.data.choices[0]?.message?.content || "No response received.";
    } catch (error: any) {
      console.error('Open API Error:', error);
      
      if (error.response) {
        // Server responded with error status
        console.error('Response error:', error.response.status, error.response.data);
        return `Error: ${error.response.status} - ${error.response.data?.error?.message || 'Unknown server error'}`;
      } else if (error.request) {
        // Network error
        console.error('Network error:', error.request);
        return "Network error: Please check your internet connection and try again.";
      } else {
        // Other error
        console.error('Other error:', error.message);
        return `Error: ${error.message}`;
      }
    }
  };

/**
 * Get embeddings for a question and answer using Jina API
 * @param question The question text
 * @param answer The answer text
 * @returns Promise<{ questionEmbedding: number[]; answerEmbedding: number[] }>
 */
export async function getEmbedding(question: string, answer: string): Promise<{ questionEmbedding: number[]; answerEmbedding: number[] }> {
  try {
    if (!JINA_API_KEY) {
      throw new Error('Jina API key not found. Please set JINA_API_KEY in your environment variables.');
    }
    const response = await axios.post(
      JINA_API_URL,
      {
        input: [question, answer], // Batch request
        model: 'jina-embeddings-v2-base-en',
      },
      {
        headers: {
          Authorization: `Bearer ${JINA_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const data = response.data.data;
    if (!data || data.length < 2) throw new Error('No embeddings returned from Jina.');
    return {
      questionEmbedding: data[0].embedding,
      answerEmbedding: data[1].embedding,
    };
  } catch (error: any) {
    console.error('Error fetching embeddings from Jina:', error.response?.data || error.message);
    throw error;
  }
}