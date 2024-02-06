import React from "react";
import { Link } from "react-router-dom";

import FooterLink from "./FooterLink";
import startuplogo from "../../assets/footer/startup-logo.webp";
const Footer = () => {
  return (
    <>
      <footer
        data-aos="flip-up"
        className=" overflow-hidden md:rounded-t-[60px] rounded-t-3xl footerimg lg:pt-28 pt-8"
      >
        <div className="container mb-9">
          <div class="  masked-text-wrapper">
            <h2 class="text-default ">Sabhyasha</h2>
            <h2 class="text-underneath ">Sabhyasha</h2>
          </div>
        </div>
        <div className="container lg:max-w-[1380px]">
          <div className=" backdrop-brightness-75 rounded-3xl text-gray-300 md:px-8 px-3 md:py-12 py-6 grid lg:grid-cols-4 grid-cols-1  gap-6">
            <div>
              <h3 className="md:text-2xl text-lg md:mb-[30px] mb-3 text-white font-bold">
                Who We Are
              </h3>
              <p className="">
                <strong>Sabhyasha Retail Tech Pvt. Ltd.</strong> <br /> 506, G
                Block, Utkal Vatika, Jharpada Canal Road, Bhubaneswar – 751006
                <br /> <Link to="tel:+91-8926273115">+91-8926273115</Link>{" "}
                <br />{" "}
                <Link to="mailto:care@sabhyasha.com">care@sabhyasha.com</Link>
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="md:text-2xl text-lg md:mb-[30px] mb-3 text-white font-bold">
                Find Out What We Have
              </h3>
              <p className="">
                Dhokra, Jewellery Boxes, Wall Decor, Tabletop Decor, Bamboo
                Craft, Pattachitra Painting, Palmleaf Painting, Handbags,
                Bookmarks, Pattachitra Hand Painted Dupatta, Pattachitra Hand
                Painted Saree
              </p>
            </div>

            <div>
              <h3 className="md:text-2xl text-lg md:mb-[30px] mb-3 text-white font-bold">
                Recognized By
              </h3>
              <figure>
                <img src={startuplogo} alt="" />
              </figure>
            </div>
          </div>
        </div>
        <FooterLink></FooterLink>
        <div className="my-4 text-center">
          <small className="text-gray-100">
            | Copyright © 2024 Sabhyasha |
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
