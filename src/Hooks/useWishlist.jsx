import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useWishlist = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data, refetch } = useQuery({
    queryKey: ["wishlists", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/wishlists/items?email=${user?.email}`
      );
      return res.data;
    },
  });
  return { data, refetch };
};

export default useWishlist;
