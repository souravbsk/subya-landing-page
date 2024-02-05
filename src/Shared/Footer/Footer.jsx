import React from "react";
import { Link } from "react-router-dom";
import startuplogo from "../../assets/footer/startuplogo.png";
import mastercard from "../../assets/payment-icons/mastercard.svg";
import paytm from "../../assets/payment-icons/paytm.svg";
import upi from "../../assets/payment-icons/upi.svg";
import rupay from "../../assets/payment-icons/rupay.svg";
import visa from "../../assets/payment-icons/visa.svg";

import SocialLinks from "../../components/SocialLinks/SocialLinks";
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
          <div className=" backdrop-brightness-75 rounded-3xl text-gray-300 md:px-8 px-3 md:py-12 py-6 grid lg:grid-cols-4 grid-cols-1  gap-4">
            <div>
              <h3 className="md:text-2xl text-lg md:mb-[30px] mb-3 text-white font-bold">
                Who We Are
              </h3>
              <p>
                <strong>Sabhyasha Retail Tech Pvt. Ltd.</strong> <br /> 506, G Block, Utkal
                Vatika, Jharpada Canal <br /> Road, Bhubaneswar – 751006
                <br /> <Link to="tel:+91-8926273115">+91-8926273115</Link>{" "}
                <br />{" "}
                <Link to="mailto:care@sabhyasha.com">care@sabhyasha.com</Link>
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="md:text-2xl text-lg md:mb-[30px] mb-3 text-white font-bold">
                Find Out What We Have
              </h3>
              <p>
                Dhokra, Jewellery Boxes, Wall Decor, Tabletop Decor, Bamboo
                Craft, Pattachitra Painting, Palmleaf Painting, Handbags,
                Bookmarks, Pattachitra Hand Painted Dupatta, Pattachitra Hand
                Painted Saree
              </p>
            </div>
            
            <div>
              <h3 className="md:text-2xl text-lg md:mb-[30px] mb-3 text-white font-bold">
                Find Out What We Have
              </h3>
              <figure className="bg-[#FFFFFF]">
                <img className="w-full h-full" src={startuplogo} alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div className="backdrop-brightness-75 py-7 mt-12">
          <div className="container">
            <ul className="flex md:flex-nowrap  flex-wrap items-center text-white justify-center">
              <li className="mb-2">
                <Link className=" px-3" to="/">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link className=" px-3 border-s" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link className=" px-3 border-s" to="/">
                  Return Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link className=" px-3 border-s" to="/">
                  Shipping Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link className=" px-3 border-s " to="/">
                  Terms and Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link className=" px-3 border-s" to="/">
                  Blog
                </Link>
              </li>
            </ul>
            <div className="flex flex-wrap md:mt-8 mt-3 items-center justify-between gap-3">
              <ul className="flex items-center gap-4">
                <li>
                  <img
                    className="w-12 object-contain h-auto"
                    src={upi}
                    alt=""
                    srcset=""
                  />
                </li>
                <li>
                  <img
                    className="w-16 object-contain h-auto"
                    src={rupay}
                    alt=""
                    srcset=""
                  />
                </li>
                <li>
                  <img
                    className="w-8 object-contain h-auto"
                    src={mastercard}
                    alt=""
                    srcset=""
                  />
                </li>
                <li>
                  <img
                    className="w-12 object-contain h-auto"
                    src={visa}
                    alt=""
                    srcset=""
                  />
                </li>
              </ul>

              <SocialLinks classNameli="bg-white"></SocialLinks>
            </div>
          </div>
        </div>
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
