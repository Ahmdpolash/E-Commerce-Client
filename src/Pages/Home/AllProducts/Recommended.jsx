import React, { useState } from "react";
import Container from "../../../Components/Container/Container";
import { FaArrowRight, FaEye, FaArrowCircleRight } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import "../../Shop/shop.css";
import useProducts from "../../../Hooks/useProducts";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Ratings from "../../../Components/Ratings";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Recommended = () => {
  const { data, isLoading, refetch } = useProducts();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    console.log(product);

    if (user) {
      const cartItem = {
        productId: product?._id,
        product_name: product?.product_name,
        email: user.email,
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
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${product?.product_name.slice(0, 15)} added to your cart`,
              showConfirmButton: false,
              timer: 1500,
            });

            refetch();
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
          if (res.data.insertedId) {
            toast.success("Wishlist Added Successfully");

            refetch();
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
        <div className="bg-white px-3 py-2 lg:py-6 shadow-md border mt-2">
          <h1 className="text-2xl font-semibold mb-2">Recommended To You</h1>

          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4">
            {data?.slice(5)?.map((product, i) => (
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

                  <div className="flex items-center  font-semibold">
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((j, i) => (
                  <div
                    key={i}
                    className="bg-white shadow-md border h-[240px] w-full p-3 rounded-md"
                  >
                    <div className="animate-pulse delay-1000">
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

        <div className="mx-auto text-center my-4">
          <button className="bg-[#222222] hover:bg-red-500 duration-500 px-4 lg:px-6 py-2 rounded-md text-white">
            View More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Recommended;
