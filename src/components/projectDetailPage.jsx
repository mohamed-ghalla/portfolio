// src/components/ProjectDetailPage.jsx
import React from 'react';
import '../styles/components/projectDetail.css';

const ProjectDetailPage = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <div className="project-detail-page">
      <button className="back-btn" onClick={onBack}>
        ← Back to Projects
      </button>

      <div className="project-detail-header">
        <h1>{project.title}</h1>
        <span className="project-type-badge">{project.type}</span>
      </div>

      <div className="project-detail-content">
        <div className="project-main-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-info-section">
          <h2>Project Overview</h2>
          <p>{project.description}</p>
        </div>

        <div className="project-details-grid">
          <div className="detail-card">
            <h3>🎯 The Challenge</h3>
            <p>{project.detailedInfo.challenge}</p>
          </div>

          <div className="detail-card">
            <h3>💡 The Solution</h3>
            <p>{project.detailedInfo.solution}</p>
          </div>

          <div className="detail-card">
            <h3>📈 Results & Impact</h3>
            <p>{project.detailedInfo.results}</p>
          </div>
        </div>

        <div className="tech-section">
          <h2>Technologies Used</h2>
          <div className="tech-list-detailed">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-badge-detailed">{tech}</span>
            ))}
          </div>
        </div>

        <div className="highlights-section">
          <h2>Key Features & Achievements</h2>
          <ul className="highlights-list">
            {project.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="screenshots-section">
          <h2>Project Screenshots</h2>
          <div className="screenshots-grid">
            {project.detailedInfo.screenshots.map((screenshot, idx) => (
              <div key={idx} className="screenshot-item">
                <img src={screenshot} alt={`${project.title} screenshot ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="project-links-detailed">
          {project.demoUrl !== "#" && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="demo-link-detailed">
              🌐 Visit Live Website
            </a>
          )}
          {project.githubUrl !== "#" && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link-detailed">
              💻 View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
