import React from "react";
import { Link } from "react-router-dom";

const GoalSave = () => {
  return (
    <div className="px-4 md:px-20 bg-white  py-12">
      <div className="space-y-4">
        <h2 className="text-[#303030] font-extrabold font-anton leading-tight text-3xl md:text-5xl">
          Our journey
        </h2>
        <p className="font-heebo text-[#303030] text-base">
          Sabhyahsa, started in 2020 to unravel the Best Kept Secrets of
          Orrissa, is now on a mission to bridge the gap and tap the untapped
          potential of our artisans through e-commerce.
        </p>
        <button className="bg-[#7A5542] px-5 pt-2 pb-3">
          <Link
            to="/our-journey"
            className="uppercase font-anton underline font-extrabold text-white"
          >
            Read more
          </Link>
        </button>
      </div>
    </div>
  );
};

export default GoalSave;
