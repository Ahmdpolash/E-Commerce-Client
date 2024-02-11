import React from "react";

const MobileNav = () => {
  return (
    <div>
      <div
        className={`${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } lg:hidden transition-all duration-500 fixed  z-[99999] border border-gray-200 shadow-lg backdrop-blur-sm transform h-full sm-device w-[360px] md:w-[390px] bg-white text-black  top-0 left-0`}
      >
     

        {/* Login registration */}
      

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
    </div>
  );
};

export default MobileNav;
