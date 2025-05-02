import React from 'react';

const AssessmentInstructions = () => {
  return (
    <div className="bg-cover bg-center min-h-screen"
         style={{ 
           backgroundImage: "url('https://img.pikbest.com/wp/202408/orange-gradient-background-and-black-with-abstract-3d-wave-effect_9716896.jpg!bw700')" 
         }}>
      <div className="bg-black bg-opacity-50 min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text mb-6">Welcome to SkillX!</h2>

          <p className="text-lg text-white text-center mb-6">
            This assessment is designed to evaluate and improve your practical skills as a software developer through real-world scenarios and challenges.
          </p>

          <ol className="list-decimal pl-6 text-lg text-white mb-6">
            <li className="mb-2">
              You will be presented with a series of challenges that simulate real-world tasks commonly faced by software developers.
            </li>
            <li className="mb-2">
              The difficulty of each task will adjust dynamically based on your performance in previous challenges.
            </li>
            <li className="mb-2">
              You are encouraged to apply your skills creatively and efficiently to solve each challenge.
            </li>
            <li className="mb-2">
              Upon completing each challenge, you will receive immediate feedback on your performance and suggestions for improvement.
            </li>
            <li className="mb-2">
              Your overall score and skill-level badges will be updated in real-time based on your task completion and accuracy.
            </li>
          </ol>


         
        </div>
      </div>
    </div>
  );
};

export default AssessmentInstructions;
