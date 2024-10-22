import Banner from "@/components/Banner";
import ChooseUs from "@/components/ChooseUs";
import CustomerReviews from "@/components/CustomerReviews";
import Discount from "@/components/Discount";
import Partner from "@/components/Partner";
import TopRestaurants from "@/components/TopRestaurants";

import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <div className="py-40 space-y-40">
        <TopRestaurants />
        <Discount></Discount>
        <Partner />
        {/* <CustomerReviews /> */}
        <ChooseUs />
      </div>
    </div>
  );
};

export default page;
