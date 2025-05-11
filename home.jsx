// pages/Home.jsx
import React from 'react';
import './styles.css';

const Home = () => (
  <>
    <header>
      <div className="logo">Library</div>
      <nav>
        <ul className="sidebar">
          <li onClick={() => document.querySelector('.sidebar').style.display = 'none'}><a href="#">×</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/books">Books</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">SignUp</a></li>
        </ul>
        <ul>
          <li className="hideOnMobile"><a href="/">Home</a></li>
          <li className="hideOnMobile"><a href="/books">Books</a></li>
          <li className="hideOnMobile"><a href="#about">About</a></li>
          <li className="hideOnMobile"><a href="#support">Support</a></li>
          <li className="hideOnMobile"><a href="/login">Login</a></li>
          <li className="hideOnMobile"><a href="/signup">SignUp</a></li>
          <li className="menu-button" onClick={() => document.querySelector('.sidebar').style.display = 'flex'}><a href="#">≡</a></li>
        </ul>
      </nav>
    </header>

    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Library</h1>
        <p>Your one stop solution for managing books, users, and transactions effortlessly.</p>
        <a href="/books" className="btn">Step Into the Library</a>
      </div>
    </section>

    <section className="about-section" id="about">
      <div className="about-box">
        <h2>Welcome to Library Management System</h2>
        <p>A modern and efficient solution designed to streamline the way libraries manage books, users, and transactions.</p>
        <h3>Our Mission</h3>
        <p>To make library management simple, efficient, and user-friendly.</p>
        <h3>What We Offer</h3>
        <p>Book search, reservations, user management, and analytics for a seamless library experience.</p>
      </div>
    </section>

    <section className="support-section" id="support">
      <div className="support-content">
        <h2>Support</h2>
        <p>If you have any issues or need assistance, please reach out to us.</p>
        <form id="support-form">
          <label htmlFor="user-email">Your Email</label>
          <input type="email" id="user-email" name="user-email" placeholder="you@example.com" required />
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Describe your issue or question..." required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>

    <footer>
      <p>&copy; 2025 Library. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  </>
);

export default Home;
