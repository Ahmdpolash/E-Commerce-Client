import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/loader/success.json";

const OrderSuccess = () => {
  return (
    <div className="bg-[#F6F6F5] ">
     
     {/*  make a success page */}
        <div className="max-w-4xl mx-auto p-5 ">
            <div className="flex flex-col items-center justify-center h-sceen">
            <Lottie
                animationData={animationData}
                loop={false}
                className="w-64 h-64"
            />
            <h1 className="text-3xl font-bold text-green-600 mt-3">
                Order Successful!
            </h1>
            <p className="text-gray-600 mt-2">
                Thank you for your order. We will process it shortly.
            </p>
            </div>
        </div>
     
    </div>
  );
};

export default OrderSuccess;
