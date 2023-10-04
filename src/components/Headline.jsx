import React from 'react';
import LogoText from './LogoText';
import '../style/Headline.css';

function Headline({ opacity }) {
  return (
    <div className="react-floater-animated">
      <div className="headline-container">
        <div className="line-container-first" style={{ opacity: opacity }}>
          <div className="text-line-header" style={{ opacity: opacity }}>
            <span className="logo-text-head" style={{ opacity: opacity }}>Welcome to</span>
            <div className="logo-text-icon" style={{ opacity: opacity }}><LogoText/></div>
          </div>
        </div>
        <div className="line-container-second" style={{ opacity: opacity }}>
          <div className="subheadline" style={{ opacity: opacity }}>
            <div className="subheadline-inline-text" style={{ opacity: opacity }}>
              <span className="bold" style={{ opacity: opacity }}>Urban </span>
              <span className="regular" style={{ opacity: opacity }}>Networks </span>
              <span className="middle" style={{ opacity: opacity }}> , </span>
              <span className="bold" style={{ opacity: opacity }}>Forest </span>
              <span className="regular" style={{ opacity: opacity }}>Inspired </span>
            </div>
          </div>
        </div>
        <div className="line-container-third" style={{ opacity: opacity }}>
          <div className="text-line-first" style={{ opacity: opacity }}>
            We are <span className="bold">evolving</span> urban spaces into interconnected,
          </div>
        </div>
        <div className="line-container-fourth" style={{ opacity: opacity }}>
          <div className="text-line-second" style={{ opacity: opacity }}>
            <span className="bold">Cooperative</span> urban networks, inspired by the resilience and
          </div>
        </div>
        <div className="line-container-fifth" style={{ opacity: opacity }}>
          <div className="text-line-second" style={{ opacity: opacity }}>
            <span className="bold">Sustainability</span> of forest ecosystems.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headline;
