import React, { useState } from "react";
import DarkMood from "./darkmood/DarkMood";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";

import "../../Responsive/Responsive.css";
import { FaList } from "react-icons/fa";
import MobileSideNav from "./MobileSideNav";
import useAuth from "../../Hooks/useAuth";
import { RxCross2 } from "react-icons/rx";
import { CiCircleInfo } from "react-icons/ci";
import SellerPieChart from "./SellerPieChart";

const SellerDashHome = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  const state = {
    series: [
      {
        name: "Orders",
        data: [34, 65, 34, 65, 34, 34, 34, 56, 23, 67, 23, 45],
      },
      {
        name: "Revenue",
        data: [34, 32, 45, 32, 34, 34, 43, 56, 65, 67, 45, 78],
      },
      {
        name: "Sales",
        data: [78, 32, 34, 54, 65, 34, 54, 21, 54, 43, 45, 43],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#111",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#111",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apl",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apl",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="py- px-2 md:px-4 lg:px-5 mb-6">
      {/* screen onclick */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen backdrop-blur-sm top-0 left-0 z-10`}
      ></div>
      {/* screen onclick */}

      {/*--------------------- here header section start here---------------- */}
      <div className="header bg-white mt-2  w-full rounded-md mb-2">
        <div className="flex justify-between items-center p-3">
          <div>
            {/* mobile menu icon */}
            <div className="block menuIcon lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="bg-indigo-500 py-2 px-2 text-white rounded-md text-xl"
              >
                <FaList />
              </button>
            </div>
            {/* mobile menu icon */}

            <input
              type="text"
              placeholder="Search.."
              className="outline-none hidden lg:block border border-gray-300 rounded-md shadow-sm w-11/12 py-2 px-3"
            />
          </div>

          <div className="">
            <div className="flex  items-center gap-4">
              <div className="">
                <DarkMood />
              </div>
              <div className="sellerInfo">
                <h1 className="font-semibold">{user?.displayName}</h1>
                <p className="text-right text-[14px] font-medium text-slate-700">
                  Seller
                </p>
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3g0kIKYCB-w9U0l4Srnvq3s7KLnR6JnArw&usqp=CAU"
                  alt=""
                  className="w-[50px] sellerImg h-[50px] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------here section end here------------- */}

      {/* ----------------------mobile sidebar---------------------- */}
      <div
        className={`w-[265px] mobileSideNav lg:hidden md:w-[340px] border-r-2 fixed bg-white top-0 z-[9999] h-full overflow-y-auto transition-all ${
          open ? "left-0" : "-left-[265px] md:-left-[340px] lg:left-0"
        }`}
      >
        <MobileSideNav />
      </div>
      {/*----------------------- mobile sidebar-------------------------- */}

      {/* -----------------------the summary box start here---------------------- */}

      <section className="my-5 box">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 res lg:grid-cols-4 gap-4  md:gap-5 lg:gap-6">
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
      </section>
      {/*------------------ the summary box end here-------------------- */}

      {/*--------------- the bar chart start here-------------------- */}
      <section className="flex flex-col gap-2 lg:flex-row">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-white sellerBarChart p-4 rounded-md">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>

        <div className="w-full flex-1 h-[397px] bg-white rounded-md">
          <div className="flex justify-between items-center px-4 py-2">
            <h1 className="text-slate-700 font-medium flex gap-2 items-center text-[18px]">
              <CiCircleInfo className="text-slate-800" />
              Sales Overview
            </h1>
            <button className="text- cursor-pointer font-medium flex gap-1 items-center text-[16px]">
              <RxCross2 className="mt-1 text-[19px]" />
            </button>
          </div>

          <SellerPieChart />
        </div>
      </section>
      {/* ----------------the bar chart end here------------------ */}

      {/* -----------------this is the order table start here--------------  */}
      <section className="mt-3  lg:mt-0" id="Order table">
        <div className="bg-white lg:p-4 lg:mt-5 rounded-md">
          <div className="flex p-3 items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-600">
              Recent Orders
            </h2>
            <h3>View All</h3>
          </div>
          <div className="pt-2 lg:pt-4">
            <div className="bg-white sellerTable  w-[350px] px-2 lg:px-0 md:w-[700px] lg:w-full rounded-md">
              <div className=" overflow-x-auto w-full">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left  text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                      <tr>
                        <th scope="col" className="px-6 py-2 lg:py-3">
                          Order Id
                        </th>
                        <th scope="col" className="px-6 py-2 lg:py-3">
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-10 md:px-12 lg:px-14 py-2 lg:py-3"
                        >
                          Payment status
                        </th>
                        <th scope="col" className="px-6 py-2 lg:py-3">
                          Order status
                        </th>
                        <th
                          scope="col"
                          className="px-10 md:px-12 lg:px-16 py-2 lg:py-3"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {[1, 2, 3, 4].map((t, i) => (
                        <tr key={i} className="border-b border-gray-200 ">
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium whitespace-nowrap"
                          >
                            5444463155446
                          </td>
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium whitespace-nowrap"
                          >
                            $145
                          </td>
                          <td
                            scope="row"
                            className="px-[73px] py-4 font-medium whitespace-nowrap"
                          >
                            Pending
                          </td>
                          <td
                            scope="row"
                            className="px-10 py-4 font-medium whitespace-nowrap"
                          >
                            Pending
                          </td>

                          <td
                            scope="row"
                            className="px-16 flex lg:flex-row flex-col  flex-wrap gap-2 py-4"
                          >
                            <Link>
                              <span className="bg-green-100 text-green-800 text-sm font-normal mr-2 px-2 lg:px-2.5 py-[1px] rounded cursor-pointer block text-center lg:text-left">
                                view
                              </span>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------this is the order table end here---------------------  */}
    </div>
  );
};

export default SellerDashHome;
