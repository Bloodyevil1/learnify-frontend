import React from "react";
import { Link } from "react-router-dom";       // 👈 import Link for SPA navigation
import "../styles/footer.css";
import api from "../assets/api.png";           // local logo/image

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Left Section */}
        <div className="footer-about">
          <img src={api} alt="Learnify logo" className="footer-logo" />
          <p>
            Empowering learners worldwide with high‑quality, industry‑ready
            courses. Build your future with <strong>Learnify</strong>.
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {/* ✅ use Link instead of <a> for internal routes */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>

          <h4>Follow Us</h4>
          <div className="social-icons">
            {/* External links remain normal anchors */}
            <a href="https://facebook.com/learnify" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/learnify" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/learnify" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Learnify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;