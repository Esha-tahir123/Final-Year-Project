import { validateAndScore } from "../gemini.js";

export const validateCodeAndFetchResources = async (req, res) => {
  const { code, language, task } = req.body;
  
  console.log("Incoming Request Payload:", { code, language, task });
  
  if (!code || !language || !task) {
    console.error("Missing required fields in payload.");
    return res.status(400).json({ error: "Missing required fields in payload." });
  }
  
  try {
    const result = await validateAndScore(code, language, task);
    
    if (!result) {
      console.error("Failed to get result from AI.");
      return res.status(500).json({ error: "Failed to process the code." });
    }
    
    console.log("Validation Result:", result);
    
    // Ensure score is a number and default to 0 if undefined
    const overallScore = typeof result.score === 'number' ? result.score : 0;
    
    // Prepare response with guaranteed fields
    const response = {
      overallScore,
      errors: result.errors || [],
      suggestions: result.suggestions || [],
      explanation: result.explanation || "",
      output: result.output || "",
      resources: result.resources || [],
      // Optional fields
      adherenceScore: result.adherenceScore,
      testCaseResults: result.testCaseResults || []
    };
    
    res.json(response);
    
  } catch (error) {
    console.error("Error during validation:", error.message);
    console.error("Stack Trace:", error.stack);
    res.status(500).json({ error: "An internal server error occurred." });
  }
};
