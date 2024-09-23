import Banner from "@/components/Banner";
import CustomerReviews from "@/components/CustomerReviews";
import Discount from "@/components/Discount";

export default function Home() {
  return (
    <>
      <div>
        {/* <Restaurants></Restaurants> */}
        {/* <TopSell></TopSell> */}
        <Banner />
        <Discount></Discount>
        <CustomerReviews />
      </div>
    </>
  );
}
