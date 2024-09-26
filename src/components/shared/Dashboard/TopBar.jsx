import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  // current user demo
  const currentUser = {
    name: "Snehashis Roy",
    role: "Admin",
    image:
      "https://i.ibb.co/FVyQRJn/414102136-3551419075133636-309801870608838235-n.jpg",
  };

  return (
    <div className="flex items-center justify-between ">
      <form action="" className=" flex items-center  flex-1 ">
        <input
          type="text"
          placeholder="Search Here"
          className="px-6 py-3 bg-base-100 w-full outline-none "
        />
        <button className="px-6 py-3 bg-green-600 text-white" type="submit ">
          {" "}
          <Icon className=" text-2xl" icon="uil:search" />
        </button>
      </form>

      <div className=" flex items-center gap-6 px-20 border-r-2 border-gray-400  ">
        <button className="p-2 rounded-md bg-sky-200 relative ">
          <Icon
            className=" text-3xl text-sky-500"
            icon="mingcute:notification-line"
          />

          <span className="absolute -top-3  right-0 p-2  ">
            <span className="animate-ping h-full w-full rounded-full bg-sky-600 absolute "></span>
            <span className=" h-full w-full rounded-full bg-sky-600 absolute z-10  "></span>
          </span>
        </button>

        <Link href="/dashboard/chats">
          <button className="p-2 rounded-md bg-green-200">
            <Icon
              className=" text-3xl text-green-600"
              icon="mingcute:message-4-line"
            />
          </button>
        </Link>
        <Link href="/dashboard/settings">
          <button className="p-2 rounded-md bg-red-100">
            <Icon className=" text-3xl text-red-600" icon="uil:setting" />
          </button>
        </Link>
      </div>

      <div className="flex items-center gap-2 pl-10">
        <p>Hi, {currentUser.name}</p>
        <span className="w-10 h-10  rounded-full overflow-hidden">
          <Image
            src={currentUser.image}
            alt={currentUser.name}
            height={500}
            width={500}
            className="object-cover w-full h-full"
          />
        </span>
      </div>
    </div>
  );
};

export default TopBar;
