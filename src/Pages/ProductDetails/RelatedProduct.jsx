import React from "react";
import "../Shop/shop.css";
import {
  FaArrowCircleRight,
  FaArrowRight,
  FaEye,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";
import {
  FaBangladeshiTakaSign,
  FaCartShopping,
  FaCodeCompare,
  FaHeart,
  FaStarHalfStroke,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import Ratings from "../../Components/Ratings";
import { Link, useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import useProducts from "../../Hooks/useProducts";

const RelatedProduct = () => {
  const { data, isLoading } = useProducts();

  return (
    <>
      <div>
        <Swiper
          slidesPerView="auto"
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            565: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={25}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom_bullet",
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data?.map((product, i) => (
            <SwiperSlide key={i}>
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
                    <Link
                      to={`/details/${product?._id}`}
                      className="w-[38px] shadow-md border h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-red-500 hover:text-white hover:rotate-[360deg] transition-all"
                    >
                      <FaEye className="text-[18px]" />
                    </Link>

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
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full flex justify-center items-center py-5">
          <div className="custom_bullet justify-center gap-3 !w-auto"></div>
        </div>
      </div>
    </>
  );
};

export default RelatedProduct;
