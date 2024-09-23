import { IoStarHalfSharp } from "react-icons/io5";
import Image from 'next/image';
import restaurant1 from '../../public/restaurant1.jpg';
import restaurant2 from '../../public/restaurant2.jpg';
import restaurant3 from '../../public/restaurant3.jpg';
import restaurant4 from '../../public/restaurant4.jpg';
import restaurant5 from '../../public/restaurant5.jpg';
import restaurant6 from '../../public/restaurant6.jpg';
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";

export default function Restaurants() {
  return (
    <>
      {/* Search and Sorting */}
      <div className='text-center p-32 mb-8' style={{ backgroundImage: `url('/assets/Bg restaurant.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="m-12">
          <h1 className="text-5xl font-poppins text-[#FFFFFF] font-semibold mb-3">Restaurants & Cafe</h1>
          <div className="flex gap-2 items-center justify-center bg-[#c7c6c6] w-9/12 mx-auto py-3 px-8 rounded-lg">
            <input type="text" className="text-lg rounded-lg p-2 w-full" placeholder="Search here by restaurant name...." />
            <button className="bg-[#F7A582] text-[#FFFFFF] h-11 rounded-lg p-2 px-4 border-[#F7A582] text-xl"> Search</button>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="w-11/12 mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {/* 1st Card */}
        <div>
          <div className="mb-5">
            <Image src={restaurant1} alt="restaurant image" className="h-64" />
          </div>
          <div className="grid grid-cols-11 items-center">
            <div className="col-span-4 text-end pr-3">
              <h1 className="font-semibold">11:00AM - 10:30PM</h1>
              <h1 className="text-sm">Agrabad, Chittagong</h1>
            </div>
            <div className="col-span-7 border-l-[1px] pl-3 border-[#cfcfcf] py-1">
              <h1 className="text-2xl font-semibold hover:text-[#ea1b25] leading-tight">Sultan Dine</h1>
              <div className="text-[#ea1b25] mt-2 flex gap-7">
                <h1 className="items-center flex gap-2"><FiHeart className="text-lg" /><span>100</span></h1>
                <h1 className="items-center flex gap-2"><FaRegComment className="text-lg" /><span>31</span></h1>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd Card */}
        <div>
          <div className="mb-5">
            <Image src={restaurant2} alt="restaurant image" className="h-64" />
          </div>
          <div className="grid grid-cols-11 items-center">
            <div className="col-span-4 text-end pr-3">
              <h1 className="font-semibold">11:00AM - 10:30PM</h1>
              <h1 className="text-sm">Agrabad, Chittagong</h1>
            </div>
            <div className="col-span-7 border-l-[1px] pl-3 border-[#cfcfcf] py-1">
              <h1 className="text-2xl font-semibold hover:text-[#ea1b25] leading-tight">The Exchange Restaurant</h1>
              <div className="text-[#ea1b25] mt-2 flex gap-7">
                <h1 className="items-center flex gap-2"><FiHeart className="text-lg" /><span>80</span></h1>
                <h1 className="items-center flex gap-2"><FaRegComment className="text-lg" /><span>33</span></h1>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd Card */}
        <div>
          <div className="mb-5">
            <Image src={restaurant3} alt="restaurant image" className="h-64" />
          </div>
          <div className="grid grid-cols-11 items-center">
            <div className="col-span-4 text-end pr-3">
              <h1 className="font-semibold">11:00AM - 10:30PM</h1>
              <h1 className="text-sm">Agrabad, Chittagong</h1>
            </div>
            <div className="col-span-7 border-l-[1px] pl-3 border-[#cfcfcf] py-1">
              <h1 className="text-2xl font-semibold hover:text-[#ea1b25] leading-tight">Sultan Dine</h1>
              <div className="text-[#ea1b25] mt-2 flex gap-7">
                <h1 className="items-center flex gap-2"><FiHeart className="text-lg" /><span>100</span></h1>
                <h1 className="items-center flex gap-2"><FaRegComment className="text-lg" /><span>31</span></h1>
              </div>
            </div>
          </div>
        </div>
        {/* 4th Card */}
        <div>
          <div className="mb-5">
            <Image src={restaurant4} alt="restaurant image" className="h-64" />
          </div>
          <div className="grid grid-cols-11 items-center">
            <div className="col-span-4 text-end pr-3">
              <h1 className="font-semibold">11:00AM - 10:30PM</h1>
              <h1 className="text-sm">Agrabad, Chittagong</h1>
            </div>
            <div className="col-span-7 border-l-[1px] pl-3 border-[#cfcfcf] py-1">
              <h1 className="text-2xl font-semibold hover:text-[#ea1b25] leading-tight">Sultan Dine</h1>
              <div className="text-[#ea1b25] mt-2 flex gap-7">
                <h1 className="items-center flex gap-2"><FiHeart className="text-lg" /><span>100</span></h1>
                <h1 className="items-center flex gap-2"><FaRegComment className="text-lg" /><span>31</span></h1>
              </div>
            </div>
          </div>
        </div>
        {/* 5th Card */}
        <div>
          <div className="mb-5">
            <Image src={restaurant5} alt="restaurant image" className="h-64" />
          </div>
          <div className="grid grid-cols-11 items-center">
            <div className="col-span-4 text-end pr-3">
              <h1 className="font-semibold">11:00AM - 10:30PM</h1>
              <h1 className="text-sm">Agrabad, Chittagong</h1>
            </div>
            <div className="col-span-7 border-l-[1px] pl-3 border-[#cfcfcf] py-1">
              <h1 className="text-2xl font-semibold hover:text-[#ea1b25] leading-tight">Sultan Dine</h1>
              <div className="text-[#ea1b25] mt-2 flex gap-7">
                <h1 className="items-center flex gap-2"><FiHeart className="text-lg" /><span>100</span></h1>
                <h1 className="items-center flex gap-2"><FaRegComment className="text-lg" /><span>31</span></h1>
              </div>
            </div>
          </div>
        </div>
        {/* 6th Card */}
        <div>
          <div className="mb-5">
            <Image src={restaurant6} alt="restaurant image" className="h-64" />
          </div>
          <div className="grid grid-cols-11 items-center">
            <div className="col-span-4 text-end pr-3">
              <h1 className="font-semibold">11:00AM - 10:30PM</h1>
              <h1 className="text-sm">Agrabad, Chittagong</h1>
            </div>
            <div className="col-span-7 border-l-[1px] pl-3 border-[#cfcfcf] py-1">
              <h1 className="text-2xl font-semibold hover:text-[#ea1b25] leading-tight">Sultan Dine</h1>
              <div className="text-[#ea1b25] mt-2 flex gap-7">
                <h1 className="items-center flex gap-2"><FiHeart className="text-lg" /><span>100</span></h1>
                <h1 className="items-center flex gap-2"><FaRegComment className="text-lg" /><span>31</span></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
