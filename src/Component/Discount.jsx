import React from "react";
import Image from "next/image";
import discount from "../../public/discount.png";
import restaurant1 from "../../public/restaurant1.jpg";
import cheeseBurger from "../../public/cheeseBurger.jpg";
import chickenFry from "../../public/chickenFry.jpg";
import spicyBurger from "../../public/spicyBurger.jpg";
import shape1 from "../../public/shape1.png";
import { FaStar } from "react-icons/fa6";
import { IoIosStarHalf } from "react-icons/io";
import {
  BiSolidSkipNextCircle,
  BiSolidSkipPreviousCircle,
} from "react-icons/bi";

const Discount = () => {
    return (
        <div className=" lg:w-[1200px] mx-auto">
      <div className="flex flex-col justify-center items-center ">
        {/* Title Part */}
        <div className="mt-[100px]  ">
          <Image src={discount} className="w-[250px]" alt="Discount" />
        </div>

        {/* Carousel Part */}
        <div className="carousel  w-full mt-[10px] mb-[100px]">
          <div
            id="slide1"
            className="carousel-item  relative w-full justify-center"
          >
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 justify-between">
              <div
                id="container"
                className="flex flex-col justify-center items-center relative h-[550px]"
              >
                <div className="w-[280px] h-[350px] bg-[#f9c94fdd] relative ">
                  <div className="w-[154px] h-[154px] bg-[#f9c94fdd] rounded-full  z-[110] absolute right-[25%] top-[-20%] flex justify-center items-center">
                    <Image
                      src={cheeseBurger}
                      className="w-[150px] h-[150px] rounded-full"
                      alt="Discount"
                    />
                  </div>
                  <div className="w-[280px] h-[350px] bg-[#151615dd] z-[100] absolute right-[8px] bottom-[8px]">
                    <div className="relative">
                      <h3 className="mt-[38%] text-[18px] text-center font-bold  text-[#f9c94fdd]">
                        Cheese Burger
                      </h3>
                      <p className="text-white font-normal p-[10px] text-[13px] text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Iste fugiat, omnis quis dolorem eveniet
                        perferendis sed tempore fugit?
                      </p>

                      <div className="flex justify-center space-x-2 mt-[13px] text-[#f9c94fdd]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <IoIosStarHalf />
                      </div>

                      <div className="absolute right-[-8%]">
                        <Image
                          src={shape1}
                          className="w-[150px] "
                          alt="shape"
                        />                        
                      </div>
                      <h3 className="text-white font-bold absolute top-[115%] right-6">50% <span className="text-[10px] font-extralight">Discount</span></h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="container"
                className="flex flex-col justify-center items-center relative h-[550px]"
              >
                <div className="w-[280px] h-[350px] bg-[#f9c94fdd] relative ">
                  <div className="w-[154px] h-[154px] bg-[#f9c94fdd] rounded-full  z-[110] absolute right-[25%] top-[-20%] flex justify-center items-center">
                    <Image
                      src={chickenFry}
                      className="w-[150px] h-[150px] rounded-full"
                      alt="Discount"
                    />
                  </div>
                  <div className="w-[280px] h-[350px] bg-[#151615dd] z-[100] absolute right-[8px] bottom-[8px]">
                    <div className="relative">
                      <h3 className="mt-[38%] text-[18px] text-center font-bold  text-[#f9c94fdd]">
                        chicken fries
                      </h3>
                      <p className="text-white font-normal p-[10px] text-[13px] text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Iste fugiat, omnis quis dolorem eveniet
                        perferendis sed tempore fugit?
                      </p>

                      <div className="flex justify-center space-x-2 mt-[13px] text-[#f9c94fdd]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <IoIosStarHalf />
                      </div>

                      <div className="absolute right-[-8%]">
                        <Image
                          src={shape1}
                          className="w-[150px] "
                          alt="shape"
                        />                        
                      </div>
                      <h3 className="text-white font-bold absolute top-[115%] right-6">30% <span className="text-[10px] font-extralight">Discount</span></h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="container"
                className="flex flex-col justify-center items-center relative h-[550px]"
              >
                <div className="w-[280px] h-[350px] bg-[#f9c94fdd] relative ">
                  <div className="w-[154px] h-[154px] bg-[#f9c94fdd] rounded-full  z-[110] absolute right-[25%] top-[-20%] flex justify-center items-center">
                    <Image
                      src={spicyBurger}
                      className="w-[150px] h-[150px] rounded-full"
                      alt="Discount"
                    />
                  </div>
                  <div className="w-[280px] h-[350px] bg-[#151615dd] z-[100] absolute right-[8px] bottom-[8px]">
                    <div className="relative">
                      <h3 className="mt-[38%] text-[18px] text-center font-bold  text-[#f9c94fdd]">
                        spicy Burger
                      </h3>
                      <p className="text-white font-normal p-[10px] text-[13px] text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Iste fugiat, omnis quis dolorem eveniet
                        perferendis sed tempore fugit?
                      </p>

                      <div className="flex justify-center space-x-2 mt-[13px] text-[#f9c94fdd]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <IoIosStarHalf />
                      </div>

                      <div className="absolute right-[-8%]">
                        <Image
                          src={shape1}
                          className="w-[150px] "
                          alt="shape"
                        />                        
                      </div>
                      <h3 className="text-white font-bold absolute top-[115%] right-6">25% <span className="text-[10px] font-extralight">Discount</span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2">
                <BiSolidSkipPreviousCircle className="text-3xl" />
              </a>
              <a href="#slide2">
                <BiSolidSkipNextCircle className="text-3xl" />
              </a>
            </div>
          </div>
          {/* <div id="slide2" className="carousel-item relative w-full">
            <p className="mx-auto">Hello</p>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1">
                <BiSolidSkipPreviousCircle className="text-3xl" />
              </a>
              <a href="#slide1">
                <BiSolidSkipNextCircle className="text-3xl" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    );
};

export default Discount;