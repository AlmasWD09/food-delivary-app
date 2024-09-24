import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" max-w-6xl mx-auto  h-screen flex justify-center">
      <div className="  flex items-center justify-center lg:pr-10 ">
        {/* left side area  */}
        <div className="flex-1 hidden lg:flex">
          <Image
            className="bg-cover"
            src="/assets/signin.svg"
            alt="signup"
            height={1000}
            width={1000}
          />
        </div>

        {/* right side area  */}

        <div className="border-2 border-blue-600 lg:w-2/5  p-8  relative  ">
          <div className="h-full w-full absolute overflow-hidden top-0 left-0 bg-base-100 -z-10">
            <span className="w-36 h-36 bg-blue-600 absolute -top-20 -right-20 rotate-[-40deg]"></span>
          </div>
          <span className="h-full w-full bg-blue-100 absolute -z-20 top-4 left-4 lg:top-8 lg:left-8 "></span>

          <div className="pb-6 space-y-4 ">
            <h1 className="text-center text-3xl font-semibold">Hello Again!</h1>
            <h1 className="text-center text-sm ">
              Make today tasty—let's get your order started!
            </h1>
          </div>
          <form action="" className="flex flex-col gap-4">
            <input
              type="email"
              className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-blue-200 "
              placeholder="Email Address"
              name="emailaddress"
            />
            <input
              type="password"
              className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-blue-200 "
              placeholder="password"
              name="password"
            />
            <h2 className="text-sm py-4">
              Forgot Your Password?{" "}
              <button className="font-semibold hover:text-red-400">
                click here
              </button>
            </h2>
            <button className="relative py-4 bg-blue-500 text-white group overflow-hidden flex items-center justify-center">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-green-500 rounded-full group-hover:w-96 group-hover:h-96 "></span>

              <span className="relative">Sign In</span>
            </button>
          </form>

          <div className="pt-10">
            <div className="flex items-center gap-6">
              <span className="h-0.5 bg-gray-200 w-full"></span>
              <h2 className="text-nowrap text-sm">or continue with </h2>{" "}
              <span className="h-0.5 bg-gray-200 w-full"></span>
            </div>

            <div className=" flex items-center justify-center gap-10 py-6">
              <button>
                <Icon className="text-4xl" icon="flat-color-icons:google" />
              </button>

              <button>
                <Icon className="text-4xl" icon="logos:facebook" />
              </button>

              <button>
                <Icon className="text-4xl" icon="devicon:twitter" />
              </button>
            </div>
          </div>

          <h1 className="text-center py-4">
            Don't have an account ?{" "}
            <Link href="/signup">
              <span className="font-semibold hover:text-red-500">sign in</span>
            </Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
