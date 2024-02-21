import React from "react";
import { RxDashboard } from "react-icons/rx";
import { TbBrandProducthunt } from "react-icons/tb";
import { IoCartOutline, IoChatboxOutline } from "react-icons/io5";
import { MdOutlineDiscount, MdOutlinePayment } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi2";

import { CiChat2 } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import "../../Responsive/Responsive.css";
import { TbUsersGroup } from "react-icons/tb";
import { TbSettingsCancel } from "react-icons/tb";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";

import logo from "../../../public/logo2.png";
import { Link, NavLink, Outlet } from "react-router-dom";

const AdminDashSidebar = () => {
  return (
    <div className="bg-[#E2E8F0]  ">
      <div className="flex ">
        {/* mobile sidebar */}

        <div className="block lg:hidden"></div>

        {/* mobile sidebar */}

        <div>
          <div className="w-[275px] relative z-[888]  hidden lg:block bg-white h-screen  border-r-2 border-slate-200 shadow-indigo-600/30">
            <div className="logo mx-auto text-center w-[185px] my-2">
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
          </div>
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashSidebar;
