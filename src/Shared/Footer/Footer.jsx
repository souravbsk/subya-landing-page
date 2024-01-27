import React from "react";
import { Link } from "react-router-dom";
import startuplogo from "../../assets/footer/startuplogo.png";
import mastercard from "../../assets/payment-icons/mastercard.svg";
import paytm from "../../assets/payment-icons/paytm.svg";
import upi from "../../assets/payment-icons/upi.svg";
import bhim from "../../assets/payment-icons/bhim.svg";
import visa from "../../assets/payment-icons/visa.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer
        data-aos="flip-up"
        className=" overflow-hidden rounded-t-[60px] footerimg pt-28"
      >
        <div className="container mb-9">
          <div class="  masked-text-wrapper">
            <h2 class="text-default ">Sabhyasha</h2>
            <h2 class="text-underneath ">Sabhyasha</h2>
          </div>
        </div>
        <div className="container">
          <div className=" backdrop-brightness-75 rounded-3xl text-gray-300 p-12 grid grid-cols-4  gap-5">
            <div>
              <h3 className="text-2xl mb-[30px] text-white font-bold">
                Who We Are
              </h3>
              <p>
                Sabhyasha Retail Tech Pvt. Ltd. 506, G Block, Utkal Vatika
                Jharpada Canal Road, Bhubaneswar – 751006 +91-8926273115
                care@sabhyasha.com
              </p>
            </div>
            <div className="col-span-2">
              <h3 className="text-2xl mb-[30px] text-white font-bold">
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
              <h3 className="text-2xl mb-[30px] text-white font-bold">
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
            <ul className="flex items-center text-white justify-center">
              <li>
                <Link className="py-2 px-3" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="py-2 px-3 border-s" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="py-2 px-3 border-s" to="/">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link className="py-2 px-3 border-s" to="/">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link className="py-2 px-3 border-s" to="/">
                  Terms and Policy
                </Link>
              </li>
              <li>
                <Link className="py-2 px-3 border-s" to="/">
                  Blog
                </Link>
              </li>
            </ul>
            <div className="flex mt-8 items-center justify-between gap-3">
              <ul className="flex items-center gap-4">
                <li>
                  <img
                    className="w-12 object-contain h-auto"
                    src={mastercard}
                    alt=""
                    srcset=""
                  />
                </li>
                <li>
                  <img
                    className="w-12 object-contain h-auto"
                    src={paytm}
                    alt=""
                    srcset=""
                  />
                </li>
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
                    className="w-12 object-contain h-auto"
                    src={bhim}
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
              <ul className="flex  items-center gap-3 text-2xl">
                <li className="bg-white px-2 py-2 rounded-full">
                  <Link to="#">
                    <FaFacebook color="#4D68A1" />
                  </Link>
                </li>
                <li className="bg-white px-2 py-2 rounded-full">
                  <Link to="#">
                    <FaTwitter color="#32A9F2" />
                  </Link>
                </li>
                <li className="bg-white px-2 py-2 rounded-full">
                  <Link to="#">
                    <FaYoutube color="#D13534" />
                  </Link>
                </li>
                <li className="bg-white px-2 py-2 rounded-full">
                  <Link to="#">
                    <FaPinterest color="#C21F31" />
                  </Link>
                </li>
                <li className="bg-white px-2 py-2 rounded-full">
                  <Link to="#">
                    <FaInstagram color="#D93D83" />
                  </Link>
                </li>
                <li className="bg-white px-2 py-2 rounded-full">
                  <Link to="#">
                    <FaLinkedinIn color="#1883BB" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-4 text-center">
          <small className="text-gray-100">
            Copyright © 2024 Sabhyasha | Powered by Sabhyasha. All Rights
            Reserved.
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
