import React from 'react';
import data from '../data';

function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {data.experience.map((job, i) => (
            <div key={i} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-role">{job.role}</h3>
                <span className="experience-company">{job.company}</span>
                <span className="experience-period">{job.period}</span>
              </div>
              {job.description && <p className="experience-description">{job.description}</p>}
              <ul className="experience-points">
                {job.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
