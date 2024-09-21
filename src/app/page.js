
import Discount from "@/Component/Discount";
import Restaurants from "@/Component/restaurants";




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
