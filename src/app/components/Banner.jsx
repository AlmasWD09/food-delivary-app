"use client";

import Image from "next/image";
import cap from "../../../public/capcikam.png";
import food from "../../../public/redMoric.png";
import tomato from "../../../public/tomato.png";
import SliderBanner from "./SliderBanner";
const Banner = () => {
  return (
    // https://www.pngwing.com/en/search?q=delivery
    <div
      className="relative lg:h-[700px] bg-cover object-cover bg-center w-full"
      style={{ backgroundImage: `url(https://i.ibb.co.com/KhWg20y/bann.jpg)` }}
    >
      <div className="absolute h-full lg:h-[700px] w-full bg-gray-900 opacity-60"></div>
      <Image
        src={cap}
        className="lg:w-36 w-24 animate-pulse  duration-6000 absolute bottom-0 left-10"
        alt="capcikam"
      />

      <Image
        width={144}
        height={"full"}
        src={tomato}
        className="lg:w-36 w-24 animate-pulse  duration-6000 absolute bottom-14 lg:bottom-24 right-3 lg:right-10"
        alt="capcikam"
      />
      <Image
        width={192}
        height={"full"}
        src={food}
        className="lg:w-48 md:w-32 w-28 md:animate-pulse  duration-6000 absolute top-0 left-3 hidden md:flex lg:left-52"
        alt="capcikam"
      />
      {/* slider start */}

      <SliderBanner />
      {/* slider end */}
    </div>
  );
};

export default Banner;
