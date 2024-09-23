"use client"


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa";

const CustomerReviews = () => {
    return (
        <div>
        <div className="bg-white px-2 lg:px-0 lg:max-w-[1240px] mx-auto dark:bg-gray-900">
            <div className="container  py-10 mx-auto">
                <div className="mt-6 md:flex md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            What our clients are saying
                        </h1>

                        <div className="flex mx-auto mt-6">
                            <span className="inline-block w-40 h-1 bg-[#FF4D00] rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-[#FF4D00] rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-[#FF4D00] rounded-full"></span>
                        </div>
                    </div>

                   
                </div>

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
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                      }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    navigation={true}
                    modules={[Pagination, Navigation,Autoplay]}
                    className="mySwiper "
                    >
                        <SwiperSlide >
                           <div className='border w-full md:max-w-[377px] md:min-h-[238px] text-start mt-5 p-1 md:p-4 rounded-xl'> 
                                <h3 className="lg:text-2xl text-xl font-semibold">Spice Garden</h3>
                                <p className='my-2 text-base md:my-4'>The food was absolutely delicious, and the staff were friendly. I highly recommend trying the biryani!</p>
                               
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <img className='max-w-16 rounded-full h-8' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                        <p className='font-medium'>John Doe</p>
                                    </div>
                                    <p className='flex items-center gap-1'>4.5 <FaStar className='text-orange-500' /></p>
                                </div>
                           </div>
                        </SwiperSlide>
                      
                       
                        <SwiperSlide >
                           <div className='border w-full md:max-w-[377px] md:min-h-[238px] text-start mt-5 p-1 md:p-4 rounded-xl'> 
                                <h3 className="lg:text-2xl text-xl font-semibold">Ocean Breeze</h3>
                                <p className='my-2 text-base md:my-4'>Amazing seafood with a great ocean view. The lobster was cooked to perfection!</p>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <img className='max-w-16 rounded-full h-8' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                        <p className='font-medium'>Jane Smith</p>
                                    </div>
                                    <p className='flex items-center gap-1'>4.0 <FaStar className='text-orange-500' /></p>
                                </div>
                           </div>
                        </SwiperSlide>
                      
                       
                        <SwiperSlide >
                           <div className='border w-full md:max-w-[377px] md:min-h-[238px] text-start mt-5 p-1 md:p-4 rounded-xl'> 
                                <h3 className="lg:text-2xl text-xl font-semibold">Green Leaf Diner</h3>
                                <p className='my-2 text-base md:my-4'>Best vegan food in town! The variety of dishes and freshness is impressive. Highly recommend.</p>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <img className='max-w-16 rounded-full h-8' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                        <p className='font-medium'>Michael Brown</p>
                                    </div>
                                    <p className='flex items-center gap-1'>5.0 <FaStar className='text-orange-500' /></p>
                                </div>
                           </div>
                        </SwiperSlide>
                      
                       
                        <SwiperSlide >
                           <div className='border w-full md:max-w-[377px] md:min-h-[238px] text-start mt-5 p-1 md:p-4 rounded-xl'> 
                                <h3 className="lg:text-2xl text-xl font-semibold">The BBQ Pit</h3>
                                <p className='my-2 text-base md:my-4'>Great barbecue with tender meats and flavorful sauces. Definitely a must-visit for BBQ lovers.</p>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <img className='max-w-16 rounded-full h-8' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                        <p className='font-medium'>Emily Davis</p>
                                    </div>
                                    <p className='flex items-center gap-1'>4.8 <FaStar className='text-orange-500' /></p>
                                </div>
                           </div>
                        </SwiperSlide>
                      
                       
                        <SwiperSlide >
                           <div className='border w-full md:max-w-[377px] md:min-h-[238px] text-start mt-5 p-1 md:p-4 rounded-xl'> 
                                <h3 className="lg:text-2xl text-xl font-semibold">The Italian Place</h3>
                                <p className='my-2 text-base md:my-4'>Authentic Italian cuisine with delicious pasta and pizza options. The atmosphere is warm and cozy.</p>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <img className='max-w-16 rounded-full h-8' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                        <p className='font-medium'>Chris Johnson</p>
                                    </div>
                                    <p className='flex items-center gap-1'>4.7 <FaStar className='text-orange-500' /></p>
                                </div>
                           </div>
                        </SwiperSlide>
                      
                       
                        <SwiperSlide >
                           <div className='border w-full md:max-w-[377px] md:min-h-[238px] text-start mt-5 p-1 md:p-4 rounded-xl'> 
                                <h3 className="lg:text-2xl text-xl font-semibold">Café Delight</h3>
                                <p className='my-2 text-base md:my-4'>The coffee was great, and the desserts were even better! A wonderful spot for a relaxing afternoon.</p>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <img className='max-w-16 rounded-full h-8' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                        <p className='font-medium'>Sarah Lee</p>
                                    </div>
                                    <p className='flex items-center gap-1'>4.3 <FaStar className='text-orange-500' /></p>
                                </div>
                           </div>
                        </SwiperSlide>
                      
                       
                      
                    </Swiper>
               </div>
            </div>
        </div>
    </div>
    );
};

export default CustomerReviews;