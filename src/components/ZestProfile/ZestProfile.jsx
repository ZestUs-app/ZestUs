import React from 'react';
import './ZestProfile.css';

const ZestProfile = () => (
  <div className="profile-container">
    <div className="profile-header">
      <img
        src="https://randomuser.me/api/portraits/lego/1.jpg"
        alt="Profile"
        className="profile-avatar"
        tabIndex="0"
        style={{ cursor: 'pointer' }}
        Lana K. <span className="user-type">Student</span>
        </h2>
        <button
          className="edit-btn"
          onClick={() => alert('Edit profile coming soon!')}
        >
          Edit
        </button>
        <div className="profile-meta">
          @lanazest | Zagreb, Croatia | Age: 17
        </div>
      </div>
    </div>
    <div className="section">
      <h3>Bio</h3>
      <p>
        Aspiring designer, music lover, and eco-activist. Here to make a difference!
      </p>
    </div>
    <div className="section">
      <h3>Interests</h3>
      <div className="tags">
        <span className="tag">#music</span>
        <span className="tag">#design</span>
        <span className="tag">#sustainability</span>
      </div>
    </div>
  </div>
);

