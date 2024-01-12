import React from "react";
import Container from "../../Components/Container/Container";

import "./shop.css";
import {
  FaArrowCircleRight,
  FaArrowRight,
  FaEye,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";
import {
  FaBangladeshiTakaSign,
  FaCartShopping,
  FaCodeCompare,
  FaHeart,
  FaStarHalfStroke,
} from "react-icons/fa6";

const Shop = () => {
  return (
    <div className="bg-[#F6F6F5]">
      <div className="bg-blue-700 h-[250px] my-3 w-full"></div>
      <Container>
        <div className="grid grid-cols-1 gap-4 h-screen lg:grid-cols-4">
          <div className="col-span-1 border-2 bg-white px-5 py-4">
            <h1 className="text-2xl text-gray-800 font-semibold">Categories</h1>
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

            <h1 className="text-2xl text-gray-800 font-semibold">Price</h1>
          </div>

          <div className="col-span-3 ">
            <div className=" h-[60px] w-full border-2 mb-5 bg-white"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3  h-screen w-full ">
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
    <div className="text flex items-center gap-1">Add To Cart <FaArrowRight className="text-[13px] pt-[2px]"/> </div>
    <span className="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-cart2"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
        ></path>
      </svg>
    </span>
  </div>
</div>


                    </div>
                  </div>

                  <div className="absolute top-7  right-3 md:right-4 lg:right-5 opacity-0 group-hover:opacity-100 group-hover:block transition-all group-hover:duration-700 transform space-y-3 translate-x-full group-hover:translate-x-0">
                    <FaRegHeart className="text-red-500 text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaEye className="text-red-500 text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCodeCompare className="text-red-500 hover:rotate-[360deg] hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCartShopping className="text-red-500 hover:rotate-[360deg] hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
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

                    <h3 className="font-semibold  hover:text-red-500 duration-500">
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

                    <div className="pb-1 flex items-center justify-between lg:pb-3">
                      <p className="font-semibold flex items-center gap-1 text-red-500 pb-2 transition-all duration-500 lg:mt-2">
                        <FaBangladeshiTakaSign /> 5600
                      </p>
                      <button className="block lg:hidden text-red-500 absolute bottom-5 right-4">
                        {" "}
                        <FaArrowCircleRight className="text-[21px]" />{" "}
                      </button>
                      <button className="group-hover:bg-red-500 text-red-500 bg-gray-50 border-2 rounded-full px-2 lg:px-3 text-[13px] font-semibold py-1 lg:py-2 hidden lg:flex   items-center gap-1 group-hover:text-white duration-500">
                        Add to Cart <FaArrowRight className="mt-1" />
                      </button>
                    </div>
                  </div>

                  <div className="absolute top-7  right-3 md:right-4 lg:right-5 opacity-0 group-hover:opacity-100 group-hover:block transition-all group-hover:duration-700 transform space-y-3 translate-x-full group-hover:translate-x-0">
                    <FaRegHeart className="text-red-500 text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaEye className="text-red-500 text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCodeCompare className="text-red-500 hover:rotate-[360deg] hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCartShopping className="text-red-500 hover:rotate-[360deg] hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
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

                    <h3 className="font-semibold  hover:text-red-500 duration-500">
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

                    <div className="pb-1 flex items-center justify-between lg:pb-3">
                      <p className="font-semibold flex items-center gap-1 text-red-500 pb-2 transition-all duration-500 lg:mt-2">
                        <FaBangladeshiTakaSign /> 5600
                      </p>
                      <button className="block lg:hidden text-red-500 absolute bottom-5 right-4">
                        {" "}
                        <FaArrowCircleRight className="text-[21px]" />{" "}
                      </button>
                      <button className="group-hover:bg-red-500 text-red-500 bg-gray-50 border-2 rounded-full px-2 lg:px-3 text-[13px] font-semibold py-1 lg:py-2 hidden lg:flex   items-center gap-1 group-hover:text-white duration-500">
                        Add to Cart <FaArrowRight className="mt-1" />
                      </button>
                    </div>
                  </div>

                  <div className="absolute top-7  right-3 md:right-4 lg:right-5 opacity-0 group-hover:opacity-100 group-hover:block transition-all group-hover:duration-700 transform space-y-3 translate-x-full group-hover:translate-x-0">
                    <FaRegHeart className="text-red-500 text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaEye className="text-red-500 text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCodeCompare className="text-red-500 hover:rotate-[360deg] hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCartShopping className="text-red-500 hover:rotate-[360deg] hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
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

                    <h3 className="font-semibold  hover:text-red-500 duration-500">
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

                    <div className="pb-1 flex items-center justify-between lg:pb-3">
                      <p className="font-semibold flex items-center gap-1 text-red-500 pb-2 transition-all duration-500 lg:mt-2">
                        <FaBangladeshiTakaSign /> 5600
                      </p>
                      <button className="block lg:hidden text-red-500 absolute bottom-5 right-4">
                        {" "}
                        <FaArrowCircleRight className="text-[21px]" />{" "}
                      </button>
                      <button className="group-hover:bg-red-500 text-red-500 bg-gray-50 border-2 rounded-full px-2 lg:px-3 text-[13px] font-semibold py-1 lg:py-2 hidden lg:flex   items-center gap-1 group-hover:text-white duration-500">
                        Add to Cart <FaArrowRight className="mt-1" />
                      </button>
                    </div>
                  </div>

                  <div className="absolute top-7  right-3 md:right-4 lg:right-5 opacity-0 group-hover:opacity-100 group-hover:block transition-all group-hover:duration-700 transform space-y-3 translate-x-full group-hover:translate-x-0">
                    <FaRegHeart className="text-red-500 text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaEye className="text-red-500 text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCodeCompare className="text-red-500 hover:rotate-[360deg] hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                    <FaCartShopping className="text-red-500 hover:rotate-[360deg] hover:duration-700 transition-all text-[20px] md:text-[22px] lg:text-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
