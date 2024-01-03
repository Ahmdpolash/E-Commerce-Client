// Card.js
import React, { useState } from "react";
import { FiShoppingCart, FiHeart, FiEye } from "react-icons/fi"; // Import icons

const Card = ({ defaultImage, hoverImage, productDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card relative w-64 h-80 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={
          isHovered
            ? "https://cdn.pixabay.com/photo/2014/11/09/08/04/online-523228_1280.jpg"
            : "https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942406_960_720.jpg"
        }
        alt="Product Image"
        className="w-full h-full absolute top-0 left-0 object-cover"
      />
      <p class="animate-spin border-4 border-dotted border-my-primary rounded-full h-5 w-5"></p>
      <div
        className={`overlay-icons absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ease-in-out ${
          isHovered ? "opacity-2" : "opacity-0"
        } bg-black bg-opacity-70`}
      >
        
        <FiShoppingCart className="text-white text-2xl mx-2 cursor-pointer" />

       
        <FiHeart className="text-white text-2xl mx-2 cursor-pointer" />

        <FiEye className="text-white text-2xl mx-2 cursor-pointer" />
      </div>

     

    </div>
  );
};

export default Card;
