import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ZestProfile from './components/ZestProfile/ZestProfile';
import CreateProfile from './components/ZestProfile/CreateProfile';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: 60 }}>
      <h1>Welcome to ZestUs!</h1>
      <p>Connect, create, and share your profile.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{
        display: 'flex', gap: 24, padding: 18, background: '#7fd7c4', justifyContent: 'center'
      }}>
        <Link to="/" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>Home</Link>
        <Link to="/profile" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>Profile</Link>
        <Link to="/create-profile" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>Create Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ZestProfile />} />
        <Route path="/create-profile" element={<CreateProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
