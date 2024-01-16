import React from "react";
import { Link } from "react-router-dom";
import solutionImg from "../../../assets/our-solution/Artisans'_Wizard.webp"
const SolutionSection = () => {
  return (
    <div id="journey" className="flex pt-[100px] pb-[100px] bg-white items-stretch flex-col lg:flex-row justify-between">
      <div className="md:w-[70%] w-full">
        <div className="px-4 md:px-20   py-12">
          <div className="space-y-4">
            <h2 className="text-[#303030] font-extrabold font-anton leading-tight text-3xl md:text-5xl">
              Solution
            </h2>
            <p className="font-heebo text-[#303030] text-base">
              Empowering Artisans, Weaving Dreams: Sabhyasha transforms the
              touch of tradition into global tales through our marketplace and
              our application
            </p>
            <button className="bg-[#7A5542] px-5 pt-2 pb-3">
              <Link
                to="/our-solution"
                className="uppercase font-anton underline font-extrabold text-white"
              >
                Read more
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-[30%] bg-white w-full ">

        <img className=" w-40 mx-auto" src={solutionImg} alt="" />
      </div>
    </div>
  );
};

export default SolutionSection;
