import React from 'react';
import './Achievements.css';

const achievements = [
    {
      "title": "Generative AI with Diffusion Models",
      "issuer": "NVIDIA",
      "date": "Jan 2025",
      "description": "Explored the fundamentals and advanced applications of diffusion models for generative AI, including practical implementations and current research trends."
    },
    {
      "title": "Python for Data Science",
      "issuer": "IBM",
      "date": "Jan 2024",
      "description": "Gained proficiency in Python for data science, covering essential libraries like pandas and NumPy, data manipulation, visualization, and an introduction to machine learning pipelines."
    },
    {
      "title": "Ethical Hacker",
      "issuer": "Cisco Networking Academy",
      "date": "Jan 2025",
      "description": "Developed expertise in ethical hacking methodologies, including penetration testing, vulnerability assessment, network security, and secure coding practices."
    },
    {
      "title": "Introduction to Cybersecurity",
      "issuer": "Cisco Networking Academy",
      "date": "Jan 2025",
      "description": "Learned foundational concepts of cybersecurity, including common threats, defense mechanisms, network security principles, and best practices for securing systems and data."
    },
    {
      "title": "Participation in Hackathon",
      "issuer": "Build with India",
      "date": "April 2025",
      "description": "Participated in a hackathon focused on innovation, contributing to a team project that explored accessibility solutions. The project, 'Lifeease,' was selected for the finals."
    }
];

const Achievements = () => {
  return (
    <section className="achievements-section">
      <h2 className="achievements-title">🎖 Certificates & Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((item, idx) => (
          <div key={idx} className="achievement-card">
            <h3>{item.title}</h3>
            <p className="issuer">{item.issuer}</p>
            <p className="date">{item.date}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
