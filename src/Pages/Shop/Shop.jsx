import React, { useState } from "react";
import Container from "../../Components/Container/Container";

import "./shop.css";
import {
  FaAngleLeft,
  FaArrowCircleRight,
  FaArrowRight,
  FaEye,
  FaRegHeart,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import {
  FaBangladeshiTakaSign,
  FaCartShopping,
  FaCodeCompare,
  FaHeart,
  FaListUl,
  FaStarHalfStroke,
} from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import Slider from "rc-slider";
import { FaAngleRight } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";

import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 15500]); // Initial price range

  const formatPrice = (value) => {
    return `$${value}`;
  };

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  const handleStyle = {
    width: 22, // Increase the width
    height: 22, // Increase the height
    borderRadius: "50%", // Make it round
    backgroundColor: "#F6F6F5", // Set a custom color
    border: "2px solid #ef4444", // Add a border
    marginLeft: "-2px", // Adjust for the increased width
    marginTop: "-10px", // Adjust for the increased height
  };
  const trackStyle = {
    backgroundColor: "#ccc", // Set the track color to gray
    height: "4px", // Set the track height
  };

  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-[#F6F6F5]">

      {/* shop banner */}
      <section className='bg-[url("https://i.ibb.co/cySj5Q2/shop.gif")] h-[150px] md:h-[180px] lg:h-[220px] mt-3 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shop.my</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <FaAngleRight />
                </span>
                <span>Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* shop banner */}

      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {/* desktop sidebar */}
          <div className="col-span-1 hidden lg:block border-2 bg-white px-5 py-4">
            {/* categories */}
            <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
              <h1 className="text-xl text-gray-600 font-semibold ">
                Categories
              </h1>
              <h2 className="text-gray-600 font-semibold">Clear</h2>
            </div>

            <div className="py-3 space-y-2 pl-1">
              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">Phones</h3>
              </div>
              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">Tablet</h3>
              </div>
              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">Laptops</h3>
              </div>
              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">Shoes</h3>
              </div>
              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">Watches</h3>
              </div>
              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">Clothing</h3>
              </div>

              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">Pants</h3>
              </div>
              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">T-Shirt</h3>
              </div>
            </div>
            {/* categories end*/}

            {/* colors */}

            <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
              <h1 className="text-xl text-gray-600 font-semibold ">Colors</h1>
              <h2 className="text-gray-600 font-semibold">Clear</h2>
            </div>

            <div className="py-3 space-y-2 pl-1">
              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">White</h3>
              </div>

              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">Red</h3>
              </div>
              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">Blue</h3>
              </div>
              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">Green</h3>
              </div>

              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">Pink</h3>
              </div>
              <div className="flex  items-center gap-2">
                <div>
                  <label className="container">
                    <input type="checkbox" />
                    <svg className="w-4 h-4" viewBox="0 0 64 64">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>

                <h3 className="text-gray-700 text-[17px]">Silver</h3>
              </div>
            </div>

            {/* colors end */}
            {/* price */}

            <h1 className="text-xl mb-3 border-b-2 border-gray-200 py-1 text-[#4b5563] font-semibold">
              Price
            </h1>

            <div className="px-2 space-y-2 ">
              <Slider
                range
                min={0}
                max={15500}
                value={priceRange}
                onChange={handleSliderChange}
                className="ml-2"
                handleStyle={[handleStyle, handleStyle]}
                trackStyle={[trackStyle, trackStyle]}
              />
              <div>
                <p className="text-gray-500 text-[16px] font-semibold">
                  Price:{" "}
                  <span className="text-[#ef4444] font-bold">
                    {formatPrice(priceRange[0])}
                  </span>{" "}
                  to
                  <span className="text-[#ef4444] font-bold">
                    {" "}
                    {formatPrice(priceRange[1])}
                  </span>
                </p>
              </div>
            </div>
            <button class="px-5 my-3 w-full text-white py-2 text-center rounded bg-[#ef4444] border-gray-400">
              Filter
            </button>

            {/* price end */}

            {/* rating */}
            <div>
              <h1 className="text-xl mb-3 border-b-2 border-gray-200 py-1 text-[#4b5563] font-semibold">
                Rating
              </h1>
              <div className="flex gap-3 mb-2">
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
              </div>
              <div className="flex gap-3 mb-2">
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
              </div>
              <div className="flex gap-3 mb-2">
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
              </div>
              <div className="flex gap-3 mb-2">
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
              </div>
              <div className="flex gap-3 mb-2">
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
              </div>
              <div className="flex gap-3">
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
              </div>
            </div>

            {/* rating end */}
          </div>
          {/* desktop sidebar */}

          {/* mobile sidebar */}
          <div className="block relative lg:hidden">
            <div
              onClick={handleOpen}
              className={`bg-[#F85606] cursor-pointer  -left-0 top-[180px] md:top-[213px] z-30 fixed inline hover:bg-black duration-500 px-1 rounded-r-md py-4 text-white ${
                isOpen ? "hidden" : ""
              }`}
            >
              <FaAngleRight size={22} />
            </div>
            <div
              onClick={handleClose}
              className={`bg-[#F85606] cursor-pointer  left-[75%] md:left-[360px] top-[180px] md:top-[213px] fixed inline px-1 hover:bg-black duration-500 rounded-r-md py-4 z-50 text-white ${
                isOpen ? "" : "hidden"
              }`}
            >
              <FaAngleLeft className="duration-500 ease-in" size={24} />
            </div>

            

            <div
              className={`${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } top-0  transition-all duration-500 left-0 z-[9999] w-[320px] md:w-[360px] fixed overflow-auto h-full border-r-2 shadow-2xl border-gray-100 p-4 bg-white`}
            >
              <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
                <h1 className="text-xl text-gray-600 font-semibold ">
                  Categories
                </h1>
                <h2 className="text-gray-600 font-semibold">Clear</h2>
              </div>
              <div className="py-3 space-y-2 pl-1">
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Phones</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Tablet</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Laptops</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Shoes</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Watches</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Clothing</h3>
                </div>

                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Pants</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">T-Shirt</h3>
                </div>
              </div>

              <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
                <h1 className="text-xl text-gray-600 font-semibold ">Colors</h1>
                <h2 className="text-gray-600 font-semibold">Clear</h2>
              </div>

              <div className="py-3 space-y-2 pl-1">
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">White</h3>
                </div>

                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Red</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Blue</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Green</h3>
                </div>

                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Pink</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Silver</h3>
                </div>
              </div>

              {/* mobile price */}
              <h1 className="text-xl mb-3 border-b-2 border-gray-200 py-1 text-[#4b5563] font-semibold">
                Price
              </h1>

              <div className="px-2 space-y-2 ">
                <Slider
                  range
                  min={0}
                  max={15500}
                  value={priceRange}
                  onChange={handleSliderChange}
                  className="ml-2"
                  handleStyle={[handleStyle, handleStyle]}
                  trackStyle={[trackStyle, trackStyle]}
                />
                <div>
                  <p className="text-gray-500 text-[16px] font-semibold">
                    Price:{" "}
                    <span className="text-[#ef4444] font-bold">
                      {formatPrice(priceRange[0])}
                    </span>{" "}
                    to
                    <span className="text-[#ef4444] font-bold">
                      {" "}
                      {formatPrice(priceRange[1])}
                    </span>
                  </p>
                </div>
              </div>
              <button class="px-5 my-3 w-full text-white py-2 text-center rounded bg-[#ef4444] border-gray-400">
                Filter
              </button>
              {/* mobile price end */}
            </div>

          


          </div>
          {/* mobile sidebar end */}

          <div className="col-span-3 ">
            {/* product header */}
            <div className=" h-[60px] w-full border-2 mb-5 bg-white">
              <div className="flex  items-center px-4 py-3 justify-between">
                <h2 className="font-semibold text-gray-800 text-[18px] md:text-xl lg:text-xl ">
                  (13) Products
                </h2>
                <div className="flex gap-4 items-center">
                  <select
                    className="border outline-none py-1 text-center shadow-md border-gray-300"
                    name=""
                  >
                    <option value="">Sort By</option>
                    <option value="Hight to Low">Price High to Low</option>
                    <option value="Low to High">Price Low to High</option>
                  </select>

                  <span className="bg-gray-200 hidden md:block lg:block border cursor-pointer px-1 py-1">
                    <IoGrid className=" text-gray-700 text-[21px]" />
                  </span>
                  <span className="hidden md:block lg:block cursor-pointer">
                    <FaListUl className="text-[22px] text-gray-700" />
                  </span>
                </div>
              </div>
            </div>
            {/* product header end */}

            {/* product card */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3   w-full ">
              <div>
                <div className="card bg-white relative cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3">
                  <img
                    className="mx-auto w-[160px] md:w-[180px] lg:w-[200px] transition-opacity hover:duration-700 ease-in-out"
                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/48-home_default/the-adventure-begins-framed-poster.jpg"
                    alt=""
                  />
                  <div className="">
                    <div className="flex gap-1 lg:gap-2 items-center">
                      <img
                        className="w-[32px] h-[32px] border rounded-full"
                        src="https://www.thepixelfreak.co.uk/wp-content/uploads/2019/05/Entwined-M-Logo.png"
                        alt=""
                      />
                      <p className="font-semibold text-[16px] text-gray-600 hover:text-red-500 duration-500">
                        Gadzet Zone
                      </p>
                    </div>

                    <h3 className="font-semibold hover:text-red-500 duration-500">
                      Apple AirPods Max Over-Ear
                    </h3>
                    <div className="flex items-center gap-1 lg:gap-2 py-1">
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />

                      <FaStarHalfStroke className="text-[#F6BA00]" />
                      <p>(1)</p>
                    </div>

                    <div className="pb-1 flex items-center justify-between">
                      <p className="font-semibold flex items-center gap-1 text-red-500 pb-2 transition-all duration-500 lg:mt-2">
                        <FaBangladeshiTakaSign /> 5600
                      </p>
                      <button className="block lg:hidden text-red-500 absolute bottom-5 right-4">
                        {" "}
                        <FaArrowCircleRight className="text-[21px]" />{" "}
                      </button>
                      {/* <button className="group-hover:bg-red-500 text-red-500 bg-gray-50 border-2 rounded-full px-2 lg:px-3 text-[13px] font-semibold py-1 lg:py-2 hidden lg:flex   items-center gap-1 group-hover:text-white duration-500">
                        Add to Cart <FaArrowRight className="mt-1" />
                      </button> */}

                      <div className="button bg-gray-50 hidden lg:block border-2 rounded-full px-2 lg:px-4 text-[13px] font-semibold">
                        <div className="button-wrapper">
                          <div className="text flex items-center gap-1">
                            Add To Cart{" "}
                            <FaArrowRight className="text-[13px] pt-[2px]" />{" "}
                          </div>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-cart2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-7  right-3 md:right-4 lg:right-5 opacity-0 group-hover:opacity-100 group-hover:block transition-all group-hover:duration-700 transform space-y-3 translate-x-full group-hover:translate-x-0">
                    <div class="con-like">
                      <input
                        className="like"
                        type="checkbox"
                        title="Bookmark"
                      />
                      <div className="checkmark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="outline"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="filled"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="100"
                          width="100"
                          className="celebrate"
                        >
                          <polygon
                            className="poly"
                            points="10,10 20,20"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="10,50 20,50"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="20,80 30,70"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="90,10 80,20"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="90,50 80,50"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="80,80 70,70"
                          ></polygon>
                        </svg>
                      </div>
                    </div>

                    <FaEye className="text-red-500 text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCodeCompare className="text-red-500 hover:rotate-[360deg] hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCartShopping className="text-red-500 hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                  </div>
                </div>
              </div>
              <div>
                <div className="card bg-white relative cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3">
                  <img
                    className="mx-auto w-[160px] md:w-[180px] lg:w-[200px] transition-opacity hover:duration-700 ease-in-out"
                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/48-home_default/the-adventure-begins-framed-poster.jpg"
                    alt=""
                  />
                  <div className="">
                    <div className="flex gap-1 lg:gap-2 items-center">
                      <img
                        className="w-[32px] h-[32px] border rounded-full"
                        src="https://www.thepixelfreak.co.uk/wp-content/uploads/2019/05/Entwined-M-Logo.png"
                        alt=""
                      />
                      <p className="font-semibold text-[16px] text-gray-600 hover:text-red-500 duration-500">
                        Gadzet Zone
                      </p>
                    </div>

                    <h3 className="font-semibold hover:text-red-500 duration-500">
                      Apple AirPods Max Over-Ear
                    </h3>
                    <div className="flex items-center gap-1 lg:gap-2 py-1">
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />

                      <FaStarHalfStroke className="text-[#F6BA00]" />
                      <p>(1)</p>
                    </div>

                    <div className="pb-1 flex items-center justify-between">
                      <p className="font-semibold flex items-center gap-1 text-red-500 pb-2 transition-all duration-500 lg:mt-2">
                        <FaBangladeshiTakaSign /> 5600
                      </p>
                      <button className="block lg:hidden text-red-500 absolute bottom-5 right-4">
                        {" "}
                        <FaArrowCircleRight className="text-[21px]" />{" "}
                      </button>
                      {/* <button className="group-hover:bg-red-500 text-red-500 bg-gray-50 border-2 rounded-full px-2 lg:px-3 text-[13px] font-semibold py-1 lg:py-2 hidden lg:flex   items-center gap-1 group-hover:text-white duration-500">
                        Add to Cart <FaArrowRight className="mt-1" />
                      </button> */}

                      <div className="button bg-gray-50 hidden lg:block border-2 rounded-full px-2 lg:px-4 text-[13px] font-semibold">
                        <div className="button-wrapper">
                          <div className="text flex items-center gap-1">
                            Add To Cart{" "}
                            <FaArrowRight className="text-[13px] pt-[2px]" />{" "}
                          </div>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-cart2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-7  right-3 md:right-4 lg:right-5 opacity-0 group-hover:opacity-100 group-hover:block transition-all group-hover:duration-700 transform space-y-3 translate-x-full group-hover:translate-x-0">
                    <div class="con-like">
                      <input
                        className="like"
                        type="checkbox"
                        title="Bookmark"
                      />
                      <div className="checkmark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="outline"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="filled"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="100"
                          width="100"
                          className="celebrate"
                        >
                          <polygon
                            className="poly"
                            points="10,10 20,20"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="10,50 20,50"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="20,80 30,70"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="90,10 80,20"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="90,50 80,50"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="80,80 70,70"
                          ></polygon>
                        </svg>
                      </div>
                    </div>

                    <FaEye className="text-red-500 text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCodeCompare className="text-red-500 hover:rotate-[360deg] hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCartShopping className="text-red-500 hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                  </div>
                </div>
              </div>
              <div>
                <div className="card bg-white relative cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3">
                  <img
                    className="mx-auto w-[160px] md:w-[180px] lg:w-[200px] transition-opacity hover:duration-700 ease-in-out"
                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/48-home_default/the-adventure-begins-framed-poster.jpg"
                    alt=""
                  />
                  <div className="">
                    <div className="flex gap-1 lg:gap-2 items-center">
                      <img
                        className="w-[32px] h-[32px] border rounded-full"
                        src="https://www.thepixelfreak.co.uk/wp-content/uploads/2019/05/Entwined-M-Logo.png"
                        alt=""
                      />
                      <p className="font-semibold text-[16px] text-gray-600 hover:text-red-500 duration-500">
                        Gadzet Zone
                      </p>
                    </div>

                    <h3 className="font-semibold hover:text-red-500 duration-500">
                      Apple AirPods Max Over-Ear
                    </h3>
                    <div className="flex items-center gap-1 lg:gap-2 py-1">
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />

                      <FaStarHalfStroke className="text-[#F6BA00]" />
                      <p>(1)</p>
                    </div>

                    <div className="pb-1 flex items-center justify-between">
                      <p className="font-semibold flex items-center gap-1 text-red-500 pb-2 transition-all duration-500 lg:mt-2">
                        <FaBangladeshiTakaSign /> 5600
                      </p>
                      <button className="block lg:hidden text-red-500 absolute bottom-5 right-4">
                        {" "}
                        <FaArrowCircleRight className="text-[21px]" />{" "}
                      </button>
                      {/* <button className="group-hover:bg-red-500 text-red-500 bg-gray-50 border-2 rounded-full px-2 lg:px-3 text-[13px] font-semibold py-1 lg:py-2 hidden lg:flex   items-center gap-1 group-hover:text-white duration-500">
                        Add to Cart <FaArrowRight className="mt-1" />
                      </button> */}

                      <div className="button bg-gray-50 hidden lg:block border-2 rounded-full px-2 lg:px-4 text-[13px] font-semibold">
                        <div className="button-wrapper">
                          <div className="text flex items-center gap-1">
                            Add To Cart{" "}
                            <FaArrowRight className="text-[13px] pt-[2px]" />{" "}
                          </div>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-cart2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-7  right-3 md:right-4 lg:right-5 opacity-0 group-hover:opacity-100 group-hover:block transition-all group-hover:duration-700 transform space-y-3 translate-x-full group-hover:translate-x-0">
                    <div class="con-like">
                      <input
                        className="like"
                        type="checkbox"
                        title="Bookmark"
                      />
                      <div className="checkmark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="outline"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="filled"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="100"
                          width="100"
                          className="celebrate"
                        >
                          <polygon
                            className="poly"
                            points="10,10 20,20"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="10,50 20,50"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="20,80 30,70"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="90,10 80,20"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="90,50 80,50"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="80,80 70,70"
                          ></polygon>
                        </svg>
                      </div>
                    </div>

                    <FaEye className="text-red-500 text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCodeCompare className="text-red-500 hover:rotate-[360deg] hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCartShopping className="text-red-500 hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                  </div>
                </div>
              </div>

              <div>
                <div className="card bg-white relative cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3">
                  <img
                    className="mx-auto w-[160px] md:w-[180px] lg:w-[200px] transition-opacity hover:duration-700 ease-in-out"
                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/48-home_default/the-adventure-begins-framed-poster.jpg"
                    alt=""
                  />
                  <div className="">
                    <div className="flex gap-1 lg:gap-2 items-center">
                      <img
                        className="w-[32px] h-[32px] border rounded-full"
                        src="https://www.thepixelfreak.co.uk/wp-content/uploads/2019/05/Entwined-M-Logo.png"
                        alt=""
                      />
                      <p className="font-semibold text-[16px] text-gray-600 hover:text-red-500 duration-500">
                        Gadzet Zone
                      </p>
                    </div>

                    <h3 className="font-semibold hover:text-red-500 duration-500">
                      Apple AirPods Max Over-Ear
                    </h3>
                    <div className="flex items-center gap-1 lg:gap-2 py-1">
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />

                      <FaStarHalfStroke className="text-[#F6BA00]" />
                      <p>(1)</p>
                    </div>

                    <div className="pb-1 flex items-center justify-between">
                      <p className="font-semibold flex items-center gap-1 text-red-500 pb-2 transition-all duration-500 lg:mt-2">
                        <FaBangladeshiTakaSign /> 5600
                      </p>
                      <button className="block lg:hidden text-red-500 absolute bottom-5 right-4">
                        {" "}
                        <FaArrowCircleRight className="text-[21px]" />{" "}
                      </button>
                      {/* <button className="group-hover:bg-red-500 text-red-500 bg-gray-50 border-2 rounded-full px-2 lg:px-3 text-[13px] font-semibold py-1 lg:py-2 hidden lg:flex   items-center gap-1 group-hover:text-white duration-500">
                        Add to Cart <FaArrowRight className="mt-1" />
                      </button> */}

                      <div className="button bg-gray-50 hidden lg:block border-2 rounded-full px-2 lg:px-4 text-[13px] font-semibold">
                        <div className="button-wrapper">
                          <div className="text flex items-center gap-1">
                            Add To Cart{" "}
                            <FaArrowRight className="text-[13px] pt-[2px]" />{" "}
                          </div>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-cart2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-7  right-3 md:right-4 lg:right-5 opacity-0 group-hover:opacity-100 group-hover:block transition-all group-hover:duration-700 transform space-y-3 translate-x-full group-hover:translate-x-0">
                    <div class="con-like">
                      <input
                        className="like"
                        type="checkbox"
                        title="Bookmark"
                      />
                      <div className="checkmark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="outline"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="filled"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="100"
                          width="100"
                          className="celebrate"
                        >
                          <polygon
                            className="poly"
                            points="10,10 20,20"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="10,50 20,50"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="20,80 30,70"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="90,10 80,20"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="90,50 80,50"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="80,80 70,70"
                          ></polygon>
                        </svg>
                      </div>
                    </div>

                    <FaEye className="text-red-500 text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCodeCompare className="text-red-500 hover:rotate-[360deg] hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCartShopping className="text-red-500 hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                  </div>
                </div>
              </div>

              <div>
                <div className="card bg-white relative cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3">
                  <img
                    className="mx-auto w-[160px] md:w-[180px] lg:w-[200px] transition-opacity hover:duration-700 ease-in-out"
                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/48-home_default/the-adventure-begins-framed-poster.jpg"
                    alt=""
                  />
                  <div className="">
                    <div className="flex gap-1 lg:gap-2 items-center">
                      <img
                        className="w-[32px] h-[32px] border rounded-full"
                        src="https://www.thepixelfreak.co.uk/wp-content/uploads/2019/05/Entwined-M-Logo.png"
                        alt=""
                      />
                      <p className="font-semibold text-[16px] text-gray-600 hover:text-red-500 duration-500">
                        Gadzet Zone
                      </p>
                    </div>

                    <h3 className="font-semibold hover:text-red-500 duration-500">
                      Apple AirPods Max Over-Ear
                    </h3>
                    <div className="flex items-center gap-1 lg:gap-2 py-1">
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />
                      <FaStar className="text-[#F6BA00]" />

                      <FaStarHalfStroke className="text-[#F6BA00]" />
                      <p>(1)</p>
                    </div>

                    <div className="pb-1 flex items-center justify-between">
                      <p className="font-semibold flex items-center gap-1 text-red-500 pb-2 transition-all duration-500 lg:mt-2">
                        <FaBangladeshiTakaSign /> 5600
                      </p>
                      <button className="block lg:hidden text-red-500 absolute bottom-5 right-4">
                        {" "}
                        <FaArrowCircleRight className="text-[21px]" />{" "}
                      </button>
                      {/* <button className="group-hover:bg-red-500 text-red-500 bg-gray-50 border-2 rounded-full px-2 lg:px-3 text-[13px] font-semibold py-1 lg:py-2 hidden lg:flex   items-center gap-1 group-hover:text-white duration-500">
                        Add to Cart <FaArrowRight className="mt-1" />
                      </button> */}

                      <div className="button bg-gray-50 hidden lg:block border-2 rounded-full px-2 lg:px-4 text-[13px] font-semibold">
                        <div className="button-wrapper">
                          <div className="text flex items-center gap-1">
                            Add To Cart{" "}
                            <FaArrowRight className="text-[13px] pt-[2px]" />{" "}
                          </div>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-cart2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-7  right-3 md:right-4 lg:right-5 opacity-0 group-hover:opacity-100 group-hover:block transition-all group-hover:duration-700 transform space-y-3 translate-x-full group-hover:translate-x-0">
                    <div class="con-like">
                      <input
                        className="like"
                        type="checkbox"
                        title="Bookmark"
                      />
                      <div className="checkmark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="outline"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="filled"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="100"
                          width="100"
                          className="celebrate"
                        >
                          <polygon
                            className="poly"
                            points="10,10 20,20"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="10,50 20,50"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="20,80 30,70"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="90,10 80,20"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="90,50 80,50"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="80,80 70,70"
                          ></polygon>
                        </svg>
                      </div>
                    </div>

                    <FaEye className="text-red-500 text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCodeCompare className="text-red-500 hover:rotate-[360deg] hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCartShopping className="text-red-500 hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* product card  end*/}

            {/* ============================================== */}

            {/* pagination */}

            <div className="mt-5 mb-4">
              <div className="flex">
                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 font-medium rounded-md cursor-not-allowed"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-blue-500 hover:text-gray-200 rounded-md"
                >
                  1
                </a>
                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-blue-500 hover:text-gray-200 rounded-md"
                >
                  2
                </a>
                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-blue-500 hover:text-gray-200 rounded-md"
                >
                  3
                </a>
                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-blue-500 hover:text-gray-200 rounded-md"
                >
                  Next
                </a>
              </div>
            </div>
            {/* pagination end */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
