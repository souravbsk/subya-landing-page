import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiNotification3Fill } from "react-icons/ri";

const AdminHeader = ({ logo }) => {
  const [isUser, setIsUser] = useState(true);
  return (
    <header className="bg-[#ffccb3] flex items-center gap-2 justify-between lg:px-10 px-5 py-6">
      <div className="">
        <label
          htmlFor="my-drawer-2"
          className=" text-[#7A5542] drawer-button lg:hidden"
        >
          <FaBars size={25}></FaBars>
        </label>
      </div>
      <div className="lg:hidden">
        <img className="md:w-40 sm:w-36" src={logo} alt="" />
      </div>
      <div className="text-right flex-shrink-0">
        {isUser ? (
          <>
            <ul className="flex items-center gap-4">
            <li>
                    <div className="btn  btn-ghost btn-circle">
                      <p className="indicator">
                        <RiNotification3Fill size={26} />
                        <span className="badge badge-xs bg-[#7A5542] text-white text-base py-3 px-2 indicator-item">
                          1
                        </span>
                      </p>
                    </div>
                  </li>
              <li className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <figure className=" overflow-hidden rounded-full  ">
                    <img
                      className="w-10 h-10"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  
                  <li>
                    <button className="bg-[#7A5542] hover:text-[#7A5542] text-white px-4 py-2  font-semibold rounded-md">
                      Log Out
                    </button>
                  </li>
                </ul>
              </li>
             

            </ul>
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
