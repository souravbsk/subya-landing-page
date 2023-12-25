import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/Sabhyasha-horizontal-01.png";
const Footer = () => {
  return (
    <footer className=" px-4 py-12 md:px-24 md:py-24">
      <div className="grid gap-16  lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <Link to="/">
          <img className="w-36" src={footerLogo} alt="" />
        </Link>
        <div>
          <h2 className="text-[#303030] mb-4 font-bold text-3xl">Our info</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/">+0012 34 567 89</Link>
            </li>
            <li>
              <Link to="/">+0012 34 567 89</Link>
            </li>
            <li>
              <Link to="/">dogood@example.com</Link>
            </li>
            <li>
              <Link to="/">23 Fridderich Moulin Rode, <br /> Vienna AU</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[#303030] mb-4 font-bold text-3xl">
            Latest news
          </h2>
          <ul className="space-y-2">
            <li>
              <Link className="font-heebo text-sm text-[#6c6c6c]" to="/">
                April 12, 2022 / <span className="underline">Donations</span>
              </Link>
              <h5 className="text-xl font-bold text-[#515151] font-heebo">
                Gardering Ideas
              </h5>
            </li>
            <li>
              <Link className="font-heebo text-sm text-[#6c6c6c]" to="/">
                April 12, 2022 / <span className="underline">Donations</span>
              </Link>
              <h5 className="text-xl font-bold text-[#515151] font-heebo">
                Let’s Do Good!
              </h5>
            </li>
            <li>
              <Link className="font-heebo text-sm text-[#6c6c6c]" to="/">
                April 12, 2022 / <span className="underline">Donations</span>
              </Link>
              <h5 className="text-xl font-bold text-[#515151] font-heebo">
                Do Things For Other!
              </h5>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[#303030] mb-4 font-bold text-3xl">About Us</h2>
          <p className="font-heebo mb-8 text-base text-[#303030]">
            Change the world one donation at a time. DoGood is always here for
            your charities and fundraising.
          </p>
          <p className="text-base font-heebo text-[#303030]">
            © 2022 <Link to="/">Qode Interactive</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
