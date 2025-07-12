import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    id: 'auction',
    name: 'Online Auction Platform',
    tech: 'MERN Stack',
    tagline: 'Real-time bidding for goods & collectibles',
  },
  {
    id: 'bookcloud',
    name: 'Book Cloud',
    tech: 'MERN Stack',
    tagline: 'Cloud-based library management system',
  },
  {
    id: 'jobportal',
    name: 'Gamified Job Portal',
    tech: 'MERN Stack',
    tagline: 'Resume meets leaderboard — job hunting made fun!',
  },
  {
    id: 'animalml',
    name: 'Multi-class Animal Recognition',
    tech: 'ML Project',
    tagline: 'Identifying animals using image classification',
  },
  {
    id: 'wasteml',
    name: 'Waste Classification',
    tech: 'ML Project',
    tagline: 'Sorting trash intelligently using ML',
  },
  {
    id: 'lifeease',
    name: 'Lifeease',
    tech: 'React Native',
    tagline: 'Assistive app for differently abled users',
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    tech: 'React',
    tagline: 'The Project which you are seeing right now 😅',
  },
  {
    id: 'studentphp',
    name: 'Student Management System',
    tech: 'PHP',
    tagline: 'Academic record and user portal built with PHP',
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="projects-grid">
      <h2 className="projects-title">🌌 Projects Constellation</h2>
      <div className="card-grid">
        {projects.map((proj) => (
          <div
            className="project-card"
            key={proj.id}
            onClick={() => navigate(`/projects/${proj.id}`)}
          >
            <h3>{proj.name}</h3>
            <p>{proj.tagline}</p>
            <span className="tech-badge">{proj.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
