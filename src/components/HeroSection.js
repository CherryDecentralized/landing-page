import React from "react";
import Header from './Header'; // Import Header component
import Headline from './Headline'; // Import Headline component
import WeatherComponent from './WeatherComponent'; // Import WeatherComponent
import SupportUs from './SupportUs'; // Import SupportUs component
import '../style/HeroSection.css'; // Import the CSS


const HeroSection = () => {
  return (
    <section className="hero-section">
      <Header />
      <Headline />
      <WeatherComponent />
      {/* <SupportUs /> */}
    </section>
  );
};

export default HeroSection;