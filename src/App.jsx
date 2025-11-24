import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import SignUp from "./pages/SignUp.jsx"; // ✅ file name uses capital “U”
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

/* ---------- Animated Routes ---------- */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> {/* ✅ route matches import */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

/* ---------- Main App ---------- */
function App() {
  return (
    // 👇 basename ensures correct URLs for GitHub Pages deployment
    <BrowserRouter basename="/learnify-frontend">
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;