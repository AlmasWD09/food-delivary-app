"use client";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Restaurants() {
  const [restaurants, setRestaurant] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/restaurents?search=${search}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data.restaurents));
  }, [search]);
  console.log(restaurants)

  const handleSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const search = form.get("search");
    console.log(search);
    setSearch(search);
  };

  return (
    <>
      {/* Search and Banner */}
      <div
        className="text-center py-10 md:p-32 mb-8"
        style={{
          backgroundImage:`linear-gradient(
        rgba(0, 0, 0, 0.6), 
        rgba(0, 0, 0, 0.9)
      ),  url('/assets/Bg restaurant.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="m-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins text-gray-300 font-semibold mb-3">
            Restaurants & Cafe
          </h1>
          <form
            action=""
            onSubmit={handleSearch}
            id="handleReSet"
            className="flex gap-2 items-center justify-center bg-gray-400 lg:w-9/12 mx-auto py-2 md:py-4 px-2 md:px-4 rounded-lg"
          >
            <input
              type="text"
              name="search"
              className="bg-gray-200 text-sm md:text-base lg:text-lg rounded-lg md:px-4 p-2 w-full outline-none"
              placeholder="Search here by restaurant name...."
            />
            <button className="bg-primaryLight text-white rounded-lg px-2 md:px-4 py-2 border-primary md:text-xl ">
              {" "}
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Card Section */}
      <div className="w-11/12 mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
        {/* 1st Card */}
        {restaurants?.map((restaurant) => (
          <div key={restaurant._id}>
            <div className="mb-5 rounded-md">
              <Image
                src={restaurant?.restaurantImage}
                width={500}
                height={400}
                alt="restaurant image"
                className="h-64 rounded-md"
              />
            </div>
            <div className="grid grid-cols-11 items-center">
              <div className="col-span-4 text-end pr-3">
                <h1 className="font-semibold">
                  {restaurant?.openTime} - {restaurant?.closeTime}
                </h1>
                <h1 className="text-sm">{restaurant?.location}</h1>
              </div>
              <div className="col-span-7 border-l-[1px] pl-3 border-[#cfcfcf] py-1">
                <Link href={`/restaurants/${restaurant._id}`}>
                  <h1 className="text-2xl font-semibold hover:text-[#ea1b25] leading-tight">
                    {restaurant?.restaurantName}
                  </h1>
                </Link>
                <div className="text-[#ea1b25] mt-2 flex gap-7">
                  <h1 className="items-center flex gap-2">
                    <FiHeart className="text-lg" />
                    <span>{restaurant?.favoriteNumber}</span>
                  </h1>
                  <h1 className="items-center flex gap-2">
                    <FaRegComment className="text-lg" />
                    <span>{restaurant?.reviewNumber}</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Restaurent details */}
      {/* <RestaurentD></RestaurentD> */}
    </>
  );
}
