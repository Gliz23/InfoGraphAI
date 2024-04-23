import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="col">
        <h2>Reach out to us</h2>
        <p> You can react out to us 
           by our contant info below
        </p>
        <ul>
          <li>infographai@gmail.com</li>
          <li>+233 544991601</li>
          <li>infographai@gmail.com</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>
            Your name
          </label>
          <input type='text' name='name' placeholder='Enter your name' required/>
          <label>
            Phone Number
          </label>
          <input type='tel' name='phone'placeholder='Enter your phone number' required/>
          <label>
            Drop your comments
          </label>
          <textarea name='comments' rows='7' placeholder='Enter comments' required>
          </textarea>
          <button type='submit' className='btn dark-b'>
            Send
          </button>
        </form>

      </div>
    </div>
    
  )
}

export default Contact
