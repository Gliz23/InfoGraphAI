import React from 'react'
import './Navbar.css'
import logo from '../../assets/flogo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img className='logo' src={logo} alt="logo image" />
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li><button className ='button'>Contact Us</button></li>
        </ul>
      
    </nav>
  )
}

export default Navbar
