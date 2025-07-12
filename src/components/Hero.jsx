import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import { SiHtml5, SiCss3, SiReact, SiNodedotjs, SiMongodb, SiPython } from 'react-icons/si';
// import Avatar3D from './Avatar3D';

const roles = [
  'Full Stack Developer',
  'Cybersecurity Learner',
  'Open Source Enthusiast',
  'Problem Solver',
  'Tech Explorer'
];

const techList = [
  { icon: <SiHtml5 />, label: 'HTML5' },
  { icon: <SiCss3 />, label: 'CSS3' },
  { icon: <SiReact />, label: 'React' },
  { icon: <SiNodedotjs />, label: 'Node.js' },
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <SiPython />, label: 'Python' },
];

const Hero = ({ onNavigate }) => {
  // Typewriter effect
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIdx % roles.length];
    if (!isDeleting && typed.length < currentRole.length) {
      setTimeout(() => setTyped(currentRole.slice(0, typed.length + 1)), speed);
    } else if (isDeleting && typed.length > 0) {
      setTimeout(() => setTyped(currentRole.slice(0, typed.length - 1)), speed / 2);
    } else if (!isDeleting && typed.length === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && typed.length === 0) {
      setIsDeleting(false);
      setRoleIdx((prev) => prev + 1);
    }
  }, [typed, isDeleting, roleIdx]);

  // Animate greeting and profile image
  const greetingRef = useRef(null);
  const profileRef = useRef(null);
  useEffect(() => {
    if (greetingRef.current) {
      greetingRef.current.classList.add('fade-in-up');
    }
    if (profileRef.current) {
      profileRef.current.classList.add('pop-in');
    }
  }, []);

  // Smooth scroll to contact
  const handleContactScroll = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container">
      <div className="gradient-overlay"></div>
      <div className="hero-content">
        <div className="profile-section">
          <div className="profile-pic-wrapper" ref={profileRef}>
            <img 
              src="/avatar.png" 
              alt="Ravi Teja profile" 
              className="profile-pic" 
            />
          </div>
        </div>
        <div className="intro">
          <h2 className="greeting" ref={greetingRef}>
            Hey 👋 What's up? I'm Ravi Teja
          </h2>
          <div className="typewriter" aria-label="Professional roles">
            <span>{typed}</span>
            <span className="typewriter-cursor">|</span>
          </div>
          <ul className="bio-list">
            <li>🐛 Creating bugs since 2022</li>
            <li>🔐 Currently learning Cybersecurity</li>
            <li>🤝 Ready to collaborate on awesome projects</li>
            <li>🧠 Cyber Enthusiast & Full Stack Developer</li>
            <li>🚀 Dream job: Work with Elon Musk</li>
          </ul>
          <p className="location">📍 Based in Hyderabad | 🕒 IST</p>
          <div className="tech-icons">
            {techList.map((tech, idx) => (
              <span
                key={tech.label}
                className="tech-icon-tooltip"
                tabIndex={0}
                aria-label={tech.label}
              >
                {tech.icon}
                <span className="tooltip-text">{tech.label}</span>
              </span>
            ))}
          </div>
          <div className="social-row">
            <a href="https://github.com/Raviteja5469" aria-label="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/resume" aria-label="Resume">Resume</a>
          </div>
          {/* <button className="cta-btn" onClick={handleContactScroll} aria-label="Contact Me">
            Contact Me
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;