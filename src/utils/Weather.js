// const API_KEY = 'your-api-key';  // KEEP YOUR API KEY HIDDEN!

const axios = require('axios');

// const API_KEY = process.env.REACT_APP_API_KEY;

// export const getCurrentWeather = async (term) => {
//   try {
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${API_KEY}`
//     );
//     const { data } = response;
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getDailyWeather = async (location) => {
//   const { lat, lon } = location.coord;
//   try {
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`
//     );
//     // Desctructure array of forecast days from response data
//     const {
//       data: { daily },
//     } = response;
//     return daily;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getCurrentWeather = async (term) => {
  try {
    const response = await axios.get(
      `/.netlify/functions/fetch-current-weather/?q=${term}`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDailyWeather = async (location) => {
  const { lat, lon } = location.coord;
  try {
    const response = await axios.get(
      `/.netlify/functions/fetch-daily-weather/?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts`
    );
    // Desctructure array of forecast days from response data
    const {
      data: { daily },
    } = response;
    return daily;
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
