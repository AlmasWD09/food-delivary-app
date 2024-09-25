"use client"
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";



const Menu = () => {
    return (
        <div className="my-10 lg:max-w-[1240px] mx-auto">
            <h3 className="text-2xl text-[#FF4D00] text-center font-semibold">Food Menu</h3>
            <h2 className="text-3xl my-3 text-center font-bold">Our Specials Menu</h2>
            <div className="mt-5">
                <div className="flex md:justify-center">
                <div className="flex w-full md:w-4/5 lg:w-1/2 flex-col md:flex-row p-4 md:border-2 md:border-black rounded-lg justify-center uppercase my-3 gap-4">
                    <button className="bg-[#FF4D00] border md:border-none text-white rounded-lg p-3">Main Dishes</button>
                    <button className="border md:border-none rounded-lg p-3">Desserts</button>
                    <button className="border md:border-none rounded-lg p-3">Sea Food</button>
                    <button className="border md:border-none rounded-lg p-3">Beverage</button>
                </div>
                </div>
                <div className="mt-8 px-3 lg:px-0 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 md:gap-6 gap-4 lg:gap-10">
                    {/* cards 1 */}
                    <div className="rounded-xl border lg::w-[412px] max-h-[515px]">
                      <div className="overflow-hidden rounded-t-xl">
                      <img className="transition-all object-cover bg-center duration-700 hover:scale-110 rounded-t-xl h-[310px]" src="https://i.ibb.co.com/L89mFt1/1700604212111.jpg" alt="" />
                      </div>
                      <div className="md:w-1/2 w-3/5 -mt-12 rounded-tr-xl p-4 relative  bg-white flex items-center gap-2 justify-between">
                         <p className="flex items-center font-medium"><FaStar className="text-orange-400" /> {"4.8(5.4k)"}</p>
                         <div className="flex gap-1 items-center">
                          <p className="line-through">$35</p> 
                          <p className="font-bold text-xl">$33</p>
                         </div>
                      </div>
                      
                      <div className="p-4 pt-2">
                      
                        <h3 className="text-2xl font-semibold mb-3">Braised Chicken Legs</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, vel!</p>
                        <button className="flex mt-3 justify-center w-full items-center text-medium gap-2 border rounded-full hover:text-white p-3 transition-all duration-700 hover:bg-[#FF4D00]"><IoCartOutline /> Add to cart</button>
                      </div>
                    </div>
                    {/* cards 2 */}
                    <div className="rounded-xl border lg::w-[412px] max-h-[515px]">
                      <div className="overflow-hidden rounded-t-xl">
                      <img className="transition-all object-cover bg-center  duration-700 hover:scale-110 rounded-t-xl h-[310px]" src="https://i.ibb.co.com/L89mFt1/1700604212111.jpg" alt="" />
                      </div>
                      <div className="md:w-1/2 w-3/5 -mt-12 rounded-tr-xl p-4 relative  bg-white flex items-center gap-2 justify-between">
                         <p className="flex items-center font-medium"><FaStar className="text-orange-400" /> {"4.8(5.4k)"}</p>
                         <div className="flex gap-1 items-center">
                          <p className="line-through">$35</p> 
                          <p className="font-bold text-xl">$33</p>
                         </div>
                      </div>
                      
                      <div className="p-4 pt-2">
                      
                        <h3 className="text-2xl font-semibold mb-3">Braised Chicken Legs</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, vel!</p>
                        <button className="flex mt-3 justify-center w-full items-center text-medium gap-2 border rounded-full hover:text-white p-3 transition-all duration-700 hover:bg-[#FF4D00]"><IoCartOutline /> Add to cart</button>
                      </div>
                    </div>
                    {/* cards 3 */}
                    <div className="rounded-xl border lg::w-[412px] max-h-[515px]">
                      <div className="overflow-hidden rounded-t-xl">
                      <img className="transition-all object-cover bg-center duration-700 hover:scale-110 rounded-t-xl h-[310px]" src="https://i.ibb.co.com/L89mFt1/1700604212111.jpg" alt="" />
                      </div>
                      <div className="md:w-1/2 w-3/5 -mt-12 rounded-tr-xl p-4 relative  bg-white flex items-center gap-2 justify-between">
                         <p className="flex items-center font-medium"><FaStar className="text-orange-400" /> {"4.8(5.4k)"}</p>
                         <div className="flex gap-1 items-center">
                          <p className="line-through">$35</p> 
                          <p className="font-bold text-xl">$33</p>
                         </div>
                      </div>
                      
                      <div className="p-4 pt-2">
                      
                        <h3 className="text-2xl font-semibold mb-3">Braised Chicken Legs</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, vel!</p>
                        <button className="flex mt-3 justify-center w-full items-center text-medium gap-2 border rounded-full hover:text-white p-3 transition-all duration-700 hover:bg-[#FF4D00]"><IoCartOutline /> Add to cart</button>
                      </div>
                    </div>
                    {/* cards 4 */}
                    <div className="rounded-xl border lg::w-[412px] max-h-[515px]">
                      <div className="overflow-hidden rounded-t-xl">
                      <img className="transition-all object-cover bg-center duration-700 hover:scale-110 rounded-t-xl h-[310px]" src="https://i.ibb.co.com/L89mFt1/1700604212111.jpg" alt="" />
                      </div>
                      <div className="md:w-1/2 w-3/5 -mt-12 rounded-tr-xl p-4 relative  bg-white flex items-center gap-2 justify-between">
                         <p className="flex items-center font-medium"><FaStar className="text-orange-400" /> {"4.8(5.4k)"}</p>
                         <div className="flex gap-1 items-center">
                          <p className="line-through">$35</p> 
                          <p className="font-bold text-xl">$33</p>
                         </div>
                      </div>
                      
                      <div className="p-4 pt-2">
                      
                        <h3 className="text-2xl font-semibold mb-3">Braised Chicken Legs</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, vel!</p>
                        <button className="flex mt-3 justify-center w-full items-center text-medium gap-2 border rounded-full hover:text-white p-3 transition-all duration-700 hover:bg-[#FF4D00]"><IoCartOutline /> Add to cart</button>
                      </div>
                    </div>
                    {/* cards 5 */}
                    <div className="rounded-xl border lg::w-[412px] max-h-[515px]">
                      <div className="overflow-hidden rounded-t-xl">
                      <img className="transition-all object-cover bg-center duration-700 hover:scale-110 rounded-t-xl h-[310px]" src="https://i.ibb.co.com/L89mFt1/1700604212111.jpg" alt="" />
                      </div>
                      <div className="md:w-1/2 w-3/5 -mt-12 rounded-tr-xl p-4 relative  bg-white flex items-center gap-2 justify-between">
                         <p className="flex items-center font-medium"><FaStar className="text-orange-400" /> {"4.8(5.4k)"}</p>
                         <div className="flex gap-1 items-center">
                          <p className="line-through">$35</p> 
                          <p className="font-bold text-xl">$33</p>
                         </div>
                      </div>
                      
                      <div className="p-4 pt-2">
                      
                        <h3 className="text-2xl font-semibold mb-3">Braised Chicken Legs</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, vel!</p>
                        <button className="flex mt-3 justify-center w-full items-center text-medium gap-2 border rounded-full hover:text-white p-3 transition-all duration-700 hover:bg-[#FF4D00]"><IoCartOutline /> Add to cart</button>
                      </div>
                    </div>
                    {/* cards 6 */}
                    <div className="rounded-xl border lg::w-[412px] max-h-[515px]">
                      <div className="overflow-hidden rounded-t-xl">
                      <img className="transition-all object-cover bg-center duration-700 hover:scale-110 rounded-t-xl h-[310px]" src="https://i.ibb.co.com/L89mFt1/1700604212111.jpg" alt="" />
                      </div>
                      <div className="md:w-1/2 w-3/5 -mt-12 rounded-tr-xl p-4 relative  bg-white flex items-center gap-2 justify-between">
                         <p className="flex items-center font-medium"><FaStar className="text-orange-400" /> {"4.8(5.4k)"}</p>
                         <div className="flex gap-1 items-center">
                          <p className="line-through">$35</p> 
                          <p className="font-bold text-xl">$33</p>
                         </div>
                      </div>
                      
                      <div className="p-4 pt-2">
                      
                        <h3 className="text-2xl font-semibold mb-3">Braised Chicken Legs</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, vel!</p>
                        <button className="flex mt-3 justify-center w-full items-center text-medium gap-2 border rounded-full hover:text-white p-3 transition-all duration-700 hover:bg-[#FF4D00]"><IoCartOutline /> Add to cart</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;