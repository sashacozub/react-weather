export const capitalizeString = (string) => {
  const dividedWords = string.split(' ');
  const capitalized = [];
  for (let word of dividedWords) {
    capitalized.push(word.charAt(0).toUpperCase() + word.substring(1));
  }
  return capitalized.join(' ');
};

// Convert the default Kelvin temperature to metric or imperial system
export const convertTemperature = (temp, isMetric) => {
  if (isMetric) {
    return (temp - 273.15).toFixed(1); // Celcius
  } else {
    return (((temp - 273.15) * 9) / 5 + 32).toFixed(1); // Fahrenheit
  }
};

export const temperatureColors = (temperature) => {
  if (temperature < 291.15) {
    // Blue color if temperature is lower than 18C / 64.4F
    return { color: 'rgb(99, 189, 241)' };
  } else {
    return { color: 'rgb(241, 151, 99)' };
  }
};
