// routes/htmlcss.js
import express from "express";
import { getHTMLCSSTasks } from "../controllers/taskController.js";

const router = express.Router();
router.get("/htmlcss-tasks", getHTMLCSSTasks);

export default router;