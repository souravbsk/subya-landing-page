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
    <div className="border-l  px-14 pb-9 pt-32">
      <div className="text-right" onClick={() => setSideBar(false)}>
        <button>
          <MdOutlineClose size={26} className="font-bold" />
        </button>
      </div>
      <div>
        <h1 className="text-5xl font-anton font-extrabold text-[#303030] mb-3">
          HELLO!
        </h1>
        <p className="text-base font-heebo text-[#303030]">
         
        </p>
        <h3 className="text-xl py-8 font-heebo font-bold text-[#303030]">
          Our info
        </h3>
        <ul className=" space-y-4">
          <li>
            <Link>+91-8926273115</Link>
          </li>
          <li>
            <Link>care@sabhyasha.com</Link>
          </li>
          <li>
            <p>
              Sabhyasha Retail Tech Pvt. Ltd. 506, G Block, Utkal Vatika
              Jharpada Canal Road, Bhubaneswar – 751006
            </p>
          </li>
        </ul>
        <h3 className="text-xl py-6 font-heebo font-bold text-[#303030]">
          Follow us
        </h3>
        <SocialLinks classNameli="backdrop-brightness-90"></SocialLinks>
      </div>
    </div>
  );
};

export default NavSideBar;
