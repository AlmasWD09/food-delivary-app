"use client";
import { Icon } from "@iconify/react";
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
      title: "Restaurants",
      path: "/restaurants",
    },
    {
      title: "Profile",
      path: "/profile",
    },
  ];

  return (
    <div className="bg-navbar">
      <div className="flex items-center justify-between  container mx-auto py-6">
        <div className="flex items-center gap-2">
          <Icon
            className="text-6xl text-amber-600"
            icon="material-symbols-light:fastfood-sharp"
          />

          <h1 className="text-amber-800 text-5xl font-bold capitalize font-kanit">
            Feast Express
          </h1>
        </div>
        <div>
          <ul className="flex items-center gap-6">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path}>
                <div className="group relative">
                  <li
                    className={`font-semibold px-2 py-1 rounded-md ${
                      pathname == item.path && "bg-amber-200"
                    }`}
                  >
                    {item.title}
                  </li>

                  <span className="w-full h-0.5 absolute bg-black -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
                </div>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {/* button start  */}

          <div className="group relative">
            <button className="flex flex-col items-center gap-1 group-hover:scale-110  ">
              <Icon className="text-2xl" icon="ph:user" />
              <h2>Account</h2>

              <span className="h-0.5 w-full absolute -bottom-1 left-0 bg-black transform scale-x-0 group-hover:scale-x-100    transition-all duration-300 ease-in-out "></span>
            </button>
            {/* account hover area  */}

            <div className="absolute hidden   group-hover:flex flex-col   -left-20 top-11 ">
              <div className="w-full lg:py-3 "></div>
              <div className="w-full p-8 bg-navbar text-nowrap">
                <h1 className="uppercase font-bold text-xl text-center">
                  my account
                </h1>
                <h3 className="text-center">login to access your account</h3>

                <div className="flex items-center gap-4 justify-center pt-4">
                  <button className="px-4 py-2 bg-blue-600 text-white font-semibold hover:scale-110 hover:bg-blue-500 transition-all duration-300 ease-in-out">
                    Login
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white font-semibold hover:scale-110 hover:bg-green-500 transition-all duration-300 ease-in-out">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* account button end  */}

          <button className="flex flex-col items-center gap-1  group relative">
            <Icon className="text-3xl" icon="bitcoin-icons:cart-outline" />
            <p>Cart</p>

            <span className="w-full h-0.5 absolute -bottom-1 left-0 scale-x-0 group-hover:scale-x-100 bg-black transition-all duration-300 ease-in-out"></span>
          </button>

          {/* cart button end  */}
          <button className="flex flex-col items-center gap-1 group relative">
            <Icon className="text-2xl" icon="ph:heart" />
            <p>WishList</p>
            <span className="w-full h-0.5 absolute -bottom-1 left-0 scale-x-0 group-hover:scale-x-100 bg-black transition-all duration-300 ease-in-out"></span>
          </button>

          {/* wishlist button end  */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <Link href="/signin">
          <button className="px-4 py-2 rounded-xl bg-blue-100 text-blue-700 font-semibold border-2 border-blue-200">
            Sign In
          </button>
        </Link>
        <Link href="/signup">
          <button className="px-4 py-2 rounded-xl bg-green-100 text-green-700 font-semibold border-2 border-green-200">
            Sign Up
          </button>
        </Link> */
}
