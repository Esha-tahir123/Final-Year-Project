import express from "express";
import { getCsharpTasks } from "../controllers/csharpController.js";
const router = express.Router();

// Route to fetch C# tasks by difficulty level
router.get("/csharp-tasks", getCsharpTasks);

export default router;
