import Image from "next/image";
import Link from "next/link";
import React from "react";
const page = () => {
  return (
    <div className=" max-w-6xl mx-auto  h-screen flex justify-center">
      <div className=" flex flex-col lg:flex-row items-center justify-center lg:pr-10 lg:gap-10">
        {/* left side area  */}
        <div className="w-1/2 hidden lg:flex">
          <Image
            className="bg-cover "
            src="/assets/signup.svg"
            alt="signup"
            height={1000}
            width={1000}
          />
        </div>

        {/* right side area  */}

        <div className="border-2 border-green-600 lg:w-2/5  p-10  relative  ">
          <div className="h-full w-full absolute overflow-hidden top-0 left-0 bg-base-100 -z-10">
            <span className="w-36 h-36 bg-green-600 absolute -top-20 -right-20 rotate-[-40deg]"></span>
          </div>
          <span className="h-full w-full bg-green-100 absolute -z-20 top-4 left-4 lg:top-8 lg:left-8 "></span>

          <div className="pb-6 ">
            <h1 className="text-center text-3xl font-semibold">
              Create Account
            </h1>
            <h1 className="text-center text-sm ">
              sign up now and unlock exclusive access!
            </h1>
          </div>
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-green-200 "
              placeholder="Full Name"
              name="fullname"
            />
            <input
              type="email"
              className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-green-200 "
              placeholder="Email Address"
              name="emailaddress"
            />
            <input
              type="password"
              className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-green-200 "
              placeholder="password"
              name="password"
            />
            <input
              type="password"
              className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-green-200 "
              placeholder="Confirm password"
              name="password"
            />
            <button className="relative py-4 bg-green-600 text-white group overflow-hidden flex items-center justify-center">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-green-500 rounded-full group-hover:w-96 group-hover:h-96 "></span>

              <span className="relative">Create Account</span>
            </button>
          </form>
          <h1 className="text-center py-4">
            have an account ?{" "}
            <Link href="/signin">
              <span className="font-semibold hover:text-red-500">sign in</span>
            </Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;