
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted!\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'left' }}>
      <h2>Contact Us</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label>Name:</label><br />
        <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Email:</label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Message:</label><br />
        <textarea name="message" value={formData.message} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
