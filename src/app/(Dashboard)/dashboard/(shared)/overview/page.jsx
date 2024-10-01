import { Icon } from "@iconify/react";
import React from "react";

const overviewPage = () => {
  return (
    <div>
      {/* stats icons with data  */}
      <div className="flex items-center justify-around">
        {/* card 1 stats */}
        <div className="flex flex-col  gap-9 p-6 rounded-xl w-fit bg-white shadow-md">
          <div className="flex items-center justify-between gap-6">
            <span className="p-3 rounded-full bg-blue-400  text-white text-4xl">
              <Icon icon="mdi:chart-line" />
            </span>
            <h1 className="text-4xl flex items-center gap-2">
              ₹<span className="font-semibold">85426</span>
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
              <h1 className="font-extrabold">Total Orders</h1>
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
    </div>
  );
};

export default overviewPage;
