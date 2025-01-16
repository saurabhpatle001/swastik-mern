import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-content">
        {/* Left Section */}
        <div className="offers-left">
          <h1 className="offers-heading">
            Exclusive <span>Deals</span>
          </h1>
          <h1 className="offers-subheading">Just For You</h1>
          <p className="offers-text">Only on Best-Seller Products</p>
          <button className="offers-btn">Check Now</button>
        </div>

        {/* Right Section */}
        <div className="offers-right">
          <img
            className="offers-image"
            src={exclusive_image}
            alt="Exclusive Offers"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
