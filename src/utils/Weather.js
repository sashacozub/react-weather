import { API_KEY } from './apiKey';

const axios = require('axios');

export const weatherData = async () => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=${API_KEY}`
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
