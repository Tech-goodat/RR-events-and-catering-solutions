import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";

const Services = () => {
  return (
    <div className='flex text-gray-700 p-5 flex-col w-full items-center justify-center h-screen'>
      <div className='flex w-full items-center justify-between'>
        <button className='flex items-center justify-center gap-2 border border-gray-200 p-1 text-[12px] w-[100px] rounded-lg'><MdMarkEmailRead /> Send Email</button>
        <h1 className='text-xl font-bold '>Our Services</h1>
        <button className='fle w-[100px] bg-orange-500 text-white text-[12px] font-bold p-2 rounded-full shadow-sm'>Get in Touch</button>
      </div>
    </div>
  )
}

export default Services
