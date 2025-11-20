import React from "react";
import "../styles/footer.css";
import api from "../assets/api.png"; // replace with your actual logo image

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
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>

          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
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