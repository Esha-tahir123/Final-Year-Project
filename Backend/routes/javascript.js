import express from "express";
import { getJavaScriptTasks } from "../controllers/taskController.js";

const router = express.Router();

router.get("/api/javascript-tasks", getJavaScriptTasks);

export default router;
