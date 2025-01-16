import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to subscribe the user to your newsletter
    console.log('Email submitted:', email); 
    setSubmitted(true);
    setEmail(''); 
  };

  return (
    <div className="newsletter-container"> 
      <div className="newsletter">
        {submitted ? ( 
          <div className="success-message">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="success-icon">
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </svg>
            <h2>Thank you for subscribing!</h2>
            <p>You'll receive updates and exclusive offers soon.</p>
          </div>
        ) : ( 
          <>
            <h1>Get Exclusive Offers</h1>
            <p>Subscribe to our newsletter and stay updated.</p>
            <form onSubmit={handleSubmit} className="newsletter-form"> 
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <button type="submit">Subscribe</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;