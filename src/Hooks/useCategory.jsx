import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
  const axiosPublic = useAxiosPublic();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosPublic.get("/categories");
      return res.data;
    },
  });
  return { data, refetch, isLoading };
};

export default useCategory;
