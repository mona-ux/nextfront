import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {" "}
        <img src="/images/logo.png" alt="" />
      </div>

      <div className="delivery-text">
        <span className="deliver-to">
          Deliver to: Current Location, Mohammadpur Bus Stand, Dhaka
        </span>
      </div>

      <div className="nav-right">
        <input type="text" placeholder="Search Food" className="search-box" />
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
