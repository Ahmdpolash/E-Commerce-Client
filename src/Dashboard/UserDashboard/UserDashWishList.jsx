import React from "react";

import { FaEye } from "react-icons/fa";

import { FaArrowRightArrowLeft } from "react-icons/fa6";

import "../../Pages/Shop/shop.css";
import useWishlist from "../../Hooks/useWishlist";
import Ratings from "../../Components/Ratings";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";

const UserDashWishList = () => {
  const { data } = useWishlist();
  const axiosPublic = useAxiosPublic();
  const { refetch } = useCart();
  const { user } = useAuth();

  const handleAddToCart = (items) => {
    console.log(items);
    const cartItem = {
      productId: items?._id,
      email: user?.email,
      product_name: items?.product_name,
      discount: items?.discount,
      images: items?.images,
      brand: items?.brand,
      shop_name: items?.shopName,
      price: items?.price,
      stock: items?.stock,
      shop_logo: items?.shopLogo,
      review: items?.review,
    };

    axiosPublic
      .post("/carts", cartItem)

      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Product already added") {
          toast.error(`This Product already in your cart 🙄`);
        } else {
          refetch();

          toast.success("Product Added successfully..✅");
        }
      });
  };

  return (
    <div>
      <div className="bg-white py-3 px-4 rounded-md mb-2">
        <h2 className="font-semibold text-slate-600">
          My Wishlist ({data?.length})
        </h2>
      </div>

      {data?.length === 0 ? (
        <h2 className="text-center font-semibold text-slate-700 mt-20">No Wishlist Added Yet</h2>
      ) : (
        <div className="grid grid-cols-2 mb-16 lg:mb-0 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {data?.map((items, i) => (
            <div>
              <div
                key={items?._id}
                className="card lg:h-[280px] bg-white  cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3"
              >
                <div className="relative overflow-hidden">
                  {items?.discount ? (
                    <div className="flex justify-center items-center absolute text-white w-[35px] md:w-[38px] lg:w-[38px] h-[35px] md:h-[38px] lg:h-[38px] rounded-full bg-red-500 font-semibold text-xs left-1 lg:left-2 top-1 lg:top-2">
                      -{items?.discount}%
                    </div>
                  ) : (
                    ""
                  )}

                  <img
                    className="mx-auto group-hover: w-[160px] h-[130px] md:h-[170px] lg:h-[160px] md:w-full lg:w-full  rounded-md transition-opacity hover:duration-700 ease-in-out"
                    src={items?.images[0]}
                    alt="items image"
                  />

                  <ul className="flex gap-3 h-[60px] lg:h-[80px] bg-slate-100 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-700 -bottom-10 justify-center items-center  absolute w-full group-hover:bottom-0">
                    <li className="w-[38px] shadow-md border h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[360deg] transition-all">
                      <FaArrowRightArrowLeft className="text-[20px]" />
                    </li>
                    <Link
                      to={`/details/${items?.productId}`}
                      className="w-[38px] shadow-md border h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-red-500 hover:text-white hover:rotate-[360deg] transition-all"
                    >
                      <FaEye className="text-[18px]" />
                    </Link>
                    <li
                      onClick={() => handleAddToCart(items)}
                      className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center shadow-md border rounded-full hover:bg-violet-500 hover:text-white hover:rotate-[360deg] transition-all"
                    >
                      <AiOutlineShoppingCart className="text-[20px]" />
                    </li>
                  </ul>
                </div>

                <div className="">
                  <Link to={`/details/${items._id}`}>
                    {" "}
                    <h3 className="font-medium text-slate-800 my-1 mt-1 hover:text-red-500 duration-500">
                      {items?.product_name.slice(0, 30)}..
                    </h3>
                  </Link>

                  <div className="flex items-center">
                    <Ratings ratings={items?.review} /> ( {items?.review} )
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashWishList;
