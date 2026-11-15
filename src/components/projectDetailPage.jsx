import { useCallback, useEffect, useState } from 'react';
import '../styles/components/projectDetail.css';
import { projects } from '../data/projects';

const ProjectDetailPage = ({ project }) => {
  const [active, setActive] = useState(null);

  const count = project ? project.screenshots.length : 0;
  const step = useCallback((d) => setActive((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, step]);

  if (!project) {
    return (
      <div className="container detail-missing">
        <h1>Project not found</h1>
        <a className="btn btn-primary" href="#/projects">Back to projects</a>
      </div>
    );
  }

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const isPhone = project.device === 'phone';

  return (
    <div className="project-detail container">
      <a className="back-link" href="#/projects">← All projects</a>

      <header className="detail-head">
        <span className="eyebrow">{project.category}{project.year ? ` · ${project.year}` : ''}</span>
        <h1>{project.title}</h1>
        <p className="detail-lead">{project.summary}</p>
        <dl className="detail-meta">
          <div><dt>Client</dt><dd>{project.client}</dd></div>
          <div><dt>My role</dt><dd>{project.role}</dd></div>
          {project.links.length > 0 && (
            <div>
              <dt>Live</dt>
              <dd>
                {project.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
                ))}
              </dd>
            </div>
          )}
        </dl>
      </header>

      <section className={`gallery ${isPhone ? 'gallery-phone' : 'gallery-desktop'}`}>
        {project.screenshots.map((s, i) => (
          <figure key={s.src} className={!isPhone && i === 0 ? 'featured' : ''}>
            <button className={isPhone ? 'phone-frame' : 'shot'} onClick={() => setActive(i)} aria-label={`Enlarge: ${s.caption}`}>
              <img src={s.src} alt={s.caption} loading={i < 2 ? 'eager' : 'lazy'} />
            </button>
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}
      </section>
      {project.note && <p className="detail-note">{project.note}</p>}

      <section className="detail-grid">
        <article className="card">
          <h3>The challenge</h3>
          <p>{project.problem}</p>
        </article>
        <article className="card">
          <h3>What I built</h3>
          <p>{project.solution}</p>
        </article>
      </section>

      <section className="detail-grid">
        <article className="card">
          <h3>Key features</h3>
          <ul className="check-list">
            {project.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </article>
        <div className="detail-side">
          <article className="card">
            <h3>Results</h3>
            <ul className="check-list accent">
              {project.outcomes.map((o) => <li key={o}>{o}</li>)}
            </ul>
          </article>
          <article className="card">
            <h3>Tech stack</h3>
            <div className="tags">
              {project.stack.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </article>
        </div>
      </section>

      <a className="next-project card" href={`#/projects/${next.slug}`}>
        <span className="eyebrow">Next project</span>
        <strong>{next.title} →</strong>
      </a>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="lb-close" aria-label="Close" onClick={() => setActive(null)}>×</button>
          <button className="lb-nav prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
          <figure onClick={(e) => e.stopPropagation()} className={isPhone ? 'lb-phone' : ''}>
            <img src={project.screenshots[active].src} alt={project.screenshots[active].caption} />
            <figcaption>{project.screenshots[active].caption} · {active + 1}/{count}</figcaption>
          </figure>
          <button className="lb-nav next" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;
