"use client";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useProfile from "@/hooks/useProfile";
import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ProfilePage = () => {
  const session = useSession();
  const axiosPublic = useAxiosPublic();
  const { userAllInfo, refetch } = useProfile();
  const { address, block, house, location, road } = userAllInfo || {};

  const [tabIndex, setTabIndex] = useState(0);

  // profile update
  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    const updateUserInfo = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      house: event.target.phoneNumber.value,
      email: event.target.email.value,
    };

    try {
      const response = await axiosPublic.put(
        `/user-profile/update-profile/${session?.data?.user?.email}`,
        updateUserInfo
      );
      console.log(response.data);
      if (response.data.modifiedCount > 0) {
        toast.success("update profile successfully");
        setTabIndex(0);
        refetch();
      }
    } catch (error) {
      alert(error);
    }
  };
  // address update
  const handleProfileAddressUpdate = async (event) => {
    event.preventDefault();
    const updateUserAddressInfo = {
      address: event.target.address.value,
      house: event.target.house.value,
      road: event.target.road.value,
      block: event.target.block.value,
      location: event.target.location.value,
    };
    try {
      const response = await axiosPublic.put(
        `/user-profile/update-address/${session?.data?.user?.email}`,
        updateUserAddressInfo
      );
      console.log(response.data);
      if (response.data.modifiedCount > 0) {
        toast.success("update address successfully");
        setTabIndex(0);
        refetch();
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container mx-auto p-4 mt-6">
      <div className="flex justify-center items-center h-full w-full">
        <div className="h-1/2 flex flex-col lg:flex-row   w-full gap-6 ">
          {/* left side profile  */}

          <div className="h-fit lg:h-[500px] w-full lg:w-1/3  relative  shadow-lg rounded-t-lg">
            <div className="w-full h-52 object-cover rounded-t-lg">
              <Image
                src="/assets/profile-cover.webp"
                alt="example image"
                className="w-full h-full object-cover rounded-t-lg"
                height={1000}
                width={1000}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full  ">
              {session?.data?.user?.image && (
                <div className="w-32 border-4 border-white h-32 rounded-full overflow-hidden absolute top-36">
                  <Image
                    src={session?.data?.user?.image}
                    alt={session?.data?.user?.firstName}
                    className="w-full h-full"
                    height={1000}
                    width={1000}
                  />
                </div>
              )}
              {/* name and level heading  */}

              <div className=" w-full px-8 pb-8 pt-20  ">
                <div className="space-y-3 border-b-2 pb-4 w-full">
                  <h1 className="text-center text-2xl font-bold">
                    {session?.data?.user?.firstName}{" "}
                    {session?.data?.user?.lastName}
                  </h1>
                  <div className="flex items-center justify-center gap-4">
                    <p>
                      Level
                      <span className="text-primary font-bold"> Bronze</span>
                    </p>
                    <p>
                      Point <span className="text-primary  font-bold">0</span>
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
          <div className="h-fit lg:min-h-[500px] flex-1 w-full shadow-lg p-4">
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
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
                          {session?.data?.user?.firstName}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon className="text-2xl" icon="ci:user-add" />
                        <h2 className="flex-wrap text-nowrap">
                          <span className="font-bold">Last Name: </span>
                          {session?.data?.user?.lastName}
                        </h2>
                      </div>
                    </div>

                    {/* right side columns */}
                    <div className="space-y-3 ">
                      <div className="flex items-center gap-2">
                        <Icon className="text-xl" icon="hugeicons:calling" />
                        <h2 className="flex-wrap">
                          <span className="font-bold">Mobile: </span>
                          {session?.data?.user?.phoneNumber}
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
                      {userAllInfo ? (
                        <div>
                          <h1 className="text-xl font-bold">{address}</h1>
                          <p>
                            House#{house} Block#{block} Road#{road}
                          </p>
                          <p>Location# {location}</p>
                        </div>
                      ) : (
                        <p className="capitalize">address not added yet!</p>
                      )}
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* Update Profile */}
              <TabPanel>
                <div>
                  <form
                    onSubmit={handleProfileUpdate}
                    className="space-y-6 mt-8"
                  >
                    <div className="flex gap-3">
                      <div className="w-full">
                        <label
                          for="firstName"
                          className="block text-sm font-semibold pb-2 text-gray-700"
                        >
                          FirstName
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          defaultValue={session?.data?.user?.firstName}
                          placeholder="firstName"
                          className=" w-full placeholder-gray-400/70  border border-gray-200 bg-white px-5 py-2.5 text-gray-700 outline-none"
                        />
                      </div>
                      <div className="w-full">
                        <label
                          for="lastName"
                          className="block text-sm font-semibold pb-2 text-gray-700"
                        >
                          LastName
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          defaultValue={session?.data?.user?.lastName}
                          placeholder="lastName"
                          className="w-full placeholder-gray-400/70  border border-gray-200 bg-white px-5 py-2.5 text-gray-700 outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-full">
                        <label
                          for="phoneNumber"
                          className="block text-sm font-semibold pb-2 text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          defaultValue={session?.data?.user?.phoneNumber}
                          placeholder="phoneNumber"
                          className="w-full placeholder-gray-400/70  border border-gray-200 bg-white px-5 py-2.5 text-gray-700 outline-none"
                        />
                      </div>

                      <div className="w-full">
                        <label
                          for="email"
                          className="block text-sm font-semibold pb-2 text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          defaultValue={session?.data?.user?.email}
                          placeholder="email"
                          className="w-full placeholder-gray-400/70  border border-gray-200 bg-white px-5 py-2.5 text-gray-700 outline-none"
                        />
                      </div>
                    </div>

                    {/* button */}
                    <div className="flex justify-end gap-4">
                      <button className="px-4 py-1 border rounded-md ">
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1 bg-primary text-white rounded-md "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </TabPanel>
              {/* Update Address */}
              <TabPanel>
                <div>
                  <form
                    onSubmit={handleProfileAddressUpdate}
                    className="space-y-6 mt-8"
                  >
                    <div className="flex gap-3">
                      <div className="w-full">
                        <label
                          for="address"
                          className="block text-sm font-semibold pb-2 text-gray-700"
                        >
                          Address Type
                        </label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Ex.Home, office, partner or other"
                          className="w-full placeholder-gray-400/70  border border-gray-200 bg-white px-5 py-2.5 text-gray-700 outline-none"
                        />
                      </div>

                      <div className="w-full">
                        <label
                          for="house"
                          className="block text-sm font-semibold pb-2 text-gray-700"
                        >
                          House
                        </label>
                        <input
                          type="tel"
                          name="house"
                          placeholder="Enter House no."
                          className="w-full placeholder-gray-400/70  border border-gray-200 bg-white px-5 py-2.5 text-gray-700 outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-full">
                        <label
                          for="road"
                          className="block text-sm font-semibold pb-2 text-gray-700"
                        >
                          Road
                        </label>
                        <input
                          type="text"
                          name="road"
                          placeholder="Enter Road no."
                          className="w-full placeholder-gray-400/70  border border-gray-200 bg-white px-5 py-2.5 text-gray-700 outline-none"
                        />
                      </div>

                      <div className="w-full">
                        <label
                          for="block"
                          className="block text-sm font-semibold pb-2 text-gray-700"
                        >
                          Block
                        </label>
                        <input
                          type="tel"
                          name="block"
                          placeholder="Enter Block no."
                          className="w-full placeholder-gray-400/70  border border-gray-200 bg-white px-5 py-2.5 text-gray-700 outline-none"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <label
                        for="location"
                        className="block text-sm font-semibold pb-2 text-gray-700"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        className="w-full placeholder-gray-400/70  border border-gray-200 bg-white px-5 py-2.5 text-gray-700 outline-none"
                      />
                    </div>

                    {/* button */}
                    <div className="flex justify-end gap-4">
                      <button className="px-4 py-1 border rounded-md ">
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1 bg-primary text-white rounded-md "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
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
