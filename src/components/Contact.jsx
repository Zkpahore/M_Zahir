import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

const firebaseConfig = {
  // Your Firebase configuration
   apiKey: "AIzaSyDI2g8w8qL3x_MohRC4svoHf2khX5iDxJg",
    authDomain: "todo-app-ef68e.firebaseapp.com",
    projectId: "todo-app-ef68e",
    storageBucket: "todo-app-ef68e.appspot.com",
    messagingSenderId: "56703889128",
    appId: "1:56703889128:web:f1bad2f5cc2d18f29f235d",
    measurementId: "G-Y4XRMZ53Z0"
};

// Initialize Firebase outside of the component
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

// React component
const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Function to handle form input changes
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Push form data to Firebase database
      await push(ref(db, 'messages'), formData);

      console.log('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className='bg-slate-800 justify-center items-center py-16 w-full'>
      <h1 className='text-3xl text-center text-white font-semibold'>Contact <span className='text-yellow-600'>Us</span></h1>
      <p className='text-center text-white py-6 px-6'>
        Please fill out the form below, and we'll get back to you promptly:
      </p>
      <form className='text-center w-full justify-center items-center' onSubmit={handleSubmit}>
        <input className='rounded-t-md w-4/6 my-2 border-2 border-white bg-slate-800 text-white' type='text' placeholder='  Name' name='name' value={formData.name} onChange={handleChange} />
        <br />
        <input className='w-2/6 my-2 border-2 border-white bg-slate-800 text-white' type='email' placeholder='  Email' name='email' value={formData.email} onChange={handleChange} />
        <input className='w-2/6 my-2 border-2 border-white bg-slate-800 text-white' type='text' placeholder='  Subject' name='subject' value={formData.subject} onChange={handleChange} />
        <br /> 
        <textarea className='rounded-b-md w-4/6 my-2 h-32 border-2 border-white bg-slate-800 text-white' type='text' placeholder='  Your Message' name='message' value={formData.message} onChange={handleChange} />
        <br />
        <button className='my-2 bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-400 active:bg-yellow-200 font-semibold font-sans transform transition duration-400 hover:scale-110' type='submit'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
