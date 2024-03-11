import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import your icon library

import { Link } from "react-router-dom";

import useCategory from "../../../Hooks/useCategory";
import CategorySkeleton from "../../../Components/Skeleton/CategorySkeleton";

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="prev-arrow absolute bg-red-500 rounded-full top-1/2 z-40 transform -translate-y-1/2 left-0"
    onClick={onClick}
  >
    <FiChevronLeft color="white" size={24} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="next-arrow absolute bg-red-500 rounded-full top-1/2 transform -translate-y-1/2 right-3"
    onClick={onClick}
  >
    <FiChevronRight color="white" size={24} />
  </div>
);

const Category = () => {
  const { data, isLoading } = useCategory();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Set the number of products to show by default
    slidesToScroll: 2,
    autoplay: false, // Enable autoplay
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
    <div className="bg-gra-100 py-">
      <div className="py-4 px-4 lg:px-16 overflow-hidden">
        {/* <h1 className="font-semibold text-2xl mb-2 uppercase flex gap-2 items-center">Categories <FaArrowRight/> </h1>{" "} */}

        <CategorySkeleton isLoading={isLoading} />
        <Slider
          className="grid bg-gay-200 px-3 py-6 grid-cols-2  md:grid-cols-4 lg:grid-cols-7"
          {...settings}
        >
          
          {data?.map((category, idx) => (
            <Link key={idx}
              className="bg-slate-100 p-4"
              to={`/shop?category=${category?.category}`}
            >
              <div key={idx}>
                <div className="bg-[#fff] relative shadow-md  hover:border hover:border-red-400 hover:duration-300  border h-[140px] w-[90%] rounded-md">
                  <div className="text-center  mx-auto p- w-[90]">
                    <img
                      className="w-[130px] opacity-90 hover:opacity-100 h-[110px] object-cover rounded-md mt-3 mx-auto hover:duration-700 transition-all hover:scale-110"
                      src={category?.image}
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-center font-medium mt-1">
                  {category?.category}
                </p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
