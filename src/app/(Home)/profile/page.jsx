"use client";
import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ProfilePage = () => {
  const session = useSession();
  console.log(session, 'profile page');
  const currentUser = {
   firstName : 'MD.ALMAS',
   lastName : 'HOSSAIN',
   email : 'almashossain7384@gmail.com',
   phoneNumber : '017049958..',
   image : 'https://i.ibb.co.com/JzSBvRY/442442918-1782293755513191-8449340473128848588-n.jpg',
   address : ''
  }
  return (
    <div className="container mx-auto p-4 mt-2">
      <div className="flex justify-center items-center h-full w-full">
        <div className="h-1/2 flex flex-col lg:flex-row   w-full gap-6 ">
          {/* left side profile  */}

          <div className="md:min-h-[470px] w-full lg:w-1/3  relative  shadow-lg">
            <div className="w-full h-52 object-cover">
              <Image
                src="/assets/profile-cover.webp"
                alt="example image"
                className="w-full h-full object-cover "
                height={1000}
                width={1000}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              {
                session?.data?.user && <div className="w-32 border-4 border-white h-32 rounded-full overflow-hidden absolute top-36">
                <Image
                  src={session?.data?.user?.image}
                  alt="example image"
                  className="w-full h-full"
                  height={1000}
                  width={1000}
                />
              </div>
              }
              {/* name and level heading  */}

              <div className=" w-full px-8 pb-8 pt-20  ">
                <div className="space-y-3 border-b-2 pb-4 w-full">
                  <h1 className="text-center text-2xl font-bold">
                    {session?.data?.user?.name}
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
          <div className=" md:min-h-[470px] flex-1 w-full shadow-lg p-4">
            <Tabs>
              <TabList>
                <Tab>User Profile</Tab>
                <Tab>Update Profile</Tab>
                <Tab>Update Address</Tab>
              </TabList>

              {/* User Profile */}
              <TabPanel>
                <div className="lg:py-8 lg:pr-8 h-full space-y-4  ">
                  <div className="flex items-center justify-between gap-2 border p-2  lg:p-6 overflow-hidden">
                    {/* left side columns */}
                    <div className="space-y-3 ">
                      <div className="flex items-center gap-2">
                        <Icon className="text-2xl" icon="ci:user-add" />
                        <h2 className="flex-wrap text-nowrap">
                          <span className="font-bold">First Name: </span>
                          {session?.data?.user?.name?.split(" ")?.slice(0, -1).join(" ")}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon className="text-2xl" icon="ci:user-add" />
                        <h2 className="flex-wrap text-nowrap">
                          <span className="font-bold">Last Name: </span>
                          {session?.data?.user?.name?.split(" ").pop()}
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
                          {session?.data?.user?.email}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h1 className="font-bold">Saved Address:</h1>
                    <div className="border p-4">
                      <p className="capitalize">address not added yet!</p>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* Update Profile */}
              <TabPanel>
                <div className="pt-8">
                  <section className=" bg-white rounded-md ">
                    <form>
                      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                          <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                            First Name*
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            className="block w-full border p-2 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                            First Name*
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            className="block w-full border p-2 outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-gray-700 dark:text-gray-200" htmlFor="password">
                            Mobile No.
                          </label>
                          <input type="number" name="" id="" className="block w-full border p-2 outline-none" placeholder="Enter mobile no." />
                        </div>

                        <div>
                          <label className="text-gray-700 dark:text-gray-200" htmlFor="email">
                            Email*
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="block w-full border p-2 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-gray-700 dark:text-gray-200" htmlFor="avater">
                            Avater
                          </label>
                          <input
                            type="file"
                            name="image"
                            id="image"
                            className="block w-full border p-2 outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end gap-4 mt-6">
                        <button
                          type="button"
                          className="px-8 py-2.5 leading-5  transition-colors duration-300 transform border  rounded-md"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary focus:outline-none focus:bg-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </section>
                </div>

              </TabPanel>
                {/* Update Address */}
              <TabPanel>
              <div className="pt-8">
                <section className=" bg-white rounded-md ">
                  <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                      <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="address">
                        Address Type*
                        </label>
                        <input
                          id="address"
                          type="text"
                          className="block w-full border p-2 outline-none"
                          placeholder="Ex:Home, Office, Partner, or Other"
                        />
                      </div>
                      <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="house">
                        House
                        </label>
                        <input
                          id="house"
                          type="text"
                          className="block w-full border p-2 outline-none"
                          placeholder="Enter house no."
                        />
                      </div>

                      <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="road">
                        Road
                        </label>
                        <input 
                        type="tex" 
                        name="road" 
                        id="" 
                        className="block w-full border p-2 outline-none" placeholder="Enter road no." />
                      </div>

                      <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="block">
                        Block
                        </label>
                        <input
                          id="block"
                          type="block"
                          className="block w-full border p-2 outline-none"
                          placeholder="Enter block no."
                        />
                      </div>
                      <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="location">
                        Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          id="location"
                          className="block w-full border p-2 outline-none"
                          placeholder="Enter Your Location"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-6">
                      <button
                        type="button"
                        className="px-8 py-2.5 leading-5  transition-colors duration-300 transform border  rounded-md"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary focus:outline-none focus:bg-primary"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </section>
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
