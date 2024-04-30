import React from 'react'
import './About.css'
import about_img from '../../assets/aboutimg.jpg'
import { useNavigate } from 'react-router-dom'
import icon3 from '../../assets/happiness.png'
   

const About = () => {
    const navigate = useNavigate()

  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={about_img} alt='about_image' className= 'about-img'/>
        </div>
        <div className="about-right">
            <div className = 'heading'>
                <p>About us</p>
                <h2>WHO <span>WE ARE</span></h2>  
            </div>
            <p> InfoGraphAI is a tool that can create visually appealing and informative infographics with AI and data visualization.
                <br/>
                Just provide a text and a summary will be generated for you.
                <br/>
                You can edit it to suite you or delete it to generate a new summary.
                <br/>
                This summary will be used to create your infographics when you click on the generate button.
                <br/>
                There you go. As simple as it is, download your infographic and  <img src={icon3} alt="" className="smile" />. 
            </p>
            <button className='fg-button' onClick={() => navigate('/Create')}>Create</button>
        </div>
    </div>
  )
}

export default About
