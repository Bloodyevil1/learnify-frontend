import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import CourseCard from "../components/CourseCard.jsx";
import SkeletonCard from "../components/SkeletonCard.jsx";
import "../styles/courses.css";
import ui from "../assets/ui.png";
import react1 from "../assets/react1.png";
import node from "../assets/node.png";

function Courses() {
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Simulated backend fetch delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      instructor: "John Doe",
      priceNum: 49,
      image: ui,
    },
    {
      id: 2,
      title: "React Basics",
      instructor: "Jane Smith",
      priceNum: 29,
      image: react1,
    },
    {
      id: 3,
      title: "Node Masterclass",
      instructor: "Kevin Tran",
      priceNum: 39,
      image: node,
    },
  ];

  const filtered = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) &&
      (priceFilter === "all" ||
        (priceFilter === "under40" && c.priceNum < 40) ||
        (priceFilter === "over40" && c.priceNum >= 40))
  );

  const handleEnroll = (courseTitle) => {
    toast.success(`Enrolled in ${courseTitle}! 🎉`);
  };

  return (
    <motion.div
      className="container courses-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h1>Browse Courses</h1>

      {/* Search / Filter Controls */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search courses"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="under40">Under $40</option>
          <option value="over40">$40 and above</option>
        </select>
      </div>

      {/* Courses Grid */}
      <div className="courses-grid">
        {loading
          ? // skeleton placeholders while loading
            [1, 2, 3].map((i) => <SkeletonCard key={i} />)
          : filtered.length ? (
              filtered.map((c) => (
                <div key={c.id} style={{ position: "relative" }}>
                  <CourseCard
                    {...c}
                    price={`$${c.priceNum}`}
                  />
                  <button
                    className="small-enroll-btn"
                    onClick={() => handleEnroll(c.title)}
                  >
                    Enroll Now
                  </button>
                </div>
              ))
            ) : (
              <p>No courses found.</p>
            )}
      </div>
    </motion.div>
  );
}

export default Courses;