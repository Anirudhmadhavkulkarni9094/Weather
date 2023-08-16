import React from 'react';
import sunny from './sunny.png';
import './weather-card.css';
import winter from './winter.png'



function WeatherCard({ weather }) {

    const sunrise = weather.sunrise;
    const dtObject = new Date(sunrise * 1000); // Multiply by 1000 to convert seconds to milliseconds
    console.log("Formatted:", dtObject.toLocaleString());

    const sunset = weather.sunset;
    const dtObject2 = new Date(sunset * 1000); // Multiply by 1000 to convert seconds to milliseconds
    console.log("Formatted:", dtObject2.toLocaleString());
    const dark = "dark";
    const light = "light"

  return (
    <div className='card'>
        <img src={weather.temp < 20 ? winter : sunny}  className={`weather-img`} alt='Weather Icon' />
        <h1 className={`temp ${weather.temp < 20 ? dark: light}`}>{weather.temp}°C</h1>
        <div className={`temp-det ${weather.temp < 20 ? dark: light}`}>
        <p>Min Temperature: {weather.min_temp} °C</p>
        <p> Max Temperature: {weather.max_temp} °C</p>
        </div>
        <div className='details'>
        <p>Cloud Percentage: {weather.cloud_pct}%</p>
          <p>Feels Like: {weather.feels_like}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          
          <p>Wind Speed: {weather.wind_speed} km/h</p>
          <p>Wind Degrees: {weather.wind_degrees} °</p>
          <p>Sunrise: {dtObject.toLocaleString().slice(11,)}</p>
          <p>Sunset: {dtObject2.toLocaleString().slice(11,)}</p>
        </div>
        
    </div>
  );
}

export default WeatherCard;