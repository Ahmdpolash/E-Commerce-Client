import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Products/Featured";
import Card from "../Card";
import Recommended from "../AllProducts/Recommended";
import Footer from "../../../Shared/Footer/Footer";

// import Card from "./Card";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <Featured />
      <Recommended/>
      <Footer/>
      {/* <Card/> */}
    </div>
  );
};

export default Home;
