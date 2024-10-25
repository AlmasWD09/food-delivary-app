"use client";
import React, { useState } from "react";
import navLinks from "./DashboardLinks";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const DashboardNav = () => {
  const currentUser = "admin";
  const [getMenu, setMenu] = useState(false);
  const navRule = navLinks[currentUser];
  const pathname = usePathname();
  return (
    <div
      className={`flex flex-col justify-between items-center absolute top-0 w-full lg:relative h-20 lg:h-auto   `}
    >
      {/* mobile section topbar  */}

      <div className="w-full z-50  bg-white flex items-center justify-between px-10 lg:hidden border-b-2 border-primary">
        <Link href="/">
          <Image src={logo} alt="delish logo" height={100} width={200} />
        </Link>
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
        className={` top-20  overflow-y-auto bg-white lg:bg-white lg:static absolute z-30 lg:h-screen  flex flex-col items-start justify-between w-full   lg:p-10  px-8 py-4  transition-all lg:translate-x-0   ${
          getMenu
            ? "translate-x-0 h-[calc(100vh-80px)]  "
            : "-translate-x-full "
        }  `}
      >
        <div className="lg:flex-grow w-full lg:h-full  ">
          {/* logo section */}
          <div className="pb-10 hidden lg:flex items-center justify-between  ">
            <Link href="/">
              <Image src={logo} alt="delish logo" height={100} width={200} />
            </Link>
            <div className="lg:hidden" onClick={() => setMenu(!getMenu)}>
              {getMenu ? (
                <Icon className="text-4xl" icon="material-symbols:close" />
              ) : (
                <Icon className="text-4xl" icon="ic:baseline-menu" />
              )}
            </div>
          </div>

          <ul className="space-y-4">
            {navRule.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.link}
                  onClick={() => setMenu(false)}
                  className={`hover:bg-primary/30 hover:border-l-4 border-primary rounded-md flex items-center gap-6 px-2 py-2 text-base ${
                    pathname === `/dashboard/${currentUser}/${item.link}`
                      ? "bg-primary/30 border-l-4 border-primary"
                      : ""
                  }`}
                >
                  <span className="text-lg">{item.icons}</span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* bottom section */}

        <div className="capitalize text-sm w-full  whitespace-nowrap  space-y-2  flex flex-col items-center   gap-10 ">
          <div className="flex gap-4 items-center ">
            <button className="px-4 py-2 rounded-xl bg-gray-800 text-white">
              Dark
            </button>
            <button className="px-4 py-2 rounded-xl bg-base-200 bg-white  text-gray-800">
              Light
            </button>
          </div>

          <button className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-red-600 p-4 rounded-2xl text-white font-extrabold">
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
