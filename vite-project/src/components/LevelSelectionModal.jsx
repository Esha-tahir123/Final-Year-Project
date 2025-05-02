import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LevelSelection.css";

const LevelSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const language = queryParams.get("language");

  const handleLevelSelect = (level) => {
    if (!language) {
      alert("Please select a language before choosing a level.");
      return;
    }
    navigate(`/assessment?language=${encodeURIComponent(language)}&level=${encodeURIComponent(level)}`);
  };

  return (
    <div className="level-selection-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">Select Level for Assessment</h1>
      <p className="text-lg text-center mb-8">
        You are about to take the <span className="font-semibold text-yellow-400">{language || "selected"}</span> assessment. Choose your difficulty level:
      </p>
      <div className="flex flex-col gap-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-transform transform hover:-translate-y-1"
          onClick={() => handleLevelSelect("Basic")}
        >
          Beginner
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition-transform transform hover:-translate-y-1"
          onClick={() => handleLevelSelect("Intermediate")}
        >
          Intermediate
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-transform transform hover:-translate-y-1"
          onClick={() => handleLevelSelect("Advanced")}
        >
          Advanced
        </button>
      </div>
      <button
        className="mt-6 text-sm text-gray-400 hover:text-white transition-colors"
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        Cancel
      </button>
    </div>
  );
};

export default LevelSelection;
