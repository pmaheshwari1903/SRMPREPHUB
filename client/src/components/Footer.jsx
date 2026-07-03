import React from 'react'
import logo from '../assets/images/logo.png'

function Footer() {
  return (
    <div className='bg-[#f3f3f3] flex justify-center px-4 pb-10 py-4 pt-10'>
      <div className='w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 py-8 px-3 text-center'>
        <div className='flex justify-center items-center gap-3 mb-3'>
          <img src={logo} alt='SRMPREPHUB' className='w-10 h-10 rounded-lg object-contain' />
          <h2 className='font-semibold'>SRMPREPHUB</h2>
        </div>
        <p className='text-gray-500 text-sm max-w-xl mx-auto'>
          AI-powered interview preparation platform designed to improve
          communication skills, technical depth and professional confidence.
        </p>


      </div>
    </div>
  )
}

export default Footer
