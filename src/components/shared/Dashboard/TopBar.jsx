"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const TopBar = () => {
  const [notiOn, setNoti] = useState(false);

  // current user demo
  const currentUser = {
    name: "Snehashis Roy",
    role: "Admin",
    image:
      "https://i.ibb.co/FVyQRJn/414102136-3551419075133636-309801870608838235-n.jpg",
  };

  return (
    <div className="w-full flex items-center justify-between sticky top-0 bg-base-100 px-10 py-6">
      {/* welcome section  */}
      <div>
        <p className="capitalize font-extrabold text-2xl">Welcome back</p>
        <p className="capitalize text-sm font-semibold text-text ">
          your admin dashboard overview today
        </p>
      </div>

      {/* search section  */}
      <form
        action=""
        className=" flex items-center w-full  max-w-2xl relative    "
      >
        <input
          type="text"
          placeholder="Search food or restaurant"
          className="pl-16 py-3 w-full outline-none rounded-2xl  bg-gray-100  "
        />
        <button
          className="absolute px-6 py-3  -left-2 text-gray-500"
          type="submit"
        >
          {" "}
          <Icon className=" text-3xl" icon="uil:search" />
        </button>
      </form>

      {/* notification icon section  */}
      <div className=" flex items-center justify-center gap-6 px-20 relative  ">
        <button onClick={() => setNoti(!notiOn)} className="p-2 relative z-10">
          <Icon
            className={` text-3xl ${
              notiOn ? "text-blue-600" : "text-orange-500"
            } `}
            icon="mingcute:notification-line"
          />

          <span className="absolute top-0  right-0 p-1  ">
            <span
              className={`animate-ping h-full w-full rounded-full ${
                notiOn ? "bg-blue-600" : "bg-orange-500"
              }  absolute `}
            ></span>
            <span
              className={` h-full w-full rounded-full  ${
                notiOn ? "bg-blue-600" : "bg-orange-500"
              }  absolute z-10  `}
            ></span>
          </span>
        </button>

        <div
          className={` ${
            notiOn ? "visible" : "invisible"
          }   bg-white w-80  absolute top-24  shadow-md group border-2 border-blue-600`}
        >
          <span className="absolute -top-6 text-blue-600 text-center  -z-10 flex justify-center w-full ">
            <Icon className="text-3xl " icon="tabler:triangle-filled" />
          </span>
          <h1 className="py-2 border-b-2 h-fit w-full text-center font-bold">
            Notification
          </h1>

          <ol className="p-6 list-decimal list-inside">
            <li className="flex items-center justify-between gap-4 w-full h-full">
              <div className="w-8 h-8 rounded-full  overflow-hidden ">
                <Image
                  src={currentUser.image}
                  height={1000}
                  width={1000}
                  alt="snehashisroy"
                />
              </div>
              <p className="flex-1 text-sm">
                Snehashis roy sent you a listing request
              </p>
              <p className="px-2 py-1 rounded-lg bg-slate-200 cursor-pointer hover:bg-green-300 font-semibold">
                view
              </p>
            </li>
          </ol>

          <p className="py-2 text-sm bg-blue-600 text-center font-bold text-white cursor-pointer hover:underline">
            show all messages{" "}
          </p>
        </div>
      </div>

      {/* profile section  */}
      <div className="flex items-center gap-3 pl-10">
        <span className="w-12 h-12  rounded-full overflow-hidden">
          <Image
            src={currentUser.image}
            alt={currentUser.name}
            height={500}
            width={500}
            className="object-cover w-full h-full"
          />
        </span>
        <span>
          <p className="text-md font-bold">{currentUser.name}</p>
          <p className="text-sm font-bold text-text">{currentUser.role}</p>
        </span>
        <span>
          <Icon className="text-xl" icon="iconamoon:arrow-down-2-light" />
        </span>
      </div>
    </div>
  );
};

export default TopBar;
