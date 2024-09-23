"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [getMenu, setMenu] = useState(false);

  console.log(getMenu);
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
    <div className=" font-urbanist  bg-secondaryGray relative">
      <div className="flex items-center justify-between  container mx-auto top-0  p-2 ">
        <div className="lg:hidden" onClick={() => setMenu(!getMenu)}>
          {getMenu ? (
            <Icon className="text-4xl" icon="material-symbols:close" />
          ) : (
            <Icon className="text-4xl" icon="ic:baseline-menu" />
          )}
        </div>

        {/* left section  */}
        <div className="flex items-center ">
          <Image src="/assets/logo.png" alt="logo" height={1000} width={200} />
        </div>

        {/* logo section end  */}

        <div className="hidden lg:flex ">
          <ul className="flex items-center gap-6">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path}>
                <div className="group relative">
                  <li
                    className={`font-semibold px-2 py-1 rounded-md ${
                      pathname == item.path && "bg-orange-200"
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

        {/* navlinks / center section end  */}

        <div className="flex items-center gap-2 lg:gap-6">
          {/* button start  */}

          <div className="group relative hidden lg:flex">
            <button className="flex flex-col items-center gap-1 group-hover:scale-110  ">
              <Icon className="text-2xl" icon="ph:user" />
              <h2>Account</h2>

              <span className="h-0.5 w-full absolute -bottom-1 left-0 bg-black transform scale-x-0 group-hover:scale-x-100    transition-all duration-300 ease-in-out "></span>
            </button>
            {/* account hover area end */}

            <div className="absolute  group-hover:flex flex-col transform scale-y-0 group-hover:scale-y-100 origin-top ease-in transition duration-150  -left-20 top-12 ">
              <div className="w-full lg:py-3 "></div>
              <div className="w-full p-8 bg-secondaryGray text-nowrap">
                <h1 className="uppercase font-bold text-xl text-center">
                  my account
                </h1>
                <h3 className="text-center">login to access your account</h3>

                <div className="flex items-center gap-4 justify-center pt-4">
                  <Link href="/signup">
                    <button className="px-4 py-2 bg-primary text-white font-semibold hover:scale-110 hover:bg-primaryLight transition-all duration-300 ease-in-out">
                      Sign Up
                    </button>
                  </Link>

                  <Link href="/signin">
                    <button className="px-4 py-2 bg-primary text-white font-semibold hover:scale-110 hover:bg-primaryLight transition-all duration-300 ease-in-out">
                      Sign In
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* account button end  */}

          <button className=" hidden lg:flex flex-col items-center   group relative">
            <Icon className="text-3xl" icon="bitcoin-icons:cart-outline" />
            <p>Cart</p>

            <span className="w-full h-0.5 absolute -bottom-1 left-0 scale-x-0 group-hover:scale-x-100 bg-black transition-all duration-300 ease-in-out"></span>
          </button>

          {/* cart button end  */}
          <button
            onClick={() => setMenu(false)}
            className="hidden lg:flex flex-col items-center  group relative"
          >
            <Icon className="text-2xl" icon="ph:heart" />
            <p>WishList</p>
            <span className="w-full h-0.5 absolute -bottom-1 left-0 scale-x-0 group-hover:scale-x-100 bg-black transition-all duration-300 ease-in-out"></span>
          </button>

          {/* wishlist button end  */}
        </div>

        {/* right section end  */}
      </div>

      {/* mobile responsive section  */}

      <div
        className={`h-screen w-full lg:hidden  absolute z-[9999]   transition-all bg-secondaryGray ease-in-out duration-300 transform ${
          getMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-10 ">
          <ul className=" flex flex-col gap-6">
            {navLinks.map((item) => (
              <Link
                onClick={() => setMenu(false)}
                key={item.path}
                href={item.path}
              >
                <li
                  key={item.path}
                  className={`font-bold p-4 hover:bg-amber-200 ${
                    pathname === item.path && "bg-orange-200"
                  } `}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>

          <div className="pt-10">
            <h1 className="capitalize font-semibold text-2xl text-center">
              Welcome to Feast Express
            </h1>
            <h3 className="capitalize  text-md text-center">
              login to access your accounts
            </h3>

            <div className="flex flex-col items-center gap-4 justify-center pt-4">
              <Link href="/signin" className="w-full">
                <button
                  onClick={() => setMenu(false)}
                  className="w-full py-2 bg-blue-600 text-white font-semibold hover:scale-110 hover:bg-blue-500 transition-all duration-300 ease-in-out"
                >
                  Sign In
                </button>
              </Link>

              <h2>
                don't have an account ?{" "}
                <Link onClick={() => setMenu(false)} href="/signup">
                  <span className="font-semibold underline">create now</span>
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
