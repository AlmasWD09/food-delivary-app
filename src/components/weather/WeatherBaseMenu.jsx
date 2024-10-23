"use client"
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";


const WeatherBaseMenu = () => {
    const session = useSession()
    console.log(session);
    const [menuItems, setMenuItems] = useState([]);
    const [weatherCondition, setWeatherCondition] = useState('');
    const [menuData, setMenuData] = useState([]);

     // Fetch menu data from JSON file
     useEffect(() => {
        const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/weatherMenus`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMenuData(data);
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


    return (
        <>
        <div className="container my-10 mx-auto px-2">
            <h1 className="text-3xl font-bold uppercase text-center text-primary py-6">Weather Base Menu </h1>
            <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuItems.map((item) => (
                    <div key={item.id} className="bg-green-300">
                        <img src={item.image} alt="" className="w-[200px] h-[200px]" />
                        {/* <Image
              width={400}
              height={400}
              src={item?.image}
              className="lg:max-h-[400px] w-full"
              alt={item.name} 
            />*/}
                        <p className="uppercase font-bold text-2xl text-gray-400">Category: <span className="text-sky-600">{item.category}</span></p>
                        <p className="text-red-600 font-bold">{item.name} - ${item.price.toFixed(2)}</p>
                        <p className="text-red-600 font-bold">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default WeatherBaseMenu;