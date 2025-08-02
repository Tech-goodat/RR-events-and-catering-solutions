import React from 'react'

const About = () => {
  return (
    <div className='flex text-gray-700 p-5 w-full items-center flex-col min-h-screen'>
      <div className='flex lg:ml-[100px] flex-col w-full items-center'>
        <p className='text-orange-400 w-full font-bold text-lg'>We are the best</p>
        <h1 className='text-3xl w-full font-bold'>We Set out to bring your event</h1>
        
        <div className='flex flex-col gap-5 lg:grid w-full items-center grid-cols-2 '>
          <h1 className='text-3xl w-full font-bold text-gray-400'>To Absolute Perfection, In every way.</h1>
          <div className='flex mb-5 w-full items-center flex-col'>
            <p className='w-full text-[13px] lg:text-[12px]'>Be it your weddings,</p>
            <p className='w-full text-[13px] lg:text-[12px]'>Birthdays, Corporate parties,</p>
            <p className='w-full text-[13px] lg:text-[12px]'>we have you covered</p>
          </div>
        </div>
      </div>

      <div className='flex gap-4 flex-col items-center justify-center w-full lg:grid lg:grid-cols-4'>
        <div className='col-span-3 w-full h-[280px] lg:h-[350px]'>
          <img 
            src='/pic1.jpg' 
            alt='pic' 
            className='rounded-xl w-full h-full object-cover'
          />
        </div>
        <div className='w-full h-200px] lg:h-[350px]'>
          <img 
            src='/pic2.jpg' 
            alt='pic' 
            className='rounded-xl w-full h-full object-cover'
          />
        </div>
      </div>
      <div className='flex w-full mt-7 text-gray-300  items-center justify-center'>
        <hr className='flex w-[900px] '/>
      </div>
      <div className='flex flex-col mt-6 lg:grid w-full lg:grid-cols-2 items-center justify-center'>
        <div className='flex lg:ml-[100px] flex-col items-center w-full'>
          <h1 className='text-2xl w-full font-bold flex items-center'>We bring you</h1>
          <h1 className='text-2xl w-full font-bold flex'>Great Value</h1>
        </div>
        <div className='flex flex-col items-center mt-6 w-full lg:w-[500px]'>
          <h1 className='text-[11px] w-full font-bold flex items-center'>At RR Events Chef Company, we turn ordinary gatherings into unforgettable experiences. Whether it’s a lavish wedding, a stylish birthday bash, a high-level corporate party, or an intimate private dinner, we bring passion, precision, and a personal touch to every plate and every detail.✨ </h1>
          <h1 className='text-[11px] mt-7 w-full  flex'>Our talented chefs craft mouthwatering cuisines tailored to your taste, while our dedicated events team handles everything with perfection—from décor to service. With RR Events, you're not just hosting an event; you're creating a masterpiece of memories.🎉</h1>
        </div>

      </div>
    </div>
  )
}

export default About
