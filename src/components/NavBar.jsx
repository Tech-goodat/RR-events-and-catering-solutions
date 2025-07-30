import React from 'react';

const NavBar = ({ activeSection }) => {
  const linkClass = (id) =>
    `rounded-full px-6 p-1.5 text-sm hover:bg-orange-400 hover:text-white ${
      activeSection === id ? 'bg-orange-400 text-white' : ''
    }`;

  return (
    <div className='fixed top-0 left-0 z-50 flex w-full items-center justify-between h-[50px] p-5 shadow-md bg-white'>
      <a href='#home' className={linkClass('home')}>Home</a>
      <a href='#about' className={linkClass('about')}>About</a>
      <a href='#contact' className={linkClass('contact')}>Contact</a>
      <a href='#services' className={linkClass('services')}>Services</a>
      <a href='#tips' className={linkClass('tips')}>Tips</a>
    </div>
  );
};

export default NavBar;
