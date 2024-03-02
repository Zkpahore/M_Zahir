import React from 'react'

const Footer = () => {
    const text = "Copyright";
    const text2 = "2024 Zahir | All Rights Reserved"
  return (
    
    <footer className='w-full text-center bg-slate-500 text-white py-6'>
    <p>{text} &copy; {text2}</p>
    </footer>
  )
}

export default Footer
