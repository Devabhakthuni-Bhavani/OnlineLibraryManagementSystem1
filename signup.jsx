import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8082/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Signup successful!');
      } else {
        const error = await response.text();
        alert('Signup failed: ' + error);
      }
    } catch (err) {
      alert('Error connecting to server.');
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src="/pexels-pixabay-256431 (1).jpg" alt="Library" />
      </div>

      <div className="signup-box">
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required onChange={handleChange} />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required onChange={handleChange} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required onChange={handleChange} />

          <label htmlFor="role">Signup As</label>
          <select id="role" name="role" required onChange={handleChange}>
            <option value="">-- Select Role --</option>
            <option value="member">User</option>
            <option value="librarian">Admin</option>
          </select>

          <button type="submit">Sign Up</button>
          <p className="login-link">
            Already have an account? <a href="/login">LogIn</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
