import mongoose from "mongoose";

// Define the schema for JavaScript tasks
const JavaScriptTaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  existingCode: { type: String, required: true },
  testCases: [
    {
      condition: { type: String, required: true },
    },
  ],
  solutionExplanation: { type: String, required: true },
  language: {
    type: String,
    enum: ["JavaScript"], // Capitalized
    required: true,
    default: "JavaScript",
  },
  level: {
    type: String,
    enum: ["Basic", "Intermediate", "Expert"],
    required: true,
  },
  isPassed: { type: Boolean, default: false },
});

// Create the model from the schema
const JavaScriptTask = mongoose.model("JavaScriptTask", JavaScriptTaskSchema);

export default JavaScriptTask;
