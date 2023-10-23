import React = require("react");
import { useState, useEffect } from "react";

import { Depths } from "@fluentui/react/lib/Theme";

import { WeatherBox } from "./WeatherBox";
import { AppWeatherApiBox } from "./AppWeatherApiBox";
import Title from "./Title";

import { METEO_API_KEY } from "../api/api";

export interface IWeatherData {
  date: Date;
  temperature: number;
  weatherType: WeatherType;
}

export enum WeatherType {
  CLOUDY = "Cloudy",
  SUNNY = "Sunny",
  SNOW = "Snow",
  RAINSNOW = "RainSnow",
  PARTLYCLOUDYDAY = "PartlyCloudyDay",
}

const appLayout: React.CSSProperties = {
  maxWidth: "100%",
  display: "flex",
  justifyItems: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "3rem 1rem",
  border: "1px solid black",
  borderRadius: "0.5rem",
  boxShadow: Depths.depth64,
  borderWidth: "0",
};

const boxesLayout: React.CSSProperties = {
  display: "flex",
};

export interface WeatherPropsData {
  weatherData: IWeatherData[];
}

export const AppWeatherAPI = () => {
  const [weatherForecast, setWeatherForecast] = useState<any[]>([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response =
        await fetch(`https://www.meteosource.com/api/v1/free/point?place_id=prague&sections=all&timezone=UTC&language=en&units=metric&key=${METEO_API_KEY}
    `);

      if (!response.ok) {
        console.log(`Response status is: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      return setWeatherForecast(data.daily.data);
    };

    fetchWeatherData();
  }, []);

  return (
    <div style={appLayout}>
      <Title />
      <AppWeatherApiBox weatherApiData={weatherForecast} />
    </div>
  );
};

export const App: React.FC<WeatherPropsData> = ({ weatherData }) => {
  return (
    <div style={appLayout}>
      <Title />
      <div style={boxesLayout}>
        <WeatherBox weatherData={weatherData} />
      </div>
    </div>
  );
};
