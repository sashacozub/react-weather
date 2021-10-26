# React Weather App

<!-- Here is the [live version](https://www.---.com/) of it. -->

## Project's aim

The aim of this project was to practice writing code in ReactJS and external API. I wanted to strenghen my practical skills in creating React Hook components and passing around the data from weather API.

---

## App description

It is a simple weather app where you can search for a city and get the current weather at that location: temperature, how-it-actually-feels-temperature, weather icon and a short description. There is also a weekly forecast for next 7 days from current day. You can also switch the temperature between Celcius and Fahrenheit.

The API key used in this app is hidden in a separate file and is ignored when commited in GIT. If you need clone the repository, please sign up at [OpenWeather](https://home.openweathermap.org/users/sign_up) and paste your personal key in _./src/utils/Weather.js_ on line 3 `const API_KEY = 'your-api-key'`. Also, you may delete the first line in the same file which just imports my api key from a separate file. Alternatively you may also create a separate file in the _./src/utils/_

_Note: do not forget to export the API_KEY constant as a named export and hide the file in .gitignore_

**Do not share your personal API keys!**

---

## Technologies used:

- ReactJS with Hooks
- [OpenWeather API](https://openweathermap.org/)

---

## App Preview

![Project Preview](https://i.imgur.com/cRsk2bt.png)
