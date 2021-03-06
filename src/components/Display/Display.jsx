import React from 'react';
import './Display.css';
import {
  capitalizeString,
  convertTemperature,
  temperatureColors,
} from '../../utils/helpers.js';

const Display = ({
  currentWeather,
  lastFetched,
  isMetric,
  onClick,
  isLoading,
  isError,
  onRefresh,
}) => {
  // Desctructure the JSON response from weather API
  let {
    name,
    main: { temp, feels_like },
    sys: { country },
    weather: [{ description, icon }],
  } = currentWeather;

  return (
    <>
      <div className='main-weather-info-box'>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={`${description} icon`}
        />

        <div className='temperatures'>
          <h1 style={temperatureColors(temp)}>
            {isError ? <span>---</span> : convertTemperature(temp, isMetric)}{' '}
            &#176;{isMetric ? 'C' : 'F'}
          </h1>
          <h4>
            Feels like:{' '}
            {isError ? (
              <span>---</span>
            ) : (
              convertTemperature(feels_like, isMetric)
            )}{' '}
            &#176;
            {isMetric ? 'C' : 'F'}
          </h4>
        </div>

        <div className='temperature-toggle'>
          <button className='simple-btn' value='celcius' onClick={onClick}>
            &#176;C
          </button>
          <button className='simple-btn' value='fahrenheit' onClick={onClick}>
            &#176;F
          </button>
        </div>
      </div>

      <h3>{capitalizeString(description)}</h3>
      {isError ? (
        <p>Oops! Seems there was an error...</p>
      ) : (
        <div className='last-fetched-box'>
          {isLoading ? (
            <p style={{ fontSize: '2rem' }}>Fetching weather...</p>
          ) : (
            <h2 className='location-names'>
              {name}, {country}
            </h2>
          )}
          <div className='last-fetched-display'>
            <p style={{ fontWeight: '100' }}>
              Last fetched: {isLoading ? '---' : lastFetched.toLocaleString()}
            </p>
            <button className='simple-btn' onClick={onRefresh}>
              Update now
            </button>
          </div>
        </div>
      )}
      <hr />
    </>
  );
};

export default Display;
