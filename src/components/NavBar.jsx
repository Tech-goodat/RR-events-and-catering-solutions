import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex w-full items-center justify-between h-[50px] p-5 shadow-md'>
        <Link to='/' className=' hover:bg-orange-400 hover:text-white rounded-full px-6 p-1.5 text-sm items-center justify-center'>Home</Link>
        <Link to='/about' className=' hover:bg-orange-400 hover:text-white rounded-full px-6 p-1.5 text-sm items-center justify-center'>About</Link>
        <Link to='/contact' className=' hover:bg-orange-400 hover:text-white rounded-full px-6 p-1.5 text-sm items-center justify-center'>Contact</Link>
        <Link to='/services' className=' hover:bg-orange-400 hover:text-white rounded-full px-6 p-1.5 text-sm items-center justify-center'>Services</Link>
        <Link to='/tips' className=' hover:bg-orange-400 hover:text-white rounded-full px-6 p-1.5 text-sm items-center justify-center'>Tips</Link>
        
    </div>
  )
}

export default NavBar
