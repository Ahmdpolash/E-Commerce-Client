import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const MobileCart = ({ mobileCart, setMobileCart }) => {
  const { data, refetch, isLoading } = useCart();
  const axiosPublic = useAxiosPublic();

  const handleDelete = (id) => {
    axiosPublic.delete(`/carts/items/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success("Cart Items deleted successfully");
        refetch();
      } else {
        toast.error("Failed to deleted Cart Items ");
      }
    });
  };

  return (
    <div className="">
      {isLoading && (
        <div>
          <div className="animate-pulse">
            <div className="flex justify-between">
              <div className="w-[40px] h-6 rounded-md bg-slate-300"></div>
              <div className="bg-slate-300 h-4 w-full"></div>
              <div className="bg-slate-300 h-4 w-1/2"></div>
            </div>
          </div>
        </div>
      )}

      <div className="ml- mt-2 flex justify-between px-4 py-2  border-b">
        <h3
          onClick={() => setMobileCart(false)}
          className="bg-red-500  text-white hover:shadow-red-400/60 h-7 w-7 rounded-full inline-block"
        >
          <RxCross1 className="mt-[6px]  ml-[6px]" />
        </h3>

        <p className="text-slate-600 font-medium">Cart({data?.length})</p>
      </div>

      {data?.length === 0 ? (
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
      ) : (
        <div className="z-50 p-4 mt- overflow-y-auto">
          {data?.map((item, i) => (
            <div key={i} className="border-b border-slate-200 py-2 overflow-y-auto">
              <div className="flex cursor-pointer items-center justify-between gap-2">
                <img src={item?.images[0]} className="w-[40px] " alt="" />
                <div>
                  <h3 className="text-slate-600">
                    {item?.product_name.slice(0, 37)}..
                  </h3>
                  <h3 className="text-slate-600">${item?.price}</h3>
                </div>
                <div
                  onClick={() => handleDelete(item?._id)}
                  className="border  shadow-md rounded-full h-[25px] w-[25px]"
                >
                  <RxCross1 className="mx-auto pt-[6px] text-[19px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

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
