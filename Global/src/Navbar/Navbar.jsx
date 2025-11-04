import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/tracks">Tracks</Link>
      <Link to="/orators">Orators</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/venue">Venue</Link>
      <Link to="/event">Event Partners</Link>
     
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
