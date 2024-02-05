import React, { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import { FaList, FaRegUserCircle } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { RiProductHuntLine } from "react-icons/ri";
import { BsChat, BsHeart } from "react-icons/bs";
import { TfiLock } from "react-icons/tfi";
import { BiLogInCircle } from "react-icons/bi";
import Footer from "../../Shared/Footer/Footer";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const UserDashSideBar = () => {
  const [filterShow, setFilterShow] = useState(false);

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
        Swal.fire({
          title: "Sign Out!",
          text: "Your are now Sign out of this Account.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-slate-200 ">
        <div className="flex gap-5 px-4 py-4">
          <div className="bg-white w-[270px] rounded-md">
            <ul className="py-2 text-slate-600 px-4">
              <li className="flex justify-start items-center gap-2 py-2">
                <span className="text-xl">
                  <RxDashboard />
                </span>
                <Link to="/dashboard/UserDashboardHome" className="block">
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
              <li onClick={handleLogOut} className="flex justify-start items-center gap-2 py-2 cursor-pointer">
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
      <Footer />
    </div>
  );
};

export default UserDashSideBar;
