import React, { useState } from "react";
import { FaEye, FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import login from "../../../public/login/login.json";
import Lottie from "lottie-react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("user");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, update } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const roleValue = role;
    const formData = { ...data, role: roleValue };
    console.log(formData);
    const toastId = toast.loading("Registration Processing...");

    const imgFile = { image: formData.image[0] };
    console.log(imgFile);

    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);

    if (res.data.success) {
      // If image upload is successful, proceed with user registration
      const info = {
        name: formData.name,
        email: formData.email,
        image: res.data.data.display_url,
        role: formData.role,
        pass: formData.password,
      };

      if (role === "seller") {
        info.shop_name = formData.shopName;
        info.zip = formData.zipCode;
        info.description = formData.description;
        info.seller_number = formData.number;
        info.shop_address = formData.address;
      }

      // Perform user registration
      const result = await axiosPublic.post("/users", info);

      if (result.data.insertedId) {
        createUser(formData.email, formData.password)
          .then(() => {
            update(res.data.data.display_url, formData.name)
              .then((res) => {
                navigate("/login");
                reset();
                toast.success("Registration Success !! Login Now", {
                  id: toastId,
                });
              })
              .catch((err) => {
                toast.error(
                  "Something went wrong !! Please Check your credentials",
                  { id: toastId }
                );
              });
          })
          .catch((err) => {
            toast.error(
              "Something went wrong !! Please Check your credentials"
            );
          });
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Shop.my || Registration</title>
      </Helmet>
      <div className="bg-[#F1F5F6] flex justify-center items-center mt-">
        <div className="w-full justify-center items-center p-5 lg:p-10">
          <div className="grid grid-cols-1 items-center relative lg:grid-cols-2 mx-auto bg-white rounded-md">
            <div className="px-8 py-8 ">
              <h2 className="text-center w-full text-2xl text-slate-600 font-bold">
                Registration{" "}
                <span className="text-orange-500 font-bold ">Shopp.My</span>
              </h2>
              <div className="relative">
                <form
                  className="text-slate-600"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                    <div className="flex flex-col w-full gap-1 mb-2">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                        id="name"
                        name="name"
                        required
                        placeholder="Name"
                        {...register("name", { required: true })}
                      />
                    </div>
                    <div className="flex relative w-full flex-col gap-1 mb-2">
                      <label htmlFor="image">Image</label>
                      <input
                        type="file"
                        className="w-full px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                        id="image"
                        name="image"
                        
                        {...register("image", { required: false })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row lg:flex-row  gap-1 md:gap-2 lg:gap-3">
                    <div className="flex flex-col w-full gap-1 mb-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                        id="email"
                        name="email"
                        required
                        placeholder="email"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div className="flex relative w-full flex-col gap-1 mb-2">
                      <label htmlFor="password">Password</label>
                      <input
                        type={open ? "text" : "password"}
                        className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                        id="password"
                        name="password"
                        placeholder="password"
                        {...register("password", {
                          required: true,
                          minLength: 6,
                          maxLength: 10,
                          pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                          message:
                            "Password must be at least 6 characters with one uppercase letter and one lowercase letter.",
                        })}
                      />
                      {errors.password?.type === "minLength" && (
                        <p className="text-red-600">Pass must be 6 character</p>
                      )}
                      {errors.password?.type === "pattern" && (
                        <p className="text-red-600">
                          Minimum six characters, at least one uppercase letter,
                          one lowercase letter.
                        </p>
                      )}
                      <span
                        onClick={() => setOpen(!open)}
                        className="absolute text-xl right-3 top-10"
                      >
                        {open ? <FaEye /> : <FaRegEyeSlash />}
                      </span>
                    </div>
                  </div>

                  {role === "seller" && (
                    <>
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
                        <div className="flex flex-col w-full gap-1 mb-2">
                          <label htmlFor="shopName">Zip Code</label>
                          <input
                            type="number"
                            className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                            id="zip"
                            name="zipCode"
                            placeholder="Zip Code"
                            {...register("zipCode", { required: true })}
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
                    </>
                  )}

                  <div className="flex flex-col gap-1 ml-2 pb-2 ">
                    <div onClick={() => setRole("user")}>
                      <input
                        className="mr-1"
                        name="role"
                        type="radio"
                        checked={role === "user"}
                        onChange={() => setRole("user")}
                      />
                      <label
                        className="text-slate-700 font-semibold"
                        htmlFor="user"
                      >
                        I am a customer
                      </label>
                    </div>
                    <div onClick={() => setRole("seller")}>
                      <input
                        className="mr-1"
                        name="role"
                        type="radio"
                        checked={role === "seller"}
                        onChange={() => setRole("seller")}
                      />
                      <label
                        className="text-slate-700 font-semibold"
                        htmlFor="seller"
                      >
                        I am a seller
                      </label>
                    </div>
                  </div>

                  <button className="px-8 w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md">
                    Registration
                  </button>
                </form>
                <div className={` ${role === "seller" ? "hidden" : "block"} `}>
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
            <div className="hidden lg:block w-[490px] mt-20 h-full py-4 pr-4">
              <Lottie className="" animationData={login} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
