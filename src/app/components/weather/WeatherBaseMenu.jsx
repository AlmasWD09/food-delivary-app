"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import WeatherMenuCrud from "./WeatherMenuCrud";
import { FaArrowRightLong } from "react-icons/fa6";

const WeatherBaseMenu = () => {
  const session = useSession();
  const [menuItems, setMenuItems] = useState([]);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [menuData, setMenuData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Fetch menu data from JSON file
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/weatherMenus`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMenuData(data);
      })
      .catch((error) => {
        console.error("Error loading menu data:", error);
      });
  }, []);

  // Fetch weather data based on geolocation
  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );

      const weather = response.data.weather[0].main.toLowerCase();
      setWeatherCondition(weather); // Update the weather condition
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Get user's geolocation on component mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }, []);

  // Update menu based on weather condition
  const updateMenu = (weatherCondition) => {
    let filteredItems = [];
    if (
      weatherCondition.includes("clouds") ||
      weatherCondition.includes("cold")
    ) {
      filteredItems = menuData.filter((item) => item.weatherName === "cold");
    } else if (
      weatherCondition.includes("clear") ||
      weatherCondition.includes("hot")
    ) {
      filteredItems = menuData.filter((item) => item.weatherName === "hot");
    } else if (weatherCondition.includes("rain")) {
      filteredItems = menuData.filter((item) => item.weatherName === "rain");
    }
    setMenuItems(filteredItems);
  };

  // Watch for changes in weatherCondition and menuData to update menu items
  useEffect(() => {
    if (weatherCondition && menuData.length > 0) {
      updateMenu(weatherCondition);
    }
  }, [weatherCondition, menuData]);
  const classesToDisplay = showAll ? menuItems : menuItems.slice(0, 7);
  return (
    <>
      <div className="container mt-10 mx-auto px-4 lg:px-10">
        <h1 className="text-3xl font-bold uppercase text-center  py-6">
          Weather Base Menu{" "}
        </h1>
        <h1 className="text-xl font-bold border-l-4 border-primary rounded my-2 px-2">
          <span className="text-primary">Weather:</span>
          {weatherCondition}
        </h1>
        <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {classesToDisplay.map((item, idx) => {
            return <WeatherMenuCrud key={idx} item={item} />;
          })}
        </div>

        {menuItems.length > 4 && !showAll && (
          <div className="w-full flex justify-center mt-6">
            <button 
            onClick={() => setShowAll(true)}
            className="relative inline-flex items-center w-36 justify-center p-2 px-3 py-2 overflow-hidden font-medium text-primaryLight transition duration-300 ease-out border-2 border-primaryLight rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primaryLight group-hover:translate-x-0 ease">
            <FaArrowRightLong className="w-6 h-6" />
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-primaryLight transition-all duration-300 transform group-hover:translate-x-full ease">
          Show All
          </span>
          <span className="relative invisible">Show All</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherBaseMenu;
