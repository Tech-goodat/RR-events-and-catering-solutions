import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { FaServicestack } from "react-icons/fa6";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
const NavBar = ({ activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
  const linkClass = (id) =>
    `rounded-full px-4 p-1.5 text-[12px]  hover:bg-orange-400 text-gray-700 flex gap-2 hover:text-white ${
      activeSection === id ? 'bg-orange-400 text-white' : ''
    }`;

  return (
    <div className='fixed  top-0 left-0 z-50 flex w-full items-center justify-between lg:justify-center h-[50px] p-5 shadow-md bg-white'>
      <a href='#home' className="font-bold text-orange-400">RR Events</a>
      <div className='lg:flex w-full ml-5 hidden items-center justify-between'>
      <a href='#home' className={linkClass('home')}><FaHome size={20} />Home</a>
      <a href='#about' className={linkClass('about')}><FaQuestionCircle size={20}/>About</a>
      <a href='#contact' className={linkClass('contact')}><IoIosContacts size={20}/>Contact</a>
      <a href='#services' className={linkClass('services')}><FaServicestack size={20}/>Services</a>
      <a href='#tips' className={linkClass('tips')}><MdOutlineTipsAndUpdates size={20}/>Tips</a>

      </div>
      <button onClick={toggleMenu} className='lg:hidden text-gray-700'>
        {isOpen ? <IoMdClose size={25}/>:<FaBars size={25}/>}
      </button>
      {isOpen && (
        <div className='absolute top-12 left-0 w-full bg-white shadow-lg h-screen p-5 flex flex-col gap-10 items-start'>
          <a href='#home' className={linkClass('home')} onClick={toggleMenu}><FaHome size={20} />Home</a>
          <a href='#about' className={linkClass('about')} onClick={toggleMenu}><FaQuestionCircle size={20}/>About</a>
          <a href='#contact' className={linkClass('contact')} onClick={toggleMenu}><IoIosContacts size={20}/>Contact</a>
          <a href='#services' className={linkClass('services')} onClick={toggleMenu}><FaServicestack size={20}/>Services</a>
          <a href='#tips' className={linkClass('tips')} onClick={toggleMenu}><MdOutlineTipsAndUpdates size={20}/>Tips</a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
