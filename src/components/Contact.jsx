import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import { toast } from 'react-toastify';
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';

// Initialize Firebase (consider moving this to a separate config file)
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDI2g8w8qL3x_MohRC4svoHf2khX5iDxJg",
    authDomain: "todo-app-ef68e.firebaseapp.com",
    projectId: "todo-app-ef68e",
    storageBucket: "todo-app-ef68e.appspot.com",
    messagingSenderId: "56703889128",
    appId: "1:56703889128:web:f1bad2f5cc2d18f29f235d",
    measurementId: "G-Y4XRMZ53Z0"
});

const db = getDatabase(firebaseApp);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await push(ref(db, 'messages'), formData);
      toast.success('Message sent successfully!', {
        position: 'bottom-center',
        autoClose: 3000,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Error sending message. Please try again.', {
        position: 'bottom-center',
        autoClose: 3000,
      });
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Contact <span className="text-yellow-400">Us</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Have a question or want to work together? We'd love to hear from you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
              />
              {errors.name && <span className="text-red-400 text-sm mt-1">{errors.name}</span>}
            </div>

            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
              />
              {errors.email && <span className="text-red-400 text-sm mt-1">{errors.email}</span>}
            </div>
          </div>

          <div className="relative">
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject (Optional)"
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
            />
          </div>

          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-4 text-slate-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all resize-none"
            ></textarea>
            {errors.message && <span className="text-red-400 text-sm mt-1">{errors.message}</span>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold rounded-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <FiSend className="text-lg" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;