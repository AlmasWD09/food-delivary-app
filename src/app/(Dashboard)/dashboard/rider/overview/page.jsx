"use client";
import React from "react";
import raw from "./example.json";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Overview = () => {
  const orderDeliver = raw.map((item) => item.deliveredOrders || 0);
  const orderDate = raw.map((item) => item.date || "N/A");
  // const orderCancel = raw.map((item) => item.cancelledOrders || 0);
  const earnings = raw.map((item) => item.totalEarnings || 0);
  const radialBarDeliver = raw.reduce((acc, rr) => acc + rr.deliveredOrders, 0);

  const orderCompleted = raw.filter(
    (item) => item.orderStatus == "Pending"
  ).length;
  console.log(orderCompleted);

  console.log(radialBarDeliver, orderCompleted);
  const graphColors = ["#33d400"];

  const ChartData = {
    series: [
      {
        name: "Earnings",
        data: earnings,
      },
    ],
    options: {
      xaxis: {
        categories: orderDate,
        type: "datetime",
      },
      colors: ["#33d300"],
      title: {
        text: "Earnings ",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#263238",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          gradientToColors: ["#00a20a"],
          stops: [50, 100],
        },
      },
      stroke: {
        curve: "smooth",
      },

      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return "$" + val;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#000000"],
          padding: 2,
        },
      },

      tooltip: {
        enabled: true,
        style: {
          fontSize: "16px",
        },
        y: {
          formatter: function (val) {
            return "$" + val;
          },
        },
      },
    },
  };

  const radialBar = {
    series: [(radialBarDeliver / (orderCompleted + radialBarDeliver)) * 100],
    chart: {
      type: "radialBar",
    },
    colors: ["#33d300"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
          color: "#33d400",
        },
        dataLabels: {
          show: true,
          name: {
            fontSize: "20px",
          },
          value: {
            offsetY: 16,
            fontSize: "30px",
            offsetY: 30,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "diagonal1",
        gradientToColors: ["#d8ff00"],
        stops: [0, 100],
      },
    },
    labels: ["Orders Completed"],
  };

  return (
    <div className="min-h-screen ">
      <div className=" flex flex-col lg:flex-row gap-16">
        {/* left side  */}
        <div className="lg:w-2/3 h-full space-y-10">
          <div className="flex  flex-col lg:flex-row items-center justify-evenly divide-y-2 lg:divide-y-0 lg:divide-x-2 bg-white py-10 rounded-2xl">
            {/* Card Total Revenue */}
            <div className="flex flex-col items-center gap-2 pb-6 lg:pb-0">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-full bg-green-100">
                  <Icon
                    className="text-4xl text-green-600"
                    icon="hugeicons:money-04"
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-semibold">
                    ${raw.reduce((acc, rr) => acc + rr.totalEarnings, 0)}
                  </h1>
                  <h1>Total Revenue</h1>
                </div>
              </div>
            </div>

            {/* Card Total Delivered */}
            <div className="flex flex-col items-center gap-2 py-6 lg:py-0 lg:pl-6">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-full bg-blue-100">
                  <Icon
                    className="text-4xl text-blue-600"
                    icon="hugeicons:package-delivered"
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-semibold">
                    {raw.reduce((acc, rr) => acc + rr.deliveredOrders, 0)}
                  </h1>
                  <h1>Delivered Orders</h1>
                </div>
              </div>
            </div>

            {/* Active Orders */}
            <div className="flex flex-col items-center gap-2  pt-6 lg:pt-0 lg:pl-6">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-full bg-red-100">
                  <Icon
                    className="text-4xl text-red-600"
                    icon="ic:outline-pending-actions"
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-semibold">{orderCompleted}</h1>
                  <h1>Active Orders</h1>
                </div>
              </div>
            </div>
          </div>

          {/* * chat area  */}
          <div className="w-full h-full flex-1 bg-white p-10 rounded-2xl">
            <Chart
              options={ChartData.options}
              series={ChartData.series}
              height={500}
              type="area"
            />
          </div>
        </div>
        {/* right side  */}
        <div className="space-y-4">
          <div className="p-10 bg-white h-fit overflow-hidden relative rounded-2xl">
            <h1 className="pb-4 border-b-2 text-2xl font-semibold">
              Available Balance
            </h1>
            <div className="flex items-center py-4 justify-between gap-10 lg:gap-20 ">
              <div className="space-y-6">
                <div className="p-2 rounded-full w-fit bg-green-100">
                  <Icon
                    className="text-green-600 text-3xl "
                    icon="f7:money-dollar"
                  />
                </div>
                <h1 className="text-6xl">$456</h1>
                <p className="text-nowrap">your current balance</p>
                <button className="px-4 py-2 bg-green-700 rounded-2xl w-fit   text-white  border-green-700 capitalize">
                  withdraw
                </button>
              </div>
              <div className="w-full h-full  z-10  pl-0  pt-20  ">
                <Icon
                  className="text-9xl text-green-700"
                  icon="fluent:wallet-credit-card-20-filled"
                />
              </div>
            </div>
            <div className="w-full h-full  bg-green-100  left-56 top-28  absolute   rounded-full"></div>
          </div>
          <div className="bg-white rounded-2xl">
            <Chart
              options={radialBar}
              series={radialBar.series}
              height={350}
              type="radialBar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
