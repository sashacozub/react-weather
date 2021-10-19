import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { loadData, weatherData } from '../Display/displaySlice.js';

const App = () => {
  const dispatch = useDispatch();
  const weather = useSelector(weatherData);
  const onFirstRender = dispatch(loadData());

  useEffect(() => onFirstRender, [onFirstRender]);

  return (
    <div>
      <h1>
        {weather.name}, {weather.sys.country}
      </h1>
      <h2>Temperature: {weather.main.temp}</h2>
      <h4>Feels like: {weather.main.feels_like}</h4>
      <h4>{weather.weather[0].description}</h4>
    </div>
  );
};

export default App;
