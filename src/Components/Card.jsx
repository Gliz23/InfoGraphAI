import React from 'react';

function Card(props) {

    return(
        <>
        <div className="card">
            <div className='card-text'>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
         </div>
      </>
    );
}
export default Card




















