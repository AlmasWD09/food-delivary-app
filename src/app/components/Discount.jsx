"use client";
import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Pagination } from "swiper/modules";

import { CiLocationArrow1 } from "react-icons/ci";
import { IoRestaurant } from "react-icons/io5";
import useMenus from "@/hooks/useMenus";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Discount = () => {
  const [hover, setHover] = useState(0);

  const [hoveredItem, setHoveredItem] = useState(null);
  const [items, setItems] = useState([]);
  const [menuData] = useMenus();
  // console.log(menuData)

  //   const fetchItems = async () => {
  //     try {
  //         const response = await axios.get("menu.json");
  //         setItems(response.data);

  //     } catch (error) {
  //         console.log(error.message);
  //     }
  // };

  //     useEffect(() => {
  //         fetchItems();
  //     }, []);

  return (
    <div>
      <div className="mt-10 container mx-auto">
        {/* ----background Pattern image && Container---- */}
        <div className="h-[500px] py-8 px-4 space-y-[50px]">
          {/* --- heading section ---   */}
          <div>
            <div className="flex flex-col justify-center items-center text-center ">
              <IoRestaurant className="text-primary text-2xl" />
              <div className="leading-6 mt-[5px]">
                <h3 className="font-normal text-[13px] tracking-[.35rem]">
                  MENU FOR EVERY TASTE
                </h3>
                <h3 className="font-bold text-3xl  tracking-[.07rem]">
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
                {menuData?.slice(0, 6)?.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      height: "250px",
                      position: "relative",
                    }}
                    className="relative z-10 "
                  >
                    {/* upper discount part */}
                    <div className="absolute top-[-8%] left-[8%] z-50 flex p-3 rounded-md bg-primary text-white">
                      <h3 className="font-semibold text-[16px]">
                        -${parseInt(item.MRP) - parseInt(item.price)}
                      </h3>
                      <sub className="text-sm font-thin">/per</sub>
                    </div>

                    {/* --card-- */}
                    <div
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`flex items-center transition duration-300    ${
                        hoveredItem === index
                          ? "bg-primary/30  -translate-y-4 transition-delay-400"
                          : "bg-white  transition-transform transform "
                      }`}
                    >
                      {/* card img */}
                      <div
                        style={{
                          backgroundImage: `url(${item.image})`,
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
                          <h3 className="font-semibold text-xl">
                            {item.title}
                          </h3>
                          <h3
                            className={`${
                              hoveredItem === index
                                ? "text-[#ffffff]"
                                : "text-black font-semibold"
                            }`}
                          >
                            ${item.price}
                            <span className="text-sm font-light">
                              only{" "}
                            </span>{" "}
                            <span className="line-through text-[#a5a5a5] text-sm">
                              ${item.MRP}
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
                                hoveredItem === index
                                  ? "marker:text-white "
                                  : "marker:text-[#d97706]"
                              }`}
                            >
                              {item.recipe.map((reci, index) => (
                                <li key={index}>{reci}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* button */}
                        <div className="mt-[10px] text-left text-[14px] font-normal ">
                          <Link
                            href={`/menu/${item?._id}`}
                            className="flex font-medium items-center space-x-2"
                          >
                            <p
                              className={` ${
                                hoveredItem === index
                                  ? "text-white text-[14px] "
                                  : ""
                              }`}
                            >
                              Details
                            </p>{" "}
                            <CiLocationArrow1
                              className={` ${
                                hoveredItem === index
                                  ? "text-white font-medium text-[14px] rotate-45"
                                  : "text-primary font-medium transition-transform duration-300 transform "
                              }`}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="flex my-6 justify-center">
            <Link
              href={"/menu"}
              className="relative inline-flex items-center w-36 justify-center p-2 px-3 py-2 overflow-hidden font-medium text-primaryLight transition duration-300 ease-out border-2 border-primaryLight rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primaryLight group-hover:translate-x-0 ease">
                <FaArrowRightLong className="w-6 h-6" />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-primaryLight transition-all duration-300 transform group-hover:translate-x-full ease">
                SEE MORE
              </span>
              <span className="relative invisible">SEE MORE</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
