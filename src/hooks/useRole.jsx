import { useSession } from "next-auth/react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useRole = () => {
    const session = useSession();
    const axiosPublic = useAxiosPublic();
    const { data, refetch } = useQuery({
        queryKey: ['single-user-role', session?.data?.user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user-role/${session?.data?.user?.email}`)
            return res?.data?.role
        }
    })
    return { role: data }; 
};

export default useRole;