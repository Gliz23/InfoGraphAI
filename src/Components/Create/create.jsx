import React, { useState, useEffect} from 'react'
import './create.css'
import CardToTextarea from '../CardToTextarea/CardToTextarea.jsx';
import { useNavigate } from 'react-router-dom'
import { setSentence } from '../StoreSentences.jsx';


let apiKey = import.meta.env.VITE_MY_API_KEY
 

const Create = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

 
    const sentenceFunction = (data) => {
      if (data) {
        return data.split('.');
      }
      return [];  
    };
    
  
    const sentences = sentenceFunction(data);


    const handlePerfect = () => {
      setSentence(sentences)
      navigate('/PerfectIG')
    }
    

  const handleSubmit = (e) => {
    setSubmitted(true);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`   
      },
      body: JSON.stringify({
        prompt: `Create an infographic ordered text with this text ${value} and the following instructions.
        1. It must be 8 sentences with a fullstop only at the end of the sentence.
        2. The 8 points must include a title.
        3. The point must be a summary and key information in the text
        4. The points should not be numbered` ,
        temperature: 0.1,
        max_tokens: 500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.5,
        stop: ['"""'],
      }),
    };

    fetch("https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions", requestOptions)
      .then((response) => response.json())
      .then((dt) => {
        const text = dt.choices[0].text;
        setSubmitted(false);
        setData(text)
        localStorage.setItem('summary', JSON.stringify(text))
        fetchLocalStorage()
      })
      .catch((error) => {
        setSubmitted(false);
        console.log('Error:', error);
    });
  }

  const fetchLocalStorage = () => {
    const result = localStorage.getItem('summary')
    setData(JSON.parse(result))
  }

  useEffect(() => {
    fetchLocalStorage()
  }, [submitted])

  // useEffect(() => {
  //   localStorage.clear()
  // }, [])


  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleDelete = () => {
    setData(null)
  }


  return (
    <div className='create'>
        <div className = 'create-heading'>
              <p>Summary for</p>
              <h2>Info<span>Graphics</span></h2>
          </div>
        <div className="intro">
          <div className="first-guide">
            <div className="info1"> 
              <p>Generate a summary text which will be used<br/>
                 to create the infographic. Copy, edit or <br/>
                 delete summary by clicking on the respective<br/>
                  icons</p>
            </div>
            <div className='info-option'>
              <button className='perf-button' onClick={handlePerfect}>Generate</button>
            </div>
          </div>
          {data?.length > 0 &&
          <div className="summary">
            <div className="actual-summary">
              <CardToTextarea text={data} onDelete={handleDelete}/>
            </div> 
          </div>
          }
        </div>
        <div 
        className="text-area">
          <textarea 
            placeholder='Paste your text here...'
            onChange={handleInputChange}
            rows={1}
            id='summary-text-box'
            className='text-box'
          ></textarea>
          { value?.length > 0 &&
          (!submitted ? (
          <button 
            className='submit-button'
            onClick={handleSubmit}
            >Submit
          </button>):(
            value?.length > 0 && 
            submitted  &&
              <p className='wait-message'>Kindly wait for your summary</p>  
          ))}
          
        </div>
      </div>
  )
}

export default Create
