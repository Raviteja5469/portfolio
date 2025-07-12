import React from 'react';
// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import ContactMe from '../components/ContactMe'


const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="home-page">
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <ContactMe />
      </div>
    </>
  );
};

export default HomePage; 