import React, { useState} from 'react'
import './create.css'
import CardToTextarea from '../CardToTextarea/CardToTextarea.jsx';


let apiKey = import.meta.env.VITE_MY_API_KEY
 

const Create = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState(null);
    const [submitted, setSubmitted] = useState(false);


  

  const handleSubmit = (e) => {
    e.preventDefault();``
    setSubmitted(true);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`   
      },
      body: JSON.stringify({
        prompt: value + `\\n\\nTl;dr`,
        temperature: 0.1,
        max_tokens: 25,
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
        
      })
      .catch((error) => {
        setSubmitted(false);
        console.log('Error:', error);
    });
  }


  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleDelete = () => {
    setData(null)
  }


  return (
    <div className='create'>
        <div className="create-text">
            <h3 className='text'>
                Your Text!
            </h3>
            <div className="input-text">
                <textarea 
                placeholder='Paste your text here...'
                onChange={handleInputChange}
                rows={6}
                id='summary-text-box'
                // value={value}
                className='text-box'
                ></textarea>
            </div>
            { value?.length > 0 && 
            (submitted ? (
              <p>Kindly wait for your summary</p>  
            ):(
            <button 
            className='s-button'
            onClick={handleSubmit}
            >Submit</button>
            ))}
        </div>

        <div className="summary">
            {data?.length > 0 &&
            <> 
            <h2 className='text'>Summary</h2>
            <CardToTextarea data={data} onDelete={handleDelete}/>
            </>
            }
        </div>
      
    </div>
  )
}

export default Create
