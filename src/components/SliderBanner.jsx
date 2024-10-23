"use client"
import Slider from "react-slick";
import foodImage from "../../public/food.png";
import foodImage2 from "../../public/food3.png";
import deli from "../../public/deli.png";
import res from "../../public/re1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuMapPin } from "react-icons/lu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { TbShoppingCartDiscount } from "react-icons/tb";
import Image from "next/image";
import { useEffect, useState } from "react";
import VoiceSearch from "./VoiceSearch";
import Link from "next/link";



const PrevArrow = (props) => {
  const { onClick } = props;
 
  return (
    <button
      onClick={onClick}
      className="text-white ml-3 lg:ml-0 bg-orange-500 rounded-full mr-5 p-2 absolute left-0 bottom-10 z-30 lg:bottom-24"
      style={{ display: "block" }}
    >
      <FaArrowAltCircleLeft />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-white bg-orange-500 rounded-full mr-5 p-2 absolute left-16 bottom-10 z-30 lg:bottom-24"
      style={{ display: "block" }}
    >
      <FaArrowAltCircleRight />
    </button>
  );
};




const SliderBanner = () =>{
 
  const [search,setSearch] = useState("")
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (search.trim() !== "") {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/restaurents/bannerSearch?search=${search}`
          );
          const data = await res.json();
          setRestaurants(data);
        } catch (error) {
          console.error("Error fetching restaurants:", error);
        }
      } else {
        setRestaurants([]);
      }
    };
    fetchRestaurants();
  }, [search]);
  console.log(restaurants)

  const settings = {
    
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    arrows: true, 
    autoplay: true, 
    autoplaySpeed: 3000, 
  };


 

  return (
    <div className="slider-container container mx-auto px-2 relative">
      <Slider {...settings}>
         {/* Slide 1 */}
         <div>
          <div className="md:grid relative px-3 lg:px-0 h-full grid-cols-4 gap-10">
            <div className="col-span-2 relative flex items-center">
              <div>
                <h3 className="lg:text-6xl md:text-5xl text-4xl my-5 md:my-7 text-white font-bold">
                  Savor Flavor at Your Doorstep!
                </h3>
                <h3 className="lg:text-xl text-lg mb-4 text-white font-bold">
                  Enjoy quick delivery of delicious meals from local favorites to gourmet dining!
                </h3>

                {/* Voice and text input search start */}
                <VoiceSearch search={search} setSearch={setSearch} />
                {/* Voice and text input search end */}

                {/* Search Results */}
                <div
                  className={`absolute ${search.trim() === "" ? "hidden" : ""} bg-primaryGray grid gap-3 z-[100] p-8 right-0 left-0 shadow-lg rounded-lg min-h-40 lg:w-3/4`}
                >
                  <p>Results: {restaurants?.length}</p>
                  {restaurants?.length === 0 ? (
                    <div className="flex justify-center items-center">
                      <h3 className="text-xl font-medium text-center">
                        We have no available for<br/> this location!
                      </h3>
                    </div>
                  ) : (
                    restaurants?.map((restaurant) => (
                      <div key={restaurant._id} className="border-b-2 flex items-center gap-2 pb-2">
                        <Image
                          width={40}
                          height={40}
                          src={restaurant?.restaurantImage}
                          className="w-[40px] rounded-xl h-[40px]"
                          alt={restaurant?.restaurantName || "Restaurant Image"}
                        />
                        <div>
                          <Link href={`/restaurants/${restaurant._id}`} className="flex items-center gap-2">
                            <span className="font-medium">{restaurant?.restaurantName}</span>
                            <h3 className="flex items-center">
                              <FaStar className="text-orange-500" />
                              {restaurant?.rating} ({restaurant?.reviewNumber})
                            </h3>
                          </Link>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {/* Search Results End */}
              </div>
            </div>

            <div className="col-span-2 relative z-40 mt-[24px]">
              <Image width="full" height="full" src={deli} alt="" />
              <div className="absolute items-center flex gap-2 lg:gap-4 top-16 lg:top-28 left-0 lg:left-14 bg-white rounded-full p-2 lg:p-3">
                <p className="text-white bg-orange-500 rounded-full p-2">
                  <LuMapPin />
                </p>
                <div>
                  <h3 className="lg:text-xl text-base leading-3 font-bold">12 Restaurants</h3>
                  <p>In your city</p>
                </div>
              </div>

              <div className="absolute animate-pulse duration-6000 -z-10 top-10 left-5 lg:top-20 md:left-10 lg:left-16 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] transform rotate-[-20deg]">
                <div className="absolute inset-0 w-full h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border-4 border-white transform rotate-[10deg]"></div>
                <div className="w-full h-full bg-orange-300 rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional slides go here */}

        {/* slide 2 */}
        <div>
         <div className="md:grid  px-3 lg:px-0 h-full z-40 grid-cols-4   gap-10">
                <div className="col-span-2 z-40 flex items-center">
                    <div>
                    <h3 className="lg:text-6xl md:text-5xl text-4xl my-5 md:my-7 text-white font-bold">Enjoy Delicious Tasty Treats!</h3>
                    <h3 className="lg:text-xl text-lg mb-4 text-white font-bold">Delicious meals delivered fast, satisfying cravings at your doorstep!</h3>
                     {/* Voice and text input search start */}
                <VoiceSearch search={search} setSearch={setSearch} />
                {/* Voice and text input search end */}

                {/* Search Results */}
                <div
                  className={`absolute ${search.trim() === "" ? "hidden" : ""} bg-primaryGray grid gap-3 z-[100] p-8 right-0 left-0 shadow-lg rounded-lg min-h-40  lg:w-[555px]`}
                >
                  <p>Results: {restaurants?.length}</p>
                  {restaurants?.length === 0 ? (
                    <div className="flex justify-center items-center">
                      <h3 className="text-xl font-medium text-center">
                        We have no available for<br/> this location!
                      </h3>
                    </div>
                  ) : (
                    restaurants?.map((restaurant) => (
                      <div key={restaurant._id} className="border-b-2 flex items-center gap-2 pb-2">
                        <Image
                          width={40}
                          height={40}
                          src={restaurant?.restaurantImage}
                          className="w-[40px] rounded-xl h-[40px]"
                          alt={restaurant?.restaurantName || "Restaurant Image"}
                        />
                        <div>
                          <Link href={`/restaurants/${restaurant._id}`} className="flex items-center gap-2">
                            <span className="font-medium">{restaurant?.restaurantName}</span>
                            <h3 className="flex items-center">
                              <FaStar className="text-orange-500" />
                              {restaurant?.rating} ({restaurant?.reviewNumber})
                            </h3>
                          </Link>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {/* Search Results End */}
                   

                    </div>

                </div>
                <div className="col-span-2 md:h-[425px] lg:h-[700px] grid items-center   relative z-40 ">
                    <Image width={'full'} height={"full"} className="top-10 relative md:static" src={foodImage} alt="" />
                    <div className="absolute items-center flex gap-2 lg:gap-4 top-16   lg:top-28 left-0 lg:left-14 bg-white rounded-full p-2 lg:p-3">
                        <p className="text-white bg-orange-500 rounded-full p-2"><TbShoppingCartDiscount /></p>
                        <div>
                            <h3 className="lg:text-xl text-base leading-3 font-bold">10% Discount</h3>
                            <p>Min $50 order</p>
                        </div>
                    </div>
                    <div className="absolute lg:mt-[23px] animate-pulse duration-6000 -z-10 top-10 md:top-16 left-5 lg:top-20 md:left-10 lg:left-16 w-[250px] h-[250px]  lg:w-[500px] lg:h-[500px] transform rotate-[-20deg]">
                    <div className="absolute inset-0 w-full h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border-4 border-white transform rotate-[10deg]"></div>
                    <div className="w-full h-full bg-orange-300 rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"></div>
                </div>




                </div>

          </div>
        </div>

        {/* slide 3 */}
        <div>
        <div className="md:grid  px-3 lg:px-0 h-full z-40 grid-cols-4  gap-10">
                <div className="col-span-2 z-40 flex items-center">
                    <div>
                    <h3 className="lg:text-6xl md:text-5xl text-4xl my-5 md:my-7 text-white font-bold">Best Places to Eat and Enjoy</h3>
                    <h3 className="lg:text-xl text-lg mb-4 text-white font-bold">Highlighting the best dining experiences in town, featuring top-rated restaurants.</h3>
                     {/* Voice and text input search start */}
                <VoiceSearch search={search} setSearch={setSearch} />
                {/* Voice and text input search end */}

                {/* Search Results */}
                <div
                  className={`absolute ${search.trim() === "" ? "hidden" : ""} bg-primaryGray grid gap-3 z-[100] p-8 right-0 left-0 shadow-lg rounded-lg min-h-40 lg:w-[555px]`}
                >
                  <p>Results: {restaurants?.length}</p>
                  {restaurants?.length === 0 ? (
                    <div className="flex justify-center items-center">
                      <h3 className="text-xl font-medium text-center">
                        We have no available for<br/> this location!
                      </h3>
                    </div>
                  ) : (
                    restaurants?.map((restaurant) => (
                      <div key={restaurant._id} className="border-b-2 flex items-center gap-2 pb-2">
                        <Image
                          width={40}
                          height={40}
                          src={restaurant?.restaurantImage}
                          className="w-[40px] rounded-xl h-[40px]"
                          alt={restaurant?.restaurantName || "Restaurant Image"}
                        />
                        <div>
                          <Link href={`/restaurants/${restaurant._id}`} className="flex items-center gap-2">
                            <span className="font-medium">{restaurant?.restaurantName}</span>
                            <h3 className="flex items-center">
                              <FaStar className="text-orange-500" />
                              {restaurant?.rating} ({restaurant?.reviewNumber})
                            </h3>
                          </Link>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {/* Search Results End */}
                   

                    </div>

                </div>
                <div className="col-span-2 md:h-[425px] lg:h-[700px] grid items-center   relative z-40 ">
                    <Image width={'full'} height={"full"} className="top-16 relative md:static" src={foodImage2} alt="" />
                    <div className="absolute items-center flex gap-2 lg:gap-4 top-16   lg:top-28 left-0 lg:left-14 bg-white rounded-full p-2 lg:p-3">
                        <p className="text-white border-orange-400 border-2 rounded-full "><Image width={32} height={"full"} className="w-8 rounded-full" src={res} alt="" /></p>
                        <div>
                            <h3 className="lg:text-xl  text-base leading-3 font-bold">Spice Paradise</h3>
                            <p>Restaurant of the Month</p>
                        </div>
                    </div>
                    <div className="absolute lg:mt-[23px] animate-pulse duration-6000 -z-10 top-10 md:top-16 left-5 lg:top-20 md:left-10 lg:left-16 w-[250px] h-[250px]  lg:w-[500px] lg:h-[500px] transform rotate-[-20deg]">
                    <div className="absolute inset-0 w-full h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border-4 border-white transform rotate-[10deg]"></div>
                    <div className="w-full h-full bg-orange-300 rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"></div>
                </div>




                </div>

          </div>
        </div>
        
      </Slider>
    </div>
  );
}

export default SliderBanner;


