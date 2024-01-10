import React from "react";
import BannerSlider from "./BannerSlider";
import icon from "../../../assets/h2-icon1.png";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/imgslider2.jpg";
import bgimage from "../../../assets/first-section/bg.jpeg";
const SliderContactSection = () => {
  return (
    <div className="flex flex-col bg-red-400 lg:flex-row justify-between">
      <div className="lg:w-1/2 w-full ">
        <BannerSlider></BannerSlider>
      </div>
      <div className="lg:w-1/2 bg-[#FFE2DA]  w-full ">
        <div className="w-full flex flex-col md:flex-row">
          <div className=" space-y-4 bg-[#F6F6F6] flex-1 ">
            <div className="py-16  px-8 md:px-16 space-y-3">
              <img src={icon} alt="" />
              <h3 className="text-2xl font-extrabold text-[#303030] font-heebo">
                Join the movement
              </h3>
              <p className="text-base text-[#303030] font-heebo"></p>

              <div>
                <Link className="uppercase text-lg underline text-[#303030] font-extrabold">
                  How ?
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex-1">
            <img src={bannerImg} className="w-full h-[390px]" alt="" />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgb(0 0 0 / 33%), rgb(5 4 4 / 47%)) , url(${bgimage})`,
          }}
          className="w-full bg-cover bg-center h-[350px] flex items-center justify-center"
        >
          <h2
            className="font-semibold text-white text-2xl md:text-5xl font-anton"
          >
            Support the cause <br />{" "}
            <span className="text-3xl font-extrabold md:text-6xl">NOW</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SliderContactSection;
