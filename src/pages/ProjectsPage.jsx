import React from 'react';
import PageHero from '../components/sections/PageHero';
import { projects } from '../content/siteContent';

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise case studies"
        title="Projects grounded in business risk, process integrity, and release confidence"
        description="These projects are presented as QA case studies rather than generic portfolio cards. The focus is on ambiguity reduction, business-rule protection, and how quality evidence supported release decisions."
        supportingText="Billing, workflow applications, integrated transaction ecosystems, monitoring platforms, and reliability-adjacent systems."
      />
      <section className="section-spacing project-section">
        <div className="container case-study-stack">
          {projects.map((project) => (
            <article key={project.slug} className="case-study-card">
              <header className="case-study-header">
                <p className="section-label">{project.title}</p>
                <h2>{project.context}</h2>
              </header>
              <div className="case-study-grid">
                <div>
                  <h3>Business risk / ambiguity</h3>
                  <p>{project.risk}</p>
                </div>
                <div>
                  <h3>Quality / governance contribution</h3>
                  <p>{project.contribution}</p>
                </div>
              </div>
              <div className="case-study-body">
                <div>
                  <h3>What I did</h3>
                  <ul>
                    {project.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Outcome / impact</h3>
                  <p>{project.outcome}</p>
                  <h3>Optional artifact / reference</h3>
                  <p>{project.artifact}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
