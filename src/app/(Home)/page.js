import Banner from "@/components/Banner";
import CustomerReviews from "@/components/CustomerReviews";
import Discount from "@/components/Discount";
import Parallex from "@/components/Parallex";

import TopSell from "@/components/TopSell";

import React from "react";

const page = () => {
  return (

    <div>
      <Banner />

      <Discount></Discount>
      <CustomerReviews />
      <Parallex />
      <TopSell></TopSell>
    </div>

  );
};

export default page;
