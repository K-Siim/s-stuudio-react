import React from 'react'

const Info = () => {
  return (
    <div className='w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-white'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Company Information</h1>
          
          <div className='py-8'>
            <p className='text-xl py-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className='grid md:grid-cols-3 gap-8 py-4'>
              <div className='bg-white text-black p-6 rounded-lg shadow-lg'>
                <h3 className='text-xl font-bold mb-4'>Our Mission</h3>
                <p>To provide exceptional service and innovative solutions.</p>
              </div>
              
              <div className='bg-white text-black p-6 rounded-lg shadow-lg'>
                <h3 className='text-xl font-bold mb-4'>Our Vision</h3>
                <p>To become the leading provider in our industry.</p>
              </div>
              
              <div className='bg-white text-black p-6 rounded-lg shadow-lg'>
                <h3 className='text-xl font-bold mb-4'>Our Values</h3>
                <p>Integrity, Innovation, Excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info