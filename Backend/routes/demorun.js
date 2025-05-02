import express from "express";
import { demoEvaluateSubmission } from "../controllers/demoEvaluateController.js";

const router = express.Router();

// Route for demo evaluation
router.post("/demo-evaluate", demoEvaluateSubmission);

export default router;
