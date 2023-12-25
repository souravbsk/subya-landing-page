import React from 'react';
import RightSlider from '../SecondSliderSection/RightSlider';
import GoalSave from '../SecondSliderSection/GoalSave';
import bannerImg from "../../../assets/contact-single.jpg";
import Contactfrom from './Contactfrom';
import contactbanner from "../../../assets/contactimg/contact-img.jpg"
import SocialLink from './SocialLink';

const ContactSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 w-full ">
            <img src={contactbanner} className='md:h-[460px] w-full' alt="" />
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
        <div className="lg:w-1/2 flex items-center justify-center w-full ">
        
        <Contactfrom></Contactfrom>
        
        </div>
      </div>
    );
};

export default ContactSection;