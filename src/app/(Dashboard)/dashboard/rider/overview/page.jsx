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
  const orderDeliver = raw.map((item) => item.completedOrders || 0);
  const orderDate = raw.map((item) => item.date || "N/A");
  const orderCancel = raw.map((item) => item.cancelledOrders || 0);
  const earnings = raw.map((item) => item.earnings || 0);

  // console.log(first);
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
      colors: ["#33d300", "#ff0000", "#01e39e"],
      stroke: {
        curve: "smooth",
      },

      dataLabels: {
        enabled: true,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="min-h-screen w-full  ">
      {/* left side  */}
      <div>
        <div className="flex items-center  justify-around divide-x-2">
          {/* card total revenue  */}
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-full bg-green-100">
              <Icon
                className="text-4xl text-green-600"
                icon="hugeicons:money-04"
              />
            </div>
            <div>
              <h1 className="text-4xl font-semibold">
                ${raw.reduce((acc, rr) => acc + rr.earnings, 0)}
              </h1>
              <h1>Total Revenue</h1>
            </div>
          </div>
          {/* card total Delivered  */}
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-full bg-blue-100">
              <Icon
                className="text-4xl text-blue-600"
                icon="hugeicons:package-delivered"
              />
            </div>
            <div>
              <h1 className="text-4xl font-semibold">
                {raw.reduce((acc, rr) => acc + rr.completedOrders, 0)}
              </h1>
              <h1>Delivered Orders</h1>
            </div>
          </div>
          {/* active orders  */}
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-full bg-blue-100">
              <Icon
                className="text-4xl text-blue-600"
                icon="ic:outline-pending-actions"
              />
            </div>
            <div>
              <h1 className="text-4xl font-semibold">
                {raw.reduce((acc, rr) => acc + rr.activeOrders, 0)}
              </h1>
              <h1>Active Orders</h1>
            </div>
          </div>
        </div>

        {/* * chat area  */}
        <div className="w-full flex-1">
          <Chart
            options={ChartData.options}
            series={ChartData.series}
            height={500}
            type="area"
          />
        </div>
      </div>
      {/* right side  */}
      <div></div>
    </div>
  );
};

export default Overview;
