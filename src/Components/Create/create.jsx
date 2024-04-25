import React, { useState} from 'react'
import './create.css'
import CardToTextarea from '../CardToTextarea/CardToTextarea.jsx';
import Card from '../Card.jsx'


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
        // prompt: value + `\\n\\nTl;dr`,
        prompt: `Create an infographic ordered text with a title and 7 bulleted points on new lines with the following content: ${value}.`,
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
          <Card
            card='create-card'
            title="Copy your summary"
            text="This can be done by simply clicking the copy button"
          />
          }

          {data?.length > 0 &&
          <div className="actual-summary">
            <h2 className='text'>Summary</h2>
            <CardToTextarea data={data} onDelete={handleDelete}/>
          </div> 
          }

          {data?.length > 0 &&
          <Card
            card='create-card'
            title="Generate your infograph"
            text="Paste your copied text 'Ctrl V' in the text box below and generate your infographic"
          />
          }
        </div>

      </div>
      
    
  )
}

export default Create
