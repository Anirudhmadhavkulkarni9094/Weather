
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import your custom styles
import WeatherCard from './WeatherCard';


function Home() {
const [weatherData, setWeatherData] = useState(null);
const [city, setCity] = useState('');
const [error, setError] = useState('');
// const [weather , setWeather] = useState('');
const fetchWeatherData = async () => {
  if (!city.trim()) {
    setError('Please enter a city name.');
    setWeatherData(null); // Clear previous weather data on error
    return;
  }

  try {
    const response = await axios.get(`http://127.0.0.1:5000/get_weather?city=${city}`);
    if (response.data && response.data.cloud_pct !== '') {
      setWeatherData(response.data);
      setError('');
    } else {
      setError('Enter a valid city name.');
      setWeatherData(null); // Clear previous weather data on error
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    setError('An error occurred while fetching weather data.');
    setWeatherData(null); // Clear previous weather data on error
  }
};


return (
  <div className="App">
    <div className="header">
      <h1 className='title'>Weather App</h1>
      <div className='input-container'>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          />
        <button onClick={fetchWeatherData}>Get Weather</button>
      </div>
    </div>
    { weatherData && (weatherData.cloud_pct != null ? (
      <div className="card-det">

        <WeatherCard weather = {weatherData}/>
      </div>
    ): <h4 className='weather-details'>Enter valid city name!</h4>)}
    {error && <div className="error weather-details">{error}</div>}
    
  </div>
);
}

export default Home;