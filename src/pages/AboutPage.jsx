import React from 'react';
import PageHero from '../components/sections/PageHero';
import { aboutContent } from '../content/siteContent';

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional evolution"
        title="From reliability awareness to business-process-aware quality work"
        description={aboutContent.intro}
      />
      <section className="section-spacing">
        <div className="container about-grid">
          <div className="about-body">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="aside-panel">
            <p className="section-label">Current emphasis</p>
            <h2>Where I add the most value</h2>
            <ul>
              {aboutContent.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
