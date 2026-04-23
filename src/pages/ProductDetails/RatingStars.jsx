import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

function RatingStars() {
  return (
    <div className="stars">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfAlt />
    </div>
  );
}

export default RatingStars;
