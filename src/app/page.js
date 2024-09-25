import Banner from "@/components/Banner";
import CustomerReviews from "@/components/CustomerReviews";
import Discount from "@/components/Discount";
import Parallex from "@/components/Parallex";
import Restaurants from "@/components/restaurants";
import TopSell from "@/components/TopSell";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        {/* <Discount></Discount> */}
        <CustomerReviews />
        <TopSell></TopSell>
        <Parallex />
      </div>
    </>
  );
}
