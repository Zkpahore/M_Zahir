// src/components/SkillsProgressBars.jsx

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiReactrouter, SiJavascript } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import Certificate from './Certificate';

const frontendSkills = [
  { name: 'HTML 5', level: 90, icon: <FaHtml5 className="text-red-500" /> },
  { name: 'JavaScript', level: 65, icon: <SiJavascript className="text-yellow-500" /> },
  { name: 'React Js', level: 85, icon: <FaReact className="text-blue-400" /> },
  { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss className="text-blue-500" /> },
  { name: 'CSS', level: 75, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'ES6', level: 70, icon: <FaJsSquare className="text-yellow-500" /> },
  { name: 'React Router', level: 60, icon: <SiReactrouter className="text-red-500" /> },
];

const backendSkills = [
  { name: 'Express Js', level: 80, icon: <SiExpress className="text-gray-500" /> },
  { name: 'Node Js', level: 75, icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Mongoose', level: 70, icon: <SiMongoose className="text-red-500" /> },
  { name: 'REST API', level: 65, icon: <MdApi className="text-green-500" /> },
  { name: 'MongoDB', level: 60, icon: <SiMongodb className="text-green-600" /> },
];

const toolsSkills = [
  { name: 'WordPress', level: 70, icon: <FaWordpress className="text-gray-500" /> },
];

const borderColors = [
  'border-red-500',
  'border-green-500',
  'border-blue-500',
  'border-yellow-500',
  'border-purple-500',
];

const SkillsProgressBars = () => {
  return (
    <>
    <div className="bg-slate-700 pt-12">
      <h2 className='text-center font-semibold text-3xl py-6 px-2 text-white'>My <span className='text-yellow-400'>Programming Language Skills</span></h2>
      <div className="p-4 max-w-4xl mx-auto space-y-6">
        <div>
          <h6 className="text-2xl font-bold text-white mb-4">Frontend</h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className={`mb-4 bg-slate-900 shadow rounded-lg p-4 border-2  ${borderColors[index % borderColors.length]}`}
              >
                <div className="flex justify-between mb-1 items-center">
                  <div className="flex items-center">
                    {skill.icon}
                    <span className="text-lg font-medium text-white ml-2">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-white">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h6 className="text-2xl font-bold text-white mb-4">Backend</h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className={`mb-4 bg-slate-800 shadow rounded-lg p-4 border-2 ${borderColors[(index + frontendSkills.length) % borderColors.length]}`}
              >
                <div className="flex justify-between mb-1 items-center">
                  <div className="flex items-center">
                    {skill.icon}
                    <span className="text-lg font-medium text-white ml-2">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-white">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h6 className="text-2xl font-bold text-white mb-4">Tools</h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {toolsSkills.map((skill, index) => (
              <div
                key={index}
                className={`mb-4 bg-slate-800 shadow rounded-lg p-4 border-2 ${borderColors[(index + toolsSkills.length) % borderColors.length]}`}
              >
                <div className="flex justify-between mb-1 items-center">
                  <div className="flex items-center">
                    {skill.icon}
                    <span className="text-lg font-medium text-white ml-2">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-white">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Certificate />
    </>
  );
};

export default SkillsProgressBars;
