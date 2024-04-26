import React from "react";

const ShopLoader = ({ loading }) => {
  return (
    <div className="">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-30 text-2xl text-white">
          Loading...
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShopLoader;
