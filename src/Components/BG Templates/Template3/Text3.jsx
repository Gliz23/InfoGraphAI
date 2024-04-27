import React from 'react'
import T3 from './T3.jsx';
import imageUrl from '../../../assets/info-bg3.png';

const Text3 = () => {
    
  return (
        <div>
          <h1 className='perfect-title'>Third InfoGraphic</h1>
          <T3 
          imageUrl={imageUrl}
          text1={props.sentence[0]}
          text2={props.sentence[1]}
          text3={props.sentence[2]}
          text4={props.sentence[3]}
          text5={props.sentence[4]}
          text6={props.sentence[5]}
          text7={props.sentence[6]}
          />
        </div>
      );
    };

export default Text3
