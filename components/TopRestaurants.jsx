"use client"

import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const TopRestaurants = () => {
    const axiosPub = useAxiosPublic()

    const {data,isLoading} = useQuery({
        queryKey: ['restaurants'],
        queryFn: async()=>{
            const {data} = await axiosPub.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/restaurents`)
            return data
        }
    })
  console.log(data?.restaurents)
    if(isLoading){
        return <>
         <p className="text-center">Loading....</p>
        </>
    }
// restaurantImage
// restaurantName
// reviewNumber
// rating
// location
// favoriteNumber
    return (
        <div className="container my-10 mx-auto px-2">
            <h3 className="text-4xl font-bold text-center uppercase">Top Restaurants</h3>
            <div className="flex justify-center">
                <p className="lg:w-1/3 my-3 text-center">Find the best dining spots in town with our curated list of top restaurants, featuring a variety of cuisines and exceptional experiences to satisfy every palate.</p>
            </div>
            <div className="pt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-5">
                {/* cards start */}

                {
                    data?.restaurents?.slice(0, 5)?.map(restaurant => <>
                     {/* card 1 */}
                <div className="flex justify-center items-center flex-col">
                   <div className="overflow-hidden rounded-full">
                   <Image className="rounded-full transition-all object-cover duration-700 hover:scale-110  w-[200px] h-[200px]" src={restaurant?.restaurantImage} width={200} height={200} alt="restaurant"/>
                   
                   </div>
                   <span className="inline-flex text-center justify-center mt-3  px-1.5 py-0.5 rounded-full  text-sm items-center gap-2">
                            <IoLocationOutline /> {restaurant?.location}
                    </span>
                    <Link href={`/restaurants/${restaurant._id}`} className="text-2xl  font-bold">
                    <div className="relative group">
                    {restaurant?.restaurantName}
                    <span className="w-full h-0.5 absolute bg-primary -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
                    </div>
                    </Link>
                    <div className="">
                    <p className="flex mt-2 items-center  font-medium">
                    <FaStar className="text-orange-400" /> {`${restaurant?.rating}(${restaurant?.reviewNumber})`}
                    </p>
                    </div>
                </div>
                    </>)
                }
              

                {/* cards end */}
                
            </div>
            <div className="flex my-6 justify-center">
                <Link href={"/restaurants"} className="relative inline-flex items-center w-36 justify-center p-2 px-3 py-2 overflow-hidden font-medium text-primaryLight transition duration-300 ease-out border-2 border-primaryLight rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primaryLight group-hover:translate-x-0 ease">
                <FaArrowRightLong className="w-6 h-6" />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-primaryLight transition-all duration-300 transform group-hover:translate-x-full ease">SEE MORE</span>
                <span className="relative invisible">SEE MORE</span>
                </Link>
                </div>
        </div>
    );
};

export default TopRestaurants;