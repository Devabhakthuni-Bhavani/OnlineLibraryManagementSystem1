// src/pages/Profile.jsx
import React, { useState } from 'react';
import './profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Sri Vardhini',
    email: 'sri@example.com',
    phone: '9876543210',
    address: '123 Main Street'
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.id]: e.target.value });
  };

  const toggleEdit = () => setIsEditing(true);
  const cancelEdit = () => setIsEditing(false);
  const saveChanges = () => {
    setIsEditing(false);
    alert('Changes saved (mock action).');
  };

  return (
    <div className="page-wrapper">
      <header>
        <div className="navbar">
          <div className="logo">Library</div>
          <nav>
            <a href="/">Home</a>
            <a href="/books">Books</a>
            <a href="#">About</a>
            <a href="#">Support</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="profile-container">
          <div className="profile-header">
            <h2>Profile Details</h2>
            {!isEditing && <span className="edit-btn" onClick={toggleEdit}><i className="fas fa-edit"></i> Edit</span>}
          </div>
          {['name', 'email', 'phone', 'address'].map(field => (
            <div className="profile-field" key={field}>
              <label htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1).replace('phone', 'Phone Number')}
                {field === 'address' && <span className="optional"> (optional)</span>}:
              </label>
              <input
                type="text"
                id={field}
                value={profileData[field]}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          ))}
          {isEditing && (
            <div className="action-buttons">
              <button className="save-btn" onClick={saveChanges}>Save Changes</button>
              <button className="cancel-btn" onClick={cancelEdit}>Cancel</button>
            </div>
          )}
        </div>
      </main>

      <footer>
        <p>&copy; 2025 Library. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
