import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { htmlCssTasks } from "../constants/htmlcsstasks";
import { javascriptTasks } from "../constants/javascripttasks";
import { pythonTasks } from "../constants/pythontasks";
import { csharpTasks } from "../constants/csharptasks";
import axios from "axios";

const Assessment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const language = queryParams.get("language");
  const level = queryParams.get("level");

  const [shuffledTasks, setShuffledTasks] = useState([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [isAssessmentComplete, setIsAssessmentComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Combine tasks from all languages
  const allTasks = {
    "HTML/CSS": htmlCssTasks,
    "JavaScript": javascriptTasks,
    "Python": pythonTasks,
    "C#": csharpTasks,
  };

  useEffect(() => {
    const loadTasks = () => {
      const filteredTasks = allTasks[language]?.filter(
        (task) => task.level === level
      ) || [];
      const shuffled = [...filteredTasks].sort(() => Math.random() - 0.5).slice(0, 5);
      setShuffledTasks(shuffled);
    };

    loadTasks();
  }, [language, level]);

  const handleSubmit = async () => {
    if (!userAnswer.trim()) {
      alert("Please provide an answer before submitting.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("/api/validate-and-score", {
        code: userAnswer,
        task: shuffledTasks[currentTaskIndex],
        language,
      });

      const { score: taskScore, errors, suggestions, resources } = response.data;

      setResults((prevResults) => [
        ...prevResults,
        { task: shuffledTasks[currentTaskIndex], score: taskScore, errors, suggestions, resources },
      ]);
      setScore((prevScore) => prevScore + taskScore);

      moveToNextTask();
    } catch (error) {
      console.error("Error evaluating task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkip = () => {
    setResults((prevResults) => [
      ...prevResults,
      { task: shuffledTasks[currentTaskIndex], score: 0, errors: [], suggestions: [], resources: [] },
    ]);
    moveToNextTask();
  };

  const moveToNextTask = () => {
    if (currentTaskIndex + 1 < shuffledTasks.length) {
      setCurrentTaskIndex((prevIndex) => prevIndex + 1);
      setUserAnswer("");
    } else {
      setIsAssessmentComplete(true);
    }
  };

  if (isAssessmentComplete) {
    return (
      <div className="results-container">
        <h1>Assessment Complete!</h1>
        <p>Total Score: {score}/25</p>
        <div>
          {results.map((result, index) => (
            <div key={index} className="result">
              <h3>Task {index + 1}</h3>
              <p>Score: {result.score}</p>
              <p>Errors: {result.errors.join(", ")}</p>
              <p>Suggestions: {result.suggestions.join(", ")}</p>
              <p>Resources:</p>
              <ul>
                {result.resources.map((res, resIndex) => (
                  <li key={resIndex}>
                    <a href={res.url} target="_blank" rel="noopener noreferrer">
                      {res.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!shuffledTasks.length) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div className="assessment-container">
      <h1>{language} - {level} Assessment</h1>
      <h2>Task {currentTaskIndex + 1}/5</h2>
      <p>{shuffledTasks[currentTaskIndex].description}</p>
      <textarea
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Write your solution here"
      ></textarea>
      <div className="actions">
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        <button onClick={handleSkip}>Skip</button>
      </div>
    </div>
  );
};

export default Assessment;
