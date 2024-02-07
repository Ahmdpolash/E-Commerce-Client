import { jwtDecode } from "jwt-decode";
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../../Shared/Navbar/Navbar";
import UserDashSideBar from "../UserDashboard/UserDashSideBar";
import SellerDashSidebar from "../SellerDashboard/SellerDashSidebar";
import AdminDashSidebar from "../AdminDashboard/AdminDashSidebar";

const DashboardLayout = () => {
  const data = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const token = jwtDecode(data);
  console.log(token.role);

  return (
    <div>
      {token ? (
        <div>
          <div> {token.role === "user" && <UserDashSideBar />}</div>
          <div>{token.role === "seller" && <SellerDashSidebar />}</div>
          <div>{token.role === "admin" && <AdminDashSidebar />}</div>
        </div>
      ) : (
        navigate("/login")
      )}
    </div>
  );
};

export default DashboardLayout;
