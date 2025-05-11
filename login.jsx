import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8082/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });

      const result = await response.text();

      if (result === 'Login successful') {
        alert('Login successful!');
        // Optionally: redirect user or store token in localStorage
      } else {
        alert('Login failed: ' + result);
      }
    } catch (error) {
      alert('Server error. Check backend connection.');
      console.error(error);
    }
  };

  return (
    <main className="login-container">
      <div className="login-image">
        <img src="/pexels-pixabay-256431 (1).jpg" alt="Library" />
      </div>
      <div className="login-form">
        <h2>LogIn</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">LogIn</button>
        </form>
        <p className="signup">Don't have an account? <a href="/signup">SignUp</a></p>
      </div>
    </main>
  );
};

export default Login;
