import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const authData = useContext(authContext);
  return authData;
};

export default useAuth;
