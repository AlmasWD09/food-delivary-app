import { IoStarHalfSharp } from "react-icons/io5";
import Image from 'next/image';
import restaurant1 from '../../public/restaurant1.jpg';
import restaurant2 from '../../public/restaurant2.jpg';
import restaurant3 from '../../public/restaurant3.jpg';
import restaurant4 from '../../public/restaurant4.jpg';
import restaurant5 from '../../public/restaurant5.jpg';
import restaurant6 from '../../public/restaurant6.jpg';
import { IoLocationSharp } from "react-icons/io5";

export default function Restaurants() {
  return (
    <>
      {/* Search and Sorting */}
      <div className='flex gap-2 justify-between w-11/12 mx-auto mt-4'>
        <div className="flex gap-2 items-center">
          <label className="input flex items-center w-96 gap-2 rounded-lg pl-4 h-12 border border-black">
            <input type="text" className="grow rounded-full text-lg" placeholder="Search here by restaurant name...." />
          </label>
          <button className="bg-[#F7A582] text-[#FFFFFF] h-12 rounded-lg p-2 px-4 border-[#F7A582] text-xl"> Search</button>
        </div>
        <div className=''>
          <div>
            <select type="dropdown" name='jobcategory' className="px-3 w-full rounded-lg h-12 border-2 border-[#2d2c2ca7] placeholder-[#080808]" >
              <option value="">High to Low</option>
              <option>Low to High</option>
            </select>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4 w-11/12 mx-auto">
        {/* 1st card */}
        <div className="bg-[#f4897dd9] rounded-3xl w-full p-3">
          <div className="grid grid-cols-5 items-center">
            <div className="col-span-3">
              <figure className="mr-6">
                <Image
                  src={restaurant1}
                  className="rounded-3xl"
                  alt="Restaurant"
                  layout="responsive"
                />
              </figure>
            </div>
            <div className="col-span-2">
              <h2 className="text-3xl font-semibold text-red-600">Sultan Dine</h2>
              <h2 className="text-sm">Sultan Dine offers delicious biryani, featuring rich flavors, aromatic spices, and authentic recipes for a memorable dining experience.</h2>
              <div className="mt-2">
                <h2 className="flex items-center text-lg gap-1"><span>Rating : 5</span><IoStarHalfSharp className="text-[#f3d44a] text-xl" /></h2>
                <h1 className="text-lg flex items-center gap-1"><IoLocationSharp /> Agrabad, Chittagong</h1>
                <h2 className="flex items-center text-lg gap-1">Opening : 9:00 AM</h2>
                <h2 className="flex items-center text-lg gap-1">Closing : 10:00 PM</h2>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className="bg-[#f4897dd9] rounded-3xl w-full p-3">
          <div className="grid grid-cols-5 items-center">
            <div className="col-span-3">
              <figure className="mr-6 h-full">
                <Image
                  src={restaurant5}
                  className="rounded-3xl"
                  alt="Restaurant"
                  layout="responsive"
                />
              </figure>
            </div>
            <div className="col-span-2">
              <h2 className="text-3xl font-semibold text-red-600">Big Pizza</h2>
              <h2 className="text-sm">Big Pizza offers a variety of delicious, handcrafted pizzas with fresh ingredients and bold flavors for everyone to enjoy.</h2>
              <div className="mt-2">
                <h2 className="flex items-center text-lg gap-1"><span>Rating : 5</span><IoStarHalfSharp className="text-[#f3d44a] text-xl" /></h2>
                <h1 className="text-lg flex items-center gap-1"><IoLocationSharp /> Mirpur, Dhaka</h1>
                <h2 className="flex items-center text-lg gap-1">Opening : 10:00 AM</h2>
                <h2 className="flex items-center text-lg gap-1">Closing : 9:00 PM</h2>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd card */}
        <div className="bg-[#f4897dd9] rounded-3xl w-full p-3">
          <div className="grid grid-cols-5 items-center">
            <div className="col-span-3">
              <figure className="mr-6">
                <Image
                  src={restaurant3}
                  className="rounded-3xl"
                  alt="Restaurant"
                  layout="responsive"
                />
              </figure>
            </div>
            <div className="col-span-2">
              <h2 className="text-3xl font-semibold text-red-600">Juice Love</h2>
              <h2 className="text-sm">Juice Love offers a refreshing variety of freshly made juices, crafted to energize and delight every customer.</h2>
              <div className="mt-2">
                <h2 className="flex items-center text-lg gap-1"><span>Rating : 5</span><IoStarHalfSharp className="text-[#f3d44a] text-xl" /></h2>
                <h1 className="text-lg flex items-center gap-1"><IoLocationSharp /> GEC, Chittagong</h1>
                <h2 className="flex items-center text-lg gap-1">Opening : 10:00 AM</h2>
                <h2 className="flex items-center text-lg gap-1">Closing : 8:00 PM</h2>
              </div>
            </div>
          </div>
        </div>
        {/* 4th card */}
        <div className="bg-[#f4897dd9] rounded-3xl w-full p-3">
          <div className="grid grid-cols-5 items-center">
            <div className="col-span-3">
              <figure className="mr-6">
                <Image
                  src={restaurant4}
                  className="rounded-3xl"
                  alt="Restaurant"
                  layout="responsive"
                />
              </figure>
            </div>
            <div className="col-span-2">
              <h2 className="text-3xl font-semibold text-red-600">7 Dayz</h2>
              <h2 className="text-sm">7 Dayz offers delicious biryani, featuring rich flavors, aromatic spices, and authentic recipes for a memorable dining experience.</h2>
              <div className="mt-2">
                <h2 className="flex items-center text-lg gap-1"><span>Rating : 5</span><IoStarHalfSharp className="text-[#f3d44a] text-xl" /></h2>
                <h1 className="text-lg flex items-center gap-1"><IoLocationSharp /> 2 No Gate, Chittagong</h1>
                <h2 className="flex items-center text-lg gap-1">Opening : 9:00 AM</h2>
                <h2 className="flex items-center text-lg gap-1">Closing : 8:00 PM</h2>
              </div>
            </div>
          </div>
        </div>
        {/* 5th card */}
        <div className="bg-[#f4897dd9] rounded-3xl w-full p-3">
          <div className="grid grid-cols-5 items-center">
            <div className="col-span-3">
              <figure className="mr-6">
                <Image
                  src={restaurant6}
                  className="rounded-3xl"
                  alt="Restaurant"
                  layout="responsive"
                />
              </figure>
            </div>
            <div className="col-span-2">
              <h2 className="text-3xl font-semibold text-red-600">Burger Queen</h2>
              <h2 className="text-sm">Burger Queen offers gourmet burgers with fresh ingredients and unique flavors in a royal dining experience.</h2>
              <div className="mt-2">
                <h2 className="flex items-center text-lg gap-1"><span>Rating : 5</span><IoStarHalfSharp className="text-[#f3d44a] text-xl" /></h2>
                <h1 className="text-lg flex items-center gap-1"><IoLocationSharp /> Mirpur 11, Dhaka</h1>
                <h2 className="flex items-center text-lg gap-1">Opening : 9:00 AM</h2>
                <h2 className="flex items-center text-lg gap-1">Closing : 8:00 PM</h2>
              </div>
            </div>
          </div>
        </div>
        {/* 6th card */}
        <div className="bg-[#f4897dd9] rounded-3xl w-full p-3">
          <div className="grid grid-cols-5 items-center">
            <div className="col-span-3">
              <figure className="mr-6">
                <Image
                  src={restaurant2}
                  className="rounded-3xl"
                  alt="Restaurant"
                  layout="responsive"
                />
              </figure>
            </div>
            <div className="col-span-2">
              <h2 className="text-3xl font-semibold text-red-600">3 Food</h2>
              <h2 className="text-sm">3 Food offers gourmet burgers with fresh ingredients and unique flavors in a royal dining experience.</h2>
              <div className="mt-2">
                <h2 className="flex items-center text-lg gap-1"><span>Rating : 5</span><IoStarHalfSharp className="text-[#f3d44a] text-xl" /></h2>
                <h1 className="text-lg flex items-center gap-1"><IoLocationSharp /> Mirpur 14, Dhaka</h1>
                <h2 className="flex items-center text-lg gap-1">Opening : 10:00 AM</h2>
                <h2 className="flex items-center text-lg gap-1">Closing : 9:00 PM</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
