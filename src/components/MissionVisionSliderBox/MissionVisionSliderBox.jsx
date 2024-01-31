import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./MissionVision.css"
const MissionVisionSliderBox = ({title,pera}) => {
  return (
    <div
      data-aos="flip-up"
      className=" text-center relative bg-white p-8 md:py-[75px] md:px-44 rounded-3xl"
    >
      <div className="absolute top-8 left-3 md:top-14 md:left-28 opacity-50 text-xl md:text-4xl ">
        <FaQuoteLeft className="text-[#7A5542]" />
      </div>
      <h2 data-aos="fade-up" className="text-[#303030] font-extrabold tracking-tight font-anton  text-xl md:text-5xl mb-3 md:mb-7">
        {title}
      </h2>
      <p data-aos="fade-up" className="text-2xl">
       {pera}
      </p>
    
      <div className="absolute bottom-8 md:bottom-14 right-3 md:right-28 opacity-50 text-xl md:text-4xl">
        <FaQuoteRight className="text-[#7A5542] " />
      </div>
    </div>
  );
};

export default MissionVisionSliderBox;
