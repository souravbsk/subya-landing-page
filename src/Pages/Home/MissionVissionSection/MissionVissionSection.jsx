import React from "react";

import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Button from "../../../components/Button/Button";

const MissionVissionSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className=" w-full ">
        <div className="p-4 md:p-20  bg-[#7A5542]">
          <div className=" text-center relative bg-white p-8 md:py-[75px] md:px-44 rounded-3xl">
            <div className="absolute top-8 left-3 md:top-14 md:left-28 opacity-50 text-xl md:text-4xl ">
              <FaQuoteLeft className="text-[#7A5542]" />
            </div>
            <h2 className="text-[#303030] font-extrabold tracking-tight font-anton  text-xl md:text-5xl mb-3 md:mb-7">
              Our Mission & Vision
            </h2>
            <p className="text-2xl">
              In every artisan’s smile, in every crafted masterpiece, we see the
              fulfilment of our dream – a dream where every hidden gem of
              India’s vast artistic landscape is brought into the limelight,
              celebrated, and cherished by the world.
            </p>
            {/* <div className=" mt-4 md:mt-10">
              <Button link={"/our-mission"} text="Read more"></Button>
            </div> */}
            <div className="absolute bottom-8 md:bottom-14 right-3 md:right-28 opacity-50 text-xl md:text-4xl">
              <FaQuoteRight className="text-[#7A5542] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVissionSection;
