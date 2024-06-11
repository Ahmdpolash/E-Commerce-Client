import React from "react";
import DashHeaders from "../../Components/DashHeaders";
import "../../Responsive/Responsive.css";
import cat from "../../../public/download.png";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminDashOrder = () => {
  return (
    <div className="py- px-2 md:px-4 lg:px-5 dark:bg-[#131E31]">
      <DashHeaders />

      <div className="mt-4">
        <div className="rounded-md lg:h-[85.8vh] pb-8 bg-white dark:bg-[#253145] w-full p-4">
          <div className="flex items-center justify-between">
            <select
              className="border outline-none border-slate-300 px-3 py-[5px] bg-slate-100 dark:bg-[#121212] rounded-md"
              name=""
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>

            <input
              id="hiddenSelect"
              className="outline-none border border-slate-300 dark:bg-[#121212] py-[7px] px-4 rounded-md bg-slate-50"
              type="text"
              placeholder="Search.."
            />
          </div>

          <div
            id="allSellers"
            className="lg:w-full md:w-[700px] w-[365px] overflow-x-auto"
          >
            <table className="lg:w-full mt-2  overflow-x-auto">
              <thead className="border-b  overflow-x-auto text-slate-700 dark:text-white  border-slate-600 py-2 h-8 rounded-md">
                <tr className="">
                  <th className="py-2 lg:px-2 px-4 font-semibold text-[15px] lg:text-[16px]">
                    Order Id
                  </th>

                  <th className="py-2 lg:px-2 px-8  font-semibold text-[15px] lg:text-[16px]">
                    Price
                  </th>

                  <th className="py-2 whitespace-nowrap lg:px-0 px-10 font-semibold text-[15px] lg:text-[16px]">
                    Payment Status
                  </th>
                  <th className="py-2 lg:px-2 px-5 font-semibold text-[15px] lg:text-[16px]">
                    Order Status
                  </th>

                  <th className="py-2 lg:px-2 px-10 font-semibold text-[16px]">
                    Action{" "}
                  </th>
                </tr>
              </thead>

              <tbody className="text-center ">
                {[1, 2, 3, 4, 5, 6, 7].map((p, i) => (
                  <tr key={i} className=" border-slate-300 border-b">
                    <td className="py-1">{i + 1}</td>

                    <td className="whitespace-nowrap py-1 pl-10 lg:pl-0 dark:text-white text-slate-700">
                      $884
                    </td>

                    <td className="whitespace-nowrap py-1  dark:text-white text-slate-700">
                      Pending
                    </td>
                    <td className="whitespace-nowrap py-1 dark:text-white  text-slate-700">
                      Pending
                    </td>

                    <td className="">
                      <Link className="text-green-700 dark:text-blue-500">view</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashOrder;
