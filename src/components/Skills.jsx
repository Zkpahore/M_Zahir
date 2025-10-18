import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiReactrouter, SiJavascript } from 'react-icons/si';
import { MdApi } from 'react-icons/md';

const frontendSkills = [
  { name: 'HTML 5', level: 90, icon: <FaHtml5 />, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/20' },
  { name: 'JavaScript', level: 65, icon: <SiJavascript />, color: 'from-yellow-500 to-amber-500', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/20' },
  { name: 'React Js', level: 85, icon: <FaReact />, color: 'from-cyan-400 to-blue-500', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/20' },
  { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss />, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/20' },
  { name: 'CSS', level: 75, icon: <FaCss3Alt />, color: 'from-blue-400 to-indigo-500', bgColor: 'bg-blue-400/10', borderColor: 'border-blue-400/20' },
  { name: 'ES6', level: 70, icon: <FaJsSquare />, color: 'from-yellow-400 to-yellow-600', bgColor: 'bg-yellow-400/10', borderColor: 'border-yellow-400/20' },
  { name: 'React Router', level: 60, icon: <SiReactrouter />, color: 'from-red-500 to-pink-500', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/20' },
];

const backendSkills = [
  { name: 'Express Js', level: 80, icon: <SiExpress />, color: 'from-gray-300 to-gray-500', bgColor: 'bg-gray-400/10', borderColor: 'border-gray-400/20' },
  { name: 'Node Js', level: 75, icon: <FaNodeJs />, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/20' },
  { name: 'Mongoose', level: 70, icon: <SiMongoose />, color: 'from-red-500 to-orange-500', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/20' },
  { name: 'REST API', level: 65, icon: <MdApi />, color: 'from-green-400 to-teal-500', bgColor: 'bg-green-400/10', borderColor: 'border-green-400/20' },
  { name: 'MongoDB', level: 60, icon: <SiMongodb />, color: 'from-green-600 to-green-800', bgColor: 'bg-green-600/10', borderColor: 'border-green-600/20' },
];

const toolsSkills = [
  { name: 'WordPress', level: 70, icon: <FaWordpress />, color: 'from-blue-300 to-blue-600', bgColor: 'bg-blue-400/10', borderColor: 'border-blue-400/20' },
];

const SkillCategory = ({ title, skills, categoryColor, delay = 0 }) => {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className={`h-8 w-1 bg-gradient-to-b ${categoryColor} rounded-full`} />
        <h3 className="text-3xl lg:text-4xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {title}
          </span>
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillBox key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const SkillBox = ({ skill, index }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Background Glow */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />
      
      {/* Main Card */}
      <div className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border ${skill.borderColor} transition-all duration-300 group-hover:border-opacity-50`}>
        {/* Icon Container */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg`}>
            <div className="text-2xl text-white">
              {skill.icon}
            </div>
          </div>
          
          {/* Percentage Badge */}
          <div className={`px-3 py-1 rounded-full ${skill.bgColor} border ${skill.borderColor} backdrop-blur-sm`}>
            <span className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
              {skill.level}%
            </span>
          </div>
        </div>

        {/* Skill Name */}
        <h4 className="text-lg font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
          {skill.name}
        </h4>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-slate-400">Proficiency</span>
            <span className={`font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
              {skill.level}%
            </span>
          </div>
          
          <div className="w-full bg-slate-700/50 rounded-full h-2 backdrop-blur-sm">
            <motion.div
              className={`h-2 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Hover Effect Line */}
        <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${skill.color} group-hover:w-full transition-all duration-500 rounded-full`} />
      </div>
    </motion.div>
  );
};

const SkillsProgressBars = () => {
  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-16 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          
          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A comprehensive overview of my technical skills and proficiency levels across modern web technologies
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="max-w-7xl mx-auto">
          <SkillCategory 
            title="Frontend Development" 
            skills={frontendSkills} 
            categoryColor="from-purple-500 to-pink-500"
            delay={0.1}
          />

          <SkillCategory 
            title="Backend Development" 
            skills={backendSkills} 
            categoryColor="from-cyan-500 to-blue-500"
            delay={0.3}
          />

          <SkillCategory 
            title="Tools & Platforms" 
            skills={toolsSkills} 
            categoryColor="from-orange-500 to-yellow-500"
            delay={0.5}
          />
        </div>

        {/* Summary Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm constantly expanding my skill set and staying updated with the latest technologies 
              to deliver cutting-edge solutions. My passion for learning drives me to explore new 
              frameworks and tools that enhance development efficiency and user experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsProgressBars;