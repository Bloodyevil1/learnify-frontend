import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/navbar.css";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const icon = theme === "light" ? "🌙" : "☀️";

  // close menu after selecting a link (better mobile UX)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="container nav-container">
        <h2 className="nav-logo">Learnify</h2>

        {/* Hamburger for mobile */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" onClick={handleLinkClick}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={handleLinkClick}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLinkClick}>
              Login
            </Link>
          </li>
          <li>
            <button
              className="theme-btn"
              onClick={toggleTheme}
              title="Toggle theme"
            >
              {icon}
            </button>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;