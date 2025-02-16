import React from 'react'

<<<<<<< HEAD
const Footer = () => {
    const text = "Copyright";
    const text2 = "2024 Zahir | All Rights Reserved"
  return (
    
    <footer className='w-full text-center bg-slate-500 text-white py-6'>
    <p>{text} &copy; {text2}</p>
=======
function Footer() {
  return (
    <footer id='Contact' className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent italic">
              Let's Collaborate!
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl">
              Ready to transform your digital vision into reality? Let's create something extraordinary together. 
              Whether you need a stunning website, a powerful web app, or expert consultation, I'm here to help 
              you navigate the digital landscape with innovative solutions.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-4 hover:text-white transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Zahirpahore@yahoo.com" className="text-lg">Zahirpahore@yahoo.com</a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:pl-12">
            <h3 className="text-xl font-semibold mb-6 text-white">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-12 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Zkpahore. All rights reserved.
            <span className="block mt-2">Crafted with ❤️ and ☕</span>
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600" />
      </div>
>>>>>>> 419e851414907003ee8c1035a6e0151df8e9ecf4
    </footer>
  )
}

<<<<<<< HEAD
export default Footer
=======
export default Footer
>>>>>>> 419e851414907003ee8c1035a6e0151df8e9ecf4
