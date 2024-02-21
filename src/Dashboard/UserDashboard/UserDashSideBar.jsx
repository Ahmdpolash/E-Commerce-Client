import React, { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaList, FaRegUserCircle } from "react-icons/fa";
import { RxCross1, RxDashboard } from "react-icons/rx";
import { RiProductHuntLine } from "react-icons/ri";
import { BsChat, BsHeart } from "react-icons/bs";
import { TfiLock } from "react-icons/tfi";
import { BiLogInCircle } from "react-icons/bi";
import Footer from "../../Shared/Footer/Footer";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import logo from "../../../public/logo2.png";
import useAuth from "../../Hooks/useAuth";
const UserDashSideBar = () => {
  const [open, setOpen] = useState(false);
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => {
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
          Swal.fire({
            title: "Sign Out!",
            text: "Your are now Sign out from this Account.",
            icon: "success",
          });
          navigate("/");
        }
      });
    });
  };

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen backdrop-blur-sm top-0 left-0 z-10`}
      ></div>
      <Navbar />
      <div className="bg-slate-200 ">
        <div
          onClick={() => setOpen(!open)}
          className="ml-5 px-3 mt-2 text-white rounded-md bg-indigo-500 inline-block lg:hidden py-2 "
        >
          <FaList className="text-xl mt-" />
        </div>

        {/* mobile sidebar */}

        <div
          className={`${
            open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } lg:hidden transition-all duration-500 fixed  z-[99999] border border-gray-200 shadow-lg backdrop-blur-sm transform h-full sm-device w-[320px] md:w-[390px] bg-white text-black top-0  left-0`}
        >
          <div className="logo border-b py-1 border-slate-300">
            <Link to="/">
              <img
                className="w-[160px] md:w-[180px] mx-auto "
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <ul className="py-2 text-slate-600 px-4">
            <li className="flex justify-start items-center gap-2 py-2">
              <span className="text-xl">
                <RxDashboard />
              </span>
              <Link to="/dashboard/my-dashboard" className="block">
                Dashboard
              </Link>
            </li>
            <li className="flex justify-start items-center gap-2 py-2">
              <span className="text-xl">
                <FaRegUserCircle />
              </span>
              <Link to="/dashboard/my-profile" className="block">
                My Profile
              </Link>
            </li>
            <li className="flex justify-start items-center gap-2 py-2">
              <span className="text-xl">
                <IoBagCheckOutline />
              </span>
              <Link to="/dashboard/my-orders" className="block">
                My Orders
              </Link>
            </li>
            <li className="flex justify-start items-center gap-2 py-2">
              <span className="text-xl">
                <BsHeart />
              </span>
              <Link to="/dashboard/my-wishlists" className="block">
                Wishlist
              </Link>
            </li>
            <li className="flex justify-start items-center gap-2 py-2">
              <span className="text-xl">
                <BsChat />
              </span>
              <Link to="/dashboard/chat" className="block">
                Chat
              </Link>
            </li>
            <li className="flex justify-start items-center gap-2 py-2">
              <span className="text-2xl">
                <MdOutlineNotificationsActive />
              </span>
              <Link to="/dashboard/notifications" className="block">
                Notification
              </Link>
            </li>

            <li className="flex justify-start items-center gap-2 py-2">
              <span className="text-xl">
                <TfiLock />
              </span>
              <Link to="/dashboard/change-password" className="block">
                Change Password
              </Link>
            </li>
            <li
              onClick={handleLogOut}
              className="flex justify-start items-center gap-2 py-2 cursor-pointer"
            >
              <span className="text-xl">
                <BiLogInCircle />
              </span>
              <div className="block">Logout</div>
            </li>
          </ul>
          {/* close btn */}
          <button
            className="h-[27px] w-[27px] text-[#FE2424] py-1  text-[16px]  shadow-md border border-red-500 rounded-full font-semibold flex absolute top-0 right-2 mt-2"
            onClick={() => setOpen(false)}
          >
            <RxCross1 className="ml-[5px] mt-[1.2px]" />
          </button>
          {/* close btn */}
        </div>

        {/* mobile sidebar */}

        <div className="flex gap-5 px-4 py-4">
          <div className="bg-white hidden lg:block h-[56vh]z-40 w-[270px] rounded-md">
            <ul className="py-2 text-slate-600 px-4">
              <li className="flex justify-start items-center gap-2 py-2">
                <span className="text-xl">
                  <RxDashboard />
                </span>
                <Link to="/dashboard/my-dashboard" className="block">
                  Dashboard
                </Link>
              </li>
              <li className="flex justify-start items-center gap-2 py-2">
                <span className="text-xl">
                  <FaRegUserCircle />
                </span>
                <Link to="/dashboard/my-profile" className="block">
                  My Profile
                </Link>
              </li>
              <li className="flex justify-start items-center gap-2 py-2">
                <span className="text-xl">
                  <IoBagCheckOutline />
                </span>
                <Link to="/dashboard/my-orders" className="block">
                  My Orders
                </Link>
              </li>
              <li className="flex justify-start items-center gap-2 py-2">
                <span className="text-xl">
                  <BsHeart />
                </span>
                <Link to="/dashboard/my-wishlists" className="block">
                  Wishlist
                </Link>
              </li>
              <li className="flex justify-start items-center gap-2 py-2">
                <span className="text-xl">
                  <BsChat />
                </span>
                <Link to="/dashboard/chat" className="block">
                  Chat
                </Link>
              </li>
              <li className="flex justify-start items-center gap-2 py-2">
                <span className="text-2xl">
                  <MdOutlineNotificationsActive />
                </span>
                <Link to="/dashboard/notifications" className="block">
                  Notification
                </Link>
              </li>

              <li className="flex justify-start items-center gap-2 py-2">
                <span className="text-xl">
                  <TfiLock />
                </span>
                <Link to="/dashboard/change-password" className="block">
                  Change Password
                </Link>
              </li>
              <li
                onClick={handleLogOut}
                className="flex justify-start items-center gap-2 py-2 cursor-pointer"
              >
                <span className="text-xl">
                  <BiLogInCircle />
                </span>
                <div className="block">Logout</div>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default UserDashSideBar;
