import React from "react";
import DashHeaders from "../../Components/DashHeaders";

const AdminDashPaymentsReq = () => {
  return (
    <div className="py- px-2 md:px-4 lg:px-5">
      <DashHeaders />

      <div className="mt-4 lg:h-[84.5vh] w-full bg-white dark:bg-[#253145] pb-10 p-4 rounded-md">
        <h1 className="text-slate-700 dark:text-white font-semibold text-[18px]">
          Withdrawal Request
        </h1>

        <div
          id="allSellers"
          className="lg:w-full md:w-[700px] w-[365px] overflow-x-auto"
        >
          <table className="lg:w-full mt-2  overflow-x-auto">
            <thead className="border-b  overflow-x-auto text-slate-700 dark:text-white  border-slate-600 py-2 h-8 rounded-md">
              <tr className="">
                <th className="py-2 lg:px-2 px-4 font-semibold text-[15px] lg:text-[16px]">
                  No
                </th>
                <th className="py-2 lg:px-4 px-8 font-semibold text-[15px] lg:text-[16px]">
                  Amount
                </th>
                <th className="py-2 lg:px-2 px-8  font-semibold text-[15px] lg:text-[16px]">
                  Status
                </th>
                <th
                  className="py-2 lg:px-2 px-
                   lg:pl-0 pl-10 font-semibold text-[15px] lg:text-[16px]"
                >
                  Date
                </th>
                <th className="py-2 whitespace-nowrap lg:px-0  px-12 font-semibold text-[15px] lg:text-[16px]">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="text-center ">
              {[1, 2, 3, 4, 5, 6, 7].map((p, i) => (
                <tr key={i} className=" border-slate-300 border-b">
                  <td className="py-1">{i + 1}</td>
                  <td className="py-1 whitespace-nowrap dark:text-white   text-slate-700">
                    $510
                  </td>
                  <td className="whitespace-nowrap py-1 dark:text-white  text-slate-700">
                    Pending
                  </td>
                  <td className="whitespace-nowrap py-1 dark:text-white pl-10 lg:pl-0 text-slate-700">
                    Feb 12, 2024
                  </td>
                  <td className="whitespace-nowrap py-1 pl-6 dark:text-white text-slate-700">
                    <button className="px-3 md:px-5 lg:px-5 py-1 rounded-sm text-white bg-indigo-500">
                      Confirm
                    </button>
                    {/* <div className="flex items-center gap-3">
                      <button className="px-3 md:px-5 lg:px-5 py-1 rounded-sm text-white bg-indigo-500">
                        Confirm
                      </button>
                    </div> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashPaymentsReq;
