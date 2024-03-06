import React, { useState } from "react";
import useAuth from "./useAuth";
import useUsers from "./useUsers";

const useCheckStatus = () => {
  const { user } = useAuth();
  const { data } = useUsers();
  const [activity, setActivity] = useState();
  const checkPending = data?.filter((seller) => seller?.email === user?.email);
  if (checkPending?.status === "Pending") {
    setActivity(checkPending);
  }
  return [activity];
};

export default useCheckStatus;
