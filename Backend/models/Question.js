// models/Question.js
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  votes: {
    type: Number,
    default: 0,
  },
  tags: [String],
  answers: [
    {
      content: String,
      author: String,
      timestamp: {
        type: Date,
        default: Date.now,
      },
      votes: {
        type: Number,
        default: 0,
      },
    },
  ],
});

export default mongoose.model("Question", questionSchema);
