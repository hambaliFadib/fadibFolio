import React from 'react';
import { Link } from 'react-router-dom';
import { homeContent, projects } from '../content/siteContent';

function HomePage() {
  return (
    <>
      <section className="hero section-spacing">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{homeContent.eyebrow}</p>
            <h1 className="hero-title">{homeContent.title}</h1>
            <p className="hero-subtitle">{homeContent.subtitle}</p>
            <p className="domain-line">{homeContent.domainLine}</p>
            <p className="hero-intro">{homeContent.intro}</p>
            <div className="hero-actions">
              <Link to="/projects" className="button button-primary">
                View Projects
              </Link>
              <Link to="/quality-thinking" className="button button-secondary">
                Explore Quality Thinking
              </Link>
            </div>
          </div>
          <div className="hero-aside" aria-hidden="true">
            <div className="signal-card">
              <span className="signal-label">Release Confidence</span>
              <strong>Defensible when business intent, test scope, and accepted risk are aligned.</strong>
            </div>
            <div className="signal-grid">
              <div className="signal-panel">
                <span>Business intent</span>
                <span>Rule clarity</span>
              </div>
              <div className="signal-panel">
                <span>QA boundary</span>
                <span>Residual risk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing muted-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="section-label">Core contribution</p>
              <h2 className="section-title">How I create value in enterprise QA environments</h2>
            </div>
          </div>
          <div className="card-grid three-up">
            {homeContent.coreValues.map((item) => (
              <article key={item.title} className="content-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container split-grid">
          <div>
            <p className="section-label">Selected enterprise focus</p>
            <h2 className="section-title">Validation aligned to high-risk operational reality</h2>
          </div>
          <div className="list-panel">
            <ul>
              {homeContent.focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-spacing muted-section">
        <div className="container">
          <div className="section-heading-row with-action">
            <div>
              <p className="section-label">Case evidence</p>
              <h2 className="section-title">Selected enterprise work</h2>
            </div>
            <Link to="/projects" className="text-link">
              See all case studies
            </Link>
          </div>
          <div className="case-study-preview-grid">
            {projects.slice(0, 3).map((project) => (
              <article key={project.slug} className="case-preview-card">
                <p className="case-preview-kicker">{project.title}</p>
                <p>{project.contribution}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container spotlight-panel">
          <div>
            <p className="section-label">Operating principle</p>
            <h2 className="section-title">
              If business clarity is weak, release confidence is weak.
            </h2>
          </div>
          <div>
            <p>
              My role is to make quality decisions explicit, defensible, and aligned with
              enterprise business intent.
            </p>
            <div className="inline-actions">
              <Link to="/quality-thinking" className="button button-primary">
                Explore Quality Thinking
              </Link>
              <Link to="/contact" className="button button-secondary">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
