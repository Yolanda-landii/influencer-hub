import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-icon">🔥</span>
          <span className="logo-text">InfluencerHub</span>
        </div>

        {/* Navigation Links */}
        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#pages">Pages</a>
          <a href="#contact">Contact Us</a>
        </nav>

        {/* CTA Button */}
        <div className="navbar-cta">
          <button className="cta-button">Join InfluencerHub</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Navbar;
