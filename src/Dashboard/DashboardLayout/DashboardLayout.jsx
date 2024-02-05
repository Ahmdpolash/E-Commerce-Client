import { jwtDecode } from "jwt-decode";
import { Outlet } from "react-router-dom";

import Navbar from "../../Shared/Navbar/Navbar";
import UserDashSideBar from "../UserDashboard/UserDashSideBar";
import SellerDashSidebar from "../SellerDashboard/SellerDashSidebar";
import AdminDashSidebar from "../AdminDashboard/AdminDashSidebar";

const DashboardLayout = () => {
  const data = localStorage.getItem("access_token");

  const token = jwtDecode(data);
  console.log(token.role);

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
