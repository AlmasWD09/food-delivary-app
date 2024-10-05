"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering
import "react-datepicker/dist/react-datepicker.css";

// Dynamically import Chart and DatePicker to ensure they only render on the client-side
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });

const OverviewPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  const colors = [
    "#FF4560",
    "#008FFB",
    "#00E396",
    "#775DD0",
    "#FEB019",
    "#FF7F50",
    "#7A1E7D",
    "#FFB6C1",
  ];

  //   revenue chart data
  let options = {
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 13, 30, 45, 45, 75, 42],
      },
    ],
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "70%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  //   top selling chart data
  let donutOption = {
    series: [44, 55, 41, 17, 15],
    labels: ["Pizza", "Butter Chicken", "Biriyani", "Fried Chicken", "Burger"],
    legend: {
      show: true,
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "20px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold",
      },
      dropShadow: {
        enabled: false,
      },
    },
    chartOptions: {
      labels: ["Apple", "Mango", "Orange", "Watermelon"],
    },
  };

  return (
    <div className="space-y-5">
      {/* stats icons with data  */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6">
        {/* card 1 stats */}
        <div className="flex flex-col gap-9 p-6 rounded-xl w-fit bg-white shadow-md">
          <div className="flex items-center justify-between gap-6">
            <span className="p-3 rounded-full bg-blue-400 text-white text-4xl">
              <Icon icon="mdi:chart-line" />
            </span>
            <h1 className="text-4xl flex items-center gap-2">
              $<span className="font-semibold">85426</span>
            </h1>
          </div>

          <div className="flex items-center justify-between gap-10">
            <div>
              <h1 className="font-extrabold">Total Sales</h1>
              <span className="flex items-center gap-1 font-semibold">
                <Icon className="text-green-500" icon="ph:arrow-up" />
                <span className="text-green-500">2.1%</span>
                <span className="text-text">vs last week</span>
              </span>
            </div>
            <Icon className="text-4xl text-green-500" icon="ph:trend-up" />
          </div>
        </div>

        {/* card 2 menu */}
        <div className="flex flex-col gap-9 p-6 rounded-xl w-fit bg-white shadow-md">
          <div className="flex items-center justify-between gap-10">
            <span className="p-3 rounded-full bg-orange-400 text-white text-4xl">
              <Icon icon="ic:baseline-restaurant-menu" />
            </span>
            <h1 className="text-4xl font-semibold">85426</h1>
          </div>

          <div className="flex items-center justify-between gap-10">
            <div>
              <h1 className="font-extrabold">Total Orders</h1>
              <span className="flex items-center gap-1 font-semibold">
                <Icon className="text-green-500" icon="ph:arrow-up" />
                <span className="text-green-500">5.2%</span>
                <span className="text-text">vs last week</span>
              </span>
            </div>
            <Icon className="text-4xl text-green-500" icon="ph:trend-up" />
          </div>
        </div>

        {/* card 3 user */}
        <div className="flex flex-col gap-9 p-6 rounded-xl w-fit bg-white shadow-md">
          <div className="flex items-center justify-between gap-10">
            <span className="p-3 rounded-full bg-blue-700 text-white text-4xl">
              <Icon icon="ph:user" />
            </span>
            <h1 className="text-4xl font-semibold">980</h1>
          </div>

          <div className="flex items-center justify-between gap-10">
            <div>
              <h1 className="font-extrabold">Customer visit</h1>
              <span className="flex items-center gap-1 font-semibold">
                <Icon className="text-green-500" icon="ph:arrow-up" />
                <span className="text-green-500">7.9%</span>
                <span className="text-text">vs last week</span>
              </span>
            </div>
            <Icon className="text-4xl text-green-500" icon="ph:trend-up" />
          </div>
        </div>

        {/* card 4 orders */}
        <div className="flex flex-col px-6 py-4 gap-3 rounded-xl w-fit bg-white shadow-md">
          <div className="flex items-center justify-between gap-10">
            <span className="p-3 rounded-full bg-green-500 text-white text-4xl">
              <Icon icon="material-symbols:order-approve-outline-sharp" />
            </span>
            <h1 className="text-4xl font-semibold p-2 bg-slate-100 rounded-xl text-green-600">
              15
            </h1>
          </div>

          <div className="flex items-center justify-between gap-10">
            <div>
              <h1 className="font-extrabold">New Orders</h1>
              <span className="flex items-center gap-1 font-semibold">
                <Icon className="text-green-500" icon="ph:arrow-up" />
                <span className="text-green-500">5.2%</span>
                <span className="text-text">vs last week</span>
              </span>
            </div>
            <Icon className="text-4xl text-green-500" icon="ph:trend-up" />
          </div>
          <button className="bg-slate-100 text-green-500 px-2 py-1 rounded-lg font-extrabold cursor-pointer text-sm flex items-center justify-center gap-6 w-fit">
            Manage orders{" "}
            <Icon className="text-xl" icon="weui:arrow-outlined" />
          </button>
        </div>

        {/* card 5 reviews */}
        <div className="flex flex-col px-6 py-4 gap-3 rounded-xl w-fit bg-white shadow-md">
          <div className="flex items-center justify-between gap-10">
            <span className="p-3 rounded-full bg-amber-400 text-white text-4xl">
              <Icon icon="material-symbols:reviews-outline" />
            </span>
            <h1 className="text-4xl font-semibold p-2 bg-slate-100 rounded-xl text-amber-500">
              15
            </h1>
          </div>

          <div className="flex items-center justify-between gap-10">
            <div>
              <h1 className="font-extrabold">Total Review</h1>
              <span className="flex items-center gap-1 font-semibold">
                <Icon className="text-green-500" icon="ph:arrow-up" />
                <span className="text-green-500">5.2%</span>
                <span className="text-text">vs last week</span>
              </span>
            </div>
            <Icon className="text-4xl text-green-500" icon="ph:trend-up" />
          </div>
          <button className="bg-slate-100 text-amber-500 px-2 py-1 rounded-lg font-extrabold cursor-pointer text-sm flex items-center justify-center gap-6 w-fit">
            View reviews <Icon className="text-xl" icon="weui:arrow-outlined" />
          </button>
        </div>
      </div>

      {/* charts  */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-5">
        {/* revenue chart */}
        <div className="flex flex-col p-6 gap-3 rounded-xl w-full bg-white shadow-md">
          <h1 className="font-extrabold">Revenue Report</h1>
          <Chart
            options={options}
            series={options.series}
            type="bar"
            height={400}
            className="overflow-x-auto"
          />
        </div>

        {/* top selling chart */}
        <div className="flex flex-col p-6 gap-3 rounded-xl w-full bg-white shadow-md">
          <h1 className="font-extrabold">Top Selling Menu</h1>
          <Chart
            options={donutOption}
            series={donutOption.series}
            type="donut"
            height={400}
          />
        </div>
      </div>

      {/* date filter */}
      <div className="flex flex-col gap-2">
        <h1 className="font-extrabold">Filter By Date</h1>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="p-3 rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

export default RestaurantOverview;
