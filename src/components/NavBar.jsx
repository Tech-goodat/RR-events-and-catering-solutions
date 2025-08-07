import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { FaServicestack } from "react-icons/fa6";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { GrBlog } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";

const NavBar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hashLinkClass = (id) =>
    `rounded-full px-4 p-1.5 text-[12px] hover:bg-orange-400 text-gray-700 flex gap-2 hover:text-white ${
      activeSection === id ? 'bg-orange-400 text-white' : ''
    }`;

  const routeLinkClass = (path) =>
    `rounded-full px-4 p-1.5 text-[12px] hover:bg-orange-400 text-gray-700 flex gap-2 hover:text-white ${
      location.pathname === path ? 'bg-orange-400 text-white' : ''
    }`;

  return (
    <div className='fixed top-0 left-0 z-50 flex w-full items-center justify-between lg:justify-center h-[50px] p-5 shadow-md bg-white'>
      <HashLink smooth to="/#home" className="font-bold text-orange-400">RR Events</HashLink>

      {/* Desktop Menu */}
      <div className='lg:flex w-full ml-5 hidden items-center justify-between'>
        <HashLink smooth to="/#home" className={hashLinkClass('home')}><FaHome size={20} />Home</HashLink>
        <HashLink smooth to="/#about" className={hashLinkClass('about')}><FaQuestionCircle size={20}/>About</HashLink>
        <HashLink smooth to="/#contact" className={hashLinkClass('contact')}><IoIosContacts size={20}/>Contact</HashLink>
        <HashLink smooth to="/#services" className={hashLinkClass('services')}><FaServicestack size={20}/>Services</HashLink>
        <HashLink smooth to="/#tips" className={hashLinkClass('tips')}><MdOutlineTipsAndUpdates size={20}/>Tips</HashLink>
        <HashLink smooth to="/#testimonials" className={hashLinkClass('testimonials')}><MdOutlineTipsAndUpdates size={20}/>Testimonials</HashLink>
        <Link to="/blog" className={routeLinkClass('/blog')}><GrBlog size={20} />Blog</Link>
        <Link to="/gallery" className={routeLinkClass('/gallery')}><FaServicestack size={20} />Gallery</Link>
        <Link to="/faq" className={routeLinkClass('/faq')}><FaQuestion  size={20}/>FAQ</Link>
        <Link to="/map-directions" className={routeLinkClass('/map-directions')}><FaMapMarkerAlt size={20} />Map & Directions</Link>
        
      </div>

      {/* Mobile Toggle Button */}
      <button onClick={toggleMenu} className='lg:hidden text-gray-700'>
        {isOpen ? <IoMdClose size={25}/> : <FaBars size={25}/>}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-12 left-0 w-full bg-white shadow-lg h-screen p-5 flex flex-col gap-10 items-start'>
          <HashLink smooth to="/#home" className={hashLinkClass('home')} onClick={toggleMenu}><FaHome size={20} />Home</HashLink>
          <HashLink smooth to="/#about" className={hashLinkClass('about')} onClick={toggleMenu}><FaQuestionCircle size={20}/>About</HashLink>
          <HashLink smooth to="/#contact" className={hashLinkClass('contact')} onClick={toggleMenu}><IoIosContacts size={20}/>Contact</HashLink>
          <HashLink smooth to="/#services" className={hashLinkClass('services')} onClick={toggleMenu}><FaServicestack size={20}/>Services</HashLink>
          <HashLink smooth to="/#tips" className={hashLinkClass('tips')} onClick={toggleMenu}><MdOutlineTipsAndUpdates size={20}/>Tips</HashLink>
          <HashLink smooth to="/#testimonials" className={hashLinkClass('testimonials')} onClick={toggleMenu}><MdOutlineTipsAndUpdates size={20}/>Testimonials</HashLink>
          <Link to="/blog" className={routeLinkClass('/blog')} onClick={toggleMenu}><GrBlog size={20} />Blog</Link>
          <Link to="/gallery" className={routeLinkClass('/gallery')} onClick={toggleMenu}><FaServicestack size={20} />Gallery</Link>
          <Link to="/faq" className={routeLinkClass('/faq')} onClick={toggleMenu}>FAQ</Link>
          <Link to="/map-directions" className={routeLinkClass('/map-directions')} onClick={toggleMenu}>Map & Directions</Link>

        </div>
      )}
    </div>
  );
};

export default NavBar;
