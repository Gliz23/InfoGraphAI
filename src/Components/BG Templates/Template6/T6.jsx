import React from 'react'
import './T6.css'

const T6 = (props) => {

  return (
    <div className='template6' id='template6'>
      <img src={props.imageUrl} alt="Your Image" />
      <div className="text-container">

        <div className="text-box1">
            <p>{props.text1}</p>
        </div>

        <div className="text-box2">
            <p>{props.text2}</p>
        </div>

        <div className="text-box3">
            <p>{props.text3}</p>
        </div>

        <div className="text-box4">
            <p>{props.text4}</p>
        </div>

        <div className="text-box5">
            <p>{props.text5}</p>
        </div>

        <div className="text-box6">
            <p>{props.text6}</p>
        </div>

        <div className="text-box7">
            <p>{props.text7}</p>
        </div>

        <div className="text-box8">
            <p>{props.text8}</p>
        </div>

      </div>
    </div>
  )
}

export default T6
