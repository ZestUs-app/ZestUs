import React from 'react';

export default function Contact() {
  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'left' }}>
      <h2>Send a Message to ZestUs</h2>
      <form action="mailto:zeljka.potoku@gmail.com div style={{ marginBottom: '1rem' }}>
          <label>Name:</label><br />
          <input type="text" name="name" required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label><br />
          <input type="email" name="email" required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Message:</label><br />
          <textarea name="message" required style={{ width: '100%' }} />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

