const axios = require('axios');

const handler = async (event) => {
  const { q } = event.queryStringParameters;

  const API_KEY = process.env.API_SECRET;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}`;

  try {
    const { data } = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    const { status, statusText, headers, data } = err.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
