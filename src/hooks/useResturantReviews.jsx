import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useResturantReviews = ({name}) => {
    const axiosPub = useAxiosPublic()
   
    const title = name
  
    const {data,isLoading,refetch} = useQuery({
        queryKey: ["reviews"],
        queryFn: async()=>{
            const {data} = await axiosPub.get(`/restaurents/restReviews/${title}`)
            return data
        }
    })
   return [data,isLoading,refetch]
};

export default useResturantReviews;