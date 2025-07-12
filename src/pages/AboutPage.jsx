import React from 'react';
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <AboutMe />
      </div>
    </>
  );
};

export default AboutPage; 