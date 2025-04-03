// src/components/Skills.jsx
import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-inner">
        <h1 className="skills-title">Skills</h1>
        <p className="skills-description">
          Data Structures and Algorithms, Frontend Development, Backend Development, Database
          Management, System Design and Cloud.
        </p>
        <div className="skills-content">
          {/* Programming Section */}
          <div className="skills-section">
            <h2 className="section-title">Programming</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/144/000000/javascript--v1.png" alt="JavaScript" />
                </div>
                <p className="skill-name">JavaScript</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/96/000000/typescript.png" alt="TypeScript" />
                </div>
                <p className="skill-name">TypeScript</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/48/null/python--v1.png" alt="Python" />
                </div>
                <p className="skill-name">Python</p>
              </div>
            </div>
          </div>

          {/* Full-Stack Development Section */}
          <div className="skills-section">
            <h2 className="section-title">Full-Stack Development</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/144/000000/react-native.png" alt="React" />
                </div>
                <p className="skill-name">React</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/fluency/144/000000/node-js.png" alt="Node.js" />
                </div>
                <p className="skill-name">Node.js</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://i.ibb.co/Kj1TqRv/image.png" alt="Next.js" />
                </div>
                <p className="skill-name">Next.js</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default" alt="Tailwind" />
                </div>
                <p className="skill-name">Tailwind</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/144/000000/bootstrap.png" alt="Bootstrap" />
                </div>
                <p className="skill-name">Bootstrap</p>
              </div>
            </div>
          </div>

          {/* Database Section */}
          <div className="skills-section">
            <h2 className="section-title">Database</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/ios-filled/100/000000/sql.png" alt="SQL" />
                </div>
                <p className="skill-name">SQL</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/48/null/redis.png" alt="Redis" />
                </div>
                <p className="skill-name">Redis</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/48/null/postgreesql.png" alt="PostgreSQL" />
                </div>
                <p className="skill-name">PostgreSQL</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" />
                </div>
                <p className="skill-name">MongoDB</p>
              </div>
            </div>
          </div>

          {/* DevOps Section */}
          <div className="skills-section">
            <h2 className="section-title">DevOps</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/144/000000/amazon-web-services.png" alt="AWS" />
                </div>
                <p className="skill-name">AWS</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/144/000000/git.png" alt="Git" />
                </div>
                <p className="skill-name">Git</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/fluency/144/000000/github.png" alt="GitHub" />
                </div>
                <p className="skill-name">GitHub</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/144/000000/azure-1.png" alt="Azure" />
                </div>
                <p className="skill-name">Azure</p>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="skills-section">
            <h2 className="section-title">Tools</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/fluency/144/000000/visual-studio-code-2019.png" alt="VS Code" />
                </div>
                <p className="skill-name">VS Code</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILwHh21Dky51ePyPy2V_qsPeQWd5n136Sa8PQuhIMmOGLpprK6Zt7qWn9cRL21LE3RzM&usqp=CAU" alt="Postman" />
                </div>
                <p className="skill-name">Postman</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/144/000000/jira.png" alt="JIRA" />
                </div>
                <p className="skill-name">JIRA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;