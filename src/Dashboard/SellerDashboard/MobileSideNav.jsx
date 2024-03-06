import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbBrandProducthunt } from "react-icons/tb";
import {  IoChatboxOutline } from "react-icons/io5";
import { MdOutlineDiscount, MdOutlinePayment } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";

import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";

import { CiChat2, CiImageOn } from "react-icons/ci";
import { TbUsersGroup } from "react-icons/tb";
import { TbSettingsCancel } from "react-icons/tb";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";

import { FaRegUserCircle } from "react-icons/fa";
import "../../Responsive/Responsive.css";
import { AiOutlinePlus } from "react-icons/ai";
import logo from "../../../public/logo2.png";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

const MobileSideNav = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logged out");
      navigate("/");
    });
  };

  const accessToken = localStorage.getItem("access_token");
  const token = jwtDecode(accessToken);

  return (
    <div>
      <div className="logo mx-auto text-center pt-1 w-[150px] my-2">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>
      {token?.role === "seller" && (
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
            <li
              onClick={handleLogOut}
              className="mb-1 flex items-center cursor-pointer gap-2 pl-1"
            >
              <span className="text-xl">
                <BiLogInCircle className="text-[23px]" />
              </span>
              <span className="text-[17px] font-semibold">Logout</span>
            </li>
          </ul>
        </div>
      )}

      {token?.role === "admin" && (
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
                to="/dashboard/admin-orders"
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
                to="/dashboard/add-category"
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                    : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
                }
              >
                <span className="text-xl">
                  <TbBrandProducthunt />
                </span>
                <span>Category</span>
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/dashboard/all-sellers"
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                    : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
                }
              >
                <span className="text-xl">
                  <HiOutlineUsers />
                </span>
                <span>Sellers</span>
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/dashboard/all-users"
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                    : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
                }
              >
                <span className="text-xl">
                  <TbUsersGroup />
                </span>
                <span>All Users</span>
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/dashboard/payment-requests"
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                    : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
                }
              >
                <span className="text-xl">
                  <MdOutlinePayment />
                </span>
                <span>Payment Request</span>
              </NavLink>
            </li>

            <li className="mb-1">
              <NavLink
                to="/dashboard/seller-requests"
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                    : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
                }
              >
                <span className="text-xl">
                  <VscGitPullRequestGoToChanges />
                </span>
                <span>Seller Request</span>
              </NavLink>
            </li>

            <li className="mb-1">
              <NavLink
                to="/dashboard/deactivate-sellers"
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                    : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
                }
              >
                <span className="text-xl">
                  <TbSettingsCancel />
                </span>
                <span>Deactivate Seller</span>
              </NavLink>
            </li>

            <li className="mb-1">
              <NavLink
                to="/dashboard/add-banner"
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                    : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
                }
              >
                <span className="text-[22px]">
                  <CiImageOn />
                </span>
                <span>Add Banners</span>
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/dashboard/chat-sellers"
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                    : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
                }
              >
                <span className="text-xl">
                  <IoChatboxOutline />
                </span>
                <span>Chat Seller</span>
              </NavLink>
            </li>
            <li onClick={handleLogOut} className="mb-1">
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
            {/* <li className="mb-1 absolute bottom-2  text-red-500  border-t-2 border-slate-200  w-full">
          <NavLink
            to="/dashboard/my-shop"
            className={({ isActive }) =>
              isActive
                ? "flex justify-start hover:pl-4 transition-all  bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-3 py-2"
                : "flex justify-start hover:pl-4 transition-all  duration-500 items-center px-2 gap-3 py-2 font-medium"
            }
          >
            <span className="text-xl">
              <BiLogInCircle />
            </span>
            <span>Log Out</span>
          </NavLink>
        </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileSideNav;
