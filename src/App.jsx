// src/App.jsx
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="flex flex-col p-5 bg-zinc-900 text-gray-300 h-screen items-center">
      <div className=" w-full p-2 text-center mt-10 mr-100">
        <h1 className="text-5xl font-bold">Shivam Tiwari

        </h1>
        <h2 className="text-2xl">Software Development Engineer</h2>
      </div>
      <div className="flex justify-end w-full pr-10">
        <div className="w-1/3 mr-10">
          <h3 className="text-xl mb-2">Start</h3>
          <ul>
            <li><a href="#skills" className="text-blue-400 hover:underline">Skills ...</a></li>
            <li><a href="#projects" className="text-blue-400 hover:underline">Projects ...</a></li>
            <li><a href="#contact" className="text-blue-400 hover:underline">Get in Touch ...</a></li>
          </ul>
        </div>
        <div className="w-1/3">
          <h3 className="text-xl mb-2">About</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/shivam-tiwari-b26b29278/" className="text-blue-400 hover:underline">LinkedIn Profile</a></li>
            <li><a href="https://github.com/Synoep" className="text-blue-400 hover:underline">GitHub Page</a></li>
            <li><a href="https://leetcode.com/u/synoep/" className="text-blue-400 hover:underline">Leetcode</a></li>
            <li><a href="https://codeforces.com/profile/Synoep" className="text-blue-400 hover:underline">Codeforces</a></li>
            <li><a href="https://codeforces.com/profile/Synoep" className="text-blue-400 hover:underline">Codechef</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;