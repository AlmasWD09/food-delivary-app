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
          disableOnInteraction: false, // Ensure autoplay continues after interactions
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
            <div className="max-w-[1240px] flex items-center mx-auto">
              <div className="text-start flex items-center w-full h-[700px] text-white">
                <div>
                  <h2 className="lg:text-6xl text-3xl text-start text-white font-bold">
                    Hey! Wellcome
                    <br /> in Zomato
                  </h2>
                  <p className="text-white my-4 max-w-lg">
                    Discover a world of flavors at your fingertips! Zomato
                    connects you to your favorite restaurants, offering a
                    seamless food delivery experience right to your door.
                  </p>
                  <div className="flex gap-4">
                    <button className="outline-1 outline outline-orange-600 rounded-xl py-2 px-3">
                      About us
                    </button>
                    <button className="bg-orange-600 rounded-xl border-none py-2 px-3">
                      Explore
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
            <div className="max-w-[1240px] flex items-center mx-auto">
              <div className="text-start flex items-center w-full h-[700px] text-white">
                <div>
                  <h2 className="text-6xl text-start text-white font-bold">
                    Delicious Discounts
                  </h2>
                  <p className="text-white my-4 max-w-lg">
                    Savor more for less! Check out our latest discounts and
                    special offers on a wide range of cuisines. Indulge your
                    cravings without breaking the bank!
                  </p>
                  <div className="flex gap-4">
                    <button className="outline-1 outline outline-orange-600 rounded-xl py-2 px-3">
                      About us
                    </button>
                    <button className="bg-orange-600 rounded-xl border-none py-2 px-3">
                      Order now
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
            <div className="max-w-[1240px] flex items-center mx-auto">
              <div className="text-start flex items-center w-full h-[700px] text-white">
                <div>
                  <h2 className="text-6xl text-start text-white font-bold">
                    Restaurant Spotlight
                  </h2>
                  <p className="text-white my-4 max-w-lg">
                    Explore featured restaurants in your area! From local gems
                    to popular chains, discover what makes each dining
                    experience unique and tempting.
                  </p>
                  <div className="flex gap-4">
                    <button className="outline-1 outline outline-orange-600 rounded-xl py-2 px-3">
                      About us
                    </button>
                    <button className="bg-orange-600 rounded-xl border-none py-2 px-3">
                      Be a partner
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
            <div className="max-w-[1240px] flex items-center mx-auto">
              <div className="text-start flex items-center w-full h-[700px] text-white">
                <div>
                  <h2 className="text-6xl text-start text-white font-bold">
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
