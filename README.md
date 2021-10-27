# React Weather App

## Project's aim

The aim of this project was to practice writing code in ReactJS and external API. I wanted to strenghen my practical skills in creating React Hook components and passing around the data from weather API. Also, it was important for me to be able to hide my API key from OpenWeatherAPI so I don't publish it to public, but keep it a secret in the environment.

---

## App description

It is a simple weather app where you can search for a city and get the current weather at that location: temperature, how-it-actually-feels-temperature, weather icon and a short description. There is also a weekly forecast for next 7 days from current day. You can also switch the temperature between Celcius and Fahrenheit.

At the moment the app does not ask for user's geolocation, but instead loads in Oslo, Norway by default, which is my current location.

The API key used in this app is hidden in the app's environment and everything is handled by Netlify functions on build. There is an _.env_ file in the root folder of the app which is hidden from commits to GitHub. I have created an example file called _.env.example_ which you can use to put your personal API key if you clone the repository and want to use it as well. In this case sign up at [OpenWeather](https://home.openweathermap.org/users/sign_up), rename _.env.example_ to _.env_ and insert your key instead of `your-api-key-here` inside the file. Save and you are good to go! The _.gitignore_ already contains _.env_ so it should be automatically ignored on commit.

**Do not share your personal API keys!**

---

## Technologies used:

- ReactJS with Hooks
- [OpenWeather API](https://openweathermap.org/)

---

## App [Preview](https://react-weather-sc.netlify.app/)

![Project Preview](https://i.imgur.com/cRsk2bt.png)
