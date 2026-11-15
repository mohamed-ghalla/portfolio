import { useEffect, useState } from 'react';
import './styles/components/layout.css';
import HomePage from './components/homePage';
import ProjectsPage from './components/projectsPage';
import ProjectDetailPage from './components/projectDetailPage';
import CVPage from './components/cvPage';
import { profile } from './data/profile';
import { findProject } from './data/projects';

// Hash routes keep every page shareable without server rewrites:
// #/  #/projects  #/projects/<slug>  #/cv
const parseRoute = () => {
  const parts = window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  return { page: parts[0] || 'home', slug: parts[1] };
};

const navItems = [
  { href: '#/', label: 'Home', page: 'home' },
  { href: '#/projects', label: 'Projects', page: 'projects' },
  { href: '#/cv', label: 'CV', page: 'cv' },
];

function App() {
  const [route, setRoute] = useState(parseRoute);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onHash = () => {
      setRoute(parseRoute());
      setMenuOpen(false);
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const project = route.page === 'projects' && route.slug ? findProject(route.slug) : null;

  useEffect(() => {
    const titles = { home: profile.title, projects: 'Projects', cv: 'CV' };
    const sub = project ? project.title : titles[route.page] || profile.title;
    document.title = `${profile.name} | ${sub}`;
  }, [route, project]);

  let content;
  if (route.page === 'projects' && route.slug) content = <ProjectDetailPage project={project} />;
  else if (route.page === 'projects') content = <ProjectsPage />;
  else if (route.page === 'cv') content = <CVPage />;
  else content = <HomePage />;

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <a className="logo" href="#/" aria-label="Home">
            <span className="logo-mark">MG</span>
            <span className="logo-text">{profile.name}</span>
          </a>
          <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
            <span /><span /><span />
          </button>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.page} href={item.href} className={route.page === item.page ? 'active' : ''}>
                {item.label}
              </a>
            ))}
            <a className="btn btn-primary btn-sm" href={`mailto:${profile.email}`}>Hire me</a>
          </nav>
        </div>
      </header>

      <main>{content}</main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>{profile.name}</strong>
            <p>{profile.shortTitle} · {profile.location}</p>
          </div>
          <div className="footer-links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#/cv">CV</a>
          </div>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  );
}

export default App;
