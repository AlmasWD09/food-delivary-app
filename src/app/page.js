import Discount from "@/components/Discount";
import Restaurants from "@/components/restaurants";

export default function Home() {
  return (
    <>
      <div>
        <Discount />
        {/* <Restaurants></Restaurants> */}
        {/* <TopSell></TopSell> */}

        <div className="bg-primary ">
          <Restaurants />
        </div>
      </div>
    </>
  );
}
