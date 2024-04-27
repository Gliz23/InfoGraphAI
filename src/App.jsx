import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero.jsx'
import Create from './Components/Create/create.jsx'
import InfoGraphic from './Components/InfoGraphic/InfoGraphic.jsx'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoPage from './Components/NoPage.jsx'


import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ImageGen from './Components/ImageGen.jsx'






const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element = {<><Navbar/><Hero/><About/><Footer/></>}/>
        <Route path = '/Home' element = {<><Navbar/><Hero/><About/><Footer/></>} />
        <Route path = '/Create' element = {<><Navbar class='create-nav'/><Create/><Footer/></>} />
        <Route path = '/InfoGraphic' element = {<><Navbar/><InfoGraphic/></>}/>

        <Route path = '/Contact' element = {<><Navbar class='contact-nav'/><Contact/><Footer/></>} />
        <Route path = '/PerfectIG' element = {<><Navbar class='perfect-nav'/><ImageGen/></>} />

        <Route path = '/*' element = {<><NoPage/></>} />
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
