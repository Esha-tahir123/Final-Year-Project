import mongoose from "mongoose";

const CsharpTaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: String,
  difficultyScore: Number,
  level: String,
  existingCode: String,
  testCases: [
    {
      condition: String,
    }
  ],
  solutionExplanation: String,
  language: { type: String, default: "C#" },
});

const CsharpTask = mongoose.model("CsharpTask", CsharpTaskSchema);
export default CsharpTask;
