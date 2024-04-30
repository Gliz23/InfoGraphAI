import React from 'react'
import './Headings.css'

const Headings = (props) => {
  return (
    <div className = 'heading'>
        <p>{props.title}</p>
        <h2>{props.subtitle} <span>{props.span}</span></h2>
    </div>
  )
}

export default Headings
