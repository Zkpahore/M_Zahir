import React from 'react';
import Services from './Services';

function Certificate() {
  const certificates = [
    {
      img: 'mern.jpg',
      alt: 'MERN Stack Development',
      title: 'MERN Stack Development',
      description: 'This certificate signifies my expertise in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I have developed robust, scalable, and high-performance web solutions leveraging the MERN stack.'
    },
    {
      img: 'wordpress.jpg',
      alt: 'WordPress',
      title: 'WordPress',
      description: 'I have mastered the art of creating dynamic and user-friendly websites using WordPress. This certificate highlights my skills in developing custom themes, plugins, and optimizing WordPress sites for performance and SEO.'
    },
    {
      img: 'freelancing.jpg',
      alt: 'Freelancing',
      title: 'Freelancing',
      description: 'This certificate demonstrates my ability to manage freelance projects efficiently. It covers aspects such as client communication, project management, and delivering high-quality work on time and within budget.'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 relative inline-block">
            My <span className="text-yellow-400">Certificates</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 transform scale-x-75"></span>
          </h3>
          <p className="text-slate-400 text-lg mt-4">Credentials that validate my expertise and commitment</p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="group relative bg-slate-700 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={certificate.img}
                  alt={certificate.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-yellow-400">
                  {certificate.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-300">
                  {certificate.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute -right-8 -top-8 w-16 h-16 bg-yellow-400 transform rotate-45"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}></div>

      <Services />
    </section>
  );
}

export default Certificate;