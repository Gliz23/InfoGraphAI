import React from 'react'
import T2 from './T2.jsx';
import imageUrl from '../../../assets/info-bg2.png';

const Text2 = (props) => {
    
  return (
        <div>
          <h1 className='perfect-title'>Second InfoGraphic</h1>
          <T2 
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

export default Text2
