"use client";
import React, { useState } from "react";
import Image from "next/image";
import rightArrow from "../../public/assets/rightArrow.png";
import cheeseBurger from "../../public/assets/cheeseBurger.jpg";
import { GiChickenOven } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa6";
import { IoPricetagsOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { IoIceCream } from "react-icons/io5";
import { GiTropicalFish } from "react-icons/gi";

// Sample data for each food category
const mainDishes = [
  { name: "Chicken Curry", price: 1200, rating: 4.5 },
  { name: "Beef Steak", price: 1500, rating: 4.7 },
  { name: "Grilled Salmon", price: 1700, rating: 4.8 },
  { name: "Spaghetti", price: 900, rating: 4.2 },
  { name: "Lasagna", price: 1100, rating: 4.6 },
];
const beverages = [
  { name: "Coke", price: 150, rating: 4.0 },
  { name: "Orange Juice", price: 200, rating: 4.5 },
  { name: "Water", price: 100, rating: 4.3 },
  { name: "Smoothie", price: 250, rating: 4.6 },
  { name: "Orange Juice", price: 200, rating: 4.5 },
  { name: "Water", price: 100, rating: 4.3 },
  { name: "Smoothie", price: 250, rating: 4.6 },
  { name: "Coke", price: 150, rating: 4.0 },
  { name: "Orange Juice", price: 200, rating: 4.5 },
  { name: "Water", price: 100, rating: 4.3 },
];
const desserts = [
  { name: "Ice Cream", price: 300, rating: 4.7 },
  { name: "Cake", price: 400, rating: 4.6 },
  { name: "Brownie", price: 350, rating: 4.8 },
  { name: "Donut", price: 200, rating: 4.5 },
];
const seaFoods = [
  { name: "Shrimp", price: 1300, rating: 4.5 },
  { name: "Lobster", price: 2500, rating: 4.9 },
  { name: "Crab", price: 1700, rating: 4.6 },
  { name: "Oysters", price: 800, rating: 4.3 },
];

const TopSell = () => {
  const [isActive, setActive] = useState(1); // To track which category is selected
  const [pageActive, setPageActive] = useState(1); // To track which page is active

  // Function to get the right data based on category
  const getActiveData = () => {
    if (isActive === 1) return mainDishes;
    if (isActive === 2) return beverages;
    if (isActive === 3) return desserts;
    if (isActive === 4) return seaFoods;
  };

  const data = getActiveData();
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the items to be displayed on the current page
  const currentPageData = data.slice(
    (pageActive - 1) * itemsPerPage,
    pageActive * itemsPerPage
  );

  return (
    <div>
      <div className="container lg:h-[600px] mx-auto">
        <div className="lg:flex">
          {/* ---- Left side ---- */}
          <div
            className="lg:basis-2/5 h-[600px] flex justify-center items-center"
            style={{
              backgroundImage: `url(https://i.ibb.co.com/f90qpHt/top-Sell-BG.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="h-[410px] w-[350px] flex flex-col">
              <div className="flex-grow relative">
                <h3 className="text-white leading-[60px] font-bold text-5xl">
                  Our Top Selling Food
                </h3>
              </div>

              {/* --category sections-- */}
              <div className="flex-end space-y-2">
                <div
                  onClick={() => { setActive(1); setPageActive(1); }}
                  className={
                    isActive === 1
                      ? "px-4 py-2 w-full h-[50px] bg-primary rounded-md text-white flex justify-between items-center"
                      : "px-4 py-2 border-2 border-white w-full h-[50px] rounded-md text-white flex justify-between items-center"
                  }
                >
                  <h3 className="font-bold text-[18px]">MAIN DISHES</h3>
                  <GiChickenOven className="text-[28px]" />
                </div>
                <div
                  onClick={() => { setActive(2); setPageActive(1); }}
                  className={
                    isActive === 2
                      ? "px-4 py-2 w-full h-[50px] bg-primary rounded-md text-white flex justify-between items-center"
                      : "px-4 py-2 border-2 border-white w-full h-[50px] rounded-md text-white flex justify-between items-center"
                  }
                >
                  <h3 className="font-bold text-[18px]">BEVERAGE</h3>
                  <MdEmojiFoodBeverage className="text-[28px]" />
                </div>
                <div
                  onClick={() => { setActive(3); setPageActive(1); }}
                  className={
                    isActive === 3
                      ? "px-4 py-2 w-full h-[50px] bg-primary rounded-md text-white flex justify-between items-center"
                      : "px-4 py-2 border-2 border-white w-full h-[50px] rounded-md text-white flex justify-between items-center"
                  }
                >
                  <h3 className="font-bold text-[18px]">DESSERT</h3>
                  <IoIceCream className="text-[28px]" />
                </div>
                <div
                  onClick={() => { setActive(4); setPageActive(1); }}
                  className={
                    isActive === 4
                      ? "px-4 py-2 w-full h-[50px] bg-primary rounded-md text-white flex justify-between items-center"
                      : "px-4 py-2 border-2 border-white w-full h-[50px] rounded-md text-white flex justify-between items-center"
                  }
                >
                  <h3 className="font-bold text-[18px]">SEA FOOD</h3>
                  <GiTropicalFish className="text-[28px]" />
                </div>
              </div>
            </div>
          </div>

          {/* ---- Right side (Cards section) ---- */}
          <div className="lg:basis-[60%] lg:h-[600px] bg-[#f8e5c8] lg:flex lg:justify-center lg:items-center">
            <div className="lg:mt-0 mt-[20px] h-[410px] lg:w-[600px] flex flex-col space-y-4 justify-center items-center">
              {currentPageData.map((item, index) => (
                <div key={index} className="p-3 flex h-[90px] lg:w-[500px] bg-white rounded-md shadow-md">
                  <div className="h-[70px] min-w-[70px] rounded-md">
                    <Image
                      src={cheeseBurger}
                      className="h-[70px] min-w-[70px] max-w-[70px] rounded-md"
                      alt="Food Image"
                    />
                  </div>
                  <div>
                    <div className="ml-[15px]">
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center space-x-4">
                          <h3 className="text-[15px] font-bold text-[#151515]">
                            {item.name}
                          </h3>
                          <div className="flex justify-center items-center space-x-1 text-[12px]">
                            <IoPricetagsOutline className="text-green-400" />
                            <p>{item.price}</p>
                          </div>
                          <div className="flex justify-center items-center space-x-1 text-primary">
                            <FaRegStar />
                            <h3>{item.rating}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-[4px]">
                        <p className="w-[70%] text-[12px] font-normal">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button className="flex-end w-[28px] h-[28px] rounded-full border-[1px] border-primary flex justify-center items-center">
                          <CiLocationArrow1 className="text-primary" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="w-[450px] lg:w-[0px] lg:space-y-2 space-x-2 lg:space-x-0 mt-[20px] flex lg:flex-col justify-center items-center">
              {[...Array(totalPages).keys()].map((i) => (
                <div
                  key={i + 1}
                  onClick={() => setPageActive(i + 1)}
                  className={
                    pageActive === i + 1
                      ? "flex justify-center items-center w-[28px] h-[28px] bg-primary text-white rounded-full"
                      : "flex justify-center items-center w-[28px] h-[28px] border-[2px] border-white text-primary rounded-full"
                  }
                >
                  <h3>{i + 1}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSell;