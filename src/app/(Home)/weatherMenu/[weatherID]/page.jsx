"use client";  // To ensure this is a Client Component

import { useEffect, useState } from "react";

const WeatherDetails = ({ params }) => {
  const { weatherID } = params;  
  
  const [singleWeatherMenu, setSingleWeatherMenu] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    if (!weatherID) return;  // If weatherID is not yet available, return early

    const fetchWeatherMenuDetails = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/weatherMenus/${weatherID}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch weather menu details");
        }

        const data = await response.json();
        setSingleWeatherMenu(data);  // Store the fetched data
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching weather menu details:", error);
        setError(error.message);
        setLoading(false);  // Set loading to false even if there's an error
      }
    };

    fetchWeatherMenuDetails();
  }, [weatherID]);  // Runs whenever weatherID changes

  // Render loading, error, or weather menu details
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center py-6">Weather Details: ({weatherID})</h1>

      {loading ? (
        <loading />
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        singleWeatherMenu && (
            <div className="max-w-2xl mx-auto  bg-white rounded-lg shadow-md mt-2">
            <img
                className="object-cover object-center w-full h-64 md:h-96 rounded-lg"
                src={singleWeatherMenu.photo}
                alt={singleWeatherMenu.name}
            />
        
            <div className="p-6">
                <div>
                    <h3
                        className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform hover:text-gray-600"
                        tabIndex="0"
                    >
                        {singleWeatherMenu.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 ">
                        {singleWeatherMenu.description}
                    </p>
                    <p className="mt-2 text-sm text-gray-600 ">
                        {singleWeatherMenu.price}
                    </p>
                </div>
        
            </div>
        </div>
        )
      )}
    </div>
  );
};

export default WeatherDetails;
