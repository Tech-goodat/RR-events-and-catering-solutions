import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Tips from './components/Tips'
import NavBar from './components/NavBar'



const App = () => {
  return (
   <Router>
    <div className='flex flex-col w-full items-center justify-center'>
      <NavBar />
      <Home />
      <About />
      <Contact />
      <Services />
      <Tips />
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/tips' element={<Tips />} />
    </Routes>
   </Router>
  )
}

export default App
