import React, { useState } from "react";
import Container from "../../../Components/Container/Container";
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
import '../../Shop/shop.css'

const Featured = () => {
  return (
    <div className="bg-[#F1F1F1]">
      <Container>
        <div className="py-2 lg:py-6 bg-white px-3">
          <div className="flex items-center gap-2">
            <h1 className="text-xl lg:text-2xl mb-2 font-semibold">
              Featured Collection
            </h1>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">

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
                    <input className="like" type="checkbox" title="Bookmark" />
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
                    <input className="like" type="checkbox" title="Bookmark" />
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
                    <input className="like" type="checkbox" title="Bookmark" />
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
                    <input className="like" type="checkbox" title="Bookmark" />
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
                    <input className="like" type="checkbox" title="Bookmark" />
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
        </div>
      </Container>
    </div>
  );
};

export default Featured;
