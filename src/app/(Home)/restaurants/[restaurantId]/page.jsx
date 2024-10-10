"use client"
import Image from "next/image";
import { IoStarSharp, IoCartOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
// import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function RestaurantD({ params }) {

  const [foods, setFoods] = useState([]);
  const [restaurants, setRestaurant] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/restaurents")
      .then(res => res.json())
      .then(data => setRestaurant(data))
  }, [])

  const restaurant = restaurants.find(restaurent => restaurent._id === params.restaurantId)

  useEffect(() => {
    fetch("http://localhost:5000/menus")
      .then(res => res.json())
      .then(data => setFoods(data))
  }, [])


  if (!restaurant || foods.length === 0) {
    return <div>Loading...</div>;
  }
  console.log("Foods:", foods);

  // Ensure the comparison is case-insensitive and trims extra spaces
  const restaurantMenus = foods.filter(food =>
    food.restaurant?.trim().toLowerCase() === restaurant?.restaurantName?.trim().toLowerCase()
  );
  console.log(restaurantMenus);

  return (
    <div className="w-10/12 mx-auto">
      <div className="mb-5 relative">
        <Image src={restaurant.restaurantImage} width={900} height={450} alt="restaurant image" className="h-52 md:h-80 lg:h-[450px] rounded-xl" />
        <div className="flex gap-4 absolute right-6 md:right-8 lg:right-10 top-6 md:top-8 lg:top-10">
          <div className="rounded-full p-3 bg-[#FFFFFF] md:w-11">
            <FiHeart className="md:text-xl" />
          </div>
          <div className="rounded-full p-3 bg-[#FFFFFF] md:w-11">
            <BsThreeDots className="md:text-xl" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold">{restaurant.restaurantName}</h1>
        <p className="text-sm w-10/12 md:w-9/12 lg:w-7/12 text-[#677480]">{restaurant.description} </p>
        <h1 className="flex items-center gap-1 text-[#677480]">{restaurant.location}</h1>
        <h1 className="flex items-center gap-1 text-[#677480]">{restaurant.openTime} - {restaurant.closeTime}</h1>
        <h1 className="flex items-center gap-1 text-[#677480]">{restaurant.rating} <IoStarSharp className="text-lg" /></h1>
      </div>
      <hr className="my-3" />
      {/* Discount */}
      {/* <div className="my-10">
                <h3 className="text-2xl text-[#FF4D00] text-center font-semibold">Available Deals</h3>
            </div>
            <hr className="my-3"/> */}
      {/* all Foods */}

      <div className="">
        <div className="my-10 lg:max-w-[1240px] mx-auto">
          <h3 className="text-2xl text-[#FF4D00] text-center font-semibold">Food Menu</h3>
          <h2 className="text-3xl mb-3 text-center font-bold">Our Specials Menu</h2>
          <div className="mt-5">
            <div className="mt-8 px-3 lg:px-0 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 md:gap-6 gap-4 lg:gap-10">
              {/* cards 1 */}
              {
                restaurantMenus.map(menus =>
                <div className="rounded-xl border lg::w-[412px] max-h-[515px]" key={menus._id}>
                <div className="overflow-hidden rounded-t-xl">
                  <Image src={menus.image} alt="food image" width={500} height={400} className="transition-all object-cover lg:w-[385px] bg-center duration-700 hover:scale-110 rounded-t-xl h-[310px]" />
                </div>
                <div className="md:w-1/2 w-3/5 -mt-12 rounded-tr-xl p-4 relative  bg-white flex items-center gap-2 justify-between">
                  <p className="flex items-center font-medium"><FaStar className="text-orange-400" /> {"4.8(5.4k)"}</p>
                  <div className="flex gap-1 items-center">
                    <p className="line-through">${menus.MRP}</p>
                    <p className="font-bold text-xl">${menus.price}</p>
                  </div>
                </div>

                <div className="p-4 pt-2">


                  {/* <Link className="text-2xl hover:underline font-semibold mb-3">Biriyani</Link> */}
                  <h2 className="text-2xl hover:underline font-semibold mb-3">{menus.title}</h2>

                  <p>{menus?.description.slice(0,80)}</p>
                  <button className="flex mt-3 justify-center w-full items-center text-medium gap-2 border rounded-full hover:text-white p-3 transition-all duration-700 hover:bg-[#FF4D00]"><IoCartOutline /> Add to cart</button>
                </div>
              </div>
        )
              }
              
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      {/* Review */}
      {/* <div className="my-10">
        <h3 className="text-2xl text-[#FF4D00] text-center font-semibold">Review</h3>
        <div>
          <div className="">
            <h1>4.8</h1>
            <h1></h1>
            <h1></h1>
          </div>
          <div className=""></div>
        </div>
      </div> */}
    </div>
  )
}