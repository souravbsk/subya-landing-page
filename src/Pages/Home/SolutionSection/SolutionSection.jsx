import React from "react";
import { Link } from "react-router-dom";
import solutionImg from "../../../assets/our-solution/Artisans'_Wizard.png"
import SolutionPPtContent from "./SolutionPPtContent";
import Button from "../../../components/Button/Button";
const SolutionSection = () => {
  return (
    <div id="journey" className="flex  bg-white items-center flex-col lg:flex-row justify-between">
      <div className="md:w-[50%] w-full">
        <div className="px-4 md:px-20   py-12">
          <div className="space-y-4">
            <h2 className="text-[#303030] font-extrabold font-anton leading-tight text-3xl md:text-5xl">
             The Solution ?
            </h2>
            <p className="font-heebo text-[#303030] text-base">
              Empowering Artisans, Weaving Dreams: Sabhyasha transforms the
              touch of tradition into global tales through our marketplace and
              our application
            </p>
            
            <Button link={"/our-solution"} text="Read more"></Button>
          </div>
          <SolutionPPtContent></SolutionPPtContent>

        </div>
      </div>
      <div className="md:w-[50%] bg-white w-full ">

        <img className="w-96 mx-auto" src={solutionImg} alt="" />
      </div>
    </div>
  );
};

export default SolutionSection;
