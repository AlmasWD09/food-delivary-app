import { useSession } from "next-auth/react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
    const { data: session } = useSession();
    const axiosPublic = useAxiosPublic();
    const { data, refetch } = useQuery({
        queryKey: ['single-user-role', session?.user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user-role/${session?.user?.email}`);
            return res?.data?.role;
        },
        enabled: !!session?.user?.email, // Enables query only if email is available
    });

    return { role: data, refetch }; 
};

export default useRole;
