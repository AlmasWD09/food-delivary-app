"use client"
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import WeatherMenuCrud from "./WeatherMenuCrud";



const WeatherBaseMenu = () => {
    const session = useSession()
    const [menuItems, setMenuItems] = useState([]);
    const [weatherCondition, setWeatherCondition] = useState('');
    const [menuData, setMenuData] = useState([]);
    const [showAll , setShowAll] = useState(false);

     // Fetch menu data from JSON file
     useEffect(() => {
        const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/weatherMenus`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMenuItems(data);
            })
            .catch(error => {
                console.error('Error loading menu data:', error);
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
            console.error('Error fetching weather data:', error);
        }
    };

      // Get user's geolocation on component mount
      useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetchWeatherData(latitude, longitude);
        }, (error) => {
            console.error('Error getting geolocation:', error);
        });
    }, []);

    // Update menu based on weather condition
    const updateMenu = (weather) => {
        let filteredItems = [];
        if (weather.includes('clouds') || weather.includes('cold')) {
            filteredItems = menuData.filter(item => item.category === 'cold');
        } else if (weather.includes('clear') || weather.includes('hot')) {
            filteredItems = menuData.filter(item => item.category === 'hot');
        } else if (weather.includes('rain')) {
            filteredItems = menuData.filter(item => item.category === 'rain');
        }
        setMenuItems(filteredItems);
    };

    // Watch for changes in weatherCondition and menuData to update menu items
    useEffect(() => {
        if (weatherCondition && menuData.length > 0) {
            updateMenu(weatherCondition);
        }
    }, [weatherCondition, menuData]);


const categories = menuItems.map(item => item.weatherName);
const categoryName = categories[0]

const classesToDisplay = showAll ? menuItems : menuItems.slice(0, 7);
    return (
        <>
        <div className="container mt-10 mx-auto px-4 lg:px-10">
            <h1 className="text-3xl font-bold uppercase text-center py-6">Weather Base Menu </h1>
              <h1 className="text-xl font-bold border-l-4 border-primary rounded my-2 px-2"><span className="text-primary">Weather:</span> {categoryName}</h1>
            <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    classesToDisplay.map((item,idx)=>{
                      return  <WeatherMenuCrud key={idx} item={item} />
                    })
                }
            </div>

              {/* Show the "Show All" button only if there are more than 3 items and not all are shown */}
              {
                            menuItems.length > 4 && !showAll && (
                                <div className="w-full flex justify-center mt-6">
                                    <button
                                        onClick={() => setShowAll(true)} // On click, show all items
                                        className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-full hover:bg-primary/60 focus:outline-none focus:bg-primary"
                                    >
                                        Show All
                                    </button>
                                </div>
                            )
                        }
        </div>
        </>
    );
};

export default WeatherBaseMenu;