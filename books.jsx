// pages/Books.jsx
import React from 'react';
import book1 from './6.6.jpg';
import book2 from './7.2.jpg';
import book3 from './1.4.jpg';
import book4 from './2.2.jpg';
import './books.css';
import { Link } from 'react-router-dom';

const Books = () => (
  <div className="page-container">
    <header>
      <nav className="navbar">
        <div className="logo">Library</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Link to="/books">Categories</Link>
            <Link to="/profile" className="user-icon">
              <i className="fas fa-user" style={{ color: 'white', fontSize: '16px' }}></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <div className="page-search">
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input type="text" placeholder="Search Books..." className="search-box" />
      </div>
    </div>

    <main>
      <section className="book-section">
        <h4>Recommended Books</h4>
        <div className="book-grid">
          <a href="book-details.html?id=1">
            <div className="book-item">
              <img src={book1} alt="Educated" />
              <p>Educated</p>
            </div>
          </a>
          <a href="book-details.html?id=2">
            <div className="book-item">
              <img src={book2} alt="Rich DAD Poor DAD" />
              <p>Rich DAD Poor DAD</p>
            </div>
          </a>
          <a href="book-details.html?id=3">
            <div className="book-item">
              <img src={book3} alt="The Great Gatsby" />
              <p>The Great Gatsby</p>
            </div>
          </a>
          <a href="book-details.html?id=4">
            <div className="book-item">
              <img src={book4} alt="The Silent Patient" />
              <p>The Silent Patient</p>
            </div>
          </a>
        </div>
      </section>
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

export default Books;
