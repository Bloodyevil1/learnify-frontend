import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import CourseCard from "../components/CourseCard.jsx";
import SkeletonCard from "../components/SkeletonCard.jsx";
import "../styles/courses.css";

// ---------- Imported Thumbnails ----------
import ui from "../assets/ui.png";
import react1 from "../assets/react1.png";
import node from "../assets/node.png";
import dataScience from "../assets/python.png";
import reactNative from "../assets/reactmobile.png";
import digitalMarketing from "../assets/socialmedia.png";
import devops from "../assets/docker.png";
import cyberSecurity from "../assets/cyber.png";
import aiPrompt from "../assets/ai.png";

function Courses() {
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Simulated backend fetch delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // All courses with ₹ (INR) pricing
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      instructor: "John Doe",
      priceNum: 5999,
      image: ui,
    },
    {
      id: 2,
      title: "React JS Masterclass – Beginner to Advanced Level",
      instructor: "Jane Smith",
      priceNum: 3499,
      image: react1,
    },
    {
      id: 3,
      title: "Node JS API Development & Integration Masterclass",
      instructor: "Kevin Tran",
      priceNum: 3999,
      image: node,
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      instructor: "Priya Chauhan",
      priceNum: 2999,
      image: ui,
    },
    {
      id: 5,
      title: "Data Science & Machine Learning with Python",
      instructor: "Rajesh Kumar",
      priceNum: 8999,
      image: dataScience,
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      instructor: "Ananya Patel",
      priceNum: 6999,
      image: reactNative,
    },
    {
      id: 7,
      title: "Digital Marketing Mastery 2024",
      instructor: "Arvind Mehta",
      priceNum: 2499,
      image: digitalMarketing,
    },
    {
      id: 8,
      title: "DevOps Essentials with AWS & Docker",
      instructor: "Ishita Ray",
      priceNum: 7999,
      image: devops,
    },
    {
      id: 9,
      title: "Cyber Security and Ethical Hacking Bootcamp",
      instructor: "Rohan Nair",
      priceNum: 7499,
      image: cyberSecurity,
    },
    {
      id: 10,
      title: "Artificial Intelligence and Prompt Engineering",
      instructor: "Aarti Menon",
      priceNum: 9999,
      image: aiPrompt,
    },
  ];

  // Filter logic
  const filtered = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) &&
      (priceFilter === "all" ||
        (priceFilter === "under5000" && c.priceNum < 5000) ||
        (priceFilter === "over5000" && c.priceNum >= 5000))
  );

  const handleEnroll = (courseTitle) => {
    toast.success(`Enrolled in ${courseTitle}! 🎉`);
  };

  return (
    <motion.div
      className="container courses-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h1>Browse Courses</h1>

      {/* ---------- Search / Filter Controls ---------- */}
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
          <option value="under5000">Under ₹5,000</option>
          <option value="over5000">₹5,000 and above</option>
        </select>
      </div>

      {/* ---------- Courses Grid ---------- */}
      <div className="courses-grid">
        {loading ? (
          [1, 2, 3].map((i) => <SkeletonCard key={i} />)
        ) : filtered.length ? (
          filtered.map((c) => (
            <div key={c.id} style={{ position: "relative" }}>
              <CourseCard
                {...c}
                price={`₹${c.priceNum.toLocaleString("en-IN")}`}
              />
              <button
                className="small-enroll-btn"
                onClick={() => handleEnroll(c.title)}
              >
                Enroll Now
              </button>
            </div>
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    </motion.div>
  );
}

export default Courses;
