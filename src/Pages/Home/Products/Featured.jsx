import React, { useState } from "react";
import Container from "../../../Components/Container/Container";
import { FaArrowCircleRight, FaArrowRight, FaEye } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

import "../../Shop/shop.css";
import { Link, useNavigate } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import Ratings from "../../../Components/Ratings";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const Featured = () => {
  const { data, isLoading, refetch } = useProducts();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    console.log(product);

    if (user) {
      const cartItem = {
        productId: product?._id,
        email: user.email,
        product_name: product?.product_name,
        discount: product?.discount,
        images: product?.images,
        brand: product?.brand,
        shop_name: product?.shopName,
        price: product?.price,
        stock: product?.stock,
        shop_logo: product?.shopLogo,
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
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please Login to add to the cart !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  const handleAddToWishlist = (product) => {
    console.log(product);

    if (user) {
      const cartItem = {
        productId: product?._id,
        email: user.email,
        product_name: product?.product_name,
        discount: product?.discount,

        images: product?.images,
        brand: product?.brand,
        shop_name: product?.shopName,
        price: product?.price,
        stock: product?.stock,
        shop_logo: product?.shopLogo,
      };

      axiosPublic
        .post("/wishlists", cartItem)

        .then((res) => {
          console.log(res.data);
          if (res.data.message === "Product already added") {
            toast.error(`This Product already in your Wishlist 🙄`);
          } else {
            toast.success("Wishlist Added Successfully 😊");
          }
        });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please Login to add to the cart !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="bg-[#F1F1F1]">
      <Container>
        <div className="py-2 lg:py-6 bg-white px-3">
          <div className="flex items-center gap-2">
            <h1 className="text-xl lg:text-2xl mb-2 font-semibold">
              Featured Collection
            </h1>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            id="small-device"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-3"
          >
            {data?.slice(0, 5)?.map((product, i) => (
              <div
                key={product?._id}
                className="card lg:h-[365px] bg-white  cursor-pointer group shadow-lg rounded-md border px-3 py-1 lg:py-3"
              >
                <div className="relative overflow-hidden">
                  {product?.discount ? (
                    <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                      -{product?.discount}%
                    </div>
                  ) : (
                    ""
                  )}

                  <img
                    className="mx-auto group-hover: w-[160px] h-[140px] md:h-[170px] lg:h-[210px] md:w-full lg:w-full  rounded-md transition-opacity hover:duration-700 ease-in-out"
                    src={product?.images[0]}
                    alt="Product image"
                  />

                  <ul className="flex gap-3 h-[75px] lg:h-[120px] bg-slate-100 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-700 -bottom-10 justify-center items-center  absolute w-full group-hover:bottom-0">
                    <li
                      onClick={() => handleAddToWishlist(product)}
                      className="w-[38px] shadow-md border h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[360deg] transition-all"
                    >
                      <AiFillHeart className="text-[20px]" />
                    </li>
                    <Link
                      to={`/details/${product?._id}`}
                      className="w-[38px] shadow-md border h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-red-500 hover:text-white hover:rotate-[360deg] transition-all"
                    >
                      <FaEye className="text-[18px]" />
                    </Link>
                    <li
                      onClick={() => handleAddToCart(product)}
                      className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center shadow-md border rounded-full hover:bg-violet-500 hover:text-white hover:rotate-[360deg] transition-all"
                    >
                      <AiOutlineShoppingCart className="text-[20px]" />
                    </li>
                    {/* <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[360deg] transition-all">
                   <AiOutlineShoppingCart  className="text-[20px]"/>
                 </li> */}
                  </ul>
                  {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-700"></div> */}
                </div>

                <div className="">
                  <Link to={`/details/${product._id}`}>
                    {" "}
                    <h3 className="font-medium text-slate-800 my-1 mt-1 hover:text-red-500 duration-500">
                      {product?.product_name.slice(0, 50)}..
                    </h3>
                  </Link>

                  <div className="flex">
                    <Ratings ratings={product?.review} /> ({product?.review})
                  </div>

                  <div className="pb-1 flex items-center justify-between">
                    <p className="font-semibold flex items-center gap-1 text-red-500 pb-2 transition-all duration-500 lg:mt-2">
                      <FaBangladeshiTakaSign /> {product?.price}
                    </p>
                    <button className="block lg:hidden text-red-500 absolute bottom-5 right-4">
                      {" "}
                      <FaArrowCircleRight className="text-[21px]" />{" "}
                    </button>

                    <div
                      onClick={() => handleAddToCart(product)}
                      className="bg-gray-50 lg:flex hidden items-center gap-2 text-red-500 border border-slate-300 py-[5px]  hover:border hover:duration-500 hover:border-red-500 rounded-full px-2 lg:px-4 text-[13px] font-semibold"
                    >
                      Add To Cart
                      <span>
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <>
                {[1, 2, 3, 4, 5].map((j, i) => (
                  <div
                    key={i}
                    className="bg-white shadow-md border h-[240px] w-full p-3 rounded-md"
                  >
                    <div className="animate-pulse infinite delay-1000">
                      <div className="bg-gray-300 h-[120px] w-full rounded-lg"></div>
                      <div className="h-3 w-full bg-gray-300 my-3  rounded-lg"></div>
                      <div className="h-3 w-1/2 bg-gray-300 my-3  rounded-lg"></div>
                      <div className="flex mt-3 items-center gap-3 rounded-lg">
                        <div className="h-3 bg-gray-300 w-1/2  rounded-lg"></div>
                        <div className="h-3 bg-gray-300 w-1/2  rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Featured;
