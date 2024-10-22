import { useQuery } from "@tanstack/react-query"; // Change here
import useAxiosPublic from "./useAxiosPublic";

const useAllUser = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allUserData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["all"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  return [allUserData, refetch];
};

export default useAllUser;
