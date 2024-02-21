import React, { useState } from "react";
import logo from "../../public/logo2.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const BottomNavContent = () => {
  const [state, setState] = useState("menu");

  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logged out");
      navigate("/");
    });
  };

  const navList = (
    <>
      <NavLink
        to="/"
        className="hover:bg-red-500 hover:text-white rounded-md py-1 px-3  ml-2 duration-500"
      >
        Home
      </NavLink>
      <NavLink
        to="/shop"
        className="hover:bg-red-500 hover:text-white rounded-md py-1 px-3  ml-2 duration-500"
      >
        Shop
      </NavLink>
      <NavLink
        to="/contact"
        className="hover:bg-red-500 hover:text-white rounded-md py-1 px-3  ml-2 duration-500"
      >
        Contact
      </NavLink>
      <NavLink
        to="/service"
        className="hover:bg-red-500 hover:text-white rounded-md py-1 px-3  ml-2 duration-500"
      >
        Services
      </NavLink>
      <NavLink
        to="/blog"
        className="hover:bg-red-500 hover:text-white rounded-md py-1 px-3  ml-2 duration-500"
      >
        Blogs
      </NavLink>
      <button
        onClick={handleLogOut}
        to="/blog"
        className="hover:bg-red-500 hover:text-white text-left rounded-md py-1 px-3  ml-2 duration-500"
      >
        LOGOUT
      </button>
    </>
  );

  const [categories, setCategories] = useState([
    "Clothing",
    "Sport",
    "Phones",
    "Laptop",
    "Monitors",
    "Accessories",
  ]);

  return (
    <div>
      <div>
        <div className="logo border-slate-200 border-b">
          <img
            className="w-[160px]  md:w-[190px] mx-auto py-1  "
            src={logo}
            alt=""
          />
        </div>
        <div class="flex items-center py-2 px-5">
          <button
            onClick={() => setState("menu")}
            class={`${
              state === "menu"
                ? "border-red-600 text-red-600"
                : "border-slate-200"
            } w-full py-2 bg-white text-base border-b text-gray-900 `}
          >
            Menu
          </button>

          <button
            onClick={() => setState("category")}
            class={`${
              state === "category" ? "border-red-600" : "border-slate-200"
            } w-full py-2 bg-white text-base border-b text-gray-900  `}
          >
            Category
          </button>
        </div>

        {state === "menu" && (
          <div>
            <ul className="flex  uppercase flex-col px-4 gap-2 text-[16px]">
              {navList}
            </ul>

            <div className="flex justify-center items-center mx-a">
              <Link
                to="/sellerRegistration"
                className="flex gap-1 ml-2  border rounded-full cursor-pointer mt-8   hover:border-red-500 duration-300 text-[14px] font-semibold py-3 items-center  border-gray-400 px-4 hover:bg-transparent hover:text-black  bg-black text-white"
              >
                <FaRegUser /> Become a Seller
              </Link>
            </div>
          </div>
        )}
        {state === "category" && (
          <div className="p-4">
            <ul className="flex cursor-pointer flex-col w-full">
              {categories?.map((c, i) => (
                <li
                  className="hover:bg-red-500 hover:text-white rounded-md py-1 px-3 text-[18px] ml-2 duration-500 mb-2"
                  key={i}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomNavContent;
