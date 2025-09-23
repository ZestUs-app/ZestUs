import React from 'react';
import './ZestProfile.css';

const defaultProfile = {
  name: 'Lana K.',
  userType: 'Student',
  username: '@lanazest',
  location: 'Zagreb, Croatia',
  age: '17',
  bio: 'Aspiring designer, music lover, and eco-activist. Here to make a difference!',
  interests: '#music, #design, #sustainability',
  avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
};

function ZestProfile() {
  const profile = JSON.parse(localStorage.getItem('zestus_profile')) || defaultProfile;
  const interests = profile.interests.split(',').map(tag => tag.trim());

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={profile.avatar}
          alt="Profile"
          className="profile-avatar"
        />
        <div className="profile-details">
          <h2>
            {profile.name} <span className="user-type">{profile.userType}</span>
          </h2>
          <a href="/ZestUs/#/createdit</a>
          <div className="profile-meta">
            {profile.username} | {profile.location} | Age: {profile.age}
          </div>
        </div>
      </div>
      <div className="section">
        <h3>Bio</h3>
        <p>{profile.bio}</p>
      </div>
      <div className="section">
        <h3>Interests</h3>
        <div className="tags">
          {interests.map((tag, i) => (
            <span className="tag" key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ZestProfile;

