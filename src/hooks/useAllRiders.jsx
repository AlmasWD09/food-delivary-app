import { useQuery } from "@tanstack/react-query"; 
import useAxiosPublic from "./useAxiosPublic";


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
  
    return [riders, refetch, isLoading, isError];
};

export default useAllRiders;