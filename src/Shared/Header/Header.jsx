import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import blacklogo from "../../assets/Sabhyasha-Vertical-01.png";
import NavSideBar from "../NavSideBar/NavSideBar";
import { MdOutlineClose } from "react-icons/md";
const Header = () => {
  const [isSidebar, setSideBar] = useState(false);
  const [isNavShow,setNavShow] = useState(false);


  return (
    <header className="relative">
      <nav className="flex bg-white py-6 px-4 md:px-14  items-center justify-between">
        <div className="flex lg:w-auto w-full gap-12 items-center justify-between">
          <div className=" flex items-center justify-between w-full">
            <Link to="/">
              <img className="w-28" src={blacklogo} alt="" />
            </Link>
            <button onClick={() => setNavShow(!isNavShow)} className="md:hidden block">
              {
                isNavShow ? 
          <MdOutlineClose size={26} className="font-bold" />
          :
          <FaBars size={26}></FaBars>

              }
            </button>
          </div>

          <ul className={`flex md:w-auto w-full md:bg-transparent bg-white md:static absolute md:flex-row duration-300 flex-col md:items-center md:gap-4 gap-2 left-0 md:px-0 px-14 ${isNavShow ? "top-24" : "-top-[500px]"}`}>
            <li>
              <NavLink
                className="text-[#303030] font-anton font-extrabold leading-7 text-xl relative group"
                to="/"
              >
                Home
                <div className="absolute bottom-0 left-0 w-0 bg-[#303030] h-1 transition-all duration-300 group-hover:w-full"></div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#303030] font-anton font-extrabold leading-7 text-xl relative group"
                to="/pages"
              >
                Pages
                <div className="absolute bottom-0 left-0 w-0 bg-[#303030] h-1 transition-all duration-300 group-hover:w-full"></div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#303030] font-anton font-extrabold leading-7 text-xl relative group"
                to="/donations"
              >
                Donations
                <div className="absolute bottom-0 left-0 w-0 bg-[#303030] h-1 transition-all duration-300 group-hover:w-full"></div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#303030] font-anton font-extrabold leading-7 text-xl relative group"
                to="/events"
              >
                Events
                <div className="absolute bottom-0 left-0 w-0 bg-[#303030] h-1 transition-all duration-300 group-hover:w-full"></div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#303030] font-anton font-extrabold leading-7 text-xl relative group"
                to="/blog"
              >
                Blog
                <div className="absolute bottom-0 left-0 w-0 bg-[#303030] h-1 transition-all duration-300 group-hover:w-full"></div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#303030] font-anton font-extrabold leading-7 text-xl relative group"
                to="/shop"
              >
                Shop
                <div className="absolute bottom-0 left-0 w-0 bg-[#303030] h-1 transition-all duration-300 group-hover:w-full"></div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#303030] font-anton font-extrabold leading-7 text-xl relative group"
                to="/portfolio"
              >
                Portfolio
                <div className="absolute bottom-0 left-0 w-0 bg-[#303030] h-1 transition-all duration-300 group-hover:w-full"></div>
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="lg:flex hidden items-center gap-6">
          <li>
            <button>
              <FaSearch />
            </button>
          </li>
          <li>
            <Link className="text-[#303030] font-anton font-extrabold leading-7 text-xl relative group">
              Donate Now
              <div className="absolute -bottom-2 left-0 w-0 bg-[#303030] h-1 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </li>
          <li>
            <button onClick={() => setSideBar(!isSidebar)}>
              <FaBars size={26} />
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
