import React from 'react'
import T2 from './T2.jsx';
import imageUrl from '../../../assets/info-bg2.png';

const Text2 = () => {
    
  return (
        <div>
          <h1 className='perfect-title'>Second InfoGraphic</h1>
          <T2 
          imageUrl={imageUrl}
          text1='Text 1'
          text2='Text 2'
          text3='Text 3'
          text4='Text 4'
          text5='Text 5'
          text6='Text 6'
          text7='Text 7'
          text8='InfoGraph AI'
          />
        </div>
      );
    };

export default Text2
