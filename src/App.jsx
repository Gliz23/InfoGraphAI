import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Create from './Components/Create/create.jsx'
import InfoGraphic from './Components/InfoGraphic/InfoGraphic.jsx'
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import './ImageEditor.css'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Create/>
      <InfoGraphic/>
      <div className="image-editor-container">
      <ImageEditorComponent/>
      </div>
    </div>
  )
}

export default App
