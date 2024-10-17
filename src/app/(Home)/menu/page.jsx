"use client"
import Menu from '@/components/Menu';
import RecommendMenu from '@/components/RecommendMenu';
import useMenus from '@/hooks/useMenus';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const MenuPage = () => {
   
     const [menuData,isLoading,refetch] = useMenus()
   
    return (
        <div>
        <div
           style={{
            backgroundImage: `url(https://i.ibb.co.com/9W09Tgs/food1.jpg)`,
          }}
         className="relative w-full bg-fixed h-[500px] bg-no-repeat bg-bottom bg-cover">
        
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="lg:text-6xl text-4xl text-white font-bold">Delish all menu</h3>
                <div className="bg-[#FF4D00] mx-auto md:w-1/2 text-center mt-8 p-4">
                    <h3 className="text-xl text-white flex justify-center items-center gap-4">Home <FaArrowRight/> Menu</h3>
                </div>
            </div>
        </div>
       {/* <Menu menuData={menuData} refetch={refetch} /> */}
       <div className="py-20 px-3 lg:px-0 lg:max-w-[1240px] mx-auto">
        <p className="text-xl  font-medium">Recommended</p>
          <h3 className="text-4xl mt-1 mb-8 font-bold">Just for you</h3>
          <RecommendMenu menuData={menuData} isLoading={isLoading} />
       </div>
    </div>
    );
};



export default MenuPage;