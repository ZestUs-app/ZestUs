import React from 'react';
import Contact from './components/Contact/Contact';
import VisitorCounter from './components/VisitorCounter/VisitorCounter';

export default function App() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to ZestUs</h1>
      <p>This is a working React + Vite app deployed on Netlify.</p>

      {/* Visitor Counter */}
      <VisitorCounter />

      {/* Contact Form */}
      <Contact />
    </div>
  );
}
