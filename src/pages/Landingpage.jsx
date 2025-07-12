import React from 'react'
import { Routes, Route } from 'react-router-dom';

// Import your components
// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import ContactMe from '../components/ContactMe';
// import ProjectDetails from '../components/ProjectDetails';

const Landingpage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <ContactMe />
    </>
  )
}

export default Landingpage
