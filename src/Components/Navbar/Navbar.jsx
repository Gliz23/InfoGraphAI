import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/flogo.png'

const Navbar = (props) => {

  const navigate = useNavigate()
  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])
    
  return (
    <nav className={`${props.class} container ${sticky? 'scroll-nav' : ''}`}>
        <img className='logo' src={logo} alt="logo image" />
        <ul>
            <li onClick={() => navigate('/Home')}>Home</li>
            <li onClick={() => navigate('/Create')}>Create</li>
            <li onClick={() => navigate('/InfoGraphic')}>AI InfoGraphic</li>
            
            <li><button className ='button' onClick={() => navigate('/Contact')}>Contact Us</button></li>

        </ul>
      
    </nav>
  )
}

export default Navbar
