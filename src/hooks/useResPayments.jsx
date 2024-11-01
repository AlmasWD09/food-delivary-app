import { useQuery } from "@tanstack/react-query"; // Change here
import useAxiosPublic from "./useAxiosPublic";

const useResPayments = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: respayments = [],
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["ResPayment"],
    queryFn: async () => {
      const res = await axiosPublic.get("/payment/respayment");
      return res.data;
    },
  });

  return [respayments, refetch, isLoading, isError];
};

export default useResPayments;
