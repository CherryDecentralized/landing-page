import React from 'react';
import '../style/Navbar.css';

const NavItem = ({ text, destinationId, url }) => {
  const handleClick = () => {
    if (destinationId) {
      scrollToSection(destinationId);
    }
  };

  return (
    <div className="navbar-item" onClick={handleClick}>
      {url ? <a href={url}>{text}</a> : text}
    </div>
  );
};

const scrollToSection = (destinationId) => {
  const section = document.getElementById(destinationId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <NavItem text="HOME" destinationId="homeSection" />
      <NavItem text="CAUSE NETWORK" url="/cause-network" />
      <NavItem text="MARKETPLACE" destinationId="marketplaceSection" />
    </nav>
  );
};

export default Navbar;
