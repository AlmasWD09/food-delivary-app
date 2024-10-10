"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import NavCartList from "../NavCartList";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const [getMenu, setMenu] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const session = useSession();
  console.log("navbar page----->17", session);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/cart-menu/tariquelislam2015@gmail.com`
        );
        setItems(response.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // if (loading) {
  //     return <li>Loading...</li>;
  // }

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
      title: "Restaurants",
      path: "/restaurants",
    },
    {
      title: "Profile",
      path: "/profile",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  return (
    <div className="h-20 font-urbanist  bg-base-100   relative  shadow-md ">
      <div className=" h-full flex items-center justify-between  container mx-auto top-0  p-2 ">
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
                      pathname == item.path && "bg-secondary text-fourth"
                    }`}
                  >
                    {item.title}
                  </li>

                  <span className="w-full h-0.5 absolute bg-secondary -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
                </div>
              </Link>
            ))}
          </ul>
        </div>

        {/* navlinks / center section end  */}

        <div className="flex items-center gap-2 lg:gap-6">
          {/* button start  */}

          <div className="group relative hidden lg:flex">
            {session?.data?.user ? (
              <div className="h-12 w-12 overflow-hidden rounded-full object-center ring-2  z-20 ">
                <Image
                  className="object-cover h-full w-full"
                  src={session?.data?.user?.image}
                  alt={session?.data?.user?.name}
                  height={100}
                  width={100}
                />
              </div>
            ) : (
              <button className="flex flex-col items-center gap-1 group-hover:scale-110 z-20 ">
                <Icon className="text-2xl" icon="ph:user" />
                <h2>Account</h2>

                <span className="h-0.5 w-full absolute -bottom-1 left-0 bg-black transform scale-x-0 group-hover:scale-x-100    transition-all duration-300 ease-in-out "></span>
              </button>
            )}

            {/* account hover area start */}

            <div className="absolute  group-hover:flex flex-col transform scale-y-0 group-hover:scale-y-100 origin-top ease-in transition duration-150  -left-24 top-10 gap-0 ">
              <div className="h-14  w-full "></div>
              <div className="w-full flex justify-center  ">
                <Icon
                  className="text-4xl absolute top-7  text-secondary "
                  icon="ri:triangle-fill"
                />
              </div>
              <div
                className={` ${
                  session?.data?.user ? "w-full" : "p-10"
                }   text-nowrap bg-third  border-4 border-secondary`}
              >
                {session?.data?.user ? (
                  <>
                    <div className="w-[240px]">
                      <h1 className="uppercase font-bold text-xl  p-6">
                        {session?.data?.user?.firstName} {session?.data?.user?.lastName}
                      </h1>

                      <div>
                        <ul className=" font-semibold  ">
                          <Link
                            className=" gap-2 hover:bg-secondary hover:text-fourth flex items-center p-4 border-b-2 border-secondary w-full "
                            href="/profile"
                          >
                            <Icon icon="gg:profile" />
                            <li>Profile</li>
                          </Link>
                          <Link
                            className=" gap-2 hover:bg-secondary hover:text-fourth flex items-center p-4 border-b-2 border-secondary  w-full"
                            href="/orders"
                          >
                            <Icon icon="solar:box-broken" />
                            <li>Orders</li>
                          </Link>
                          <Link
                            className=" gap-2 hover:bg-secondary hover:text-fourth flex items-center p-4  border-b-2 border-secondary w-full"
                            href="/whishlist"
                          >
                            <Icon icon="solar:heart-outline" />
                            <li>Wishlist</li>
                          </Link>
                          <button
                            onClick={signOut}
                            className=" gap-2 hover:bg-red-600 hover:text-white  p-4  flex items-center w-full"
                          >
                            <Icon icon="hugeicons:logout-04" />
                            <span>Logout</span>
                          </button>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="uppercase font-bold text-xl text-center">
                      my account
                    </h1>
                    <h3 className="text-center">
                      login to access your account
                    </h3>

                    <div className="flex items-center gap-4 justify-center pt-4">
                      <Link href="/signup">
                        <button className="px-4 py-2 bg-secondary text-white font-semibold hover:scale-110 hover:bg-primaryLight transition-all duration-300 ease-in-out">
                          Sign Up
                        </button>
                      </Link>

                      <Link href="/signin">
                        <button className="px-4 py-2 bg-primary text-white font-semibold hover:scale-110 hover:bg-primaryLight transition-all duration-300 ease-in-out">
                          Sign In
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* account button end  */}

          <div className="group relative hidden lg:flex">
            <button className=" hidden lg:flex flex-col items-center   group relative z-20">
              <Icon className="text-3xl" icon="bitcoin-icons:cart-outline" />
              <p>Cart</p>

              <span className="w-full h-0.5 absolute -bottom-1 left-0 scale-x-0 group-hover:scale-x-100 bg-black transition-all duration-300 ease-in-out"></span>
              <span
                className={`absolute ${
                  items?.length === 0 && "hidden"
                } bg-pink-600 rounded-full text-white px-1 -top-2  text-xl font-semibold -right-2`}
              >
                {items?.length}
              </span>
            </button>
            {/* cart hover start */}
            <div className="absolute    group-hover:flex flex-col transform scale-y-0 group-hover:scale-y-100 origin-top ease-in transition duration-150  -left-16 top-10 ">
              <div className="h-4 w-full"></div>
              <div className="bg-secondaryGray  w-[300px] text-nowrap">
                <p className="font-semibold text-lg p-4">All added items</p>
                <div>
                  <ul>
                    <NavCartList />
                  </ul>
                </div>
                <div className="py-4 flex justify-center">
                  <Link
                    href={"/order"}
                    className="px-2 font-medium bg-primary text-white py-1"
                  >
                    View Process
                  </Link>
                </div>
              </div>
            </div>
            {/* cart hover end */}
          </div>

          {/* cart button end  */}
          <button
            onClick={() => setMenu(false)}
            className="hidden lg:flex flex-col items-center  group relative z-20"
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
        className={`h-screen overflow-y-auto w-full lg:hidden  absolute z-[9999]   transition-all bg-third ease-in-out duration-300 transform ${
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
                    pathname === item.path && "bg-secondary text-fourth"
                  } `}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>

          <hr />
          <div
            className={` ${
              session
                ? " border-4  border-secondary w-fit mx-auto mt-10"
                : "w-full"
            }`}
          >
            {session?.data?.user ? (
              <>
                <div className="flex items-center gap-2 p-4 ">
                  <div className="h-12 w-12 overflow-hidden rounded-full object-center  z-20 ">
                    <Image
                      className="object-cover h-full w-full"
                      src={session?.data?.user?.image}
                      alt={session?.data?.user?.firstName}
                      height={1000}
                      width={1000}
                    />
                  </div>

                  <div>
                    <h1 className="text-xl capitalize font-bold">
                    {session?.data?.user?.firstName} {session?.data?.user?.lastName}
                    </h1>
                    <h2 className="font-semibold capitalize">
                      {session?.data?.user?.role}
                    </h2>
                  </div>
                </div>

                <div>
                  <ul className=" font-semibold  text-lg">
                    <Link
                      className=" gap-2 hover:bg-secondary hover:text-fouth flex items-center p-4 border-b-2 border-secondary  w-full "
                      href="/profile"
                    >
                      <Icon className="text-lg" icon="gg:profile" />
                      <li>Profile</li>
                    </Link>
                    <Link
                      className=" gap-2 hover:bg-secondary hover:text-fouth flex items-center p-4 border-b-2 border-secondary  w-full"
                      href="/orders"
                    >
                      <Icon className="text-lg" icon="solar:box-broken" />
                      <li>Orders</li>
                    </Link>
                    <Link
                      className=" gap-2 hover:bg-secondary hover:text-fouth flex items-center p-4 border-b-2 border-secondary  w-full"
                      href="/whishlist"
                    >
                      <Icon className="text-lg" icon="solar:heart-outline" />
                      <li>Wishlist</li>
                    </Link>
                    <button
                      onClick={signOut}
                      className=" gap-2 hover:bg-red-600 hover:text-white  p-4 flex items-center w-full"
                    >
                      <Icon className="text-lg" icon="hugeicons:logout-04" />
                      <span>Logout</span>
                    </button>
                  </ul>
                </div>
              </>
            ) : (
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
                    don&apos;t have an account ?{" "}
                    <Link onClick={() => setMenu(false)} href="/signup">
                      <span className="font-semibold underline">
                        create now
                      </span>
                    </Link>
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
