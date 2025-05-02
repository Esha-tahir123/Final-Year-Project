import mongoose from "mongoose";

const HTMLCSSTaskSchema = new mongoose.Schema({
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
    enum: ["HTML/CSS"],
    required: true,
    default: "HTML/CSS",
  },
  level: {
    type: String,
    enum: ["Basic", "Intermediate", "Expert"],
    required: true,
  },
  isPassed: { type: Boolean, default: false } // New field to track if the task is passed
});

const HTMLCSSTask = mongoose.model("HTMLCSSTask", HTMLCSSTaskSchema);
export default HTMLCSSTask;
