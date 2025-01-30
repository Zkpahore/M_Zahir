import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiReactrouter, SiJavascript } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
// import Certificate from './Certificate';

const frontendSkills = [
  { name: 'HTML 5', level: 90, icon: <FaHtml5 className="text-orange-500" />, color: 'orange' },
  { name: 'JavaScript', level: 65, icon: <SiJavascript className="text-yellow-500" />, color: 'yellow' },
  { name: 'React Js', level: 85, icon: <FaReact className="text-cyan-400" />, color: 'cyan' },
  { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss className="text-blue-500" />, color: 'blue' },
  { name: 'CSS', level: 75, icon: <FaCss3Alt className="text-blue-400" />, color: 'blue' },
  { name: 'ES6', level: 70, icon: <FaJsSquare className="text-yellow-400" />, color: 'yellow' },
  { name: 'React Router', level: 60, icon: <SiReactrouter className="text-red-500" />, color: 'red' },
];

const backendSkills = [
  { name: 'Express Js', level: 80, icon: <SiExpress className="text-gray-300" />, color: 'green' },
  { name: 'Node Js', level: 75, icon: <FaNodeJs className="text-green-500" />, color: 'green' },
  { name: 'Mongoose', level: 70, icon: <SiMongoose className="text-red-500" />, color: 'red' },
  { name: 'REST API', level: 65, icon: <MdApi className="text-green-400" />, color: 'green' },
  { name: 'MongoDB', level: 60, icon: <SiMongodb className="text-green-600" />, color: 'green' },
];

const toolsSkills = [
  { name: 'WordPress', level: 70, icon: <FaWordpress className="text-blue-300" />, color: 'purple' },
];

const SkillCategory = ({ title, skills, categoryColor }) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-white mb-8 relative inline-block">
        <span className={`bg-gradient-to-r from-${categoryColor}--500 to-${categoryColor}-700 text-transparent bg-clip-text`}>
          {title}
        </span>
        <span className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${categoryColor}-500 to-transparent rounded-full`} />
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <SkillBox key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillBox = ({ skill }) => {
  return (
    <div className={`group relative bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-${skill.color}-500/20`}>
      <div className="absolute inset-0 rounded-xl border border-gray-700/50 group-hover:border-${skill.color}-500/50 transition-colors" />
      
      <div className="flex flex-col items-center">
        <div className={`text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 text-${skill.color}-500`}>
          {skill.icon}
        </div>
        
        <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
        
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-3">
          <div 
            className={`bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600 h-2.5 rounded-full transition-all duration-500`}
            style={{ width: `${skill.level}%` }}
          />
        </div>
        
        <span className={`text-sm font-medium text-${skill.color}-400`}>
          {skill.level}% Proficiency
        </span>
      </div>
    </div>
  );
};

const SkillsProgressBars = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A visual representation of my technical skills and proficiency levels across different technologies
          </p>
        </header>

        <SkillCategory 
          title="Frontend Development" 
          skills={frontendSkills} 
          categoryColor="blue" 
        />

        <SkillCategory 
          title="Backend Development" 
          skills={backendSkills} 
          categoryColor="green" 
        />

        <SkillCategory 
          title="Tools & Platforms" 
          skills={toolsSkills} 
          categoryColor="purple" 
        />
      </div>
      
      {/* <Certificate /> */}
    </section>
  );
};

export default SkillsProgressBars;