import Discount from "@/components/Discount";
import Restaurants from "@/components/restaurants";

export default function Home() {
  return (
    <>
      <div>
        {/* <Restaurants></Restaurants> */}
        {/* <TopSell></TopSell> */}
        <Discount></Discount>
        <div className="bg-primary ">
          <Restaurants />
        </div>
      </div>
    </>
  );
}
