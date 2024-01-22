import React from "react";
import icon from "../../assets/first-section/icon-img.png";

const ProductCard = ({ image, title, price, pera }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="Product Image"
          className="w-full h-full transition-transform transform "
        />
      </div>
      <div className="p-4 text-center  absolute group-hover:opacity-100 shopbg w-full group-hover:bg-[#5D2F18]   opacity-0 transition-opacity top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-xl capitalize text-white font-bold ">{title}</h3>
        {/* <p className="text-gray-100 mb-2">{pera}</p> */}
        {/* <p className="text-[#7A5542] text-xl font-bold">${price}</p> */}
      </div>
    </div>
  );
};

export default ProductCard;
