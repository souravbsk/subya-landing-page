import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const SocialLinks = ({ classNameli,classNameul }) => {
  return (
    <ul className={`flex   items-center gap-3 text-2xl ${classNameul}`}>
      <Link target="_blank" to="https://www.facebook.com/sabhyasha">
        <li className={`${classNameli} cursor-pointer md:p-2 p-1.5  rounded-full`}>
          <FaFacebook color="#4D68A1" />
        </li>
      </Link>
      <Link target="_blank" to="https://twitter.com/sabhyasha">
        <li className={`${classNameli} cursor-pointer md:p-2 p-1.5  rounded-full`}>
          <FaTwitter color="#32A9F2" />
        </li>
      </Link>
      <Link target="_blank" to="https://www.youtube.com/@sabhyasha">
        <li className={`${classNameli} cursor-pointer md:p-2 p-1.5  rounded-full`}>
          <FaYoutube color="#D13534" />
        </li>
      </Link>
      <Link target="_blank" to="https://in.pinterest.com/sabhyashastore/">
        <li className={`${classNameli} cursor-pointer md:p-2 p-1.5  rounded-full`}>
          <FaPinterest color="#C21F31" />
        </li>
      </Link>
      <Link target="_blank" to="https://www.instagram.com/sabhyasha_art/">
        <li className={`${classNameli} cursor-pointer md:p-2 p-1.5  rounded-full`}>
          <FaInstagram color="#D93D83" />
        </li>
      </Link>
      <Link target="_blank" to="https://www.linkedin.com/company/sabhyasha/">
        <li className={`${classNameli} cursor-pointer md:p-2 p-1.5  rounded-full`}>
          <FaLinkedinIn color="#1883BB" />
        </li>
      </Link>
    </ul>
  );
};

export default SocialLinks;
