import React from 'react';

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
    <div className='bg-slate-700 text-white py-12'>
      <h3 className="text-3xl font-bold mb-8 text-center">
        My <span className='text-yellow-500'>Certificates</span>
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {certificates.map((certificate, index) => (
          <div key={index} className="flex flex-col items-center bg-slate-600 rounded-lg shadow-md w-72 text-center transform transition duration-400 hover:scale-105">
            <img src={certificate.img} alt={certificate.alt} className="w-full h-40 mb-2" />
            <p className="text-lg font-semibold">{certificate.title}</p>
            <p className="text-sm p-4">{certificate.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
