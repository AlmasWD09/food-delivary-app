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
      <div className="py-10 space-y-28">
        <Discount></Discount>
        <CustomerReviews />
        <TopSell></TopSell>
        <Parallex />
      </div>
    </div>
  );
};

export default page;
