import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/courses.css";

function CourseCard({ id, title, instructor, image, price }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link to={`/courses/${id}`} className="course-card">
        <img src={image} alt={title} className="course-image" />
        <div className="course-content">
          <h3>{title}</h3>
          <p className="instructor">by {instructor}</p>
          <p className="price">{price}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default CourseCard;