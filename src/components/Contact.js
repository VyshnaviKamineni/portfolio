import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Input fields and submit button here */}
          <input
          type="text"
          className="contact-input"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          />
          <input
          type="email"
          className="contact-input"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          />
          <textarea
          className="contact-textarea"
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          ></textarea>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
   </div>
  );
};

export default Contact;
