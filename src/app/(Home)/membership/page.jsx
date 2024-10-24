import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-black text-white p-10 px-6 lg:px-0">
      <h2 className="text-center text-lg font-bold mb-4">
        ⭐ GOLD BENEFITS ⭐
      </h2>
      <div className="bg-[#332f2f] max-w-[950px] mx-auto p-8 rounded-xl">
        <Image
          className="mx-auto mb-5"
          src="/assets/3.webp"
          alt=""
          width={300}
          height={300}
        />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="flex items-center gap-4">
            <div>
              <Image src="/assets/1.webp" alt="" width={70} height={70} />
            </div>
            <div>
              <h1 className="text-lg font-bold">Free delivery</h1>
              <p>At all restaurants under 7 km, on orders above ₹199</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <Image src="/assets/2.webp" alt="" width={70} height={70} />
            </div>
            <div>
              <h1 className="text-lg font-bold">Up to 30% extra off</h1>
              <p>
                Above all existing offers at 20,000+ partner restaurants across
                India
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 mt-16">
        <h2 className="text-center text-lg font-bold mb-4">⭐ FAQs ⭐</h2>
        <details
          className="max-w-[950px] mx-auto border rounded-lg bg-black"
          open=""
        >
          <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
            Which restaurants do I get free delivery on?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            With Zomato Gold, you get unlimited free deliveries at all
            restaurants under 7 km distance from the restaurant to your ordering
            location, except (for new purchases & renewals starting Aug 1st,
            2023) and few other restaurants that manage their own delivery (for
            new purchases & renewals starting Oct 26th,2023). You can identify
            these restaurants by the ‘Free Delivery’ label on the restaurant
            cards.{" "}
          </p>
        </details>
        <details className="max-w-[950px] mx-auto border rounded-lg bg-black">
          <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
            Which restaurants do I get an additional offer on?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            Additional offers of up to 30% on delivery are available on 25,000+
            restaurants. You can identify these restaurants with the Gold label
            on the restaurant cards.
          </p>
        </details>
        <details className="max-w-[950px] mx-auto border rounded-lg bg-black">
          <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
            Do Gold additional offers work on top of coupons (if any)?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            Yes, on delivery orders.
          </p>
        </details>
        <details className="max-w-[950px] mx-auto border rounded-lg bg-black">
          <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
            Do Gold additional offers work on top of coupons (if any)?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            Yes, on delivery orders.
          </p>
        </details>
      </div>
      <div>
        <button className="bg-gradient-to-r from-orange-200 to-orange-500 text-xl rounded-xl font-semibold text-white px-20 lg:px-40 py-2 flex mx-auto mt-10">
          Join now
        </button>
      </div>
    </div>
  );
};

export default page;
