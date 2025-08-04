import axios from 'axios';

// Backend API URL - change this to your deployed backend URL
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true
  }
}

// Get embeddings from our backend (secure)
export async function getEmbedding(question: string, answer: string): Promise<{ questionEmbedding: number[]; answerEmbedding: number[] }> {
  try {
    console.log('Calling backend at:', `${BACKEND_URL}/api/embeddings`);
    const response = await axios.post(`${BACKEND_URL}/api/embeddings`, {
      question,
      answer
    }, axiosConfig);

    return {
      questionEmbedding: response.data.questionEmbedding,
      answerEmbedding: response.data.answerEmbedding
    };
  } catch (error) {
    console.error('Error getting embeddings:', error);
    throw new Error('Failed to get embeddings');
  }
}

// Get AI response from our backend (secure)
export async function getAIResponse(messages: Array<{ role: string; content: string }>, companyName: string): Promise<string> {
  try {
    console.log('Calling backend at:', `${BACKEND_URL}/api/ai/chat`);
    const response = await axios.post(`${BACKEND_URL}/api/ai/chat`, {
      messages,
      companyName
    }, axiosConfig);

    return response.data.answer;
  } catch (error) {
    console.error('Error getting AI response:', error);
    throw new Error('Failed to get AI response');
  }
}