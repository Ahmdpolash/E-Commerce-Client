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
import Contact from "../Pages/Contact/Contact";
import Service from "../Pages/Service/Service";
import Blog from "../Pages/Blog/Blog";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import UserDashHome from "../Dashboard/UserDashboard/UserDashHome";
import UserOrder from "../Dashboard/UserDashboard/UserOrder";
import UserDashWishList from "../Dashboard/UserDashboard/UserDashWishList";
import UserDashChangePass from "../Dashboard/UserDashboard/UserDashChangePass";
import UserDashNotification from "../Dashboard/UserDashboard/UserDashNotification";
import UserDashProfile from "../Dashboard/UserDashboard/UserDashProfile";

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
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },

      {
        path: "/sellerRegistration",
        element: <SellerRegistration />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "my-dashboard",
        element: <UserDashHome />,
      },
      {
        path: "my-orders",
        element: <UserOrder />,
      },
      {
        path: "my-wishlists",
        element: <UserDashWishList />,
      },
      {
        path: "change-password",
        element: <UserDashChangePass />,
      },
      {
        path: "notifications",
        element: <UserDashNotification />,
      },
      {
        path: "my-profile",
        element: <UserDashProfile />,
      },
    ],
  },
]);

export default Route;
