"use client";
import Image from "next/image";
import { IoStarSharp, IoCartOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
// import Link from "next/link";
import { FaSpinner, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import SpecificMenus from "@/components/SpecificMenus";
import RestaurantMap from "@/components/RestaurantMap";
import ReviewModal from "@/components/ReviewModal";
import useResturantReviews from "@/hooks/useResturantReviews";
import { useQuery } from "@tanstack/react-query";

export default function RestaurantD({ params }) {
  const [foods, setFoods] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  console.log("params is ", params.restaurantId);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/restaurents/${params.restaurantId}`
    )
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
      .catch((error) => {
        console.error("Error fetching restaurant:", error);
        setRestaurant(null); // Set to null if there is an error
      });
  }, [params]);

  const name = restaurant?.restaurantName;

  const [data, isLoading, refetch] = useResturantReviews({ name });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/menus`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  if (!restaurant || foods.length === 0 || isLoading) {
    return <div>Loading...</div>;
  }

  // Ensure the comparison is case-insensitive and trims extra spaces
  const restaurantMenus = foods?.filter(
    (food) =>
      food.restaurant?.trim().toLowerCase() ===
      restaurant?.restaurantName?.trim().toLowerCase()
  );
  return (
    <div className="container px-2 mx-auto">
      <div className="mb-5 relative">
        <Image
          src={restaurant?.restaurantImage}
          width={900}
          height={450}
          alt="restaurant image"
          className="h-52 object-cover bg-center w-full md:h-80 lg:h-[450px] rounded-xl"
        />
        <ReviewModal restaurantName={restaurant?.restaurantName} />
      </div>
      <div>
        <div className="flex items-center gap-5">
          <h1 className="text-3xl md:text-4xl font-semibold">
            {restaurant?.restaurantName}
          </h1>
          <h1 className="flex items-center gap-1 text-[#677480]">
            {restaurant?.rating}{" "}
            <IoStarSharp className="text-lg text-orange-400" />
          </h1>
        </div>
        <h1 className="flex items-center gap-1 text-[#677480]">
          {restaurant?.location}
        </h1>
        <h1 className="flex items-center gap-1 text-[#677480]">
          {restaurant?.openTime} - {restaurant?.closeTime}
        </h1>

        <p className="text-sm w-full md:w-9/12 lg:w-7/12 text-[#677480]">
          {restaurant?.description} Papa Johns Pizza (2545 E. Speedway Blvd
          #165) in Tucson offers a variety of classic and specialty pizzas,
          including popular choices like Pepperoni Pizza, Cheese Pizza, and
          Sausage Pizza. Guests can also customize their meals with the Create
          Your Own Pizza option. Beyond pizza, the menu features Papadias – a
          unique flatbread-style sandwich – and a selection of sides such as
          Garlic Parmesan Breadsticks and Cheesesticks. For those with a sweet
          tooth, desserts like the Double Chocolate Chip Brownie and OREO Cookie
          Papa Bites are available.{" "}
        </p>
      </div>
      <hr className="my-3" />
      {/* Discount */}
      <div className="my-10 lg:max-w-[1240px] mx-auto">
        <h3 className="text-2xl  font-semibold">Available Deals</h3>
        {/* discount cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 my-6 gap-6">
          {/* card1 */}
          <div className="flex w-full shadow-lg cursor-pointer hover:bg-primary transition-all duration-700 hover:text-white items-center bg-primaryGray rounded-lg md:rounded-br-full p-3 lg:p-6 gap-3">
            <div className="border-r-2 pr-3">
              <h2 className="text-3xl  font-semibold">10%</h2>
              <p className="text-xl font-semibold">OFF</p>
            </div>

            <div>
              <p className="text-base">For all items</p>
              <h2 className="text-3xl my-1 font-semibold">{`${"'LOVE50'"}`}</h2>
              <p className="text-xs">Min: $50 order</p>
              <p className="text-xs">
                Valid from Oct 1, 2024 <br /> - Oct 31, 2024
              </p>
            </div>
          </div>
          {/* card2 */}
          <div className="flex shadow-lg cursor-pointer hover:bg-primary pl-8 transition-all duration-700 hover:text-white items-center bg-primaryGray rounded-lg md:rounded-tl-full p-3 lg:p-6 gap-3">
            <div className="border-r-2 pr-3">
              <h2 className="text-3xl  font-semibold">18%</h2>
              <p className="text-xl font-semibold">OFF</p>
            </div>

            <div>
              <p className="text-base">For all items</p>
              <h2 className="text-3xl my-1 font-semibold">{`${"'LOVE100'"}`}</h2>
              <p className="text-xs">Min: $100 order</p>
              <p className="text-xs">Valid from Oct 1, 2024 - Oct 31, 2024</p>
            </div>
          </div>
          {/* card3 */}
          <div className="flex shadow-lg cursor-pointer hover:bg-primary transition-all duration-700 hover:text-white items-center bg-primaryGray rounded-lg md:rounded-br-full p-3 lg:p-6 gap-3">
            <div className="border-r-2 pr-3">
              <h2 className="text-3xl  font-semibold">22%</h2>
              <p className="text-xl font-semibold">OFF</p>
            </div>

            <div>
              <p className="text-base">For all items</p>
              <h2 className="text-3xl my-1 font-semibold">{`${"'LOVE150'"}`}</h2>
              <p className="text-xs">Min: $150 order</p>
              <p className="text-xs">Valid from Oct 1, 2024 - Oct 31, 2024</p>
            </div>
          </div>
          {/* card4 */}
          <div className="flex shadow-lg cursor-pointer hover:bg-primary pl-8 transition-all duration-700 hover:text-white items-center bg-primaryGray rounded-lg md:rounded-tl-full p-3 lg:p-6 gap-3">
            <div className="border-r-2 pr-3">
              <h2 className="text-3xl  font-semibold">25%</h2>
              <p className="text-xl font-semibold">OFF</p>
            </div>

            <div>
              <p className="text-base">For all items</p>
              <h2 className="text-3xl my-1 font-semibold">{`${"'TOPSERVE'"}`}</h2>
              <p className="text-xs">Min: less $150 order</p>
              <p className="text-xs">Valid from Oct 1, 2024 - Oct 31, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* all Foods */}

      <div className="">
        <div className="my-16 lg:max-w-[1240px] mx-auto">
          <h2 className="text-3xl mb-3 font-bold">Menu items</h2>
          {/*  */}
          <SpecificMenus restaurantMenus={restaurantMenus} />
          {/*  */}
        </div>
      </div>
      {/* Review */}
      <div className="my-10 lg:max-w-[1240px] mx-auto">
        <h3 className="text-2xl   font-semibold">Rating and Reviews</h3>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.length > 0 ? (
            data?.map((review) => (
              <>
                <div className="border hover:shadow-lg p-6 rounded-lg">
                  <h1 className="text-orange-500 flex items-center justify-center gap-2">
                    {Array(review?.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>
                          <FaStar />
                        </span>
                      ))}
                  </h1>
                  <h1 className="text-xl font-semibold my-2 text-center">
                    {review?.userName}
                  </h1>
                  <h1 className="text-sm text-center">{review?.review}</h1>
                </div>
              </>
            ))
          ) : (
            <>
              <div className="p-10">
                <h4 className="text-s text-center">
                  This restaurant have not any reviews
                </h4>
                {isLoading && (
                  <p>
                    <FaSpinner className="animate-spin" />
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="my-10">
        <RestaurantMap location={restaurant?.location} />
      </div>
    </div>
  );
}
