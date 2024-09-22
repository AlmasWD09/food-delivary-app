import Banner from "@/components/Banner";
import CustomerReviews from "@/components/CustomerReviews";
import Discount from "@/components/Discount";
import Restaurants from "@/components/restaurants";

export default function Home() {
  return (
    <>
      <div>
        {/* <Restaurants></Restaurants> */}
        {/* <TopSell></TopSell> */}
        <Banner />
        <Discount></Discount>
        <CustomerReviews />
        <div className="bg-primary ">
          <Restaurants />
        </div>
      </div>
    </>
  );
}
