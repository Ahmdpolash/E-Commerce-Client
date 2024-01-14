import React from "react";
import { Link } from "react-router-dom";

const SellerLogin = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <p className="">Seller Login Page</p> <br />
      <div>
        <h3 className="">
          Don't Have an Account  
           <Link to='/sellerRegistration' className="underline ml-2 text-blue-600">Create Account</Link>{" "}
        </h3>
      </div>
    </div>
  );
};

export default SellerLogin;
