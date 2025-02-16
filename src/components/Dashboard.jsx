import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaBriefcase, FaGraduationCap, FaUser } from 'react-icons/fa';

const ResumeCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Muhammad Zahir</h1>
              <p className="text-lg md:text-xl font-light opacity-90">MERN Stack Developer</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-8 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <FaEnvelope className="mr-3 text-blue-600" />
                <a href="mailto:zahirpahore@gmail.com" className="hover:text-blue-600 transition-colors">
                  zahirpahore@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <FaPhone className="mr-3 text-blue-600" />
                <a href="tel:+923142718479" className="hover:text-blue-600 transition-colors">
                  +92 314 2718479
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-3 text-blue-600" />
                <span>Pakistan, Sindh, Jacobabad</span>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaUser className="mr-2 text-blue-600" />
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS', 'Docker', 'GraphQL', 'TypeScript', 'Redux', 'PostgreSQL'].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaUser className="mr-2 text-blue-600" />
                Summary
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Full-stack developer specializing in MERN stack applications. 2+ years of experience in building 
                scalable web applications with modern technologies. Passionate about creating efficient, 
                maintainable code and implementing robust architecture patterns.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaBriefcase className="mr-2 text-blue-600" />
                Experience
              </h2>
              <div className="space-y-6">
                <div className="pl-4 border-l-4 border-blue-100">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">Tech Lead</h3>
                    <span className="text-gray-500 md:text-right">2019 - Present</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">Google · Full-time</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Led cross-functional team in developing enterprise SaaS solutions</li>
                    <li>Implemented microservices architecture with 99.9% uptime</li>
                    <li>Reduced CI/CD pipeline execution time by 40%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaGraduationCap className="mr-2 text-blue-600" />
                Education
              </h2>
              <div className="pl-4 border-l-4 border-blue-100">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">Master of Computer Science</h3>
                  <span className="text-gray-500 md:text-right">2014 - 2016</span>
                </div>
                <p className="text-blue-600 font-medium">Stanford University</p>
              </div>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className="bg-gray-50 py-4 text-center text-sm text-gray-500 border-t border-gray-100">
          © 2024 Muhammad Zahir. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;