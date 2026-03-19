import React from 'react';
import PageHero from '../components/sections/PageHero';
import { contactContent } from '../content/siteContent';

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Open to professional conversations around enterprise QA and quality governance"
        description={contactContent.message}
      />
      <section className="section-spacing">
        <div className="container contact-card">
          <div>
            <p className="section-label">Direct contact</p>
            <h2>Let&apos;s connect</h2>
          </div>
          <div className="contact-list">
            <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
            <a href={contactContent.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={contactContent.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <p>{contactContent.resumeLabel}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
