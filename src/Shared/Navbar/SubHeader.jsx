import React from "react";
import bd from "../../../public/bd.png";
import us from "../../../public/us.png";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";

import { FaGithub, FaLinkedin, FaRegUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const SubHeader = () => {
  const handleNotAvailable = () => {
    alert("sorry !! this functionality not added yet 😔");
  };

  return (
    <div>
      <div className="bg-[#eeeeee] hidden lg:flex py-2 lg:px-16  flex-col  lg:flex-row justify-between">
        <div>
          <p className="lg:flex hidden  gap-1 items-center mt-2 font-semibold text-[15px] text-gray-500">
            <MdOutlineMarkEmailUnread /> Email : ahmedpolash732@gmail.com
          </p>
        </div>
        <div className="flex mx-auto md:mx-auto lg:mx-0 gap-2">
          <Link
            to="/sellerRegistration"
            className="flex py-1 gap-1 ml-4  cursor-pointer hover:border-red-500 duration-300 text-[14px] font-semibold items-center  border-gray-400 px-2"
          >
            <FaRegUser /> Seller Registration
          </Link>

          <div className="border-r-2 border-gray-300 h-7 flex justify-center items-center mt-2"></div>

          <div class="relative z-10 border-gray-300 group">
            <button class="flex gap-2 items-center px-4 text-[14px] py-2 rounded focus:outline-none">
              <img className="w-[20px]" src={us} alt="" /> English{" "}
              <FaAngleDown />
            </button>

            <div class="absolute left-0  text-[14px]  w-28 px-2 text-left py-2 h-28 z-[99999999] cursor-pointer bg-white border border-gray-300 rounded shadow-md hidden group-hover:block">
              <p
                onClick={handleNotAvailable}
                class="flex hover:bg-gray-200 p-1 hover:shadow-md duration-500 gap-2 mb-1 items-center"
              >
                <img className="w-[20px]" src={us} alt="" /> English{" "}
              </p>
              <p
                onClick={handleNotAvailable}
                class="flex hover:bg-gray-200 p-1 hover:shadow-md duration-500 gap-2 mb-1 items-center"
              >
                <img className="w-[20px]" src={bd} alt="" /> বাংলা{" "}
              </p>
              <p
                onClick={handleNotAvailable}
                class="flex hover:bg-gray-200 p-1 hover:shadow-md duration-500 gap-2 mb-1 items-center"
              >
                <img className="w-[20px]" src={bd} alt="" /> Hindi{" "}
              </p>
            </div>
          </div>
          <div className="border-r-2 border-gray-300 h-7 flex justify-center items-center mt-2"></div>

          <div className="flex items-center gap-1 lg:gap-2">
            <TiSocialFacebook className="text-[20px] lg:text-[25px]" />
            <BsTwitterX className="text-[14px] lg:text-[17px]" />
            <FaLinkedin className="text-[14px] lg:text-[17px]" />
            <FaGithub className=" text-[15px] lg:text-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
