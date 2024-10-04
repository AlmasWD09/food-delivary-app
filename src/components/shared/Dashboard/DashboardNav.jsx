"use client";
import React, { useState } from "react";
import navLinks from "./DashboardLinks";
import logo from "../../../../public/assets/logo.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
const DashboardNav = () => {
  const currentUser = "restaurants";
  const [getMenu, setMenu] = useState(false);
  const navRule = navLinks[currentUser];

  return (
    <div
      className={`flex flex-col justify-between items-center w-full   relative  `}
    >
      <div className="w-full z-10 py-1 top-0 bg-white flex items-center justify-between px-10 lg:hidden">
        <Image src={logo} alt="delish logo" height={100} width={200} />
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setMenu(!getMenu)}
        >
          {getMenu ? (
            <Icon className="text-4xl" icon="material-symbols:close" />
          ) : (
            <Icon className="text-4xl" icon="ic:baseline-menu" />
          )}
        </div>
      </div>

      <div
        className={`  bg-white lg:static absolute lg:h-screen flex flex-col items-start justify-between w-full  lg:p-10  px-8 py-36   transition-all lg:translate-x-0 ${
          getMenu ? "translate-x-0 h-screen" : "-translate-x-full"
        }  `}
      >
        <div className="lg:flex-grow w-full lg:h-full ">
          {/* logo section */}
          <div className="pb-10 hidden lg:flex items-center justify-between  ">
            <Image src={logo} alt="delish logo" height={100} width={200} />
            <div className="lg:hidden" onClick={() => setMenu(!getMenu)}>
              {getMenu ? (
                <Icon className="text-4xl" icon="material-symbols:close" />
              ) : (
                <Icon className="text-4xl" icon="ic:baseline-menu" />
              )}
            </div>
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

        <div className="capitalize text-sm w-full  whitespace-nowrap  space-y-2  flex flex-col items-center   gap-10 ">
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
    </div>
  );
};

export default DashboardNav;
