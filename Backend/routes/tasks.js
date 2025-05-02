import express from "express";
import { getAllTasks, getTaskCount ,addTask, updateTask,deleteTask} from "../controllers/taskController.js";

const router = express.Router();
router.post("/tasks", addTask);

router.put("/tasks/:id", updateTask);

// Define routes dynamically for all supported languages
router.get("/tasks/:language", getAllTasks); // Fetch tasks by language
router.get("/tasks/:language/count", getTaskCount); // Fetch task count by language
router.delete("/tasks/:id", deleteTask);

export default router;
