import { useState } from "react";
import MobileSideNav from "../Dashboard/SellerDashboard/MobileSideNav";
import "../Responsive/Responsive.css";
import { FaList } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import useAuth from "../Hooks/useAuth";

const DashHeaders = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const accessToken = localStorage.getItem("access_token");
  const token = jwtDecode(accessToken);

  return (
    <div className="">
      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen backdrop-blur-sm top-0 left-0 z-10`}
      ></div>

      {/*--------------------- here header section start here---------------- */}
      <div className="header bg-white dark:bg-[#253145] mt-2  w-full rounded-md mb-2">
        <div className="flex justify-between items-center p-3">
          <div>
            {/* mobile menu icon */}
            <div className="block menuIcon lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="bg-indigo-500 py-2 px-2 text-white rounded-md text-xl"
              >
                <FaList />
              </button>
            </div>
            {/* mobile menu icon */}

            <input
              type="text"
              placeholder="Search.."
              className="outline-none hidden lg:block border border-gray-300 rounded-md shadow-sm w-11/12 py-2 px-3"
            />
          </div>

          <div className="">
            <div className="flex  items-center gap-4">
              <div className="sellerInfo">
                <h1 className="font-semibold">Polash Ahmed</h1>
                {token?.role === "seller" && (
                  <p className="text-right text-[14px] font-medium dark:text-white text-slate-700">
                    Seller
                  </p>
                )}
                {token?.role === "admin" && (
                  <p className="text-right text-[14px] font-medium dark:text-white text-slate-700">
                    Admin
                  </p>
                )}
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3g0kIKYCB-w9U0l4Srnvq3s7KLnR6JnArw&usqp=CAU"
                  alt="user image"
                  className="w-[50px] sellerImg h-[50px] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------here section end here------------- */}

      {/* ----------------------mobile sidebar---------------------- */}
      <div
        className={`w-[265px] mobileSideNav lg:hidden md:w-[340px] border-r-2 fixed bg-white top-0 z-[9999] h-full overflow-y-auto transition-all ${
          open ? "left-0" : "-left-[265px] md:-left-[340px] lg:left-0"
        }`}
      >
        <MobileSideNav />
      </div>
      {/*----------------------- mobile sidebar-------------------------- */}
    </div>
  );
};

export default DashHeaders;
