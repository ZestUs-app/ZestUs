import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ZestProfile from './components/ZestProfile/ZestProfile';
import CreateProfile from './components/ZestProfile/CreateProfile';
import ZestChat from './components/ZestChat/ZestChat';
// Add other components as you build them

function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#ff6f61' }}>🌟 Welcome to ZestUs</h1>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        ZestUs is a youth-powered platform designed to spark creativity, purpose, and collaboration.
        We connect teens, students, companies, and institutions to co-create a better future — through stories, challenges, learning, and real-world impact.
      </p>

      <h2 style={{ marginTop: '3rem', color: '#333' }}>🚀 Explore Features</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li><Link to="/profile">🟢 ZestProfile</Link> – Create your personal or organizational profile.</li>
        <li><Link to="/create-profile">🟢 Create Profile</Link> – Start building your Zest identity.</li>
        <li><Link to="/chat">🟢 ZestChat</Link> – Connect through fun chat balloons and surprises.</li>
        {/* Add more links as features are built */}
      </ul>

      <h2 style={{ marginTop: '3rem', color: '#333' }}>🌍 Who is ZestUs for?</h2>
      <ul>
        <li>Teens & Students – Discover your path, express yourself, and connect with peers.</li>
        <li>Companies – Engage with future talent and build purpose-driven visibility.</li>
        <li>Institutions – Partner with youth to drive sustainability, innovation, and social good.</li>
      </ul>

      <h2 style={{ marginTop: '3rem', color: '#333' }}>✨ Vision</h2>
      <p>
        To create a world where youth are empowered, companies are purpose-driven, and institutions collaborate for a better planet.
      </p>

      <h2 style={{ marginTop: '3rem', color: '#333' }}>📫 Contact</h2>
      <p>
        For questions, feedback, or partnership inquiries, contact ZestUs Leader Željka Potoku at mailto:zeljka.potoku@gmail.comzeljka.potoku@gmail.com</a>.
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#ff6f61', justifyContent: 'center' }}>
        <Link to="/" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>Home</Link>
        <Link to="/profile" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>Profile</Link>
        <Link to="/create-profile" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>Create Profile</Link>
        <Link to="/chat" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>ZestChat</Link>
        {/* Add more links as needed */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ZestProfile />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/chat" element={<ZestChat />} />
        {/* Add more routes as features are built */}
      </Routes>
    </>
  );
}

export default App;
