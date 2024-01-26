import React from "react";
import { Link } from "react-router-dom";
import startuplogo from "../../assets/footer/startuplogo.png";
const Footer = () => {
  return (
    <>
    
    <footer className=" rounded-t-[60px] footerimg py-28 ">
      <div className="container mb-9">
      <div class="  masked-text-wrapper">
        <h2 class="text-default ">Sabhyasha</h2>
        <h2 class="text-underneath ">Sabhyasha</h2>
      </div>
      </div>
      <div className="container">
      <div className=" backdrop-brightness-95 rounded-3xl text-gray-300 p-12 grid grid-cols-4  gap-5">
        <div>
          <h3 className="text-2xl mb-[30px] text-white font-bold">
            Who We Are
          </h3>
          <p>
            Sabhyasha Retail Tech Pvt. Ltd. 506, G Block, Utkal Vatika Jharpada
            Canal Road, Bhubaneswar – 751006 +91-8926273115 care@sabhyasha.com
          </p>
        </div>
        <div className="col-span-2">
          <h3 className="text-2xl mb-[30px] text-white font-bold">
            Find Out What We Have
          </h3>
          <p>
            Dhokra, Jewellery Boxes, Wall Decor, Tabletop Decor, Bamboo Craft,
            Pattachitra Painting, Palmleaf Painting, Handbags, Bookmarks,
            Pattachitra Hand Painted Dupatta, Pattachitra Hand Painted Saree
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
     
    </footer>
    </>
  );
};

export default Footer;
