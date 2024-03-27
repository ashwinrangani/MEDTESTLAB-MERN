import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather',
          {
            params: {
              q: 'Bhuj,in',
              appid: '6461e754e9404cac4f2e32f96e44044d',
              units: 'metric', 
            },
          }
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();

    
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { main, weather } = weatherData;
  const temperature = main.temp;
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
  /* const weatherDescription = weather[0].description; */

  return (
    <div>
      <div>{temperature} °C</div>
      <div className='flex items-end'>
        <img src={weatherIcon} alt="Weather"/>
      </div>
    </div>
  );
};

export default Weather;
