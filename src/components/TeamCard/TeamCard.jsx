import React, { useState } from "react";
import { FaArrowAltCircleDown, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamCard = ({ image, title, designation, link, pera }) => {
  return (
    <div className="relative group">
      <div
        data-aos="fade-right"
        className="mb-2 relative  rounded-xl overflow-hidden"
      >
        <img
          className={`md:w-64 md:h-64 w-full cursor-help  mx-auto duration-200 group-hover:opacity-30 `}
          src={image}
          alt="alisha"
        />
        <div className="absolute -bottom-96 group-hover:bottom-0  duration-500 transition-all p-5 text-white bg-[#7A5542]">
          <p>{pera}</p>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-[#303030] text-xl font-extrabold ">{title}</h2>
        <p>{designation}</p>
        <ul className="flex items-center justify-center gap-2 mt-2">
          <Link target="_blank" to={link}>
            <li
              className={`backdrop-brightness-90 cursor-pointer md:p-2 p-1.5 rounded-full`}
            >
              <FaLinkedinIn color="#1883BB" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
