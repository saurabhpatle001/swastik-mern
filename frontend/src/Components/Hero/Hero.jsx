import React from "react";
import "./Hero.css";
import heroImage from "../Assets/hero_image.png";
import handIcon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      {/* Left Section */}
      <div className="hero-left">
        <h2 className="hero-title">Discover Your Style</h2>
        <p className="hero-subtitle">New Collections for Every Occasion</p>
        <div className="hero-hand-icon">
          <span className="new-label">NEW</span>
          <img src={handIcon} alt="Hand Icon" />
        </div>
        {/* Button */}
        <div className="hero-latest-btn">
          <button className="cta-button">
            Explore Collection
            <img src={arrowIcon} alt="Arrow Icon" />
          </button>
        </div>
      </div>
      {/* Right Section */}
      <div className="hero-right">
        <img src={heroImage} alt="Fashionable Outfit" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
