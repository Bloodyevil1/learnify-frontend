import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ for internal routing
import "../styles/login.css"; // reuse same CSS for visual consistency

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    alert(`Account created successfully for ${formData.name}!`);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <motion.div
      className="login-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>

        {error && <p className="error-msg">{error}</p>}

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter your password"
        />

        <button type="submit">Sign Up</button>

        <p className="note">
          Already have an account?{" "}
          {/* ✅ Using Link avoids GitHub Pages 404 and keeps SPA navigation */}
          <Link
            to="/login"
            style={{ color: "#0072ff", fontWeight: "bold" }}
          >
            Login
          </Link>
        </p>
      </form>
    </motion.div>
  );
}

export default Signup;