// gemini.js (Backend)
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const geminiApiKey = process.env.GEMINI_API_KEY;
if (!geminiApiKey) {
    throw new Error("GEMINI_API_KEY is not set in environment variables.");
}
const genAI = new GoogleGenerativeAI(geminiApiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generationConfig = {
    temperature: 0.7,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 4096,
};
export async function validateAndScore(code, language, task) {
  const prompt = `
    Evaluate the following ${language} code for the task: "${task.description}".
    Code: ${code}
    Provide the following information strictly in JSON format:
    {
      "errors": ["List syntax or logical errors found in the code."],
      "score": score out of 10 based on correctness and adherence to the task,
      "suggestions": ["Provide detailed suggestions for improvement"],
      "explanation": "Detailed explanation of the score",
      "output": "Output of the code (if applicable)",
      "resources": ["Recommended learning resources or links to improve"]
    }
  `;

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const result = await chatSession.sendMessage(
      "Analyze this code and provide feedback."
    );

    const responseText = await result.response.text();

    // Extract and parse JSON response
    const parsedResponse = JSON.parse(
      responseText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()
    );

    return parsedResponse;
  } catch (error) {
    console.error("Error calling Gemini AI:", error);
    return {
      score: 0,
      errors: ["Error processing code evaluation"],
      suggestions: ["Please try again"],
      explanation: "An error occurred during evaluation",
      output: "",
      resources: ["https://www.w3schools.com", "https://developer.mozilla.org"]
    };
  }
}
// ... (rest of gemini.js and validationController.js remain largely the same)
export async function validateDemoCode(code, language, question) {
  const prompt = `
    Evaluate the following ${language} code for the task: "${question}".
    Code:
 Code:
    \`\`\`${language.toLowerCase()}\`\`\`
    ${code}
    \`\`\`
    Provide a score out of 5 based on correctness and adherence to the task requirements.
    Provide the following JSON strictly:
    {
      "score": "Score out of 5.",
      "adherence": "Does the code meet the task requirements? (Yes/No)",
      "errors": ["List syntax or logical errors found in the code."],
      "suggestions": ["Suggestions for improvement."]
    }
  `;

  try {
    const chatSession =  model.startChat({
      generationConfig,
      history: [{ role: "user", parts: [{ text: prompt }] }],
    });

    // Get the AI response
    const response = await chatSession.sendMessage("Analyze the code.");
    const responseText = typeof response.response.text === "function"
      ? await response.response.text()
      : response.response.text;

    console.log("Raw AI response text:", responseText); // Log the full response

    // Extract JSON from the response
    const startIndex = responseText.indexOf("{");
    const endIndex = responseText.lastIndexOf("}");
    if (startIndex === -1 || endIndex === -1) {
      throw new Error("Response does not contain valid JSON.");
    }

    const cleanedText = responseText.slice(startIndex, endIndex + 1).trim();
    const parsedResponse = JSON.parse(cleanedText);

    console.log("Parsed AI response:", parsedResponse); // Log the parsed response

    // Handle the "score" field, convert it to a number if necessary
    if (typeof parsedResponse.score === "string" && parsedResponse.score.includes("out of")) {
      // Extract numeric score from the string like "2 out of 5"
      const numericScore = parseInt(parsedResponse.score.split(" ")[0]);
      parsedResponse.score = numericScore; // Update score as a number
    }

    // Validate required fields
    if (
      typeof parsedResponse.score !== "number" ||
      !["Yes", "No"].includes(parsedResponse.adherence) ||
      !Array.isArray(parsedResponse.errors) ||
      !Array.isArray(parsedResponse.suggestions)
    ) {
      throw new Error("Response JSON is incomplete or invalid.");
    }

    return parsedResponse;
  } catch (error) {
    console.error("Error during code validation:", error.message);
    return {
      score: 0, // Default score for fallback
      adherence: "No",
      errors: ["Error processing code evaluation."],
      suggestions: ["Please review your code and try again."],
    };
  }
}
