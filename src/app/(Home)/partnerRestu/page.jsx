"use client";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaAngleDoubleUp, FaArrowRight, FaCogs, FaHeart } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const PartnerRestu = () => {
  const axiosPub = useAxiosPublic();
  const queryClient = useQueryClient();
  const session = useSession();

  const { mutateAsync } = useMutation({
    mutationKey: ["restu"],
    mutationFn: async (item) => {
      const { data } = await axiosPub.post("/restaurents", item);
      console.log(data);
      return data;
    },
    onSuccess: () => {
      toast.success("Your apply recorded. Please wait for approval.");
      queryClient.invalidateQueries("restu");
    },
  });

  const handlePartner = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const number = form.number.value;
    const address = form.address.value;
    const email = session?.data?.user?.email;
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
      mutateAsync(restaurant);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://i.ibb.co.com/MRMxYSw/IMG-2025-280.jpg)`,
        }}
        className="relative w-full bg-fixed h-[500px] bg-no-repeat bg-center object-cover bg-cover"
      >
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="lg:text-6xl text-4xl text-white font-bold">
            Become a Partner
          </h3>
          <div className="bg-[#FF4D00] mx-auto md:w-2/3 w-[250px] text-center mt-8 p-4">
            <h3 className="lg:text-xl text-base text-white flex justify-center items-center gap-4">
              Home <FaArrowRight /> Join as Partner
            </h3>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="lg:max-w-[1240px] px-3 lg:px-0  mx-auto lg:py-24 py-20">
        <div>
          <h3 className="text-4xl text-center font-bold">
            Grow Your Business with Us
          </h3>
          <div className="flex justify-center  text-center">
            <p className="w-2/5  my-3">
              Expand your restaurant’s business by partnering with us. Join our
              network and let more people discover and enjoy your delicious
              food!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-8">
            <div className="border  rounded-lg p-4">
              <h3 className="text-2xl mb-3 font-semibold flex items-center gap-3">
                <FaAngleDoubleUp className="text-primaryLight" /> Increased
                Visibility
              </h3>
              <p>
                Dui sapien eget mi proin sed. Nibh nisl condimentum id venenatis
                a. Vulputate eu scelerisque felis imperdiet proin fermentum leo.
              </p>
            </div>
            <div className="border shadow-lg rounded-lg p-4">
              <h3 className="text-2xl mb-3 font-semibold flex items-center gap-3">
                <FaCogs className="text-primaryLight" /> Seamless Operations
              </h3>
              <p>
                Consequat semper viverra nam libero justo laoreet sit. Consequat
                semper viverra nam libero justo laoreet sit amet cursus. Morbi
                tincidunt ornare .
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="text-2xl mb-3 font-semibold flex items-center gap-3">
                <FaHeart className="text-primaryLight" /> Customer Loyalty
              </h3>
              <p>
                Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.
                Neque viverra justo nec ultrices dui sapien. Volutpat est velit
                egestas.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col md:flex-row  md:justify-around gap-10">
          <div className="md:shadow-xl lg:p-10">
            <form onSubmit={handlePartner}>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="flex col-span-1 flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <input
                    required
                    placeholder="Enter your name"
                    className="border mt-2 rounded-xl p-3"
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
                    className="border mt-2 rounded-xl p-3"
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
                    className="border mt-2 rounded-xl p-3"
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
                    placeholder={session?.data?.user?.email}
                    className="border mt-2 rounded-xl p-3"
                    type="email"
                    name="email"
                    disabled
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
                    className="border mt-2 rounded-xl p-3"
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
                    className="border mt-2 w-full rounded-xl p-3"
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
                  className="border mt-2 w-full rounded-xl p-3"
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
                  className="border w-full mt-2 rounded-xl p-3"
                  placeholder="Type your message here..."
                />
              </div>
              <input
                className={` w-1/4 rounded-lg cursor-pointer uppercase mt-5 text-center py-2 bg-pink-600 text-white`}
                type="submit"
                value="Apply"
              />
            </form>
          </div>
          <div className="relative w-1/2">
            <Image
              className="rounded-lg z-50 object-cover bg-center md:w-[300px] md:h-[200px] w-[250px] lg:h-[400px] h-[200px] lg:w-[600px]"
              width={600}
              height={400}
              src={"https://i.ibb.co.com/hBcc0xq/ex.jpg"}
              alt="delivery man"
            />
            <div className="lg:w-[600px] -z-40 md:w-[300px] md:h-[200px]  w-[270px] h-[200px] flex flex-col justify-end p-8 lg:-top-10 md:-top-8 md:-right-8 -top-6  lg:-right-10 absolute lg:h-[400px] border-primaryLight border-4 lg:border-8 rounded-lg">
              <h3 className="lg:text-3xl md:text-2xl text-xl text-white  font-semibold">
                Became a Hero
              </h3>
              <button className="bg-primaryLight mt-4 justify-center w-40 flex items-center p-2 gap-2 rounded-lg lg:p-3 text-white">
                Learn More <FaArrowRight />
              </button>
            </div>
            <div className="py-6">
              <h3 className="text-2xl mt-3 font-semibold">
                Advantage of Joining Us
              </h3>
              <p className="text-base my-3">
                Increase your restaurant’s revenue by joining us. Our platform
                connects you with food lovers who are constantly searching for
                exciting and unique dining experiences.
              </p>
              <ul>
                <li className="font-medium flex items-center gap-3">
                  <MdDone className="bg-primaryLight  rounded-full  text-white" />{" "}
                  Boost Your Earnings
                </li>
                <li className="font-medium flex items-center gap-3">
                  <MdDone className="bg-primaryLight  rounded-full  text-white" />{" "}
                  Comprehensive Support
                </li>
                <li className="font-medium flex items-center gap-3">
                  <MdDone className="bg-primaryLight  rounded-full  text-white" />{" "}
                  Complete Control
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerRestu;
