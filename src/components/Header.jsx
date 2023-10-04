import React, { useState, useEffect } from 'react';
import '../style/Header.css';
import Logo from './Logo'; // Import your existing Logo component
import Navbar from './Navbar'; // Import your existing Navbar component

const GoFundMeButton = () => (
  <button className="gofundme-button">
    GoFundMe
  </button>
);

const Header = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(true);

useEffect(() => {
    const handleScroll = () => {
        // Assuming each frame is 100vh in height
        if (window.scrollY > window.innerHeight * 2) {
            setIsNavbarFixed(false);
        } else {
            setIsNavbarFixed(true);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header-container">
      <div className={isNavbarFixed ? "navbar fixed" : "navbar"}>
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
    </div>
  );
};

export default Header;
