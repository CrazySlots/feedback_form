import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    feedback:""
  });
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setFormData({
      ...formData,
      [name]:value
    });
  };
  const handleSubmit= (event)=>{
    event.preventDefault();
    const confirmationMessage=`
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feeback}
    `;
    const isConfirmed=window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    if(isConfirmed){
      console.log("Submit feedback: ",formData)
      setFormData({
        name:"",
        email:"",
        feedback:""
      });
      alert("Thanks for the feedback");
    }
  };
  

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" name='name' placeholder='Your name' value={formData.name} onChange={handleChange}/>     
        <input type="email" name='email' placeholder='Your email' value={formData.email} onChange={handleChange}/>
        <textarea name="feedback" placeholder='Your feedback' value={formData.feedback} onChange={handleChange}></textarea>
        <button type='submit'>Submit feedback</button>
        
      </form>
    </>
  );
};

export default FeedbackForm;
