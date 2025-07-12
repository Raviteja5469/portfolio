import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './ProjectDetails.css';

const projectInfo = {
  auction: {
    name: 'Online Auction Platform',
    tech: 'MERN Stack',
    description: 'A dynamic auction site enabling real-time bidding on products and collectibles. Features include user authentication, auction timers, bidding history, and secure checkout.',
    features: [
      'Real-time bidding system',
      'User authentication & authorization',
      'Auction timers and notifications',
      'Bidding history tracking',
      'Secure payment integration',
      'Admin dashboard for management'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    projectLink: 'https://github.com/Raviteja5469/Online-Auction-Platform',
    demoLink: ' https://online-auction-frontend.onrender.com/'
  },
  bookcloud: {
    name: 'Book Cloud',
    tech: 'MERN Stack',
    description: 'A digital library management system hosted in the cloud. Users can browse, borrow, and track book returns. Admin dashboard included for managing records.',
    features: [
      'Digital book catalog',
      'User borrowing system',
      'Return date tracking',
      'Admin book management',
      'Search and filter functionality',
      'User dashboard'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Bootstrap'],
    projectLink: 'https://github.com/Raviteja5469/E-book-cloud',
    demoLink: 'https://bookcloud-demo.vercel.app'
  },
  jobportal: {
    name: 'Gamified Job Portal',
    tech: 'MERN Stack',
    description: 'An engaging job application platform that incorporates points, leaderboards, and challenge-based resumes. Designed to enhance candidate visibility while keeping hiring fun.',
    features: [
      'Gamified job applications',
      'Points and leaderboard system',
      'Challenge-based resume builder',
      'Company profile management',
      'Real-time notifications',
      'Analytics dashboard'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Chart.js'],
    projectLink: 'https://github.com/Raviteja5469/gamified-job-portal',
    demoLink: 'https://job-portal-demo.vercel.app'
  },
  animalml: {
    name: 'Multi-class Animal Recognition',
    tech: 'Machine Learning',
    description: 'An ML-powered image classification tool that identifies various animal species with high accuracy using convolutional neural networks.',
    features: [
      'Image classification for 50+ animal species',
      'Real-time prediction',
      'High accuracy model (95%+)',
      'User-friendly interface',
      'Batch processing capability',
      'Model performance analytics'
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'HTML/CSS', 'JavaScript'],
    projectLink: 'https://github.com/Raviteja5469/Multi_class_animal_classificationhttps://github.com/yourusername/animal-recognition',
    demoLink: 'https://multiclassanimalclassification-jhpwpmaea4drz9jgxkkojm.streamlit.app/  '
  },
  wasteml: {
    name: 'Waste Classification',
    tech: 'Machine Learning',
    description: 'A smart waste sorting solution using ML to categorize trash into recyclables, organics, and hazardous waste. Aims to support automated bins and sustainable systems.',
    features: [
      'Waste categorization (Recyclable, Organic, Hazardous)',
      'Real-time image processing',
      'Mobile app integration',
      'Environmental impact tracking',
      'Community statistics',
      'Educational content'
    ],
    technologies: ['Python', 'TensorFlow', 'React Native', 'Firebase', 'OpenCV', 'Flask'],
    projectLink: 'https://github.com/Raviteja5469/CNN-model-waste-classification',
    demoLink: 'https://waste-analyzer-novukyc46t6pdd5qrj.streamlit.app/'
  },
  lifeease: {
    name: 'Lifeease',
    tech: 'Android App',
    description: 'An assistive mobile app designed for differently abled users. Includes voice commands, simplified navigation, and emergency response integration.',
    features: [
      'Voice command interface',
      'Simplified navigation system',
      'Emergency response integration',
      'Accessibility features',
      'Caregiver communication',
      'Location tracking'
    ],
    technologies: ['Android', 'Java', 'Firebase', 'Google Maps API', 'Speech Recognition', 'SQLite'],
    projectLink: 'https://github.com/Raviteja5469/LifeEase',
    demoLink: 'https://github.com/Raviteja5469/LifeEase'
  },
  studentphp: {
    name: 'Student Management System',
    tech: 'PHP',
    description: 'A web portal for student record keeping and performance tracking. Features include login-based roles for admins, teachers, and students, along with grading modules.',
    features: [
      'Multi-role authentication (Admin, Teacher, Student)',
      'Student record management',
      'Grade tracking and reporting',
      'Attendance management',
      'Course scheduling',
      'Performance analytics'
    ],
    technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
    projectLink: 'https://github.com/Raviteja5469/Student-management',
    demoLink: 'https://github.com/Raviteja5469/Student-management'
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectInfo[id];

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="project-detail-view">
          <h2>Project Not Found</h2>
          <button className="back-btn" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="project-detail-view">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        
        <div className="project-header">
          <h2>{project.name}</h2>
          <span className="tech-tag">{project.tech}</span>
        </div>
        
        <div className="project-content">
          <div className="project-description">
            <h3>About This Project</h3>
            <p>{project.description}</p>
          </div>
          
          <div className="project-features">
            <h3>Key Features</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="project-technologies">
            <h3>Technologies Used</h3>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="project-links">
            <a 
              href={project.projectLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-btn github-btn"
            >
              📁 View Code
            </a>
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-btn demo-btn"
            >
              🚀 Live Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
