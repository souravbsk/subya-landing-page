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
      <div className=" w-full ">
        <div className="p-4 md:p-20  bg-[#7A5542]">
          <div className=" text-center relative bg-white p-8 md:py-20 md:px-44 rounded-3xl">
            <div className="absolute top-8 left-3 md:top-14 md:left-28 opacity-50 text-xl md:text-4xl ">
              <FaQuoteLeft className="text-[#7A5542]" />
            </div>
            <h2 className="text-[#303030] font-extrabold font-anton  text-xl md:text-3xl mb-3 md:mb-7">
            Our Mission & Vision
            </h2>
            <p>
              In every artisan’s smile, in every crafted masterpiece, we see the
              fulfilment of our dream – a dream where every hidden gem of
              India’s vast artistic landscape is brought into the limelight,
              celebrated, and cherished by the world.
            </p>
            <div className=" mt-4 md:mt-10">
              <button className="bg-[#7A5542] px-5 pt-2 pb-3">
                <Link
                  to="/our-mission"
                  className="uppercase font-anton underline font-extrabold text-white"
                >
                  Read more
                </Link>
              </button>
            </div>
            <div className="absolute bottom-8 md:bottom-14 right-3 md:right-28 opacity-50 text-xl md:text-4xl">
            <FaQuoteRight className="text-[#7A5542] "  />
            </div>
          </div>
        </div>

    
      </div>
      
    </div>
  );
};

export default ContactSection;
