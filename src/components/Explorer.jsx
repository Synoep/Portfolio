// src/components/Explorer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Explorer({ isOpen }) {
  const [expandedSections, setExpandedSections] = useState({
    about: true,
    sideProjects: true,
    contact: true,
    misc: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className={`h-[calc(100vh-48px)] bg-zinc-800 text-gray-300 transition-all duration-300 overflow-hidden ${isOpen ? 'w-64' : 'w-0'}`}>
      <div className="p-4">
        <h2 className="text-sm uppercase mb-4 text-gray-400">EXPLORER</h2>
        
        {/* About Section */}
        <div className="mb-4">
          <div 
            className="flex items-center cursor-pointer hover:bg-zinc-700 py-1"
            onClick={() => toggleSection('about')}
          >
            <span className="mr-2">{expandedSections.about ? '▼' : '▶'}</span>
            <span>About</span>
          </div>
          {expandedSections.about && (
            <ul className="ml-4">
              <li className="flex items-center py-1">
                <span className="w-4 h-4 mr-2">
                  <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_html.svg" alt="HTML" />
                </span>
                <Link to="/" className="hover:text-white">index.html</Link>
              </li>
              <li className="flex items-center py-1">
                <span className="w-4 h-4 mr-2">
                  <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_css.svg" alt="CSS" />
                </span>
                <Link to="/experience" className="hover:text-white">experience.css</Link>
              </li>
              <li className="flex items-center py-1">
                <span className="w-4 h-4 mr-2">
                  <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_js.svg" alt="JS" />
                </span>
                <Link to="/skills" className="hover:text-white">skills.js</Link>
              </li>
              <li className="flex items-center py-1">
                <span className="w-4 h-4 mr-2">
                  <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_typescript.svg" alt="TS" />
                </span>
                <Link to="/projects" className="hover:text-white">projects.ts</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Side Projects Section */}
        <div className="mb-4">
          <div 
            className="flex items-center cursor-pointer hover:bg-zinc-700 py-1"
            onClick={() => toggleSection('sideProjects')}
          >
            <span className="mr-2">{expandedSections.sideProjects ? '▼' : '▶'}</span>
            <span>Side Projects</span>
          </div>
          {expandedSections.sideProjects && (
            <ul className="ml-4">
              <li className="flex items-center py-1">
                <span className="w-4 h-4 mr-2">
                  <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_reactjs.svg" alt="React" />
                </span>
                <span className="hover:text-white">AyeSoul.js</span>
              </li>
              {/* Add more projects */}
            </ul>
          )}
        </div>

        {/* Contact Section */}
        <div className="mb-4">
          <div 
            className="flex items-center cursor-pointer hover:bg-zinc-700 py-1"
            onClick={() => toggleSection('contact')}
          >
            <span className="mr-2">{expandedSections.contact ? '▼' : '▶'}</span>
            <span>Contact</span>
          </div>
          {expandedSections.contact && (
            <ul className="ml-4">
              <li className="flex items-center py-1">
                <span className="w-4 h-4 mr-2">
                  <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_email.svg" alt="Email" />
                </span>
                <Link to="/contact" className="hover:text-white">Email.tsx</Link>
              </li>
            </ul>
          )}
        </div>
        </div>
    </div>
  );
}

export default Explorer;