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
              <div className="card relative cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3">
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

                  <h3 className="font-semibold text hover:text-red-500 duration-500">
                    Apple AirPods Max Over-Ear Wireless Headphone
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
              <div className="card relative cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3">
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

                  <h3 className="font-semibold text hover:text-red-500 duration-500">
                    Apple AirPods Max Over-Ear Wireless Headphone
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
              <div className="card relative cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3">
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

                  <h3 className="font-semibold text hover:text-red-500 duration-500">
                    Apple AirPods Max Over-Ear Wireless Headphone
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
              <div className="card relative cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3">
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

                  <h3 className="font-semibold text hover:text-red-500 duration-500">
                    Apple AirPods Max Over-Ear Wireless Headphone
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
              <div className="card relative cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3">
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

                  <h3 className="font-semibold text hover:text-red-500 duration-500">
                    Apple AirPods Max Over-Ear Wireless Headphone
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
      </Container>
    </div>
  );
};

export default Featured;
