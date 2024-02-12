import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbBrandProducthunt } from "react-icons/tb";
import { IoCartOutline, IoChatboxOutline } from "react-icons/io5";
import { MdOutlineDiscount, MdOutlinePayment } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";

import { CiChat2 } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import "../../Responsive/Responsive.css";
import { AiOutlinePlus } from "react-icons/ai";
import logo from "../../../public/logo2.png";

const MobileSideNav = () => {
  return (
    <div>
      <div className="logo mx-auto text-center pt-1 w-[150px] my-2">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>

      <div>
        <ul className="py- text-slate-700 px-4 ">
          <li className="mb-1">
            <NavLink
              to="/dashboard/admin-dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start hover:pl-4 transition-all bg-slate-300 px-2 shadow-indigo-500/50 mb-1 font-semibold border-r-4 duration-500 border-indigo-600 items-center gap-2 py-2"
                  : "flex justify-start hover:pl-4 transition-all items-center px-2 gap-2 py-2 font-medium"
              }
            >
              <span className="text-xl">
                <RxDashboard />
              </span>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/dashboard/add-products"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                  : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
              }
            >
              <span className="text-xl">
                <AiOutlinePlus />
              </span>
              <span>Add Product</span>
            </NavLink>
          </li>

          <li className="mb-1">
            <NavLink
              to="/dashboard/all-products"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                  : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
              }
            >
              <span className="text-xl">
                <TbBrandProducthunt />
              </span>
              <span>All Products</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/dashboard/discount-price"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                  : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
              }
            >
              <span className="text-xl">
                <MdOutlineDiscount />
              </span>
              <span>Discount Product</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/dashboard/customer-orders"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                  : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
              }
            >
              <span className="text-xl">
                <IoCartOutline />
              </span>
              <span>Orders</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/dashboard/payments"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                  : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
              }
            >
              <span className="text-xl">
                <MdOutlinePayment />
              </span>
              <span>Payments</span>
            </NavLink>
          </li>

          <li className="mb-1">
            <NavLink
              to="/dashboard/customer-chat"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                  : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
              }
            >
              <span className="text-xl">
                <CiChat2 />
              </span>
              <span>Chat Customer</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/dashboard/support-chat"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                  : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
              }
            >
              <span className="text-xl">
                <IoChatboxOutline />
              </span>
              <span>Chat Support</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/dashboard/my-shop"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                  : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
              }
            >
              <span className="text-xl">
                <FaRegUserCircle />
              </span>
              <span>My Shop</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/dashboard/my-shop"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                  : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
              }
            >
              <span className="text-xl">
                <BiLogInCircle />
              </span>
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSideNav;
