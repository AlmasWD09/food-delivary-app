import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white font-urbanist px-10 pt-16 relative overflow-hidden">
      {/* news latter section  */}

      <Image
        className="absolute w-52 lg:w-[500px] lg:flex animate-slow-spin -top-28 -left-20 lg:-top-60 lg:-left-28 "
        src="/assets/pizza.svg"
        alt="logo"
        height={1000}
        width={500}
      />

      <div className="absolute w-14 lg:w-[200px] lg:flex right-12  lg:right-20 top-16 -rotate-[35deg]">
        <Image
          className=" animate-slow-bounce   "
          src="/assets/frenchfries.svg"
          alt="logo"
          height={1000}
          width={200}
        />
      </div>
      <div className="absolute  w-12  lg:w-96 lg:flex left-5 lg:left-6 bottom-10 lg:bottom-3  rotate-12 ">
        <Image
          className=" animate-slow-bounce   "
          src="/assets/redchili.svg"
          alt="logo"
          height={1000}
          width={100}
        />
      </div>

      {/* newsletter section  */}

      <div className="flex flex-col justify-center items-center py-10 lg:py-20 gap-10 ">
        <div className="text-center space-y-2">
          <h3 className="uppercase">join our newsletter</h3>
          <h1 className="text-2xl lg:text-4xl uppercase font-bold">
            Unlock Delicious Deals: Subscribe Now!
          </h1>
        </div>

        <form action="" className="max-w-2xl w-full flex items-center">
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            className=" w-full p-4 outline-none"
          />

          <button className="uppercase p-4 bg-red-600 text-white font-bold">
            subscribe{" "}
          </button>
        </form>
      </div>

      <div className="flex flex-col lg:flex-row  lg:justify-between container mx-auto gap-10 ">
        {/* first col */}
        <div className="space-y-4 flex flex-col items-center lg:items-start">
          <Image
            src="/assets/footerlogo.png"
            alt="logo"
            height={1000}
            width={200}
          />

          <p className="max-w-96 text-center lg:text-left">
            Discover the joy of delicious food delivered to your doorstep. Enjoy
            a variety of cuisines from local favorites with just a click!
          </p>

          {/* online payments */}
          <div className="flex  flex-wrap  w-full gap-3">
            <Image
              className="px-2 rounded-md bg-white"
              src="/assets/google-pay.svg"
              alt="logo"
              height={1000}
              width={60}
            />
            <Image
              className="px-2 rounded-md bg-white"
              src="/assets/paypal.svg"
              alt="logo"
              height={1000}
              width={60}
            />
            <Image
              className="px-2 rounded-md bg-white"
              src="/assets/master-card.svg"
              alt="logo"
              height={1000}
              width={60}
            />
            <Image
              className="px-2 rounded-md bg-white"
              src="/assets/stripe.svg"
              alt="logo"
              height={1000}
              width={60}
            />
            <Image
              className="px-2 rounded-md bg-white"
              src="/assets/visa.svg"
              alt="logo"
              height={1000}
              width={60}
            />
            <Image
              className="px-2 rounded-md bg-white"
              src="/assets/upi.svg"
              alt="logo"
              height={1000}
              width={60}
            />
          </div>
        </div>

        {/* second col  */}
        <div>
          <h1 className="uppercase font-bold pb-4">Popular Food</h1>

          <ul className="capitalize grid grid-cols-2 gap-x-4 gap-y-2">
            <li className="group relative">
              <Link href="/menu/margherita-pizza">Margherita Pizza</Link>
              <span className="w-full bg-secondary absolute -bottom-1 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 ease-out duration-300 transition origin-left"></span>
            </li>

            <li className="group relative">
              <Link href="/menu/spaghetti-carbonara">Spaghetti Carbonara</Link>{" "}
              <span className="w-full bg-secondary absolute -bottom-1 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 ease-out duration-300 transition origin-left"></span>
            </li>

            <li className="group relative">
              <Link href="/menu/chicken-tikka-masala">
                Chicken Tikka Masala
              </Link>
              <span className="w-full bg-secondary absolute -bottom-1 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 ease-out duration-300 transition origin-left"></span>
            </li>

            <li className="group relative">
              <Link href="/menu/caesar-salad">Caesar Salad</Link>
              <span className="w-full bg-secondary absolute -bottom-1 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 ease-out duration-300 transition origin-left"></span>
            </li>

            <li className="group relative">
              <Link href="/menu/beef-tacos">Beef Tacos</Link>
              <span className="w-full bg-secondary absolute -bottom-1 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 ease-out duration-300 transition origin-left"></span>
            </li>

            <li className="group relative">
              <Link href="/menu/vegetable-stir-fry">Vegetable Stir-Fry</Link>
              <span className="w-full bg-secondary absolute -bottom-1 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 ease-out duration-300 transition origin-left"></span>
            </li>

            <li className="group relative">
              <Link href="/menu/sushi-platter">Sushi Platter</Link>
              <span className="w-full bg-secondary absolute -bottom-1 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 ease-out duration-300 transition origin-left"></span>
            </li>

            <li className="group relative">
              <Link href="/menu/chocolate-lava-cake">Chocolate Lava Cake</Link>
              <span className="w-full bg-secondary absolute -bottom-1 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 ease-out duration-300 transition origin-left"></span>
            </li>

            <li className="group relative">
              <Link href="/menu/fresh-fruit-smoothie">
                Fresh Fruit Smoothie
              </Link>
              <span className="w-full bg-secondary absolute -bottom-1 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 ease-out duration-300 transition origin-left"></span>
            </li>

            <li className="group relative">
              <Link href="/menu/garlic-bread">Garlic Bread</Link>
              <span className="w-full bg-secondary absolute -bottom-1 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 ease-out duration-300 transition origin-left"></span>
            </li>
          </ul>
        </div>

        {/* third col  */}
        <div className="space-y-3 pb-4">
          <h1 className="uppercase font-bold">contact us</h1>
          <p className="flex items-center gap-2">
            <span className="p-1 rounded-full bg-primary">
              <Icon
                className="text-xl   text-white"
                icon="mingcute:location-fill"
              />
            </span>
            123 Maple Street Springfield, IL 62704 USA
          </p>
          <p className="flex items-center gap-2">
            <span className="p-1 rounded-full bg-primary">
              <Icon
                className="text-xl   text-white"
                icon="fluent:call-48-filled"
              />
            </span>
            +1 67893434156
          </p>
        </div>

        {/* fourth cols  */}
        <div className="space-y-3 pb-4">
          <h1 className="uppercase font-bold">opening hour</h1>
          <p className="flex items-center gap-2">
            <span className="p-1 rounded-full bg-primary">
              <Icon
                className="text-xl   text-white"
                icon="mingcute:time-line"
              />
            </span>
            Monday-Friday: 8AM - 4PM
          </p>

          <p className="flex items-center gap-2">
            <span className="p-1 rounded-full bg-primary">
              <Icon
                className="text-xl   text-white"
                icon="mingcute:time-line"
              />
            </span>
            Saturday: 8AM - 1PM
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center pb-10 lg:pb-6 pt-10 text-sm">
        <div className=" flex items-center  gap-2 text-nowrap capitalize">
          copyright <Icon icon="ic:baseline-copyright" />
          <Link className="hover:text-secondary" href="/">
            delish
          </Link>
          . all rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
