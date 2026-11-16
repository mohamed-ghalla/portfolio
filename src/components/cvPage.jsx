import '../styles/components/cvPage.css';
import { profile } from '../data/profile';
import { summary, coreSkills, experience, cvProjects, education, certifications, languages } from '../data/cv';

// Single-column, plain-text layout so ATS parsers read it in order.
// The PDF in public/ is printed from this page (see scripts/build-cv-pdf.mjs).
const CVPage = () => (
  <div className="cv-page container">
    <div className="cv-toolbar no-print">
      <p>ATS-friendly CV: single column, standard headings, selectable text.</p>
      <div>
        <a className="btn btn-primary btn-sm" href="/Mohamed_Ghalla_CV.pdf" download>Download PDF</a>
        <button className="btn btn-ghost btn-sm" onClick={() => window.print()}>Print</button>
      </div>
    </div>

    <article className="cv-paper">
      <header className="cv-header">
        <h1>{profile.name}</h1>
        <p className="cv-title">{profile.title}</p>
        <p className="cv-contact">
          <span>{profile.location}</span> | <span>{profile.phone}</span> | <a href={`mailto:${profile.email}`}>{profile.email}</a> | <a href={profile.website}>{profile.websiteLabel}</a>
          <br />
          <a href={profile.linkedin}>{profile.linkedinLabel}</a>
        </p>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <p>{summary}</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="cv-skills">
          {coreSkills.map((s) => (
            <li key={s.name}><strong>{s.name}:</strong> {s.items}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Professional Experience</h2>
        {experience.map((job) => (
          <div key={job.company + job.period} className="cv-job">
            <div className="cv-job-head">
              <h3>{job.title}</h3>
              <span>{job.period}</span>
            </div>
            <p className="cv-company">{job.company}, {job.location}</p>
            <ul>
              {job.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Key Projects</h2>
        <ul>
          {cvProjects.map((p) => (
            <li key={p.name}><strong>{p.name}</strong> ({p.stack}): {p.text}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        {education.map((e) => (
          <div key={e.degree} className="cv-job-head">
            <p><strong>{e.degree}</strong>, {e.school}, {e.location}</p>
            <span>{e.year}</span>
          </div>
        ))}
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
      </section>

      <section>
        <h2>Languages</h2>
        <ul>{languages.map((l) => <li key={l}>{l}</li>)}</ul>
      </section>
    </article>
  </div>
);

export default CVPage;
