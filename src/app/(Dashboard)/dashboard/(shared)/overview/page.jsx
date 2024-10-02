"use client";
import { Icon } from "@iconify/react";
import { data } from "autoprefixer";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
    labels: ["Pizaa", "Butter Chicken", "Biriyani", "Friend Chicken", "Burger"],
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
    <div className="space-y-5 ">
      {/* stats icons with data  */}
      <div className=" flex flex-col lg:flex-row items-center lg:justify-between gap-6  ">
        {/* card 1 stats */}
        <div className="flex flex-col  gap-9 p-6 rounded-xl w-fit bg-white shadow-md">
          <div className="flex items-center justify-between gap-6">
            <span className="p-3 rounded-full bg-blue-400  text-white text-4xl">
              <Icon icon="mdi:chart-line" />
            </span>
            <h1 className="text-4xl flex items-center gap-2">
              $<span className="font-semibold">85426</span>
            </h1>
          </div>

          <div className="flex items-center justify-between gap-10">
            <div>
              <h1 className="font-extrabold">Total Sales</h1>
              <span className="flex items-center gap-1  font-semibold">
                <Icon className="text-green-500" icon="ph:arrow-up" />
                <span className="text-green-500">2.1%</span>
                <span className="text-text">vs last week</span>
              </span>
            </div>
            <Icon className="text-4xl text-green-500 " icon="ph:trend-up" />
          </div>
        </div>

        {/* card 2 menu */}
        <div className="flex flex-col  gap-9 p-6 rounded-xl w-fit bg-white shadow-md">
          <div className="flex items-center justify-between gap-10">
            <span className="p-3 rounded-full bg-orange-400  text-white text-4xl">
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
            <Icon className="text-4xl text-green-500 " icon="ph:trend-up" />
          </div>
        </div>
        {/* card 3 user */}
        <div className="flex flex-col  gap-9 p-6 rounded-xl w-fit bg-white shadow-md">
          <div className="flex items-center justify-between gap-10">
            <span className="p-3 rounded-full bg-blue-700  text-white text-4xl">
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
            <Icon className="text-4xl text-green-500 " icon="ph:trend-up" />
          </div>
        </div>
        {/* card 4  orders*/}
        <div className="flex flex-col   px-6 py-4 gap-3 rounded-xl w-fit bg-white shadow-md">
          <div className="flex items-center justify-between gap-10">
            <span className="p-3 rounded-full bg-green-500  text-white text-4xl">
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
            <Icon className="text-4xl text-green-500 " icon="ph:trend-up" />
          </div>
          <button className="bg-slate-100 text-green-500 px-2 py-1 rounded-lg font-extrabold cursor-pointer text-sm flex items-center justify-center gap-6 w-fit  ">
            Manage orders{" "}
            <Icon className="text-xl" icon="weui:arrow-outlined" />
          </button>
        </div>
        {/* card 5 reviews */}
        <div className="flex flex-col  px-6 py-4 gap-3  rounded-xl w-fit bg-white shadow-md">
          <div className="flex items-center justify-between gap-10">
            <span className="p-3 rounded-full bg-amber-400  text-white text-4xl">
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
            <Icon className="text-4xl text-green-500 " icon="ph:trend-up" />
          </div>
          <button className="bg-slate-100 text-amber-500  px-2 py-1  rounded-lg font-extrabold cursor-pointer text-sm flex items-center justify-center gap-6 w-fit">
            view reviews <Icon className="text-xl" icon="weui:arrow-outlined" />
          </button>
        </div>
      </div>

      {/* chart area  */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:h-full gap-6   ">
        <div className="p-5 shadow-md  bg-white rounded-xl  w-full ">
          <div className="space-y-3">
            <h1 className="text-2xl font-extrabold">Revenue</h1>
            <DatePicker
              showYearPicker
              dateFormat="yyyy"
              selected={startDate}
              className="p-2 outline-none rounded-md bg-slate-100 w-fit"
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div>
            <Chart
              options={options}
              series={options.series}
              type="bar"
              width="100%"
            />
          </div>
        </div>

        <div className="p-5  bg-white full  rounded-xl  shadow-md  w-full">
          <div className="space-y-3">
            <h1 className="text-2xl font-extrabold">Top Selling</h1>
          </div>
          <Chart
            options={donutOption}
            series={donutOption.series}
            type="donut"
            height="500"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
