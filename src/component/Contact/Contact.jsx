import React from 'react'
import { useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import SuccessMessage from '../SucessMsg/SuccessMessage';
const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
    const [msg, setMsg] = useState("");


  const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();
  
    

  const temp_id= "template_3a55i59";
  const service_id= "service_zp8u162";
  const public_key= "s_wfM8nA9PTQfeK1L";

  console.log(form);
    emailjs
      .sendForm(service_id, temp_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          setMsg("Form submitted successfully!")
          setShowSuccess(true);
        },
        (error) => {
          setMsg(error.tex);
          console.log('FAILED...', error.text);
        },
      );
  };

  return ( 
    <div className="contact-container">
      <div className="contact-left">
        <h2><span className="underline">Contact me</span></h2>
        <p>Raipur, Chhattisgarh</p>
        <p>anandvaibhav208@gmail.com</p>
        <p>+91 7024355497</p>
      </div>

      <div className="contact-right">
        <h2><span className="underline">Send a message</span></h2>
        <form   ref={form}  onSubmit={sendEmail} className="message-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            {/* <input type="tel" placeholder="Mobile" /> */}
          <textarea placeholder="Write your message here..." rows="5" required></textarea>
          </div>
          <button type="submit">Send message</button>
        </form>
        {showSuccess && (
        <SuccessMessage
          message = {setMsg}
          onClose={() => setShowSuccess(false)} />
      )}
      </div>
    </div>
  )
}

export default Contact
