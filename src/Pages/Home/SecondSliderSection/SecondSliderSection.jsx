import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";
import bannerImg from "../../../assets/second-section/left-img.jpeg";
import RightSlider from "./RightSlider";
import "react-circular-progressbar/dist/styles.css";
import GoalSave from "./GoalSave";
import PieChart from "../../../components/PieChart/PieChart";
const SecondSliderSection = () => {
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
    <div id="journey" className="flex flex-col lg:flex-row justify-between">
      <div className="lg:w-[70%] w-full ">
        <div className="w-full flex flex-col-reverse md:flex-row">
          <div className=" flex-1">
            <img
              src={bannerImg}
              className="w-full object-cover object-left h-full md:h-[388px]"
              alt=""
            />
          </div>
          <div className=" space-y-3 md:space-y-4 flex-1 ">
            <div className="py-10 flex  flex-col h-full items-center justify-center  px-8 md:px-4 space-y-6">
              <div className="flex flex-col md:flex-row justify-between md:gap-3 items-center ">
                {/* <CircularProgressbar
                  value={counter}
                  text={`${counter}%`}
                  repeat
                  styles={buildStyles({
                    pathColor: `#7A5542`,
                    textColor: "#000000",
                  })}
                /> */}
                <p className="flex-1 text-center md:text-right font-heebo   text-[#303030] text-base">
                  Less than <span className="font-bold text-[#7A482F]">1%</span> Indian Artisans sell online
                </p>
                <div className="flex-1">
                  <PieChart></PieChart>
                </div>
                <p className="flex-1 text-center md:text-left font-heebo   text-[#303030] text-base">
                  And India comprises only <span className="font-bold text-[#7A482F]">0.7%</span> of{" "}
                  <span className="font-bold text-[#7A482F]">$752</span> Bn of the Handicraft industry
                </p>
              </div>
            </div>
          </div>
        </div>
        <GoalSave></GoalSave>
      </div>
      <div className="lg:w-[30%] w-full ">
        <RightSlider></RightSlider>
      </div>
    </div>
  );
};

export default SecondSliderSection;
