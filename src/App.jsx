import React, { useEffect, useState, useRef } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Tips from './components/Tips';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    contact: useRef(null),
    services: useRef(null),
    tips: useRef(null),
    testimonials: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } 
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <NavBar activeSection={activeSection} />

      <div className='w-full pt-[50px]'>
        <section id='home' ref={sectionRefs.home} className='w-full pt-2'>
          <Home />
        </section>
         <section id='about' ref={sectionRefs.about} className='w-full pt-2'>
          <About />
        </section>
        <section id='services' ref={sectionRefs.services} className='w-full pt-2'>
          <Services />
        </section>
       
        <section id='contact' ref={sectionRefs.contact} className='w-full pt-2'>
          <Contact />
        </section>
        
        <section id='tips' ref={sectionRefs.tips} className='w-full pt-2'>
          <Tips />
        </section>
        <section id='testimonials' ref={sectionRefs.testimonials} className='w-full pt-2'>
          <Testimonials />
        </section>
        <section id='footer' ref={sectionRefs.footer} className='w-full pt-2'>
          <Footer />
        </section>

      </div>
    </div>
  );
};

export default App;
