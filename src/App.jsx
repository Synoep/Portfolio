// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import leetcode from './assets/LeetCode.png';
import codeforces from './assets/Codeforces.png';
import codechef from './assets/codechef.jpg';
import Skills from './Pages/Skills';
import Navigationbar from './components/Navigationbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-zinc-900 text-gray-300 h-screen">
        <Navigationbar />
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
                    <li><Link to="/skills" className="text-blue-400 hover:underline">Skills ...</Link></li>
                    <li><Link to="/projects" className="text-blue-400 hover:underline">Projects ...</Link></li>
                    <li><Link to="/contact" className="text-blue-400 hover:underline">Get in Touch ...</Link></li>
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
          <Route path="/experience" element={<div>Experience Page</div>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/hobbies" element={<div>Hobbies Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;