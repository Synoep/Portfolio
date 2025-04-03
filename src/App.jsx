// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import './App.css';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import leetcode from './assets/LeetCode.png';
import codeforces from './assets/Codeforces.png';
import codechef from './assets/codechef.jpg';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Navigationbar from './components/Navigationbar';
import Explorer from './components/Explorer';

function App() {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  return (
    <Router>
      <div className="flex flex-col bg-zinc-900 text-gray-300 h-screen">
        <Navigationbar isExplorerOpen={isExplorerOpen} setIsExplorerOpen={setIsExplorerOpen} />
        <div className="flex flex-1">
          <Explorer isOpen={isExplorerOpen} />
          <div className={`flex-1 transition-all duration-300 ${isExplorerOpen ? 'ml-64' : 'ml-0'}`}>
            <Routes>
              <Route path="/" element={
                <div className="container">
                  <div className="header">
                    <h1>Shivam Tiwari</h1>
                    <h2>Software Development Engineer</h2>
                  </div>
                  <div className="content-wrapper">
                    <div className="start-section">
                      <h3 className="section-title">Start</h3>
                      <div className="start-links">
                        <Link to="/skills">Skills ...</Link>
                        <Link to="/projects">Projects ...</Link>
                        <Link to="/contact">Get in Touch ...</Link>
                      </div>
                    </div>
                    <div className="about-section">
                      <h3 className="section-title">About</h3>
                      <div>
                        <a href="https://www.linkedin.com/in/shivam-tiwari-b26b29278/" className="link-item">
                          <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                          LinkedIn Profile
                        </a>
                        <a href="https://github.com/Synoep" className="link-item">
                          <img src={github} alt="GitHub" className="w-6 h-6" />
                          GitHub Page
                        </a>
                        <a href="https://leetcode.com/u/synoep/" className="link-item">
                          <img src={leetcode} alt="LeetCode" className="w-6 h-6" />
                          LeetCode Profile
                        </a>
                        <a href="https://codeforces.com/profile/Synoep" className="link-item">
                          <img src={codeforces} alt="Codeforces" className="w-6 h-6" />
                          Codeforces Profile
                        </a>
                        <a href="https://www.codechef.com/users/baroushoei" className="link-item">
                          <img src={codechef} alt="CodeChef" className="w-6 h-6" />
                          CodeChef Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              } />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<div>Projects Page</div>} />
              <Route path="/contact" element={<div>Contact Page</div>} />
              <Route path="/hobbies" element={<div>Hobbies Page</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;