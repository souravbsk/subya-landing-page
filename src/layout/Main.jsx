import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Shared/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#F6F6F6] overflow-hidden">
      <Header></Header>
      <div className="mt-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ScrollToTop
        className="!rounded-full flex items-center !text-[#7A5542] justify-center !bg-[#F9EBE0]"
        viewBox="0 0 24 24"
        svgPath="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z"
        smooth
      />
    </div>
  );
};

export default Main;
