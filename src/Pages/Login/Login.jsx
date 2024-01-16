import React, { useState } from "react";

import { FaEye, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import login from "../../../public/login/login.json";
import Lottie from "lottie-react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const Login = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
       <Helmet>
        <title>Shop.my || Login</title>
      </Helmet>
      <div className="bg-[#F1F5F6] flex  justify-center items-center mt-">
        <div className="w-full justify-center items-center p-5 lg:p-10">
          <div className="grid grid-cols-1 relative lg:grid-cols-2 lg:w-[60%] mx-auto bg-white rounded-md">
            <div className="px-8 py-8 ">
              <h2 className="text-center w-full text-2xl text-slate-600 font-bold">
                Login{" "}
                <span className="text-orange-500 font-bold ">Shopp.My</span>
              </h2>
              <div className="relative">
                <form className="text-slate-600 ">
                  <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                      id="email"
                      name="email"
                      placeholder="email"
                    />
                  </div>
                  <div className="flex relative flex-col gap-1 mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                      type={open ? "text" : "password"}
                      className="w-full  px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                      id="password"
                      name="password"
                      placeholder="password"
                    />
                    <span
                      onClick={() => setOpen(!open)}
                      className="absolute text-xl right-3 top-10"
                    >
                      {open ? <FaEye /> : <FaRegEyeSlash />}
                    </span>
                  </div>
                  <button className="px-8 w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md">
                    Login
                  </button>
                </form>
                <div className="flex justify-center items-center py-2">
                  <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                  <span className="px-3 text-slate-600">or</span>
                  <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                </div>
                <button className="px-8 w-full py-2 bg-indigo-500 shadow hover:shadow-indigo-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>Login with Facebook</span>
                </button>
                <button className="px-8 w-full py-2 bg-orange-500 shadow hover:shadow-orange-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                  <span>
                    <AiOutlineGoogle />
                  </span>
                  <span>Login with Google</span>
                </button>
              </div>
              <div className="text-center text-slate-600 pt-1">
                <p>
                  You have no account ?{" "}
                  <Link className="text-blue-500" to="/register">
                    Register
                  </Link>
                </p>
              </div>
              <div className="absolute  lg:block bottom-0 right-0">
                    <img
                      src="https://i.ibb.co/bmC91P9/Screenshot-62-removebg-preview.png"
                      alt=""
                    />
                  </div>
            </div>
            <div className="hidden lg:block w-full h-full py-4 pr-4">
              <Lottie className="" animationData={login} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
