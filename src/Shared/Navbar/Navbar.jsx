import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { BsCartCheck, BsCartCheckFill, BsTwitterX } from "react-icons/bs";
import { MdKeyboardArrowDown, MdOutlineMarkEmailUnread } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaList,
  FaRegUser,
  FaRegUserCircle,
  FaSearch,
} from "react-icons/fa";
import { FaAngleDown, FaArrowRightArrowLeft, FaH } from "react-icons/fa6";
import bd from "../../../public/bd.png";
import us from "../../../public/us.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import logo from "../../../public/logo2.png";

const Navbar = () => {
  
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [categoryShow, setCategoryShow] = useState(true);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleOpen = () => {
    setOpenCart(true);
    console.log("hello");
  };

  const handleClose = () => {
    setOpenCart(false);
  };

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
      <NavLink to="/services" className="lg:ml-4">
        Services
      </NavLink>
      <NavLink to="/services" className="lg:ml-4">
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

  let user = false;

  return (
    <div className="">
      {/* Sub Menu */}
      <div className="bg-[#eeeeee] hidden lg:flex py-2 lg:px-16  flex-col  lg:flex-row justify-between">
        <div>
          <p className="lg:flex hidden  gap-1 items-center mt-2 font-semibold text-[15px] text-gray-500">
            <MdOutlineMarkEmailUnread /> Email : ahmedpolash732@gmail.com
          </p>
        </div>
        <div className="flex mx-auto md:mx-auto lg:mx-0 gap-2">
          <Link
            to="/sellerRegistration"
            className="flex py-1 gap-1 ml-4  border rounded-full cursor-pointer hover:border-red-500 duration-300 text-[14px] font-semibold items-center  border-gray-400 px-2"
          >
            <FaRegUser /> Seller Registration
          </Link>

          <div className="border-r-2 border-gray-300 h-7 flex justify-center items-center mt-2"></div>

          <div class="relative z-10 border-gray-300 group">
            <button class="flex gap-2 items-center px-4 text-[14px] py-2 rounded focus:outline-none">
              <img className="w-[20px]" src={us} alt="" /> English{" "}
              <FaAngleDown />
            </button>

            <div class="absolute left-0  text-[14px]  px-8 text-left py-3 cursor-pointer bg-white border border-gray-300 rounded shadow-md hidden group-hover:block">
              <p class="flex gap-1 mb-2  items-center">
                <img className="w-[20px]" src={us} alt="" /> English{" "}
              </p>
              <p class="flex gap-1 items-center">
                <img className="w-[20px]" src={bd} alt="" /> বাংলা{" "}
              </p>
            </div>
          </div>
          <div className="border-r-2 border-gray-300 h-7 flex justify-center items-center mt-2"></div>

          <div className="flex items-center gap-1 lg:gap-2">
            <TiSocialFacebook className="text-[20px] lg:text-[25px]" />
            <BsTwitterX className="text-[14px] lg:text-[17px]" />
            <FaLinkedin className="text-[14px] lg:text-[17px]" />
            <FaGithub className=" text-[15px] lg:text-[18px]" />
          </div>
        </div>
      </div>
      {/* Sub Menu */}

      <div className="px-5 lg:px-16">
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
                >
                  <option value="" selected>
                    Select Category
                  </option>
                  {category.map((c, i) => (
                    <option key={c} value={c}>
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
                "user available"
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
            <div
              className={`${
                open
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } lg:hidden transition-all duration-500 z-[99999] border border-gray-200 shadow-lg backdrop-blur-sm transform h-full w-[360px] md:w-[390px] bg-white text-black absolute top-0 left-0`}
            >
              <div className="flex justify-between">
                <button
                  className="px-4 relative text-[#FE2424] py-2 text-3xl font-semibold flex right-0 mt-2"
                  onClick={() => setOpen(false)}
                >
                  <FaHeart />
                </button>

                <div className="absolute left-8 top-2 bg-[#3bc177] h-6 text-white w-6 text-center rounded-full">
                  0
                </div>

                <button
                  className="px-4 text-[#FE2424] py-2 text-3xl font-semibold flex absolute right-0 mt-2"
                  onClick={() => setOpen(false)}
                >
                  <RxCross1 />
                </button>
              </div>

              {/* Login registration */}
              <div className="flex justify-center items-center gap-4">
                {user ? (
                  <div className=" cursor-pointer gap-2">
                    <span className="text-3xl flex items-center justify-center text-red-500">
                      <FaRegUserCircle />
                    </span>
                    <p className="font-semibold text-[18px]">Polash Ahmed</p>
                  </div>
                ) : (
                  <>
                    <FaRegUser className="hover:text-red-400 font-semibold duration-300" />

                    <Link
                      to="/login"
                      className="hover:text-red-400 font-semibold duration-300"
                    >
                      Login
                    </Link>
                    <div className="border-r-2  border-gray-300 h-5 flex justify-center items-center mt-1"></div>
                    <Link
                      to="/register"
                      className="hover:text-red-400 font-semibold duration-300"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>

              <ul className="flex uppercase flex-col p-5 gap-5 text-[18px]">
                {navList}
              </ul>

              <div className="flex justify-center items-center mx-a">
                <Link
                  to="/sellerRegistration"
                  className="flex gap-1 ml-2  border rounded-full cursor-pointer hover:border-red-500 duration-300 text-[14px] font-semibold py-3 items-center  border-gray-400 px-4 hover:bg-transparent hover:text-black  bg-black text-white"
                >
                  <FaRegUser /> Seller Registration
                </Link>
              </div>
            </div>
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
                <Link to='/cart' className="bg-[#FE2424] text-center text-white w-1/2 rounded-t-md py-3">
                  View Cart
                </Link>
                <Link to='/checkout' className="bg-[#FE2424] text-center text-white w-1/2 rounded-t-md py-3">
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
    </div>
  );
};

export default Navbar;
