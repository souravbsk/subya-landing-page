import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const SocialLink = () => {
  return (
    <ul className="grid grid-cols-2 gap-12 place-items-center">
      <li>
        <Link to="/">
          <FaFacebookF size={50}></FaFacebookF>
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaLinkedinIn size={50}></FaLinkedinIn>
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaInstagram size={50}></FaInstagram>
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaTwitter size={50}></FaTwitter>
        </Link>
      </li>
    </ul>
  );
};

export default SocialLink;
