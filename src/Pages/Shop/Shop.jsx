import React, { useEffect, useState } from "react";
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
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

import "rc-slider/assets/index.css";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../../Components/Pagination";
import { Helmet } from "react-helmet";
import useProducts from "../../Hooks/useProducts";
import Ratings from "../../Components/Ratings";
import useCategory from "../../Hooks/useCategory";

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 15500]); // Initial price range

  // pagination
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(3);

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
  const [styles, setStyles] = useState("grid");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //!================================================filtering================================================
  const { data, isLoading } = useProducts([]);
  const { data: categoryItem } = useCategory();

  const [products, setProducts] = useState([]);

  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");
  const [cateFilter, setCateFilter] = useState("");

  useEffect(() => {
    if (category) {
      const filterProduct = data?.filter(
        (product) => product?.category === category
      );
      setProducts(filterProduct);
    } else {
      setProducts(data);
    }
  }, [category, data]);


  // useEffect(() => {
  //   if (cateFilter) {
  //     const filterProduct = data?.filter(
  //       (product) => product?.category === cateFilter
  //     );
  //     setProducts(...filterProduct);
  //   } else {
  //     setProducts(data);
  //   }
  // }, [cateFilter, data]);





  //! category filtering

  //!color filtering

  const colors = [
    "White",
    "Black",
    "Red",
    "Green",
    "Blue",
    "Silver",
    "Yellow",
    "Purple",
    "Gray",
  ];

  const [color, setColor] = useState("");
  // console.log(color);
  // useEffect(() => {
  //   if (color) {
  //     const filterProduct = data?.filter((product) => product?.color === color);
  //     setProducts(filterProduct);
  //   } else {
  //     setProducts(data);
  //   }
  // }, [color, data]);

  const handleClear = () => {
    setProducts(data);
  };

  useEffect(() => {
    scroll(0, 0);
  }, []);

  return (
    <div className="bg-[#F6F6F5]">
      <Helmet>
        <title>Shop.my || Shop</title>
      </Helmet>
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
              <h2
                onClick={handleClear}
                className="cursor-pointer text-gray-600 font-semibold"
              >
                Clear
              </h2>
            </div>

            <div className="py-3 space-y-2 pl-1">
              {categoryItem?.map((cate, idx) => (
                <div key={idx} className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input
                        onChange={(e) => setCateFilter(e.target.value)}
                        value={cate?.category}
                        type="checkbox"
                      />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">{cate.category}</h3>
                </div>
              ))}
            </div>
            {/* categories end*/}

            {/* colors */}

            <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
              <h1 className="text-xl text-gray-600 font-semibold ">Colors</h1>
              <h2
                onClick={handleClear}
                className="text-gray-600 cursor-pointer font-semibold"
              >
                Clear
              </h2>
            </div>

            <div className="py-3 space-y-2 pl-1">
              {colors?.map((item, idx) => (
                <div key={idx} className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input
                        // onChange={(e) => setColor(e.target.value)}
                        value={item}
                        type="checkbox"
                      />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">{item}</h3>
                </div>
              ))}
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
            <div className=" lg:h-[60px] w-full border-2 mb-5 bg-white">
              <div className="flex  items-center px-4 py-3 justify-between">
                <h2 className="font-semibold text-gray-800 text-[16px] md:text-xl lg:text-xl ">
                  ({data?.length}) Products
                </h2>
                <div className="flex gap-2 lg:gap-4 items-center">
                  <select
                    className="border outline-none py-1 text-center shadow-md border-gray-300"
                    name=""
                  >
                    <option value="">Sort By</option>
                    <option value="Hight to Low">Price High to Low</option>
                    <option value="Low to High">Price Low to High</option>
                  </select>

                  <span
                    onClick={() => setStyles("grid")}
                    className={`p-2 ${
                      styles === "grid" && "bg-slate-300"
                    } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                  >
                    <IoGrid className=" text-gray-700 text-[21px]" />
                  </span>

                  <span
                    onClick={() => setStyles("list")}
                    className={`p-2 ${
                      styles === "list" && "bg-slate-300"
                    } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                  >
                    <FaListUl className="text-[22px] text-gray-700" />
                  </span>
                </div>
              </div>
            </div>
            {/* product header end */}

            {/* products */}
            <div
              className={`grid  w-full ${
                styles === "grid"
                  ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
                  : "grid-cols-1 "
              } gap-3   `}
            >
              {products?.map((product, i) => (
                <div
                  key={product?._id}
                  className="card lg:h-[365px] bg-white  cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3"
                >
                  <div className="relative overflow-hidden">
                    {product?.discount ? (
                      <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                        -{product?.discount}%
                      </div>
                    ) : (
                      ""
                    )}

                    <img
                      className="mx-auto group-hover: w-[160px] h-[140px] md:h-[170px] lg:h-[210px] md:w-full lg:w-full  rounded-md transition-opacity hover:duration-700 ease-in-out"
                      src={product?.images[0]}
                      alt="Product image"
                    />

                    <ul className="flex gap-3 h-[75px] lg:h-[120px] bg-slate-100 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-700 -bottom-10 justify-center items-center  absolute w-full group-hover:bottom-0">
                      <li
                        onClick={() => handleAddToWishlist(product)}
                        className="w-[38px] shadow-md border h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[360deg] transition-all"
                      >
                        <AiFillHeart className="text-[20px]" />
                      </li>
                      <Link
                        to={`/details/${product?._id}`}
                        className="w-[38px] shadow-md border h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-red-500 hover:text-white hover:rotate-[360deg] transition-all"
                      >
                        <FaEye className="text-[18px]" />
                      </Link>
                      <li
                        onClick={() => handleAddToCart(product)}
                        className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center shadow-md border rounded-full hover:bg-violet-500 hover:text-white hover:rotate-[360deg] transition-all"
                      >
                        <AiOutlineShoppingCart className="text-[20px]" />
                      </li>
                      {/* <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[360deg] transition-all">
                   <AiOutlineShoppingCart  className="text-[20px]"/>
                 </li> */}
                    </ul>
                    {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-700"></div> */}
                  </div>

                  <div className="">
                    <Link to={`/details/${product._id}`}>
                      {" "}
                      <h3 className="font-medium text-slate-800 my-1 mt-1 hover:text-red-500 duration-500">
                        {product?.product_name.slice(0, 50)}..
                      </h3>
                    </Link>

                    <div className="flex">
                      <Ratings ratings={product?.review} /> ({product?.review})
                    </div>

                    <div className="pb-1 flex items-center justify-between">
                      <p className="font-semibold flex items-center gap-1 text-red-500 pb-2 transition-all duration-500 lg:mt-2">
                        <FaBangladeshiTakaSign /> {product?.price}
                      </p>
                      <button className="block lg:hidden text-red-500 absolute bottom-5 right-4">
                        {" "}
                        <FaArrowCircleRight className="text-[21px]" />{" "}
                      </button>

                      <div
                        onClick={() => handleAddToCart(product)}
                        className="bg-gray-50 lg:flex hidden items-center gap-2 text-red-500 border border-slate-300 py-[5px]  hover:border hover:duration-500 hover:border-red-500 rounded-full px-2 lg:px-4 text-[13px] font-semibold"
                      >
                        Add To Cart
                        <span>
                          <FaArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((j, i) => (
                    <div
                      key={i}
                      className="bg-white shadow-md border h-[240px] w-full p-3 rounded-md"
                    >
                      <div className="animate-pulse infinite delay-1000">
                        <div className="bg-gray-300 h-[120px] w-full rounded-lg"></div>
                        <div className="h-3 w-full bg-gray-300 my-3  rounded-lg"></div>
                        <div className="h-3 w-1/2 bg-gray-300 my-3  rounded-lg"></div>
                        <div className="flex mt-3 items-center gap-3 rounded-lg">
                          <div className="h-3 bg-gray-300 w-1/2  rounded-lg"></div>
                          <div className="h-3 bg-gray-300 w-1/2  rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* products end */}

            {/* ============================================== */}

            {/* pagination */}

            <div className="mt-5 mb-4">
              <Pagination
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                totalItem={20}
                parPage={perPage}
                showItem={Math.floor(20 / 3)}
              />
            </div>
            {/* pagination end */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
