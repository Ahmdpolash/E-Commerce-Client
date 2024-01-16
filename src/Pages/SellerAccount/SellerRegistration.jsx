import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { useState } from "react";
import { FaEye, FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

import { FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

const SellerRegistration = () => {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("user");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const roleValue = role;
    const formData = { ...data, role: roleValue };
    console.log(formData);
  };
  return (
    <div className="bg-[#F6F6F5]">
      <Helmet>
        <title>Shop.my || Seller Registration</title>
      </Helmet>
      <div className='bg-[url("https://github.com/SheikhFarid99/multi-vendor-ecommerce/blob/main/client/public/images/banner/order.jpg?raw=true")] h-[140px] md:h-[180px] lg:h-[210px]  mt-1 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shop.my</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <FaAngleRight />
                </span>
                <span>Seller Registration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="bg-[#F1F5F6] flex justify-center items-center mt-">
          <div className="w-full justify-center items-center p-5 lg:p-10">
            <div className=" relative lg:w-[70%] mx-auto bg-white rounded-md">
              <h2 className="text-center w-full pt-3 text-2xl text-slate-600 font-bold">
                Seller Registration{" "}
              </h2>
              <span className="text-orange-500 text-center mx-auto block font-bold ">
                Shopp.My
              </span>
              <div className="px-8 py-4 ">
                <div className="relative">
                  <form
                    className="text-slate-600"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                          {...register("email", { required: true })}
                        />
                      </div>
                      <div className="flex relative w-full flex-col gap-1 mb-2">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="password"
                          name="password"
                          {...register("password")}
                          placeholder="password"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="shopName">Shop Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="shopName"
                          name="shopName"
                          placeholder="Shop Name"
                          {...register("shopName", { required: true })}
                        />
                      </div>
                      <div className="flex relative w-full flex-col gap-1 md:gap-2 lg:gap-3 mb-2">
                        <label htmlFor="shopLogo">Shop Logo</label>
                        <input
                          type="file"
                          className="w-full px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="shopLogo"
                          name="shopLogo"
                          {...register("shopLogo")}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="address"
                          name="address"
                          placeholder="Address"
                          {...register("address", { required: true })}
                        />
                      </div>
                      <div className="flex relative w-full flex-col gap-1 mb-2">
                        <label htmlFor="number">Number</label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="number"
                          name="number"
                          placeholder="+8801XXXXXXXXX"
                          {...register("number", { required: true })}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex relative w-full flex-col gap-1 mb-2">
                        <label htmlFor="description">Description</label>
                        <textarea
                          cols="7"
                          rows="7"
                          placeholder="Description"
                          className="w-full px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="description"
                          name="description"
                          {...register("description")}
                        />
                      </div>
                    </div>

                    <button className="px-8 w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md">
                      Registration
                    </button>
                  </form>
                </div>
                <div className="text-center text-slate-600 pt-1">
                  <p>
                    Already have an Account ?{" "}
                    <Link className="text-blue-500" to="/login">
                      Login
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellerRegistration;
