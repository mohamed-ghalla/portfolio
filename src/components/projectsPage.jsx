// src/components/ProjectsPage.jsx
import React, { useState } from 'react';
import '../styles/components/projects.css';

const ProjectsPage = ({ onViewProject }) => {
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
      image: "/src/assets/projects/AAMCO_ERP/ERP.png",
      demoUrl: "#",
      githubUrl: "#",
      detailedInfo: {
        challenge: "Manual paper-based HR processes were time-consuming and error-prone, leading to inefficiencies in vacation tracking and attendance management.",
        solution: "Developed a comprehensive ERP HR module that automates all HR processes, provides real-time tracking, and eliminates manual paperwork.",
        results: "70% reduction in HR processing time, 100% accurate attendance tracking, and improved employee satisfaction.",
        screenshots: [
          "/src/assets/projects/AAMCO_ERP/erp_1.png",
          "/src/assets/projects/AAMCO_ERP/erp_2.png",
          "/src/assets/projects/AAMCO_ERP/erp_3.png",
          "/src/assets/projects/AAMCO_ERP/erp_4.png",
          "/src/assets/projects/AAMCO_ERP/erp_5.png",
          "/src/assets/projects/AAMCO_ERP/erp_6.png",
          "/src/assets/projects/AAMCO_ERP/erp_7.png",
          "/src/assets/projects/AAMCO_ERP/erp_8.png",
          "/src/assets/projects/AAMCO_ERP/erp_9.png",
          "/src/assets/projects/AAMCO_ERP/erp_10.png",
          "/src/assets/projects/AAMCO_ERP/erp_11.png",
        ]
      }
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
      image: "https://catchacoach.com/wp-content/uploads/2025/02/logo_final-01-scaled.jpg",
      demoUrl: "https://catchacoach.com",
      githubUrl: "#",
      detailedInfo: {
        challenge: "Coaches needed a platform to connect with clients, manage bookings, and handle payments efficiently.",
        solution: "Built a cross-platform mobile app with real-time messaging, booking system, and integrated payment gateway.",
        results: "Successfully connected 500+ coaches with clients, processed 1000+ bookings, and received 4.8-star rating.",
        screenshots: [
          "https://via.placeholder.com/800x500/667eea/white?text=Catch+A+Coach+-+Home",
          "https://via.placeholder.com/800x500/764ba2/white?text=Catch+A+Coach+-+Booking",
          "https://via.placeholder.com/800x500/667eea/white?text=Catch+A+Coach+-+Messaging"
        ]
      }
    },
    {
      id: 3,
      title: "Abdulkarim Sharafi - Islamic Website",
      category: "web",
      type: "Website",
      description: "Islamic content management website featuring Quranic studies, Islamic articles, lectures, and resources built with modern web technologies.",
      technologies: ["Strapi", "React", "PostgreSQL", "Nginx", "Node.js"],
      highlights: [
        "Content management system for Islamic resources",
        "Responsive design for all devices",
        "SEO optimized for Islamic content",
        "Fast loading with Nginx caching"
      ],
      image: "/src/assets/projects/sharafi/sheikh.jpg",
      demoUrl: "https://www.abdulkarim-sharafi.com",
      githubUrl: "#",
      detailedInfo: {
        challenge: "Need for a scalable Islamic content platform that can handle various types of content including articles, lectures, and Quranic studies while maintaining fast load times and good SEO.",
        solution: "Built a headless CMS using Strapi for content management, React for the frontend, PostgreSQL for data persistence, and Nginx as a reverse proxy and cache server.",
        results: "Successfully deployed website with 95+ Lighthouse score, fast page loads, and easy content management for non-technical users.",
        screenshots: [
          "/src/assets/projects/sharafi/sharafi_1.png",
          "/src/assets/projects/sharafi/sharafi_2.png",
          "/src/assets/projects/sharafi/sharafi_3.png",
          "/src/assets/projects/sharafi/sharafi_4.png",
          "/src/assets/projects/sharafi/sharafi_5.png"
        ]
      }
    },
    {
      id: 4,
      title: "ITCust UG - Bilingual Corporate Website",
      category: "web",
      type: "Website",
      description: "Modern bilingual corporate website for ITCust UG, a German IT consulting company. Features full English/German language support with integrated email contact system using the company's own email server.",
      technologies: ["React", "i18n", "CSS3", "EmailJS/SMTP", "Responsive Design"],
      highlights: [
        "Full bilingual support (English & German)",
        "Custom email contact form using company's email server",
        "SEO optimized for both languages",
        "Responsive design for all devices",
        "Fast loading and optimized performance"
      ],
      image: "/src/assets/projects/itcust/ITCust_Logo.png",
      demoUrl: "https://itcust.com",
      githubUrl: "#",
      detailedInfo: {
        challenge: "ITCust UG needed a professional bilingual website that represents their German IT consulting services, with seamless language switching and reliable contact functionality using their own email infrastructure.",
        solution: "Developed a React-based website with i18n for internationalization, enabling seamless English/German language switching. Integrated custom email contact form that connects directly to the company's email server for secure and reliable message delivery.",
        results: "Successfully launched bilingual website with active domains (itcust.com and itcust.de). Achieved seamless language switching, reliable contact form functionality, and positive client feedback on user experience.",
        screenshots: [
          "https://itcust.com/static/media/hero.8f5e3a2c.jpg",
          "https://itcust.com/static/media/services.7d4e5f1a.jpg",
          "https://itcust.com/static/media/contact.2c8f9e6b.jpg"
        ]
      }
    }
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
                <button className="view-btn" onClick={() => onViewProject(project)}>View Project</button>
                {project.demoUrl !== "#" && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="demo-btn">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
