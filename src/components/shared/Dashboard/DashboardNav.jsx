import React from "react";
import navLinks from "./DashboardLinks";
import logo from "../../../../public/assets/logo.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
const DashboardNav = () => {
  const currentUser = "admin";

  const navRule = navLinks[currentUser];

  return (
    <div className="flex flex-col h-full justify-between items-center ">
      <div>
        {/* logo section */}
        <div className="pb-10">
          <Image src={logo} alt="delish logo" height={100} width={200} />
        </div>

        {/* navlinks section  */}
        <ul className="space-y-4">
          {navRule.map((item) => (
            <Link
              href={item.link}
              key={item.path}
              className=" hover:bg-redish hover:text-white   rounded-md  flex items-center gap-3 px-2 py-2  "
            >
              <span className="text-2xl">{item.icons}</span>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      {/* bottom section */}
      <div className="capitalize text-sm w-full whitespace-nowrap  space-y-2  flex flex-col items-center gap-10">
        <div className="flex gap-4 items-center ">
          <button className="px-4 py-2 rounded-xl bg-gray-800 text-white">
            Dark
          </button>
          <button className="px-4 py-2 rounded-xl bg-base-200  text-gray-800">
            Light
          </button>
        </div>

        <button className="flex items-center justify-center gap-2 w-full bg-redish p-4 rounded-2xl text-white">
          <Icon className="text-xl" icon="tabler:logout-2" />
          Logout
        </button>

        <p>&copy; 2024 Delish. All rights reserved.</p>
      </div>
    </div>
  );
};

export default DashboardNav;
