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

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/cart-menu/${session?.data?.user?.email}`
        );
        setItems(response.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [session?.data?.user?.email]);

  console.log(session);

  const dynamicDashboard = () => {
    if (session?.data?.user?.role == "admin") {
      return "/dashboard/admin/overview";
    } else if (session?.data?.user?.role == "restaurants") {
      return "/dashboard/restaurant/overview";
    } else if (session?.data?.user?.role == "rider") {
      return "/dashboard/rider/overview";
    } else {
      return "/signin";
    }
  };

  const itemsSuper = 0;

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
      title: "Membership",
      path: "/membership",
    },
    {
      title: "Profile",
      path: "/profile",
    },

    {
      title: "Dashboard",
      path: dynamicDashboard(),
    },
  ];
  const image = session?.data?.user?.image;
  // console.log(items);
  return (
    <div className="h-20 font-Inter bg-white  relative  shadow-md ">
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
                    className={`px-2 py-1 rounded-md ${
                      pathname == item.path
                        ? " font-extrabold text-primary"
                        : ""
                    }`}
                  >
                    {item.title}
                  </li>

                  <span className="w-full h-0.5 absolute bg-primary -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
                </div>
              </Link>
            ))}
          </ul>
        </div>

        {/* navlinks / center section end  */}

        <div className="flex items-center gap-2 lg:gap-6">
          {/* button start  */}

          <div className="group relative hidden lg:flex">
            {session?.data?.user?.image ? (
              <div className="h-12 w-12 overflow-hidden rounded-full object-center   z-20 ">
                <Image
                  className="object-cover h-full w-full"
                  src={image}
                  alt={session?.data?.user?.name}
                  height={500}
                  width={500}
                />
              </div>
            ) : (
              <button className="flex flex-col items-center gap-1 group-hover:scale-110 z-20 ">
                <Icon className="text-2xl" icon="ph:user" />
                <h2>Account</h2>

                <span className="h-0.5 w-full absolute -bottom-1 left-0 bg-primary transform scale-x-0 group-hover:scale-x-100    transition-all duration-300 ease-in-out "></span>
              </button>
            )}

            {/* account hover area start */}

            <div
              className={`absolute  group-hover:flex flex-col transform scale-y-0 group-hover:scale-y-100 origin-top ease-in transition duration-150 ${
                session?.data?.user ? "-left-24" : "-left-32"
              }   top-10 gap-0 `}
            >
              <div className="h-14  w-full "></div>
              <div className="w-full flex justify-center  ">
                <Icon
                  className="text-4xl absolute top-7  text-primary "
                  icon="ri:triangle-fill"
                />
              </div>
              <div
                className={` ${
                  session?.data?.user ? "w-full" : "p-10"
                }   text-nowrap bg-white  border-4 border-primary`}
              >
                {/* condition rendering use for social signIn */}
                {session?.data?.user || session?.status === "authenticated" ? (
                  <>
                    <div className="w-[240px]">
                      {session?.data?.user?.name ? (
                        <h1 className="uppercase font-bold text-xl  p-6 text-center">
                          {/* only social signIn */}
                          {session?.data?.user?.name}
                        </h1>
                      ) : (
                        <h1 className="uppercase font-bold text-xl  p-6 text-center">
                          {session?.data?.user?.firstName}{" "}
                          {session?.data?.user?.lastName}
                        </h1>
                      )}

                      <div>
                        <ul className=" font-semibold  ">
                          <Link
                            className=" gap-2 hover:bg-primary hover:text-white flex items-center p-4 border-b-2 border-primary w-full "
                            href="/profile"
                          >
                            <Icon icon="gg:profile" />
                            <li>Profile</li>
                          </Link>
                          <Link
                            className=" gap-2 hover:bg-primary hover:text-white flex items-center p-4 border-b-2 border-primary  w-full"
                            href="/orders"
                          >
                            <Icon icon="solar:box-broken" />
                            <li>Orders</li>
                          </Link>
                          <Link
                            className=" gap-2 hover:bg-primary hover:text-white flex items-center p-4  border-b-2 border-primary w-full"
                            href="/whishlist"
                          >
                            <Icon icon="solar:heart-outline" />
                            <li>Wishlist</li>
                          </Link>
                          <button
                            onClick={signOut}
                            className=" gap-2 hover:bg-primary hover:text-white  p-4  flex items-center w-full"
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
                        <button className="px-4 py-2 bg-primary text-white font-semibold hover:scale-110 transition-all duration-300 ease-in-out rounded-lg">
                          Sign Up
                        </button>
                      </Link>

                      <Link href="/signin">
                        <button className="px-4 py-2 bg-secondary text-white font-semibold hover:scale-110 transition-all duration-300 ease-in-out rounded-lg">
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

              <span className="w-full h-0.5 absolute -bottom-1 left-0 scale-x-0 group-hover:scale-x-100 bg-primary transition-all duration-300 ease-in-out"></span>
              <div className="absolute  flex justify-center items-center ">
                <span
                  className={` absolute ${
                    items?.length === 0 && "hidden"
                  } bg-primary rounded-full text-white w-fit h-fit p-1 -top-2  text-sm font-semibold -right-2`}
                >
                  {items.slice(0, 8).length}
                </span>
                {items?.length > 0 && (
                  <span className="  w-10 h-10 rounded-full animate-ping bg-primaryGray "></span>
                )}
              </div>
            </button>

            {/* cart hover start */}
            <div className="absolute  group-hover:flex flex-col transform scale-y-0 group-hover:scale-y-100 origin-top ease-in transition duration-150  -left-32 top-10 gap-0 ">
              <div className="h-14  w-full "></div>
              <div className="w-full flex justify-center  ">
                <Icon
                  className="text-4xl absolute top-7  text-primary "
                  icon="ri:triangle-fill"
                />
              </div>
              <div
                className={` ${
                  session?.data?.user && "w-full"
                }   text-nowrap bg-white  border-4 p-6 border-primary`}
              >
                <>
                  <h1 className="uppercase font-bold text-xl text-center">
                    all added items
                  </h1>

                  {items?.length < 0 && (
                    <h3 className="text-center p-10">
                      you have not added any items
                    </h3>
                  )}

                  {items?.length > 0 && (
                    <>
                      <div className="divide-y-2 space-y-3 py-3">
                        {items?.slice(0, 8)?.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between gap-2 "
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 overflow-hidden bg-cover rounded-full ">
                                <Image
                                  className="w-full h-full bg-cover"
                                  src={item.image}
                                  height={2000}
                                  width={2000}
                                  alt={item.title}
                                />
                              </div>
                              <div className="flex flex-col ">
                                <h2>{item.title}</h2>
                                <h2 className="text-sm">
                                  Qty: {item.quantity}
                                </h2>
                              </div>
                            </div>
                            <h2>${item.price}</h2>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={"/order"}
                        className="capitalize px-4 py-2  w-full rounded-lg bg-primary text-white font-bold"
                      >
                        Process to Checkout
                      </Link>
                    </>
                  )}
                </>
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
            <span className="w-full h-0.5 absolute -bottom-1 left-0 scale-x-0 group-hover:scale-x-100 bg-primary transition-all duration-300 ease-in-out"></span>
          </button>

          {/* wishlist button end  */}
        </div>

        {/* right section end  */}
      </div>

      {/* mobile responsive section  */}

      <div
        className={`h-screen overflow-y-auto w-full lg:hidden  absolute z-[9999]   transition-all bg-white ease-in-out duration-300 transform ${
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
                  className={`font-bold p-4 hover:bg-primaryGray/20 ${
                    pathname === item.path && "bg-primaryGray/20 text-primary"
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
                ? " border-4  border-primary w-fit mx-auto mt-10"
                : "w-full"
            }`}
          >
            {session?.data?.user || session?.status === "authenticated" ? (
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
                    {session?.data?.user?.name ? (
                      <h1 className="uppercase font-bold text-xl  p-6 text-center">
                        {/* only social signIn */}
                        {session?.data?.user?.name}
                      </h1>
                    ) : (
                      <h1 className="uppercase font-bold text-xl  p-6 text-center">
                        {session?.data?.user?.firstName}{" "}
                        {session?.data?.user?.lastName}
                      </h1>
                    )}
                    <h2 className="font-semibold capitalize">
                      {session?.data?.user?.role}
                    </h2>
                  </div>
                </div>

                <div>
                  <ul className=" font-semibold  text-lg">
                    <Link
                      className=" gap-2 hover:bg-primaryGray/20 hover:text-fouth flex items-center p-4 border-b-2 border-primary  w-full "
                      href="/profile"
                    >
                      <Icon className="text-lg" icon="gg:profile" />
                      <li>Profile</li>
                    </Link>
                    <Link
                      className=" gap-2 hover:bg-primaryGray/20 hover:text-fouth flex items-center p-4 border-b-2 border-primary  w-full"
                      href="/orders"
                    >
                      <Icon className="text-lg" icon="solar:box-broken" />
                      <li>Orders</li>
                    </Link>
                    <Link
                      className=" gap-2 hover:bg-primaryGray/20 hover:text-fouth flex items-center p-4 border-b-2 border-primary  w-full"
                      href="/whishlist"
                    >
                      <Icon className="text-lg" icon="solar:heart-outline" />
                      <li>Wishlist</li>
                    </Link>
                    <button
                      onClick={signOut}
                      className=" gap-2 hover:bg-primary hover:text-white  p-4 flex items-center w-full"
                    >
                      <Icon className="text-lg" icon="hugeicons:logout-04" />
                      <span>Logout</span>
                    </button>
                  </ul>
                </div>
              </>
            ) : (
              <div className="p-4">
                <h1 className="capitalize font-semibold text-xl text-center">
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
