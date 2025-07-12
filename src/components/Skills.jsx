import React, { useState } from 'react';
import './Skills.css';

const skillData = {
  'Frontend Galaxy': ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
  'Backend Galaxy': ['Node.js', 'Express.js', 'MongoDB', 'Python'],
  'Tool Nebula': ['Git', 'GitHub', 'VS Code', 'Postman', 'Cybersecurity'],
};

const quotes = {
  'Frontend Galaxy': '“Design is not just what it looks like. It\'s how it works.” – Steve Jobs',
  'Backend Galaxy': '“The quieter the engine, the greater the power behind it.” – Space Engineering Log',
  'Tool Nebula': '“A craftsman is only as good as his toolkit.” – Galactic Dev Manifesto'
};

const Skills = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="module-section">
      <h2 className="module-title">🔧 SkillS</h2>
      <div className="module-row">
        {Object.entries(skillData).map(([category, skills]) => (
          <div
  key={category}
  className={`skill-card ${activeCard === category ? 'active' : ''}`}
  onClick={() =>
    setActiveCard((prev) => (prev === category ? null : category))
  }
>
  <h3>{category}</h3>
  <p className="skill-quote">{quotes[category]}</p> {/* ← New quote line */}

  <div className={`skill-details ${activeCard === category ? 'expand' : ''}`}>
    {skills.map((skill) => (
      <span key={skill}>{skill}</span>
    ))}
  </div>
</div>
        ))}
      </div>
      
    </section>
  );
};

export default Skills;
