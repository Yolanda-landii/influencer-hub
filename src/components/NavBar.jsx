import { useState } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>

          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>

          {/* <NavLink to="/pages" onClick={() => setMenuOpen(false)}>
            Pages
          </NavLink> */}

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </NavLink>
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