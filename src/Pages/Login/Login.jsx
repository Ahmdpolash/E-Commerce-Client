import React, { useEffect, useState } from "react";
import { FaEye, FaFacebookF } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import login from "../../../public/login/login.json";
import Lottie from "lottie-react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const { loginUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    scroll(0, 0);
  }, []);

  const onSubmit = (e) => {
    // e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    const toastId = toast.loading("Logging in...");
    loginUser(email, password)
      .then(() => {
        toast.success("Login successful", { id: toastId });
        navigate(location.state ? location.state : "/");
        window.location.reload();
      })
      .catch((err) => {
        toast.error("Login failed", { id: toastId });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        role: "user",
      };

      axiosPublic
        .post("/users", userInfo, { withCredentials: true })
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Logged In");
          }
        });
      navigate(location.state ? location.state : "/");
    });
  };

  const handleTestLogin = (role) => {
    if (role === "admin") {
      setEmail("admin@gmail.com");
      setPassword("Admin1");
    } else if (role === "seller") {
      setEmail("popejes@mailinator.com");
      setPassword("Pa$$w0rd!");
    } else if (role === "user") {
      setEmail("guest@gmail.com");
      setPassword("Pa$$w0rd!");
    }

    // Auto-submit after a tiny delay to make sure state updates
    setTimeout(() => {
      document.getElementById("login-form").requestSubmit();
    }, 100);
  };

  return (
    <div>
      <Helmet>
        <title>Shop.my || Login</title>
      </Helmet>
      <div className="bg-[#F1F5F6]  flex justify-center items-center mt-">
        <div className="w-full justify-center items-center p-5 lg:p-10">
          <div className="grid grid-cols-1 relative lg:grid-cols-2 lg:w-[70%] border border-slate-300 hover:border-orange-400 duration-500 hover:border shadow-md  mx-auto bg-white rounded-md">
            <div className="px-8 py-8 ">
              <h2 className="text-center w-full text-2xl text-slate-600 font-bold">
                Login{" "}
                <span className="text-orange-500 font-bold ">Shopp.My</span>
              </h2>

              <div className="flex justify-center gap-4 my-4">
                <button
                  type="button"
                  onClick={() => handleTestLogin("admin")}
                  className="px-3 py-2 bg-blue-500 text-white rounded-md"
                >
                  Login as Admin
                </button>
                <button
                  type="button"
                  onClick={() => handleTestLogin("seller")}
                  className="px-3 py-2 bg-violet-500 text-white rounded-md"
                >
                  Login as Seller
                </button>
                <button
                  type="button"
                  onClick={() => handleTestLogin("user")}
                  className="px-3 py-2 bg-orange-500 text-white rounded-md"
                >
                  Login as User
                </button>
              </div>

              <div className="relative">
                <form
                  className="text-slate-600"
                  onSubmit={handleSubmit(onSubmit)}
                  id="login-form"
                >
                  <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border bg-slate-100 border-slate-400 outline-none focus:border-indigo-500 rounded-md"
                      id="email"
                      name="email"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="flex relative flex-col gap-1 mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                      type={open ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full cursor-pointer px-3 py-2 border bg-slate-100 border-slate-400 outline-none focus:border-indigo-500 rounded-md"
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
                <button
                  onClick={handleGoogleLogin}
                  className="px-8 w-full py-2 bg-orange-500 shadow hover:shadow-orange-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3"
                >
                  <span>
                    <AiOutlineGoogle />
                  </span>
                  <span>Login with Google</span>
                </button>
                <button className="px-8 w-full py-2 bg-indigo-500 shadow hover:shadow-indigo-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>Login with Facebook</span>
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
              <div className="absolute lg:block bottom-0 right-0">
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
