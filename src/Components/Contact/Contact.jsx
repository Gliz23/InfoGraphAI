import React from 'react'
import './Contact.css'

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
    <div className="contact">
      <div className="col">
        <h2>Reach out to us</h2>
        <p> You can contact us via
        </p>
        <ul>
          <li>infographaidev@gmail.com</li>
          <li>+233 544991601</li>
          <li>infographai@gmail.com</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
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
          <button type='submit' className='s-button dark-b'>
            Send
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    
  )
}

export default Contact
