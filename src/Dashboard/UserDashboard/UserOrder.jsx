import React from "react";
import { Link } from "react-router-dom";

const UserOrder = () => {
  return (
    <div>
      <div className="bg-white p-4 mt-5 rounded-md">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-slate-600">
            Recent Orders
          </h2>
          <select className="border border-gray-300 px-2 py-2" name="" id="">
            <option selected value="">Select Status</option>
            <option  value="confirm">Confirmed</option>
            <option  value="pending">Pending</option>
            <option  value="cancel">Canceled</option>
          </select>
        </div>
        <div className="pt-4">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Order Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-16 py-3">
                    Payment status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Order status
                  </th>
                  <th scope="col" className="px-20 py-3">
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
                    className="px-[80px] py-4 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="px-10 py-4 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>

                  <td scope="row" className="px-10 py-4">
                    <Link>
                      <span className="bg-green-100 text-green-800 text-sm font-normal mr-2 px-2.5 py-[1px] rounded">
                        view
                      </span>
                    </Link>

                    <span className="bg-green-100 text-green-800 text-sm font-normal mr-2 px-2.5 py-[1px] rounded cursor-pointer ">
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

export default UserOrder;
