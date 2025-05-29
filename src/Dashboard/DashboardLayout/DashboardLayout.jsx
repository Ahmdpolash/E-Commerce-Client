import { jwtDecode } from "jwt-decode";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import UserDashSideBar from "../UserDashboard/UserDashSideBar";
import SellerDashSidebar from "../SellerDashboard/SellerDashSidebar";
import AdminDashSidebar from "../AdminDashboard/AdminDashSidebar";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null); // Add state to store the token

  useEffect(() => {
    const data = localStorage.getItem("access_token");

    // If no token found, navigate immediately
    if (!data) {
      console.warn("No token found, redirecting to login...");
      navigate("/login");
      return;
    }

    try {
      const decodedToken = jwtDecode(data);

      const currentTime = Date.now() / 1000; // in seconds
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        console.warn("Token expired, redirecting to login...");
        localStorage.removeItem("access_token");
        navigate("/login");
        return;
      }

      setToken(decodedToken); // Store the decoded token
    } catch (error) {
      console.error("Error decoding token:", error);
      // If token is invalid, remove it and redirect to login
      localStorage.removeItem("access_token");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <div>
        {token?.role === "user" && <UserDashSideBar />}
        {token?.role === "seller" && <SellerDashSidebar />}
        {token?.role === "admin" && <AdminDashSidebar />}
        <Toaster />
      </div>
    </div>
  );
};

export default DashboardLayout;
