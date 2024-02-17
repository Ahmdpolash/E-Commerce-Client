import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { BsCartCheckFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

import { AiOutlineMenu } from "react-icons/ai";

import { IoCartOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import "../../Responsive/Responsive.css";

import { MdKeyboardArrowDown, MdOutlineFavoriteBorder } from "react-icons/md";
import { FaList, FaRegUser, FaSearch } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import "../../Responsive/Responsive.css";

import { FaHeart } from "react-icons/fa";
import logo from "../../../public/logo2.png";
import useAuth from "../../Hooks/useAuth";
// import SubHeader from "./SubHeader";
import { jwtDecode } from "jwt-decode";
import BottomNavContent from "../../Components/BottomNavContent";
import MobileCart from "../../Components/MobileCart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [mobileCart, setMobileCart] = useState(false);
  const [categoryShow, setCategoryShow] = useState(true);
  const { logOut, user } = useAuth();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleOpen = () => {
    setOpenCart(true);
  };

  const handleClose = () => {
    setOpenCart(false);
  };

  const accessToken = localStorage.getItem("access_token");
  let token;
  try {
    token = jwtDecode(accessToken);
  } catch (error) {
    // Handle invalid token error
    console.error("Error decoding token:", error);
    // You can set token to null or handle it based on your application logic
    token = null;
  }

  const navList = (
    <>
      <NavLink to="/" className="lg:ml-4">
        Home
      </NavLink>
      <NavLink to="/shop" className="lg:ml-4">
        Shop
      </NavLink>
      <NavLink to="/contact" className="lg:ml-4">
        Contact
      </NavLink>
      <NavLink to="/service" className="lg:ml-4">
        Services
      </NavLink>
      <NavLink to="/blog" className="lg:ml-4">
        Blogs
      </NavLink>
    </>
  );

  const category = [
    "Clothing",
    "Sport",
    "Phones",
    "Laptop",
    "Monitors",
    "Music & Gaming",
    "Accessories",
  ];

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="">
      {/* Sub Menu */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen backdrop-blur-sm top-0 left-0 z-10`}
      ></div>
      {/* Sub Menu */}

      <div className="px-5 hidden lg:block lg:px-16">
        <div className=" border-b">
          <div className="flex py-5 justify-between items-center">
            <div className="block lg:hidden">
              <IoMdMenu
                className="text-3xl cursor-pointer lg:hidden "
                onClick={toggleMenu}
              />
            </div>

            <div className="lg:w-[15%]">
              <Link to="/">
                <img className="w-[120px] lg:w-[220px]" src={logo} alt="" />
              </Link>
            </div>

            <div className="w-[50%]  hidden lg:block">
              <div className="flex">
                <select
                  className="py-3 relative left-3 border-l-2 border-t-2 border-b-2 border-[#FE2424] font-normal outline-none text-[16px]  px-3 border-r-0 w-40 text-black"
                  name=""
                  id=""
                  defaultValue=""
                >
                  <option value="">Select Category</option>
                  {category.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className="border-r-2 ml-2 border-gray-300 h-7 flex justify-center items-center mt-2"></div>
                <div className="w-[75%]">
                  <input
                    className="py-3 px-3 relative mr-5  outline-none w-full border-t-2  border-b-2 border-[#FE2424] "
                    type="text"
                    placeholder="Search by Product Name"
                  />
                </div>
                <button className="bg-violet-400 border-r-2 border-t-2 border-b-2 border-violet-400 rounded-r-md font-semibold text-white px-6 py-3">
                  Search
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              {user ? (
                <>
                  {token?.role === "user" && (
                    <Link to="/dashboard/my-dashboard">
                      <div className=" px-2 py-1 cursor-pointer">
                        <div className="flex gap-2 items-center justify-center">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={user.photoURL}
                            alt=""
                          />
                          <p className="text-black">{user.displayName}</p>
                        </div>
                      </div>
                    </Link>
                  )}
                  {token?.role === "seller" && (
                    <Link to="/dashboard/seller-dashboard">
                      <div className=" px-2 py-1 cursor-pointer">
                        <div className="flex gap-2 items-center justify-center">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={user.photoURL}
                            alt=""
                          />
                          <p className="text-black">{user.displayName}</p>
                        </div>
                      </div>
                    </Link>
                  )}
                  {token?.role === "admin" && (
                    <Link to="/dashboard/admin-dashboard">
                      <div className="border rounded-full border-violet-500 px-2 py-1 cursor-pointer">
                        <div className="flex gap-2 items-center justify-center">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={user.photoURL}
                            alt=""
                          />
                          <p className="text-black">{user.displayName}</p>
                        </div>
                      </div>
                    </Link>
                  )}

                  <p onClick={handleLogOut}>logout</p>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <FaRegUser className="hover:text-red-400 font-semibold duration-300" />
                  <Link
                    to="/login"
                    className="hover:text-red-400 font-semibold duration-300"
                  >
                    Login
                  </Link>
                  <div className="border-r-2  border-gray-300 h-5 flex justify-center items-center mt-2"></div>
                  <Link
                    to="/register"
                    className="hover:text-red-400 font-semibold duration-300"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu */}

            {/* Mobile menu */}

            {/* Main menu */}
            <div className="flex gap-5 items-center">
              <div className="bg-gray-200 hidden cursor-pointer relative lg:block px-2 py-2 rounded-full">
                <Link to="/compare">
                  <FaArrowRightArrowLeft className="text-[21px] text-[#EE5544] font-bold" />
                </Link>
                <span className="absolute -top-1 -right-2 rounded-full w-6 pt-1 h-6 top right m-0 p-0 font-mono text-white font-semibold leading-tight text-[14px] bg-[#3bc177] text-center">
                  0
                </span>
              </div>
              <div className="bg-gray-200 cursor-pointer hidden relative lg:block px-2 py-2 rounded-full">
                <Link to="/bookmarks">
                  <FaHeart className="text-[22px] text-[#EE5544] font-bold" />
                </Link>
                <span className="absolute -top-1 -right-2 rounded-full w-6 pt-1 h-6 top right m-0 p-0 font-mono text-white font-semibold leading-tight text-[14px] bg-[#3bc177] text-center">
                  0
                </span>
              </div>
              <div
                onClick={handleOpen}
                className="bg-gray-200 cursor-pointer px-2 py-2 relative rounded-full"
              >
                <BsCartCheckFill className="text-[22px]  text-[#EE5544] font-bold" />

                <span className="absolute -top-1 -right-2 rounded-full w-6 pt-1 h-6 top right m-0 p-0 font-mono text-white font-semibold leading-tight text-[14px] bg-[#3bc177] text-center">
                  2
                </span>
              </div>
            </div>

            {/* add to cart drawer */}

            <div
              className={`${
                openCart
                  ? "-translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }  transition-all duration-500 z-[9999] border-l-2 border-gray-100 shadow-lg backdrop-blur-sm transform h-full w-[320px] md:w-[390px] bg-white text-black fixed top-0 right-0`}
            >
              {/* if length 0 */}
              <div className="absolute mt-[60%] lg:mt-[55%]  left-[28%] ">
                <img
                  className="w-[120px] mx-auto"
                  src="https://img.freepik.com/free-vector/sale-full-shopping-cart-red-pictogram_1284-8505.jpg?size=626&ext=jpg&ga=GA1.1.507178097.1703095808&semt=ais"
                  alt=""
                />
                <p>Your cart is now Empty</p>
              </div>
              {/* if length 0 */}

              {/* bottom btn */}

              <div className="absolute bottom-1 w-full flex gap-2">
                <Link
                  to="/cart"
                  className="bg-[#FE2424] text-center text-white w-1/2 rounded-t-md py-3"
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  className="bg-[#FE2424] text-center text-white w-1/2 rounded-t-md py-3"
                >
                  Checkout
                </Link>
              </div>
              {/* bottom btn */}

              <button
                className="px-4 text-[#FE2424] hover:rotate-[180deg] hover:duration-700 transition-all py-2 text-3xl font-semibold flex absolute left-0 top-1 mt-2"
                onClick={handleClose}
              >
                <RxCross1 />
              </button>
            </div>
            {/* add to cart drawer end*/}

            {/* Main menu */}
          </div>
        </div>
      </div>

      {/* Search menu */}
      <div className="bg-[#F85606]  lg:block relative py-2 lg:py-0 text-white">
        <div className="flex items-center px-4 lg:px-16 justify-between">
          <div className="hidden md:block lg:block lg:w-3/12">
            <div className="bg-white relative">
              <div
                onClick={() => setCategoryShow(!categoryShow)}
                className="flex text-white gap-3 text-[17px] p-6 items-center font-bold cursor-pointer h-[50px] bg-violet-400"
              >
                <span>
                  <FaList />
                </span>
                <h1>All Category</h1>
                <span className="pt-1">
                  <MdKeyboardArrowDown className="font-bold text-[20px]" />
                </span>
              </div>
              <div
                className={`${
                  categoryShow ? "h-0" : "h-[350px] md:h-[300px] lg:h-[400px]"
                } overflow-hidden transition-all duration-500 shadow-md w-full absolute z-[99999] bg-white border-x`}
              >
                <ul className="text-slate-600 py-2 font-medium">
                  {category?.map((c, i) => {
                    return (
                      <li
                        className="flex hover:bg-gray-200 transition ease-linear  duration-500 cursor-pointer  justify-start items-center gap-2 px-[24px] py-2"
                        key={i}
                      >
                        <img
                          className="w-[25px]"
                          src="https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838"
                          alt=""
                        />
                        {c}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden w-[50%] mr-12 lg:block">
            <ul className="lg:flex text-[16px] uppercase font-medium lg:gap-4">
              {navList}
            </ul>
          </div>

          <div className="hidden shadow-lg lg:block">
            <img
              className="w-[260px] absolute right-8 h-[57px] -top-2 z-40"
              src="http://ps.magentech.com/themes/sp_goldmart/img//deals.png"
              alt=""
            />
          </div>

          <div className="flex lg:hidden items-center gap-2=">
            <input
              type="text"
              className="w-full text-black outline-none placeholder:text-[15px] px-2 py-1"
              placeholder="Search by Name"
            />
            <span className="bg-gray-300 cursor-pointer text-black px-2 py-2">
              <FaSearch />
            </span>
          </div>
        </div>
      </div>
      {/* Search menu */}

      {/* bottom nav */}
      <div className="fixed  block lg:hidden h-[42px] z-[999] bottom-0 backdrop-blur-md bg-white bg-opacity-50 border-t shadow-md border-slate-300 w-screen">
        <div className="">
          <ul className="flex bottom-4 text-xl px-4 relative items-center justify-between p-2">
            <li>
              <button onClick={() => setOpen(!open)}>
                <AiOutlineMenu />
              </button>
            </li>
            <li>
              <Link to="/">
                <IoHomeOutline />
              </Link>
            </li>
            <li className="bottom-4 cursor-pointer relative bg-[#2B38D1] text-white border-4 border-white z-[999] h-[58px] w-[58px] rounded-full ">
              <button
                onClick={() => setMobileCart(!mobileCart)}
                className="ml-3 z-[8999]"
              >
                <IoCartOutline className="mx-auto mt-[13px]  font-semibold text-[25px]" />
              </button>
            </li>
            <li>
              <Link to="/my-bookmarks">
                <MdOutlineFavoriteBorder className="text-[23px]" />
              </Link>
            </li>

            {user ? (
              <li>
                {token?.role === "user" && (
                  <Link to="/dashboard/my-dashboard">
                    <CiUser className="text-[24px]" />
                  </Link>
                )}
                {token?.role === "seller" && (
                  <Link to="/dashboard/seller-dashboard">
                    <CiUser className="text-[24px]" />
                  </Link>
                )}
                {token?.role === "admin" && (
                  <Link to="/dashboard/admin-dashboard">
                    <CiUser className="text-[24px]" />
                  </Link>
                )}
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <CiUser className="text-[24px]" />
                </Link>
              </li>
            )}
          </ul>

          <div className="px-4 bg-indigo-50 w-full text-white py-2 rounded-sm">
            <button>Logout</button>
          </div>
        </div>
      </div>
      {/* bottom nav */}

      {/* bottom nav content  */}
      <div>
        <div
          className={`w-[280px] mobileSideNav lg:hidden md:w-[340px] border-r-2 fixed bg-white top-0 z-[99] h-full overflow-y-auto transition-all ${
            open ? "left-0" : "-left-[280px] md:-left-[340px] lg:left-0"
          }`}
        >
          <BottomNavContent />
        </div>
      </div>
      {/* bottom nav content  */}

      {/* mobile cart */}

      <div
        className={`w-full lg:hidden  border-r-2 fixed bg-white h-[94vh] top-0 bottom-4  z-[99]  overflow-y-auto transition-all ${
          mobileCart ? "left-0" : "-left-full  "
        }`}
      >
        <MobileCart mobileCart={mobileCart} setMobileCart={setMobileCart} />
      </div>
      {/* mobile cart */}
    </div>
  );
};

export default Navbar;
