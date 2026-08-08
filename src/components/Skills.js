import React from 'react';
import data from '../data';

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-group">
            <h3 className="skill-group-title">Frontend</h3>
            <ul className="skill-list">
              {data.skills.frontend.map((skill) => (
                <li key={skill} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="skill-group">
            <h3 className="skill-group-title">Tools & Practices</h3>
            <ul className="skill-list">
              {data.skills.tools.map((skill) => (
                <li key={skill} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
