import React from 'react';
import './Navbar.css';
import c2clogo from './images/C2C_2024_Logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={c2clogo} alt="official logo of C2C" height={90} width={90}/>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Our&nbsp;Team</a></li>
        <li><a href="/contact">Speakers</a></li>
        <li><a href="/contact">Schedule</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/contact">FAQ's</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
