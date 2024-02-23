import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const axiosPublic = useAxiosPublic();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${"user"}`);
      return res.data;
    },
  });
  return { data, refetch, isLoading };
};

export default useUsers;
