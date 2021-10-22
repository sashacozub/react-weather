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

  // Fetch the weather data on page load
  useEffect(() => {
    getCurrentWeather(searchedCity).then((response) => {
      if (response !== undefined) {
        setCurrentWeather(response);
      }
      // Get daily forecast after the current weather with location coordinates is fetched
      getDailyWeather(response).then((response) => {
        console.log(response);
      });
    });
  }, [searchedCity]);

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
      />
      <ForecastList />
    </div>
  );
};

export default App;
