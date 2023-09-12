import React from "react";
import Logo from "../components/Logo"
import '../style/ComingSoon.css'

const video = require('../assets/Cherry Video.mp4');
const ComingSoon = () => {
    return (
      <section className="container">
        <div className="video-container">
          <video className="background-video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="logo"><Logo/></div>
        <div className="textback"></div>
        <span className="header"> Decentralized ecosystem harmonizing rooftops into economical engine for urban cooling </span>
        <span className="comingsoon">Coming Soon</span>
        <div></div>
      </section>
    );
  };
  
  export default ComingSoon;
  