"use client"
import { useQuery } from "@tanstack/react-query"; 
import useAxiosPublic from "./useAxiosPublic";
import { useState } from "react";


const useAllRiders = () => {
    const axiosPublic = useAxiosPublic();
   

    const {
      data: riders = [],
      refetch,
      isLoading,
      isError,
    } = useQuery({
      queryKey: ["allRiders"],
      queryFn: async () => {
        const res = await axiosPublic.get("/delivery-man");
        return res.data;
      },
    });

  
    return [riders,refetch,isLoading];
};

export default useAllRiders;