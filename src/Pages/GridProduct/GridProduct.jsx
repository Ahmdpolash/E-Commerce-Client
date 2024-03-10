import React from "react";
import Container from "../../Components/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useProducts from "../../Hooks/useProducts";
import { SwiperBtn } from "../../Components/SwiperBtn";

const GridProduct = () => {
  const { data } = useProducts();

  return (
    <div className="bg-[#F1F1F1]">
      <div className="py-6 lg:py-7">
        <Container>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
            <div className="bg-white px-4 py-2 rounded-md">
              <Swiper
                spaceBetween={10}
                centeredSlides={true}
                pagination:true
                modules={[Navigation]}
                className="mySwiper"
              >
                <div className="flex  flex-col gap-y-2">
                  <div>
                    <SwiperSlide className="relative w-max flex flex-col">
                      <div className="flex mb-4 border-slate-300 border-b justify-between">
                        <h1 className="pb-2 text-slate-700 text-[18px] font-semibold">
                          Top Rated Product
                        </h1>

                        <SwiperBtn />
                      </div>
                      {data?.slice(0, 4).map((p, i) => (
                        <div key={i} className="mb-3 flex gap-3 border-b pb-2">
                          <img
                            className="w-[100px] rounded-md"
                            src={p?.images[0]}
                            alt=""
                          />
                          <div>
                            <h1 className="text-[16px] text-slate-700 font-normal">
                              {p.product_name}
                            </h1>
                            <h1>Brand :{p.brand}</h1>
                            <h1 className="font-medium text-slate-700 text-[18px]">
                              ${p.price}
                            </h1>
                          </div>
                        </div>
                      ))}
                    </SwiperSlide>

                    <SwiperSlide className="relative w-max flex flex-col">
                      <div className="flex mb-4 border-slate-300 border-b justify-between">
                        <h1 className="pb-2 text-slate-700 text-[18px] font-semibold">
                          Top Rated Product
                        </h1>

                        <SwiperBtn />
                      </div>
                      {data?.slice(5, 9).map((p, i) => (
                        <div className="mb-3 flex gap-3 border-b pb-2">
                          <img
                            className="w-[100px] rounded-md"
                            src={p?.images[0]}
                            alt=""
                          />
                          <div>
                            <h1 className="text-[16px] text-slate-700 font-normal">
                              {p.product_name}
                            </h1>
                            <h1>Brand :{p.brand}</h1>
                            <h1 className="font-medium text-slate-700 text-[18px]">
                              ${p.price}
                            </h1>
                          </div>
                        </div>
                      ))}
                    </SwiperSlide>
                  </div>
                </div>
              </Swiper>
            </div>

            <div className="bg-white px-4 py-2 rounded-md">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination:true
                modules={[Navigation]}
                className="mySwiper"
              >
                <div className="flex  flex-col gap-y-2">
                  <div>
                    <SwiperSlide className="relative w-max flex flex-col">
                      <div className="flex mb-4 border-slate-300 border-b justify-between">
                        <h1 className="pb-2 text-slate-700 text-[18px] font-semibold">
                          Top Selling Product
                        </h1>

                        <SwiperBtn />
                      </div>
                      {data?.slice(8,12).map((p, i) => (
                        <div className="mb-3 flex gap-3 border-b pb-2">
                          <img
                            className="w-[100px] rounded-md"
                            src={p?.images[0]}
                            alt=""
                          />
                          <div>
                            <h1 className="text-[16px] text-slate-700 font-normal">
                              {p.product_name}
                            </h1>
                            <h1>Brand :{p.brand}</h1>
                            <h1 className="font-medium text-slate-700 text-[18px]">
                              ${p.price}
                            </h1>
                          </div>
                        </div>
                      ))}
                    </SwiperSlide>

                    <SwiperSlide className="relative w-max flex flex-col">
                      <div className="flex mb-4 border-slate-300 border-b justify-between">
                        <h1 className="pb-2 text-slate-700 text-[18px] font-semibold">
                          Top Selling Product
                        </h1>

                        <SwiperBtn />
                      </div>
                      {data?.slice(8, 12).map((p, i) => (
                        <div className="mb-3 flex gap-3 border-b pb-2">
                          <img
                            className="w-[100px] rounded-md"
                            src={p?.images[0]}
                            alt=""
                          />
                          <div>
                            <h1 className="text-[16px] text-slate-700 font-normal">
                              {p.product_name}
                            </h1>
                            <h1>Brand :{p.brand}</h1>
                            <h1 className="font-medium text-slate-700 text-[18px]">
                              ${p.price}
                            </h1>
                          </div>
                        </div>
                      ))}
                    </SwiperSlide>
                  </div>
                </div>
              </Swiper>
            </div>


            <div className="bg-white px-4 py-2 rounded-md">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination:true
                modules={[Navigation]}
                className="mySwiper"
              >
                <div className="flex  flex-col gap-y-2">
                  <div>
                    <SwiperSlide className="relative w-max flex flex-col">
                      <div className="flex mb-4 border-slate-300 border-b justify-between">
                        <h1 className="pb-2 text-slate-700 text-[18px] font-semibold">
                          Discount Product
                        </h1>

                        <SwiperBtn />
                      </div>
                      {data?.slice(2,6).map((p, i) => (
                        <div className="mb-3 flex gap-3 border-b pb-2">
                          <img
                            className="w-[100px] rounded-md"
                            src={p?.images[0]}
                            alt=""
                          />
                          <div>
                            <h1 className="text-[16px] text-slate-700 font-normal">
                              {p.product_name}
                            </h1>
                            <h1>Brand :{p.brand}</h1>
                            <h1 className="font-medium text-slate-700 text-[18px]">
                              ${p.price}
                            </h1>
                          </div>
                        </div>
                      ))}
                    </SwiperSlide>

                    <SwiperSlide className="relative w-max flex flex-col">
                      <div className="flex mb-4 border-slate-300 border-b justify-between">
                        <h1 className="pb-2 text-slate-700 text-[18px] font-semibold">
                        Discount Product
                        </h1>

                        <SwiperBtn />
                      </div>
                      {data?.slice(7, 11).map((p, i) => (
                        <div className="mb-3 flex gap-3 border-b pb-2">
                          <img
                            className="w-[100px] rounded-md"
                            src={p?.images[0]}
                            alt=""
                          />
                          <div>
                            <h1 className="text-[16px] text-slate-700 font-normal">
                              {p.product_name}
                            </h1>
                            <h1>Brand :{p.brand}</h1>
                            <h1 className="font-medium text-slate-700 text-[18px]">
                              ${p.price}
                            </h1>
                          </div>
                        </div>
                      ))}
                    </SwiperSlide>
                  </div>
                </div>
              </Swiper>
            </div>



          </div>
        </Container>
      </div>
    </div>
  );
};

export default GridProduct;
