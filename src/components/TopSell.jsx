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

const TopSell = () => {

  const[isActive,setActive] = useState(1);
  const[pageActive,setpageActive] = useState(1);

  return (
    <div>
      <div className="lg:max-w-[1240px] h-[600px] mx-auto my-[100px]">
        <div className="lg:flex">
          {/* ----most Left side div---- */}
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
              {/* ---heading section--- */}
              <div className="flex-grow relative">
                <h3 className="text-white leading-[60px] font-bold text-5xl">
                  Our Top Selling Food
                </h3>
                <div className="absolute right-[1px] bottom-[65px]">
                  <Image
                    src={rightArrow}
                    className="w-[235px]"
                    alt="rightArrow"
                  />
                </div>
              </div>

              {/* --type sections-- */}
              <div className="flex-end space-y-2">
                {/* main dish */}
                <div onClick={() => setActive(1)} className={isActive===1?"px-4 py-2 w-full h-[50px] bg-primary rounded-md text-white flex justify-between items-center" : "px-4 py-2 border-2 border-white  w-full h-[50px]  rounded-md text-white flex justify-between items-center"}>
                  <h3 className="font-bold text-[18px]">MAIN DISHES</h3>
                  <GiChickenOven className="text-[28px]" />
                </div>
                {/* Beverage */}
                <div onClick={() => setActive(2)} className={isActive===2?"px-4 py-2 w-full h-[50px] bg-primary rounded-md text-white flex justify-between items-center" : "px-4 py-2 border-2 border-white  w-full h-[50px]  rounded-md text-white flex justify-between items-center"}>
                  <h3 className="font-bold text-[18px]">BEVERAGE</h3>
                  <MdEmojiFoodBeverage className="text-[28px]" />
                </div>
                {/* Dessert*/}
                <div onClick={() => setActive(3)} className={isActive===3?"px-4 py-2 w-full h-[50px] bg-primary rounded-md text-white flex justify-between items-center" : "px-4 py-2 border-2 border-white  w-full h-[50px]  rounded-md text-white flex justify-between items-center"}>
                  <h3 className="font-bold text-[18px]">DESSERT</h3>
                  <IoIceCream className="text-[28px]" />
                </div>
                {/* Sea Food */}
                <div onClick={() => setActive(4)} className={isActive===4?"px-4 py-2 w-full h-[50px] bg-primary rounded-md text-white flex justify-between items-center" : "px-4 py-2 border-2 border-white  w-full h-[50px]  rounded-md text-white flex justify-between items-center"}>
                  <h3 className="font-bold text-[18px]">SEA FOOD</h3>
                  <GiTropicalFish className="text-[28px]" />
                </div>
              </div>
            </div>
          </div>

          {/* ----most Right side div---- */}
          <div className="lg:basis-[60%] lg:h-[600px] bg-[#f8e5c8] lg:flex lg:justify-center lg:items-center">
            {/* --card container--  */}
            <div className=" lg:mt-0 mt-[20px] h-[410px] lg:w-[600px] flex flex-col space-y-4 justify-center items-center">

              {/* single card */}
              <div className="mt-[20px] lg:mt-0 p-3 flex h-[90px] lg:w-[500px]  bg-white rounded-md shadow-md">
                <div className="h-[70px] min-w-[70px] rounded-md">
                  <Image
                    src={cheeseBurger}
                    className="h-[70px] min-w-[70px] max-w-[70px] rounded-md"
                    alt="Discount"
                  />
                </div>
                <div>
                  <div className="ml-[15px]">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-center items-center space-x-4">
                        <h3 className="text-[15px] font-bold text-[#151515]">
                          Chicken Curry
                        </h3>
                        <div className="flex justify-center items-center space-x-1 text-[12px]">
                          <IoPricetagsOutline className="text-green-400" />
                          <p>1200</p>
                        </div>
                        <div className="flex justify-center items-center space-x-1 text-primary">
                          <FaRegStar />
                          <h3>4.5</h3>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[4px]">
                      <p className="w-[70%]  text-[12px] font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit consectetur quod, sit.
                      </p>
                      <button className="flex-end w-[28px] h-[28px] rounded-full border-[1px] border-primary flex justify-center items-center">
                        <CiLocationArrow1 className="text-primary" />
                      </button>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              {/* single card */}
              <div className="p-3 flex h-[90px] lg:w-[500px]  bg-white rounded-md shadow-md">
                <div className="h-[70px] min-w-[70px] rounded-md">
                  <Image
                    src={cheeseBurger}
                    className="h-[70px] min-w-[70px] max-w-[70px] rounded-md"
                    alt="Discount"
                  />
                </div>
                <div>
                  <div className="ml-[15px]">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-center items-center space-x-4">
                        <h3 className="text-[15px] font-bold text-[#151515]">
                          Chicken Curry
                        </h3>
                        <div className="flex justify-center items-center space-x-1 text-[12px]">
                          <IoPricetagsOutline className="text-green-400" />
                          <p>1200</p>
                        </div>
                        <div className="flex justify-center items-center space-x-1 text-primary">
                          <FaRegStar />
                          <h3>4.5</h3>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[4px]">
                      <p className="w-[70%]  text-[12px] font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit consectetur quod, sit.
                      </p>
                      <button className="flex-end w-[28px] h-[28px] rounded-full border-[1px] border-primary flex justify-center items-center">
                        <CiLocationArrow1 className="text-primary" />
                      </button>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              {/* single card */}
              <div className="p-3 flex h-[90px] lg:w-[500px]  bg-white rounded-md shadow-md">
                <div className="h-[70px] min-w-[70px] rounded-md">
                  <Image
                    src={cheeseBurger}
                    className="h-[70px] min-w-[70px] max-w-[70px] rounded-md"
                    alt="Discount"
                  />
                </div>
                <div>
                  <div className="ml-[15px]">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-center items-center space-x-4">
                        <h3 className="text-[15px] font-bold text-[#151515]">
                          Chicken Curry
                        </h3>
                        <div className="flex justify-center items-center space-x-1 text-[12px]">
                          <IoPricetagsOutline className="text-green-400" />
                          <p>1200</p>
                        </div>
                        <div className="flex justify-center items-center space-x-1 text-primary">
                          <FaRegStar />
                          <h3>4.5</h3>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[4px]">
                      <p className="w-[70%]  text-[12px] font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit consectetur quod, sit.
                      </p>
                      <button className="flex-end w-[28px] h-[28px] rounded-full border-[1px] border-primary flex justify-center items-center">
                        <CiLocationArrow1 className="text-primary" />
                      </button>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              {/* single card */}
              <div className="p-3 flex h-[90px] lg:w-[500px]  bg-white rounded-md shadow-md">
                <div className="h-[70px] min-w-[70px] rounded-md">
                  <Image
                    src={cheeseBurger}
                    className="h-[70px] min-w-[70px] max-w-[70px] rounded-md"
                    alt="Discount"
                  />
                </div>
                <div>
                  <div className="ml-[15px]">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-center items-center space-x-4">
                        <h3 className="text-[15px] font-bold text-[#151515]">
                          Chicken Curry
                        </h3>
                        <div className="flex justify-center items-center space-x-1 text-[12px]">
                          <IoPricetagsOutline className="text-green-400" />
                          <p>1200</p>
                        </div>
                        <div className="flex justify-center items-center space-x-1 text-primary">
                          <FaRegStar />
                          <h3>4.5</h3>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[4px]">
                      <p className="w-[70%]  text-[12px] font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit consectetur quod, sit.
                      </p>
                      <button className="flex-end w-[28px] h-[28px] rounded-full border-[1px] border-primary flex justify-center items-center">
                        <CiLocationArrow1 className="text-primary" />
                      </button>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>

              
            </div>

            {/* Pagination */}
            <div className="w-[450px] lg:w-[0px] lg:space-y-2 space-x-2 lg:space-x-0 mt-[20px] flex lg:flex-col justify-center items-center">
              <div onClick={()=>setpageActive(1)} className={pageActive===1? "flex justify-center items-center w-[28px] h-[28px] bg-primary text-white rounded-full":"flex justify-center items-center w-[28px] h-[28px] border-[2px] border-white text-primary rounded-full"}>
                <h3>1</h3>
              </div>
              <div onClick={()=>setpageActive(2)} className={pageActive===2? "flex justify-center items-center w-[28px] h-[28px] bg-primary text-white rounded-full":"flex justify-center items-center w-[28px] h-[28px] border-[2px] border-white text-primary rounded-full"} >
                <h3 >2</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSell;
