import React from 'react';

const ProductCard = ({image,title, price, pera}) => {
    return (
        <div className="  bg-white shadow-md rounded-lg ">
        <div className='overflow-hidden'>
          <img
            src={image}
            alt="Product Image"
            className="w-full  h-full mb-4 transition-transform transform  animate-fadeIn hover:scale-105"
          />
        </div>
        <div className="p-8">
          <h3 className="text-2xl capitalize font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{pera}</p>
          {/* <p className="text-[#7A5542] text-xl  font-bold">${price}</p> */}
        </div>
      </div>
    );
};

export default ProductCard;