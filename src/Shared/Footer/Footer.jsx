import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/Sabhyasha-horizontal-01.png";
const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container grid grid-cols-4">
        <div>
          <h3 className="text-2xl mb-[30px] text-[#272626] font-bold">Who We Are</h3>
          <p>
            Sabhyasha Retail Tech Pvt. Ltd. 506, G Block, Utkal Vatika Jharpada
            Canal Road, Bhubaneswar – 751006 +91-8926273115 care@sabhyasha.com
          </p>
        </div>
        <div className="col-span-2">
          <h3 className="text-2xl mb-[30px] text-[#272626] font-bold">
            Find Out What We Have
          </h3>
          <p>
            Dhokra, Jewellery Boxes, Wall Decor, Tabletop Decor, Bamboo Craft,
            Pattachitra Painting, Palmleaf Painting, Handbags, Bookmarks,
            Pattachitra Hand Painted Dupatta, Pattachitra Hand Painted Saree
          </p>
        </div>
        <div>
        <h3 className="text-2xl mb-[30px] text-[#272626] font-bold">
            Find Out What We Have
          </h3>
          <figure>
            <img src="" alt="" />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
