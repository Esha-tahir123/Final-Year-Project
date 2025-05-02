import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./authentication/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { demoQuestions } from "./DemoQuestions";
import { Phone, User, MapPin, Briefcase, Code } from 'lucide-react';
import CodeEditor from "./CodeEditor";
import axios from "axios";
import { languages } from "../constants/config";
const ProfileCompletion = ({ user }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    country: '',
    city: '',
    portfolioUrl: '',
    githubProfile: '',
    yearsOfExperience: '',
    primaryLanguage: '',
    skillLevel: '',
    demoTestAnswer: '',
    demoMCQAnswers: {},
  });

  const [demoTest, setDemoTest] = useState(null);
  const [testResult, setTestResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [demoOutput, setDemoOutput] = useState("");
  const [unlockedLevels, setUnlockedLevels] = useState({ Beginner: true, Intermediate: false, Expert: false });

  const iframeRef = useRef(null);
  const navigate = useNavigate();

  const steps = ['Basic Info', 'Professional Details', 'Skill Assessment'];
  const skillLevels = ["Beginner", "Intermediate", "Expert"];
  const programmingLanguages = ["JavaScript", "Python", "CSharp", "HTMLCSS"];

  useEffect(() => {
    console.log("Iframe ref initialized:", iframeRef.current);
  }, []);

  const getRandomQuestions = (questions, count) => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "programmingLanguage" || name === "skillLevel") {
      const language = name === "programmingLanguage" ? value : formData.programmingLanguage;
      const level = name === "skillLevel" ? value : formData.skillLevel;

      if (demoQuestions[language]?.[level]) {
        const selectedQuestions = demoQuestions[language][level];
        setDemoTest({
          mcqs: getRandomQuestions(selectedQuestions.mcqs, 5),
          coding: getRandomQuestions(selectedQuestions.coding, 1)[0],
        });
      } else {
        setDemoTest(null);
      }
    }
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  const handleTestCompletion = () => {
    if (formData.skillLevel === "Beginner") {
      setUnlockedLevels((prev) => ({ ...prev, Intermediate: true }));
    } else if (formData.skillLevel === "Intermediate") {
      setUnlockedLevels((prev) => ({ ...prev, Expert: true }));
    }
  };


  const calculateMCQScore = () => {
    return demoTest.mcqs.reduce((score, mcq, idx) => {
      const userAnswer = formData.demoMCQAnswers[idx];
      return mcq.answer === userAnswer ? score + 1 : score;
    }, 0);
  };

  const handleRunCode = () => {
    const { demoTestAnswer, programmingLanguage } = formData;

    if (!demoTestAnswer || !programmingLanguage) {
      setDemoOutput("Please provide code and select a programming language.");
      return;
    }

    if (["htmlcss", "javascript"].includes(programmingLanguage.toLowerCase())) {
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Code Output</title>
            ${
              programmingLanguage.toLowerCase() === "htmlcss"
                ? `<style>${demoTestAnswer}</style>`
                : ""
            }
          </head>
          <body>
            ${
              programmingLanguage.toLowerCase() === "htmlcss"
                ? demoTestAnswer
                : ""
            }
            ${
              programmingLanguage.toLowerCase() === "javascript"
                ? `<script>${demoTestAnswer}</script>`
                : ""
            }
          </body>
        </html>
      `;
      if (iframeRef.current) {
        iframeRef.current.srcdoc = htmlContent;
        setDemoOutput("Code executed successfully in iframe.");
      } else {
        setDemoOutput("Error: Unable to load iframe.");
      }
    } else {
      setLoading(true);
      axios
        .post("http://localhost:5001/api/run", {
          language: programmingLanguage,
          files: [{ name: "main", content: demoTestAnswer }],
          version:programmingLanguage.version
        })
        .then((response) => {
          setDemoOutput(response.data.output || response.data.stderr || "No output returned.");
        })
        .catch((error) => {
          setDemoOutput("An error occurred while running your code.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };const handleSubmit = async () => {
    const { fullName, phone, country, city, skillLevel, programmingLanguage, demoTestAnswer, demoMCQAnswers } = formData;

    // Check required fields
    if (!fullName || !phone || !country || !city || !skillLevel || !programmingLanguage) {
      setError("Please fill all required fields.");
      return;
    }

    if (!user || !user.uid) {
      setError("User is not logged in or not properly authenticated.");
      return;
    }

    const allMCQsAnswered =
      demoTest?.mcqs?.every((_, idx) => demoMCQAnswers[idx] !== undefined) ?? false;

    if (!allMCQsAnswered || !demoTestAnswer) {
      setError("Please complete the test to verify your skill level.");
      return;
    }

    try {
      setIsSaving(true);
      const mcqScore = calculateMCQScore();
      console.log("MCQ Score:", mcqScore);

      const response = await axios.post("http://localhost:5001/api/demo-evaluate", {
        codingAnswer: demoTestAnswer,
        language: programmingLanguage,
        question: demoTest.coding.question,
      });

      const { codingScore, adherence, suggestions } = response.data;
      console.log("Coding Score:", codingScore);

      const totalScore = mcqScore + codingScore;
      console.log("Total Score:", totalScore);

      let assignedSkillLevel = "None";
      if (skillLevel === "Beginner" && totalScore >= 5) {
        assignedSkillLevel = "Beginner";
      } else if (skillLevel === "Intermediate" && totalScore >= 7) {
        assignedSkillLevel = "Intermediate";
      } else if (skillLevel === "Expert" && totalScore >= 8) {
        assignedSkillLevel = "Expert";
      }
      else 
      assignedSkillLevel="None"

      setTestResult({
        passed: assignedSkillLevel !== "None",
        mcqScore,
        codingScore,
        totalScore,
        adherence,
        suggestions,
        assignedSkillLevel,
      });

      if (assignedSkillLevel !== "None") {
        await updateDoc(doc(db, "users", user.uid), {
          ...formData,
          skillLevel: assignedSkillLevel,
          profileCompleted: true,
        });
        console.log("User profile updated.");
      }
    } catch (error) {
      console.error("Error during profile save:", error.message);
      setError("Failed to save your profile. Please try again.");
    } finally {
      setIsSaving(false);
    }

    handleTestCompletion();
  };

  const renderBasicInfo = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-gray-300">
            <User className="w-4 h-4 text-orange-500" />
            <span>Full Name<span className="text-red-500">*</span></span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-3 py-2 bg-gray-700/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-gray-300">
            <Phone className="w-4 h-4 text-orange-500" />
            <span>Phone Number<span className="text-red-500">*</span></span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full px-3 py-2 bg-gray-700/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span>Country<span className="text-red-500">*</span></span>
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Your Country"
            className="w-full px-3 py-2 bg-gray-700/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span>City<span className="text-red-500">*</span></span>
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Your City"
            className="w-full px-3 py-2 bg-gray-700/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderProfessionalDetails = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-gray-300">
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span>Years of Experience<span className="text-red-500">*</span></span>
          </label>
          <input
            type="number"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            placeholder="Years of experience"
            min="0"
            className="w-full px-3 py-2 bg-gray-700/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-gray-300">
            <Code className="w-4 h-4 text-orange-500" />
            <span>Primary Programming Language<span className="text-red-500">*</span></span>
          </label>
          <select
            name="programmingLanguage"
            value={formData.programmingLanguage}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select Language</option>
            {programmingLanguages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-gray-300">GitHub Profile (Optional)</label>
          <input
            type="url"
            name="githubProfile"
            value={formData.githubProfile}
            onChange={handleChange}
            placeholder="https://github.com/username"
            className="w-full px-3 py-2 bg-gray-700/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-gray-300">Portfolio URL (Optional)</label>
          <input
            type="url"
            name="portfolioUrl"
            value={formData.portfolioUrl}
            onChange={handleChange}
            placeholder="https://your-portfolio.com"
            className="w-full px-3 py-2 bg-gray-700/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-gray-300">Skill Level<span className="text-red-500">*</span></label>
          <select
            name="skillLevel"
            value={formData.skillLevel}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select Skill Level</option>
            {skillLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  return (
   // <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4"></div>
    <div className="max-w-4xl mx-auto bg-gray-800/50 border border-gray-700 rounded-lg">
        <div className="p-6">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Complete Your Profile
          </h2>

          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              {steps.map((label, index) => (
                <div key={label} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index <= step ? 'bg-orange-500' : 'bg-gray-700'
                  }`}>
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-20 h-1 mx-2 ${
                      index < step ? 'bg-orange-500' : 'bg-gray-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            {step === 0 && renderBasicInfo()}
            {step === 1 && renderProfessionalDetails()}
            {step === 2 && (
              <div className="space-y-6">
                {demoTest && (
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Skill Assessment Test</h3>

                    <div className="mt-4 space-y-6">
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h4 className="text-xl font-semibold mb-4">Multiple Choice Questions</h4>
                        {demoTest.mcqs.map((mcq, idx) => (
                          <div key={idx} className="mb-6 last:mb-0">
                            <p className="text-lg mb-3">{mcq.question}</p>
                            <div className="space-y-2">
                              {mcq.options.map((option, optionIdx) => (
                                <div key={optionIdx} className="flex items-center">
                                  <input
                                    type="radio"
                                    id={`mcq-${idx}-${optionIdx}`}
                                    name={`mcq-${idx}`}
                                    value={option}
                                    onChange={(e) =>
                                      setFormData((prev) => ({
                                        ...prev,
                                        demoMCQAnswers: {
                                          ...prev.demoMCQAnswers,
                                          [idx]: e.target.value,
                                        },
                                      }))
                                    }
                                    className="mr-2"
                                  />
                                  <label 
                                    htmlFor={`mcq-${idx}-${optionIdx}`}
                                    className="text-gray-300"
                                  >
                                    {option}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h4 className="text-xl font-semibold mb-4">Coding Challenge</h4>
                        <div className="mb-4">
                          <p className="text-gray-300">{demoTest.coding?.question}</p>
                        </div>
                        <div className="mb-4">
                          <CodeEditor
                            language={formData.programmingLanguage.toLowerCase()}
                            code={formData.demoTestAnswer}
                            onCodeChange={(code) =>
                              setFormData((prev) => ({
                                ...prev,
                                demoTestAnswer: code,
                              }))
                            }
                          />
                        </div>
                        <button
                          onClick={handleRunCode}
                          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-md transition-colors"
                          disabled={loading}
                        >
                          {loading ? "Running..." : "Run Code"}
                        </button>
                        {demoOutput && (
                          <div className="mt-4 bg-gray-800 p-4 rounded-md">
                            <h4 className="text-lg font-semibold mb-2">Output:</h4>
                            <iframe
                              ref={iframeRef}
                              title="Code Output"
                              className="w-full h-64 border border-gray-600 rounded-md"
                              sandbox="allow-scripts"
                            ></iframe>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {testResult && (
            <div className={`mt-8 p-6 rounded-lg ${
              testResult.passed ? 'bg-green-600' : 'bg-red-600'
            } text-white`}>
              <h3 className="text-2xl font-bold mb-4">
                {testResult.passed ? "✅ Skill Level Verified" : "❌ NotVerified"}
              </h3>
              <div className="space-y-2">
                <p><strong>MCQ Score:</strong> {testResult.mcqScore}/5</p>
                <p><strong>Coding Score:</strong> {testResult.codingScore}/5</p>
                <p><strong>Total Score:</strong> {testResult.totalScore}/10</p>
                <p><strong>Skill Level Assigned:</strong> {testResult.assignedSkillLevel}</p>
                <p><strong>Code Quality:</strong> {testResult.adherence}%</p>
                {testResult.suggestions.length > 0 && (
                  <>
                    <h4 className="text-lg font-semibold mt-4">Suggestions for Improvement:</h4>
                    <ul className="list-disc pl-6">
                      {testResult.suggestions.map((suggestion, idx) => (
                        <li key={idx}>{suggestion}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              {testResult.passed && (
                <button
                  className="mt-6 px-6 py-2 bg-white text-green-600 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => navigate("/DeveloperHome")}
                >
                  Continue to Dashboard
                </button>
              )}
            </div>
          )}

          {error && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-md text-red-500">
              {error}
            </div>
          )}

          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className={`px-6 py-2 rounded-md transition-colors ${
                step === 0
                  ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                  : "bg-gray-700 hover:bg-gray-600 text-white"
              }`}
            >
              Back
            </button>

            {step === steps.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={isSaving}
                className="px-6 py-2 rounded-md bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? "Submitting..." : "Complete Assessment"}
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2 rounded-md bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 transition-all"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
   // </div>
  );
};

export default ProfileCompletion;