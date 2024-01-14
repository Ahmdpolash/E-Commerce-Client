import React from "react";
import { useState } from "react";
import Container from "../../Components/Container/Container";
import {
  FaAngleRight,
  FaFacebookF,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaStar,
  FaTwitter,
} from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  let available = 6;

  const handleIncrement = () => {
    if (quantity < available) {
      setQuantity(quantity + 1);
    } else {
      alert("Stock limit exceeded");
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const images = [
    "https://i.ibb.co/jk2wM6d/r10-id1-364x364.jpghttps://i.ibb.co/0FNNTZD/r10-id1-364x364-removebg-preview.png",
    "https://i.ibb.co/m51Zw6b/nexg-n70-id3-364x364.jpg",
    "https://i.ibb.co/2PXWWNh/h660d-01-500x500.webp",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div>
      {/* header */}
      <div className='bg-[url("https://github.com/SheikhFarid99/multi-vendor-ecommerce/blob/main/client/public/images/banner/order.jpg?raw=true")] h-[120px] md:h-[170px] lg:h-[210px]  mt-2 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shop.my</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EFF4F9] hidden md:block lg:block h-10 w-full">
        <h2 className="flex gap-2 items-center px-4 py-2 text-gray-500">
          Home <FaAngleRight /> Electronics <FaAngleRight /> LG 22MK600M-B 21.5
          inch IPS Full HD LED Monitor{" "}
        </h2>
      </div>
      {/* header */}

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-7 mt-6 gap-7">
          <div className="col-span-2 ">
            <div className=" h-[210px]  ml-7 lg:ml-0 md:h-[280px] lg:h-[410px]  p-4 w-[440px overflow-hidden  border-2 border-gray-100  rounded-xl">
              <img
                className="h-full  w-full object-contain "
                src={currentImage}
                alt=""
              />
            </div>

            <div className="grid grid-cols-3 ml-7 lg:ml-0 gap-7 lg:gap-3   my-3">
              {images?.map((image) => (
                <button
                  onClick={() => setCurrentImage(image)}
                  className={`w-full border  ${
                    currentImage === image && "border-2 border-orange-500"
                  } rounded-lg`}
                  key={image}
                >
                  <img
                    className="w-[100px] md:mx-auto md:text-center p-2   md:h-28 rounded-lg"
                    src={image}
                    alt=""
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-3">
            <div className="space-y-2 border-b-2 py-2 lg:py-4 border-gray-200">
              <h1 className="font-semibold text-xl lg:text-2xl">
                LG 22MK600M-B 21.5 inch IPS Full HD LED Monitor
              </h1>
              <div className="flex justify-center md:justify-start lg:justify-start item-center gap-1">
                <FaStar className="text-[18px] lg:text-[20px] text-yellow-400" />
                <FaStar className="text-[18px] lg:text-[20px] text-yellow-400" />
                <FaStar className="text-[18px] lg:text-[20px] text-yellow-400" />
                <FaStar className="text-[18px] lg:text-[20px] text-yellow-400" />
                <FaStar className="text-[18px] lg:text-[20px] text-yellow-400" />
                <span className="h-[20px] bg-gray-300 w-[1px]"></span>
                <div className="-mt-[4px] lg:-mt-[2px] px-1">
                  <p className="text-gray-500 cursor-pointer font-normal">
                    (5) reviews
                  </p>
                </div>
                <span className="h-[20px] bg-gray-400 w-[1px]"></span>
                <div className="-mt-[4px] lg:-mt-[2px] px-1">
                  <p className="text-gray-500 cursor-pointer">write review</p>
                </div>
              </div>
            </div>
            <div className="py-2 lg:py-3 space-y-1">
              <h1 className="font-bold text-2xl text-gray-800">Price : $100</h1>
              <p className="text-gray-700">
                1 cross button function two left and right 3D joystick functions
                8 numeric keys 4 function keys. With 7 channels of LED
                indication.The device is built with a Glass front (Gorilla Glass
                Victus), a glass back (Gorilla Glass), and an aluminum frame.
              </p>

              <div className="py-2 l:py-3">
                <div className="flex gap-16">
                  <h1 className="font-semibold  text-[17px]">Category</h1>
                  <p className="text-[17px] text-gray-600">Electronics</p>
                </div>
                <div className="flex gap-14">
                  <h1 className="font-semibold text-[17]">Availability</h1>
                  <p className="text-[17px] text-green-600">In stock(6)</p>
                </div>
                <div className="flex items-center gap-6">
                  <h1 className="font-semibold text-[17px]">Seller/Vendors</h1>
                  <p className="text-[17px] flex items-center gap-1 text-gray-600">
                    Gadget Zone{" "}
                    <span className="text-green-500 ml-2 mt-1">
                      {" "}
                      <MdVerified className="text-green-600" />{" "}
                    </span>{" "}
                  </p>
                </div>
              </div>

              {/* btn */}

              <div className="py-3 l:py-4 flex gap-3 items-center">
                <div className="flex cursor-pointer bg-[#E0E8EF] w-32 rounded-md">
                  <p
                    onClick={handleDecrement}
                    className="w-full py-1 lg:py-2 text-2xl text-center border"
                  >
                    {" "}
                    -
                  </p>
                  <p className="border w-full text-center text-xl font-semibold py-1 lg:py-2">
                    {quantity}
                  </p>
                  <p
                    onClick={handleIncrement}
                    className="text-center py-1 lg:py-2 text-xl w-full border"
                  >
                    +
                  </p>
                </div>

                <button className="bg-violet-500 flex cursor-pointer  gap-1 items-center py-2 lg:py-3 text-white px-6 rounded-sm">
                  Add to Cart <IoCartOutline className="text-[22px]" />
                </button>

                <div className="py-3 lg:py-4  px-3 lg:px-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/40 bg-cyan-500 text-white">
                  <FaHeart />
                </div>
              </div>
              {/* btn end */}

              <div className="flex pt-2 gap-8 items-center">
                <h2 className="text-xl font-semibold ">Share on</h2>

                <ul className="flex justify-start items-center gap-3">
                  <li>
                    <a
                      className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-indigo-500 rounded-full text-white"
                      href="#"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-cyan-500 rounded-full text-white"
                      href="#"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-purple-500 rounded-full text-white"
                      href="#"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-blue-500 rounded-full text-white"
                      href="#"
                    >
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex gap-3 pt-5">
                <button className="px-8 py-2 lg:py-3 cursor-pointer hover:shadow-lg hover:shadow-emerald-500/40 bg-emerald-500 text-white">
                  Buy Now
                </button>{" "}
                <Link className="px-8 py-2 lg:py-3  cursor-pointer hover:shadow-lg hover:shadow-lime-500/40 bg-lime-500 text-white block">
                  Chat Seller
                </Link>
              </div>
            </div>
          </div>

          {/* delivery box */}

          <div className="col-span-2">
            <div className="py-5 px-5 border-2 shadow-lg rounded-md border-gray-300">
              <p className="text-sm text-slate-500">Delivery</p>
              <ul className="space-y-2 mb-4">
                <li className="text-base flex  gap-2 items-start">
                  {" "}
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-lg mt-2 text-slate-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>{" "}
                  <span>Kurigram, Kurigram - Rangpur, Bangladesh</span>{" "}
                </li>
                <li className="text-base flex  gap-2 items-start">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="text-lg mt-1 text-slate-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="448"
                        height="256"
                        x="32"
                        y="80"
                        fill="none"
                        stroke-linejoin="round"
                        stroke-width="32"
                        rx="16"
                        ry="16"
                        transform="rotate(180 256 208)"
                      ></rect>
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M64 384h384M96 432h320"
                      ></path>
                      <circle
                        cx="256"
                        cy="208"
                        r="80"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      ></circle>
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80m368 176a80 80 0 00-80 80M32 256a80 80 0 0180 80"
                      ></path>
                    </svg>
                  </span>
                  <div>
                    <p>
                      {" "}
                      <span className="font-medium">
                        Estimated Delivery:
                      </span>{" "}
                      <span className="text-sm"> 20 Jan - 27 Jan</span>
                    </p>
                    <p className="text-sm text-mute">3 - 7 (days)</p>
                  </div>
                </li>
                <li className="text-base flex  gap-2 items-start">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 640 512"
                      className="text-lg mt-1 text-slate-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M621.3 237.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7H480V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v336c0 44.2 35.8 80 80 80 26.3 0 49.4-12.9 64-32.4 14.6 19.6 37.7 32.4 64 32.4 44.2 0 80-35.8 80-80 0-5.5-.6-10.8-1.6-16h163.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H624c8.8 0 16-7.2 16-16v-85.5c0-17-6.7-33.2-18.7-45.2zM80 432c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm128 0c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm272-224h37.5c4.3 0 8.3 1.7 11.3 4.7l43.3 43.3H480v-48zm48 224c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z"></path>
                    </svg>
                  </span>
                  <span>Cash on Delevery Available</span>
                </li>
              </ul>
              <p className="text-sm text-slate-500">Service</p>
              <ul className="space-y-2">
                <li className="text-base flex  gap-2 items-start">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="text-lg mt-2 text-slate-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M304 48l112 112-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"
                      ></path>
                    </svg>
                  </span>
                  <div>
                    <p>
                      {" "}
                      <span className="font-medium">14 days easy return</span>
                    </p>
                    <p className="text-sm text-mute">
                      Change of mind is not applicable
                    </p>
                  </div>
                </li>
                <li className="text-base flex  gap-2 items-start">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="text-lg mt-1 text-slate-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M336 176L225.2 304 176 255.8"
                      ></path>
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z"
                      ></path>
                    </svg>
                  </span>
                  <div>
                    <p>
                      {" "}
                      <span className="font-medium">1 Year Brand Warranty</span>
                    </p>
                  </div>
                </li>
                <li className="text-base flex  gap-2 items-start">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="text-lg mt-1 text-slate-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                      ></path>
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M368 192L256.13 320l-47.95-48m-16.23 48L144 272m161.71-80l-51.55 59"
                      ></path>
                    </svg>
                  </span>
                  <div>
                    <p>
                      {" "}
                      <span className="font-medium">
                        100% original &amp; official
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* delivery box */}
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;