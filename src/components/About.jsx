import React from 'react'

const About = () => {
  return (
    <div className='flex text-gray-700 p-5 w-full items-center flex-col h-screen'>
      <div className='flex lg:ml-[100px] flex-col  w-full items-center'>
        <p className='text-orange-400 flex w-full font-bold text-lg'>We are the best</p>
        <h1 className='text-3xl flex w-full font-bold text-'>We Set out to bring your event</h1>
        <div className='flex flex-col lg:grid  w-full items-center grid-cols-2 gap-4 '>
        <h1 className='text-3xl flex w-full font-bold text-gray-400'>To Absolute Perfection, In every way.</h1>
        <div className='flex mb-5 w-full items-center flex-col'>
        <p className='flex w-full text-[13px] lg:text-[12px] '>Be it your weddings,</p>
        <p className='flex w-full text-[13px] lg:text-[12px] '>Birthdays, Corporate parties,</p>
        <p className='flex w-full text-[13px] lg:text-[12px] '> we have you covered</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
