import React from 'react';
import { capitalizeString } from '../../utils/helpers.js';

const Display = ({ currentWeather, isMetric }) => {
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

  return (
    <div>
      <h1>
        {name}, {country}
      </h1>
      <h2>
        {temp.toFixed(1)} &#176;{isMetric ? 'C' : 'F'}
      </h2>
      <h2>
        {feels_like.toFixed(1)} &#176;{isMetric ? 'C' : 'F'}
      </h2>
      <h2>{capitalizeString(description)}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={`${description} icon`}
      />
    </div>
  );
};

export default Display;
