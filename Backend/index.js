import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import taskRouter from "./routes/htmlcss.js";
import runcode from "./routes/runcode.js";
import Task from "./models/htmlcss.js"; // HTML/CSS Task model
import PythonTask from "./models/python.js"; // Python Task model
import CsharpTask from "./models/csharp.js"; // C# Task model
import htmlCssTasks from "./htmlcsstasks.js";
import pythonTasks from "./pythontasks.js"; // Python tasks dataset
import csharpTasks from "./csharptasks.js"; // C# tasks dataset
import pythonRoutes from "./routes/python.js";
import csharpRouter from "./routes/csharp.js";
import JavaScriptTask from "./models/javascript.js"; // Import JavaScript task model
import javascriptTasks from "./javascripttasks.js";
import jsRouter from "./routes/javascript.js";
import taskRoute from "./routes/tasks.js"; // Import task routes
import demoEvaluateRoutes from "./routes/demorun.js"
import validateRouter from "./routes/runcode.js"
import Question from "./models/Question.js"; // Note the .js extension

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());


// Connect to MongoDB
const url =
  "mongodb+srv://esha:esha2002@eshakhan.eeh341o.mongodb.net/ChallengePool?retryWrites=true&w=majority";
mongoose.connect(url).then(() => {
  console.log("Connected to the database.");
  populateTasksOnServerStart(); // Call task population function
});

// Populate tasks on server startup
const populateTasksOnServerStart = async () => {
  try {
    // Populate HTML/CSS tasks
    await Task.deleteMany();
    console.log("Previous HTML/CSS tasks deleted.");
    await Task.insertMany(htmlCssTasks);
    console.log("HTML/CSS tasks populated.");

    // Populate Python tasks
    await PythonTask.deleteMany();
    console.log("Previous Python tasks deleted.");
    await PythonTask.insertMany(pythonTasks);
    console.log("Python tasks populated.");

    // Populate C# tasks
    await CsharpTask.deleteMany();
    console.log("Previous C# tasks deleted.");
    await CsharpTask.insertMany(csharpTasks);
    console.log("C# tasks populated.");

    // Populate JavaScript tasks
    await JavaScriptTask.deleteMany();
    console.log("Previous JavaScript tasks deleted.");
    await JavaScriptTask.insertMany(javascriptTasks);
    console.log("JavaScript tasks populated.");
  } catch (err) {
    console.error("Error populating tasks:", err.message);
  }
};


// Mount routes
app.use("/api", taskRouter);
app.use("/api", taskRoute);
app.use("/api/run", runcode);
app.use("/api", validateRouter);

//app.use("/api", runcoderouter);
app.use('/api', pythonRoutes);
app.use("/api", csharpRouter);
app.use("/api", jsRouter); // Mount JavaScript route
app.use("/api", demoEvaluateRoutes);
const PORT = process.env.PORT || 5001; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.post("/api/questions", async (req, res) => {
  try {
    const { title, content, author, tags } = req.body;
    const question = new Question({
      title,
      content,
      author,
      tags,
      timestamp: new Date(),
      votes: 0,
      answers: [],
    });

    const savedQuestion = await question.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add answer to question
app.post("/api/questions/:id/answers", async (req, res) => {
  try {
    const { content, author } = req.body;
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    question.answers.push({
      content,
      author,
      timestamp: new Date(),
      votes: 0,
    });

    const updatedQuestion = await question.save();
    res.json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Vote on question
app.post("/api/questions/:id/vote", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    question.votes += parseInt(req.body.value);
    const updatedQuestion = await question.save();
    res.json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Vote on answer
app.post("/api/questions/:id/answers/:answerId/vote", async (req, res) => {
  try {
    const { value } = req.body;
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    const answer = question.answers.id(req.params.answerId);

    if (!answer) {
      return res.status(404).json({ message: "Answer not found" });
    }

    answer.votes += parseInt(value);
    await question.save();
    res.json(question);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Sort questions
app.get("/api/questions/sort", async (req, res) => {
  try {
    const { sortBy } = req.query;
    const sortCriteria = sortBy === "votes" ? { votes: -1 } : { timestamp: -1 };
    const questions = await Question.find().sort(sortCriteria);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

