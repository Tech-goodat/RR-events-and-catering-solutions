import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Tips from './components/Tips';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import MapDirections from './components/MapDirections';




const OnePage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    contact: useRef(null),
    tips: useRef(null),
    testimonials: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
      <NavBar activeSection={activeSection} />
      <div className='pt-[60px] w-full'>
        <section id="home" ref={sectionRefs.home}><Home /></section>
        <section id="about" ref={sectionRefs.about}><About /></section>
        <section id="services" ref={sectionRefs.services}><Services /></section>
        <section id="contact" ref={sectionRefs.contact}><Contact /></section>
        <section id="tips" ref={sectionRefs.tips}><Tips /></section>
        <section id="testimonials" ref={sectionRefs.testimonials}><Testimonials /></section>
        <section id="footer"><Footer /></section>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnePage />} />
        <Route path="/blog" element={<><NavBar /><Blog /></>} />
        <Route path="/gallery" element={<><NavBar /><Gallery /></>} />
        <Route path='faq' element={<><NavBar /><FAQ /></>} />
        <Route path="map-directions" element={<><NavBar /><div className="p-5"><MapDirections /></div></>} />
      
        
      </Routes>
    </Router>
  );
};

export default App;
