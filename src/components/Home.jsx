import React from 'react'

const Home = () => {
  return (
    <div className='flex overflow-x-hidden flex-col p-5 text-gray-700 w-full items-center justify-center h-screen'>
      <h1 className=" lg:text-4xl text-3xl font-bold text-center mb-2">
         Bringing Flavor, Flair & Full Event Magic
      </h1>
      <h1 className="lg:text-4xl text-2xl text-orange-400 font-bold text-center mb-4">
        To Your Special Day
      </h1>
    <p className="text-[15px] font-bold text-center text-gray-700 max-w-2xl mx-auto">
      From meals to music, tents to planning we handle it all so you can relax and enjoy your event.
    </p>
    <button className='flex w-full lg:w-[300px] rounded-full items-center justify-center bg-orange-400 text-[13px] p-2 font-bold text-white mt-7 cursor-pointer'>Get In Touch</button>
    </div>
  )
}

export default Home
