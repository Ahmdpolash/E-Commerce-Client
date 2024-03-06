import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useSeller from "../Hooks/useSeller";

const SecureSeller = ({ children }) => {
  const { user } = useAuth();
  const { data } = useSeller();
  const location = useLocation();

  const checkPending = data?.filter((seller) => seller?.email === user.email);
  console.log(checkPending);

  if (!checkPending?.status === "pending") {
    return children;
  }

  return (
    <Navigate
      state={location.pathname}
      to="/dashboard/seller-dashboard"
    ></Navigate>
  );
};

export default SecureSeller;
