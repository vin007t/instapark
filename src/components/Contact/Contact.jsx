import React, { useState } from 'react';
import './ContactUs.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have a question or need support? We’re here to help!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> help@instapark.com</p>
        <p><strong>Phone:</strong> ‪+1 (800) 555-1234‬</p>
        <p><strong>Hours:</strong> Mon–Fri: 9am–6pm | Sat–Sun: 10am–4pm EST</p>
        <p><strong>Address:</strong> 123 Commerce Blvd, New York, NY 10001</p>
      </div>

      {submitted ? (
        <p className="thank-you">Thank you! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message*"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
          />
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;