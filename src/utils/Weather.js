import { API_KEY } from './apiKey';

const axios = require('axios');

export const getWeatherData = async (term) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${API_KEY}`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const initialState = {
  name: '---',
  main: {
    temp: '---',
    feels_like: '---',
  },
  sys: {
    country: '',
  },
  weather: [
    {
      description: '---',
      icon: '01d',
    },
  ],
};
