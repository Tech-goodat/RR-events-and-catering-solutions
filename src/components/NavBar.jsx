import React from 'react';

const NavBar = () => {
  return (
    <div className='flex fixed top-0 left-0 z-50 w-full items-center justify-between h-[50px] p-5 shadow-md'>
      <a href='#home' className='hover:bg-orange-400 hover:text-white rounded-full px-6 p-1.5 text-sm'>Home</a>
      <a href='#about' className='hover:bg-orange-400 hover:text-white rounded-full px-6 p-1.5 text-sm'>About</a>
      <a href='#contact' className='hover:bg-orange-400 hover:text-white rounded-full px-6 p-1.5 text-sm'>Contact</a>
      <a href='#services' className='hover:bg-orange-400 hover:text-white rounded-full px-6 p-1.5 text-sm'>Services</a>
      <a href='#tips' className='hover:bg-orange-400 hover:text-white rounded-full px-6 p-1.5 text-sm'>Tips</a>
    </div>
  );
};

export default NavBar;
