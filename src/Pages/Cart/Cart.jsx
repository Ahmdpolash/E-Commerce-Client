import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
// import banner from '../../../public/banner/card.jpg'
import toast from "react-hot-toast";
import useCart from "../../Hooks/useCart";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Cart = () => {
  const axiosPublic = useAxiosPublic();

  // cart

  const { data, refetch } = useCart();
  const groupedProducts = data?.reduce((acc, product) => {
    const { shop_name } = product;
    acc[shop_name] = acc[shop_name] || [];
    acc[shop_name].push(product);
    return acc;
  }, {});

  const handleDelete = (id) => {
    axiosPublic.delete(`/carts/items/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success("Cart Items deleted successfully");
        refetch();
      } else {
        toast.error("Failed to delete Cart Items ");
      }
    });
  };

  useEffect(() => {
    scroll(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Shop.my | Cart</title>
      </Helmet>
      {/* shop banner */}
      <section className='bg-[url("https://i.ibb.co/HFyqg34/card.jpg")] h-[150px] md:h-[180px] lg:h-[220px] mt-1d bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shopp.my</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <FaAngleRight />
                </span>
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eeeeee]">
        <Container>
          <div className="grid grid-cols-1 py-4 lg:grid-cols-4 gap- lg:gap-4">
            <div className="col-span-3 bgw w-full ">
              {data?.length > 0 ? (
                <div>
                  <div className="bg-white py-3 px-4 mb-3">
                    <h2 className="text-md text-green-500 font-semibold">
                      Stock Products {data?.length}
                    </h2>
                  </div>

                  {groupedProducts &&
                    Object?.entries(groupedProducts)?.map(
                      ([shop_name, products]) => (
                        <div className="bg-white p-4 mb-3">
                          <div className="flex items-center gap-x-1 cursor-pointer">
                            <input
                              type="checkbox"
                              className="h-4 w-4 cursor-pointer"
                              name=""
                              id=""
                            />
                            <div className="p-2 flex items-center gap-1">
                              <h2 className="font-normal  text-black text-[19px]">
                                {shop_name}.
                              </h2>
                              <span>
                                <FaChevronRight className="mt-[6px]" />
                              </span>
                            </div>
                          </div>

                          {products?.map((item, idx) => (
                            <div key={item._id} className="w-full ">
                              <div className="flex flex-wrap  gap-2 border-b border-slate-300 py-1 mb-2 justify-between items-center">
                                <div className="flex gap-2 flex-wrap items-center">
                                  <input
                                    type="checkbox"
                                    className="h-4 w-4 cursor-pointer"
                                    name=""
                                    id=""
                                  />
                                  <img
                                    className="w-[70px] h-[70px] rounded-md"
                                    src={item?.images[0]}
                                    alt="product image"
                                  />
                                  <div className="pr-4 text-slate-600">
                                    <h2 className="text-md">
                                      {item?.product_name.slice(0, 36)}..
                                    </h2>
                                    <span className="hidden lg:block text-sm">
                                      Brand:{" "}
                                      {item?.brand ? item?.brand : "No Brand"}
                                    </span>
                                    <span className="hidden lg:block text-sm">
                                      only {item?.stock} items (s) in stock
                                    </span>
                                  </div>
                                </div>

                                <div>
                                  <div className="pl-4 sm:pl-0">
                                    <h2 className="text-lg text-orange-500">
                                      $500
                                    </h2>
                                    <p className="line-through">$1200</p>
                                    <p>
                                      -{item?.discount ? item?.discount : 0}%
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-2 flex-col">
                                  <div className="flex bg-slate-200 h-[30px] justify-center items-center text-xl">
                                    <div className="px-3 cursor-pointer">-</div>
                                    <div className="px-3"></div>
                                    <div className="px-3 cursor-pointer">+</div>
                                  </div>
                                  <button
                                    onClick={() => handleDelete(item?._id)}
                                    className="px-5 py-[3px] bg-[#F85606] text-white"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )
                    )}
                </div>
              ) : (
                <div className="flex  items-center justify-center mb-10 lg:mb-0 mt-2 lg:mt-20">
                  <div>
                    <img
                      className="w-[120px] lg:w-[250px] mx-auto animate-bounce delay-700"
                      src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
                      alt="cart"
                    />
                    <p className="text-[#e66b2e text-center text-slate-700 font-semibold text-[17px]">
                      Looks like your cart is empty 😔. Browse our products and
                      add something!
                    </p>
                    <p className="text-center text-slate-700 font-semibold">
                      To Continue Shopping..
                    </p>
                    <div className="mx-auto text-center mt-4">
                      <Link
                        className="px-7 rounded-md bg-[#F85606] py-2   text-white"
                        to="/shop"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-1 lg:h-[470px] bg-white border shadow-md w-full px-6 py-3">
              <h2 className="font-bold text-slate-700 py-2 text-2xl">
                Cart Totals
              </h2>
              <div>
                <div className="flex py-1 justify-between item-center">
                  <p className="text-[#5F6C72] font-normal text-[18px]">
                    Sub-Total
                  </p>
                  <p className="text-[16px] font-semibold">$</p>
                </div>
                <div className="flex py-1 justify-between item-center">
                  <p className="text-[#5F6C72] font-normal text-[18px]">
                    Shipping
                  </p>
                  <p className="text-[16px] font-semibold">Free</p>
                </div>
                <div className="flex  justify-between item-center border-b-2 border-slate-200 pt-1 pb-3">
                  <p className="text-[#5F6C72] font-normal text-[18px]">
                    Discount
                  </p>
                  <p className="text-[16px] font-semibold">$24</p>
                </div>
                <div className="flex py-1 justify-between item-center">
                  <p className="text-[#5F6C72] font-semibold text-[18px]">
                    Total
                  </p>
                  <p className="text-[16px] font-semibold">$1520</p>
                </div>
                <button className="py-2 lg:py-3 w-full text-[15px] text-white font-semibold cursor-pointer uppercase bg-[#F85606] mt-4 rounded-md ">
                  Proceed to Checkout{" "}
                </button>
              </div>

              <div className="mt-2  bg-white">
                <h1 className="text-xl text-slate-700 py-2 font-bold">
                  Coupon
                </h1>
                <input
                  type="text"
                  placeholder="write here the coupon code"
                  className="border outline-none border-[#fa8232] py-2 lg:py-3 px-3 w-full"
                />
                <button className="py-2 lg:py-3 w-full text-[15px] text-white font-semibold cursor-pointer uppercase bg-[#F85606] rounded-md mt-2">
                  Coupon{" "}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Cart;
