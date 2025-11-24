import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import "../styles/dashboard.css";
import CourseCard from "../components/CourseCard.jsx";
import react1 from "../assets/react1.png";
import node from "../assets/node.png";  

function Dashboard() {
  // Simulated "logged‑in" user data
  const [user] = useState({
    name: "User Learner",
    email: "User@example.com",
  });

  // Example enrolled courses
  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Dr. Emily Rodgers",
      image: react1,
      price: "Enrolled",
    },
    {
      id: 2,
      title: "Mastering Node.js APIs",
      instructor: "John Developer",
      image: node,
      price: "Enrolled",
    },
  ];

  // Welcome toast (on first render)
  useEffect(() => {
    toast(`Welcome back, ${user.name}! ⚡`, { icon: "👋" });
  }, [user.name]);

  return (
    <motion.div
      className="dashboard container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.header
        className="dashboard-header"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Welcome, {user.name} 👋</h1>
        <p>{user.email}</p>
      </motion.header>

      <section className="enrolled-section">
        <h2>My Courses</h2>

        {enrolledCourses.length ? (
          <div className="enrolled-grid">
            {enrolledCourses.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <CourseCard {...c} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p>You haven’t enrolled in any course yet.</p>
        )}
      </section>
    </motion.div>
  );
}

export default Dashboard;