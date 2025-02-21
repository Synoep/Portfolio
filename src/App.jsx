// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import leetcode from './assets/LeetCode.png';
import codeforces from './assets/Codeforces.png';
import codechef from './assets/codechef.jpg';

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-zinc-900 text-gray-300 h-screen">
        {/* Navigation Bar */}
        <div className="flex items-center bg-zinc-800 p-2 border-b border-gray-700">
          <div className="flex items-center">
            {/* VS Code Icon */}
            <div className="text-blue-500 mr-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
              </svg>
            </div>
            
            {/* Navigation Links */}
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white">About</Link>
              <Link to="/experience" className="text-gray-300 hover:text-white">Experience</Link>
              <Link to="/skills" className="text-gray-300 hover:text-white">Skills</Link>
              <Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              <Link to="/hobbies" className="text-gray-300 hover:text-white">Hobbies</Link>
            </div>
          </div>

          {/* Window Controls */}
          <div className="flex ml-auto space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={
            <div className="flex flex-col p-5 items-center">
              <div className="w-full p-2 text-center mt-10 mr-90">
                <h1 className="text-5xl font-bold">Shivam Tiwari</h1>
                <h2 className="text-2xl mt-3 ml-7">Software Development Engineer</h2>
              </div>
              <div className="flex justify-end w-full pr-10">
                <div className="w-1/3 mt-8">
                  <h3 className="text-xl mb-2">Start</h3>
                  <ul>
                    <li><a href="#skills" className="text-blue-400 hover:underline">Skills ...</a></li>
                    <li><a href="#projects" className="text-blue-400 hover:underline">Projects ...</a></li>
                    <li><a href="#contact" className="text-blue-400 hover:underline">Get in Touch ...</a></li>
                  </ul>
                </div>
                <div className="w-1/3 mr-20 mt-2">
                  <h3 className="text-xl mb-2">About</h3>
                  <ul>
                    <li className="flex items-center space-x-2 mb-2 border-b-4 border-blue-500 bg-zinc-800 p-2 rounded-md">
                      <img src={linkedin} alt="LinkedIn" className="w-6 h-6 rounded-full ml-1 -ml-2" />
                      <a href="https://www.linkedin.com/in/shivam-tiwari-b26b29278/" className="text-gray-200 hover:underline ml-2">
                        LinkedIn Profile
                      </a>
                    </li>
                    <li className="flex items-center space-x-2 mb-2 border-b-4 border-blue-500 bg-zinc-800 p-2 rounded-md">
                      <img src={github} alt="GitHub" className="w-6 h-6 rounded-full ml-1" />
                      <a href="https://github.com/Synoep" className="text-gray-200 hover:underline ml-2">
                        GitHub Page
                      </a>
                    </li>
                    <li className="flex items-center space-x-2 mb-2 border-b-4 border-blue-500 bg-zinc-800 p-2 rounded-md">
                      <img src={leetcode} alt="LeetCode" className="w-6 h-6 rounded-full -ml-2 ml-1" />
                      <a href="https://leetcode.com/u/synoep/" className="text-gray-200 hover:underline ml-2">
                        LeetCode Profile
                      </a>
                    </li>
                    <li className="flex items-center space-x-2 mb-2 border-b-4 border-blue-500 bg-zinc-800 p-2 rounded-md">
                      <img src={codeforces} alt="Codeforces" className="w-6 h-6 rounded-full ml-1 -ml-2" />
                      <a href="https://codeforces.com/profile/Synoep" className="text-gray-200 hover:underline ml-2">
                        Codeforces Profile
                      </a>
                    </li>
                    <li className="flex items-center space-x-2 mb-2 bg-zinc-800 border-b-4 border-blue-500 p-2 rounded-md">
                      <img src={codechef} alt="CodeChef" className="w-6 h-6 rounded-full ml-1 -ml-2" />
                      <a href="https://www.codechef.com/users/baroushoei" className="text-gray-200 hover:underline ml-2">
                        CodeChef Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          } />
          {/* Add more routes as needed */}
          <Route path="/experience" element={<div>Experience Page</div>} />
          <Route path="/skills" element={<div>Skills Page</div>} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/hobbies" element={<div>Hobbies Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;