"use client"
import React, { useState } from 'react';

const page = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");

    const pricingPlans = [
      {
        title: "Intro",
        price: 19,
        features: [
          "All limited links",
          "Own analytics platform",
          "Chat support",
          "Optimize hashtags",
          "Unlimited users",
        ],
      },
      {
        title: "Base",
        price: 39,
        features: [
          "All limited links",
          "Own analytics platform",
          "Chat support",
          "Optimize hashtags",
          "Unlimited users",
        ],
      },
      {
        title: "Popular",
        price: 99,
        features: [
          "All limited links",
          "Own analytics platform",
          "Chat support",
          "Optimize hashtags",
          "Unlimited users",
        ],
        highlighted: true,
      },
      {
        title: "Enterprise",
        price: 199,
        features: [
          "All limited links",
          "Own analytics platform",
          "Chat support",
          "Optimize hashtags",
          "Unlimited users",
        ],
      },
    ];
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-gray-500 mb-8">No contracts. No surprise fees.</p>

        <div className="flex items-center mb-14">
          <button
            className={`px-4 py-2 rounded-l-md ${
              billingCycle === "monthly"
                ? "bg-orange-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-r-md ${
              billingCycle === "yearly"
                ? "bg-orange-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 bg-white rounded-lg shadow-md ${
                plan.highlighted ? "border-2 border-orange-600" : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {plan.title}
              </h3>
              <p className="mt-4 text-3xl font-bold text-gray-800">
                ${billingCycle === "monthly" ? plan.price : plan.price * 12}
              </p>
              <p className="text-gray-500 mt-1">/ {billingCycle}</p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-orange-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.707-9.293a1 1 0 00-1.414-1.414L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full py-2 rounded-md font-semibold ${
                  plan.highlighted
                    ? "bg-orange-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default page;