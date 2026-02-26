import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header(){
  const cartQuantity = useSelector(selectCartTotalQuantity);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>ShoppyGlobe</h1>
        </Link>
        
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;