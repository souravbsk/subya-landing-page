import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";
import bannerImg from "../../../assets/second-section/left-img.jpeg";
import "react-circular-progressbar/dist/styles.css";
import GoalSave from "./GoalSave";
import PieChart from "../../../components/PieChart/PieChart";
import RightBannerImage from "./RightBannerImage";
import HorizontalTimeLine from "../../../components/HorizontalTimeLine/HorizontalTimeLine";
import Button from "../../../components/Button/Button";
const PieChartSection = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const updateCounter = () => {
  //     if (counter < 76) {
  //       setCounter(counter + 1);
  //     }
  //   };

  //   const interval = setInterval(updateCounter, 50);

  //   return () => clearInterval(interval);
  // }, [counter]);
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
            <div className="py-10 flex  flex-col h-full items-center justify-center  px-8 md:px-4 space-y-3">
              
              
              <div data-aos="fade-up" className="text-center ">
                <p className="font-heebo font-extrabold text-[#303030] text-2xl">
                20 Crore Indians depend on Handloom and Handicraft for earning Livelihood
                </p>
              </div>
              <div>
                <Button link="#" text="Read More"></Button>
              </div>
            </div>
          </div>
        </div>
        {/* <GoalSave></GoalSave> */}
      </div>
      {/* <div className="lg:w-[30%] w-full ">
        <RightBannerImage></RightBannerImage>
      </div> */}
    </div>
  );
};

export default PieChartSection;
