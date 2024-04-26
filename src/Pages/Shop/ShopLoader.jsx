import React from "react";
import loader from "../../assets/loader/shoploader.json";
import Lottie from "lottie-react";

const ShopLoader = ({ loading }) => {
  return (
    <div className="">
      {loading ? (
        <div className="absolute rounded-lg inset-0 flex items-center justify-center bg-slate-500 bg-opacity-50 z-30 text-2xl text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-100"></div>
          {/* <Lottie animationData={loader} loop={true} /> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShopLoader;
