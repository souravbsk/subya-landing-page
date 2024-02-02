import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Button from "../../../components/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css/navigation";
import { Navigation, Mousewheel } from "swiper/modules";
import MissionVisionSliderBox from "../../../components/MissionVisionSliderBox/MissionVisionSliderBox";

const MissionVissionSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className=" w-full ">
        <div className="px-4 py-8 md:p-20  bg-[#7A5542]">
          <Swiper
            mousewheel={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={true}
            modules={[Navigation, Mousewheel]}
            className="mySwiper rounded-3xl bg-white"
          >
            <SwiperSlide>
              <MissionVisionSliderBox
                title="Our Vision"
                pera="To be the catalyst for transforming India into a global handicraft powerhouse, where every artisan is empowered, every craft is cherished, and Indian heritage crafts are celebrated and revered on the world stage."
              ></MissionVisionSliderBox>
            </SwiperSlide>
            <SwiperSlide>
              <MissionVisionSliderBox
                title="Our Mission"
                pera="At Sabhyasha, we embark on a mission to elevate India's handloom and handicraft heritage to global acclaim. Through technology, we empower Indian artisans, striving to secure India's rightful position on the world stage in the global handicraft market."
              ></MissionVisionSliderBox>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MissionVissionSection;
