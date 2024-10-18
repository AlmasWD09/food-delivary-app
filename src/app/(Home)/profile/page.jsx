"use client";
import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ProfilePage = () => {
  const session = useSession();
  console.log(session);

  return (
    <div className="container mx-auto p-4 lg:mt-10 mt-8">
      <div className="flex justify-center items-center h-full w-full">
        <div className="h-1/2 flex flex-col lg:flex-row w-full gap-6 ">
          {/* left side profile  */}

          <div className="h-fit w-full lg:w-1/3 relative shadow-lg">
            <div className="w-full h-52 object-cover">
              <Image
                src="/assets/profile-cover.webp"
                alt="example image"
                className="w-full h-full object-cover "
                height={1000}
                width={1000}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full  ">
              <div className="w-32 border-4 border-white h-32 rounded-full overflow-hidden absolute top-36">
                <Image
                  src="/assets/profile-photo.webp"
                  alt="example image"
                  className="w-full h-full"
                  height={1000}
                  width={1000}
                />
              </div>
              {/* name and level heading  */}

              <div className=" w-full px-8 pb-8 pt-20  ">
                <div className="space-y-3 border-b-2 pb-4 w-full">
                  <h1 className="text-center text-2xl font-bold">
                    Alamin Ahmed
                  </h1>
                  <div className="flex items-center justify-center gap-4">
                    <p>
                      Level
                      <span className="text-red-500 font-bold">Bronze</span>
                    </p>
                    <p>
                      Point <span className="text-red-500 font-bold">0</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3  pt-4">
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-orange-500">0</p>
                    <p>Total</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-orange-500">0</p>
                    <p>Delivery</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-orange-500">0</p>
                    <p>Pickup</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-orange-500">0</p>
                    <p>Flowers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right side profile  */}
          <div className="h-full flex-1 w-full shadow-lg p-4">
            <Tabs>
              <TabList>
                <Tab>User Profile</Tab>
                <Tab>Update Profile</Tab>
                <Tab>Update Address</Tab>
                <Tab>Change Password</Tab>
              </TabList>

              {/* User Profile */}
              <TabPanel>
                <div className="lg:py-8 lg:pr-8 h-full space-y-4">
                  <div className="flex items-center justify-between gap-2 border-2 p-2 lg:p-6 overflow-hidden">
                    {/* left side columns */}
                    <div className="space-y-3 ">
                      <div className="flex items-center gap-2">
                        <Icon className="text-2xl" icon="ci:user-add" />
                        <h2 className="flex-wrap text-nowrap">
                          <span className="font-bold">First Name: </span>
                          Md Alamin
                        </h2>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon className="text-2xl" icon="ci:user-add" />
                        <h2 className="flex-wrap text-nowrap">
                          <span className="font-bold">Last Name: </span>
                          Ahmed
                        </h2>
                      </div>
                    </div>

                    {/* right side columns */}
                    <div className="space-y-3 ">
                      <div className="flex items-center gap-2">
                        <Icon className="text-xl" icon="hugeicons:calling" />
                        <h2 className="flex-wrap">
                          <span className="font-bold">Mobile: </span>
                          N/A
                        </h2>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon className="text-xl" icon="ic:outline-email" />
                        <h2 className="flex-wrap">
                          <span className="font-bold">Email: </span>
                          alaminahmed79000@gmail.com
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h1 className="font-bold">Saved Address:</h1>
                    <div className="border-2 p-4">
                      <p className="capitalize">address not added yet!</p>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* Update Profile */}
              <TabPanel>
                <div className="flex flex-col lg:flex-row w-full lg:py-8 lg:pr-8 gap-6 p-3">
                  <div className="flex-1 space-y-6">
                    {/* First Name */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Md Alamin"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    {/* Mobile No */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Mobile No. *
                      </label>
                      <div className="flex">
                        <span className="px-3 py-2 bg-gray-100 border rounded-l-lg">
                          +88
                        </span>
                        <input
                          type="text"
                          name="mobile"
                          placeholder="Enter mobile no."
                          className="w-full px-3 py-2 border rounded-r-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    {/* Avatar */}
                    <div className="mb-4 hidden lg:block">
                      <label className="block text-gray-700 font-bold mb-2">
                        Avatar
                      </label>
                      <input
                        type="file"
                        name="avatar"
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-500 hover:file:bg-orange-100"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-6">
                    {/* Last Name */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Ahmed"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="alaminahmed79000@gmail.com"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex justify-end lg:mb-8">
                  <button
                    type="button"
                    className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                  >
                    Submit
                  </button>
                </div>
              </TabPanel>
              {/* Update Address */}
              <TabPanel>
                <div className="flex flex-col lg:flex-row w-full lg:py-8 lg:pr-8 gap-6 p-3">
                  <div className="flex-1 space-y-6">
                    {/* Address Type */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Address Type *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Md Alamin"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    {/* Road */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Road#
                      </label>
                      <div className="">
                        <input
                          type="text"
                          name="mobile"
                          placeholder="Enter road no."
                          className="w-full px-3 py-2 border rounded-r-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    {/* Avatar */}
                    {/* <div className="flex items-center">
                      <div className="w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          placeholder="Location"
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"  
                        />
                      </div>
                      <button
                        className="ml-4 text-red-500 font-semibold hover:text-red-600 focus:outline-none"
                      >
                        Edit
                      </button>
                    </div> */}
                  </div>
                  <div className="flex-1 space-y-6">
                    {/* House */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        House#
                      </label>
                      <input
                        type="text"
                        name="house"
                        placeholder="Enter house no."
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    {/* Block */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Block#
                      </label>
                      <input
                        type="text"
                        name="block"
                        placeholder="Enter block no."
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex justify-end lg:mb-8">
                  <button
                    type="button"
                    className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                  >
                    Submit
                  </button>
                </div>
              </TabPanel>
              {/* Change Password */}
              <TabPanel>
                <div className="lg:py-8 lg:pr-8 p-3">
                  {/* Old Password */}
                  <div className="mb-4 relative">
                    <label className="block text-gray-700 font-bold mb-2">
                      Old Password *
                    </label>
                    <input
                      // type={showPassword.oldPassword ? "text" : "password"}
                      name="oldPassword"
                      // value={formData.oldPassword}
                      // onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      // required
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center leading-5 cursor-pointer"
                      // onClick={() => togglePasswordVisibility("oldPassword")}
                    >
                      {/* {showPassword.oldPassword ? (
                        <Icon
                          className="h-5 w-5"
                          icon="clarity:eye-show-line"
                        />
                      ) : (
                        <Icon className="h-5 w-5" icon="clarity:eye-hide-solid" />
                      )} */}
                    </div>
                  </div>

                  {/* New Password */}
                  <div className="mb-4 relative">
                    <label className="block text-gray-700 font-bold mb-2">
                      New Password *
                    </label>
                    <input
                      // type={showPassword.newPassword ? "text" : "password"}
                      name="newPassword"
                      // value={formData.newPassword}
                      // onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      // required
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center leading-5 cursor-pointer"
                      // onClick={() => togglePasswordVisibility("newPassword")}
                    >
                      {/* {showPassword.newPassword ? (
                          <EyeOffIcon className="h-5 w-5 text-gray-500" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-500" />
                        )} */}
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-4 relative">
                    <label className="block text-gray-700 font-bold mb-2">
                      Confirm Password *
                    </label>
                    <input
                      // type={
                      //   showPassword.confirmPassword ? "text" : "password"
                      // }
                      name="confirmPassword"
                      // value={formData.confirmPassword}
                      // onChange={handleInputChange}
                      placeholder="Re-enter your password"
                      className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      // required
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center leading-5 cursor-pointer"
                      // onClick={() =>
                      //   togglePasswordVisibility("confirmPassword")
                      // }
                    >
                      {/* {showPassword.confirmPassword ? (
                          <EyeOffIcon className="h-5 w-5 text-gray-500" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-500" />
                        )} */}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end lg:mb-8">
                  <button
                    type="button"
                    className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                  >
                    Submit
                  </button>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
