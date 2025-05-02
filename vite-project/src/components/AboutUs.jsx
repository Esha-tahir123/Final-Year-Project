import React from 'react';
import FeatureSection from './FeatureSection';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-darkGray to-orange-800 text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl text-center mb-10 px-6">
        <h1 className="text-5xl font mb-8 bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">
          About Us
        </h1>
        <div className="rounded-lg p-6 w-full">
        <p className="text-xl mb-1 text-neutral-300">
            Welcome to our platform for software developers! We created this system to provide an engaging and effective environment for assessing and improving practical skills. By offering real-world scenarios and challenging tasks, our platform ensures that developers are well-equipped to tackle real-life problems. Our dynamic and interactive challenges are designed to adjust in difficulty based on your performance, making the learning experience both personalized and impactful.
          </p>
        </div>
      </div>
      <div className="w-full max-w-7xl">
        <FeatureSection />
      </div>
      <div className="w-full max-w-4xl text-center mt-10 px-6">
        <div className="rounded-lg p-6">
          <p className="text-2xl text-neutral-300">
            Join us to transform your skill assessment into a fun, continuous learning journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
