import React from 'react';
import './style/home.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active text-light' : 'nav-link text-light'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active text-light' : 'nav-link text-light'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          className={currentPage === 'Blog' ? 'nav-link active text-light' : 'nav-link text-light'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active text-light' : 'nav-link text-light'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
