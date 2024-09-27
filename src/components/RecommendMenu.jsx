"use client";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import img from "../../public/cheeseBurger.jpg"
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
const RecommendMenu = ({foods}) => {
 
    return (
        <div>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
          
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[Pagination, Navigation,Autoplay]}
            className="mySwiper "
            >
             {
              foods?.map(food => 
              <>
                  <SwiperSlide>
                    <div className='border lg:w-[270px] lg:h-[295px] rounded-xl'>
                        <figure className='overflow-hidden rounded-t-xl'>
                            <img src={food?.image} className="rounded-t-xl max-h-[178px] transition-all duration-700 hover:scale-110" alt="" />
                        </figure>
                       <div className='p-4'>
                        <p className="flex justify-center items-center font-medium"><FaStar className="text-orange-400" /> {"4.8(5.4k)"}</p>
                        <h3 className="text-xl font-semibold text-center">{food?.title}</h3>
                        <div className="flex justify-center gap-1 items-center">
                          <p className="line-through">$35</p> 
                          <p className="font-bold text-xl">${food?.price}</p>
                         </div>
                       </div>
                    </div>
                </SwiperSlide>
              </>)
             }
               
               
            </Swiper>
        </div>
    );
};

export default RecommendMenu;
