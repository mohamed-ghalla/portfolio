import { useState } from 'react';
import '../styles/components/projects.css';
import { projects, categories } from '../data/projects';
import ProjectCard from './projectCard';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="projects-page container">
      <div className="page-head">
        <span className="eyebrow">Portfolio</span>
        <h1>Projects</h1>
        <p>Real products I designed, built and run. Every screenshot here is from the running application.</p>
      </div>

      <div className="filters" role="tablist">
        {categories.map((c) => {
          const count = c.id === 'all' ? projects.length : projects.filter((p) => p.category === c.id).length;
          return (
            <button key={c.id} role="tab" aria-selected={filter === c.id} className={filter === c.id ? 'active' : ''} onClick={() => setFilter(c.id)}>
              {c.label} <span>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="projects-grid">
        {visible.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </div>
  );
};

export default ProjectsPage;
