import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <p>My Technical Level</p>
        <div className="skills-grid">
          <div className="skill-category frontend">
            <h3>Frontend Developer</h3>
            <ul>
              <li><span className="skill-name">HTML5</span><span className="skill-level">Advanced</span></li>
              <li><span className="skill-name">CSS3</span><span className="skill-level">Advanced</span></li>
              <li><span className="skill-name">JavaScript</span><span className="skill-level">Advanced</span></li>
              <li><span className="skill-name">React JS</span><span className="skill-level">Intermediate</span></li>
              <li><span className="skill-name">Redux</span><span className="skill-level">Basic</span></li>
            </ul>
          </div>
          <div className="skill-category tools">
            <h3>Tools</h3>
            <ul>
              <li><span className="skill-name">Git/Github</span><span className="skill-level">Advanced</span></li>
              <li><span className="skill-name">VS Code</span><span className="skill-level">Advanced</span></li>
              <li><span className="skill-name">JIRA</span><span className="skill-level">Intermediate</span></li>
              <li><span className="skill-name">Azure DevOps</span><span className="skill-level">Basic</span></li>
            </ul>
          </div>
          <div className="skill-category technical">
            <h3>Other Expertise</h3>
            <ul>
              <li><span className="skill-name">AEM 6.5</span><span className="skill-level">Intermediate</span></li>
              <li><span className="skill-name">Node.js</span><span className="skill-level">Basic</span></li>
              <li><span className="skill-name">OOPS</span><span className="skill-level">Intermediate</span></li>
            </ul>
          </div>
          <div className="skill-category other">
            <h3>Development Technologies</h3>
            <ul>
              <li><span className="skill-name">Agile Methodologies</span><span className="skill-level">Advanced</span></li>
              <li><span className="skill-name">SDLC</span><span className="skill-level">Intermediate</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
