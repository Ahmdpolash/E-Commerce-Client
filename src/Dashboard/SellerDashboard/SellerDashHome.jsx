import React from "react";
import DarkMood from "./darkmood/DarkMood";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";

const SellerDashHome = () => {
  return (
    <div className="py-3 px-5">
      {/* headers */}
      <div className="header bg-white py-1  w-full rounded-md mb-2">
        <div className="flex justify-between items-center p-3">
          <div>
            <input
              type="text"
              placeholder="Search.."
              className="outline-none border border-gray-300 rounded-md shadow-sm w-11/12 py-2 px-3"
            />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <div>
                <DarkMood />
              </div>
              <div>
                <h1 className="font-semibold">Polash Ahmed</h1>
                <p className="text-right text-[14px] font-medium text-slate-700">
                  Seller
                </p>
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3g0kIKYCB-w9U0l4Srnvq3s7KLnR6JnArw&usqp=CAU"
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* box */}

      <div className="my-5">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  md:gap-5 lg:gap-6">
          <div className="flex justify-between items-center p-5 bg-white rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-slate-600">
              <h2 className="text-3xl font-bold">$188</h2>
              <span className="text-md font-medium">Total Sales</span>
            </div>
            <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
              <BsCurrencyDollar className="text-[#28c76f] shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center p-5 bg-white rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-slate-600">
              <h2 className="text-3xl font-bold">25</h2>
              <span className="text-md font-medium">Products</span>
            </div>
            <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
              <RiProductHuntLine className="text-[#cd00e8] shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center p-5 bg-white rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-slate-600">
              <h2 className="text-3xl font-bold">14</h2>
              <span className="text-md font-medium">Orders</span>
            </div>
            <div className="w-[46px] h-[47px] rounded-full bg-[#46d9ea1f] flex justify-center items-center text-xl">
              <AiOutlineShoppingCart className="text-[#4ec1cc] shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center p-5 bg-white rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-slate-600">
              <h2 className="text-3xl font-bold">0</h2>
              <span className="text-md font-medium">Pending orders</span>
            </div>
            <div className="w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl">
              <MdPendingActions className="text-[#7367f0] shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* chart */}

      <div>
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#283046] p-4 rounded-md">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
      {/* chart */}
    </div>
  );
};

export default SellerDashHome;
