"use client";
import { Icon } from "@iconify/react";
import React from "react";
import dynamic from "next/dynamic";
import raw from "./growth.json";
import { useState } from "react";
import salesData from "./sales.json";
import Image from "next/image";
import transactionData from "./transactiondata.json";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import TimeAgo from "react-timeago";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("orderId", {
    cell: (info) => <div>#{info.getValue()}</div>,
    header: () => (
      <div className="flex justify-center items-center gap-2">
        <span>ORDER ID</span>
        <Icon icon="lucide:arrow-up-down" />
      </div>
    ),
  }),

  columnHelper.accessor("customerName", {
    cell: (info) => info.getValue(),
    header: () => (
      <div className="flex justify-center items-center gap-2">
        <span>CUSTOMER NAME</span>
        <Icon icon="lucide:arrow-up-down" />
      </div>
    ),
  }),

  columnHelper.accessor("foodItem", {
    cell: (info) => info.getValue(),
    header: () => (
      <div className="flex justify-center items-center gap-2">
        <span>ITEM</span>
        <Icon icon="lucide:arrow-up-down" />
      </div>
    ),
  }),
  columnHelper.accessor("totalPrice", {
    cell: (info) => <span>$ {info.getValue()}</span>,
    header: () => (
      <div className="flex justify-center items-center gap-2">
        <span>PRICE</span>
        <Icon icon="lucide:arrow-up-down" />
      </div>
    ),
  }),
  columnHelper.accessor("paymentMethod", {
    cell: (info) => info.getValue(),
    header: () => (
      <div className="flex justify-center items-center gap-2">
        <span>METHOD</span>
        <Icon icon="lucide:arrow-up-down" />
      </div>
    ),
  }),

  columnHelper.accessor("status", {
    cell: (info) => (
      <div className="flex justify-center items-center font-semibold w-full">
        <div
          className={`${
            info.getValue() == "Completed"
              ? "bg-green-200 text-green-700"
              : info.getValue() == "In Progress"
              ? "bg-yellow-200 text-yellow-700"
              : info.getValue() == "Canceled"
              ? "bg-red-200 text-red-700"
              : ""
          } p-2 rounded-2xl   `}
        >
          {info.getValue()}
        </div>
      </div>
    ),
    header: () => (
      <div className="flex justify-center items-center gap-2">
        <span>STATUS</span>
        <Icon icon="lucide:arrow-up-down" />
      </div>
    ),
  }),
];

const Overview = () => {
  // tanstack table started

  const [tableData, setTableData] = useState([...transactionData]);
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),

    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  // tanstack table end

  // Create an array of registration counts
  const orderDeliver = raw.map((item) => item.deliver || 0);
  const orderDate = raw.map((item) => item.date || "N/A");
  const orderCancel = raw.map((item) => item.cancel || 0);

  const graphColors = ["#33d400"];

  const ChartData = {
    series: [
      {
        name: "Delivered",
        data: orderDeliver,
      },
      {
        name: "Canceled",
        data: orderCancel,
      },
    ],
    options: {
      xaxis: {
        categories: orderDate,
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
      {/* section 1 / card section  */}
      <div className="grid lg:grid-cols-5   text-white gap-10  lg:gap-12 ">
        {/* total users card 1  */}
        <div className="flex items-center justify-between w-full p-6 shadow-md bg-gradient-to-r from-emerald-500 to-lime-600 rounded-lg ">
          <div className="flex flex-col  items-center gap-2 ">
            <h2 className="text-4xl font-semibold ">435</h2>
            <p className="text-nowrap">Total Users</p>
          </div>
          <Icon className="text-6xl " icon="mdi:user" />
        </div>
        {/* total earnings card 2  */}
        <div className="flex items-center justify-between  shadow-md p-6 bg-gradient-to-r from-red-500 to-orange-500  rounded-lg w-full ">
          <div className="flex flex-col  items-center gap-2 ">
            <h2 className="text-4xl font-semibold text-nowrap ">$ 7135</h2>
            <p className="text-nowrap">Total Earnings</p>
          </div>
          <Icon className="text-6xl " icon="solar:wallet-money-outline" />
        </div>
        {/* pending orders card 3  */}
        <div className="flex items-center justify-between  shadow-md p-6 bg-gradient-to-r from-fuchsia-600 to-pink-600  rounded-lg w-full ">
          <div className="flex flex-col  items-center gap-2 ">
            <h2 className="text-4xl font-semibold ">78</h2>
            <p className="text-nowrap">Pending Orders</p>
          </div>

          <Icon className="text-6xl" icon="heroicons:shopping-bag-20-solid" />
        </div>
        {/* total restaurants card 4  */}
        <div className="flex items-center justify-between  p-6 shadow-md bg-gradient-to-r from-blue-600 to-violet-600  rounded-lg w-full ">
          <div className="flex flex-col  items-center gap-2">
            <h2 className="text-4xl font-semibold ">535</h2>
            <p className="text-nowrap">Total Restaurants</p>
          </div>
          <Icon className="text-6xl " icon="entypo:shop" />
        </div>
        {/* total riders card 5  */}
        <div className="flex items-center justify-between  p-6  shadow-md bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg w-full ">
          <div className="flex flex-col  items-center gap-2 ">
            <h2 className="text-4xl font-semibold ">435</h2>
            <p className="text-nowrap">Total Riders</p>
          </div>
          <Icon className="text-6xl " icon="mdi:bike" />
        </div>
      </div>

      {/* section 2 charts  */}
      <div className="w-full  flex flex-col lg:flex-row items-center justify-between gap-10 ">
        {/* charts  */}
        <div className="p-8 lg:p-10 bg-white rounded-xl  w-full ">
          <h1 className="text-xl font-bold capitalize pb-2">Order trends</h1>

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
        <div className="p-12 bg-white rounded-xl w-full  lg:w-1/3">
          <div className="capitalize flex items-center justify-between pb-4">
            <h2 className="text-xl font-bold">Recent Sales</h2>
            <button className="px-2 py-1 font-semibold text-sm rounded-xl border-2  capitalize">
              see all
            </button>
          </div>
          <div className="">
            {salesData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-4 border-t-2 "
              >
                <div className="flex items-center gap-4">
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
                    <h2 className=" text-base">{item.user_name}</h2>
                    <TimeAgo date={item.date_time} className="text-sm" />
                  </span>
                </div>

                <h1 className="text-base">${item.amount}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section 3 tables  */}
      <div className="w-full p-10 bg-white rounded-2xl ">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl py-4">Recent Transaction</h2>
          <button className="font-semibold border-2  text-sm px-2 py-1 rounded-xl capitalize">
            sell all
          </button>
        </div>
        <div className="overflow-auto">
          <table className=" w-full  divide-y-2 ">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      onClick={header.column.getToggleSortingHandler()}
                      key={header.id}
                      className="font-bold p-4 cursor-pointer hover:bg-slate-100"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="text-center  divide-y-2">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-slate-100  ">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-4 text-sm">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
