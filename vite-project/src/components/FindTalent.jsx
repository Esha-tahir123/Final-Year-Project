import React from 'react';
import DeveloperCard from './DeveloperCard';
import { developers } from '../constants';

const FindTalent = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font text-center text-white mb-8">Search for the <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> Talented Developers to Work with you</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </div>
    </div>
  );
};

export default FindTalent;
