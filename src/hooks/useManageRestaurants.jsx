import { useQuery } from "@tanstack/react-query"; // Change here
import useAxiosPublic from "./useAxiosPublic";

const useManageRestaurants = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: restaurants = [],
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allrestaurantusers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users/restaurant-owner");
      return res.data;
    },
  });

  return [restaurants, refetch, isLoading, isError];
};

export default useManageRestaurants;