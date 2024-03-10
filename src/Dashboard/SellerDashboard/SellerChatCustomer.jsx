import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaList } from "react-icons/fa";
import toast from "react-hot-toast";
import { ChatItem, MessageBox } from "react-chat-elements";

import { BsEmojiSmile } from "react-icons/bs";
import { Link } from "react-router-dom";
import DashHeaders from "../../Components/DashHeaders";

const SellerChatCustomer = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="px-2 md:px-3 lg:px-4">
        <DashHeaders />
        <div className="w-full bg-white text-slate-700 px-4 py-4 mt-3 rounded-md h-[calc(100vh-110px)]">
          <div className="flex w-full h-full relative">
            {/* sidebar */}
            <div
              className={`w-[280px] h-full absolute z-10 ${
                show ? "-left-[16px]" : "-left-[336px]"
              } md:left-0 md:relative transition-all`}
            >
              <div className="w-full border-r border-r-slate-300 pr-3 shadow-lg h-[calc(100vh-128px)] bg-[#252b3b] md:bg-transparent overflow-y-auto">
                <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-slate-700">
                  <h2>Customers</h2>
                  <span
                    onClick={() => setShow(!show)}
                    className="block cursor-pointer md:hidden"
                  >
                    <IoMdClose />
                  </span>
                </div>

                {[1, 2, 3, 4].map((item, i) => (
                  <Link
                    //   to={`/seller/dashboard/chat-customer/${c.fdId}`}
                    className={`h-[60px] mb-2 flex justify-start border shadow-md gap-2 items-center text-slate-700 px-2 py-2 rounded-sm cursor-pointer bg-white`}
                  >
                    <div className="relative">
                      <img
                        className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                        src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
                        alt=""
                      />
                      {/* {activeCustomer.some((a) => a.customerId === c.fdId) && (
                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                  )} */}
                    </div>
                    <div className="flex justify-center items-start flex-col w-full">
                      <div className="flex justify-between items-center w-full">
                        <h2 className="text-base font-semibold">Polash</h2>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* chat */}
            <div className="w-full  md:w-[calc(100%-200px)] md:pl-4">
              <div className="flex justify-between items-center">
                {/* {customerId && ( */}
                <div className="flex bg-slate-50 shadow-md w-full p-2 border-b-2 border-x border-slate-100 justify-start items-center gap-3">
                  <div className="relative">
                    <img
                      className="w-[42px] h-[42px] border-green-500 border-2 max-w-[42px] p-[2px] rounded-full"
                      src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
                      alt=""
                    />
                    {/* {activeCustomer.some(
                        (a) => a.customerId === currentCustomer._id
                      ) && (
                        <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                      )} */}
                  </div>
                  <h2 className="text-base text-slate-700 font-semibold">
                    John
                  </h2>
                </div>
                {/* )} */}
                <div
                  onClick={() => setShow(!show)}
                  className="w-[35px] flex md:hidden h-[35px] rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-center text-white"
                >
                  <span>
                    <FaList />
                  </span>
                </div>
              </div>

              <div className="py-4">
                <div
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 5, 0, 0.6), rgba(0, 0, 7, 0.6)), url("https://www.shutterstock.com/image-vector/social-media-sketch-vector-seamless-600nw-1660950727.jpg")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="bg-whit bg-blend-darken text-slate-800 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto"
                >

                  







                </div>
              </div>




              <form className="flex gap-3">
                <input
                  className="w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6]"
                  type="text"
                  placeholder="Type your message"
                />
                <button className="shadow-lg bg-violet-500 hover:shadow-cyan-500/50 text-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerChatCustomer;
