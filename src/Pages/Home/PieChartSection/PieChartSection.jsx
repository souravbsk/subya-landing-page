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
              <div className="w-full">
                <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="font-heebo  flex items-center gap-2 text-left overflow-hidden text-[#303030]  font-bold"
                >
                  <p className="flex-shrink">
                    Indian Artisan industry has a HUGE
                  </p>{" "}
                  <span className="gap-text-animation  ">gap</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between md:gap-3 items-center ">
                <p
                data-aos="fade-right"
                data-aos-duration="3000"
                className="flex-1 text-center md:text-right font-heebo   text-[#303030] text-base">
                  Less than <span className="font-bold text-[#7A482F]">1%</span>{" "}
                  Indian Artisans sell online
                </p>
                <div
                  className="flex-1 piechart"
                  
                >
                  <PieChart></PieChart>
                </div>
                <p 
                 data-aos="fade-left"
                 data-aos-duration="3000"
                className="flex-1 text-center md:text-left font-heebo   text-[#303030] text-base">
                  And India comprises only{" "}
                  <span className="font-bold text-[#7A482F]">0.7%</span> of{" "}
                  <span className="font-bold text-[#7A482F]">$752</span> Bn of
                  the Handicraft industry
                </p>
              </div>
              <div data-aos="fade-up" className="text-center ">
                <h2 className="font-extrabold mb-3 text-2xl">Our objective</h2>
                <p className="font-heebo text-[#303030] text-base">
                  Sabhyahsa, started in 2020 to unravel the Best Kept Secrets of
                  Orrissa, is now on a mission to bridge the gap and tap the
                  untapped potential of our artisans through e-commerce.
                </p>
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
