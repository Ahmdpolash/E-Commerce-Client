import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ProductDetails = () => {
  return (
    <div className="h-screen">
      <Carousel   style={{ marginBottom: 0 }} showArrows={false} showThumbs={true} showIndicators={false} className="w-[350px] h-[250px]">
        <div>
          <img className="" src="https://demo.websolutionus.com/topcommerce/uploads/custom-images/Gallery-2022-02-06-08-46-16-7300.jpg" />
        </div>
        <div>
          <img src="https://i0.wp.com/motta.uix.store/wp-content/uploads/2022/04/1-3.jpg?fit=1400%2C1400&ssl=1" />
        </div>
        <div>
          <img src="https://demo.websolutionus.com/topcommerce/uploads/custom-images/Gallery-2022-02-06-08-46-20-2923.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductDetails;
