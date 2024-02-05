import React, { useContext } from "react";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import mastercard from "../../assets/payment-icons/mastercard.svg";
import paytm from "../../assets/payment-icons/paytm.svg";
import upi from "../../assets/payment-icons/upi.svg";
import rupay from "../../assets/payment-icons/rupay.svg";
import visa from "../../assets/payment-icons/visa.svg";
import { Link } from "react-router-dom";
import { SideBarContext } from "../../Context/SideBarProvider";
const FooterLink = () => {
  const { isSidebar, setSideBar } = useContext(SideBarContext);

  return (
    <div className="backdrop-brightness-75 py-7 mt-12">
      <div className="container">
        <ul className="flex md:flex-nowrap  flex-wrap items-center text-white justify-center">
          <li className="mb-2">
            <Link
              onClick={() => setSideBar(!isSidebar)}
              className=" px-3"
              to="/"
            >
              Contact Us
            </Link>
          </li>
          <li className="mb-2">
            <Link className=" px-3 border-s" to="/">
              Privacy Policy
            </Link>
          </li>
          <li className="mb-2">
            <Link className=" px-3 border-s" to="/">
              Return Policy
            </Link>
          </li>
          <li className="mb-2">
            <Link className=" px-3 border-s" to="/">
              Shipping Policy
            </Link>
          </li>
          <li className="mb-2">
            <Link className=" px-3 border-s " to="/">
              Terms and Conditions
            </Link>
          </li>
          <li className="mb-2">
            <Link className=" px-3 border-s" to="/">
              Blog
            </Link>
          </li>
        </ul>
        <div className="flex flex-wrap md:mt-8 mt-3 items-center justify-between gap-3">
          <ul className="flex items-center gap-4">
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
                className="w-16 object-contain h-auto"
                src={rupay}
                alt=""
                srcset=""
              />
            </li>
            <li>
              <img
                className="w-8 object-contain h-auto"
                src={mastercard}
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

          <SocialLinks classNameli="bg-white"></SocialLinks>
        </div>
      </div>
    </div>
  );
};

export default FooterLink;
