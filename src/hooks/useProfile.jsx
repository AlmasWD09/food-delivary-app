import { useSession } from "next-auth/react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useProfile = () => {
    const session = useSession();
    const axiosPublic = useAxiosPublic();
    const { data: userAllInfo = {}, refetch } = useQuery({
        queryKey: ['user-address', session?.data?.user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user-profile/get-address/${session?.data?.user?.email}`)
            return res?.data
        }
    })
    return { userAllInfo, refetch }
};

export default useProfile;