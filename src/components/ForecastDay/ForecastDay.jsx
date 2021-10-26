import React from 'react';
import './ForecastDay.css';
import {
  capitalizeString,
  convertTemperature,
  temperatureColors,
} from '../../utils/helpers.js';

const ForecastDay = ({ data, isMetric }) => {
  const {
    dt,
    weather: [{ description, icon }],
    temp: { day: temperature },
  } = data;
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(dt * 1000).getDay();

  return (
    <tr>
      <td>{weekdays[date]}</td>
      <td>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={dt} />
      </td>
      <td style={temperatureColors(temperature)}>
        {convertTemperature(temperature, isMetric)} &#176;{isMetric ? 'C' : 'F'}
      </td>
      <td>{capitalizeString(description)}</td>
    </tr>
  );
};

export default ForecastDay;
