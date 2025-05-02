// SkillCard.jsx
import React from "react";

const SkillCard = ({ skill, onStartClick }) => {
  return (
    <div className="skill-card">
      <img src={skill.imgSrc} alt={`${skill.name} logo`} className="w-16 h-16 mb-4" />
      <h3 className="text-white text-2xl">{skill.name}</h3>
      <button
        onClick={() => onStartClick(skill)}
        className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full mt-4"
      >
        Start
      </button>
    </div>
  );
};

export default SkillCard;
