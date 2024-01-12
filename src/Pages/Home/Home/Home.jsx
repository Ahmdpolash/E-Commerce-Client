import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Products/Featured";

import Recommended from "../AllProducts/Recommended";
import Footer from "../../../Shared/Footer/Footer";
import Faq from "../Faq/Faq";

// import Card from "./Card";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Featured />
      <Recommended />
      {/* <Faq /> */}
      <Footer />
    </div>
  );
};

export default Home;
