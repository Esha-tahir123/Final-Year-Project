import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import pythonTasks from "../constants/pythontasks";
import { languages } from "../constants/config";
import { Trophy, Star, Medal, X, Play, Send, SkipForward, CheckCircle, Clock } from "lucide-react";

const PythonAssessment = () => {
  const language = "python";
  const [tasks, setTasks] = useState([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [currentCode, setCurrentCode] = useState("");
  const [skippedTasks, setSkippedTasks] = useState([]);
  const [results, setResults] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [badge, setBadge] = useState(""); 
  const [timeLeft, setTimeLeft] = useState(60);
  const iframeRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDetailedResults, setShowDetailedResults] = useState(false);
  const [output, setOutput] = useState("");

  const badgeConfig = {
    "No Badge Earned": { 
      icon: <X color="red" size={48} />, 
      description: "Keep practicing!" 
    },
    "Bronze Badge": { 
      icon: <Medal color="bronze" size={48} />, 
      description: "Good start! You're learning." 
    },
    "Silver Badge": { 
      icon: <Star color="silver" size={48} />, 
      description: "Impressive progress!" 
    },
    "Gold Badge": { 
      icon: <Trophy color="gold" size={48} />, 
      description: "Excellent achievement!" 
    }
  };

  useEffect(() => {
    const fetchTasks = () => {
      const shuffledTasks = pythonTasks
        .slice(0, 20)
        .sort(() => Math.random() - 0.5);
      setTasks(shuffledTasks);
      if (shuffledTasks.length > 0) {
        setCurrentCode(shuffledTasks[0].existingCode || "");
      }
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSkipTask();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const resetTimer = () => {
    setTimeLeft(60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleRunCode = async () => {
    const clanguage = languages.find((lang) => lang.language === language);

    if (!clanguage) {
      setOutput("Language runtime not configured.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/api/run", {
        language,
        version: clanguage.version,
        files: [{ content: currentCode }],
      });

      const outputToDisplay = response.data.output || 
                               response.data.stderr || 
                               response.data.error || 
                               "Execution returned no output.";
      
      setOutput(outputToDisplay);
    } catch (error) {
      console.error("Error running code:", error.response?.data || error.message);
      setOutput(
        error.response?.data?.error || 
        error.message || 
        "An error occurred while running your code."
      );
    }
  };

  const renderOutput = () => {
    if (!output) return null;

    return (
      <div className="bg-gray-900 p-4 rounded-md mt-4">
        <h3 className="font-semibold mb-2">Output:</h3>
        <pre className="whitespace-pre-wrap break-words">{output}</pre>
      </div>
    );
  };

  const handleSkipTask = async () => {
    const currentTask = tasks[currentTaskIndex];
    const skippedResult = {
      task: currentTask.title,
      score: 0,
      errors: ["Task skipped by user or time ran out"],
      suggestions: ["Complete this task later to earn marks."],
    };
    setSkippedTasks((prevSkipped) => [...prevSkipped, currentTask]);
    await saveResultToDB(skippedResult);
    handleNextTask();
  };

  const handleSubmitAnswer = async () => {
    const currentTask = tasks[currentTaskIndex];
    setIsSubmitting(true);

    let payload;
    try { 
      payload = {
        code: currentCode.trim(),
        language: currentTask.language || "Python",
        task: {
          description: currentTask.description,
          title: currentTask.title,
          testCases: currentTask.testCases || [],
        },
      };

      const response = await axios.post("http://localhost:5001/api/validate-and-score", payload);

      if (!response?.data) {
        throw new Error("Invalid response from backend");
      }

      const result = {
        task: currentTask.title,
        score: response.data.overallScore || 0,
        errors: response.data.errors || [],
        suggestions: response.data.suggestions || [],
        explanation: response.data.explanation || "",
        output: response.data.output || "",
        resources: response.data.resources || [],
        testCaseResults: response.data.testCaseResults || [],
      };

      setResults((prevResults) => [...prevResults, result]);
      await saveResultToDB(result);
      handleNextTask();
    } catch (error) {
      console.error("Error validating answer:", error);
      const errorMessage = error.response?.data?.error || error.message || "An unknown error occurred.";
      const errorTaskTitle = payload?.task?.title || currentTask.title;

      const errorResult = {
        task: errorTaskTitle,
        score: 0,
        errors: [errorMessage],
        suggestions: ["Please review your code"],
      };

      setResults((prevResults) => [...prevResults, errorResult]);
      await saveResultToDB(errorResult);
      handleNextTask();
    }
  };

  const saveResultToDB = async (result) => {
    try {
      console.log("Saving Result to DB:", result);
  
      const response = await axios.post("http://localhost:5001/api/save-result", result);
  
      if (response?.data?.savedResult) {
        console.log("Saved Result Successfully:", response.data.savedResult);
      } else {
        console.error("Failed to save result. Response:", response.data);
      }
  
      if (result.resources?.length > 0) {
        console.log("Learning Resources for Task:", result.resources);
      }
    } catch (error) {
      console.error("Error saving result to DB:", error);
    }
  };
  
  const handleNextTask = () => {
    setIsSubmitting(false);

    const nextIndex = currentTaskIndex + 1;
    if (nextIndex < tasks.length) {
      setCurrentTaskIndex(nextIndex);
      setCurrentCode(tasks[nextIndex].existingCode || "");
      resetTimer();
    } else {
      calculateTotalScore();
      setIsCompleted(true);
    }
  };

  const calculateTotalScore = () => {
    const total = results.reduce((sum, result) => sum + (result.score || 0), 0);
    setTotalScore(total);

    if (total >= 180) {
      setBadge("Gold Badge");
    } else if (total >= 140) {
      setBadge("Silver Badge");
    } else if (total >= 100) {
      setBadge("Bronze Badge");
    } else {
      setBadge("No Badge Earned");
    }
  };

  // Completed assessment and active task views remain the same as in the previous implementation
  if (isCompleted) {
    const BadgeInfo = badgeConfig[badge];
    
    return (
      <div className="container mx-auto p-6 mt-24 max-w-4xl"> {/* Increased margin and added max width */}
        {/* Header with gradient */}
        <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
          Assessment Complete
        </h1>
        
        {/* Score card with improved appearance */}
        <div className="bg-gray-900 rounded-xl shadow-2xl p-8 mb-8 border border-orange-500/20">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-red-600 p-1 mb-4">
                <div className="bg-gray-900 rounded-full w-full h-full flex items-center justify-center">
                  <div className="text-5xl">{BadgeInfo.icon}</div>
                </div>
              </div>
              
              {/* Score display with animation */}
              <h2 className="text-4xl font-bold mt-2 mb-3">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                  {totalScore}
                </span> 
                <span className="text-gray-400">/ 200</span>
              </h2>
              
              {/* Badge name with visual emphasis */}
              <div className="mb-3">
                <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-700 text-white text-xl font-bold">
                  {badge}
                </span>
              </div>
              
              {/* Badge description */}
              <p className="text-gray-400 text-lg max-w-lg mx-auto">
                {BadgeInfo.description}
              </p>
            </div>
          </div>
        
          {/* Action buttons with improved styling */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300 font-medium flex items-center space-x-2"
              onClick={() => setShowDetailedResults(!showDetailedResults)}
            >
              {showDetailedResults ? (
                <>
                  <span>Hide Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              ) : (
                <>
                  <span>View Detailed Results</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
            
            {skippedTasks.length > 0 && (
              <button
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300 font-medium flex items-center space-x-2"
                onClick={() => {
                  setTasks(skippedTasks);
                  setSkippedTasks([]);
                  setIsCompleted(false);
                  setCurrentTaskIndex(0);
                  setCurrentCode(skippedTasks[0]?.existingCode || "");
                  resetTimer();
                }}
              >
                <span>Attempt Skipped Questions</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>
    
        {/* Detailed results with animation and improved card design */}
        {showDetailedResults && (
          <div className="mt-4 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Detailed Results
            </h2>
            <ul className="space-y-6">
              {results.map((result, index) => (
                <li 
                  key={index} 
                  className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:border-orange-500/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-orange-400 mb-3 flex items-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white mr-3 text-sm font-bold">
                      {index + 1}
                    </span>
                    Task: {result.task}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mb-2">
                    <div className="bg-gray-700/50 rounded-lg px-4 py-2">
                      <span className="text-gray-400 text-sm">Score</span>
                      <p className="text-2xl font-bold text-white">{result.score}</p>
                    </div>
                  </div>
                  
                  {result.errors?.length > 0 && (
                    <div className="mt-4 bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                      <h4 className="text-red-400 font-semibold mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Errors
                      </h4>
                      <ul className="list-disc ml-6 space-y-1 text-red-200">
                        {result.errors.map((error, i) => (
                          <li key={i}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {result.suggestions?.length > 0 && (
                    <div className="mt-4 bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                      <h4 className="text-blue-400 font-semibold mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        Suggestions
                      </h4>
                      <ul className="list-disc ml-6 space-y-1 text-blue-200">
                        {result.suggestions.map((suggestion, i) => (
                          <li key={i}>{suggestion}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {result.resources?.length > 0 && (
                    <div className="mt-4 bg-green-900/20 border border-green-800/30 rounded-lg p-4">
                      <h4 className="text-green-400 font-semibold mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                        </svg>
                        Learning Resources
                      </h4>
                      <ul className="space-y-2 mt-3">
                        {result.resources.map((resource, i) => (
                          <li key={i} className="flex">
                            <a
                              href={resource}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                              </svg>
                              {resource}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Add a share and certificate option */}
        <div className="mt-8 flex justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300 font-medium flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            <span>Share Results</span>
          </button>
        </div>
      </div>
    );
  }

  // Active task view
  const currentTask = tasks[currentTaskIndex];
  if (!currentTask) return <div className="mt-20">Loading tasks...</div>; // Added mt-20 here too
  
  return (
    <div className="w-full container mx-auto p-4 flex flex-col md:flex-row items-stretch mt-24">
      {/* Added mt-20 for top margin */}
      <div className="w-full md:w-1/2 flex flex-col p-4">
        <h1 className="text-4xl p-4 font-semibold bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">Challenge {currentTaskIndex + 1} </h1>
        <h2 className="text-xl font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">{currentTask.title}</h2>
        <p className="text-amber-100">{currentTask.description}</p>
      </div>

      <div className="w-[2px] bg-red-900 hidden md:block"></div>

      <div className="w-full md:w-1/2 flex flex-col justify-between items-center mv-4">
        <div className="w-full flex justify-end mb-2 sticky top-24 z-10">
          <div 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-md ${
              timeLeft <= 15 
                ? 'bg-gradient-to-r from-red-600 to-red-400 text-white' 
                : 'bg-gradient-to-r from-orange-600 to-orange-400 text-white'
            }`}
          >
            <Clock className="w-5 h-5" />
            <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
            {timeLeft <= 15 && (
              <span className="animate-pulse">
                <CheckCircle className="w-4 h-4" />
              </span>
            )}
          </div>
        </div>

        <AceEditor
          mode="python"
          theme="monokai"
          value={currentCode}
          onChange={(newCode) => setCurrentCode(newCode)}
          name="python-editor"
          editorProps={{ $blockScrolling: true }}
          fontSize={14}
          width="100%"
          height="300px"
        />
    
        <div className="flex justify-between w-full mt-5">
          <div className="flex space-x-3">
            <button
              onClick={handleRunCode}
              className="bg-neutral-900 text-white py-2 px-6 border rounded-lg hover:bg-neutral-500 transition-all duration-300 shadow-lg flex items-center space-x-2"
            >
              <Play className="w-4 h-4" />
              <span>Run</span>
            </button>
            <button
              onClick={handleSubmitAnswer}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-orange-400 to-red-600 text-white py-2 px-6 rounded-lg hover:from-orange-700 hover:to-orange-900 transition-all duration-300 shadow-lg flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Processing..." : "Submit"}</span>
            </button>
          </div>
          <div>
            <button 
              onClick={handleSkipTask}
              className="bg-neutral-900 border text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 shadow-lg flex items-center space-x-2"
            >
              <SkipForward className="w-4 h-4" />
              <span>Skip</span>
            </button>
          </div>
        </div>

        <div className="w-full h-64 border mt-4 rounded-md">
          {renderOutput()}
        </div>
      </div>
    </div>
  );
};

export default PythonAssessment;