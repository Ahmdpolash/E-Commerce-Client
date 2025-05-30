import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Helmet } from "react-helmet";
import { FaAngleRight } from "react-icons/fa";
import OrderSummary from "./OrderSummary";

const ShippingForm = () => {
  const navigate = useNavigate();

  const goPaymentPage = () => {
    navigate("/payment");
  };

  const { state } = useLocation();

  const { products, shipping_fee, items, price } = state ;

  const [res, setRes] = useState(false);
  const [states, setState] = useState();
  const inputHandle = (e) => {
    setState({
      ...states,
      [e.target.name]: e.target.value,
    });
  };

  console.log(states);
  const save = (e) => {
    e.preventDefault();
    setRes(true);
  };
  return (
    <div>
      <section className="bg-[#F6F9FC]">
        <div className="w-[90%] lg:w-[92%] md:w-[90%]   mx-auto py-6 md:py-10 lg:py-5">
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
                            <label htmlFor="name">Full Name</label>
                            <input
                              onChange={inputHandle}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-400 outline-none focus:border-red-400 rounded-md"
                              name="name"
                              placeholder="Enter your full name"
                              id="name"
                              required
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="email">Email Address</label>
                            <input
                              onChange={inputHandle}
                              type="email"
                              className="w-full px-3 py-2 border border-slate-400 outline-none focus:border-red-400 rounded-md"
                              name="email"
                              placeholder="House no / building / street /area"
                              id="address"
                              required
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
                              required
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
                              required
                            />
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-5 w-full text-slate-600">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="province">Province/State</label>
                            <input
                              onChange={inputHandle}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-400 outline-none focus:border-red-400 rounded-md"
                              name="province"
                              placeholder="province"
                              id="province"
                              required
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
                              required
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
                              required
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="area">Area 2</label>
                            <input
                              onChange={inputHandle}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-400 outline-none focus:border-red-400 rounded-md"
                              name="area"
                              placeholder="area"
                              id="province"
                              required
                            />
                          </div>
                        </div>
                        <div className="flex mx-1 gap-2">
                          <div className="flex flex-col gap-1 mt-3 w-full">
                            <button
                              onClick={() => navigate(-1)}
                              className="px-3 py-[6px] hover:bg-[#F85606] hover:text-white duration-300  hover:shadow-orange-500/20 hover:shadow-lg  text-[#F85606] bg-transparent border rounded-md border-[#F85606]"
                            >
                              Back to Cart
                            </button>
                          </div>
                          <div className="flex flex-col gap-1 mt-3 w-full">
                            <button
                              type="submit"
                              className="px-3 py-[6px] rounded-md border hover:border-[#F85606] hover:text-black hover:bg-white duration-300 hover:shadow-orange-500/20  hover:shadow-lg bg-[#F85606] text-white"
                            >
                              Proceed to Payment
                            </button>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                  {res && (
                    <>
                      <OrderSummary
                        states={states}
                        products={products}
                        setRes={setRes}
                      />
                      {/* <div className="flex flex-col gap-1">
                        <h2 className="text-slate-600 font-semibold pb-2">
                          Deliver to {states.name}
                        </h2>
                        <p>
                          <span className="bg-blue-200 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                            Home
                          </span>
                          <span className="text-slate-600 text-sm">
                            {states.address} {states.province} {states.city}{" "}
                            {states.area}
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
                          Email to {states.emailc}
                        </p>
                      </div>

                      <div className="mt-6">
                        {products?.map((item, idx) => (
                          <div key={item._id} className="w-full ">
                            <div className="flex flex-wrap  gap-2 border-b border-slate-300 py-1 mb-2 justify-between items-center">
                              <div className="flex gap-2 flex-wrap items-center">
                                <img
                                  className="w-[70px] h-[70px] rounded-md"
                                  src={item?.images[0]}
                                  alt="product image"
                                />
                                <div className="pr-4 text-slate-600">
                                  <h2 className="text-md">
                                    {item?.product_name.slice(0, 55)}..
                                  </h2>
                                  <span className="hidden lg:block text-sm">
                                    Brand:{" "}
                                    {item?.brand ? item?.brand : "No Brand"}
                                  </span>
                                  <span className="hidden lg:block text-sm">
                                    only {item?.stock} items (s) in stock
                                  </span>
                                </div>
                              </div>

                              <div>
                                <div className="pl-4 sm:pl-0 mx-auto text-center">
                                  <h2 className="text-lg text-orange-500">
                                    $
                                    {item.price -
                                      (
                                        (item.price / 100) *
                                        item.discount
                                      ).toFixed(2)}
                                  </h2>
                                  <p className="line-through">${item?.price}</p>
                                  <p>
                                    {item?.discount
                                      ? `-${item?.discount}%`
                                      : ""}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div> */}
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full mt-5 lg:mt-0 lg:w-[32%] ">
              <div className="px-1 lg:px-0 lg:pl-0">
                <div className="bg-white font-medium p-5 text-slate-600 border border-[#F85606] border-dashed flex flex-col gap-3">
                  <h2 className="text-xl font-semibold">Order Summary</h2>
                  <div className="flex justify-between items-center">
                    <span>Total Items</span>
                    <span>({items})</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Delivery Fee</span>
                    <span>${shipping_fee}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Total Payment</span>
                    <span>${price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total</span>
                    <span>${price + shipping_fee}</span>
                  </div>
                  <span className="text-[11px] text-right text-orange-600">
                    (delivery fee + total price)
                  </span>

                  <button
                    onClick={goPaymentPage}
                    disabled={res ? false : true}
                    className={`px-5 py-[6px] rounded-sm hover:shadow-orange-500/20 hover:shadow-lg ${
                      res ? "bg-orange-500" : "bg-orange-300"
                    } text-sm text-white uppercase`}
                  >
                    Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingForm;
