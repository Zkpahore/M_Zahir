import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState([]);

  const projectsData = [
    {
      id: 1,
      category: 'mern',
      web: 'https://e-commerce-murex-ten.vercel.app/',
      code: 'https://github.com/Zkpahore/E-Commerce-',
      icon: '🛒',
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with user authentication, product catalog, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      date: 'Feb 2024',
      gradient: 'from-purple-500 to-cyan-500'
    },
    {
      id: 2,
      category: 'mern',
      icon: '📊',
      title: 'Project Management Tool',
      description: 'Collaborative platform for teams to manage projects, tasks, and deadlines in real-time.',
      tech: ['MERN Stack', 'Socket.io', 'JWT', 'Material UI'],
      date: 'Mar 2023',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      id: 3,
      category: 'react',
      icon: '✍️',
      title: 'Blogging Platform',
      description: 'Content management system for creating, editing, and publishing blog posts with rich text editor.',
      tech: ['React', 'Firebase', 'Quill Editor', 'Cloudinary'],
      date: 'Jun 2023',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 4,
      category: 'wordpress',
      icon: '💬',
      title: 'Real-time Chat Application',
      description: 'Real-time messaging app with multiple rooms, user authentication, and message history.',
      tech: ['Node.js', 'Socket.io', 'Express', 'MongoDB'],
      date: 'Aug 2023',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      id: 5,
      category: 'fullstack',
      icon: '🎬',
      title: 'Movie Database',
      description: 'Comprehensive movie database with search, filtering, user reviews, and watchlist features.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'OMDb API'],
      date: 'Oct 2023',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 6,
      category: 'mern',
      icon: '📈',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics dashboard with data visualization, reporting, and real-time metrics.',
      tech: ['React', 'Express', 'MongoDB', 'Chart.js'],
      date: 'Dec 2023',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'mern', label: 'MERN Stack' },
    { key: 'react', label: 'React' },
    { key: 'wordpress', label: 'WordPress' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setProjects(projectsData);
    } else {
      setProjects(projectsData.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 lg:py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-cyan-300">My Work</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A collection of my recent projects showcasing modern web development technologies and innovative solutions
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              className={`px-6 py-3 rounded-xl font-medium text-sm lg:text-base transition-all duration-300 backdrop-blur-sm border ${
                activeFilter === filter.key 
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-transparent shadow-lg shadow-purple-500/25' 
                  : 'bg-slate-800/50 text-slate-300 border-slate-700/50 hover:border-cyan-500/30 hover:text-cyan-300'
              }`}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter}
        >
          <AnimatePresence mode="wait">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} variants={itemVariants} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {projects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-300 mb-2">No projects found</h3>
            <p className="text-slate-400">Try selecting a different category to see more projects.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, variants }) => {
  return (
    <motion.div
      className="group relative"
      variants={variants}
      layout
      whileHover={{ y: -5 }}
    >
      {/* Background Glow */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />
      
      {/* Main Card */}
      <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden transition-all duration-300 group-hover:border-cyan-500/30 h-full flex flex-col">
        {/* Project Header */}
        <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center text-white text-5xl">
            {project.icon}
          </div>
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <motion.a
              href={project.web}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ↗
            </motion.a>
            <motion.a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ⎘
            </motion.a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category Badge */}
          <div className="flex justify-between items-start mb-4">
            <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">
              {project.category === 'mern' ? 'MERN Stack' : 
               project.category === 'react' ? 'React' :
               project.category === 'wordpress' ? 'WordPress' : 'Full Stack'}
            </span>
            <span className="text-slate-400 text-sm">{project.date}</span>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 bg-slate-700/30 text-slate-300 rounded-lg text-xs font-medium border border-slate-600/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Details Link */}
          <motion.a
            href={project.web}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium group/link mt-auto"
            whileHover={{ gap: 3 }}
          >
            View Project
            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;