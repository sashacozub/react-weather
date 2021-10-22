import React from 'react';
import './Display.css';
import { capitalizeString } from '../../utils/helpers.js';

const Display = ({ currentWeather, isMetric, onClick }) => {
  // Desctructure the JSON response from weather API
  let {
    name,
    main: { temp, feels_like },
    sys: { country },
    weather: [{ description, icon }],
  } = currentWeather;

  // Convert the default Kelvin temperature to metric or imperial system
  if (isMetric) {
    temp = temp - 273.15;
    feels_like = feels_like - 273.15;
  } else {
    temp = ((temp - 273.15) * 9) / 5 + 32;
    feels_like = ((feels_like - 273.15) * 9) / 5 + 32;
  }

  const coldWeatherStyle = {
    color: 'rgb(99, 189, 241)',
  };

  const warmWeatherStyle = {
    color: 'rgb(241, 151, 99)',
  };

  return (
    <>
      <div className='main-weather-info-box'>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={`${description} icon`}
        />

        <div className='temperatures'>
          <h1>
            {temp.toFixed(1)} &#176;{isMetric ? 'C' : 'F'}
          </h1>
          <h4>
            Feels like: {feels_like.toFixed(1)} &#176;{isMetric ? 'C' : 'F'}
          </h4>
        </div>

        <div className='temperature-toggle'>
          <button value='celcius' onClick={onClick}>
            &#176;C
          </button>
          <button value='fahrenheit' onClick={onClick}>
            &#176;F
          </button>
        </div>
      </div>

      <h3>{capitalizeString(description)}</h3>
      <h2>
        {name}, {country}
      </h2>
      <hr />
    </>
  );
};

export default Display;
