// src/components/Sidebar.jsx
import React from 'react';
import fileicon from './assets/fileicon.png'

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 z-50 p-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none rounded"
      >
        ☰
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-zinc-800 text-gray-300 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 z-40 shadow-lg`}
      >
        <div className="p-4">
          <h2 className="text-xl mb-4">EXPLORER</h2>
          <div className="mb-4">
            <h3 className="text-lg">About</h3>
            <ul>
              <li>index.html</li>
              <li>experience.css</li>
              <li>skills.js</li>
              <li>projects.ts</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg">Side Projects</h3>
            <ul>
              <li>AyeSoul.js</li>
              <li>AyeHigh.js</li>
              <li>Ninetails.ts</li>
              <li>AyeDot.js</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg">Contact</h3>
            <ul>
              <li>Email.tsx</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg">Misc</h3>
            <ul>
              <li>Blogs.py</li>
              <li>Gaming.sln</li>
              <li>Anime.jsx</li>
              <li>Learning.ts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;