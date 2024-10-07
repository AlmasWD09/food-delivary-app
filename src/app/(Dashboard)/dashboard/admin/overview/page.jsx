"use client";
import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";
import React from "react";
import raw from "./growth.json";
import { useState } from "react";
import salesData from "./sales.json";
import Image from "next/image";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
const Overview = () => {
  // Create an array of registration counts
  const registrationCounts = raw.map((item) => item.registrations);

  // Create an array of dates
  const registrationDates = raw.map((item) => item.date);

  const graphColors = ["#33d400"];

  const ChartData = {
    series: [
      {
        name: "Growth",
        data: registrationCounts,
      },
    ],
    options: {
      xaxis: {
        categories: registrationDates,
        type: "datetime",
      },
      stroke: {
        curve: "smooth",
      },

      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      {/* card section  */}
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center justify-between gap-16 px-8 py-8 shadow-md bg-gradient-to-r from-lime-400 to-lime-500 rounded-lg w-fit">
          <div className="flex flex-col  items-center gap-2 ">
            <h2 className="text-4xl font-semibold ">435</h2>
            <p className="">Total Users</p>
          </div>
          <Icon className="text-6xl " icon="mdi:user" />
        </div>
        <div className="flex items-center justify-between gap-16 shadow-md px-8 py-8 bg-gradient-to-r from-red-500 to-orange-500  rounded-lg w-fit">
          <div className="flex flex-col  items-center gap-2 ">
            <h2 className="text-4xl font-semibold ">$ 7135</h2>
            <p className="">Total Earnings</p>
          </div>
          <Icon className="text-6xl " icon="solar:wallet-money-outline" />
        </div>
        <div className="flex items-center justify-between gap-16 shadow-md px-8 py-8 bg-gradient-to-r from-fuchsia-600 to-pink-600  rounded-lg w-fit">
          <div className="flex flex-col  items-center gap-2 ">
            <h2 className="text-4xl font-semibold ">78</h2>
            <p className="">Pending Orders</p>
          </div>

          <Icon className="text-6xl " icon="heroicons:shopping-bag-20-solid" />
        </div>
        <div className="flex items-center justify-between gap-16 px-8 py-8 shadow-md bg-gradient-to-r from-blue-600 to-violet-600  rounded-lg w-fit">
          <div className="flex flex-col  items-center gap-2">
            <h2 className="text-4xl font-semibold ">535</h2>
            <p className="">Total Restaurants</p>
          </div>
          <Icon className="text-6xl " icon="entypo:shop" />
        </div>
        <div className="flex items-center justify-between gap-16 px-8 py-8 shadow-md bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg w-fit">
          <div className="flex flex-col  items-center gap-2 ">
            <h2 className="text-4xl font-semibold ">435</h2>
            <p className="">Total Riders</p>
          </div>
          <Icon className="text-6xl " icon="mdi:bike" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="p-10 bg-white rounded-xl w-fit flex-1">
          <h1 className="text-2xl font-semibold capitalize">
            new users registration trends
          </h1>

          <Chart
            options={ChartData.options}
            series={ChartData.series}
            width={800}
            type="area"
          />
        </div>
        <div className="p-10 bg-white rounded-xl w-fit flex-1">
          <div className="capitalize flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Recent Sales</h2>
            <h2 className="p-2 border-2 ">Sell all</h2>
          </div>

          {salesData.map((item, idx) => (
            <div key="idx">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full overflow-hidden object-cover">
                  <Image
                    className="w-full h-full object-cover"
                    src={item.profile_photo}
                    width={1000}
                    height={1000}
                    alt={item.user_name}
                  />
                </div>
                <h2>{item.user_name}</h2>

                <h2>${item.amount}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
