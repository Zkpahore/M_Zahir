import React from 'react'

const Contact = () => {
  return (
    <div className='bg-slate-800 justify-center items-center py-16 w-full'>
      <h1 className='text-3xl text-center text-white font-semibold'>Contact <span className='text-yellow-600'>Us</span></h1>
      <p className='text-center text-white py-6 px-6'>
      Please fill out the form below, and we'll get back to you promptly:
        </p>
      <form className='text-center w-full justify-center items-center'>
        <input className='rounded-t-md w-4/6 my-2 border-2 border-white bg-slate-800 text-white' type='text' placeholder='  Name' />
        <br />
        <input className='w-2/6 my-2 border-2 border-white bg-slate-800 text-white' type='email' placeholder='  Email' />
        <input className='w-2/6 my-2 border-2 border-white bg-slate-800 text-white' type='text' placeholder='  Subject' />
        <br /> 
        <textarea className='rounded-b-md w-4/6 my-2 h-32 border-2 border-white bg-slate-800 text-white' type='text' placeholder='  Your Message' />
        <br />
        <button className='my-2 bg-yellow-500 text-white py-2 px-4 rounded-full'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact
