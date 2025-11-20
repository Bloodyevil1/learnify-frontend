import React from "react";
import "../styles/skeleton.css";

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img shimmer"></div>
      <div className="skeleton-line shimmer"></div>
      <div className="skeleton-line short shimmer"></div>
    </div>
  );
}

export default SkeletonCard;