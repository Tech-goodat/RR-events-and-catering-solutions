import React, { useEffect, useState, useRef } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Tips from './components/Tips';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    contact: useRef(null),
    services: useRef(null),
    tips: useRef(null),
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
      { threshold: 0.6 } // Trigger when 60% of the section is visible
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

      <div className='w-full pt-[80px]'>
        <section id='home' ref={sectionRefs.home} className='w-full pt-10'>
          <Home />
        </section>
        <section id='about' ref={sectionRefs.about} className='w-full pt-10'>
          <About />
        </section>
        <section id='contact' ref={sectionRefs.contact} className='w-full pt-10'>
          <Contact />
        </section>
        <section id='services' ref={sectionRefs.services} className='w-full pt-10'>
          <Services />
        </section>
        <section id='tips' ref={sectionRefs.tips} className='w-full pt-10'>
          <Tips />
        </section>
      </div>
    </div>
  );
};

export default App;
