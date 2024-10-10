import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useSession } from "next-auth/react";


const useCartItems = () => {
    const axiosPublic = useAxiosPublic();
    const session = useSession()
    const {data = [],refetch,isLoading} = useQuery({
        queryKey: ['foods',], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/cart-menu/${session?.data?.user?.email}`);
            return res.data;
        }
    })


    return [data,refetch,isLoading]
};

export default useCartItems;