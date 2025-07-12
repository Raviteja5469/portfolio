import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <div className="projects-page">
        <Projects />
      </div>
    </>
  );
};

export default ProjectsPage; 