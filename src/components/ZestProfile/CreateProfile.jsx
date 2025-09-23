import React, { useState } from 'react';

const defaultAvatar = "https://randomuser.me/api/portraits/lego/1.jpg";

function CreateProfile() {
  const [form, setForm] = useState({
    name: '',
    userType: '',
    username: '',
    location: '',
    age: '',
    bio: '',
    interests: '',
    avatar: defaultAvatar,
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('zestus_profile', JSON.stringify(form));
    // ✅ FIXED: Use HashRouter-compatible redirect
    window.location.href = '/ZestUs/#/profile';
  };

  return (
    <div className="profile-container">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input name="userType" placeholder="User Type (e.g. Student, Company)" value={form.userType} onChange={handleChange} required />
        <input name="username" placeholder="Username (e.g. @yourname)" value={form.username} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
        <textarea name="bio" placeholder="Short Bio" value={form.bio} onChange={handleChange} required />
        <input name="interests" placeholder="Interests (comma separated)" value={form.interests} onChange={handleChange} required />
        <input name="avatar" placeholder="Profile Image URL" value={form.avatar} onChange={handleChange} />
        <button type="submit" className="edit-btn">Save Profile</button>
      </form>
    </div>
  );
}

export default CreateProfile;
