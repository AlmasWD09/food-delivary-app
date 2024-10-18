"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const CustomerReviews = () => {
    return (
        <div className='relative bg-no-repeat bg-cover bg-blend-darken'  >
           
        <div className="px-2 lg:px-0 lg:max-w-[1240px] mx-auto dark:bg-gray-900">
            <div className="container  py-10 mx-auto">
                <div className="my-6  md:flex md:items-center md:justify-between">
                    <div className='flex z-40 flex-col justify-center text-center'>
                        <p className='font-semibold my-3'>Testimonials</p>
                        <h1 className="text-2xl font-semibold  capitalize lg:text-3xl dark:text-white">
                            What our clients are saying
                        </h1>


                       
                      <div className='flex justify-center'>
                      <p className='md:w-3/5 text-center mt-3'>See what our customers are saying! Read honest reviews from people who have used our service. Your feedback helps us improve. We value every opinion and strive to make each experience better.</p>
                      </div>
                    </div>

                   
                </div>

               <div className='relative'>
             
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
                  
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Pagination, Navigation,Autoplay]}
                    className="mySwiper "
                    >
                         <SwiperSlide >
                           <div className=' w-full md:max-w-[377px] md:min-h-[238px] text-start mt-5 p-1 md:p-4 rounded-xl'> 
                                <div className='border bg-white transition-all duration-700 hover:scale-110 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl mb-4 p-4 hover:shadow-2xl'>
                                <h3 className="lg:text-2xl text-xl font-semibold">Spice Garden</h3>
                                <p className='my-2 text-base md:my-4'>The food was absolutely delicious, and the staff were friendly. I highly recommend trying the biryani!</p>
                               
                                </div>
                                <div>
                                    <div className='flex gap-2 items-center '>
                                        <Image width={64} height={32} className='max-w-16 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl h-8' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                        <div>
                                        <p className='font-medium'>John Doe</p>
                                        <p className='flex items-center gap-1'>4.5 <FaStar className='text-orange-500' /></p>
                                        </div>
                                    </div>
                                   
                                </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide >
                           <div className=' w-full md:max-w-[377px] md:min-h-[238px] text-start mt-5 p-1 md:p-4 rounded-xl'> 
                                <div className='border bg-white transition-all duration-700 hover:scale-110 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl mb-4 p-4 hover:shadow-2xl'>
                                <h3 className="lg:text-2xl text-xl font-semibold">Spice Garden</h3>
                                <p className='my-2 text-base md:my-4'>The food was absolutely delicious, and the staff were friendly. I highly recommend trying the biryani!</p>
                               
                                </div>
                                <div>
                                    <div className='flex gap-2 items-center '>
                                        <Image width={64} height={32} className='max-w-16 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl h-8' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                        <div>
                                        <p className='font-medium'>John Doe</p>
                                        <p className='flex items-center gap-1'>4.5 <FaStar className='text-orange-500' /></p>
                                        </div>
                                    </div>
                                   
                                </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide >
                           <div className=' w-full md:max-w-[377px] md:min-h-[238px] text-start mt-5 p-1 md:p-4 rounded-xl'> 
                                <div className='border bg-white transition-all duration-700 hover:scale-110 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl mb-4 p-4 hover:shadow-2xl'>
                                <h3 className="lg:text-2xl text-xl font-semibold">Spice Garden</h3>
                                <p className='my-2 text-base md:my-4'>The food was absolutely delicious, and the staff were friendly. I highly recommend trying the biryani!</p>
                               
                                </div>
                                <div>
                                    <div className='flex gap-2 items-center '>
                                        <Image width={64} height={32} className='max-w-16 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl h-8' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                        <div>
                                        <p className='font-medium'>John Doe</p>
                                        <p className='flex items-center gap-1'>4.5 <FaStar className='text-orange-500' /></p>
                                        </div>
                                    </div>
                                   
                                </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide >
                           <div className=' w-full md:max-w-[377px] md:min-h-[238px] text-start mt-5 p-1 md:p-4 rounded-xl'> 
                                <div className='border bg-white transition-all duration-700 hover:scale-110 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl mb-4 p-4 hover:shadow-2xl'>
                                <h3 className="lg:text-2xl text-xl font-semibold">Spice Garden</h3>
                                <p className='my-2 text-base md:my-4'>The food was absolutely delicious, and the staff were friendly. I highly recommend trying the biryani!</p>
                               
                                </div>
                                <div>
                                    <div className='flex gap-2 items-center '>
                                        <Image width={64} height={32} className='max-w-16 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl h-8' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                        <div>
                                        <p className='font-medium'>John Doe</p>
                                        <p className='flex items-center gap-1'>4.5 <FaStar className='text-orange-500' /></p>
                                        </div>
                                    </div>
                                   
                                </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide >
                           <div className=' w-full md:max-w-[377px] md:min-h-[238px] text-start mt-5 p-1 md:p-4 rounded-xl'> 
                                <div className='border bg-white transition-all duration-700 hover:scale-110 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl mb-4 p-4 hover:shadow-2xl'>
                                <h3 className="lg:text-2xl text-xl font-semibold">Spice Garden</h3>
                                <p className='my-2 text-base md:my-4'>The food was absolutely delicious, and the staff were friendly. I highly recommend trying the biryani!</p>
                               
                                </div>
                                <div>
                                    <div className='flex gap-2 items-center '>
                                        <Image width={64} height={32} className='max-w-16 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl h-8' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                        <div>
                                        <p className='font-medium'>John Doe</p>
                                        <p className='flex items-center gap-1'>4.5 <FaStar className='text-orange-500' /></p>
                                        </div>
                                    </div>
                                   
                                </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide >
                           <div className=' w-full md:max-w-[377px] md:min-h-[238px] text-start mt-5 p-1 md:p-4 rounded-xl'> 
                                <div className='border bg-white transition-all duration-700 hover:scale-110 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl mb-4 p-4 hover:shadow-2xl'>
                                <h3 className="lg:text-2xl text-xl font-semibold">Spice Garden</h3>
                                <p className='my-2 text-base md:my-4'>The food was absolutely delicious, and the staff were friendly. I highly recommend trying the biryani!</p>
                               
                                </div>
                                <div>
                                    <div className='flex gap-2 items-center '>
                                        <Image width={64} height={32} className='max-w-16 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl h-8' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                        <div>
                                        <p className='font-medium'>John Doe</p>
                                        <p className='flex items-center gap-1'>4.5 <FaStar className='text-orange-500' /></p>
                                        </div>
                                    </div>
                                   
                                </div>
                           </div>
                        </SwiperSlide>
                    </Swiper>
                   {/*  */}
            <div className="swiper-button-prev bg-[#FF4D00] text-white rounded-full w-10 h-10 flex items-center justify-center absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
                &#8249;
            </div>
            <div className="swiper-button-next bg-[#FF4D00] text-white rounded-full w-10 h-10 flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
                &#8250;
            </div>
            
               </div>
               </div>
               </div>
               </div>
  )
};

export default CustomerReviews;
