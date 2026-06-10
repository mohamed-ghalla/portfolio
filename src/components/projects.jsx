// src/components/ProjectsPage.jsx
import React, { useState } from 'react';
import '../styles/components/projects.css';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "ERP HR Module",
      category: "enterprise",
      type: "Web Application",
      description: "Comprehensive HR management system with automated vacation tracking, attendance management, and employee records. Digitized complete manual paper systems.",
      technologies: ["Strapi", "React", "PostgreSQL", "JavaScript"],
      highlights: [
        "Reduced HR processing time by 70%",
        "Automated leave approval workflow",
        "Real-time attendance tracking"
      ],
      image: "https://via.placeholder.com/400x250/667eea/white?text=ERP+HR+Module"
    },
    {
      id: 2,
      title: "Catch A Coach",
      category: "mobile",
      type: "Mobile App",
      description: "Cross-platform mobile application connecting coaches with clients. Built with Flutter for seamless iOS and Android experience.",
      technologies: ["Flutter", "Node.js", "Strapi", "MongoDB", "PostgreSQL"],
      highlights: [
        "Real-time messaging system",
        "Booking and scheduling features",
        "Payment integration"
      ],
      image: "https://catchacoach.com/wp-content/uploads/2025/02/logo_final-01-scaled.jpg"
    },
/*
    {
      id: 3,
      title: "E-commerce Platform",
      category: "web",
      type: "Website",
      description: "Full-featured e-commerce solution with product management, cart system, and secure checkout.",
      technologies: ["Python", "Django", "Bootstrap", "MySQL"],
      highlights: [
        "Implemented secure payment gateway",
        "Inventory management system",
        "Customer review system"
      ],
      image: "https://via.placeholder.com/400x250/667eea/white?text=E-commerce+Platform"
    },
    {
      id: 4,
      title: "Server Monitoring Dashboard",
      category: "enterprise",
      type: "Web Application",
      description: "Real-time server monitoring solution with Nagios integration and automated alerting system.",
      technologies: ["Node.js", "React", "WebSocket", "Docker"],
      highlights: [
        "Real-time server metrics",
        "Automated backup system",
        "Alert notification system"
      ],
      image: "https://via.placeholder.com/400x250/764ba2/white?text=Monitoring+Dashboard"
    },
    {
      id: 5,
      title: "Customer Portal",
      category: "web",
      type: "Website",
      description: "Self-service customer portal with ticket management and knowledge base.",
      technologies: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
      highlights: [
        "Ticket tracking system",
        "Knowledge base integration",
        "Live chat support"
      ],
      image: "https://via.placeholder.com/400x250/667eea/white?text=Customer+Portal"
    }
*/    
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <p className="projects-subtitle">A showcase of my work in web development, mobile apps, and enterprise solutions</p>
      
      <div className="filter-buttons">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'web' ? 'active' : ''} onClick={() => setFilter('web')}>Web Apps</button>
        <button className={filter === 'mobile' ? 'active' : ''} onClick={() => setFilter('mobile')}>Mobile Apps</button>
        <button className={filter === 'enterprise' ? 'active' : ''} onClick={() => setFilter('enterprise')}>Enterprise</button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <span className="project-type">{project.type}</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-highlights">
                <h4>Key Achievements:</h4>
                <ul>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="project-links">
                <button className="view-btn">View Project</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
