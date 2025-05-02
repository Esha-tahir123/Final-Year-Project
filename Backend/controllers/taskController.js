
import HTMLCSSTask from "../models/htmlcss.js";
import JavaScriptTask from "../models/javascript.js";
import PythonTask from "../models/python.js";
import CsharpTask from "../models/csharp.js";
import mongoose from "mongoose";
//import taskModels from "./models/taskModels"; // Adjust the path to your dynamic task models

// Dynamic language-task mapping
const taskModels = {
  htmlcss: HTMLCSSTask,
  javascript: JavaScriptTask,
  python: PythonTask,
  csharp: CsharpTask,
};

// Fetch tasks by language
// Fetch tasks by language
//Add task 
export const addTask = async (req, res) => {
  try {
    const { language } = req.body;

    // Map user-friendly language to lowercase key
    const mappedLanguage = {
      "HTML/CSS": "htmlcss",
      JavaScript: "javascript",
      Python: "python",
      "C#": "csharp",
    }[language];

    if (!mappedLanguage || !taskModels[mappedLanguage]) {
      return res.status(400).json({ message: "Invalid or missing language field." });
    }

    const taskModel = taskModels[mappedLanguage];
    const newTask = new taskModel(req.body);
    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Error adding task", error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { language } = req.body;

    // Map user-friendly language to lowercase key
    const mappedLanguage = {
      "HTML/CSS": "htmlcss",
      JavaScript: "javascript",
      Python: "python",
      "C#": "csharp",
    }[language];

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Task ID" });
    }

    const taskModel = taskModels[mappedLanguage];
    if (!taskModel) {
      return res.status(400).json({ message: "Invalid language for task" });
    }

    const updatedTask = await taskModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Error updating task", error: error.message });
  }
};


export const getAllTasks = async (req, res) => {
  const { language } = req.params;

  // Check if the language is valid
  const taskModel = taskModels[language.toLowerCase()];
  if (!taskModel) {
    return res.status(400).json({ error: "Invalid language specified." });
  }

  try {
    const tasks = await taskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fetch task count by language
export const getTaskCount = async (req, res) => {
  const { language } = req.params;

  // Check if the language is valid
  const taskModel = taskModels[language.toLowerCase()];
  if (!taskModel) {
    return res.status(400).json({ error: "Invalid language specified." });
  }

  try {
    const count = await taskModel.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error fetching task count:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fetch HTML/CSS Tasks
export const getHTMLCSSTasks = async (req, res) => {
  try {
    const tasks = await HTMLCSSTask.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching HTML/CSS tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fetch JavaScript Tasks
export const getJavaScriptTasks = async (req, res) => {
  try {
    const tasks = await JavaScriptTask.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching JavaScript tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fetch Python Tasks
export const getPythonTasks = async (req, res) => {
  try {
    const tasks = await PythonTask.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching Python tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fetch C# Tasks
export const getCsharpTasks = async (req, res) => {
  try {
    const tasks = await CsharpTask.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching C# tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//Delete task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the task
    const deletedTask = await HTMLCSSTask.findByIdAndDelete(id)
      || await JavaScriptTask.findByIdAndDelete(id)
      || await PythonTask.findByIdAndDelete(id)
      || await CsharpTask.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Task Count Methods

