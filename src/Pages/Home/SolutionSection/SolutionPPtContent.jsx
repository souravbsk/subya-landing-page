import React from "react";
import artisanslogo from "../../../assets/The-solution/artisans-logo.png";
import powerdby from "../../../assets/The-solution/powerdby.png";
const SolutionPPtContent = () => {
  return (
    <div className=" space-y-3 md:space-y-6 flex flex-col justify-center items-center">
      <figure>
        <img className="md:w-full w-4/6 mx-auto h-full" src={artisanslogo} alt="" />
      </figure>
      <p className="font-heebo text-center font-medium text-[#7A5542] md:px-16 px-0 sm:text-3xl text-xl">
        One App, Many Storefronts and Many Opportunities
      </p>
      <figure>
        <img className="md:w-60 w-36 h-full" src={powerdby} alt="" />
      </figure>
    </div>
  );
};

export default SolutionPPtContent;
