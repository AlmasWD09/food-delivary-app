"use client";
import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";
import React from "react";
import raw from "./growth.json";

import salesData from "./sales.json";
import Image from "next/image";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import TimeAgo from "react-timeago";

const Overview = () => {
  // Create an array of registration counts
  const userJoined = raw.map((item) => item.joined);
  const userDate = raw.map((item) => item.date);
  const userLeft = raw.map((item) => item.left);

  // Create an array of dates
  const registrationDates = raw.map((item) => item.date);

  const graphColors = ["#33d400"];

  const ChartData = {
    series: [
      {
        name: "Joined",
        data: userJoined,
      },
      {
        name: "Left",
        data: userLeft,
      },
    ],
    options: {
      xaxis: {
        categories: userDate,
        type: "datetime",
      },
      colors: ["#33d300", "#ff0000"],
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
    <div className="space-y-10">
      {/* card section  */}
      <div className="flex flex-col lg:flex-row items-center justify-between text-white gap-10 lg:gap-0">
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

      <div className="w-full  flex flex-col lg:flex-row items-center justify-between gap-10 ">
        {/* charts  */}
        <div className="p-8 lg:p-10 bg-white rounded-xl  w-full ">
          <h1 className="text-2xl font-bold capitalize pb-2">
            registration trends
          </h1>

          <div className="w-full ">
            <Chart
              options={ChartData.options}
              series={ChartData.series}
              height={500}
              type="area"
            />
          </div>
        </div>

        {/* recent sales */}
        <div className="p-10 bg-white rounded-xl w-full  lg:w-1/3">
          <div className="capitalize flex items-center justify-between pb-4">
            <h2 className="text-2xl font-bold">Recent Sales</h2>
            <button className="px-2 py-1 font-semibold rounded-xl border-2  capitalize">
              see all
            </button>
          </div>
          <div className="">
            {salesData.map((item, idx) => (
              <div
                key="idx"
                className="flex items-center justify-between py-4 border-t-2 "
              >
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden object-cover">
                    <Image
                      className="w-full h-full object-cover"
                      src={item.profile_photo}
                      width={1000}
                      height={1000}
                      alt={item.user_name}
                    />
                  </div>
                  <span>
                    <h2 className="font-semibold text-base">
                      {item.user_name}
                    </h2>
                    <TimeAgo date={item.date_time} />
                  </span>
                </div>

                <h1 className="text-xl font-bold">${item.amount}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
