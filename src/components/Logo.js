import React from 'react';
import '../style/Logo.css';

const logoImage = require('../assets/Logo.png');

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="doda" className="logo-image" />
      <span className="logo-text">Cherry</span>
      <span className="logo-dot">.</span>
    </div>
  );
};

export default Logo;
