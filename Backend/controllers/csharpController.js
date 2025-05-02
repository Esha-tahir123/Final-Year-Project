import CsharpTask from "../models/csharp.js";

// Controller to fetch C# tasks by difficulty level
export const getCsharpTasks = async (req, res) => {
  const { level } = req.query;

  try {
    const tasks = await CsharpTask.find({ level: level });

    if (tasks.length > 0) {
      res.status(200).json(tasks);
    } else {
      res.status(404).json({ message: "No C# tasks found for this level" });
    }
  } catch (error) {
    console.error("Error fetching C# tasks:", error);
    res.status(500).json({ error: "Server error" });
  }
};
