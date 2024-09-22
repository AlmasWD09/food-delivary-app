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
        <CustomerReviews/>
        <TopSell></TopSell>
        {/* <div className="bg-primary ">
          <Restaurants />
        </div> */}
      </div>
    </>
  );
}
