import React from 'react'

const Home = () => {
  const handleWhatsApp=()=>{
        window.location.href="https://wa.me/254758364336?text=Hello there.Thanks for reaching out to RR Events and Catering Solutions. How May I help you? ", "_blank"
    }
  return (
    <div className='flex container overflow-x-hidden flex-col  text-gray-700 font-bold w-full items-center justify-center h-full lg:h-screen'>
      <img src='/background1.jpg' alt="image" className='w-full h-auto'/>
      <h1 className=" p-5 lg:text-4xl text-3xl font-bold text-center mb-2">
         Bringing Flavor, Flair & Full Event Magic
      </h1>
      <h1 className="lg:text-4xl px-5 text-3xl text-orange-400 font-bold text-center mb-4">
        To Your Special Day
      </h1>
    <p  className="px-5 lg:text-[19px] text-[16px] font-bold text-center text-gray-700 max-w-2xl mx-auto">
      From meals to music, tents to planning we handle it all so you can relax and enjoy your event.
    </p>
    <div className='w-full flex items-center justify-center px-5'>
    <button onClick={handleWhatsApp} className='flex w-full lg:w-[300px] rounded-full items-center justify-center bg-orange-400 text-[13px] p-2.5 font-bold text-white mt-7 cursor-pointer'>Get In Touch</button>
    </div>
    </div>
  )
}

export default Home
