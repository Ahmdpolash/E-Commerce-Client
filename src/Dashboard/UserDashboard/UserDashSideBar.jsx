import React, { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../public/logo2.png";
import { FaList, FaRegUserCircle } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { RiProductHuntLine } from "react-icons/ri";
import { BsChat, BsHeart } from "react-icons/bs";
import { TfiLock } from "react-icons/tfi";
import { BiLogInCircle } from "react-icons/bi";
import Footer from "../../Shared/Footer/Footer";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";

const UserDashSideBar = () => {
  const [filterShow, setFilterShow] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="bg-slate-200 ">
        <div className="flex gap-5 px-4 py-4">
          <div className="bg-white w-[265px] rounded-md">
            <ul className="py-2 text-slate-600 px-4">
              <li className="flex justify-start items-center gap-2 py-2">
                <span className="text-xl">
                  <RxDashboard />
                </span>
                <Link to="/dashboard" className="block">
                  Dashboard
                </Link>
              </li>
              <li className="flex justify-start items-center gap-2 py-2">
                <span className="text-xl">
                  <FaRegUserCircle />
                </span>
                <Link to="/dashboard" className="block">
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
                <Link to="/dashboard/my-wishlist" className="block">
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
                <Link to="/dashboard/chat" className="block">
                  Notification
                </Link>
              </li>

              <li className="flex justify-start items-center gap-2 py-2">
                <span className="text-xl">
                  <TfiLock />
                </span>
                <Link to="/dashboard/chage-password" className="block">
                  Change Password
                </Link>
              </li>
              <li className="flex justify-start items-center gap-2 py-2 cursor-pointer">
                <span className="text-xl">
                  <BiLogInCircle />
                </span>
                <div className="block">Logout</div>
              </li>
            </ul>
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashSideBar;
