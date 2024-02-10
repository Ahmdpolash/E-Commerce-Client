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
    </div>
  );
};

export default SellerDashPayments;
