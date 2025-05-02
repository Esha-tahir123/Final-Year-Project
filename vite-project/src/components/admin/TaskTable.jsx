import React from "react";

const TaskTable = ({ tasks, setEditingTask, handleDeleteTask, handleUpdateTask }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Current Tasks</h2>
      <table className="w-full bg-gray-700 rounded-lg">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-left">Level</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id} className="border-t border-gray-600">
              <td className="p-4">{task.title}</td>
              <td className="p-4">{task.description}</td>
              <td className="p-4">{task.level}</td>
              <td className="p-4">
                <button
                  onClick={() => setEditingTask(task)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(task._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
