import React, { useState } from "react";

const AddTaskForm = ({ selectedLanguage, handleAddTask }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    existingCode: "",
    testCases: [{ condition: "" }],
    solutionExplanation: "",
    level: "Basic",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newTask.title ||
      !newTask.description ||
      !newTask.existingCode ||
      !newTask.solutionExplanation ||
      !newTask.testCases[0].condition
    ) {
      alert("Please fill out all required fields.");
      return;
    }
    handleAddTask(newTask);
    setNewTask({
      title: "",
      description: "",
      existingCode: "",
      testCases: [{ condition: "" }],
      solutionExplanation: "",
      level: "Basic",
    });
  };

  return (
    <div className="mb-6 bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <textarea
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          ></textarea>
          <textarea
            placeholder="Existing Code"
            value={newTask.existingCode}
            onChange={(e) => setNewTask({ ...newTask, existingCode: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white col-span-2"
          ></textarea>
          <textarea
            placeholder="Solution Explanation"
            value={newTask.solutionExplanation}
            onChange={(e) => setNewTask({ ...newTask, solutionExplanation: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white col-span-2"
          ></textarea>
          <input
            type="text"
            placeholder="Test Case Condition"
            value={newTask.testCases[0].condition}
            onChange={(e) =>
              setNewTask({ ...newTask, testCases: [{ condition: e.target.value }] })
            }
            className="p-2 rounded bg-gray-700 text-white"
          />
          <select
            value={newTask.level}
            onChange={(e) => setNewTask({ ...newTask, level: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          >
            <option value="Basic">Basic</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
