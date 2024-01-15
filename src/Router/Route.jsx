import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import SellerRegistration from "../Pages/SellerAccount/SellerRegistration";
import Bookmarks from "../Pages/Bookmarks/Bookmarks";
import Compare from "../Pages/Compare/Compare";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/details",
        element: <ProductDetails />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "/compare",
        element: <Compare />,
      },
      {
        path: "/cart",
        element:<Cart/>
      },
      {
        path: "/checkout",
        element:<Checkout/>
      },

      {
        path: "/sellerRegistration",
        element: <SellerRegistration />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default Route;
