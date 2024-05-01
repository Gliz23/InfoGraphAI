import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero.jsx'
import Create from './Components/Create/create.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ImageGen from './Components/ImageGen.jsx'
import Qualities from './Components/Qualities/Qualities.jsx'
import Headings from './Components/Headings/Headings.jsx'
import NoPage from './Components/NoPage.jsx'






const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element = {<><Navbar/><Hero/>
        <div className="container">
          <Headings title='About Us' subtitle = 'Our' span='Solutions'/>
          <Qualities/>
          <About/>
          <Headings title='Contact Us' subtitle = 'Get' span='In TOuch'/>
          <Contact/>
        </div>
        <Footer/></>}/>
        <Route path = '/Home' element = {<><Navbar/><Hero/>
        <div className="container">
          <Headings title='About Us' subtitle = 'Our' span='Solutions'/>
          <Qualities/>
          <About/>
          <Headings title='Contact Us' subtitle = 'Get' span='In Touch'/>
          <Contact/>
        </div>
        <Footer/></>}/>
        <Route path = '/Create' element = {<>
        <Navbar class='create-nav'/>
        <Create/>
        </>} />

        <Route path = '/Contact' element = {<><Navbar class='contact-nav'/><Contact/><Footer/></>} />
        <Route path = '/PerfectIG' element = {<><Navbar class='perfect-nav'/><ImageGen/></>} />
        <Route path = '/*' element = {<><NoPage/></>} />
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
