import express from 'express';
import { getPythonTasks } from '../controllers/taskController.js';

const router = express.Router();

// Route for fetching Python tasks
router.get('/python-tasks', getPythonTasks);

export default router;
