import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const BlogCard = ({ imageUrl, category, title, content, link,date }) => {
  return (
    <div data-aos="flip-left" className="w-full h-auto md:h-[600px] flex flex-col justify-between relative max-w-full bg-white  border rounded-lg hover:shadow-md duration-300 overflow-hidden ">
      <div>
        <img
          src={imageUrl}
          alt="Card img"
          className="object-cover object-center h-60"
        />
        <div className="flex flex-col justify-between px-4 mb-4 pt-6 ">
          <div>
            <Link
              to={link}
              className=" absolute top-4 right-4 mb-4 text-xs font-bold capitalize  bg-black px-2 py-1.5 rounded-full text-white"
            >
              {category}
            </Link>
            <Link
              to="#"
              className="block mb-2 md:mb-4 duration-300 md:text-xl font-black leading-tight hover:underline hover:text-[#7A5542]"
            >
              {title}
            </Link>
            <p className="font-heebo mb-2 md:mb-4 text-[#303030] text-base">
              {content}
            </p>
          </div>
          <div>
            <button
              to={link}
              className=" flex duration-300 items-center gap-2 pb-1 mt-2 text-base font-black text-[#7A5542] uppercase border-b border-transparent hover:border-[#7A5542]"
            >
              Read More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 border-t">
        <small>{date}</small>
      </div>
    </div>
  );
};

export default BlogCard;
