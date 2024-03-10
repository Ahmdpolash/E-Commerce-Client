import React from "react";
import { useSwiper } from "swiper/react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export const SwiperBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex gap-3">
      <button
        onClick={() => swiper.slidePrev()}
        className="w-[30px] h-[30px] flex justify-center items-center  bg-slate-200 border border-slate-200"
      >
        <span>
          <FiChevronLeft />
        </span>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="w-[30px] h-[30px] flex justify-center items-center bg-slate-200 border border-slate-200"
      >
        <span>
          <FiChevronRight />
        </span>
      </button>
    </div>
  );
};
