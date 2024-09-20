"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Menu",
      path: "/menu",
    },
    {
      title: "Orders",
      path: "/orders",
    },
    {
      title: "Promotions",
      path: "/promotions",
    },
    {
      title: "Profile",
      path: "/profile",
    },
  ];

  return (
    <div className="flex items-center justify-between bg-gray-100 py-6 px-16">
      <div>
        <h1 className="font-satisfy text-5xl">Cravify</h1>
      </div>
      <div>
        <ul className="flex items-center gap-6">
          {navLinks.map((item) => (
            <Link key={item.path} href={item.path}>
              <li
                className={`font-semibold p-2 rounded-md ${
                  pathname == item.path && "bg-blue-600 text-white"
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/signin">
          <button className="px-4 py-2 rounded-xl bg-blue-100 text-blue-700 font-semibold border-2 border-blue-200">
            Sign In
          </button>
        </Link>
        <Link href="/signup">
          <button className="px-4 py-2 rounded-xl bg-green-100 text-green-700 font-semibold border-2 border-green-200">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
