import React from "react";
import BannerSlider from "./BannerSlider";
import icon from "../../../assets/first-section/icon-img.png";
import { Link } from "react-router-dom";
import bgimage from "../../../assets/first-section/bg.jpeg";
const SliderContactSection = () => {
  return (
    <div className="flex flex-col bg-red-400 lg:flex-row justify-between">
      <div className="lg:w-[70%] w-full ">
        <BannerSlider></BannerSlider>
      </div>
      <div className="lg:w-1/2 bg-[#FFE2DA] flex md:flex-col w-full ">
        <div className="w-full flex flex-col md:flex-row">
          <div className=" space-y-4 flex-1 bg-[#F6F6F6]  ">
            <div className="py-6 md:py-16 flex flex-col justify-center items-center  px-4 md:px-16 space-y-3">
              <figure>
                <img src={icon} className=" h-16 md:h-28" alt="" />
              </figure>
              <h3 className=" md:text-3xl text-center md:text-left font-extrabold text-[#303030] font-heebo">
                Join the movement <br />{" "}
                <Link className="uppercase underline text-[#303030] font-extrabold">
                  How ?
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgb(0 0 0 / 33%), rgb(5 4 4 / 47%)) , url(${bgimage})`,
          }}
          className="w-full bg-cover bg-center  md:h-[350px] flex items-center justify-center"
        >
          <Link to="#">
            <h2 className="font-semibold text-white md:text-4xl font-anton">
              Support the cause <br />{" "}
              <span className="font-extrabold md:text-6xl">NOW</span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderContactSection;
