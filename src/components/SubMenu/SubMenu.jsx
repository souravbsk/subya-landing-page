import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const SubMenu = ({ icon, title, subLinks }) => {
  const [showSubLinks, setShowSubLinks] = useState(false);

  const toggleSubLinks = () => {
    setShowSubLinks(!showSubLinks);
  };

  return (
    <li>
      <button
        className="text-xl font-medium flex text-[#7A5542] items-center"
        onClick={toggleSubLinks}
      >
       
          {" "}
          {icon} <span className="text-sm font-bold  ">{title}</span>
     
        {showSubLinks ? (
          <button>
            <MdKeyboardArrowDown size={15} />

          </button>
        ) : (
          <button>
            <MdKeyboardArrowRight size={15}/>

          </button>
        )}
      </button>
      {showSubLinks && (
        <ul className="pl-4 border-l border-[#7A5542] py-3">
          {subLinks.map((link, index) => (
            <li key={index}>
              <Link className="text-[#7A5542]" to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SubMenu;
