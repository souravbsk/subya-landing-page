import React from "react";
import Marquee from "react-fast-marquee";
import { LuArrowUpRight } from "react-icons/lu";
import icon from "../../../assets/first-section/icon-img.png";

const NoticeSlider = () => {
  return (
    <div className="bg-[#FFE2DA] py-8 md:py-16">
      <Marquee speed={150}>
        <div className="flex overflow-hidden mx-3 items-center">
          <p className="uppercase text-center flex gap-10 items-center   text-[#7A5542] tracking-wide	 font-anton text-6xl md:text-8xl font-extrabold">
            <span>BRINGING <br className="block md:hidden" /> THE CHANGE</span>{" "}
            <img className="h-28 w-28 object-contain" src={icon} alt="" />
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default NoticeSlider;
