import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import axios from "axios";

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
  return { data, refetch, isLoading };
};

export default useCart;

export const useDeleteAllCart = () => {
  const axiosPublic = useAxiosPublic();

  const { user } = useAuth();
  const deleteAllCart = async () => {
    try {
      const res = await axiosPublic.delete(`/carts/delete?email=${user?.email}`);
      return res.data;
    } catch (error) {
      console.error("Error deleting all cart items:", error);
      throw error;
    }
  };

  return { deleteAllCart };
};
