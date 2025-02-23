// src/components/Skills.jsx
import React from 'react';

function Skills() {
  return (
    <div className="mt-2 w-full p-5 pb-40 ml-3 text-left overflow-auto">
      <h2 className="lg:text-5xl font-bold leading-tight text-indigo-500 text-3xl">
        Skills
      </h2>
      <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
        Data Structures and Algorithms, Frontend Development, Backend Development, 
        Database Management, System Design and Cloud.
      </p>

      <div className="w-full mb-5 pb-5">
        {/* Programming Section */}
        <div className="mt-5">
          <p className="mt-2 tracking-tight text-gray-400 text-xl">
            Programming
          </p>
          <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                  <img src="https://img.icons8.com/color/144/000000/javascript--v1.png" alt="JavaScript" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                  JavaScript
                </p>
              </dt>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                  <img src="https://img.icons8.com/color/96/000000/typescript.png" alt="TypeScript" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                  TypeScript
                </p>
              </dt>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                  <img src="https://img.icons8.com/color/48/null/python--v1.png" alt="Python" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                  Python
                </p>
              </dt>
            </div>
          </dl>
        </div>

        {/* Full-Stack Development Section */}
        <div className="mt-5 pt-5">
          <p className="mt-2 tracking-tight text-gray-400 text-xl">
            Full-Stack Development
          </p>
          <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
            {/* React */}
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                  <img width="90%" src="https://img.icons8.com/color/144/000000/react-native.png" alt="React" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                  React
                </p>
              </dt>
            </div>
            {/* Node.js */}
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                  <img src="https://img.icons8.com/fluency/144/000000/node-js.png" alt="Node.js" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                  Node.js
                </p>
              </dt>
            </div>
            {/* Add other Full-Stack Development skills similarly */}
          </dl>
        </div>

        {/* Database Section */}
        <div className="mt-5 pt-5">
          <p className="mt-2 tracking-tight text-gray-400 text-xl">
            Database
          </p>
          <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
            {/* Add Database skills */}
          </dl>
        </div>

        {/* DevOps Section */}
        <div className="mt-5 pt-5">
          <p className="tracking-tight text-gray-400 text-xl">DevOps</p>
          <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
            {/* Add DevOps skills */}
          </dl>
        </div>

        {/* Tools Section */}
        <div className="mt-5 pt-5">
          <p className="tracking-tight text-gray-400 text-xl">Tools</p>
          <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
            {/* Add Tools skills */}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Skills;