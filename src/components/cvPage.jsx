// src/components/CVPage.jsx
import React from 'react';
import '../styles/components/cvPage.css';

const CVPage = () => {
  const workExperience = [
    {
      title: "Software Developer / System Administrator",
      company: "Allied Arabian Maintenance & Trade Co. Ltd. (AAMCO)",
      location: "Al Jubail, Saudi Arabia",
      period: "March 2025 – Present",
      responsibilities: [
        "Independently designed, developed, and implemented comprehensive ERP HR module from the ground up",
        "Digitized manual paper systems by building automated vacation tracking and attendance system modules",
        "Oversee and manage enterprise storage servers and Windows Server environments",
        "Propose and execute infrastructure upgrades, transitioning key administrative operations into modern digital workflows"
      ]
    },
    {
      title: "Mobile & Backend Developer",
      company: "Catch A Coach",
      location: "Remote",
      period: "January 2023 – Present",
      responsibilities: [
        "Developed and optimized scalable backend services using Node.js and Strapi headless CMS framework",
        "Built and deployed intuitive cross-platform mobile applications utilizing Flutter framework",
        "Adopted agile methodologies within cross-functional teams to streamline development lifecycles"
      ]
    },
    {
      title: "Full Stack Web Developer",
      company: "Freelance",
      location: "Remote",
      period: "January 2017 – January 2023",
      responsibilities: [
        "Engineered custom web solutions from scratch utilizing Python for secure backend architectures",
        "Designed responsive, performant user interfaces utilizing JavaScript, Bootstrap, HTML, and SQL databases",
        "Increased website performance and responsiveness by auditing and optimizing front-end and back-end code"
      ]
    },
    {
      title: "Linux System Administrator",
      company: "Softxpert",
      location: "Alexandria, Egypt",
      period: "January 2014 – January 2015",
      responsibilities: [
        "Managed, maintained, and monitored Linux servers across staging and production environments using Nagios",
        "Configured and tuned web servers (Nginx, Apache), mail systems, and DNS servers",
        "Managed application deployments via CI/CD pipelines and virtualization platforms"
      ]
    },
    {
      title: "Linux System Engineer",
      company: "Zewail City",
      location: "Cairo, Egypt",
      period: "January 2012 – January 2014",
      responsibilities: [
        "Maintained enterprise infrastructure, troubleshooting complex system bugs",
        "Ensured elite level of security and uptime",
        "Seamlessly deployed code updates and systems into high-traffic live production environments"
      ]
    }
  ];

  const education = [
    {
      degree: "Diploma in Software Engineering (Unix Department)",
      institution: "Information Technology Institute (ITI)",
      location: "Alexandria, Egypt",
      year: "July 2009"
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering and Control Systems",
      institution: "Mansoura University",
      location: "Mansoura, Egypt",
      year: "July 2008"
    }
  ];

  const certifications = [
    "Linux System Administration",
    "Full-Stack Web Development",
    "Docker & Containerization",
    "CI/CD with Jenkins"
  ];

  return (
    <div className="cv-page">
      <div className="cv-header">
        <div>
          <h1>Mohamed Ghalla</h1>
          <p className="cv-title">Full-Stack Developer & Linux System Administrator</p>
          <div className="cv-contact">
            <span>📧 mohamed.ghala@gmail.com</span>
            <span>📞 (+966) 545875633</span>
            <span>📍 Jubail, Saudi Arabia</span>
          </div>
        </div>
        <div className="cv-actions">
          <button className="download-btn" onClick={() => window.print()}>📄 Download CV</button>
        </div>
      </div>

      <div className="cv-grid">
        <div className="cv-main">
          <section className="cv-section">
            <h2>Professional Summary</h2>
            <p>Dynamic Full-Stack Software Developer and Linux System Administrator with over 10 years of experience designing, deploying, and maintaining robust IT solutions. Proven track record of independently building enterprise-grade ERP modules, engineering high-performance mobile/web applications, and managing secure server infrastructures.</p>
          </section>

          <section className="cv-section">
            <h2>Work Experience</h2>
            {workExperience.map((job, idx) => (
              <div key={idx} className="cv-item">
                <div className="cv-item-header">
                  <h3>{job.title}</h3>
                  <span className="cv-date">{job.period}</span>
                </div>
                <div className="cv-subheader">
                  {job.company} | {job.location}
                </div>
                <ul>
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>

        <div className="cv-sidebar">
          <section className="cv-section">
            <h2>Core Skills</h2>
            <div className="skills-list">
              <div className="skill-group">
                <h3>Development</h3>
                <ul>
                  <li>Python, Node.js, JavaScript</li>
                  <li>Flutter, Django, Strapi</li>
                  <li>MySQL, PostgreSQL, NoSQL</li>
                </ul>
              </div>
              <div className="skill-group">
                <h3>System Administration</h3>
                <ul>
                  <li>Linux (Ubuntu, AlmaLinux)</li>
                  <li>Windows Server Management</li>
                  <li>Shell Scripting</li>
                </ul>
              </div>
              <div className="skill-group">
                <h3>DevOps & Tools</h3>
                <ul>
                  <li>Docker, Jenkins, Git</li>
                  <li>Nginx, Apache, DNS</li>
                  <li>VMWare, Xen, Nagios</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="cv-section">
            <h2>Education</h2>
            {education.map((edu, idx) => (
              <div key={idx} className="cv-education-item">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}, {edu.location}</p>
                <span className="cv-date">{edu.year}</span>
              </div>
            ))}
          </section>

          <section className="cv-section">
            <h2>Languages</h2>
            <ul>
              <li>Arabic - Native</li>
              <li>English - Intermediate (B1)</li>
            </ul>
          </section>

          <section className="cv-section">
            <h2>Certifications</h2>
            <ul>
              {certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
