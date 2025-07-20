import React from "react";

const Weather = () => {
  return (
    <div className="container p-5 text-center mt-5">
      <h1 className="mb-4">Weather App</h1>

      <img
        src="media/weatherApp.png" // make sure this path matches your actual image file
        style={{ width: "50rem", borderRadius: "1rem", marginTop: "2rem" }}
        alt="Weather App Screenshot"
      />

      <p
        style={{
          marginTop: "4rem",
          fontSize: "1.1rem",
          lineHeight: "2rem",
        }}
      >
        The Weather App is a responsive and lightweight web application built
        using <br />
        <strong>React.js</strong> that allows users to check the current weather
        of any city <br />
        in real time. It fetches live weather data from the OpenWeatherMap API
        and displays <br />
        temperature, humidity, wind speed, and weather conditions. The app
        features a clean <br />
        user interface with a search bar and location-based weather
        functionality. It is ideal <br />
        for quick weather updates and is deployed online for instant access.
      </p>

      {/* <p style={{ fontFamily: "Georgia", fontSize: "1.2rem" }}>Live Link :- </p> */}
      {/* <a
        href="https://your-weather-app-link.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://your-weather-app-link.com
      </a> */}
    </div>
  );
};

export default Weather;
