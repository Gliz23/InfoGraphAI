import React, { useState, useRef } from 'react';
import './InfoGraphic.css';
// import axios from 'axios';
import image from '../../assets/nicebg.jpg';
import OpenAI from 'openai';
import Card from '../Card.jsx'

const openai = new OpenAI({ apiKey:import.meta.env.VITE_MY_API_KEY, dangerouslyAllowBrowser: true });

const InfoGraphic = () => {
  const [infoImage, setInfoImage] = useState('');
  const inputRef = useRef(null);

  async function imageMaker() {
    if (inputRef.current.value === '') {
      return 0;
    }
    // 1792
    try {
      const response = await openai.images.generate({
        prompt: `Create a professional infographic with charts and pictures on a white background with this text: ${inputRef.current.value}`,
        model: 'dall-e-2',
        n: 1,
        size: '1024x1024'
      });


      
      const image_url = response.data[0].url;
      setInfoImage(image_url);
      console.log(inputRef.current.value);
      console.log(infoImage)
    } catch (e) {
      console.error('Error generating image: ', e);
    }
  }

  return (
    <div className='info-space'>
      <Card
        card='info-card'
        title="Edit the text"
        text="You can edit the text in the text button before generating"
      />

      <div className='infographic-maker'>
        <div className='header'>
          InfoGraphic Maker
        </div>

        <div className='loading'>
          <div className='image'>
            <img src={infoImage === '' ? image : infoImage} alt='infographic' />
          </div>
        </div>

        <div className="prompt-box">
          <input
            type='text' 
            ref={inputRef}
            id='prompt-box'
            className="prompt-input"
            placeholder='text from the summary result'
          />
          <button
            className="g-button"
            onClick={() => imageMaker()}>
            Generate
          </button>
        </div>
      </div>

      <Card
        card='info-card'
        title="Edit the infographic"
        text="Edit the infographic by right clicking on the image and selecting the 'save image as...'option. Then in the editor, click browse and select the image." 
      />
    </div>
  );
}

export default InfoGraphic;