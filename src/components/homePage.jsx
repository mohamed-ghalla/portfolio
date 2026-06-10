// src/components/HomePage.jsx
import React from 'react';
import '../styles/components/homePage.css';

const HomePage = ({ setActivePage }) => {
  const skills = [
    { category: 'Backend', items: ['Python', 'Node.js', 'Django', 'Strapi', 'PostgreSQL', 'MySQL'] },
    { category: 'Frontend', items: ['JavaScript', 'React', 'Flutter', 'HTML/CSS', 'Bootstrap'] },
    { category: 'DevOps & Admin', items: ['Linux', 'Docker', 'Jenkins', 'Nginx', 'Git', 'VMWare'] }
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Mohamed Ghalla</h1>
          <h2>Full-Stack Developer & Linux System Administrator</h2>
          <p>10+ years of experience in building enterprise-grade solutions</p>
          <div className="hero-buttons">
            <button onClick={() => setActivePage('projects')} className="btn-primary">View My Work</button>
            <button onClick={() => setActivePage('cv')} className="btn-secondary">Download CV</button>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>Technical Expertise</h2>
        <div className="skills-container">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-highlight">
        <h2>Current Role</h2>
        <div className="experience-card">
          <h3>Software Developer / System Administrator</h3>
          <h4>Allied Arabian Maintenance & Trade Co. Ltd. (AAMCO) — Al Jubail, Saudi Arabia</h4>
          <p>Independently designed and implemented comprehensive ERP HR module, digitizing manual paper systems with automated vacation tracking and attendance management.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
