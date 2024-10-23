import React from "react";
import Banner from "../../../components/Banner";
import TopRestaurants from "../../../components/TopRestaurants";
import Discount from "../../../components/Discount";
import Partner from "../../../components/Partner";
import ChooseUs from "../../../components/ChooseUs";

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
