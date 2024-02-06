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
      <div className="lg:w-1/2 flex lg:flex-col md:flex-row w-full ">
        <div className="flex-1 flex flex-col md:flex-row">
          <div className=" space-y-4 flex-1 flex items-center justify-center bg-[#F6F6F6]  ">
            <div className="py-6 lg:py-16 flex flex-col justify-center items-center  px-4 md:px-10 space-y-3">
              <figure data-aos="zoom-in">
                <img src={icon} className=" h-12 md:h-24" alt="" />
              </figure>
              <h3
                data-aos="fade-left"
                className=" text-xl md:text-4xl font-anton text-center lg:text-left font-semibold text-[#303030]"
              >
                Join the movement <br />{" "}
                <Link className="font-extrabold  underline">
                  How?
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div
            data-aos="flip-up"
            style={{
              backgroundImage: `url(${bgimage})`,
            }}
            className=" flex-1 bg-cover bg-center md:h-full h-full md:py-24 py-16 md:px-4 px-2 flex items-center justify-center"
          >
            <Link to="#">
              <h2 className="font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white sm:text-2xl text-xl md:text-5xl font-anton">
                Support the cause <br className="md:block hidden" />
                <span className="font-extrabold md:text-6xl">NOW</span>
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHeroSection;
