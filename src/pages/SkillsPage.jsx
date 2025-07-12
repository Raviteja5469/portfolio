import React from 'react';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';

const SkillsPage = () => {
  return (
    <>
      <Navbar />
      <div className="skills-page">
        <Skills />
      </div>
    </>
  );
};

export default SkillsPage; 