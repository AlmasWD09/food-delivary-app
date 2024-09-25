"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, 
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(https://i.ibb.co.com/Kz9xhS8/Black-White-Simple-Opening-Banner-2.png)`,
            }}
            className="w-full h-[700px] bg-no-repeat bg-center bg-cover"
          >
            <div className="lg:max-w-[1240px] flex items-center mx-auto">
              <div className="md:text-start flex items-center lg:justify-start justify-center w-full lg:h-[700px] h-[500px] text-white">
                <div>
                  <h2 className="md:text-6xl text-3xl md:text-start text-white font-bold">
                    Hey! Wellcome
                    <br /> in Zomato
                  </h2>
                  <p className="text-white my-4 max-w-lg">
                    Discover a world of flavors at your fingertips! Zomato
                    connects you to your favorite restaurants, offering a
                    seamless food delivery experience right to your door.
                  </p>
                  <div className="flex justify-center md:justify-start gap-4">
                      <button class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF4D00] text-[#FF4D00] text-white">
                        <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF4D00] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span class="relative text-[#FF4D00] transition duration-300 group-hover:text-white ease">About</span>
                        </button>
                        <button class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#ff4d00d9] rounded-xl group">
                          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#FF4D00] rounded group-hover:-mr-4 group-hover:-mt-4">
                          <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                          </span>
                          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#ff4d00df] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Explore menu</span>
                          </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* two */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(https://i.ibb.co.com/jWrR881/banner.png)`,
            }}
            className="w-full h-[700px] bg-no-repeat bg-center bg-cover"
          >
            <div className="lg:max-w-[1240px] flex items-center mx-auto">
              <div className="md:text-start flex items-center lg:justify-start justify-center w-full lg:h-[700px] h-[500px] text-white">
                <div>
                  <h2 className="md:text-6xl text-3xl md:text-start text-white font-bold">
                    Delicious Discounts
                  </h2>
                  <p className="text-white my-4 max-w-lg">
                    Savor more for less! Check out our latest discounts and
                    special offers on a wide range of cuisines. Indulge your
                    cravings without breaking the bank!
                  </p>
                  <div className="flex justify-center md:justify-start gap-4">
                      <button class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF4D00] text-[#FF4D00] text-white">
                        <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF4D00] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span class="relative text-[#FF4D00] transition duration-300 group-hover:text-white ease">About</span>
                        </button>
                        <button class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#ff4d00d9] rounded-xl group">
                          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#FF4D00] rounded group-hover:-mr-4 group-hover:-mt-4">
                          <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                          </span>
                          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#ff4d00df] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Explore menu</span>
                          </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(https://i.ibb.co.com/QvLsnDW/Food-Business-You-Tube-Thumbnail.png)`,
            }}
            className="w-full h-[700px] bg-no-repeat bg-center bg-cover"
          >
            <div className="lg:max-w-[1240px] flex items-center mx-auto">
              <div className="md:text-start flex items-center lg:justify-start justify-center w-full lg:h-[700px] h-[500px] text-white">
                <div>
                  <h2 className="md:text-6xl text-3xl md:text-start text-white font-bold">
                    Restaurant Spotlight
                  </h2>
                  <p className="text-white my-4 max-w-lg">
                    Explore featured restaurants in your area! From local gems
                    to popular chains, discover what makes each dining
                    experience unique and tempting.
                  </p>
                  <div className="flex justify-center md:justify-start gap-4">
                      <button class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF4D00] text-[#FF4D00] text-white">
                        <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF4D00] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span class="relative text-[#FF4D00] transition duration-300 group-hover:text-white ease">About</span>
                        </button>
                        <button class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#ff4d00d9] rounded-xl group">
                          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#FF4D00] rounded group-hover:-mr-4 group-hover:-mt-4">
                          <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                          </span>
                          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#ff4d00df] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Explore menu</span>
                          </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 4 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(https://i.ibb.co.com/Fn4S8TL/Dark-Grey-and-Orange-Modern-Simple-Food-Promotion-Banner.png)`,
            }}
            className="w-full h-[700px] bg-no-repeat bg-center bg-cover"
          >
            <div className="lg:max-w-[1240px] flex items-center mx-auto">
              <div className="md:text-start flex items-center lg:justify-start justify-center w-full lg:h-[700px] h-[500px] text-white">
                <div>
                  <h2 className="md:text-6xl text-3xl md:text-start text-white font-bold">
                    Join Our Delivery
                    <br /> Team
                  </h2>
                  <p className="text-white my-4 max-w-lg">
                    Become a part of the Zomato family! If you’re passionate
                    about food and love being on the move, join us as a delivery
                    partner and earn while you deliver delicious meals.
                  </p>
                  <div className="flex gap-4">
                    <button className="outline-1 outline outline-orange-600 rounded-xl py-2 px-3">
                      About us
                    </button>
                    <button className="bg-orange-600 rounded-xl border-none py-2 px-3">
                      Be a delivery man{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
