import React from 'react';
import '../style/Header.css';
import Logo from './Logo'; // Import your existing Logo component
import Navbar from './Navbar'; // Import your existing Navbar component

const GoFundMeButton = () => (
  <button className="gofundme-button">
    GoFundMe
  </button>
);

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-navbar">
        <Navbar />
      </div>
      <div className="header-gofundme">
        <GoFundMeButton />
      </div>
    </div>
  );
};

export default Header;
