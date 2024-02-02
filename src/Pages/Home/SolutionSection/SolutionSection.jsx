import React from "react";
import { Link } from "react-router-dom";
import solutionImg from "../../../assets/our-solution/AZ-App.webp";
import SolutionPPtContent from "./SolutionPPtContent";
import Button from "../../../components/Button/Button";
const SolutionSection = () => {
  return (
    <div
      id="journey"
      className="flex flex-col lg:flex-row lg:pt-20  gap-6  bg-white items-center  justify-between"
    >
      <div className="lg:w-[50%] lg:py-20 md:py-16 py-6 pt-12 w-full">
        <div data-aos="fade-up" className="lg:px-4 md:px-16 px-5" >
          
            <h2  className="text-[#303030] mb-3 md:mb-6 font-medium text-center font-anton leading-tight md:text-4xl text-xl ">
              An <span className="text-[#7A5542] font-semibold">AI Powered Application</span> for the Artisans to enter in to the
              world of E-commerce
            </h2>
         
          <SolutionPPtContent ></SolutionPPtContent>
          <div data-aos="fade-up" className="text-center mt-6">
            <Button text="Start Selling Now" className="no-underline"></Button>
          </div>
        </div>
      </div>
      <div data-aos="fade-up"
     data-aos-duration="3000" className="lg:w-[50%]  md:pt-0  w-full ">
        <img  className="lg:w-full md:w-10/12 mx-auto" src={solutionImg} alt="" />
      </div>
    </div>
  );
};

export default SolutionSection;
