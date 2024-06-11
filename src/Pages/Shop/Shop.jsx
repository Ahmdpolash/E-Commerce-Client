import React, { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";

import "./shop.css";
import { FaAngleLeft, FaRegStar, FaStar } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import Slider from "rc-slider";
import { FaAngleRight } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";

import "rc-slider/assets/index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pagination from "../../Components/Pagination";
import { Helmet } from "react-helmet";
import useProducts from "../../Hooks/useProducts";
import useCategory from "../../Hooks/useCategory";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useCart from "../../Hooks/useCart";
import useWishlist from "../../Hooks/useWishlist";
import ShopLoader from "./ShopLoader";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 15500]); // Initial price range

  // pagination
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(3);

  const formatPrice = (value) => {
    return `$${value}`;
  };

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  const handleStyle = {
    width: 22, // Increase the width
    height: 22, // Increase the height
    borderRadius: "50%", // Make it round
    backgroundColor: "#F6F6F5", // Set a custom color
    border: "2px solid #ef4444", // Add a border
    marginLeft: "-2px", // Adjust for the increased width
    marginTop: "-10px", // Adjust for the increased height
  };
  const trackStyle = {
    backgroundColor: "#ccc", // Set the track color to gray
    height: "4px", // Set the track height
  };

  const [isOpen, setOpen] = useState(false);
  const [styles, setStyles] = useState("grid");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    scroll(0, 0);
  }, []);

  // add to cart and wishlist funciton
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { refetch } = useCart();
  const { refetch: reload } = useWishlist();

  const handleAddToCart = (product) => {
    console.log(product);

    if (user) {
      const cartItem = {
        productId: product?._id,
        email: user.email,
        quantity: 1,
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
            reload();
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

  //!================================================filtering================================================
  const { data, isLoading } = useProducts([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data: categoryItem } = useCategory();
  const [ratings, setRatings] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [sorting, setSortings] = useState(null);

  console.log(sorting);

  useEffect(() => {
    fetchProducts();
  }, [category, ratings, sorting]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let url = "/product";

      //category
      if (category) {
        url += `?category=${category}`;
      }

      //ratins
      if (ratings !== null) {
        url += (url.includes("?") ? "&" : "?") + `minReview=${ratings}`;
      }

      //asc-desc
      if (sorting) {
        url += (url.includes("?") ? "&" : "?") + `sort=${sorting}`;
      }

      // Fetch all products if no filters are selected
      if (!category && !ratings) {
        url = "/product";
      }

      // Fetch products from the backend
      const response = await axiosPublic.get(url);

      setProducts(response.data);
    } catch (error) {
      // setError(error.response.data.message || "Something went wrong");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setCategory(null);
    setRatings(null);
    setSortings(null);
    fetchProducts();
  };

  return (
    <div className="bg-[#F6F6F5]">
      <Helmet>
        <title>Shop.my || Shop</title>
      </Helmet>
      {/* shop banner */}
      <section className='bg-[url("https://i.ibb.co/cySj5Q2/shop.gif")] h-[150px] md:h-[180px] lg:h-[220px] mt-3 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shop.my</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <FaAngleRight />
                </span>
                <span>Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* shop banner */}

      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {/* desktop sidebar */}
          <div className="col-span-1 hidden lg:block border-2 bg-white px-5 py-4">
            {/* categories */}
            <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
              <h1 className="text-xl text-gray-600 font-semibold ">
                Categories
              </h1>
              <h2
                onClick={handleClear}
                className="cursor-pointer text-gray-600 font-semibold"
              >
                Clear
              </h2>
            </div>

            <div className="py-3 space-y-2 pl-1">
              {categoryItem?.map((cate, idx) => (
                <div key={idx} className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input
                        onChange={() =>
                          setCategory(
                            category === cate.category ? null : cate.category
                          )
                        }
                        checked={category === cate.category}
                        value={cate?.category}
                        type="checkbox"
                      />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">{cate.category}</h3>
                </div>
              ))}
            </div>
            {/* categories end*/}

            {/* colors */}

            <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
              <h1 className="text-xl text-gray-600 font-semibold ">Colors</h1>
              <h2 className="text-gray-600 cursor-pointer font-semibold">
                Clear
              </h2>
            </div>

            {/* <div className="py-3 space-y-2 pl-1">
              {colors?.map((item, idx) => (
                <div key={idx} className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input
                        // onChange={(e) => setColor(e.target.value)}
                        value={item}
                        type="checkbox"
                      />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">{item}</h3>
                </div>
              ))}
            </div> */}

            {/* colors end */}
            {/* price */}

            <h1 className="text-xl mb-3 border-b-2 border-gray-200 py-1 text-[#4b5563] font-semibold">
              Price
            </h1>

            <div className="px-2 space-y-2 ">
              <Slider
                range
                min={0}
                max={15500}
                value={priceRange}
                onChange={handleSliderChange}
                className="ml-2"
                handleStyle={[handleStyle, handleStyle]}
                trackStyle={[trackStyle, trackStyle]}
              />
              <div>
                <p className="text-gray-500 text-[16px] font-semibold">
                  Price:{" "}
                  <span className="text-[#ef4444] font-bold">
                    {formatPrice(priceRange[0])}
                  </span>{" "}
                  to
                  <span className="text-[#ef4444] font-bold">
                    {" "}
                    {formatPrice(priceRange[1])}
                  </span>
                </p>
              </div>
            </div>
            <button class="px-5 my-3 w-full text-white py-2 text-center rounded bg-[#ef4444] border-gray-400">
              Filter
            </button>

            {/* price end */}

            {/* rating */}
            <div>
              <h1 className="text-xl mb-3 border-b-2 border-gray-200 py-1 text-[#4b5563] font-semibold">
                Rating
              </h1>
              <div
                onClick={() => setRatings(5)}
                className="flex cursor-pointer gap-3 mb-2"
              >
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
              </div>
              <div
                onClick={() => setRatings(4)}
                className="flex cursor-pointer gap-3 mb-2"
              >
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
              </div>
              <div
                onClick={() => setRatings(3)}
                className="flex cursor-pointer gap-3 mb-2"
              >
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
              </div>
              <div
                onClick={() => setRatings(2)}
                className="flex cursor-pointer gap-3 mb-2"
              >
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
              </div>
              <div
                onClick={() => setRatings(1)}
                className="flex cursor-pointer gap-3 mb-2"
              >
                <FaStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
              </div>
              <div
                onClick={() => setRatings(0)}
                className="flex cursor-pointer gap-3"
              >
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
                <FaRegStar className="text-[#F6BA00] text-[22px]" />
              </div>
            </div>
          </div>
          {/* desktop sidebar */}

          {/* mobile sidebar */}
          <div className="block relative lg:hidden">
            <div
              onClick={handleOpen}
              className={`bg-[#F85606] cursor-pointer  -left-0 top-[180px] md:top-[213px] z-30 fixed inline hover:bg-black duration-500 px-1 rounded-r-md py-4 text-white ${
                isOpen ? "hidden" : ""
              }`}
            >
              <FaAngleRight size={22} />
            </div>
            <div
              onClick={handleClose}
              className={`bg-[#F85606] cursor-pointer  left-[75%] md:left-[360px] top-[180px] md:top-[213px] fixed inline px-1 hover:bg-black duration-500 rounded-r-md py-4 z-50 text-white ${
                isOpen ? "" : "hidden"
              }`}
            >
              <FaAngleLeft className="duration-500 ease-in" size={24} />
            </div>

            <div
              className={`${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } top-0  transition-all duration-500 left-0 z-[9999] w-[320px] md:w-[360px] fixed overflow-auto h-full border-r-2 shadow-2xl border-gray-100 p-4 bg-white`}
            >
              <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
                <h1 className="text-xl text-gray-600 font-semibold ">
                  Categories
                </h1>
                <h2 className="text-gray-600 font-semibold">Clear</h2>
              </div>
              <div className="py-3 space-y-2 pl-1">
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Phones</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Tablet</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Laptops</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Shoes</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Watches</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Clothing</h3>
                </div>

                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Pants</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">T-Shirt</h3>
                </div>
              </div>

              <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
                <h1 className="text-xl text-gray-600 font-semibold ">Colors</h1>
                <h2 className="text-gray-600 font-semibold">Clear</h2>
              </div>

              <div className="py-3 space-y-2 pl-1">
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">White</h3>
                </div>

                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Red</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Blue</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Green</h3>
                </div>

                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Pink</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <div>
                    <label className="container">
                      <input type="checkbox" />
                      <svg className="w-4 h-4" viewBox="0 0 64 64">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          class="path"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <h3 className="text-gray-700 text-[17px]">Silver</h3>
                </div>
              </div>

              {/* mobile price */}
              <h1 className="text-xl mb-3 border-b-2 border-gray-200 py-1 text-[#4b5563] font-semibold">
                Price
              </h1>

              <div className="px-2 space-y-2 ">
                <Slider
                  range
                  min={0}
                  max={15500}
                  value={priceRange}
                  onChange={handleSliderChange}
                  className="ml-2"
                  handleStyle={[handleStyle, handleStyle]}
                  trackStyle={[trackStyle, trackStyle]}
                />
                <div>
                  <p className="text-gray-500 text-[16px] font-semibold">
                    Price:{" "}
                    <span className="text-[#ef4444] font-bold">
                      {formatPrice(priceRange[0])}
                    </span>{" "}
                    to
                    <span className="text-[#ef4444] font-bold">
                      {" "}
                      {formatPrice(priceRange[1])}
                    </span>
                  </p>
                </div>
              </div>
              <button class="px-5 my-3 w-full text-white py-2 text-center rounded bg-[#ef4444] border-gray-400">
                Filter
              </button>
              {/* mobile price end */}
            </div>
          </div>
          {/* mobile sidebar end */}

          {/* righ side  contents*/}

          <div className="col-span-3 relative">
            {/* product header */}
            <div className=" lg:h-[60px] w-full border-2 mb-5 bg-white">
              <div className="flex  items-center px-4 py-3 justify-between">
                <h2 className="font-semibold text-gray-800 text-[16px] md:text-xl lg:text-xl ">
                  ({data?.length}) Products
                </h2>
                <div className="flex gap-2 lg:gap-4 items-center">
                  <select
                    onChange={(e) => setSortings(e.target.value)}
                    className="border outline-none py-1 text-center shadow-md border-gray-300"
                    name=""
                  >
                    <option value="">Sort By</option>
                    <option value="lowToHigh">Low to High Price</option>
                    <option value="highToLow">High to Low Price</option>
                    <option value="a-z">Sort by Letter (A-Z)</option>
                    <option value="z-a">Sort by Letter (Z-A)</option>
                  </select>

                  <span
                    onClick={() => setStyles("grid")}
                    className={`p-2 ${
                      styles === "grid" && "bg-slate-300"
                    } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                  >
                    <IoGrid className=" text-gray-700 text-[21px]" />
                  </span>

                  <span
                    onClick={() => setStyles("list")}
                    className={`p-2 ${
                      styles === "list" && "bg-slate-300"
                    } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                  >
                    <FaListUl className="text-[22px] text-gray-700" />
                  </span>
                </div>
              </div>
            </div>

            {/* products card */}

            {/* Loading */}
            <div>
              <ShopLoader loading={loading} />
            </div>

            <div>
              {products?.length === 0 && (
                <div className="h-screen w-full flex justify-center items-center">
                  <div className="text-center">
                    <h1 className="text-red-500 text-3xl">Oops!</h1>
                    <p className="text-2xl">No products found.</p>
                  </div>
                </div>
              )}

              <div
                className={`grid  w-full ${
                  styles === "grid"
                    ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
                    : "grid-cols-1 "
                } gap-3   `}
              >
                <ProductCard
                  products={products}
                  handleAddToCart={handleAddToCart}
                  handleAddToWishlist={handleAddToWishlist}
                />

                {/* {loading && (
                  <>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((j, i) => (
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
                )} */}
              </div>
            </div>

            {/* products end */}

            {/* pagination */}

            <div className="mt-5 mb-4">
              <Pagination
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                totalItem={20}
                parPage={perPage}
                showItem={Math.floor(20 / 3)}
              />
            </div>

            {/* pagination end */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
