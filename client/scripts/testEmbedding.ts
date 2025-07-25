import { getEmbedding } from '../services/aiService.js'; // use .js if compiled, .ts if running with tsx/ts-node

// Example question and answer
const question = "What is Jina AI?";
const answer = "Jina AI is an open-source neural search company.";

(async () => {
  try {
    const { questionEmbedding, answerEmbedding } = await getEmbedding(question, answer);
    console.log("Question embedding:", questionEmbedding);
    console.log("Answer embedding:", answerEmbedding);
    console.log("Question embedding length:", questionEmbedding.length);
    console.log("Answer embedding length:", answerEmbedding.length);
  } catch (err) {
    console.error("Error:", err);
  }
})();
