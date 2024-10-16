import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allUsersData = [], refetch } = useQuery({
    queryKey: ["people"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  return [allUsersData, refetch];
};

export default useAllUsers;
