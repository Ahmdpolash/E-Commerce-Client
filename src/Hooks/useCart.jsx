import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCart = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/carts/items?email=${user?.email}`);
      return res.data;
    },
  });
  return { data, refetch,isLoading };
};

export default useCart;
