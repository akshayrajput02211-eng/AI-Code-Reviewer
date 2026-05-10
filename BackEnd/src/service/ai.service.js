const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

async function getAIReview(prompt) {

  try {

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "You are a helpful code reviewer.",
    });

    const result = await model.generateContent(prompt);

    return result.response.text();

  } catch (error) {

    console.log(error);

    throw error;

  }

}