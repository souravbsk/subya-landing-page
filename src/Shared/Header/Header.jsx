import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import blacklogo from "../../assets/shabasa-logo.svg";
import NavSideBar from "../NavSideBar/NavSideBar";
import { MdOutlineClose } from "react-icons/md";
import { Link as AnchorLink } from "react-scroll";

const Header = () => {
  const [isSidebar, setSideBar] = useState(false);
  const [isNavShow, setNavShow] = useState(false);

  return (
    <header data-aos="fade-down" className="fixed left-0 right-0  top-0 z-50">
      <nav className="flex bg-white shadow-md rounded-b-3xl backdrop-blur-2xl py-4 px-4 lg:px-14 md:px-8  items-center justify-between">
        <div className="flex lg:w-auto w-full gap-4 items-center justify-between">
          <div className="md:inline  flex items-center justify-between w-full ">
            <Link className="block w-full" to="/">
              <img
                className="h-[68.73px]  w-[187.5px]"
                src={blacklogo}
                alt=""
              />
            </Link>
            <button
              onClick={() => setNavShow(!isNavShow)}
              className="md:hidden block"
            >
              {isNavShow ? (
                <MdOutlineClose size={26} className="font-bold" />
              ) : (
                <FaBars size={26}></FaBars>
              )}
            </button>
          </div>

          <ul
            className={`flex md:w-auto w-full md:bg-transparent bg-white md:static absolute md:flex-row  flex-col md:items-center  gap-2 left-0 md:px-0 lg:px-0 px-14 ${
              isNavShow ? "top-24" : "-top-[500px]"
            }`}
          >
            <li className="text-[#303030] relative px-3 py-5 headernavlink  tracking-widest font-anton font-semibold leading-7 text-base ">
              <AnchorLink
                offset={-100}
                spy={true}
                smooth={true}
                duration={1000}
                to="/"
              >
                Home
              </AnchorLink>
            </li>
            <li className="text-[#303030] relative px-3 py-5 headernavlink  tracking-widest font-anton font-semibold leading-7 text-base ">
              <AnchorLink
                offset={500}
                spy={true}
                smooth={true}
                duration={1000}
                to="journey"
              >
                Journey
              </AnchorLink>
            </li>
            <li className="text-[#303030] relative px-3 py-5 headernavlink  tracking-widest font-anton font-semibold leading-7 text-base ">
              <AnchorLink
                offset={-100}
                spy={true}
                smooth={true}
                duration={1000}
                to="vision"
              >
                Our Vision
              </AnchorLink>
            </li>

            {/* highLightlink */}
            <li className="text-[#6D432F]  relative   px-3 py-5  headernavlink  tracking-wide font-anton font-semibold leading-7 text-base ">
             

              <AnchorLink
                offset={-100}
                spy={true}
                smooth={true}
                duration={1000}
                to="artisan-wizard"
              >
                Artisans’ Wizard

              </AnchorLink>



            </li>
            <li className="text-[#303030]  relative z-50 px-3 py-5 headernavlink  tracking-widest font-anton font-semibold leading-7 text-base">
              <AnchorLink
                offset={-100}
                spy={true}
                smooth={true}
                duration={1000}
                to="shop"
              >
                Shop
              </AnchorLink>
            </li>
            <li className="text-[#303030] relative px-3 py-5 headernavlink  tracking-widest font-anton font-semibold leading-7 text-base">
              <AnchorLink
                offset={-100}
                spy={true}
                smooth={true}
                duration={1000}
                to="blog"
              >
                Blog
              </AnchorLink>
            </li>
          </ul>
        </div>
        <ul className="lg:flex hidden items-center gap-6">
          <li></li>
          <li>
            <button
              className="text-[#303030] relative px-3 py-5 headernavlink  tracking-widest font-anton font-semibold leading-7 text-base "
              onClick={() => setSideBar(!isSidebar)}
            >
              <>Contact Us</>
            </button>
          </li>
        </ul>
      </nav>

      {/* side bar  */}

      <div
        className={`fixed top-0  duration-500 h-screen w-1/4 bg-[#F6F6F6] ${
          isSidebar ? "right-0" : "-right-[600px]"
        }`}
      >
        <NavSideBar isSidebar={isSidebar} setSideBar={setSideBar}></NavSideBar>
      </div>
    </header>
  );
};

export default Header;

// <div className="absolute -bottom-2 left-0 w-0 bg-[#303030] h-1 transition-all  group-hover:w-full"></div>
