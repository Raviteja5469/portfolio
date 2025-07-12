import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CosmicBackground from './components/CosmicBackground';
import FunFactWidget from './components/FunFactWidget';
import Landingpage from './pages/Landingpage';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import ProjectDetails from './components/ProjectDetails';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <CosmicBackground />
      <FunFactWidget />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
};

export default App;
