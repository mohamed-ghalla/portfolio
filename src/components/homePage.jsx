import '../styles/components/homePage.css';
import { profile, stats, aiExpertise, skillGroups } from '../data/profile';
import { projects } from '../data/projects';
import { experience } from '../data/cv';
import ProjectCard from './projectCard';

const HomePage = () => {
  const featured = projects.slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="pill"><span className="dot" /> {profile.availability}</span>
            <h1>
              I build software that companies <span className="gradient-text">run on</span>.
            </h1>
            <p className="hero-role">{profile.title}</p>
            <p className="hero-pitch">{profile.pitch}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#/projects">See my work</a>
              <a className="btn btn-ghost" href="/Mohamed_Ghalla_CV.pdf" download>Download CV (PDF)</a>
            </div>
            <ul className="hero-meta">
              <li>{profile.location}</li>
              <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="Screenshots of my projects">
            <div className="browser-frame">
              <div className="browser-bar"><span /><span /><span /><em>AAMCO ERP</em></div>
              <img src="/projects/aamco-erp/admin-dashboard.webp" alt="AAMCO ERP admin dashboard" />
            </div>
            <div className="phone-frame hero-phone">
              <img src="/projects/catchacoach-app/home.webp" alt="CatchaCoach mobile app home screen" />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">AI-augmented engineering</span>
          <h2>Expert in AI tools and AI agents</h2>
          <p>AI is part of how I build, test and ship every day, and part of what I build into products.</p>
        </div>
        <div className="ai-grid">
          {aiExpertise.map((a, i) => (
            <article key={a.title} className="card ai-card">
              <span className="ai-index">0{i + 1}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <div className="tags">
                {a.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-head row">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>Products in production</h2>
          </div>
          <a className="link-arrow" href="#/projects">All projects →</a>
        </div>
        <div className="projects-grid">
          {featured.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <section className="section container two-col">
        <div>
          <span className="eyebrow">Toolbox</span>
          <h2>Full-stack, mobile and infrastructure</h2>
          <p className="muted">From the Linux server to the mobile app store, I can own the whole delivery path.</p>
          <div className="skill-groups">
            {skillGroups.map((g) => (
              <div key={g.name} className="skill-group">
                <h4>{g.name}</h4>
                <div className="tags">
                  {g.items.map((s) => <span key={s} className="tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="eyebrow">Experience</span>
          <h2>Where I have worked</h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company + job.period}>
                <span className="timeline-period">{job.period}</span>
                <strong>{job.title}</strong>
                <span className="muted">{job.company} · {job.location}</span>
              </li>
            ))}
          </ol>
          <a className="link-arrow" href="#/cv">Full CV →</a>
        </div>
      </section>

      <section className="container">
        <div className="cta">
          <div>
            <h2>Have a product to build or a process to digitise?</h2>
            <p>I can join your team or deliver a project end to end. Let’s talk.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me</a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
