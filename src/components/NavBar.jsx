import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { FaServicestack } from "react-icons/fa6";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
const NavBar = ({ activeSection }) => {
  const linkClass = (id) =>
    `rounded-full px-4 p-1.5 text-[12px]  hover:bg-orange-400 text-gray-700 flex gap-2 hover:text-white ${
      activeSection === id ? 'bg-orange-400 text-white' : ''
    }`;

  return (
    <div className='fixed top-0 left-0 z-50 flex w-full items-center justify-between h-[50px] p-5 shadow-md bg-white'>
      <a href='#home' className={linkClass('home')}><FaHome size={20} />Home</a>
      <a href='#about' className={linkClass('about')}><FaQuestionCircle size={20}/>About</a>
      <a href='#contact' className={linkClass('contact')}><IoIosContacts size={20}/>Contact</a>
      <a href='#services' className={linkClass('services')}><FaServicestack size={20}/>Services</a>
      <a href='#tips' className={linkClass('tips')}><MdOutlineTipsAndUpdates size={20}/>Tips</a>
    </div>
  );
};

export default NavBar;
