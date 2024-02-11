import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { IoTrashBinOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../Responsive/Responsive.css";

const UserDashHome = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 flex-wrap md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
        <div className="flex justify-center items-center p-4 md:p-5 lg:p-5  bg-white rounded-md gap-4 md:gap-5 lg:gap-5">
          <div className="bg-green-100 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl ">
            <span className="text-xl text-green-800">
              <AiOutlineShoppingCart />
            </span>
          </div>
          <div className="flex flex-col justify-start items-start text-slate-600">
            <h2 className="text-2xl lg:text-3xl font-bold">25</h2>
            <span>Orders</span>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 md:p-5 lg:p-5 bg-white rounded-md gap-4  md:gap-5 lg:gap-5">
          <div className="bg-blue-100 w-[44px] h-[44px] rounded-full flex justify-center items-center text-xl ">
            <span className="text-xl text-blue-800">
              <CiClock2 />
            </span>
          </div>
          <div className="flex flex-col justify-start items-start text-slate-600">
            <h2 className="text-2xl lg:text-3xl font-bold">16</h2>
            <span>Pending Orders</span>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 md:p-5 lg:p-5 bg-white rounded-md gap-4  md:gap-5 lg:gap-5">
          <div className="bg-red-100 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl ">
            <span className="text-xl text-red-800">
              <IoTrashBinOutline />
            </span>
          </div>
          <div className="flex flex-col justify-start items-start text-slate-600">
            <h2 className="text-2xl lg:text-3xl  font-bold">4</h2>
            <span>Cancelled Orders</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 mt-5 example h-[56vh] w-[468px] md:w-[740px] lg:w-full rounded-md">
        <h2 className="text-lg font-semibold text-slate-600">Recent Orders</h2>
        <div className="pt-4 overflow-x-auto w-full">
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
                <tr className="border-b border-gray-200 ">
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
                    className="px-6 flex lg:flex-row flex-col  flex-wrap gap-2 py-4"
                  >
                    <Link>
                      <span className="bg-green-100 text-green-800 text-sm font-normal mr-2 px-2 lg:px-2.5 py-[1px] rounded cursor-pointer block text-center lg:text-left">
                        view
                      </span>
                    </Link>

                    <span className="bg-green-100 text-center lg:text-left text-green-800 text-sm font-normal mr-2 px-2 lg:px-2.5 py-[1px] rounded cursor-pointer ">
                      Pay Now
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashHome;
