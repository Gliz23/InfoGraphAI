import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/flogo.png'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className='container'>
        <img className='logo' src={logo} alt="logo image" />
        <ul>
            <li onClick={() => navigate('/Home')}>Home</li>
            <li onClick={() => navigate('/About')}>About Us</li>
            <li><button className ='button' onClick={() => navigate('/Contact')}>Contact Us</button></li>
        </ul>
      
    </nav>
  )
}

export default Navbar
