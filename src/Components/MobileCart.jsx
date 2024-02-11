import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const MobileCart = ({ mobileCart, setMobileCart }) => {
  return (
    <div className="">
      <div className="ml-3 mt-2 ">
        <h3
          onClick={() => setMobileCart(false)}
          className="bg-red-500  text-white hover:shadow-red-400/60 h-7 w-7 rounded-full inline-block"
        >
          <RxCross1 className="mt-[6px]  ml-[6px]" />
        </h3>
      </div>
      {/* if length 0 */}
      <div className=" flex h-[80vh] justify-center items-center ">
        <div>
          <img
            className="w-[120px] mx-auto"
            src="https://img.freepik.com/free-vector/sale-full-shopping-cart-red-pictogram_1284-8505.jpg?size=626&ext=jpg&ga=GA1.1.507178097.1703095808&semt=ais"
            alt=""
          />
          <p>Your cart is now Empty</p>
        </div>
      </div>
      {/* if length 0 */}

      {/* bottom btn */}

      <div className="absolute px-2 bottom-[0px] w-full flex gap-2">
        <Link
          to="/cart"
          className="bg-[#FE2424] text-center text-white w-1/2 rounded-t-md py-3"
        >
          View Cart
        </Link>
        <Link
          to="/checkout"
          className="bg-[#FE2424] text-center text-white w-1/2 rounded-t-md py-3"
        >
          Checkout
        </Link>
      </div>
      {/* bottom btn */}
    </div>
  );
};

export default MobileCart;
