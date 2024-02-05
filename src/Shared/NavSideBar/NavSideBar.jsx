import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

const NavSideBar = ({ isSidebar, setSideBar }) => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 90;
      if (scrollCheck !== 0 && isSidebar) {
        setTimeout(() => {
          setSideBar(false);
        }, 100);
      }
    });
  });

  return (
    <div className="border-l  md:px-14 px-4 pb-9 pt-20">
      <div className="text-right" onClick={() => setSideBar(false)}>
        <button>
          <MdOutlineClose size={26} className="font-bold" />
        </button>
      </div>
      <div>
        <h1 className="md:text-5xl text-4xl font-anton font-extrabold text-[#303030] mb-3">
          HELLO!
        </h1>
        <p className="text-base font-heebo text-[#303030]"></p>
        <h3 className="md:text-xl text-lg py-4 font-heebo font-bold text-[#303030]">
          Contact Us
        </h3>
        <ul className=" space-y-2">
          <li>
            <p>
              <strong>Sabhyasha Retail Tech Pvt. Ltd.</strong> 506, G Block, Utkal Vatika
              Jharpada Canal Road, Bhubaneswar – 751006
            </p>
          </li>
          <li>
            <Link>+91-8926273115</Link>
          </li>
          <li>
            <Link>care@sabhyasha.com</Link>
          </li>
        </ul>
        <h3 className="text-xl py-6 font-heebo font-bold text-[#303030]">
          Follow us
        </h3>
        <SocialLinks classNameul="md:flex-nowrap flex-wrap  " classNameli="backdrop-brightness-90 "></SocialLinks>
      </div>
    </div>
  );
};

export default NavSideBar;
