// App.jsx
import React, { useState } from 'react';
import './App.css';
import CVPage from './components/cvPage';
import ProjectsPage from './components/projects';
import HomePage from './components/homePage';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => setActivePage('home')}>
            Mohamed Ghalla
          </div>
          <ul className="nav-links">
            <li className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>
              Home
            </li>
            <li className={activePage === 'projects' ? 'active' : ''} onClick={() => setActivePage('projects')}>
              Projects
            </li>
            <li className={activePage === 'cv' ? 'active' : ''} onClick={() => setActivePage('cv')}>
              CV
            </li>
          </ul>
          <button className="contact-btn">Contact Me</button>
        </div>
      </nav>

      <main>
        {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
        {activePage === 'projects' && <ProjectsPage />}
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
