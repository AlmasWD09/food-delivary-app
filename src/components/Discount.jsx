"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Pagination } from "swiper/modules";

import { CiLocationArrow1 } from "react-icons/ci";
import { IoRestaurant } from "react-icons/io5";

const Discount = () => {
  const [hover, setHover] = useState(0);
  return (
    <div>
      <div className="mt-10 container mx-auto">
        {/* ----background Pattern image && Container---- */}
        <div
          className="h-[500px] py-8 px-4 space-y-[50px]"
          style={{
            backgroundImage: `url(https://i.ibb.co.com/CVdvL3Q/food-Pattern.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* --- heading section ---   */}
          <div>
            <div className="flex flex-col justify-center items-center text-center ">
              <IoRestaurant className="text-[#68ee5c] text-2xl" />
              <div className="leading-6 mt-[5px]">
                <h3 className="font-normal text-[13px] tracking-[.35rem]">
                  MENU FOR EVERY TASTE
                </h3>
                <h3 className="font-bold text-3xl text-[#666666] tracking-[.07rem]">
                  Choose your meal plan{" "}
                </h3>
              </div>
            </div>
          </div>

          {/* ---slider section--- */}
          <div>
            <div className="">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{
                  padding: "20px",
                  "--swiper-pagination-bottom": "-2%",
                  "--swiper-pagination-bullet-width": "80px",
                  "--swiper-pagination-bullet-height": "2px",
                  "--swiper-pagination-color": "#d97706",
                  "--swiper-pagination-bullet-inactive-color": "#9b9b9b",
                  "--swiper-pagination-bullet-inactive-opacity": "1",
                  "--swiper-pagination-bullet-size": "16px",
                  "--swiper-pagination-bullet-horizontal-gap": "6px",
                }}
              >
                <SwiperSlide
                  style={{
                    height: "250px",
                    position: "relative",
                  }}
                  className="relative z-10 "
                >
                  {/* upper discount part */}
                  <div className="absolute top-[-8%] left-[8%] z-50 flex p-3 rounded-md bg-primary text-white">
                    <h3 className="font-semibold text-[16px]">$17</h3>
                    <sub className="text-sm font-thin">/per</sub>
                  </div>

                  {/* --card-- */}
                  <div
                    onMouseEnter={() => setHover(1)}
                    onMouseLeave={() => setHover(0)}
                    className={`flex items-center transition duration-300    ${
                      hover === 1
                        ? "bg-[#68ee5c]  -translate-y-4 transition-delay-400"
                        : "bg-white  transition-transform transform "
                    }`}
                  >
                    {/* card img */}
                    <div
                      style={{
                        backgroundImage: `url(https://i.ibb.co.com/N6PRdt7/foodIMG.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="basis-1/3 h-[250px] rounded-tr-full rounded-br-full"
                    ></div>

                    {/* card details */}
                    <div className="ml-[24px]">
                      {/* heading */}
                      <div className="text-left ">
                        <h3 className="">Chickhen Curry</h3>
                        <h3
                          className={`${
                            hover === 1 ? "text-[#ffffff]" : "text-[#68ee5c]"
                          }`}
                        >
                          $85<span className="text-sm font-light">only </span>{" "}
                          <span className="line-through text-[#a5a5a5] text-sm">
                            $99
                          </span>
                        </h3>
                      </div>

                      {/* bullet points */}
                      <div className="mt-[10px] text-left text-[13px] font-light">
                        <div>
                          <ul
                            style={{
                              listStyleType: "disc",
                              listStylePosition: "inside",
                              margin: "0",
                              padding: "0",
                            }}
                            className={`${
                              hover === 1
                                ? "marker:text-white "
                                : "marker:text-[#d97706]"
                            }`}
                          >
                            <li>Lorem ipsum dolor sit amet elit.</li>
                            <li>Lorem ipsum dolor elit.</li>
                            <li>Lorem ipsum dolor sit amet elit.</li>
                          </ul>
                        </div>
                      </div>

                      {/* button */}
                      <div className="mt-[10px] text-left text-[14px] font-normal ">
                        <button className="flex justify-center items-center space-x-2">
                          <p
                            className={` ${
                              hover === 1 ? "text-white text-[14px] " : ""
                            }`}
                          >
                            Details
                          </p>{" "}
                          <CiLocationArrow1
                            className={` ${
                              hover === 1
                                ? "text-white text-[14px] rotate-45"
                                : "text-primary transition-transform duration-300 transform "
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  style={{
                    height: "250px",
                    position: "relative",
                  }}
                  className="relative z-10 "
                >
                  {/* upper discount part */}
                  <div className="absolute top-[-8%] left-[8%] z-50 flex p-3 rounded-md bg-primary text-white">
                    <h3 className="font-semibold text-[16px]">$17</h3>
                    <sub className="text-sm font-thin">/per</sub>
                  </div>

                  {/* --card-- */}
                  <div
                    onMouseEnter={() => setHover(2)}
                    onMouseLeave={() => setHover(0)}
                    className={`flex items-center transition duration-300   ${
                      hover === 2
                        ? "bg-[#68ee5c] -translate-y-4 transition-delay-200"
                        : "bg-white transition-transform transform "
                    }`}
                  >
                    {/* card img */}
                    <div
                      style={{
                        backgroundImage: `url(https://i.ibb.co.com/N6PRdt7/foodIMG.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="basis-1/3 h-[250px] rounded-tr-full rounded-br-full"
                    ></div>

                    {/* card details */}
                    <div className="ml-[24px]">
                      {/* heading */}
                      <div className="text-left ">
                        <h3 className="">Chickhen Curry</h3>
                        <h3
                          className={`${
                            hover === 2 ? "text-[#ffffff]" : "text-[#68ee5c]"
                          }`}
                        >
                          $85<span className="text-sm font-light">only </span>{" "}
                          <span className="line-through text-[#a5a5a5] text-sm">
                            $99
                          </span>
                        </h3>
                      </div>

                      {/* bullet points */}
                      <div className="mt-[10px] text-left text-[13px] font-light">
                        <div>
                          <ul
                            style={{
                              listStyleType: "disc",
                              listStylePosition: "inside",
                              margin: "0",
                              padding: "0",
                            }}
                            className={`${
                              hover === 2
                                ? "marker:text-white "
                                : "marker:text-[#d97706]"
                            }`}
                          >
                            <li>Lorem ipsum dolor sit amet elit.</li>
                            <li>Lorem ipsum dolor elit.</li>
                            <li>Lorem ipsum dolor sit amet elit.</li>
                          </ul>
                        </div>
                      </div>

                      {/* button */}
                      <div className="mt-[10px] text-left text-[14px] font-normal ">
                        <button className="flex justify-center items-center space-x-2">
                          <p
                            className={` ${
                              hover === 2 ? "text-white text-[14px] " : ""
                            }`}
                          >
                            Details
                          </p>{" "}
                          <CiLocationArrow1
                            className={` ${
                              hover === 2
                                ? "text-white text-[14px] rotate-45"
                                : "text-primary transition-transform duration-300 transform "
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  style={{
                    height: "250px",
                    position: "relative",
                  }}
                  className="relative z-10 "
                >
                  {/* upper discount part */}
                  <div className="absolute top-[-8%] left-[8%] z-50 flex p-3 rounded-md bg-primary text-white">
                    <h3 className="font-semibold text-[16px]">$17</h3>
                    <sub className="text-sm font-thin">/per</sub>
                  </div>

                  {/* --card-- */}
                  <div
                    onMouseEnter={() => setHover(3)}
                    onMouseLeave={() => setHover(0)}
                    className={`flex items-center transition duration-300   ${
                      hover === 3
                        ? "bg-[#68ee5c] -translate-y-4 transition-delay-200"
                        : "bg-white  transition-transform transform "
                    }`}
                  >
                    {/* card img */}
                    <div
                      style={{
                        backgroundImage: `url(https://i.ibb.co.com/N6PRdt7/foodIMG.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="basis-1/3 h-[250px] rounded-tr-full rounded-br-full"
                    ></div>

                    {/* card details */}
                    <div className="ml-[24px]">
                      {/* heading */}
                      <div className="text-left ">
                        <h3 className="">Chickhen Curry</h3>
                        <h3
                          className={`${
                            hover === 3 ? "text-[#ffffff]" : "text-[#68ee5c]"
                          }`}
                        >
                          $85<span className="text-sm font-light">only </span>{" "}
                          <span className="line-through text-[#a5a5a5] text-sm">
                            $99
                          </span>
                        </h3>
                      </div>

                      {/* bullet points */}
                      <div className="mt-[10px] text-left text-[13px] font-light">
                        <div>
                          <ul
                            style={{
                              listStyleType: "disc",
                              listStylePosition: "inside",
                              margin: "0",
                              padding: "0",
                            }}
                            className={`${
                              hover === 3
                                ? "marker:text-white "
                                : "marker:text-[#d97706]"
                            }`}
                          >
                            <li>Lorem ipsum dolor sit amet elit.</li>
                            <li>Lorem ipsum dolor elit.</li>
                            <li>Lorem ipsum dolor sit amet elit.</li>
                          </ul>
                        </div>
                      </div>

                      {/* button */}
                      <div className="mt-[10px] text-left text-[14px] font-normal ">
                        <button className="flex justify-center items-center space-x-2">
                          <p
                            className={` ${
                              hover === 3 ? "text-white text-[14px] " : ""
                            }`}
                          >
                            Details
                          </p>{" "}
                          <CiLocationArrow1
                            className={` ${
                              hover === 3
                                ? "text-white text-[14px] rotate-45"
                                : "text-primary transition-transform duration-300 transform "
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  style={{
                    height: "250px",
                    position: "relative",
                  }}
                  className="relative z-10 "
                >
                  {/* upper discount part */}
                  <div className="absolute top-[-8%] left-[8%] z-50 flex p-3 rounded-md bg-primary text-white">
                    <h3 className="font-semibold text-[16px]">$17</h3>
                    <sub className="text-sm font-thin">/per</sub>
                  </div>

                  {/* --card-- */}
                  <div
                    onMouseEnter={() => setHover(4)}
                    onMouseLeave={() => setHover(0)}
                    className={`flex items-center transition duration-300   ${
                      hover === 4
                        ? "bg-[#68ee5c] -translate-y-4 transition-delay-200"
                        : "bg-white  transition-transform transform "
                    }`}
                  >
                    {/* card img */}
                    <div
                      style={{
                        backgroundImage: `url(https://i.ibb.co.com/N6PRdt7/foodIMG.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="basis-1/3 h-[250px] rounded-tr-full rounded-br-full"
                    ></div>

                    {/* card details */}
                    <div className="ml-[24px]">
                      {/* heading */}
                      <div className="text-left ">
                        <h3 className="">Chickhen Curry</h3>
                        <h3
                          className={`${
                            hover === 4 ? "text-[#ffffff]" : "text-[#68ee5c]"
                          }`}
                        >
                          $85<span className="text-sm font-light">only </span>{" "}
                          <span className="line-through text-[#a5a5a5] text-sm">
                            $99
                          </span>
                        </h3>
                      </div>

                      {/* bullet points */}
                      <div className="mt-[10px] text-left text-[13px] font-light">
                        <div>
                          <ul
                            style={{
                              listStyleType: "disc",
                              listStylePosition: "inside",
                              margin: "0",
                              padding: "0",
                            }}
                            className={`${
                              hover === 4
                                ? "marker:text-white "
                                : "marker:text-[#d97706]"
                            }`}
                          >
                            <li>Lorem ipsum dolor sit amet elit.</li>
                            <li>Lorem ipsum dolor elit.</li>
                            <li>Lorem ipsum dolor sit amet elit.</li>
                          </ul>
                        </div>
                      </div>

                      {/* button */}
                      <div className="mt-[10px] text-left text-[14px] font-normal ">
                        <button className="flex justify-center items-center space-x-2">
                          <p
                            className={` ${
                              hover === 4 ? "text-white text-[14px] " : ""
                            }`}
                          >
                            Details
                          </p>{" "}
                          <CiLocationArrow1
                            className={` ${
                              hover === 4
                                ? "text-white text-[14px] rotate-45"
                                : "text-primary transition-transform duration-300 transform "
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
