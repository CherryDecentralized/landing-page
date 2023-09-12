import React from 'react';
import '../style/Headline.css';

const backImage = require('../assets/Header/Rectangle 121-1.png')
function Headline() {
  return (
    <>
      <div className="headline">
        <div className="headline-text">
          <span>World’s first blockchain </span>
          <span className="networks">cause network-</span>
          <span></span>
        </div>
        <div>
          <img
            loading="lazy"
            src={backImage}
            className="headline-image"
          />
        </div>
        <div className="headline-caption">
          <span style={{ color: 'rgba(228,71,68,1)' }}>Emp</span>
          <span>owering Communities to Transform Urban Micro-Climates</span>
        </div>
      </div>
    </>
  );
}

export default Headline;
