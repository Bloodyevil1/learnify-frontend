import React from "react";
import { motion } from "framer-motion";
import "../styles/home.css";
import heroImage from "../assets/heroImg.png";

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* ============ HERO SECTION ============ */}
      <section className="hero container">
        {/* ---------- Left Text Area ---------- */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1>
            Welcome to <span className="highlight">Learnify</span>
          </h1>
          <p>
            Upgrade your skills with{" "}
            <strong>industry‑grade courses</strong> built for modern learners.
          </p>

          <motion.button
            className="explore-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => (window.location.href = "/courses")}
          >
            Explore Courses
          </motion.button>
        </motion.div>

        {/* ---------- Right Image Area ---------- */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={heroImage}
            alt="Learnify Online Learning illustration"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* ============ EXTENSIONS COMING NEXT ============
          Below this hero, we’ll add future sections:
          • Why Learnify (benefits grid)
          • Popular Courses (preview)
          • Testimonials / Community CTA
          • Footer (already global)
      ================================================ */}
    </motion.div>
  );
}

export default Home;