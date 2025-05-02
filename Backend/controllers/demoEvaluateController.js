import { validateDemoCode } from "../gemini.js";

export const demoEvaluateSubmission = async (req, res) => {
  const { codingAnswer, language, question } = req.body;

  if (!codingAnswer || !language || !question) {
    return res.status(400).json({ error: "Missing coding answer, language, or question." });
  }

  try {
    const evaluationResult = await validateDemoCode(codingAnswer, language, question);

    if (
      typeof evaluationResult.score !== "number" ||
      !["Yes", "No"].includes(evaluationResult.adherence)
    ) {
      throw new Error("Incomplete evaluation result from AI.");
    }

    res.json({
      codingScore: evaluationResult.score,
      adherence: evaluationResult.adherence,
      suggestions: evaluationResult.suggestions,
    });
  } catch (error) {
    console.error("Error during code evaluation:", error.message);
    return res.status(500).json({ error: "Code evaluation failed." });
  }
};