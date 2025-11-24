import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";  // ✅ smooth internal routing
import "../styles/login.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    toast.success(`Welcome back ${formData.email}!`);
    setFormData({ email: "", password: "" });
  };

  return (
    <motion.div
      className="login-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.form
        className="login-form"
        onSubmit={handleSubmit}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2>Login to Learnify</h2>

        {error && <p className="error-msg">{error}</p>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Login
        </motion.button>

        <p className="note">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "#0072ff", fontWeight: "bold" }}
          >
            Sign Up
          </Link>
        </p>
      </motion.form>
    </motion.div>
  );
}

export default Login;