import React, { useEffect, useState } from "react";

import bannerImg from "../../../assets/second-section/left-img.jpeg";
import Button from "../../../components/Button/Button";
const PieChartSection = () => {
  return (
    <div id="journey" className="">
      <div className=" w-full ">
        <div className="w-full flex flex-col md:flex-row">
          <div className=" flex-1">
            <img
              src={bannerImg}
              className="w-full object-cover object-left h-full"
              alt=""
            />
          </div>
          <div className=" flex-1 ">
            <div className="py-10 flex  flex-col h-full items-center justify-center  px-8 md:px-6 bg-[#f9ebe0] space-y-3">
              <div data-aos="fade-up" className="text-center ">
                <p className="font-heebo mb-2 font-extrabold text-[#5D2F18] text-5xl">
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
