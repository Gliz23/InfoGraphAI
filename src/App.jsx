import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero.jsx'
import Create from './Components/Create/create.jsx'
import InfoGraphic from './Components/InfoGraphic/InfoGraphic.jsx'
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import './ImageEditor.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Components/About/About.jsx'
// import Contact from './Components/Contact/Contact.jsx'
// import Create from './Pages/Create.jsx'
// import NoPage from './Pages/NoPage.jsx'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <div>
      <Navbar/>
      <Hero/>
      <Create/>
      <InfoGraphic/>
      <div className="image-editor-container">
      <ImageEditorComponent/>
      </div>
    </div>

    
      <Routes>
        <Route index element = {<Hero/>}/>
        <Route path = '/Home' element = {<Hero/>} />
        <Route path = '/About' element = {<About/>} />
        {/* <Route path = '/Contact' element = {<Contact/>} /> */}
        {/* <Route path = '/Create' element = {<Create/>} /> */}
        {/* <Route path = '/*' element = {<NoPage/>} /> */}
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
