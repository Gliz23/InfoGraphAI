import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Create from './Components/Create/create.jsx'
import InfoGraphic from './Components/InfoGraphic/InfoGraphic.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Create/>
      <InfoGraphic/>
    </div>
  )
}

export default App
