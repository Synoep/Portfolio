// src/components/Navigationbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navigationbar({ isExplorerOpen, setIsExplorerOpen }) {
  return (
    <div className="flex items-center bg-zinc-800 p-2 border-b border-gray-700">
      {/* VS Code Icon and Explorer Toggle */}
      <div className="flex items-center">
        <button 
          onClick={() => setIsExplorerOpen(!isExplorerOpen)}
          className="text-gray-300 hover:text-white p-1 rounded hover:bg-zinc-700 mr-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="text-blue-500 mr-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
          </svg>
        </div>
      </div>

      {/* Rest of your navigation code */}
      <div className="flex space-x-4">
        <Link to="/" className="text-gray-300 hover:text-white">About</Link>
        <Link to="/experience" className="text-gray-300 hover:text-white">Experience</Link>
        <Link to="/skills" className="text-gray-300 hover:text-white">Skills</Link>
        <Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link>
        <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        <Link to="/hobbies" className="text-gray-300 hover:text-white">Hobbies</Link>
      </div>

      {/* Window Controls */}
      <div className="flex ml-auto space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
}

export default Navigationbar;