import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/home' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        🚀 Ravi's Galaxy
      </div>
      <div className="nav-links">
        <button 
          className={isActive('/home') ? 'active' : ''} 
          onClick={() => navigate('/home')}
        >
          Home
        </button>
        <button 
          className={isActive('/skills') ? 'active' : ''} 
          onClick={() => navigate('/skills')}
        >
          Skills
        </button>
        <button 
          className={isActive('/projects') ? 'active' : ''} 
          onClick={() => navigate('/projects')}
        >
          Projects
        </button>
        <button 
          className={isActive('/contact') ? 'active' : ''} 
          onClick={() => navigate('/contact')}
        >
          Contact
        </button>
        <button 
          className={isActive('/resume') ? 'active' : ''} 
          onClick={() => navigate('/resume')}
        >
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
