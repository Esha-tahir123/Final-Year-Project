import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMedal, faAward } from '@fortawesome/free-solid-svg-icons';

const skillLevelIcons = {
  Expert: faStar,
  Advanced: faMedal,
  Intermediate: faAward,
};

const DeveloperCard = ({ developer }) => {
  const { name, skillLevel, contactDetails, profilePicture } = developer;

  return (
    <div className="bg-transparent border border-orange-800 rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105">
      <div className="text-center mb-4">
        <img
          src={profilePicture}
          alt={`${name}'s profile`}
          className="w-24 h-24 rounded-full mx-auto border-4 border-orange-500"
        />
      </div>
      <div className="text-xl font-semibold mb-4 text-center">{name}</div>
      <div className="mb-4 flex items-center justify-center">
        <FontAwesomeIcon icon={skillLevelIcons[skillLevel]} className="text-orange-500 mr-2" />
        <span className="text-lg">{skillLevel}</span>
      </div>
      <div className="mb-6 text-center">Skill Level: {skillLevel}</div>
      <div className="flex justify-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
          View Contact Details
        </button>
      </div>
    </div>
  );
};

export default DeveloperCard;
