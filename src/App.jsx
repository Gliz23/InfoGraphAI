import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero.jsx'
import Create from './Components/Create/create.jsx'
import InfoGraphic from './Components/InfoGraphic/InfoGraphic.jsx'
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import './ImageEditor.css'

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
        <Route index element = {<><Navbar/><Hero/><About/><Contact/><Footer/></>}/>
        <Route path = '/Home' element = {<><Navbar/><Hero/><About/><Contact/><Footer/></>} />
        <Route path = '/Create' element = {<><Navbar class='create-nav'/><Create/></>} />
        <Route path = '/InfoGraphic' element = {<>
          <Navbar/>
          <InfoGraphic/>
          <div className="image-editor-container">
            <ImageEditorComponent/>
          </div>
        </>}/>

        <Route path = '/Contact' element = {<><Navbar class='contact-nav'/><Contact/></>} />
        <Route path = '/*' element = {<><NoPage/><ImageGen/></>} />
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
