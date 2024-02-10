import React from "react";
import DashHeaders from "../../Components/DashHeaders";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const SellerOrders = () => {
  return (
    <div className="px-2 md:px-3 lg:px-4">
      <DashHeaders />

      <section className="">
        <div className="bg-white  h-[83vh] mt-3 allProducts  w-[407px] px-3 lg:px-0 md:w-[733px] lg:w-full rounded-md">
          <div className="flex justify-between p-3">
            <select
              className="border border-slate-500 px-4 outline-none rounded-md"
              name=""
              id=""
            >
              <option value="5">5</option>
              <option value="15">15</option>
              <option value="25">25</option>
            </select>

            <input
              type="text"
              placeholder="Search.."
              className="border border-slate-500 hidden lg:block px-3 outline-none py-2 rounded-md"
            />
          </div>
          <div className="px-3 overflow-x-auto w-full">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left  text-gray-500">
                <thead className="text-sm text-slate-600  uppercase border-b border-slate-700">
                  <tr>
                    <th scope="col" className="py-3 px-4">
                      Order Id
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Price
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Payment Status
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Order Status
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Date
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {[1, 2, 3, 4, 5].map((o, i) => (
                    <tr className="border-b border-slate-300" key={i}>
                      <td
                        scope="row"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        #{i + 1}
                      </td>
                      <td
                        scope="row"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        $877
                      </td>
                      <td
                        scope="row"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        <span>Pending</span>
                      </td>
                      <td
                        scope="row"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        <span>Pending</span>
                      </td>
                      <td
                        scope="row"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        $02-07-2024
                      </td>
                      <td
                        scope="row"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        <Link
                          className="p-[6px] w-[30px] bg-green-500 text-white rounded hover:shadow-lg hover:shadow-green-500/50 flex justify-center items-center"
                        >
                          <FaEye />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellerOrders;
