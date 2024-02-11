import React from "react";
import DashHeaders from "../../Components/DashHeaders";
import { BsCurrencyDollar } from "react-icons/bs";

const SellerDashPayments = () => {
  return (
    <div className="px-2 md:px-3 lg:px-4">
      <DashHeaders />

      <section className="my-5 box">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 res lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
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
              <h2 className="text-3xl font-bold">$5825</h2>
              <span className="text-md font-medium">Available Amount</span>
            </div>
            <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
              <BsCurrencyDollar className="text-[#cd00e8] shadow-lg" />
            </div>
          </div>

          <div className="flex justify-between items-center p-5 bg-white rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-slate-600">
              <h2 className="text-3xl font-bold">$544</h2>
              <span className="text-md font-medium">Withdrawal Amount</span>
            </div>
            <div className="w-[46px] h-[47px] rounded-full bg-[#46d9ea1f] flex justify-center items-center text-xl">
              <BsCurrencyDollar className="text-[#4ec1cc] shadow-lg" />
            </div>
          </div>

          <div className="flex justify-between items-center p-5 bg-white rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-slate-600">
              <h2 className="text-3xl font-bold">0</h2>
              <span className="text-md font-medium">Pending Amount</span>
            </div>
            <div className="w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl">
              <BsCurrencyDollar className="text-[#7367f0] shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-center flex-col lg:flex-row gap-4 md:gap-5 lg:gap-5">
          {/* Box one start here */}
          <div className="bg-white px-4 py-3 rounded-md w-full lg:w-1/2 h-[67vh]">
            <h2 className="text-lg text-slate-700 mb-1 font-medium">
              Send withdrawal Request
            </h2>
            <div className="py-1">
              <form>
                <div className="flex gap-3 flex-wrap">
                  <input
                    required
                    min="0"
                    type="number"
                    className="px-3 w-full md:w-[79%] py-2 focus:border-indigo-500 outline-none bg-slate-100 border border-slate-700 rounded-md text-slate-700"
                    name="amount"
                  />
                  <button className="bg-indigo-500  hover:shadow-indigo-500/50 hover:shadow-lg text-white rounded-md w-full md:w-24 lg:w-24 px-6 py-2 text-sm ">
                    Submit
                  </button>
                  {/* <button
                    disabled={loader}
                    className="bg-indigo-500 hover:shadow-indigo-500/50 hover:shadow-lg text-white rounded-sm px-4 py-2 text-sm "
                  >
                    {loader ? "loading.." : "Submit"}
                  </button> */}
                </div>
              </form>
            </div>

            <div className="py-2">
              <h1 className="text-slate-700 mb-2 font-semibold">Pending Request</h1>

              <div className="py-1">
                <table className="overflow-x-auto w-full">
                  <thead className="w-full text-[15px] font-normal text-slate-800 rounded-md bg-slate-200">
                    <tr>
                      <th>No</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody className="w-full text-center">
                    {[1, 2, 3, 4].map((p, i) => (
                      <tr
                        className="border-b text-slate-600 border-slate-200 bg-slate-50"
                        key={i}
                      >
                        <td className="py-2">{i + 1}</td>
                        <td className="py-2">$450</td>
                        <td className="">
                          <span className="text-green-500 rounded-full font-semibold text-sm px-2">
                            Pending
                          </span>
                        </td>
                        <td className="py-2">02-02-2024</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Box one start here */}

          {/* box two start here */}

          <div className="lg:flex-1 px-4 py-3 rounded-md bg-white w-full lg:w-1/2 h-[67vh]">
            <h2 className="text-lg text-slate-700 font-medium">
              Success Withdraw
            </h2>
            <div className="py-2">
              <div className="py-1">
                <table className="overflow-x-auto w-full">
                  <thead className="w-full text-[15px]  font-normal text-slate-800 rounded-md bg-slate-200">
                    <tr className="">
                      <th>Id</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody className="w-full text-center">
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* box two start here */}
        </div>
      </section>
    </div>
  );
};

export default SellerDashPayments;
