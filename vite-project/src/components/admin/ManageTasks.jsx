import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTaskForm from "./AddTaskForm";
import TaskTable from "./TaskTable";

const ManageTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskCounts, setTaskCounts] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const [editingTask, setEditingTask] = useState(null);

  const API_URL = "http://localhost:5001/api";

  useEffect(() => {
    fetchTasks();
    fetchTaskCounts();
  }, [selectedLanguage]);

  // Fetch tasks for the selected language
  const fetchTasks = async () => {
    try {
      const languageKey = formatLanguage(selectedLanguage);
      const response = await axios.get(`${API_URL}/tasks/${languageKey}`);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error.response?.data || error.message);
    }
  };

  // Fetch total task counts for all languages
  const fetchTaskCounts = async () => {
    const languages = ["HTML/CSS", "JavaScript", "Python", "C#"];
    const counts = {};
    try {
      for (const lang of languages) {
        const languageKey = formatLanguage(lang);
        const response = await axios.get(`${API_URL}/tasks/${languageKey}/count`);
        counts[lang] = response.data.count;
      }
      setTaskCounts(counts);
    } catch (error) {
      console.error("Error fetching task counts:", error.response?.data || error.message);
    }
  };

  // Map frontend language names to backend keys
  const formatLanguage = (language) => {
    const mapping = {
      "HTML/CSS": "htmlcss",
      JavaScript: "javascript",
      Python: "python",
      "C#": "csharp",
    };
    return mapping[language];
  };

  // Add a new task
  const handleAddTask = async (newTask) => {
    try {
      const language = formatLanguage(selectedLanguage);
      const payload = { ...newTask, language };
      const response = await axios.post(`${API_URL}/tasks`, payload);
      console.log("Task added successfully:", response.data);

      fetchTasks(); // Refresh the task list
    } catch (error) {
      console.error("Error adding task:", error.response?.data || error.message);
      alert(`Error adding task: ${error.response?.data?.message || error.message}`);
    }
  };

  // Update a task
  const handleUpdateTask = async (updatedTask) => {
    if (!updatedTask || !updatedTask._id) {
      console.error("Invalid task ID");
      return;
    }

    try {
      const response = await axios.put(`${API_URL}/tasks/${updatedTask._id}`, updatedTask);
      console.log("Task updated successfully:", response.data);

      fetchTasks();
      setEditingTask(null);
    } catch (error) {
      console.error("Error updating task:", error.response?.data || error.message);
      alert(`Error updating task: ${error.response?.data?.message || error.message}`);
    }
  };

  // Delete a task
  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      fetchTasks(); // Refresh tasks after deletion
    } catch (error) {
      console.error("Error deleting task:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Manage Tasks</h1>

      {/* Task Counts Section */}
      <div className="mb-6 grid grid-cols-4 gap-4">
        {["HTML/CSS", "JavaScript", "Python", "C#"].map((lang) => (
          <div key={lang} className="bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">{lang}</h2>
            <p>Total Tasks: {taskCounts[lang] || 0}</p>
          </div>
        ))}
      </div>

      {/* Language Selector */}
      <div className="mb-6">
        <label htmlFor="language" className="block text-lg mb-2">
          Select Language:
        </label>
        <select
          id="language"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white"
        >
                    <option value="Select Language">Select Language</option>

          <option value="HTML/CSS">HTML/CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="C#">C#</option>
        </select>
      </div>

      {/* Add Task Section */}
      <AddTaskForm selectedLanguage={selectedLanguage} handleAddTask={handleAddTask} />

      {/* Current Tasks Section */}
      <TaskTable
        tasks={tasks}
        setEditingTask={setEditingTask}
        handleDeleteTask={handleDeleteTask}
        handleUpdateTask={handleUpdateTask}
      />
    </div>
  );
};

export default ManageTasks;
