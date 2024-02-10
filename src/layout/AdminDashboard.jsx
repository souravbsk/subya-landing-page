import React from "react";
import AdminHeader from "../Dashboard/Admin/AdminShared/AdminHeader/AdminHeader";
import { Link, Outlet } from "react-router-dom";
import blacklogo from "../assets/shabasa-logo.svg";
import { RiDashboard3Line } from "react-icons/ri";
import {
  FaBookOpen,
  FaBoxOpen,
  FaCartArrowDown,
  FaHome,
  FaRegCompass,
  FaUsers,
} from "react-icons/fa";
import SubMenu from "../components/SubMenu/SubMenu";

const Dashboard = () => {
  return (
    <section>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-slate-100 ">
          {/* Page content here */}
          <AdminHeader logo={blacklogo}></AdminHeader>
          <div className="container py-5">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 space-y-3 md:w-80 w-56 min-h-full bg-[#FFE2DA] text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link className="font-medium" to="/">
                <img src={blacklogo} alt="" />
              </Link>
            </li>
            <li>
              <Link className=" font-semibold text-sm text-[#7A5542]" to="/">
                <RiDashboard3Line size={20} />
                Dashboard
              </Link>
            </li>
            {/* Sub-menu for Blogs */}
            <SubMenu
              icon={<FaBookOpen size={20} />}
              title="Blogs"
              subLinks={[
                { to: "/", label: "All Blogs" },
                { to: "/", label: "All category's" },
              ]}
            />
            <SubMenu
              icon={<FaBoxOpen size={20} />}
              title="Products"
              subLinks={[
                { to: "/", label: "Product 1" },
                { to: "/", label: "Product 2" },
              ]}
            />
            <li>
              <Link className="text-sm font-semibold text-[#7A5542]" to="/">
                <FaUsers size={20} /> Users
              </Link>
            </li>
            <li>
              <Link className="text-sm font-semibold text-[#7A5542]" to="/">
                <FaRegCompass size={20} /> Orders
              </Link>
            </li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              <Link className="text-sm font-semibold text-[#7A5542]" to="/">
                <FaCartArrowDown size={20} /> Shop
              </Link>
            </li>
            <li>
              <Link className="text-sm font-semibold text-[#7A5542]" to="/">
                <FaHome size={20} /> Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
