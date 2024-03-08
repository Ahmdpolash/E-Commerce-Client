import React from "react";
import { RxCross1 } from "react-icons/rx";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useWishlist from "../Hooks/useWishlist";

const WishlistSlider = ({ wishlistClose }) => {
  const { data, refetch } = useWishlist();
  const axiosPublic = useAxiosPublic();

  const handleDelete = (id) => {
    axiosPublic.delete(`/wishlists/items/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success("Wishlist Items deleted successfully");
        refetch();
      } else {
        toast.error("Failed to deleted Wishlist Items ");
      }
    });
  };

  return (
    <div className=" z-[99999999999999] overflow-y-auto">
      {data?.length === 0 ? (
        <div className="absolute mt-[60%] lg:mt-[55%]  left-[28%] ">
          <img
            className="w-[120px] mx-auto"
            src="https://img.freepik.com/free-vector/sale-full-shopping-cart-red-pictogram_1284-8505.jpg?size=626&ext=jpg&ga=GA1.1.507178097.1703095808&semt=ais"
            alt=""
          />
          <p>Your Wishlist is now Empty</p>
        </div>
      ) : (
        <div className="z-50 p-4 mt-10 overflow-y-auto">
          {data?.map((item, i) => (
            <div className="border-b border-slate-200 py-2 overflow-y-auto">
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
                  className="border shadow-md rounded-full h-[25px] w-[25px]"
                >
                  <RxCross1 className="mx-auto pt-[6px] text-[19px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="border-b absolute top-1 w-full px-4 shadow-sm py-2 flex items-center justify-between">
        <button
          className=" z-10 text-[#FE2424] hover:rotate-[180deg] hover:duration-700 transition-all h-[30px] w-[30px] border rounded-full border-slate-500  font-semibold flex "
          onClick={wishlistClose}
        >
          <RxCross1 className="mx-auto pt-[6px] text-2xl" />
        </button>

        <p className="text-slate-700 text-[17px] font-semibold">
          Wishlist ({data?.length}){" "}
        </p>
      </div>
    </div>
  );
};

export default WishlistSlider;
