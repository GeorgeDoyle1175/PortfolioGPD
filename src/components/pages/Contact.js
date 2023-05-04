import React, { useState } from 'react';
import '../style/home.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate fields here
    if (!name || !email || !message) {
      alert('All fields are required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      alert('Form submitted successfully');
      // reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setEmailError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError('');
    }
  };

  return (
    <div className="contact">
      <div className="contact__text-container">
        <h1 className="contact__heading">Contact Page</h1>
        <form onSubmit={handleSubmit} className="contact__form">
          <label className="contact__form-label">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="contact__form-input"
            />
          </label>
          <label className="contact__form-label">
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="contact__form-input"
            />
            {emailError && <span className="contact__form-error">{emailError}</span>}
          </label>
          <label className="contact__form-label">
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="contact__form-textarea"
            />
          </label>
          <button type="submit" className="contact__form-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
