import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'
 


const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className= 'hero container'>
      <div className='hero-text'>
        <h1> InfoGraphics to match your needs</h1>
        <p> Here, customizable infographics are made with quality in view</p>
        <button className='button' onClick={() => navigate('/Create')}>Create</button>
      </div>
    </div>
  )
}

export default Hero
