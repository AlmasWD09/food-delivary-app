import { useQuery } from "@tanstack/react-query"; // Change here
import useAxiosPublic from "./useAxiosPublic";

const useAllUser = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: user = [],
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  return [user, refetch, isLoading, isError];
};

export default useAllUser;
