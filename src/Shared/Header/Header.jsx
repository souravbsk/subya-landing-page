import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import blacklogo from "../../assets/shabasa-logo.svg";
import NavSideBar from "../NavSideBar/NavSideBar";
import { MdOutlineClose } from "react-icons/md";
const Header = () => {
  const [isSidebar, setSideBar] = useState(false);
  const [isNavShow, setNavShow] = useState(false);
  
  return (
    <header className="sticky top-0 z-50">
      <nav className="flex bg-white py-4 px-4 md:px-14  items-center justify-between">
        <div className="flex lg:w-auto w-full gap-4 items-center justify-between">
          <div className="md:inline  flex items-center justify-between w-full ">
            <Link className="block w-full" to="/">
              <img className="h-[68.73px]  w-[187.5px]" src={blacklogo} alt="" />
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
            className={`flex md:w-auto w-full md:bg-transparent bg-white md:static absolute md:flex-row  flex-col md:items-center  gap-2 left-0 md:px-0 px-14 ${
              isNavShow ? "top-24" : "-top-[500px]"
            }`}
          >
            <li>
              <NavLink
                className="text-[#303030] px-2 py-2 headernavlink tracking-widest font-anton font-semibold leading-7 text-base "
                to="/"
                >
                Home
                
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#303030] px-2 py-2 headernavlink tracking-widest font-anton font-semibold leading-7 text-base "
                to="/journey"
              >
                Journey
                
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#303030] px-2 py-2 headernavlink tracking-widest font-anton font-semibold leading-7 text-base "
                to="/donations"
                >
                Our Vision
                
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#303030] px-2 py-2 headernavlink tracking-widest font-anton font-semibold leading-7 text-base "
                to="/events"
                >
                Solution
                
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#6D432F] px-2 py-2 headernavlink tracking-widest font-anton font-semibold leading-7 text-base "
                to="/blog"
                >
                Artisan’s Wizard
                
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#303030] px-2 py-2 headernavlink tracking-widest font-anton font-semibold leading-7 text-base "
                to="/shop"
              >
                Shop
                
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="lg:flex hidden items-center gap-6">
          <li></li>
          <li>
            <button
              className="text-[#303030] px-2 py-2 headernavlink tracking-widest font-anton font-semibold leading-7 text-base "
              onClick={() => setSideBar(!isSidebar)}
              >
              <>
                Contact Us
              </>
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