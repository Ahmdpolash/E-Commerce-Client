import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import stripe from "../../assets/stripe.png";
import bk from "../../assets/bk.png";
import nogod from "../../assets/nogod.png";
import rocket from "../../assets/rocket.png.png.png";
import upay from "../../assets/upay.png";
import toast from "react-hot-toast";
import { Router, useNavigate } from "react-router-dom";
import { useDeleteAllCart } from "../../Hooks/useCart";

const Payment = () => {
  const [tab, setTab] = useState("stripe");
  const [expand, setExpand] = useState(false);
  const deleteAllCart = useDeleteAllCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // delete all cart
    deleteAllCart
      .deleteAllCart()
      .then((res) => {
        toast.success("Payment successful!"); // Show success message
        navigate("/success"); // Redirect to success page
      })
      .catch((error) => {
        console.error("Error deleting all cart items:", error);
      });
  };

  return (
    <div className="bg-[#F6F6F5]">
      <Container>
        <div className="max-w-4xl mx-auto  p-5  py-5">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 rounded-lg  border cursor-pointer w-full ">
            <div
              onClick={() => setTab("stripe")}
              className={`${
                tab === "stripe" ? "bg-white" : "bg-teal-50"
              } h-32 w-full border-r-2 relative border-slate-200 flex flex-col  justify-center items-center bg-white`}
            >
              <div className="space-y-2 mx-auto text-center">
                <img className="mx-auto w-[62px] mb-5" src={stripe} alt="" />
                <h3 className="font-medium text-center mx-auto text-slate-600 m text-xl absolute bottom-5">
                  Stripe
                </h3>
              </div>
            </div>
            <div
              onClick={() => setTab("bKash")}
              className={`${
                tab === "bKash" ? "bg-white" : "bg-teal-50"
              } h-32 w-full border-r-2 border-slate-200 relative flex flex-col justify-center items-center bg-white`}
            >
              <div className="space-y-2">
                <img className="mx-auto mb-5 w-[37px]" src={bk} alt="" />
                <h3 className="font-medium text-slate-600 m text-xl absolute bottom-5">
                  bKash
                </h3>
              </div>
            </div>
            <div
              onClick={() => setTab("nogod")}
              className={`${
                tab === "nogod" ? "bg-white" : "bg-teal-50"
              } h-32 w-full border-r-2 border-slate-200 relative flex justify-center items-center bg-white`}
            >
              <div className="space-y-2 mx-auto text-center">
                <img className="mx-auto w-[70px] mb-5" src={nogod} alt="" />
                <h3 className="font-medium text-center mx-auto text-slate-600 m text-xl absolute bottom-5">
                  Nogod
                </h3>
              </div>
            </div>
            <div
              onClick={() => setTab("rocket")}
              className={`${
                tab === "rocket" ? "bg-white" : "bg-teal-50"
              } h-32 w-full border-r-2 border-slate-200 relative flex justify-center items-center bg-white`}
            >
              <div className="space-y-2 mx-auto text-center">
                <img
                  className="mx-auto w-[38px] h-[38px] rounded-lg mb-5"
                  src={rocket}
                  alt=""
                />
                <h3 className="font-medium lg:left-14 text-center mx-auto text-slate-600 m text-xl absolute bottom-5">
                  Rocket
                </h3>
              </div>
            </div>

            <div
              onClick={() => setTab("upay")}
              className={`${
                tab === "rocket" ? "bg-white" : "bg-teal-50"
              } h-32 w-full border-r-2 border-slate-200 relative flex justify-center items-center bg-white`}
            >
              <div className="space-y-2 mx-auto text-center">
                <img
                  className="mx-auto w-[35px]  rounded-lg mb-5"
                  src={upay}
                  alt=""
                />
                <h3 className="font-medium lg:left-16 text-center mx-auto text-slate-600 m text-xl absolute bottom-5">
                  Upay
                </h3>
              </div>
            </div>
          </div>

          {/* payment form */}

          <div>
            {tab === "stripe" && (
              <div className="bg-white border-b border-x border-gray-400  w-full px-4 py-5  text-white">
                <button
                  onClick={() => setExpand(true)}
                  className={`${
                    expand && "hidden"
                  } px-6= py-2 w-44 h-10 rounded-md bg-[#F85606]`}
                >
                  Start Payment
                </button>

                {expand && (
                  <div className="text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-2">
                        <div>
                          <label
                            className="text-slate-600 font-medium ml-1 mb-1 text-[17px]"
                            htmlFor="email"
                            id="email"
                          >
                            <span>Email</span>
                          </label>
                          <input
                            type="email"
                            className="w-full border rounded-md  border-slate-400 focus:outline-blue-500 py-2 px-4"
                            placeholder="example@gmail.com"
                            name="email"
                            required
                          />
                        </div>
                        <div>
                          <label
                            className="text-slate-600 font-medium ml-1 pb-2 text-[17px] mt-3"
                            htmlFor="number"
                            id="number"
                          >
                            <span>Number</span>
                          </label>
                          <input
                            type="number"
                            className="w-full border rounded-md border-slate-400 focus:outline-blue-500 py-2 px-4"
                            placeholder="01XXXXXXXXX"
                            required
                          />
                        </div>
                        <div>
                          <label
                            className="text-slate-600 font-medium ml-1 pb-2 text-[17px] mt-3"
                            htmlFor="card"
                            id="card"
                          >
                            <span>Card Number</span>
                          </label>
                          <input
                            type="number"
                            className="w-full border rounded-md border-slate-400 focus:outline-blue-500 py-2 px-4"
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        <div>
                          <label
                            className="text-slate-600 font-medium ml-1 pb-2 text-[17px] mt-3"
                            htmlFor="cvc"
                            id="cvc"
                          >
                            <span>CVC</span>
                          </label>
                          <input
                            type="number"
                            className="w-full border rounded-md border-slate-400 focus:outline-blue-500 py-2 px-4"
                            placeholder="123"
                            required
                          />
                        </div>

                        <div className="py-3 mt-2">
                          <button
                            type="submit"
                            className="bg-[#F85606] text-white py-2 w-36 rounded-md "
                          >
                            Pay Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
