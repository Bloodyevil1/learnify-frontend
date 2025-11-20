import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import "../styles/courses.css";
import  api from "../assets/api.png";
import react1 from "../assets/react1.png";
import node from "../assets/node.png";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Temporary static list (later from backend)
  const courses = [
    {
      id: "1",
      title: "Full Stack Web Development",
      instructor: "John Doe",
      image: api,
      price: "$49.99",
      details:
        "Learn to build production‑ready web apps from scratch using HTML, CSS, JavaScript, React, Node, and SQL.",
    },
    {
      id: "2",
      title: "React for Beginners",
      instructor: "Jane Smith",
      image: react1,
      price: "$29.99",
      details:
        "Start your journey with React 18—understand components, props, and hooks through hands‑on projects.",
    },
    {
      id: "3",
      title: "Node.js API Masterclass",
      instructor: "Kevin Tran",
      image: node,
      price: "$39.99",
      details:
        "Build fast, secure REST APIs with Express and middleware patterns trusted in industry.",
    },
  ];

  const course = courses.find((c) => c.id === id);
  if (!course) return <p>Course not found.</p>;

  // simulate enrollment toast
  const handleEnroll = () => {
    toast.success(`Enrolled in ${course.title}! 🎉`);
  };

  return (
    <motion.div
      className="container course-details"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.button
        className="back-btn"
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Courses
      </motion.button>

      <div className="details-wrapper">
        <motion.img
          src={course.image}
          alt={course.title}
          className="details-image"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="details-info"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>{course.title}</h1>
          <h3>Instructor – {course.instructor}</h3>
          <p>{course.details}</p>
          <p className="price">{course.price}</p>

          <motion.button
            className="enroll-btn"
            onClick={handleEnroll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CourseDetails;