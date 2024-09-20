import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-full  max-w-4xl mx-auto">
      <div className=" flex items-center justify-center    ">
        {/* image start  */}
        <div className="w-1/2   flex-1">
          <Image
            src="/assets/signup.png"
            alt="signup"
            height={1000}
            width={1000}
          />
        </div>

        {/* image end  */}
        <form className=" h-full flex-1 border-2 bg-gray-100 p-10 ">
          <h1 className="text-center text-2xl py-4 font-bold">Sign Up </h1>

          <div className="flex flex-col items-center gap-6 ">
            <input
              name="fullname"
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 rounded-xl border-2 outline-none focus:border-blue-300 w-full  "
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded-xl border-2 outline-none focus:border-blue-300 w-full   "
            />

            <button
              type="submit"
              className="px-4 p-2 bg-blue-500 text-white w-full "
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* form end  */}
      </div>
    </div>
  );
};

export default page;
