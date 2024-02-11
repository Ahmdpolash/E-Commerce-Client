import React from 'react';

const MobileNav = () => {
    return (
        <div>
               <div
              className={`${
                open
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } lg:hidden transition-all duration-500 fixed  z-[99999] border border-gray-200 shadow-lg backdrop-blur-sm transform h-full sm-device w-[360px] md:w-[390px] bg-white text-black  top-0 left-0`}
            >
              <div className="flex justify-between">
                <button
                  className="px-4 relative text-[#FE2424] py-2 text-3xl font-semibold flex right-0 mt-2"
                  onClick={() => setOpen(false)}
                >
                  <FaHeart />
                </button>

                <div className="absolute left-8 top-2 bg-[#3bc177] h-6 text-white w-6 text-center rounded-full">
                  0
                </div>

                <button
                  className="px-4 text-[#FE2424] py-2 text-3xl font-semibold flex absolute right-0 mt-2"
                  onClick={() => setOpen(false)}
                >
                  <RxCross1 />
                </button>
              </div>

              {/* Login registration */}
              <div className="flex justify-center items-center gap-4">
                {user && token ? (
                  <div className=" cursor-pointer gap-2">
                    <span className="text-3xl flex items-center justify-center text-red-500">
                      {token?.role === "user" && (
                        <Link to="/dashboard/my-dashboard">
                          {" "}
                          <FaRegUserCircle />
                        </Link>
                      )}
                      {token?.role === "seller" && (
                        <Link to="/dashboard/seller-dashboard">
                          {" "}
                          <FaRegUserCircle />
                        </Link>
                      )}
                      {token?.role === "admin" && (
                        <Link to="/dashboard/admin-dashboard">
                          {" "}
                          <FaRegUserCircle />
                        </Link>
                      )}
                    </span>
                    <p className="font-semibold text-[18px]">
                      {user.displayName}
                    </p>
                  </div>
                ) : (
                  <>
                    <FaRegUser className="hover:text-red-400 font-semibold duration-300" />

                    <Link
                      to="/login"
                      className="hover:text-red-400 font-semibold duration-300"
                    >
                      Login
                    </Link>
                    <div className="border-r-2  border-gray-300 h-5 flex justify-center items-center mt-1"></div>
                    <Link
                      to="/register"
                      className="hover:text-red-400 font-semibold duration-300"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>

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