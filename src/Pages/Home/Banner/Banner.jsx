import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="pt-2 lg:pt-3">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative w-max">
          <img
            className="lg:h-full h-[220px] w-full "
            src="http://ps.magentech.com/themes/sp_goldmart/modules/sphomeslider/images/9fbaaa7be5f8595e4d778dac0286cb6a2a168d3b_sample-1.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="relative w-max ">
          <img
            className="rounded lg:h-[440px] h-[220px] w-full "
            src="https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/gadget_for_big_banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-max ">
          <img
            className="rounded lg:h-[440px] h-[220px] w-full "
            src="https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/Unbeatable_deals_Bangla_big_banner_1__1.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="relative w-max ">
          <img
            className=" lg:h-full h-[220px] w-full "
            src="http://ps.magentech.com/themes/sp_goldmart/modules/sphomeslider/images/bc636ae4f38f1a5f83fb4ccf987581aa73411af8_sample-2.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="relative w-max ">
          <img
            className="rounded lg:h-[440px] h-[220px] w-full "
            src="https://icms-image.slatic.net/images/ims-web/2f2a89a2-159d-41a3-981c-b6c72738db00.jpg_1200x1200.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>


      

      <div className="px-4 hidden lg:block bg-[#FFE8DE] mt-2 lg:px-16 py-3 ">
        <div className="grid grid-cols-2 gap-y-3 md:gap-y-3 lg:gap-0  md:grid-cols-3 lg:grid-cols-6">
          <div className="flex gap-2 ">
            <img
              src="https://icms-image.slatic.net/images/ims-web/55c642f0-250b-4515-9c8a-42cce3327098.png"
              alt=""
            />
            <p className="font-semibold">Safe Payment</p>
          </div>
          <div className="flex gap-2">
            <img
              src="https://icms-image.slatic.net/images/ims-web/f2a7f550-3a25-478d-9879-e6aa419c7ebf.png"
              alt=""
            />
            <p className="font-semibold">Free & Easy Returns</p>
          </div>
          <div className="flex gap-2">
            <img
              src="https://icms-image.slatic.net/images/ims-web/1b7e5ccb-89fc-4383-bc27-4586e82195be.png"
              alt=""
            />
            <p className="font-semibold">Nationwide Delivery</p>
          </div>

          <div className="flex gap-2">
            <img
              src="https://icms-image.slatic.net/images/ims-web/781b5194-65f0-4ae5-b7a6-003bc717054f.png"
              alt=""
            />
            <p className="font-semibold">100% Authentic Products</p>
          </div>
          <div className="flex gap-2">
            <img
              src="https://icms-image.slatic.net/images/ims-web/05352646-9b19-4283-a7b1-dcb16736663e.png"
              alt=""
            />
            <p className="font-semibold">Shop.my Verified</p>
          </div>
          <div className="flex gap-2">
            <img
              src="https://icms-image.slatic.net/images/ims-web/781b5194-65f0-4ae5-b7a6-003bc717054f.png"
              alt=""
            />
            <p className="font-semibold">Best Price Guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
