import Banner from "@/components/Banner";
import CustomerReviews from "@/components/CustomerReviews";
import Discount from "@/components/Discount";
import Restaurants from "@/components/restaurants";
import TopSell from "@/components/TopSell";

export default function Home() {
  return (
    <>
      <div>
        <Banner/>
        <TopSell></TopSell>
        <CustomerReviews/>
        {/* <div className="bg-primary ">
          <Restaurants />
        </div> */}
      </div>
    </>
  );
}
