import React from "react";
import RightSlider from "../SecondSliderSection/RightSlider";
import GoalSave from "../SecondSliderSection/GoalSave";
import bannerImg from "../../../assets/contact-single.jpg";
import Contactfrom from "./Contactfrom";
import contactbanner from "../../../assets/contactimg/contact-img.jpg";
import SocialLink from "./SocialLink";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="lg:w-[70%] w-full ">
        {/* <img src={contactbanner} className='md:h-[460px] w-full' alt="" /> */}
        <div className="p-20  bg-[#7A5542]">
          <div className=" text-center relative bg-white px-20 py-20 rounded-3xl">
            <div className="absolute top-14">
              <FaQuoteLeft className="text-[#7A5542]" size={36} />
            </div>
            <h2 className="text-[#303030] font-extrabold font-anton leading-tight text-3xl mb-4">
              Vision + Mission
            </h2>
            <p>
              In every artisan’s smile, in every crafted masterpiece, we see the
              fulfilment of our dream – a dream where every hidden gem of
              India’s vast artistic landscape is brought into the limelight,
              celebrated, and cherished by the world.
            </p>
            <div className="mt-10">
              <button className="bg-[#7A5542] px-5 pt-2 pb-3">
                <Link
                  to="/our-mission"
                  className="uppercase font-anton underline font-extrabold text-white"
                >
                  Read more
                </Link>
              </button>
            </div>
            <div className="absolute bottom-14 right-28">
            <FaQuoteRight className="text-[#7A5542]" size={36} />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col-reverse md:flex-row">
          <div className=" flex-1">
            <img src={bannerImg} className="w-full h-72 md:h-[390px]" alt="" />
          </div>
          <div className=" flex-1 ">
            <div className="py-16 flex bg-white h-full items-center justify-center  px-8 md:px-20">
              <SocialLink></SocialLink>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[30%] flex items-center justify-center w-full ">
        <Contactfrom></Contactfrom>
      </div>
    </div>
  );
};

export default ContactSection;
