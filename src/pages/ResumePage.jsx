import React from 'react';
import './ResumePage.css';

const ResumePage = () => {
  return (
    <div className="resume-page">
      <div className="resume-container">
        <div className="resume-header">
          <h1>Resume</h1>
          <p>Ravi Teja - Mern Stack Developer & Cybersecurity and AI Enthusiast </p>
        </div>
        <div className="resume-viewer">
          <iframe
            src="/Raviteja_Resume.pdf"
            title="Ravi Teja Resume"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>
        <div className="resume-actions">
          <a 
            href="/Raviteja_Resume.pdf" 
            download="Raviteja_Resume.pdf"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            📥 Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage; 