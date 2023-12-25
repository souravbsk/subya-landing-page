import React from "react";
import BannerSlider from "./BannerSlider";
import icon from "../../../assets/h2-icon1.png";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/herosingle.jpg";
import JoinOurTeam from "./JoinOurTeam";
const SliderContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="lg:w-1/2 w-full ">
        <BannerSlider></BannerSlider>
      </div>
      <div className="lg:w-1/2 w-full ">
        <div className="w-full flex flex-col md:flex-row">
          <div className=" space-y-4 flex-1 ">
            <div className="py-16  px-8 md:px-16 space-y-3">
              <img src={icon} alt="" />
              <h3 className="text-2xl font-extrabold text-[#303030] font-heebo">
                Lend a hand
              </h3>
              <p className="text-base text-[#303030] font-heebo">
                No has inermis vivendo qui corpora perfecto summo.
              </p>

              <div>
                <Link className="uppercase text-lg underline text-[#303030] font-extrabold">
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex-1">
            <img src={bannerImg} className="w-full h-[390px]" alt="" />
          </div>
        </div>
        <JoinOurTeam></JoinOurTeam>
      </div>
    </div>
  );
};

export default SliderContactSection;
