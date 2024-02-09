import { jwtDecode } from "jwt-decode";
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../../Shared/Navbar/Navbar";
import UserDashSideBar from "../UserDashboard/UserDashSideBar";
import SellerDashSidebar from "../SellerDashboard/SellerDashSidebar";
import AdminDashSidebar from "../AdminDashboard/AdminDashSidebar";

const DashboardLayout = () => {
  const data = localStorage.getItem("access_token");
  const navigate = useNavigate();
  console.log("Token from local storage:", data);
  let token;

  try {
    token = jwtDecode(data);
    console.log("Decoded token:", token);
  } catch (error) {
    console.error("Error decoding token:", error);
    // Handle the error if necessary
    navigate("/login");
    return null;
  }

  return (
    <div>
      <div>
        <div> {token.role === "user" && <UserDashSideBar />}</div>
        <div>{token.role === "seller" && <SellerDashSidebar />}</div>
        <div>{token.role === "admin" && <AdminDashSidebar />}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
