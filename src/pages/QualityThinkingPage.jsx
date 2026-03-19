import React from 'react';
import PageHero from '../components/sections/PageHero';
import { qualityThinkingSections } from '../content/siteContent';

function QualityThinkingPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional thinking"
        title="Quality thinking for complex enterprise systems"
        description="This page explains how I approach enterprise QA beyond test execution: by protecting business-critical invariants, clarifying quality boundaries, and making residual risk visible before release."
      />
      <section className="section-spacing">
        <div className="container thinking-grid">
          {qualityThinkingSections.map((section) => (
            <article key={section.title} className="thinking-card">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default QualityThinkingPage;
