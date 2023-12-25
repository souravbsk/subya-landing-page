import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import { Link } from "react-router-dom";
import AOS from "aos";
const SliderComponent = ({bgimge1,bgimge2,bgimge3}) => {
    const swiperRef = useRef(null);
    const [index,setIndex] = useState(null)
    const handleSlideChange = (i) => {
      setIndex(i.activeIndex);
    };
  
    useEffect(() => {
      AOS.refresh()
    },[index])
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
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${bgimge1})` }}
              className="md:px-14 px-4 flex items-center justify-center h-screen bg-current bg-no-repeat bg-cover py-9"
            >
              <div className=" space-y-3 md:space-y-5">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-xs  font-heebo font-normal leading-7 text-white"
                >
                  12 april 2023 / Ecology
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="capitalize text-white font-anton  font-extrabold text-4xl md:text-6xl  "
                >
                  Join The Action On white river
                </h2>
                <div data-aos="fade-up" data-aos-duration="3000">
                  <Link className="capitalize text-white font-extrabold text-2xl font-anton underline ">
                    Read More
                  </Link>
                </div>{" "}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${bgimge2})` }}
              className="md:px-14 px-4 flex items-center justify-center h-screen bg-current bg-no-repeat bg-cover py-9"
            >
              <div className=" space-y-3 md:space-y-5">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-xs  font-heebo font-normal leading-7 text-white"
                >
                  12 april 2023 / Ecology
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="capitalize text-white font-anton  font-extrabold text-4xl md:text-6xl  "
                >
                  Join The Action On white river
                </h2>
                <div data-aos="fade-up" data-aos-duration="3000">
                  <Link className="capitalize text-white font-extrabold text-2xl font-anton underline ">
                    Read More
                  </Link>
                </div>{" "}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${bgimge3})` }}
              className="md:px-14 px-4 flex items-center justify-center h-screen bg-current bg-no-repeat bg-cover py-9"
            >
              <div className=" space-y-3 md:space-y-5">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-xs  font-heebo font-normal leading-7 text-white"
                >
                  12 april 2023 / Ecology
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="capitalize text-white font-anton  font-extrabold text-4xl md:text-6xl  "
                >
                  Join The Action On white river
                </h2>
                <div data-aos="fade-up" data-aos-duration="3000">
                  <Link className="capitalize text-white font-extrabold text-2xl font-anton underline ">
                    Read More
                  </Link>
                </div>{" "}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  
};

export default SliderComponent;