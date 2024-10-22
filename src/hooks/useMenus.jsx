import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenus = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: menuData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menus");
      return res.data;
    },
  });

  return [menuData, refetch, loading];
};

export default useMenus;
