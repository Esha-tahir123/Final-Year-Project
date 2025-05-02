import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: {
    type: String,
    enum: ["Very Basic", "Basic", "Intermediate", "Advanced", "Hardest"],
    required: true,
  },
  taskType: {
    type: String,
    enum: ["Error Correction", "Output Comparison", "Code Improvement"], // Added "Code Improvement"
    required: true,
  },
  codeSnippet: {
    type: String,
    required: function () {
      return (
        this.taskType === "Error Correction" ||
        this.taskType === "Code Improvement"
      );
    },
  }, // Required for error correction and code improvement tasks
  correctLines: [{ type: String }], // For storing correct lines in error correction and code improvement tasks
  expectedOutput: {
    type: String,
    required: function () {
      return this.taskType === "Output Comparison";
    },
  }, // Required for output comparison tasks
  solutionExplanation: { type: String, required: true }, // To explain the solution after completion
  language: {
    type: String,
    enum: ["HTML/CSS", "JavaScript"],
    required: true,
    default: "HTML",
  }, // Optional language field
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
