"use client";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Menu = ({ menuData, refetch }) => {
  const [filterData, setFilterData] = useState([]);
  const [click, setClick] = useState("All");
  const axiosPub = useAxiosPublic();
  const queryClient = useQueryClient();
  const session = useSession();

  const { mutateAsync,reset } = useMutation({
    mutationKey: ["cart"],
    mutationFn: async (item) => {
      const { data } = await axiosPub.post("/single-menu", item);
      console.log(data);
      return data;
    },
    onSuccess: () => {
      toast.success("You have successfully added to cart");
      reset()
      queryClient.invalidateQueries("cart");
    },
  });

  useEffect(() => {
    if (menuData && menuData.length > 0) {
      setFilterData(menuData);
    }
  }, [menuData]);

  const filterByCategory = (category) => {
    if (category === "All") {
      setFilterData(menuData);
      setClick(category);
    } else {
      const data = menuData.filter((food) => food.category === category);
      setFilterData(data);
      setClick(category);
    }
  };

  const handleCart = async (data) => {
    const { _id, ...rest } = data;
    const item = {
      ...rest,
      menuId: _id,
      quantity: 1,
      userEmail: session?.data?.user?.email,
    };

    try {
      mutateAsync(item);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="my-10 lg:max-w-[1240px] mx-auto">
      <h3 className="text-2xl text-primary text-center font-semibold">
        Food Menu
      </h3>
      <h2 className="text-3xl my-3 text-center font-bold">Our Specials Menu</h2>
      <div className="mt-5">
        <div className="flex md:justify-center">
          <div className="flex w-full md:w-4/5 lg:w-1/2 flex-col md:flex-row p-4 md:border-2 md:border-black rounded-lg justify-center uppercase my-3 gap-4">
            <button
              onClick={() => filterByCategory("All")}
              className={`${
                click === "All" &&
                "bg-primaryLight border text-white transition-all duration-700"
              } md:border-none  rounded-lg p-3`}
            >
              All
            </button>
            <button
              onClick={() => filterByCategory("Main Dishes")}
              className={`${
                click === "Main Dishes" &&
                "bg-primaryLight text-white transition-all duration-700"
              }  border md:border-none  rounded-lg p-3`}
            >
              Main Dishes
            </button>
            <button
              onClick={() => filterByCategory("Desserts")}
              className={`${
                click === "Desserts" &&
                "bg-primaryLight text-white transition-all duration-700"
              } border md:border-none  rounded-lg p-3`}
            >
              Desserts
            </button>
            <button
              onClick={() => filterByCategory("Sea Food")}
              className={`${
                click === "Sea Food" &&
                "bg-primaryLight  text-white transition-all duration-700"
              }  border md:border-none  rounded-lg p-3`}
            >
              Sea Food
            </button>
            <button
              onClick={() => filterByCategory("Beverage")}
              className={`${
                click === "Beverage" &&
                "bg-primaryLight text-white transition-all duration-700"
              }  border md:border-none  rounded-lg p-3`}
            >
              Beverage
            </button>
          </div>
        </div>
        <div className="mt-8 px-3 lg:px-0 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 md:gap-6 gap-4 lg:gap-10">
          {/* cards 1 */}
          {filterData.map((food) => (
            <>
              <div className="rounded-xl border lg::w-[412px] max-h-[515px]">
                <div className="overflow-hidden rounded-t-xl">
                  <Image
                    className="transition-all object-cover lg:w-[385px] bg-center duration-700 hover:scale-110 rounded-t-xl h-[310px]"
                    width={385}
                    height={310}
                    src={food?.image}
                    alt="image"
                  />
                </div>
                <div className="md:w-1/2 w-3/5 -mt-12 rounded-tr-xl p-4 relative  bg-white flex items-center gap-2 justify-between">
                  <p className="flex items-center font-medium">
                    <FaStar className="text-orange-400" /> {"4.8(5.4k)"}
                  </p>
                  <div className="flex gap-1 items-center">
                    <p className="line-through">$35</p>
                    <p className="font-bold text-xl">${food?.price}</p>
                  </div>
                </div>

                <div className="p-4 pt-2">
                  <Link
                    href={`/menu/${food?._id}`}
                    className="text-2xl hover:underline font-semibold mb-3"
                  >
                    {food?.title}
                  </Link>

                  <p>{food?.description.slice(0, 80)}</p>
                  <button
                    onClick={() => handleCart(food)}
                    className="flex mt-3 justify-center w-full items-center text-medium gap-2 border rounded-full hover:text-white p-3 transition-all duration-700 hover:bg-primaryLight"
                  >
                    <IoCartOutline /> Add to cart
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
