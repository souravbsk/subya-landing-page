import React, { useEffect, useState } from "react";
import icon from "../../../assets/h2-icon1.png";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/imgslider2.jpg";
import RightSlider from "./RightSlider";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GoalSave from "./GoalSave";
const SecondSliderSection = () => {
  const [key, setKey] = useState(0);
  const percentage = 63;

  useEffect(() => {
    // Increment the key to remount the CircularProgressbar
    setKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="lg:w-1/2 w-full ">
        <div className="w-full flex flex-col md:flex-row">
          <div className=" flex-1">
            <img src={bannerImg} className="w-full h-[388px]" alt="" />
          </div>
          <div className=" space-y-4 flex-1 ">
            <div className="py-16  px-8 md:px-20 space-y-3">
              {/* <CircularProgressbar
              key={key}
                value={percentage}
                text={`${percentage}%`}
                animate={true} // Enable animation conditionally
              /> */}

              <div class="progress">
                <span
                  class="title timer"
                  data-from="0"
                  data-to="63"
                  data-speed="1500"
                >
                  63
                </span>
                <div class="overlay"></div>
                <div class="left"></div>
                <div class="right"></div>
              </div>

              <h3 className="text-2xl text-center font-semibold text-[#303030] font-heebo">
                Our objective
              </h3>
            </div>
          </div>
        </div>
        <GoalSave></GoalSave>
      </div>
      <div className="lg:w-1/2 w-full ">
        <RightSlider></RightSlider>
      </div>
    </div>
  );
};

export default SecondSliderSection;
