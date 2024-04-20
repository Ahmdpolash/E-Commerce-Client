import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Helmet } from "react-helmet";
import { FaAngleRight } from "react-icons/fa";
import ShippingForm from "./ShippingForm";

const Checkout = () => {
  return (
    <div className="bg-[#F6F9FC]">
      <Helmet>
        <title>Shop.my | Shipping</title>
      </Helmet>
      {/* 
      <section className='bg-[url("https://i.ibb.co/HFyqg34/card.jpg")] h-[150px] md:h-[180px] lg:h-[220px] mt-1d bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shopp.my</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <FaAngleRight />
                </span>
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* stepper */}

      <div className="max-w-2xl px-5  lg:max-w-4xl cursor-pointer mx-auto relative pt-7 pb-3">
        <div className="max-w-4xl cursor-pointer mx-auto relative pt-7 pb-3">
          <div className="flex flex-row relative justify-between items-center">
            <div className="relative flex flex-col lg:flex-row items-center justify-center">
              <div className="rounded-full py-[7px] tracking-wide font-medium text-[16px] w-28 bg-[#F85606] text-white transition duration-500 ease-in-out border-2 border-[#F85606] flex items-center justify-center">
                Shipping
              </div>
              <div className="hidden lg:block h-full w-[150px] right-0 border-t-2 border-[#F85606]"></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-center">
              <div className="rounded-full py-[7px] tracking-wide font-medium text-[14px] lg:text-[16px] lg:w-40 bg-[#F85606] text-white transition duration-500 ease-in-out border-2 border-[#F85606] flex items-center justify-center">
                Order Summary
              </div>
              <div className="hidden lg:block h-full w-[150px] right-0 border-t-2 border-[#F85606]"></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-center">
              <div className="rounded-full py-[7px] tracking-wide font-medium text-[16px] lg:w-28 bg-[#F85606] text-white transition duration-500 ease-in-out border-2 border-[#F85606] flex items-center justify-center">
                Payment
              </div>
              <div className="hidden lg:block h-full w-[150px] right-0 border-t-2 border-[#F85606]"></div>
            </div>

            <div className="relative">
              <div className="rounded-full py-[7px] w-28 tracking-wide font-medium text-[17px] bg-[#F85606] text-white transition duration-500 ease-in-out border-2 border-[#F85606] flex items-center justify-center">
                Success
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ShippingForm />
      </div>
    </div>
  );
};

export default Checkout;
