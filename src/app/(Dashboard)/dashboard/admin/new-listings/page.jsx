"use client"
import React, { useState } from "react";
import ComingSoon from "../../../../../../public/comingsoon.svg";
import Image from "next/image";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";
import useAllUser from "@/hooks/useAllUser";
const Users = () => {
   const [click,setClick] = useState("deliveryMan")
   const axiosPub = useAxiosPublic();
  const queryClient = useQueryClient();
  const session = useSession();
  const [user] = useAllUser()

  // delivery man post
  const { mutateAsync:deliveryMan } = useMutation({
    mutationKey: ["hero"],
    mutationFn: async (item) => {
      const { data } = await axiosPub.post("/delivery-man", item);

      return data;
    },
    onSuccess: () => {
      toast.success("You have successfully listed.");
      queryClient.invalidateQueries("heroNew");
      
    },
  });

  // restaurant listing

  const { mutateAsync } = useMutation({
    mutationKey: ["restu"],
    mutationFn: async (item) => {
      const { data } = await axiosPub.post("/restaurents", item);
     console.log(data)
      return data;
    },
    onSuccess: () => {
      toast.success("You have successfully listed.");
      queryClient.invalidateQueries("restuNew");
    },
  });

  const handlePartner = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const number = form.number.value;
    const address = form.address.value;
    const email = form.email.value;
    const shop = form.shop.value;
    const businessAddress = form.businessAddress.value;
    const fileInput = form.fileInput.files[0];

    const formData = new FormData();
    formData.append("image", fileInput);

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        formData
      );

      const restaurant = {
        name,
        number,
        address,
        email,
        shop,
        businessAddress,
        status: "pending",
        image: data?.data?.url,
      };
      const filterUser = user?.find(us => us?.email === email)
      if(filterUser){
        mutateAsync(restaurant);
      }else{
        alert("This email have not sign up")
      }
    } catch (error) {
      console.log(error);
    }
  };
  // restaurant listing end

  // delivery man listing
  const handleHero = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const address = form.address.value;
    const email = form.email.value
    const message = form.message.value;
    const fileInput = form.fileInput.files[0];
    const formData = new FormData();
    formData.append("image", fileInput);

   try{
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
      formData
    );
    const hero = {
      name,
      number,
      address,
      email,
      message,
      status: "pending",
      image: data?.data?.url
    };
   
    const filterUser = user?.find(us => us?.email === email)
    if(filterUser){
      deliveryMan(hero);
    }else{
      alert("This email have not sign up")
    }
   }catch (error) {
    console.log(error);
  }
  };
  // delivery man listing end

  return (
    <div className="min-h-screen w-full">
      
       {
        click === "deliveryMan" ? 
        <div>
          <h3 className="text-3xl font-semibold my-3 ">List a delivery man</h3>
          <div className="md:shadow-xl lg:w-4/5 lg:p-10">
            <form onSubmit={handleHero}>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="flex col-span-1 flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <input
                    required
                    placeholder="Enter your name"
                    className="border outline-primaryLight mt-2 rounded-xl p-3"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex col-span-1 flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile number
                  </label>
                  <input
                    required
                    placeholder="Enter your number"
                    className="border outline-primaryLight mt-2 rounded-xl p-3"
                    type="number"
                    name="number"
                  />
                </div>
              </div>

              <div className="grid mt-5 lg:grid-cols-2 gap-5">
                <div className="flex col-span-1 flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Your address
                  </label>
                  <input
                    placeholder="Enter your address"
                    required
                    className="border outline-primaryLight mt-2 w-full rounded-xl p-3"
                    type="text"
                    name="address"
                  />
                </div>
                <div className="flex col-span-1 flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    required
                    placeholder={"ahmed@gmail.com"}
                    className="border outline-primaryLight mt-2 w-full rounded-xl p-3"
                    type="email"
                    name="email"
                  
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <label className="block text-sm font-medium text-gray-700">
                  Upload a file:
                </label>
                <input
                  type="file"
                  className="border outline-primaryLight mt-2 w-full rounded-xl p-3"
                  id="fileInput"
                  name="fileInput"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Have you a message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="border outline-primaryLight w-full mt-2 rounded-xl p-3"
                  placeholder="Type your message here..."
                />
              </div>

              <div className="flex gap-10">
              <input
                className={`w-1/4 rounded-lg cursor-pointer uppercase mt-5 text-center py-2 bg-primaryLight text-white`}
                type="submit"
                value="Apply"
              />
              <button onClick={()=>setClick("restaurant")} className="w-1/4 rounded-lg cursor-pointer uppercase mt-5 text-center py-2 border border-primaryLight ">Or partner</button>
              </div>
            </form>
          </div> 
        </div>:
         <div>
          <h3 className="text-3xl font-semibold my-3 ">List a restaurant</h3>
          <div className="md:shadow-xl lg:w-4/5 lg:p-10">
            <form onSubmit={handlePartner}>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="flex col-span-1 flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <input
                    required
                    placeholder="Enter your name"
                    className="border outline-primaryLight mt-2 rounded-xl p-3"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex col-span-1 flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile number
                  </label>
                  <input
                    required
                    placeholder="Enter your number"
                    className="border outline-primaryLight mt-2 rounded-xl p-3"
                    type="number"
                    name="number"
                  />
                </div>
              </div>
              <div className="grid mt-5 lg:grid-cols-2 gap-5">
                <div className="flex col-span-1 flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Your address
                  </label>
                  <input
                    placeholder="Enter  your address"
                    required
                    className="border outline-primaryLight mt-2 rounded-xl p-3"
                    type="text"
                    name="address"
                  />
                </div>
                <div className="flex col-span-1 flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    required
                    placeholder={"ahmed@gmail.com"}
                    className="border outline-primaryLight mt-2 rounded-xl p-3"
                    type="email"
                    name="email"
                  
                  />
                </div>
              </div>
              <div className="grid mt-5 lg:grid-cols-2 gap-5">
                <div className="flex col-span-1 flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Shop name
                  </label>
                  <input
                    placeholder="Enter  your address"
                    required
                    className="border outline-primaryLight mt-2 rounded-xl p-3"
                    type="text"
                    name="shop"
                  />
                </div>
                <div className="flex col-span-1 flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Business Address
                  </label>
                  <input
                    required
                    placeholder="Enter  your business address"
                    className="border outline-primaryLight mt-2 w-full rounded-xl p-3"
                    type="text"
                    name="businessAddress"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <label className="block text-sm font-medium text-gray-700">
                  Upload a file:
                </label>
                <input
                  type="file"
                  className="border outline-primaryLight mt-2 w-full rounded-xl p-3"
                  id="fileInput"
                  name="fileInput"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Have you a message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="border outline-primaryLight w-full mt-2 rounded-xl p-3"
                  placeholder="Type your message here..."
                />
              </div>
              <div className="flex gap-10">
              <input
                className={`w-1/4 rounded-lg cursor-pointer uppercase mt-5 text-center py-2 bg-primaryLight text-white`}
                type="submit"
                value="Apply"
              />
              <button onClick={()=>setClick("deliveryMan")} className="w-1/4 rounded-lg cursor-pointer uppercase mt-5 text-center py-2 border border-primaryLight ">Or hero</button>
              </div>
            </form>
          </div>
         </div>
       }
    </div>
  );
};

export default Users;
