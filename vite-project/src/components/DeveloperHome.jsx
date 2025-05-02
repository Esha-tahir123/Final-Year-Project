import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeveloperHome = ({ userProfile }) => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");

  const initialUnlockedLevels = {
    JavaScript: "Beginner",
    "C#": "Beginner",
    "HTML/CSS": userProfile?.primaryLanguage === "HTML/CSS" 
      ? userProfile.skillLevel 
      : "Beginner",
    Python: "Beginner",
  };

  const [unlockedLevels, setUnlockedLevels] = useState(initialUnlockedLevels);
  const levelOrder = ["Beginner", "Intermediate", "Expert"];

  const isLevelUnlocked = (language, level) => {
    const currentLevelIndex = levelOrder.indexOf(unlockedLevels[language]);
    const levelIndex = levelOrder.indexOf(level);
    return levelIndex <= currentLevelIndex;
  };

  const skills = [
    {
      name: "JavaScript",
      imgSrc: "https://assist-software.net/sites/default/files/promoted_images/blog/javascript_logo.png",
      language: "JavaScript",
      description: "Master modern JavaScript development",
      bgColor: "from-yellow-500/10 to-orange-600/10"
    },
    {
      name: "C#",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
      language: "C#",
      description: "Build powerful applications with C#",
      bgColor: "from-purple-500/10 to-blue-600/10"
    },
    {
      name: "HTML/CSS",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      language: "HTML/CSS",
      description: "Create beautiful, responsive websites",
      bgColor: "from-orange-500/10 to-red-600/10"
    },
    {
      name: "Python",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      language: "Python",
      description: "Learn Python programming fundamentals",
      bgColor: "from-blue-500/10 to-green-600/10"
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,102,0,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,102,0,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.9))]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Unlock <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">Your Potential!</span>
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                Start assessing your skills in JavaScript, C#, HTML/CSS, or Python
                and earn recognition badges based on your expertise level.
              </p>
              <button
                onClick={() => navigate("/Instructions")}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-700 text-white font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20"
              >
                View Instructions
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Skills Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Choose Your <span className="text-orange-500">Skill to Level Up!</span>
          </h2>
          <p className="text-neutral-400 text-center mb-12">
            Select a programming language to begin your assessment journey
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative rounded-xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.bgColor} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative bg-neutral-900/90 p-8 h-full border border-neutral-700 rounded-xl backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-24 h-24 mb-6 relative">
                      <img
                        src={skill.imgSrc}
                        alt={`${skill.name} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                    <p className="text-neutral-400 text-sm mb-6 flex-grow">
                      {skill.description}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedSkill(skill.language);
                        setIsDialogOpen(true);
                      }}
                      className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-700 text-white font-medium transition-all duration-200 transform hover:shadow-lg hover:shadow-orange-500/20"
                    >
                      Start Assessment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Level Selection Modal */}
        {isDialogOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsDialogOpen(false)} />
            <div className="relative bg-neutral-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-6">
                <h2 className="text-2xl font-bold text-white">
                  {selectedSkill} Assessment
                </h2>
                <p className="text-neutral-200 mt-2">Choose your difficulty level</p>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 space-y-4">
                {levelOrder.map((level) => {
                  const isUnlocked = isLevelUnlocked(selectedSkill, level);
                  return (
                    <button
                      key={level}
                      onClick={() => {
                        if (isUnlocked) {
                          navigate(`/assessment?language=${encodeURIComponent(selectedSkill)}&level=${encodeURIComponent(level)}`);
                        }
                      }}
                      className={`
                        w-full p-4 rounded-xl transition-all duration-200 relative
                        ${isUnlocked 
                          ? 'bg-neutral-700 hover:bg-neutral-600 hover:shadow-lg' 
                          : 'bg-neutral-900 cursor-not-allowed'}
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium text-lg block">{level}</span>
                          <span className="text-sm text-neutral-400 block mt-1">
                            {level === "Beginner" && "Start your journey"}
                            {level === "Intermediate" && "Enhance your skills"}
                            {level === "Expert" && "Master the language"}
                          </span>
                        </div>
                        <div className="text-2xl">
                          {isUnlocked ? '🎯' : '🔒'}
                        </div>
                      </div>
                      
                      {/* Progress indicator */}
                      {isUnlocked && (
                        <div className="w-full h-1 bg-neutral-600 rounded-full mt-4">
                          <div 
                            className="h-full bg-gradient-to-r from-orange-500 to-orange-700 rounded-full"
                            style={{ width: level === "Beginner" ? "33%" : level === "Intermediate" ? "66%" : "100%" }}
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              
              {/* Modal Footer */}
              <div className="border-t border-neutral-700 p-4 text-center">
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="px-6 py-2 text-neutral-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-neutral-900/50 backdrop-blur-sm border-t border-neutral-800 py-6 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-400">
            © 2023 Developer Dashboard. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DeveloperHome;