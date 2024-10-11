import Banner from "@/components/Banner";
import CustomerReviews from "@/components/CustomerReviews";
import Discount from "@/components/Discount";
import Parallex from "@/components/Parallex";
import Partner from "@/components/Partner";

import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <div className="py-40 space-y-40">
        <Discount></Discount>
        <Partner />
        <CustomerReviews />

        <Parallex />
      </div>
    </div>
  );
};

export default page;
