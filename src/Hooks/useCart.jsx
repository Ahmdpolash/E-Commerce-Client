import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCart = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data, refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/carts/items?email=${user?.email}`);
      return res.data;
    },
  });
  return { data, refetch };
};

export default useCart;
