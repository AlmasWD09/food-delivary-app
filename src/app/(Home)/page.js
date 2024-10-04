import Banner from "@/components/Banner";
import CustomerReviews from "@/components/CustomerReviews";
import Discount from "@/components/Discount";
import Parallex from "@/components/Parallex";
import Partner from "@/components/Partner";

import TopSell from "@/components/TopSell";

import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <div className="py-10 space-y-28">
        <Discount></Discount>
        <Partner/>
        <CustomerReviews />
        <TopSell></TopSell>
        <Parallex />
      </div>
    </div>
  );
};

export default page;
