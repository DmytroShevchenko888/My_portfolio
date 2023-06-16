import '../CSS/Email_form.scss'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button'

function Email_form() {

  const form = useRef("");

  const [success,setSuccess] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [error,setError] = useState(false);

  const sendEmail = (e) => {
    setShowLoader(true);
    e.preventDefault();
    
    emailjs.sendForm('service_7a4062p', 'template_7j0up7i', form.current, 'LqSThHutIp3c0XYqL')
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
          setShowLoader(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false)
          },5000)
          
      }, (error) => {
          console.log(error.text);
          setShowLoader(false);
          setError(true)
          setTimeout(() => {
            setError(false)
          },5000)
      });
      e.target.reset();
  };
  

  return (
    <div>
       <form ref={form} onSubmit={sendEmail}>
        <div className="inputBox">
          <input type="text" name="user_name" placeholder='What is your name ?' required />
        </div>
        <div className="inputBox">
          <input type="email" name="user_email" placeholder='What is your E-mail ?' required />
        </div>
        <div className="inputBox">
          <textarea name="message" placeholder='What is your message ?' required />
        </div>
        <Button
          success={success}
          error={error}
          showLoader={showLoader}
        />
    </form>
    </div>
  )
}

export default Email_form