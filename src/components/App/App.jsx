import React, { useState, useEffect } from 'react';
import './App.css';
import {
  getCurrentWeather,
  getDailyWeather,
  initialState,
} from '../../utils/Weather.js';
import Display from '../Display/Display';
import SearchBar from '../SearchBar/SearchBar';
import ForecastList from '../ForecastList/ForecastList';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(initialState);
  const [isMetric, setIsMetric] = useState(true); // Metric or Imperial Units
  const [searchedCity, setSearchedCity] = useState('Oslo');
  const [forecast, setForecast] = useState([]); // Forecast for next 7 days
  const [isLoading, setIsLoading] = useState(true);

  const faviconLink = document.querySelector("link[rel~='icon']");

  // Fetch the weather data on page load
  useEffect(() => {
    setIsLoading(true);
    getCurrentWeather(searchedCity).then((response) => {
      if (response !== undefined) {
        setCurrentWeather(response);
        faviconLink.href = `http://openweathermap.org/img/wn/${response.weather[0].icon}.png`;
        document.title = `${response.name} Weather`;

        // Get daily forecast after the current weather with location coordinates is fetched
        getDailyWeather(response).then((response) => {
          setForecast(response);
          setIsLoading(false);
        });
      }
    });
  }, [searchedCity, faviconLink]);

  const handleIsMetric = ({ target }) => {
    target.value === 'fahrenheit' ? setIsMetric(false) : setIsMetric(true);
  };

  const handleSubmit = (term) => {
    setSearchedCity(term);
  };

  return (
    <div className='main-container'>
      <SearchBar onSubmit={handleSubmit} />
      <Display
        currentWeather={currentWeather}
        isMetric={isMetric}
        onClick={handleIsMetric}
        isLoading={isLoading}
      />
      <ForecastList forecast={forecast} isMetric={isMetric} />
    </div>
  );
};

export default App;
