import React from "react";
import { RxDashboard } from "react-icons/rx";
import { TbBrandProducthunt } from "react-icons/tb";
import { IoCartOutline, IoChatboxOutline } from "react-icons/io5";
import { MdOutlineDiscount, MdOutlinePayment } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi2";

import { CiChat2, CiImageOn } from "react-icons/ci";
import "../../Responsive/Responsive.css";
import { TbUsersGroup } from "react-icons/tb";
import { TbSettingsCancel } from "react-icons/tb";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";

import logo from "../../../public/logo2.png";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AdminDashSidebar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Signed Out!",
              text: "You are now signed out from this account.",
              icon: "success",
            });
            navigate("/");
          })
          .catch((error) => {
            console.error("Logout Error: ", error);
          });
      }
    });
  };

  return (
    <div className="bg-[#E2E8F0] dark:bg-[#131E31] ">
      <div className="flex ">
        <div className=" flex-auto=  ">
          <div className="w-[275px] flex-1   z-[888]  dark:bg-[#253145] dark:border-[#121212] hidden lg:block bg-white  h-screen  border-r-2 border-slate-200 shadow-indigo-600/30">
            <div className="logo mx-auto text-center w-[185px] ">
              <Link to="/">
                {" "}
                <img className="py-3 " src={logo} alt="" />
              </Link>
            </div>

            <div>
              <ul className="py- text-slate-700 dark:text-white px-4 ">
                <li className="mb-1">
                  <NavLink
                    to="/dashboard/admin-dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "flex justify-start hover:pl-4 transition-all bg-slate-300 dark:bg-slate-600 px-2 shadow-indigo-500/50 mb-1 font-semibold border-r-4 duration-500 border-indigo-600 dark:border-[#fff] items-center gap-2 py-2"
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
                        ? "flex justify-start hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 dark:border-[#fff]  dark:bg-slate-600 items-center gap-2 py-2"
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
                        ? "flex justify-start hover:pl-4 dark:border-[#fff]  dark:bg-slate-600 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
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
                        ? "flex justify-start hover:pl-4 transition-all dark:border-[#fff]  dark:bg-slate-600 bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
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
                        ? "flex justify-start hover:pl-4 dark:border-[#fff]  dark:bg-slate-600 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
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
                        ? "flex justify-start hover:pl-4 dark:border-[#fff]  dark:bg-slate-600 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
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
                        ? "flex justify-start dark:border-[#fff]  dark:bg-slate-600 hover:pl-4 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
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
                        ? "flex justify-start hover:pl-4 dark:border-[#fff]  dark:bg-slate-600 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
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
                        ? "flex justify-start hover:pl-4  dark:border-[#fff]  dark:bg-slate-600 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
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
                        ? "flex justify-start hover:pl-4 dark:border-[#fff]  dark:bg-slate-600 transition-all bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold border-r-4 duration-200 border-indigo-600 items-center gap-2 py-2"
                        : "flex justify-start hover:pl-4 transition-all duration-500 items-center px-2 gap-2 py-2 font-medium"
                    }
                  >
                    <span className="text-xl">
                      <IoChatboxOutline />
                    </span>
                    <span>Chat Seller</span>
                  </NavLink>
                </li>

                <li onClick={handleLogOut} className="mb-1 cursor-pointer">
                  <div className="flex justify-start hover:pl-4 dark:border-[#fff]  dark:hover:bg-slate-600 transition-all hover:bg-slate-300 shadow-indigo-500/50 px-2 mb-1 font-semibold  hover:duration-200 duration-200 items-center gap-2 py-2">
                    <span className="text-xl">
                      <BiLogInCircle />
                    </span>
                    <span>Logout</span>
                  </div>
                </li>
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
