import React, { useState, useEffect } from 'react';
import './App.css';
import { weatherData, initialState } from '../../utils/Weather.js';
import Display from '../Display/Display';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(initialState);
  const [isMetric, setIsMetric] = useState(true); // Metric or Imperial Units

  // Fetch the weather data on page load
  useEffect(() => {
    weatherData().then((response) => {
      setCurrentWeather(response);
    });
  }, []);

  const handleIsMetric = () => {
    return isMetric ? setIsMetric(false) : setIsMetric(true);
  };

  return (
    <div className='main-container'>
      <Display currentWeather={currentWeather} isMetric={isMetric} />
      {/* <button style={{ padding: '10px 20px' }} onClick={handleIsMetric}>
        Celcius / Fahrenheit
      </button> */}
    </div>
  );
};

export default App;
