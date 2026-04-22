const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

async function getAIReview(prompt) {
  const model = genAI.getGenerativeModel({
    model: "gemini-3-flash-preview",
     systemInstruction: "You are a helpful code reviewer. Provide constructive feedback on the provided code snippet, highlighting potential issues and suggesting improvements. Focus on code quality, readability, and best practices."
  });

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return response.text();
}

module.exports = { getAIReview };