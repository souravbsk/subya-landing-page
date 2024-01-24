import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link, text, className }) => {
  return (
    <>
      <Link
        to={link}
        class="relative hover:-top-0.5 shadow-custom duration-300 shadow-lg inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#7A5542] border-2 border-[#7A5542] rounded-full hover:text-white group hover:bg-gray-50"
      >
        <span class="absolute left-0 block w-full h-0 transition-all bg-[#7A5542] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
         
        </span>
        <span class="relative font-semibold">{text}</span>
      </Link>
    </>
  );
};

export default Button;
