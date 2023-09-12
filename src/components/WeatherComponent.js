import React, { useState, useEffect } from "react";
import '../style/WeatherComponent.css'; // Import the CSS

const first = require('../assets/Weather Widget After.png');
const last = require('../assets/Weather Widget.png');

const imageUrls = [
  first,
  last,
];

function WeatherComponent() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageUrls.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <img
      loading="lazy"
      src={imageUrls[currentImage]}
      className="weather-component"
      alt="Weather"
    />
  );
}

export default WeatherComponent;
