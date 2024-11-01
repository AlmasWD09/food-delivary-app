import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useFavourite = (favo) => {
    console.log(favo,"from use favorite hook")
    const axiosPub = useAxiosPublic()
    const { data=[], isLoading, refetch } = useQuery({
        queryKey: ["fav"],
        queryFn: async () => {
       
          const queryString = new URLSearchParams(favo).toString();
      
          const { data } = await axiosPub.get(`/favorite?${queryString}`);
          return data;
        },
      });
      return [data,isLoading,refetch]
};

export default useFavourite;