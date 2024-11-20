import React, { useState } from "react";
import axios from "axios";

const TempApp = () => {
  const [city, setcity] = useState();
  const [weather, setweather] = useState();

  const fetchweather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"b643f1bc66478ab00dcc30f68a1ab7d1"}`
      );
      setweather(response); // Fix here: setweather to response, not fetchweather
      console.log(response);
    } catch (error) {
      console.log("Error Fetching API....");
    }
  };

  const HandleClick = () => {
    fetchweather(); // Corrected: Ensure fetchweather is called directly
  };

  const HandleCityChange = (e) => {
    setcity(e.target.value);
  };

  return (
    <div className="weather-container">
      <input
        className="py-1.5 px-20"
        type="text"
        placeholder="Enter the City Name ..."
        value={city}
        onChange={HandleCityChange}
      />
      <button
        className="bg-red-600 py-2 px-4 rounded-xl mt-6"
        onClick={HandleClick}
      >
        Get Weather
      </button>
      {weather && (
        <>
          <h3>{weather.data.name}</h3>
          <p>Temp is {weather.data.main.temp}</p>
          <p>{weather.data.weather[0].description}</p>
        </>
      )}
    </div>
  );
};

export default TempApp;
