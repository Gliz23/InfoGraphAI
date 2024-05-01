import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'
 


const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className= 'hero container' id='hero'>
      <div className='hero-text'>
        <h1> InfoGraphics<br/>
         To <br/>
         Match Your Needs</h1>
        <p> Here, customizable infographics are made with quality in view</p>
      </div>
    </div>
  )
}

export default Hero
