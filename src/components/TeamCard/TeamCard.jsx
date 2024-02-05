import React, { useState } from "react";
import { FaArrowAltCircleDown, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamCard = ({ image, title, designation, link, pera }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative">
      <figure
        data-aos="fade-right"
        className="mb-2 "
        onMouseEnter={openModal}
        onMouseOut={closeModal}
      >
        <img
          className={`md:h-56 w-full cursor-help  mx-auto duration-200 rounded-xl ${isModalOpen ? "opacity-45" : "opacity-100"}`}
          src={image}
          alt="alisha"
        />
      </figure>
      <div className="text-center">
        <h2
          data-aos="fade-right"
          className="text-[#303030] text-xl font-extrabold "
        >
          {title}
        </h2>
        <p data-aos="fade-up">{designation}</p>
        <ul className="flex items-center justify-center gap-2 mt-2">
          <Link target="_blank" to={link}>
            <li
              data-aos="fade-up"
              className={`backdrop-brightness-90 cursor-pointer md:p-2 p-1.5 rounded-full`}
            >
              <FaLinkedinIn color="#1883BB" />
            </li>
          </Link>
        </ul>
      </div>

      {(isModalOpen && pera) && (
        <div className="fixed z-40 left-1/2 transform -translate-x-1/2 -top-32">
          <div className="relative bg-white p-8 rounded-3xl shadow-md">
            <p>{pera}</p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-solid border-4 border-t-0 border-r-4 border-l-4 border-b-4">
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCard;
