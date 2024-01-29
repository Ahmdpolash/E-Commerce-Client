import { jwtDecode } from "jwt-decode";
import UserDashHome from "../UserDashboard/UserDashHome";
import SellerDashHome from "../SellerDashboard/SellerDashHome";
import AdminDashHome from "../AdminDashboard/AdminDashHome";

const DashboardLayout = () => {
  const data = localStorage.getItem("access_token");

  const token = jwtDecode(data);
  console.log(token.role);

  return (
    <div>
      <div>{token.role === "user" && <UserDashHome />}</div>
      <div>{token.role === "seller" && <SellerDashHome />}</div>
      <div>{token.role === "admin" && <AdminDashHome />}</div>
    </div>
  );
};

export default DashboardLayout;
