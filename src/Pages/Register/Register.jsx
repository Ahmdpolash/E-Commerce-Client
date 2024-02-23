import React, { useEffect, useState } from "react";
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
  const [divisions, setDivisions] = useState([]);
  const [district, setDistrict] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, update } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/json/division.json")
      .then((res) => res.json())
      .then((data) => setDivisions(data));

    fetch("/json/district.json")
      .then((res) => res.json())
      .then((data) => setDistrict(data));
  }, []);

  const [filter, setFilter] = useState("");

  const handleDivisions = (e) => {
    setFilter(e.target.value);
  };

  const onSubmit = async (data) => {
    const roleValue = role;
    const formData = { ...data, role: roleValue };
    console.log(formData);
    const toastId = toast.loading("Registration Processing...");

    let imageUrl = ""; // Initialize imageUrl variable

    try {
      if (role === "seller") {
        const imgFile = { image: formData.shopLogo[0] };
        console.log(imgFile);
        // Upload image file
        const res = await axiosPublic.post(image_hosting_api, imgFile, {
          headers: { "content-type": "multipart/form-data" },
        });
        imageUrl = res.data.data.display_url; // Assign imageUrl upon successful upload
      }

      const info = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        role: formData.role,
        pass: formData.password,
        join: new Date().toISOString().split("T")[0],
      };

      if (role === "seller") {
        info.shop_name = formData.shopName;
        info.description = formData.description;
        info.seller_number = formData.number;
        info.division = formData.division;
        info.district = formData.district;
        info.status = "Pending";
        info.shop_Logo = imageUrl; // Assign the uploaded image URL to info object
        info.join = new Date().toISOString().split("T")[0];
      }

      // Perform user registration
      const result = await axiosPublic.post("/users", info);

      if (result.data.insertedId) {
        await createUser(formData.email, formData.password);

        if (role === "seller") {
          await update(imageUrl, formData.firstName); // Pass imageUrl to update function
        } else {
          await update("", formData.firstName);
        }

        // Redirect to login page upon successful registration
        navigate("/login");
        reset();
        toast.success("Registration Success !! Login Now", { id: toastId });
      }
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error("Registration Failed. Please try again later.", {
        id: toastId,
      });
    }
  };

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (role === "seller") {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [role]);

  return (
    <div>
      <Helmet>
        <title>Shop.my || Registration</title>
      </Helmet>

      <div className="bg-[#F1F5F6] flex justify-center items-center mt-">
        <div className="w-full justify-center items-center p-5 lg:p-10">
          <div className="grid grid-cols-1 items-center relative lg:grid-cols-2 mx-auto bg-white rounded-md">
            <div className="px-8 py-8 ">
              <h2 className="text-center w-full mb-1 text-2xl text-slate-600 font-bold">
                Registration{" "}
                <span className="text-orange-500 font-bold ">Shopp.My</span>
              </h2>
              <div className="relative">
                <form
                  className="text-slate-600"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div></div>
                  <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                    <div className="flex flex-col w-full gap-1 mb-2">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border bg-slate-100 border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="ex : Polash"
                        {...register("firstName", { required: true })}
                      />
                    </div>
                    <div className="flex relative w-full flex-col gap-1 mb-2">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border bg-slate-100 border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                        id="lastName"
                        name="lastName"
                        placeholder="ex : Ahmed"
                        {...register("lastName", { required: false })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row lg:flex-row  gap-1 md:gap-2 lg:gap-3">
                    <div className="flex flex-col w-full gap-1 mb-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border bg-slate-100 border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                        id="email"
                        name="email"
                        required
                        placeholder="ex : example@gmail.com"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div className="flex relative w-full flex-col gap-1 mb-2">
                      <label htmlFor="password">Password</label>
                      <input
                        type={open ? "text" : "password"}
                        className="w-full px-3 py-2 border bg-slate-100 border-slate-200 outline-none focus:border-indigo-500 rounded-md"
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
                            className="w-full px-3 py-2 border bg-slate-100 border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                            id="shopName"
                            name="shopName"
                            placeholder="Shop Name"
                            {...register("shopName", { required: true })}
                          />
                        </div>
                        <div className="flex flex-col w-full gap-1 mb-2">
                          <label htmlFor="shopLogo">Shop Logo</label>
                          <input
                            type="file"
                            className="w-full px-3 py-[6px] border bg-slate-100 border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                            id="shopLogo"
                            name="shopLogo"
                            {...register("shopLogo", { required: true })}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                        <div className="flex flex-col w-full gap-1 mb-2">
                          <label htmlFor="division">Division</label>
                          <select
                            className="w-full px-3 py-2 border bg-slate-100 border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                            name="division"
                            id="division"
                            {...register("division", { required: true })}
                            onChange={handleDivisions}
                          >
                            <option selected>Select Your Division</option>
                            {divisions.divisions?.map((d, i) => (
                              <option key={i} value={d.name}>
                                {d?.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="flex flex-col w-full gap-1 mb-2">
                          <label htmlFor="district">District</label>
                          <select
                            className="w-full px-3 py-2 border bg-slate-100 border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                            id="district"
                            name="district"
                            {...register("district", { required: true })}
                          >
                            <option selected>Select Your District</option>
                            {district.districts?.map((distr) => (
                              <option key={distr.id} value={distr.name}>
                                {distr?.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <div className="flex relative w-full flex-col gap-1 mb-2">
                          <label htmlFor="description">Description</label>
                          <textarea
                            cols="7"
                            rows="7"
                            placeholder="Description"
                            className="w-full px-3 py-2 text-sm border bg-slate-100 border-slate-200 outline-none focus:border-indigo-500 rounded-md"
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
