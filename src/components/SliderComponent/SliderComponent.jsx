import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import { Link } from "react-router-dom";
import AOS from "aos";
const SliderComponent = ({ bgimge1, bgimge2, bgimge3, bgimge4 }) => {
  const swiperRef = useRef(null);
  const [index, setIndex] = useState(null);
  const handleSlideChange = (i) => {
    setIndex(i.activeIndex);
  };


  // linear-gradient(rgb(0 0 0 / 33%), rgb(5 4 4 / 47%)),

  return (
    <>
      <Swiper
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper relative h-72 md:h-full"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: ` url(${bgimge1})`,
            }}
            className=" flex items-center justify-center h-full bg-current bg-no-repeat bg-cover py-9"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: ` url(${bgimge2})`,
            }}
            className=" flex items-center justify-center h-full bg-current bg-no-repeat bg-cover py-9"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: ` url(${bgimge3})`,
            }}
            className=" flex items-center justify-center h-full bg-current bg-no-repeat bg-cover py-9"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: ` url(${bgimge4})`,
            }}
            className=" flex items-center justify-center h-full bg-current bg-no-repeat bg-cover py-9"
          ></div>
        </SwiperSlide>
        <div className=" flex items-end absolute bg-[rgb(0 0 0 / 60%)] md:px-20 px-4 top-0 z-50 left-0 right-0 bottom-0 w-full space-y-3 md:space-y-5">
          <div>
            <h2
              data-aos="fade-up"
              className="capitalize mb-3 text-white font-anton  font-semibold text-xl md:text-7xl  "
            >
              Unlocking e-commerce <br /> for artisans with 
              <span className="font-extrabold">ONDC</span>
            </h2>
            <div className="mb-9 mt-6">
              <Link className="capitalize text-white font-bold md:text-2xl font-anton underline ">
                Read More
              </Link>
              
            </div>{" "}
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default SliderComponent;
