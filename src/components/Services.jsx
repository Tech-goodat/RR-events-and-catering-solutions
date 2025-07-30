import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";

const Services = () => {
  const HandleEmailSends=()=>{
        window.location.href="https://mail.google.com/mail/?view=cm&fs=1&to=felixkiprotich2000@gmail.com&su=Thank you for reaching out to RR Events and Catering Solutions&body=Hello there.Thanks for reaching out to RR Events and Catering Solutions. How May I help you?",
            "_blank", "_blank"
    }

    const handleCall=()=>{
        window.location.href="tel:+254758364336"
    }
  return (
    <div className='flex text-gray-700 p-5 flex-col w-full items-center justify-start min-h-screen'>
      <div className='flex w-full items-center justify-between'>
        <button onClick={HandleEmailSends} className='flex cursor-pointer items-center justify-center gap-2 border border-gray-200 p-1 text-[12px] w-[100px] rounded-lg'><MdMarkEmailRead /> Send Email</button>
        <h1 className='text-xl font-bold '>Our Services</h1>
        <button onClick={handleCall} className='flex items-center justify-center cursor-pointer w-[100px] bg-orange-400 text-white text-[12px] font-bold p-2 rounded-full shadow-sm'>Make a Call</button>
      </div>
      <div className='flex w-full items-center '>
        <p className='text-[14px] mt-4 '>
          From Kitchen to Celebration, We Handle It All.
<span className='text-orange-500 font-bold text-[16px] ml-2'>Weddings, birthdays, or corporate events </span> — we serve delicious meals, tents, décor, music, and full planning to bring your vision to life.
        </p>
        
        </div>
      <div className='flex flex-col w-full mt-5 lg:grid lg:grid-cols-4 gap-5'>
        <div className='flex bg-gray-50 w-full flex-col shadow-md rounded-xl overflow-hidden'>
  <div className="w-full h-[150px]">
    <img
      src='/background1.jpg'
      alt="food image"
      className='w-full h-full object-cover'
    />
  </div>
  <div className='p-3'>
    <h1 className='text-lg font-bold text-orange-500'>Corporate Events</h1>
    <p className='text-[14px] text-gray-700 mt-1'>
      We provide full event planning, catering, and logistics for corporate events, ensuring a seamless experience.
    </p>
  </div>
</div>

       <div className='flex bg-gray-50 w-full flex-col shadow-md rounded-xl overflow-hidden'>
  <div className="w-full h-[150px]">
    <img
      src='/background4.jpg'
      alt="food image"
      className='w-full h-full object-cover'
    />
  </div>
  <div className='p-3'>
    <h1 className='text-lg font-bold text-orange-500'>Caterings</h1>
    <p className='text-[14px] text-gray-700 mt-1'>
      Our catering services offer a wide range of cuisines and menu options to suit any event, big or small.
    </p>
  </div>
</div>

<div className='flex bg-gray-50 w-full flex-col shadow-md rounded-xl overflow-hidden'>
  <div className="w-full h-[150px]">
    <img
      src='/background3.jpg'
      alt="food image"
      className='w-full h-full object-cover'
    />
  </div>
  <div className='p-3'>
    <h1 className='text-lg font-bold text-orange-500'>Birthdays</h1>
    <p className='text-[14px] text-gray-700 mt-1'>
      Celebrate your special day with our customized birthday packages, including catering, décor, and entertainment.
    </p>
  </div>
</div>

<div className='flex bg-gray-50 w-full flex-col shadow-md rounded-xl overflow-hidden'>
  <div className="w-full h-[150px]">
    <img
      src='/background2.jpg'
      alt="food image"
      className='w-full h-full object-cover'
    />
  </div>
  <div className='p-3'>
    <h1 className='text-lg font-bold text-orange-500'>Weddings</h1>
    <p className='text-[14px] text-gray-700 mt-1'>
      We specialize in creating unforgettable wedding experiences with exquisite catering, elegant décor, and seamless planning.
    </p>
  </div>
</div>

      </div>
    </div>
  )
}

export default Services
