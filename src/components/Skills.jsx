<<<<<<< HEAD
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiReactrouter, SiJavascript } from 'react-icons/si';
import { MdApi } from 'react-icons/md';

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
        <span className={`bg-gradient-to-r from-${categoryColor}--500 to-${categoryColor}-700 text-yellow-300 bg-clip-text`}>
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
    </section>
  );
};

export default SkillsProgressBars;
=======
import React from "react";

const Skills = () => {
  const frontendSkills = [
    "React",
    "HTML5",
    "CSS",
    "Vite Frame",
    "Redux",
    "React Router",
    "Tailwind CSS",
    "Bootstrap CSS"
  ];

  const backendSkills = [
    "ExpressJS",
    "NodeJS",
    "Nodemon",
    "Mongoose",
    "REST API"
  ];

  const generateCategoryColor = (category) => {
    const colors = {
      frontend: "border-sky-400 hover:border-sky-300",
      backend: "border-purple-400 hover:border-purple-300"
    };
    return colors[category] || "border-gray-400";
  };

  const renderSkills = (skills, category) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`border-2 p-3 rounded-lg text-center bg-slate-700 text-white ${generateCategoryColor(
              category
            )} transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-lg cursor-default`}
          >
            <span className="text-sm md:text-base">{skill}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-wrap py-12 px-4 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-200" id="skills">
      <div className="w-full md:w-1/2 lg:w-1/2 p-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-6 before:bg-purple-500">
            About Me
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Welcome to my corner of the web! I'm a MERN Stack developer passionate about crafting
            robust and efficient web applications with cutting-edge technologies.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Focused on clean code and intuitive design, I specialize in full-stack development,
            delivering seamless digital experiences from concept to deployment.
          </p>
        </div>

        <div className="mt-8 ml-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6">
          <h3 className="font-bold text-lg text-purple-600 mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            Studied at
          </h3>
          <p className="text-blue-600 font-semibold text-lg ml-8">
            Sukkur IBA University
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/2 p-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-6 before:bg-sky-500">
            Technical Skills
          </h2>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-sky-600 mb-6 ml-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Frontend Technologies
            </h3>
            {renderSkills(frontendSkills, "frontend")}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-6 ml-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
              Backend Technologies
            </h3>
            {renderSkills(backendSkills, "backend")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
>>>>>>> 419e851414907003ee8c1035a6e0151df8e9ecf4
