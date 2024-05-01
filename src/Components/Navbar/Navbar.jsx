import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/flogo.png'
import menu from '../../assets/burger-bar.png'

const Navbar = (props) => {

  const navigate = useNavigate()
  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])
    
  const [mobileMenu, setMobileMenu] = useState(true);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false): setMobileMenu(true);
  }
  return (
    <nav className={`${props.class} container ${sticky? 'scroll-nav' : ''}`}>
        <img className='logo' src={logo} alt="logo image" />
        <ul className={mobileMenu? '': 'hide-mobile-menu'}>
            <li onClick={() => navigate('/Home')}>Home</li>
            <li onClick={() => navigate('/Create')}>Create</li>
            
            <li className='button' onClick={() => navigate('/Contact')}>Contact</li>

        </ul>
        <img className='menu-icon' src={menu} alt="" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
