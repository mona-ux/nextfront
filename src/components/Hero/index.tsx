import React from "react";
import "./index.css";
import { FaMotorcycle, FaShoppingBag } from "react-icons/fa"; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
       
        <div className="hero-text">
          <h1 className="hero-title">Are you starving?</h1>
          <p className="hero-description">
            Within a few clicks, find meals that are accessible near you
          </p>

          
          <div className="delivery-box">
            <div className="delivery-options">
              <div className="option active">
                <FaMotorcycle className="icon" />
                Delivery
              </div>
              <div className="option">
                <FaShoppingBag className="icon" />
                Pick Up
              </div>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter your delivery location"
                className="delivery-input"
              />
              <button className="find-food-btn">Find Food</button>
            </div>
          </div>
        </div>

      
        <div className="hero-image">
          <img src="/images/piz.png" alt="Pizza" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
