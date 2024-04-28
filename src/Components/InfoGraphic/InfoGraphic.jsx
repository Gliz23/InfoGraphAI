import React, { useState} from 'react';
import './InfoGraphic.css';
import OpenAI from 'openai';
import { getAiData } from '../storeData.jsx';
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import '../../ImageEditor.css'

const openai = new OpenAI({ apiKey:import.meta.env.VITE_MY_API_KEY, dangerouslyAllowBrowser: true });

const InfoGraphic = () => {
  const [infoImage, setInfoImage] = useState('');
  const [generated, setGenerated] = useState(false);
  const [imageEditing, setImageEditing] = useState(false);
  const aiData = getAiData()

  const imageEditor = () => {
    setImageEditing(true)
  }

  async function imageMaker() {
    setGenerated(true)
    try {
      const response = await openai.images.generate({
        prompt: `Create a professional infographic with charts and pictures on a white background with this text: ${aiData}`,
        model: 'dall-e-2',
        n: 1,
        size: '1024x1024'
      });


      
      const image_url = response.data[0].url;
      setInfoImage(image_url);
      setGenerated(false)
    } catch (e) {
      console.error('Error generating image: ', e);
    }
  }
  
  return (

  <div>
    <div className='info-space'>
      <div className='infographic-maker'>
        <div className='header'>
          AI InfoGraphic
        </div>
        {aiData?.length > 0 &&         
          <div className='loading'>
            <div className='image'>
              <img src={infoImage} alt='infographic' />
            </div>
          </div>
        }
        {aiData?.length > 0 &&
          (generated ? (
              <p className='wait-message'>Kindly wait for your infographic</p>  
            ):(
          <div>
            <button
              className="g-button"
              onClick={() => imageMaker()}>
              Generate
            </button>
            <button
              className="g-button"
              onClick={() => imageEditor()}>
              Edit
            </button>
          </div>
        ))
        }
      </div>
    </div>
      {imageEditing && 
        <div className="image-editor-container">
          <ImageEditorComponent/>
        </div>
      }
  </div>
    
  );
}

export default InfoGraphic;