import React from 'react'
import './Contact.css'
import contact_mail from '../../assets/contact-mail.png'
import email_icon from '../../assets/contact-mail.png'
import contact_icon from '../../assets/phone.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${import.meta.env.VITE_MY_ACCESS_KEY}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id='contact'>
      <div className="col">
        <h1> Send us a feedback <img src={contact_mail} alt="" className="" />
        </h1>
        <ul>
          <li><img src={email_icon} alt="" />infographaidev@gmail.com</li>
          <li><img src={contact_icon} alt="" />+233 544991601</li> 
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <div className="enter">
            <div className="entries">
              <label>
                Your name
              </label>
              <input type='text' name='name' placeholder='Enter your name' required/>
            </div>
            <div className="entries">
              <label>
                Phone Number
              </label>
              <input type='tel' name='phone'placeholder='Enter your phone number' required/>
            </div>
          </div>
          <label>
            Drop your comments
          </label>
          <textarea name='comments' rows='7' placeholder='Enter comments' required>
          </textarea>
          <button type='submit' className='fg-button dark-b'>
            Send
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    
  )
}

export default Contact
