import React from "react";
import { Link } from "react-router-dom";
import solutionImg from "../../../assets/our-solution/Artisans'_Wizard.png";
import SolutionPPtContent from "./SolutionPPtContent";
import Button from "../../../components/Button/Button";
const SolutionSection = () => {
  return (
    <div
      id="journey"
      className="flex  bg-white items-center flex-col lg:flex-row justify-between"
    >
      <div className="md:w-[50%] w-full">
        <div className="px-4 md:pl-48 md:pr-16  py-12  ">
          
            <h2 className="text-[#303030] mb-6 font-medium text-center font-anton leading-tight text-4xl">
              An <span className="text-[#7A5542] font-semibold">AI Powered Application</span> for the Artisans to enter in to the
              world of E-commerce
            </h2>
         
          <SolutionPPtContent></SolutionPPtContent>
          <div className="text-center mt-6">
            <Button text="Start Selling Now" className="no-underline"></Button>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] bg-white w-full ">
        <img className="h-[800px] mx-auto" src={solutionImg} alt="" />
      </div>
    </div>
  );
};

export default SolutionSection;
