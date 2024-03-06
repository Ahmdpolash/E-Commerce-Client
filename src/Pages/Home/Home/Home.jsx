import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Products/Featured";

import Recommended from "../AllProducts/Recommended";
import Faq from "../Faq/Faq";
import { Helmet } from "react-helmet";

// import Card from "./Card";

const Home = () => {
  useEffect(() => {
    scroll(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Shop.my || Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Featured />
      <Recommended />
      {/* <Faq /> */}
    </div>
  );
};

export default Home;
