import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useSellerProduct = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data, refetch } = useQuery({
    queryKey: ["seller_product"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/seller/${user?.email}`);
      return res.data;
    },
  });
  return { data, refetch };
};

export default useSellerProduct;
