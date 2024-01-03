import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import your icon library

import img from "../../../../public/download.png";
import img2 from "../../../../public/fashion.png";
import { FaArrowRight } from "react-icons/fa6";

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="prev-arrow absolute top-1/2 z-40 transform -translate-y-1/2 left-0"
    onClick={onClick}
  >
    <FiChevronLeft color="red" size={24} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="next-arrow absolute top-1/2 transform -translate-y-1/2 right-3"
    onClick={onClick}
  >
    <FiChevronRight color="red" size={24} />
  </div>
);

const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Set the number of products to show by default
    slidesToScroll: 2,
    autoplay: false, // Enable autoplay
    autoplaySpeed: 2000,

    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 576, // Adjust breakpoints as needed for mobile screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 940, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="bg-[#F5F0F0] py-4">
      <div className="py-4 px-4 lg:px-16 overflow-hidden">
        {/* <h1 className="font-semibold text-2xl mb-2 uppercase flex gap-2 items-center">Categories <FaArrowRight/> </h1>{" "} */}

        <Slider
          className="grid bg-white px-3 py-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-7"
          {...settings}
        >
          <div>
            <div className="bg-gray-200 hover:border  hover:shadow-none hover:border-red-400 hover:duration-300 shadow border relative h-[160px] w-[180px] rounded-md">
              <div className="text-center mx-auto">
                <img
                  className="w-[120px] mx-auto duration-300 transition-all hover:scale-110"
                  src={img}
                  alt=""
                />
                <p className="ml-4 text-gray-600">Mobile & Tablet</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white hover:border hover:shadow-none hover:border-red-400 hover:duration-300 shadow border relative h-[160px] w-[180px] rounded-md">
              <div className="text-center mx-auto">
                <img
                  className="w-[110px]  transition-all hover:scale-110 hover:duration-500 mt-2 mx-auto"
                  src={img2}
                  alt=""
                />
                <p className="ml-4 py-2 font-semibold hover:text-red-600 hover:duration-300">
                  Fashion Clothing
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white hover:border hover:shadow-none hover:border-red-400 hover:duration-300 shadow border relative h-[160px] w-[180px] rounded-md">
              <div className="text-center mx-auto">
                <img className="w-[120px] mx-auto" src={img} alt="" />
                <p className="ml-4">Mobile</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white hover:border hover:shadow-none hover:border-red-400 hover:duration-300 shadow border relative h-[160px] w-[180px] rounded-md">
              <div className="text-center mx-auto">
                <img className="w-[120px] mx-auto" src={img} alt="" />
                <p className="ml-4">Mobile</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white hover:border hover:shadow-none hover:border-red-400 hover:duration-300 shadow border relative h-[160px] w-[180px] rounded-md">
              <div className="text-center mx-auto">
                <img className="w-[120px] mx-auto" src={img} alt="" />
                <p className="ml-4">Mobile</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white hover:border hover:shadow-none hover:border-red-400 hover:duration-300 shadow border relative h-[160px] w-[180px] rounded-md">
              <div className="text-center mx-auto">
                <img className="w-[120px] mx-auto" src={img} alt="" />
                <p className="ml-4">Mobile</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white hover:border hover:shadow-none hover:border-red-400 hover:duration-300 shadow border relative h-[160px] w-[180px] rounded-md">
              <div className="text-center mx-auto">
                <img className="w-[120px] mx-auto" src={img} alt="" />
                <p className="ml-4">Mobile</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Category;
