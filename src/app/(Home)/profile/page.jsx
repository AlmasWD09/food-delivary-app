"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const page = () => {
  return (
    <div className="container mx-auto p-4 lg:mt-10 mt-8">
      <div className="flex justify-center items-center h-full w-full">
        <div className="h-1/2 flex flex-col lg:flex-row   w-full gap-6 ">
          {/* left side profile  */}

          <div className="h-fit w-full lg:w-1/3  relative  shadow-lg">
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
                <div className="lg:py-8 lg:pr-8 h-full space-y-4  ">
                  <div className="flex items-center justify-between gap-2 border-2 p-2  lg:p-6 overflow-hidden">
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
              {/* <TabPanel>
                <div className="p-8">
                  <h2>jfhshfosh</h2>
                </div>
              </TabPanel> */}
              {/* Update Address */}
              {/* <TabPanel>
                <div className="p-8">
                  <h2>Any content 1</h2>
                </div>
              </TabPanel> */}
              {/* Change Password */}
              {/* <TabPanel>
                <div className="p-8">
                  <h2>Any content 1</h2>
                </div>
              </TabPanel> */}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
