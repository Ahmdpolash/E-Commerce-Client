import React from "react";
import { Link } from "react-router-dom";
import "../../Responsive/Responsive.css";

const UserOrder = () => {
  return (
    <div>
      <div className="bg-white p-4 lg:mt-5 rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-600">
            Recent Orders
          </h2>
          <select className="border outline-none border-gray-300 px-2 py-2" name="" id="">
            <option selected value="">
              Select Status
            </option>
            <option value="confirm">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="cancel">Canceled</option>
          </select>
        </div>
        <div className="pt-4">
          <div className="bg-white userOrderDash w-[365px] md:w-[700px] lg:w-full rounded-md">
           
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
      </div>
    </div>
  );
};

export default UserOrder;
