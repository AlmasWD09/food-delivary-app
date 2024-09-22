import React from "react";
import Image from "next/image";
import rightArrow from "../../public/assets/rightArrow.png";
import { GiChickenOven } from "react-icons/gi";

const TopSell = () => {
  return (
    <div>
      <div className="lg:max-w-[1240px] h-[600px] mx-auto my-[100px]">
        <div className="flex">
          {/* ----most Left side div---- */}
          <div
            className="basis-2/5 h-[600px] flex justify-center items-center"
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
                <div className=" px-4 py-2 w-full h-[50px] bg-primary rounded-md text-white flex justify-between items-center">
                  <h3 className="font-bold text-[18px]">MAIN DISHES</h3>
                  <GiChickenOven className="text-[28px]" />
                </div>
                {/* Beverage */}
                <div className=" px-4 py-2 w-full h-[50px] border-2 border-white rounded-md text-white flex justify-between items-center">
                  <h3 className="font-bold text-[18px]">BEVERAGE</h3>
                  <GiChickenOven className="text-[28px]" />
                </div>
                {/* Dessert*/}
                <div className=" px-4 py-2 w-full h-[50px] border-2 border-white rounded-md text-white flex justify-between items-center">
                  <h3 className="font-bold text-[18px]">DESSERT</h3>
                  <GiChickenOven className="text-[28px]" />
                </div>
                {/* Sea Food */}
                <div className=" px-4 py-2 w-full h-[50px] border-2 border-white rounded-md text-white flex justify-between items-center">
                  <h3 className="font-bold text-[18px]">SEA FOOD</h3>
                  <GiChickenOven className="text-[28px]" />
                </div>
              </div>
            </div>
          </div>

          {/* ----most Right side div---- */}
          <div className="basis-[60%] h-[600px] bg-slate-100 flex justify-center items-center">
            <div className="h-[410px] w-[600px] bg-green-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSell;
