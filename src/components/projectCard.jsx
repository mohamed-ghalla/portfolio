import '../styles/components/projects.css';

const ProjectCard = ({ project }) => (
  <a className={`project-card card ${project.device}`} href={`#/projects/${project.slug}`}>
    <div className="project-cover">
      {project.device === 'phone' ? (
        <div className="cover-phones">
          {project.screenshots.slice(0, 3).map((s) => (
            <div key={s.src} className="phone-frame small">
              <img src={s.src} alt={s.caption} loading="lazy" />
            </div>
          ))}
        </div>
      ) : (
        <img src={project.cover} alt={`${project.title} screenshot`} loading="lazy" />
      )}
      <span className="project-badge">{project.category}</span>
    </div>
    <div className="project-body">
      <h3>{project.title}</h3>
      <p className="project-tagline">{project.tagline}</p>
      <div className="tags">
        {project.stack.slice(0, 5).map((t) => <span key={t} className="tag">{t}</span>)}
        {project.stack.length > 5 && <span className="tag tag-more">+{project.stack.length - 5}</span>}
      </div>
      <span className="link-arrow">Case study →</span>
    </div>
  </a>
);

export default ProjectCard;
