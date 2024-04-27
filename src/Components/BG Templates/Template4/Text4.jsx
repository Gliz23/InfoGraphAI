import React from 'react'
import T4 from './T4.jsx';
import imageUrl from '../../../assets/info-bg4.png';

const Text4 = (props) => {
   
  return (
        <div>
          <h1 className='perfect-title'>Fourth InfoGraphic</h1>
          <T4 
          imageUrl={imageUrl}
          text1={props.sentence[0]}
          text2={props.sentence[1]}
          text3={props.sentence[2]}
          text4={props.sentence[3]}
          text5={props.sentence[4]}
          text6={props.sentence[5]}
          text7={props.sentence[6]}
          text8='InfoGraph AI'
          />
        </div>
      );
    };

export default Text4
