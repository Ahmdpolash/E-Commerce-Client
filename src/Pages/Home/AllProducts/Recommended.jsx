import React, { useState } from "react";
import Container from "../../../Components/Container/Container";
import {
  FaArrowRight,
  FaEye,
  FaRegHeart,
  FaStar,
  FaArrowCircleRight,
} from "react-icons/fa";
import {
  FaBangladeshiTakaSign,
  FaCartShopping,
  FaCodeCompare,
  FaStarHalfStroke,
} from "react-icons/fa6";
import "../../Shop/shop.css";
import useProducts from "../../../Hooks/useProducts";
import { Link } from "react-router-dom";

const Recommended = () => {
  const { data, isLoading } = useProducts();
  return (
    <div className="bg-[#F1F1F1]">
      <Container>
        <div className="bg-white px-3 py-2 lg:py-6 shadow-md border mt-2">
          <h1 className="text-2xl font-semibold mb-2">Recommended To You</h1>

          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4">
            {data?.slice(5)?.map((product, i) => (
              <Link key={i} to="/details">
                <div className="card lg:h-[365px] bg-white relative cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3">
                  <img
                    className="mx-auto w-[160px] h-[140px] md:h-[170px] lg:h-[210px] md:w-full lg:w-full  rounded-md transition-opacity hover:duration-700 ease-in-out"
                    src={product?.images[0]}
                    alt="Product image"
                  />
                  <div className="">
                    {/* <div className="flex gap-1 lg:gap-2 items-center">
                      <img
                        className="w-[32px] h-[32px] border rounded-full"
                        src={product?.shopLogo}
                        alt={product?.shopName}
                      />
                      <p className="font-semibold text-[16px] text-gray-600 hover:text-red-500 duration-500">
                        {product?.shopName}
                      </p>
                    </div> */}

                    <h3 className="font-medium text-slate-800 my-1 mt-1 hover:text-red-500 duration-500">
                      {product?.product_name.slice(0, 50)}..
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
                        <FaBangladeshiTakaSign /> {product?.price}
                      </p>
                      <button className="block lg:hidden text-red-500 absolute bottom-5 right-4">
                        {" "}
                        <FaArrowCircleRight className="text-[21px]" />{" "}
                      </button>
                      {/* <button className="group-hover:bg-red-500 text-red-500 bg-gray-50 border-2 rounded-full px-2 lg:px-3 text-[13px] font-semibold py-1 lg:py-2 hidden lg:flex   items-center gap-1 group-hover:text-white duration-500">
                      Add to Cart <FaArrowRight className="mt-1" />
                    </button> */}

                      <div className="bg-gray-50 lg:flex hidden items-center gap-2 text-red-500 border border-slate-300 py-[5px]  hover:border hover:duration-500 hover:border-red-500 rounded-full px-2 lg:px-4 text-[13px] font-semibold">
                        Add To Cart
                        <span>
                          <FaArrowRight />
                        </span>
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
              </Link>
            ))}

            {isLoading && (
              <>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((j, i) => (
                  <div className="bg-white shadow-md border h-[240px] w-full p-3 rounded-md">
                    <div className="animate-pulse delay-1000">
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
        </div>

        <div className="mx-auto text-center my-4">
          <button className="bg-[#222222] hover:bg-red-500 duration-500 px-4 lg:px-6 py-2 rounded-md text-white">
            View More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Recommended;
