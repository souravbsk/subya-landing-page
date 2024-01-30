import React from "react";
import BannerSlider from "./BannerSlider";
import icon from "../../../assets/first-section/icon-img.png";
import { Link } from "react-router-dom";
import bgimage from "../../../assets/first-section/bg.jpeg";
const SliderHeroSection = () => {
  return (
    <div className="flex flex-col  lg:flex-row justify-between">
      <div className="lg:w-[70%] w-full ">
        <BannerSlider></BannerSlider>
      </div>
      <div className="lg:w-1/2 flex md:flex-col w-full ">
        <div className="w-full flex flex-col md:flex-row">
          <div className=" space-y-4 flex-1 bg-[#F6F6F6]  ">
            <div className="py-6 md:py-16 flex flex-col justify-center items-center  px-4 md:px-16 space-y-3">
              <figure data-aos="zoom-in">
                <img src={icon} className=" h-16 md:h-24" alt="" />
              </figure>
              <h3 data-aos="fade-left" className="  md:text-3xl font-anton text-center md:text-left font-extrabold text-[#303030]">
                Join the movement <br />{" "}
                <Link className="font-extrabold md:text-6xl underline">
                  How?
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div
        data-aos="flip-up"
          style={{
            backgroundImage: `linear-gradient(rgb(0 0 0 / 33%), rgb(5 4 4 / 47%)) , url(${bgimage})`,
          }}
          className="w-full bg-cover bg-center  md:h-[350px] flex items-center justify-center"
        >
          <Link to="#">
            <h2  className="font-semibold text-white md:text-4xl font-anton">
              Support the cause <br />{" "}
              <span className="font-extrabold md:text-6xl">NOW</span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderHeroSection;
