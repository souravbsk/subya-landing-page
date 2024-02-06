import React, { useEffect, useState } from "react";

import bannerImg from "../../../assets/second-section/carpetweaving.webp";
import Button from "../../../components/Button/Button";
const PieChartSection = () => {
  return (
    <div id="journey" className="">
      <div className=" w-full ">
        <div className="w-full flex flex-col md:flex-row">
          <div className="flex-1">
            <img
              src={bannerImg}
              className="w-full object-cover object-left h-full"
              alt=""
            />
          </div>
          <div className=" flex-1 ">
            <div className="lg:py-10 md:py-16 py-10 flex  flex-col h-full items-center justify-center sm:px-3 px-0 md:px-6 bg-[#f9ebe0] space-y-3">
              <div data-aos="fade-up" className="text-center ">
                <p className="font-heebo mb-2 font-extrabold text-[#5D2F18] lg:text-4xl md:text-3xl text-2xl ">
                  20 Crore Indians depend on Handloom and Handicraft for earning
                  Livelihood
                </p>
              </div>
              <div data-aos="zoom-in-up">
                <Button link="#" text="Read More"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartSection;
