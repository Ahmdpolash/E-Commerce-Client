import React from "react";
import Container from "../../../Components/Container/Container";

const DiscountCard = () => {
  return (
    <div className="bg-[#F5F0F0]">
      <Container>
        <div class="relative  h-[180px] lg:h-auto">
          <div className="  w-full h-full flex items-center">
            <div className=" absolute px-10">
              <p className="text-[16px] uppercase font-semibold text-white">
                Apply Card today and{" "}
                <span class="text-[#ffc600]">get Discount</span>{" "}
              </p>
              <p className="text-gray-400 text-[15px]">
                In rewards on your first day of purchase when you are approved
                for the card.
              </p>
            </div>

            <img
              className=" rounded-md h-full lg:h-auto"
              src="https://demo-uminex.myshopify.com/cdn/shop/files/img_1_4.png?v=1673237940&amp;width=1500"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DiscountCard;
