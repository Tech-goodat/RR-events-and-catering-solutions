import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Tips from './components/Tips';

const App = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <NavBar />

      <section id='home' className='w-full pt-20'>
        <Home />
      </section>
      <section id='about' className='w-full pt-20'>
        <About />
      </section>
      <section id='contact' className='w-full pt-20'>
        <Contact />
      </section>
      <section id='services' className='w-full pt-20'>
        <Services />
      </section>
      <section id='tips' className='w-full pt-20'>
        <Tips />
      </section>
    </div>
  );
};

export default App;
