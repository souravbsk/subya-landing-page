import React from "react";
import { Link } from "react-router-dom";

const GoalSave = () => {
  return (
    <div className="px-4 md:px-20 bg-white  py-12">
      <div className="space-y-4">
        <h2 className="text-[#303030] font-extrabold font-anton leading-tight text-3xl md:text-5xl">OUR GOAL IS <br /> TO SAVE WILDLIFE</h2>
        <p className="font-heebo text-[#303030] text-base">
        Ne vim omnis nulla debet lorem Ipsum. Proin qual de suis erestopius. Liquee nean sollicituinlorem quis bibendum auct ornisi elitsequat ipsum.


        </p>
        <button className="bg-[#F0E8F8] px-5 pt-2 pb-3">
            <Link to="/" className="uppercase font-anton underline font-extrabold text-[#9B8DB7]">donate now</Link>
        </button>
      </div>
    </div>
  );
};

export default GoalSave;
