import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";
import bannerImg from "../../../assets/second-section/left-img.jpeg";
import RightSlider from "./RightSlider";
import "react-circular-progressbar/dist/styles.css";
import GoalSave from "./GoalSave";
const SecondSliderSection = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Implement logic to update the counter to 76
    const updateCounter = () => {
      if (counter < 76) {
        setCounter(counter + 1);
      }
    };

    const interval = setInterval(updateCounter, 50); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <div id="journey" className="flex flex-col lg:flex-row justify-between">
      <div className="lg:w-[70%] w-full ">
        <div className="w-full flex flex-col md:flex-row">
          <div className=" flex-1">
            <img
              src={bannerImg}
              className="w-full object-cover object-left h-[388px]"
              alt=""
            />
          </div>
          <div className=" space-y-4 flex-1 ">
            <div className="py-10 flex  flex-col h-full items-center justify-center  px-8 md:px-20 space-y-6">
            
              <div className="w-2/4 mx-auto">
                <CircularProgressbar
                  value={counter}
                  text={`${counter}%`}
                  styles={buildStyles({
                    pathColor: `#000000`,
                    textColor: "#000000",
                  })}
                />
              </div>

              <h3 className="text-3xl  text-center font-extrabold text-[#303030] font-heebo">
                Our Objective
              </h3>
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
