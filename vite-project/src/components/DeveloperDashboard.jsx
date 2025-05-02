import React, { useState } from 'react';
import LoggedInNavbar from '../components/LoggedInNavbar';
import CodeEditor from './CodeEditor'; // Assuming CodeEditor is in the same directory

const DeveloperDashboard = () => {
  const [selectedSkill, setSelectedSkill] = useState(null); // Store selected skill

  const cardStyles = {
    boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
    borderRadius: "10px",
    border: "2px solid",
    borderImageSlice: 1,
    borderImageSource: "linear-gradient(to right, orange, red)",
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    height: '250px',
  };

  const skills = [
    { name: 'JavaScript', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTytJXaZrs_aCzd8IcEjptHQAD9sGTBoQxA&s', language: 'javascript' },
    { name: 'C#', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png', language: 'csharp' },
    { name: 'HTML/CSS', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', language: 'html' },
    { name: 'Python', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', language: 'python' }
  ];

  return (
    <div className="container mx-auto h-full min-h-screen flex flex-col" style={{ backgroundImage: "url('https://img.pikbest.com/wp/202408/orange-gradient-background-and-black-with-abstract-3d-wave-effect_9716896.jpg!bw700')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <main className="flex flex-col justify-center py-8 px-4 flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 w-full">
          <div className="text-center mb-10 md:mb-0 md:mr-6">
            <h2 className="text-3xl font-bold mb-6 text-white">Unlock Your Potential!</h2>
            <p className="text-lg mb-4 text-white">Start assessing your skills in JavaScript, C#, HTML/CSS, or Python and get recognized with a badge based on your skill level.</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full shadow-md">View Instructions</button>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Choose Your Skill to Level Up!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="rounded-lg p-8" style={cardStyles}>
                  <img src={skill.imgSrc} alt={`${skill.name} Logo`} className="w-16 h-16 mb-6" />
                  <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl tracking-wide text-center">{skill.name}</h3>
                  <button 
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full shadow-md mt-4"
                    onClick={() => setSelectedSkill(skill.language)} // Set the selected skill
                  >
                    Start
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Render CodeEditor if a skill is selected */}
      {selectedSkill && <CodeEditor language={selectedSkill} />}
      
      <footer className="bg-gray-900 py-4 px-6 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-sm text-white">© 2023 Developer Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DeveloperDashboard;
