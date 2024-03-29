import React, { useContext } from "react";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import mastercard from "../../assets/payment-icons/mastercard.svg";
import upi from "../../assets/payment-icons/upi.svg";
import rupay from "../../assets/payment-icons/rupay.svg";
import visa from "../../assets/payment-icons/visa.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSideBar } from "../../Redux/features/slices/sidebarSlice";

const FooterLink = () => {
  const dispatch = useDispatch();

  return (
    <div className="backdrop-brightness-75 py-7 mt-12">
      <div className="container">
        <ul className="flex md:flex-nowrap  flex-wrap items-center text-white justify-center">
          <li className="mb-2">
            <button
              onClick={() => dispatch(setSideBar(true))}
              className=" px-3"
            >
              Contact Us
            </button>
          </li>
          <li className="mb-2">
            <Link className=" px-3 border-s" to="/privacy-policy">
              Privacy Policy
            </Link>
          </li>
          <li className="mb-2">
            <Link className=" px-3 border-s" to="/return-policy">
              Return Policy
            </Link>
          </li>
          <li className="mb-2">
            <Link className=" px-3 border-s" to="/shipping-policy">
              Shipping Policy
            </Link>
          </li>
          <li className="mb-2">
            <Link className=" px-3 border-s " to="/term-condition">
              Terms and Conditions
            </Link>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row md:mt-8 mt-3 items-center justify-between gap-3">
          <div className="flex-1">
            <ul className="flex  md:justify-start justify-center items-center gap-4">
              <li>
                <img className="w-12 object-contain h-auto" src={upi} alt="" />
              </li>
              <li>
                <img
                  className="w-16 object-contain h-auto"
                  src={rupay}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-8 object-contain h-auto"
                  src={mastercard}
                  alt=""
                />
              </li>
              <li>
                <img className="w-12 object-contain h-auto" src={visa} alt="" />
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <SocialLinks
              classNameul="md:justify-end justify-center"
              classNameli="bg-white"
            ></SocialLinks>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLink;
