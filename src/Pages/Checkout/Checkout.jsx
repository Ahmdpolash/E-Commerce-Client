import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Checkout = () => {
  const navigate = useNavigate();

  const [res, setRes] = useState(false);
  const [state, setState] = useState();
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const save = (e) => {
    e.preventDefault();
    const { name, address, phone, post, province, city, area } = state;
    if (name && address && phone && post && province && city && area) {
      setRes(true);
    }
  };

  return (
    <section className="bg-[#eeeeee]">
      <div className="w-[90%] lg:w-[92%] md:w-[90%]   mx-auto py-6 md:py-10 lg:py-16">
        <div className="w-full flex flex-col md:flex-row gap-4 lg:flex-row flex-wrap">
          <div className="w-full lg:w-[66%]">
            <div className="flex flex-col gap-3">
              <div className="bg-white p-6 shadow-sm rounded-md">
                {!res && (
                  <>
                    <h2 className="text-slate-600 font-bold pb-3">
                      Shipping Information
                    </h2>
                    <form onSubmit={save}>
                      <div className="flex flex-col lg:flex-row w-full gap-2 md:gap-4 lg:gap-5 text-slate-600">
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="name">Name</label>
                          <input
                            onChange={inputHandle}
                            type="text"
                            className="w-full px-3 py-2 border border-slate-400 outline-none focus:border-red-400 rounded-md"
                            name="name"
                            placeholder="name"
                            id="name"
                          />
                        </div>
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="address">Address</label>
                          <input
                            onChange={inputHandle}
                            type="text"
                            className="w-full px-3 py-2 border border-slate-400 outline-none focus:border-red-400 rounded-md"
                            name="address"
                            placeholder="House no / building / street /area"
                            id="address"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-5 w-full text-slate-600">
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="phone">Phone</label>
                          <input
                            onChange={inputHandle}
                            type="text"
                            className="w-full px-3 py-2 border border-slate-400 outline-none focus:border-red-400 rounded-md"
                            name="phone"
                            placeholder="phone"
                            id="phone"
                          />
                        </div>
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="post">Post</label>
                          <input
                            onChange={inputHandle}
                            type="text"
                            className="w-full px-3 py-2 border border-slate-400 outline-none focus:border-red-400 rounded-md"
                            name="post"
                            placeholder="post"
                            id="post"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-5 w-full text-slate-600">
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="province">Province</label>
                          <input
                            onChange={inputHandle}
                            type="text"
                            className="w-full px-3 py-2 border border-slate-400 outline-none focus:border-red-400 rounded-md"
                            name="province"
                            placeholder="province"
                            id="province"
                          />
                        </div>
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="city">City</label>
                          <input
                            onChange={inputHandle}
                            type="text"
                            className="w-full px-3 py-2 border border-slate-400 outline-none focus:border-red-400 rounded-md"
                            name="city"
                            placeholder="city"
                            id="city"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-5 w-full text-slate-600">
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="area">Area</label>
                          <input
                            onChange={inputHandle}
                            type="text"
                            className="w-full px-3 py-2 border border-slate-400 outline-none focus:border-red-400 rounded-md"
                            name="area"
                            placeholder="area"
                            id="province"
                          />
                        </div>
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="area">Area</label>
                          <input
                            onChange={inputHandle}
                            type="text"
                            className="w-full px-3 py-2 border border-slate-400 outline-none focus:border-red-400 rounded-md"
                            name="area"
                            placeholder="area"
                            id="province"
                          />
                        </div>
                      </div>
                    </form>
                  </>
                )}
                {res && (
                  <div className="flex flex-col gap-1">
                    <h2 className="text-slate-600 font-semibold pb-2">
                      Deliver to {state.name}
                    </h2>
                    <p>
                      <span className="bg-blue-200 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                        Home
                      </span>
                      <span className="text-slate-600 text-sm">
                        {state.address} {state.province} {state.city}{" "}
                        {state.area}
                      </span>
                      <span
                        onClick={() => setRes(false)}
                        className="text-indigo-500 cursor-pointer"
                      >
                        {" "}
                        change
                      </span>
                    </p>
                    <p className="text-slate-600 text-sm">
                      Email to sheikhfarid@gmail.com
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col gap-1 mt-3 w-full">
                <button
                  onClick={() => navigate(-1)}
                  className="px-3 py-[6px] hover:bg-[#F85606] hover:text-white duration-300  hover:shadow-orange-500/20 hover:shadow-lg bg-transparent border rounded-md border-[#F85606]"
                >
                  Back to Cart
                </button>
              </div>
              <div className="flex flex-col gap-1 mt-3 w-full">
                <button className="px-3 py-[6px] rounded-md border hover:border-[#F85606] hover:text-black hover:bg-white duration-300 hover:shadow-orange-500/20 hover:shadow-lg bg-[#F85606] text-white">
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>

          <div className="w-full mt-5 lg:mt-0 lg:w-[32%] ">
            <div className="px-1 lg:px-0 lg:pl-0">
              <div className="bg-white font-medium p-5 text-slate-600 border border-red-500 border-dashed flex flex-col gap-3">
                <h2 className="text-xl font-semibold">Order Summary</h2>
                <div className="flex justify-between items-center">
                  <span>Items Total()</span>
                  <span>$</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Discount</span>
                  <span>$</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Delivery Fee</span>
                  <span>$</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Shipping Fee</span>
                  <span>$</span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Total Payment</span>
                  <span>$</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total</span>
                  <span>$</span>
                </div>
                <button
                  disabled={res ? false : true}
                  className={`px-5 py-[6px] rounded-sm hover:shadow-orange-500/20 hover:shadow-lg ${
                    res ? "bg-orange-500" : "bg-orange-300"
                  } text-sm text-white uppercase`}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
