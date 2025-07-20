import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    const serviceId ="service_kbz4kok";
    const templateId ="template_rt0ddbc";
    const publicKey="fOQ9qmES0RfsFil4g";

    const templateParams = {
      from_name:name,
      from_email:email,
      to_name:"hrishikesh",
      message:message,
    };
    emailjs.send(serviceId, templateId, templateParams,publicKey).then(
      (response) => {
        alert("message send successfully!");
        console.log('SUCCESS!', response);
        setName('');
        setEmail('');
        setMessage('');
      }).catch((err)=>{
        console.log('FAILED...', err);
      })
  }
  return (
    <div className="contact-container mt-4">
      <div className="contact-box">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" value={name} onChange={(e)=>setName(e.target.value)} />
            <label>Email</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label>Message</label>
            <textarea placeholder="Enter your message" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <button type="submit">Send Mail</button>
          </form>
        </div>
        <div className="contact-right">
          <div>
            <h4>Contact</h4>
            <p>hrishigaonkar2@gmail.com</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Contact
