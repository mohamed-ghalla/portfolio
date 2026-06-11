// App.jsx
import React, { useState } from 'react';
import './App.css';
import CVPage from './components/cvPage';
import ProjectsPage from './components/projectsPage';
import HomePage from './components/homePage';
import ProjectDetailPage from './components/projectDetailPage';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setActivePage('projectDetail');
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setActivePage('projects');
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => {
            setActivePage('home');
            setSelectedProject(null);
          }}>
            Mohamed Ghalla
          </div>
          <ul className="nav-links">
            <li className={activePage === 'home' ? 'active' : ''} onClick={() => {
              setActivePage('home');
              setSelectedProject(null);
            }}>
              Home
            </li>
            <li className={activePage === 'projects' || activePage === 'projectDetail' ? 'active' : ''} onClick={() => {
              setActivePage('projects');
              setSelectedProject(null);
            }}>
              Projects
            </li>
            <li className={activePage === 'cv' ? 'active' : ''} onClick={() => {
              setActivePage('cv');
              setSelectedProject(null);
            }}>
              CV
            </li>
          </ul>
          <button className="contact-btn" onClick={() => window.location.href = 'mailto:mohamed.ghala@gmail.com'}>
            Contact Me
          </button>
        </div>
      </nav>

      <main>
        {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
        {activePage === 'projects' && <ProjectsPage onViewProject={handleViewProject} />}
        {activePage === 'projectDetail' && (
          <ProjectDetailPage 
            project={selectedProject} 
            onBack={handleBackToProjects} 
          />
        )}
        {activePage === 'cv' && <CVPage />}
      </main>

      <footer className="footer">
        <p>&copy; 2025 Mohamed Ghalla. All rights reserved.</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/mohamed-ghalla-7394bb58/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:mohamed.ghala@gmail.com">Email</a>
          <a href="#">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
