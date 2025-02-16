import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Travel Platform",
      date: "Jan 10/2024",
      description: "A comprehensive travel booking platform with real-time availability checks and interactive maps. Implemented secure payment processing and user review system.",
      tags: ["React.js", "Tailwind CSS", "React Icons", "Node.js"],
      image: "FireShot.png",
      alt: "Travel Web Design"
    },
    {
      title: "E-Commerce Store",
      date: "Jan 12/2024",
      description: "Full-featured e-commerce solution with shopping cart, product management, and order tracking. Integrated with Stripe API for secure payments and inventory management.",
      tags: ["React.js", "Tailwind CSS", "React Router", "Redux"],
      image: "eCommerce.jpg",
      alt: "E-Commerce Web Application"
    },
    {
      title: "Social Media Dashboard",
      date: "Feb 01/2024",
      description: "Analytics dashboard with real-time data visualization, user engagement metrics, and content management system. Features role-based access control.",
      tags: ["React.js", "Chart.js", "Firebase", "Material UI"],
      image: "dashboard.png",
      alt: "Analytics Dashboard"
    }
  ];

  return (
    <section className="py-12 px-4 lg:px-8 bg-gradient-to-b from-slate-50 to-slate-100" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12 relative after:absolute after:w-20 after:h-1 after:bg-purple-500 after:left-1/2 after:-translate-x-1/2 after:bottom-[-15px]">
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <article 
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {project.title}
              </h3>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-purple-600 font-medium">
                  {project.date}
                </span>
                <div className="flex space-x-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex space-x-4">
                <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Source Code
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;