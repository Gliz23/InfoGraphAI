import React, { useState} from 'react'
import './CardToTextarea.css'

const CardToTextarea = (props) => {
    const [ editing, setEditing ] = useState(false);
    const [ text, setText ] = useState(props.data);
    const [isCopy, setIsCopy] = useState(false);

    const handleToggleEdit = () => {
        setEditing(!editing);
    };

    const handleInputChange = (event) => {
        setText(event.target.value);
    };
     
    const handleSaveClick = () => {
        setEditing(false);
    }

    async function copyTextToClipboard(text) {
        if ("clipboard" in navigator) {
            return await navigator.clipboard.writeText(text);
        }
    }

    const handleCopy = () => {
        copyTextToClipboard(text)
        .then(()=>{
            setIsCopy(true)

            setTimeout(() => {
                setIsCopy(false)
            }, 1500); 
        }).catch(err => console.log(err))
    }
     
    const handleDelete = () => {
        props.onDelete();
      };

  return (
    <div className= 'card-container'>
            { editing ? (
                <div className='editing'>
                    
                        <textarea 
                        value={text}
                        className='editing-text-box'
                        onChange={handleInputChange}
                        rows={26}
                        cols={77} />
                                  
                        <button 
                            className='button'
                            onClick={handleSaveClick}>
                                Save
                        </button>
                    
                </div> ) : 
                (
                <div className="summary-items">    
                    <div className="summary-card">
                        <p className='break-text'>{props.text}</p>                
                    </div>  

                    <span className='buttons'>
                        <button
                        className='ai-button'
                        onClick={handleCopy}
                        >Copy</button>
                    
                        <button 
                        className= 'ai-button'
                        onClick={handleToggleEdit}
                        >Edit</button>

                        <button
                        className='ai-button'
                        onClick={handleDelete}
                        >Delete</button>
                    </span>  
                </div>
                )
            }
        </div>
  )
}

export default CardToTextarea
