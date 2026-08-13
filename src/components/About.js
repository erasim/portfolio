import React from 'react';
import data from '../data';

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            {data.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="about-facts">
            <div className="fact-card">
              <strong>{data.location}</strong>
              <span>Location</span>
            </div>
            <div className="fact-card">
              <strong>{data.role}</strong>
              <span>Role</span>
            </div>
            <div className="fact-card">
              <a
                href={data.resumeUrl}
                className="btn btn-outline btn-small"
                download="Asim-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
