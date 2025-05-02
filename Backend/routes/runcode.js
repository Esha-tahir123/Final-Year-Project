import express from "express";
import { validateCodeAndFetchResources } from "../controllers/validationController.js";
import { runCode } from "../controllers/runCodeController.js";
import { saveResult } from "../controllers/saveResultController.js";

const router = express.Router();

// Route to validate and score code and fetch resources
router.post("/validate-and-score", validateCodeAndFetchResources);

router.post("/", runCode);
router.post("/save-result", saveResult);


//router.post("/run", runCode);

export default router;
