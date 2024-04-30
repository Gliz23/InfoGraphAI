import React from 'react'
import './Qualities.css'
import image1 from '../../assets/info1.jpg'
import image2 from '../../assets/info2.jpg'
import image3 from '../../assets/info3.jpg'
import icon1 from '../../assets/infographics.png'
import icon2 from '../../assets/edit.png'
import icon3 from '../../assets/happiness.png'


const Qualities = () => {
  return (
    <div className='qualities' id='qualities'>
        <div className="quality">
            <img src={image2} alt=''/>
            <div className="caption">
                 <img src={icon1} alt="" />
                 <p>Need an infographic urgently?</p>
            </div>
        </div>
        <div className="quality">
            <img src={image3} alt=''/>
            <div className="caption">
                 <img src={icon2} alt="" />
                 <p>Don't know how to create one?</p>
            </div>
        </div>
        <div className="quality">
            <img src={image1} alt=''/>
            <div className="caption">
                 <img src={icon3} alt="" />
                 <p>InfoGraph AI is here to help</p>
            </div>
        </div>   
    </div>
  )
}

export default Qualities
