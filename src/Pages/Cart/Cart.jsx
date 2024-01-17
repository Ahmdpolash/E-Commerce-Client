import React from "react";
import { Helmet } from "react-helmet";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
// import banner from '../../../public/banner/card.jpg'

const Cart = () => {
  const product = [1, 2];
  const outOfStockProduct = [1];
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
              <h2 className="text-3xl font-bold">Shop.my</h2>
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
            <div className="col-span-3  w-full ">
              {product.length > 0 || outOfStockProduct.length > 0 ? (
                <div>
                  <div className="bg-white py-3 px-4 mb-3">
                    <h2 className="text-md text-green-500 font-semibold">
                      Stock Products {product.length - outOfStockProduct.length}
                    </h2>
                  </div>

                  {product.map((p, i) => (
                    <div className="bg-white p-4 mb-3">
                      <div className="px-2">
                        <h2>Polash Ahmed</h2>
                      </div>

                      {[1, 2].map((product, idx) => (
                        <div className="w-full ">
                          <div className="flex flex-wrap  gap-2 border-b-2 py-1 mb-2 justify-between items-center">
                            <div className="flex flex-wrap items-center">
                              <img
                                className="w-[80px] h-[80px]"
                                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/29-cart_default/hummingbird-printed-t-shirt.jpg"
                                alt="product image"
                              />
                              <div className="pr-4 text-slate-600">
                                <h2 className="text-md">
                                  Apple AirPods Max Over-Ear Wireless Headphone
                                </h2>
                                <span className="hidden lg:block text-sm">Brand: Apple</span>
                              </div>
                            </div>

                            <div>
                              <div className="pl-4 sm:pl-0">
                                <h2 className="text-lg text-orange-500">
                                  $500
                                </h2>
                                <p className="line-through">$1200</p>
                                <p>-10%</p>
                              </div>
                            </div>

                            <div className="flex gap-2 flex-col">
                              <div className="flex bg-slate-200 h-[30px] justify-center items-center text-xl">
                                <div className="px-3 cursor-pointer">-</div>
                                <div className="px-3">5</div>
                                <div className="px-3 cursor-pointer">+</div>
                              </div>
                              <button className="px-5 py-[3px] bg-red-500 text-white">
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <Link
                    className="px-4 py-1 bg-indigo-500 text-white"
                    to="/shops"
                  >
                    Shop Now
                  </Link>
                </div>
              )}
            </div>
            <div className="col-span-1 h-[320px] bg-white border shadow-md w-full px-6 py-3">
              <h2 className="font-bold text-slate-700 py-2 text-2xl">Cart Totals</h2>
              <div>
                <div className="flex py-1 justify-between item-center">
                  <p className="text-[#5F6C72] font-normal text-[18px]">Sub-Total</p>
                  <p className="text-[16px] font-semibold">$320</p>
                </div>
                <div className="flex py-1 justify-between item-center">
                  <p className="text-[#5F6C72] font-normal text-[18px]">Shipping</p>
                  <p className="text-[16px] font-semibold">Free</p>
                </div>
                <div className="flex  justify-between item-center border-b-2 border-slate-200 pt-1 pb-3">
                  <p className="text-[#5F6C72] font-normal text-[18px]">Discount</p>
                  <p className="text-[16px] font-semibold">$24</p>
                </div>
                <div className="flex py-1 justify-between item-center">
                  <p className="text-[#5F6C72] font-semibold text-[18px]">Total</p>
                  <p className="text-[16px] font-semibold">$3518</p>
                </div>
                <button className="py-2 lg:py-3 w-full text-[15px] text-white font-semibold cursor-pointer uppercase bg-[#FA8232] mt-4 rounded-md ">Proceed to Checkout </button>
              </div>
              
            </div>
            
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Cart;
