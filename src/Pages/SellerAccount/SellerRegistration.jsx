import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";

const SellerRegistration = () => {
  return (
    <div className="bg-[#F6F6F5]">
      {/* header */}
      <div className='bg-[url("https://github.com/SheikhFarid99/multi-vendor-ecommerce/blob/main/client/public/images/banner/order.jpg?raw=true")] h-[140px] md:h-[180px] lg:h-[210px]  mt-1 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shop.my</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <FaAngleRight />
                </span>
                <span>Seller Registration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header */}

      <Container>
        <div className="border-2 w-full h-[70vh] p-4 bg-white border-gray-300 my-4"></div>
      </Container>
    </div>
  );
};

export default SellerRegistration;
