import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

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
          DoGood theme is especially made for charities & fundraising. Making
          the WP world a better place!
        </p>
        <h3 className="text-xl py-8 font-heebo font-bold text-[#303030]">
          Our info
        </h3>
        <ul className="pr-16 space-y-4">
          <li>
            <Link>+00112234445</Link>
          </li>
          <li>
            <Link>dogood@qodeinteractive.com</Link>
          </li>
          <li>
            <p>23 Fridderich Moulin Rode, Vienna AU</p>
          </li>
        </ul>
        <h3 className="text-xl py-6 font-heebo font-bold text-[#303030]">
          Follow us
        </h3>
        <ul className="flex items-center gap-6">
            <li><FaFacebook></FaFacebook></li>
            <li><FaTwitter></FaTwitter></li>
            <li><FaInstagram></FaInstagram></li>
        </ul>

      </div>
    </div>
  );
};

export default NavSideBar;
