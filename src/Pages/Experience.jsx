import React from 'react';
import '../styles/Experience.css';
import bluestockLogo from '../assets/Bluestock.jpeg';
import alignerLogo from '../assets/alignerr_logo.jpeg';
import outlierLogo from '../assets/Outlier.png';

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="work-title">Work</h1>
      <h2 className="experience-subtitle">Industry Experience</h2>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content left">
            <div className="experience-card">
              <h3>Software Development Engineer Intern</h3>
              <p>BlueStock Fintech</p>
            </div>
          </div>
          <div className="timeline-middle">
            <div className="timeline-circle">
              <div className="company-logo">
                <img src={bluestockLogo} alt="BlueStock Fintech" />
              </div>
            </div>
            <div className="timeline-line"></div>
          </div>
          <div className="timeline-date right">
            Jan 2024 - Present
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content right">
            <div className="experience-card">
              <h3>Software Developer</h3>
              <p>Aligner</p>
            </div>
          </div>
          <div className="timeline-middle">
            <div className="timeline-circle">
              <div className="company-logo">
                <img src={alignerLogo} alt="Aligner" />
              </div>
            </div>
            <div className="timeline-line"></div>
          </div>
          <div className="timeline-date left">
            June 2023 - Dec 2023
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content left">
            <div className="experience-card">
              <h3>Project Intern</h3>
              <p>Outlier</p>
            </div>
          </div>
          <div className="timeline-middle">
            <div className="timeline-circle">
              <div className="company-logo">
                <img src={outlierLogo} alt="Outlier" />
              </div>
            </div>
          </div>
          <div className="timeline-date right">
            Jan 2023 - May 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 