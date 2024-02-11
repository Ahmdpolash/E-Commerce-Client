import React, { useState } from "react";
import logo from "../../public/logo2.png";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
const BottomNavContent = () => {
  const [state, setState] = useState("menu");

  const navList = (
    <>
      <NavLink to="/" className="lg:ml-4">
        Home
      </NavLink>
      <NavLink to="/shop" className="lg:ml-4">
        Shop
      </NavLink>
      <NavLink to="/contact" className="lg:ml-4">
        Contact
      </NavLink>
      <NavLink to="/service" className="lg:ml-4">
        Services
      </NavLink>
      <NavLink to="/blog" className="lg:ml-4">
        Blogs
      </NavLink>
    </>
  );

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
              state === "menu" ? "border-red-600" : "border-slate-200"
            } w-full py-2 bg-white text-base border-b text-gray-900  `}
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
            <ul className="flex uppercase flex-col p-5 gap-5 text-[18px]">
              {navList}
            </ul>

            <div className="flex justify-center items-center mx-a">
              <Link
                to="/sellerRegistration"
                className="flex gap-1 ml-2  border rounded-full cursor-pointer hover:border-red-500 duration-300 text-[14px] font-semibold py-3 items-center  border-gray-400 px-4 hover:bg-transparent hover:text-black  bg-black text-white"
              >
                <FaRegUser /> Seller Registration
              </Link>
            </div>
          </div>
        )}
        {state === "category" && <div>
            
            
            
            
        </div>}
      </div>
    </div>
  );
};

export default BottomNavContent;
