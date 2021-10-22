import React from 'react';
import './ForecastDay.css';

const ForecastDay = () => {
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(1634986800 * 1000).getDay();

  return (
    <li className='forecast-day'>
      <h3>{weekdays[date]}</h3>
      <img src='http://openweathermap.org/img/wn/03d.png' alt='' />
      <h3>16 C</h3>
      <h3>Scattered Clouds</h3>
    </li>
  );
};

export default ForecastDay;
