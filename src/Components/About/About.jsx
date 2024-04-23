import React from 'react'
import './About.css'
import about_img from '../../assets/banner.png'

const About = () => {
  return (
    <div className='about'>
        <h3> ABOUT INFOGRAPH AI</h3>
        <div className="loc">
            <div className="about-left">
                <img src={about_img} alt='about_image' className= 'about-img'/>
            </div>
            <div className="about-right">
                <p>AI-generated infographics combine the power of artificial intelligence
                    and data visualization to create compelling and informative visuals.
                    These infographics are generated using algorithms that can analyze large
                    datasets, identify patterns, and automatically translate complex
                    information into visually appealing graphics. 
                </p>
                <p>The benefits of AI-generated infographics are numerous. They save time
                    and effort by automating the design process, allowing users to quickly
                    create professional-looking visuals. Additionally, AI algorithms can
                    handle complex datasets and present information in a format that is easy
                    to understand, making it accessible to a wider audience.
                    As AI continues to advance, the capabilities of AI-generated infographics will
                    expand, offering even more sophisticated and personalized visualizations. These
                    infographics have the potential to revolutionize the way information is presented,
                    making it more accessible, engaging, and impactful.      
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default About
