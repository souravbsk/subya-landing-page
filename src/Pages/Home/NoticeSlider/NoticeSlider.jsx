import React from "react";
import Marquee from "react-fast-marquee";
import { LuArrowUpRight } from "react-icons/lu";

const NoticeSlider = () => {
  return (
    <div className="bg-[#FFE2DA] py-16">
      <Marquee speed={150}>
        <div className="flex overflow-hidden items-center">
          <p className="uppercase text-[#FF9370] flex items-center font-anton text-8xl md:text-[170px] font-extrabold">
            Volunteer{" "}
            <span>
              <LuArrowUpRight />
            </span>
          </p>
          <p className="uppercase text-[#FF9370] flex items-center font-anton text-8xl md:text-[170px] font-extrabold">
            Volunteer{" "}
            <span>
              <LuArrowUpRight />
            </span>
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default NoticeSlider;
