import React from "react";
import artisanslogo from "../../../assets/The-solution/artisans-logo.png";
import powerdby from "../../../assets/The-solution/powerdby.png";
const SolutionPPtContent = () => {
  return (
    <div className=" space-y-6 flex flex-col justify-center items-center">
      <figure>
        <img className="w-full h-full" src={artisanslogo} alt="" />
      </figure>
      <p className="font-heebo text-center font-medium text-[#7A5542] px-16 text-3xl">
        One App, Many Storefronts and Many Opportunities
      </p>
      <figure>
        <img className="w-60 h-full" src={powerdby} alt="" />
      </figure>
    </div>
  );
};

export default SolutionPPtContent;
