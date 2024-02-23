import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useSeller = () => {
  const axiosPublic = useAxiosPublic();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${"seller"}`);
      return res.data;
    },
  });

  return { data, refetch, isLoading };
};

export default useSeller;
