import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMenus = () => {
  
    const axiosPublic = useAxiosPublic();
    const {data: menuData = [],refetch} = useQuery({
        queryKey: ['menu',], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/menus');
            return res.data;
        }
    })


    return [menuData,refetch]
};


export default useMenus;