import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";
import { Button } from "react-bootstrap";
const Navbar = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">
            <h6>Home</h6>
          </Link>
          <Link to="/about">
            <h6>About</h6>
          </Link>
          <Link to="/exceutive">
            <h6>Executive Panel</h6>
          </Link>
          <Link to="/tracks">
            <h6>Tracks</h6>
          </Link>
          <Link to="/orators">
            <h6>Orators</h6>
          </Link>
          <Link to="/schedule">
            <h6>Schedule</h6>
          </Link>
          <Link to="/venue">
            <h6>Venue</h6>
          </Link>
          <Link to="/event">
            <h6>Event Partners</h6>
          </Link>
          <Link to="/contact">
            <h6>Contact</h6>
          </Link>
          <button className="register-btn">Register</button>
          <button className="register-btn">Select Language</button>
        </div>
      </nav>

      <img
        src="https://mediclave.helixconferences.com/static/media/med_logo.dc333a4c52ce807495b0.png"
        width="8%"
        alt="Mediclave Logo"
        id="navbar-logo"
      />

      <div class="floating-sidebar">
        <div class="icon-item">
          <i class="fa-solid fa-phone"></i>
          <span>Call Us</span>
        </div>
        <div class="icon-item">
          <i class="fa-solid fa-download"></i>
          <span>Download</span>
        </div>
        <div class="icon-item">
          <i class="fa-solid fa-calendar-check"></i>
          <span>Book Now</span>
        </div>
        <div class="icon-item">
          <i class="fa-solid fa-file-lines"></i>
          <span>Documents</span>
        </div>
        <div class="icon-item">
          <i class="fa-brands fa-whatsapp"></i>
          <span>WhatsApp</span>
        </div>
        <div class="icon-item">
          <i class="fa-solid fa-circle-question"></i>
          <span>Help</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
