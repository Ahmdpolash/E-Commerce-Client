import React, { useEffect } from "react";
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
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import RelatedProduct from "./RelatedProduct";
import Review from "./Review";
import Description from "./Description";
import SellerInform from "./SellerInform";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [state, setState] = useState("reviews");
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const data = useLoaderData();
  const { user } = useAuth();

  const { description } = data;

  const location = useLocation();

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

  const [currentImage, setCurrentImage] = useState(data?.images[0]);

  useEffect(() => {
    scroll(0, 0);
  }, []);

  // add to cart
  const handleAddToCart = (data) => {
    if (user) {
      const cartItem = {
        productId: data?._id,
        email: user.email,
        product_name: data?.product_name,
        discount: data?.discount,

        images: data?.images,
        brand: data?.brand,
        shop_name: data?.shopName,
        price: data?.price,
        stock: data?.stock,
        shop_logo: data?.shopLogo,
      };

      axiosPublic
        .post("/carts", cartItem)

        .then((res) => {
          console.log(res.data);
          if (res.data.message === "Product already added") {
            toast.error(`This Product already in your cart 🙄`);
          } else {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data?.product_name.slice(0, 15)} added to your cart`,
              showConfirmButton: false,
              timer: 1500,
            });

            // refetch();
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

  const handleAddToWishlist = (data) => {
    if (user) {
      const cartItem = {
        productId: data?._id,
        email: user.email,
        product_name: data?.product_name,
        discount: data?.discount,

        images: data?.images,
        brand: data?.brand,
        price: data?.price,
        stock: data?.stock,
        shop_logo: data?.shopLogo,
      };

      axiosPublic
        .post("/wishlists", cartItem)

        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.error(`This Product already in your Wishlist 🙄`);
          } else {
            toast.success("Wishlist Added Successfully ✅✅");
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
    <div className=" bg-[#F3F4F6]">
      {/* header */}
      <div className='bg-[url("https://github.com/SheikhFarid99/multi-vendor-ecommerce/blob/main/client/public/images/banner/order.jpg?raw=true")] h-[140px] md:h-[180px] lg:h-[240px]  mt-2 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shop.my</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fff] hidden md:block lg:block h-10 w-full">
        <h2 className="flex gap-2 items-center px-4 py-2 text-gray-500">
          Home <FaAngleRight /> Electronics <FaAngleRight /> LG 22MK600M-B 21.5
          inch IPS Full HD LED Monitor{" "}
        </h2>
      </div>
      {/* header */}

      <Container>
        <div className="grid bg-white grid-cols-1 p-2 lg:grid-cols-7 mt-6 gap-2 lg:gap-7">
          <div className="col-span-2 ">
            <div className=" h-[210px]  ml-3 lg:ml-0 md:h-[280px] lg:h-[410px]  p-4 w-[440px overflow-hidden  border-2 border-gray-100  rounded-xl">
              <img
                className="h-full  w-full object-contain "
                src={currentImage}
                alt=""
              />
            </div>

            <div className="grid grid-cols-3 ml-4 lg:ml-0 gap-4 lg:gap-3   my-3">
              {data?.images?.map((image) => (
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
                {data?.product_name}
              </h1>
              <div className="flex justify-center md:justify-start lg:justify-start item-center gap-1">
                <FaStar className="text-[18px] lg:text-[20px] text-yellow-400" />
                <FaStar className="text-[18px] lg:text-[20px] text-yellow-400" />
                <FaStar className="text-[18px] lg:text-[20px] text-yellow-400" />
                <FaStar className="text-[18px] lg:text-[20px] text-yellow-400" />
                <FaStar className="text-[18px] lg:text-[20px] text-yellow-400" />
                {/* <Ratings ratings={data?.review} /> */}

                <span className="h-[20px] bg-gray-300 w-[1px]"></span>
                <div className="-mt-[4px] lg:-mt-[2px] px-1">
                  <p className="text-gray-500 cursor-pointer font-normal">
                    ({data?.review}) reviews
                  </p>
                </div>
                <span className="h-[20px] bg-gray-400 w-[1px]"></span>
                <div className="-mt-[4px] lg:-mt-[2px] px-1">
                  <p className="text-gray-500 cursor-pointer hover:underline decoration-green-600 py-1">
                    <a href="#review">write review</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="py-2 lg:py-3 space-y-1">
              <h1 className="font-bold text-2xl text-gray-800">
                Price : ${data?.price}
              </h1>
              <p className="text-gray-700">{data?.short_description}</p>

              <div className="py-2 l:py-3">
                <div className="flex gap-16">
                  <h1 className="font-semibold  text-[17px]">Category</h1>
                  <p className="text-[17px] text-gray-600">{data?.category}</p>
                </div>
                <div className="flex gap-14">
                  <h1 className="font-semibold text-[17]">Availability</h1>
                  <p className="text-[17px] text-green-600">
                    In stock({data?.stock})
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <h1 className="font-semibold text-[17px]">Seller/Vendors</h1>
                  <p className="text-[17px] flex items-center gap-1 text-gray-600">
                    {data?.shopName}
                    <span className="text-green-500 ml-2 lg:mt-1">
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

                <button
                  onClick={() => handleAddToCart(data)}
                  className="bg-violet-500 flex cursor-pointer  gap-1 items-center py-2 lg:py-3 text-white px-6 rounded-sm"
                >
                  Add to Cart <IoCartOutline className="text-[22px]" />
                </button>

                <div
                  onClick={() => handleAddToWishlist(data)}
                  className="py-3 lg:py-4  px-3 lg:px-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/40 bg-cyan-500 text-white"
                >
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

          <div className="col-span-2  mt-2 lg:mt-0">
            <div className="py-5 px-5 border-2  shadow-md rounded-md ">
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
                  {/* products */}
                  <span>
                    Kurigram, Kurigram - Rangpur,Road No. 12 - 19, Bangladesh
                  </span>{" "}
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

        <div>
          {/* tabs */}

          <section className="my-3 bg-white p-4">
            <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-3 gap-2">
              <button
                onClick={() => setState("reviews")}
                className={`py-1 hover:text-white font-semibold px-5 hover:bg-green-500 ${
                  state === "reviews"
                    ? "bg-green-500 text-white"
                    : "bg-slate-200 text-slate-700"
                } rounded-sm`}
              >
                Reviews
              </button>

              <button
                onClick={() => setState("description")}
                className={`py-1 px-5 hover:text-white font-semibold hover:bg-green-500 ${
                  state === "description"
                    ? "bg-green-500 text-white"
                    : "bg-slate-200  text-slate-700 font-semibold"
                } rounded-sm`}
              >
                Description
              </button>
              <button
                onClick={() => setState("seller")}
                className={`py-1 px-5 font-semibold hover:text-white hover:bg-green-500 ${
                  state === "seller"
                    ? "bg-green-500 text-white"
                    : "bg-slate-200 text-slate-700"
                } rounded-sm`}
              >
                Seller Information
              </button>
            </div>

            {state === "reviews" && (
              <div id="review" className="py-3 lg:px-8">
                <Review />
              </div>
            )}
            {state === "description" && (
              <div className="py-3">
                <Description description={description} />
              </div>
            )}
            {state === "seller" && (
              <div className="py-3">
                <SellerInform />
              </div>
            )}
          </section>
          {/* tabs */}

          {/* related product */}
          <div className=" related_product">
            <h1 className="font-semibold bg-white text-2xl px-3 border shadow-md mb-2 py-2">
              Related Product
            </h1>

            <div>
              <RelatedProduct />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
