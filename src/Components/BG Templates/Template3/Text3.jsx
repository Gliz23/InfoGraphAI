import React from 'react'
import T3 from './T3.jsx';
import imageUrl from '../../../assets/info-bg3.png';

const Text3 = () => {
    
  return (
        <div>
          <h1>Your Infographic</h1>
          <T3 
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

export default Text3
